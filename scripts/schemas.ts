import * as cheerio from "cheerio";
import * as fs from "node:fs";
import path from "node:path";
import { Readable } from "stream";
import { finished } from "stream/promises";

const outputDirPath = path.resolve(import.meta.dirname, "..", "openapi");

const main = async () => {
  await fs.promises.mkdir(outputDirPath, { recursive: true });
  const catalogueResponse = await fetch(
    "https://www.maileva.com/catalogue-api/",
  );
  const catalogueRaw = await catalogueResponse.text();
  const $catalogue = cheerio.load(catalogueRaw);

  const linkElements = $catalogue(
    '.js-cards-api-item a[aria-label="En savoir plus"]',
  ).toArray();

  for (const linkElement of linkElements) {
    const linkNode = $catalogue(linkElement);

    const apiHref = linkNode.attr("href") as string;

    const apiResponse = await fetch(apiHref);
    const apiRaw = await apiResponse.text();
    const $api = cheerio.load(apiRaw);

    const redocElement = $api("redoc").first();
    const schemaHref = redocElement.attr("spec-url") as string;

    const baseName = path.basename(schemaHref);
    const outputPath = path.resolve(outputDirPath, baseName);

    console.log(`Downloading ${schemaHref} to ${outputPath}`);

    const schemaResponse = await fetch(schemaHref);

    const stream = fs.createWriteStream(outputPath);
    await finished(Readable.fromWeb(schemaResponse.body as any).pipe(stream));
  }
};

void main();
