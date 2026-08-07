import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.SITE_EXPORT_URL ?? "http://localhost:3001";
const outputDir = path.resolve("static-site");
const routes = [
  { source: "/", output: "index.html" },
  { source: "/research", output: "research/index.html" },
  { source: "/people/mehrdad", output: "people/mehrdad/index.html" },
  { source: "/apps", output: "apps/index.html" },
  { source: "/apps/terms", output: "apps/terms/index.html" },
  {
    source: "/apps/trailhead/privacy",
    output: "apps/trailhead/privacy/index.html",
  },
  {
    source: "/apps/trailhead/support",
    output: "apps/trailhead/support/index.html",
  },
  {
    source: "/apps/trailhead/review",
    output: "apps/trailhead/review/index.html",
  },
  { source: "/apps/lady/privacy", output: "apps/lady/privacy/index.html" },
  { source: "/apps/lady/support", output: "apps/lady/support/index.html" },
  { source: "/apps/lady/review", output: "apps/lady/review/index.html" },
];

const staticThemeRuntime = `<script data-theme-runtime>
(function () {
  function applyTheme(theme) {
    var isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    document.querySelectorAll(".theme-toggle").forEach(function (button) {
      var nextTheme = isDark ? "light" : "dark";
      button.setAttribute("aria-label", "Switch to " + nextTheme + " theme");
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("title", "Switch to " + nextTheme + " theme");

      var icon = button.querySelector(".theme-toggle-icon");
      var label = button.querySelector(".theme-toggle-label");
      if (icon) icon.textContent = isDark ? "☀" : "☾";
      if (label) label.textContent = isDark ? "Light" : "Dark";
    });
  }

  var theme = document.documentElement.dataset.theme;
  if (theme !== "light" && theme !== "dark") {
    theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyTheme(theme);

  document.addEventListener("click", function (event) {
    var button = event.target.closest(".theme-toggle");
    if (!button) return;

    var nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("nil-theme", nextTheme);
    applyTheme(nextTheme);
  });
})();
</script>`;

function makeStatic(html) {
  const documentEnd = html.indexOf("</html>");
  const completeDocument =
    documentEnd === -1 ? html : html.slice(0, documentEnd + "</html>".length);

  return completeDocument
    .replace(
      /<script\b(?![^>]*data-theme-bootstrap)[^>]*>[\s\S]*?<\/script>/gi,
      "",
    )
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?>/gi, "")
    .replace(
      /<link rel="stylesheet" href="\/(?:app\/globals\.css|assets\/[^"]+\.css)"[^>]*\/?>/i,
      '<link rel="stylesheet" href="/assets/site.css"/>',
    )
    .replace(/\sdata-rsc-[\w-]+="[^"]*"/gi, "")
    .replace("</body>", `${staticThemeRuntime}</body>`);
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

for (const asset of [
  "favicon.png",
  "favicon.svg",
  "og.webp",
  "mehrdad-zaker-headshot.jpeg",
]) {
  await cp(path.join("public", asset), path.join(outputDir, asset));
}

await writeFile(path.join(outputDir, ".nojekyll"), "");
await writeFile(path.join(outputDir, "CNAME"), "neuralint.io\n");
await cp(path.join(outputDir, "index.html"), path.join(outputDir, "404.html"));

console.log(`Exported ${routes.length} routes to ${outputDir}`);
