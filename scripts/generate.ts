import * as fs from "node:fs/promises";
import * as changeCase from "change-case";
import * as yaml from "yaml";
import path from "node:path";
import openapiTS, { astToString } from "openapi-typescript";

interface ParsedSchema {
  servers: {
    url: string;
    description: string;
  }[];
  security?: Record<string, unknown[]>[];
}

interface Schema {
  filePath: string;
  content: string;
  name: string;
  version: string;
  types: {
    fileName: string;
    fileNameWithExtension: string;
    pathsExport: string;
  };
}

const outputDirPath = path.resolve(import.meta.dirname, "..", "src");

const apiPath = path.join(outputDirPath, "api.ts");

const typesDirPath = path.join(outputDirPath, "types");
const typesIndexPath = path.join(typesDirPath, "index.ts");

const schemasDirPath = path.join(import.meta.dirname, "..", "openapi");

const generateTypeFile = async (schema: Schema) => {
  const ast = await openapiTS(schema.content);
  const content = astToString(ast);
  const outputPath = path.join(
    typesDirPath,
    schema.types.fileNameWithExtension,
  );
  await fs.writeFile(outputPath, content, "utf-8");
};

const generateTypes = async () => {
  await fs.mkdir(typesDirPath, { recursive: true });
  const entries = await fs.readdir(schemasDirPath);

  const schemas: Schema[] = [];
  for (const entry of entries) {
    const match = /^api-([a-z_]+)-v((?:\d+-)*\d+[a-z]?).yaml$/.exec(entry);
    if (!match) {
      console.warn("Invalid entry:", entry);
      return;
    }
    const [, name, version] = match;
    const filePath = path.join(schemasDirPath, entry);
    const content = await fs.readFile(filePath, "utf-8");
    const typesFileName = changeCase.kebabCase(name);
    schemas.push({
      filePath,
      name,
      content,
      version,
      types: {
        fileName: typesFileName,
        fileNameWithExtension: `${typesFileName}.ts`,
        pathsExport: `${changeCase.pascalCase(name)}Paths`,
      },
    });
  }

  let typesIndexContent = "";
  let indexContent = `import * as types from "./types";
import createClient, { ClientOptions } from "openapi-fetch";
  `;
  for (const schema of schemas) {
    await generateTypeFile(schema);
    const parsed = yaml.parse(schema.content) as ParsedSchema;
    typesIndexContent += `export { paths as ${schema.types.pathsExport} } from "./${schema.types.fileName}"\n`;

    // Avoid having both prod and production
    for (const server of parsed.servers) {
      if (!server.description.toLowerCase().startsWith("prod")) continue;
      server.description = "Production";
    }

    let defaultServer =
      parsed.servers.find((s) => s.description.startsWith("Prod")) ??
      parsed.servers[0];

    indexContent += `
export const ${changeCase.camelCase(schema.name)}Api = {
  version: "${schema.version}",
  servers: {${parsed.servers.map(({ description, url }) => `["${description}"]: "${url}"`).join(", ")}},
  security: [${Object.values(parsed.security ?? {})
    .flatMap((o) => {
      return Object.keys(o).map((k) => `"${k}"`);
    })
    .join(", ")}],
  createClient({
    baseUrl = "${defaultServer.url}",
    ...options
  }: ClientOptions = {}) {
    return createClient<types.${schema.types.pathsExport}>({...options, baseUrl});
  }
};
`;
  }

  await fs.writeFile(typesIndexPath, typesIndexContent);

  await fs.writeFile(apiPath, indexContent);
};

const main = async () => {
  await generateTypes();
};

void main();
