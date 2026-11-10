import { readFile } from "node:fs/promises";

// Run after deploying substantive changes. Pass only the changed canonical URLs.
const urls = [...new Set(process.argv.slice(2))];
if (!urls.length) throw new Error("Pass the changed https://neuralint.io/ URLs as arguments.");
for (const url of urls) {
  const parsed = new URL(url);
  if (parsed.origin !== "https://neuralint.io" || parsed.search || parsed.hash) {
    throw new Error("Expected a canonical NeuralInt URL: " + url);
  }
}
const config = JSON.parse(await readFile(new URL("./discovery-config.json", import.meta.url), "utf8"));
const key = config.indexNowKey;
if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw new Error("Invalid IndexNow public key.");
const keyLocation = "https://neuralint.io/" + key + ".txt";
const verification = await fetch(keyLocation);
if (!verification.ok || (await verification.text()).trim() !== key) {
  throw new Error("The public host-verification file is not deployed yet.");
}
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: "neuralint.io", key, keyLocation, urlList: urls }),
});
if (![200, 202].includes(response.status)) {
  throw new Error("IndexNow response " + response.status + ": " + (await response.text()).slice(0,500));
}
console.log(JSON.stringify({
  notifiedAt: new Date().toISOString(), status: response.status, urlCount: urls.length,
  result: response.status === 200 ? "notification-received" : "key-validation-pending",
  note: "Receipt does not establish crawling, indexing or ranking.",
}, null, 2));
