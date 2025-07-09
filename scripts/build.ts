import * as esbuild from "esbuild";
import path from "node:path";

const main = async () => {
  const context = await esbuild.context({
    entryPoints: [path.join("src", "index.ts")],
    outdir: "dist",
    packages: "external",
    platform: "neutral",
    format: "esm",
    minify: true,
    sourcemap: true,
    bundle: true,
  });

  await context.rebuild();

  await context.dispose();
};

void main();
