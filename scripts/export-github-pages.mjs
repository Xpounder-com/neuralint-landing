import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.SITE_EXPORT_URL ?? "http://localhost:3001";
const outputDir = path.resolve("static-site");
const routes = [
  { source: "/", output: "index.html" },
  { source: "/research", output: "research/index.html" },
  { source: "/people/mehrdad", output: "people/mehrdad/index.html" },
];

function makeStatic(html) {
  const documentEnd = html.indexOf("</html>");
  const completeDocument =
    documentEnd === -1 ? html : html.slice(0, documentEnd + "</html>".length);

  return completeDocument
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?>/gi, "")
    .replace(
      /<link rel="stylesheet" href="\/(?:app\/globals\.css|assets\/[^"]+\.css)"[^>]*\/?>/i,
      '<link rel="stylesheet" href="/assets/site.css"/>',
    )
    .replace(/\sdata-rsc-[\w-]+="[^"]*"/gi, "");
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const route of routes) {
  const response = await fetch(new URL(route.source, baseUrl));
  if (!response.ok) {
    throw new Error(`Unable to export ${route.source}: ${response.status}`);
  }

  const destination = path.join(outputDir, route.output);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, makeStatic(await response.text()));
}

await mkdir(path.join(outputDir, "assets"), { recursive: true });
await cp(
  "dist/client/assets/_vinext_fonts",
  path.join(outputDir, "assets/_vinext_fonts"),
  { recursive: true },
);
await cp("public/projects", path.join(outputDir, "projects"), {
  recursive: true,
});

const compiledAssets = await readdir("dist/client/assets");
const cssFile = compiledAssets.find((file) => file.endsWith(".css"));

if (!cssFile) {
  throw new Error("Unable to find the compiled site stylesheet.");
}

await cp(
  path.join("dist/client/assets", cssFile),
  path.join(outputDir, "assets/site.css"),
);

for (const asset of ["favicon.png", "favicon.svg", "og.webp"]) {
  await cp(path.join("public", asset), path.join(outputDir, asset));
}

await writeFile(path.join(outputDir, ".nojekyll"), "");
await writeFile(path.join(outputDir, "CNAME"), "neuralint.io\n");
await cp(path.join(outputDir, "index.html"), path.join(outputDir, "404.html"));

console.log(`Exported ${routes.length} routes to ${outputDir}`);
