// Probes candidate luxury stores for a public product feed and saves
// a compact snapshot of what each one carries to data/sources/.
import { mkdir, writeFile } from "node:fs/promises";

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36";
const domains = process.argv.slice(2);

async function getJson(url) {
  const res = await fetch(url, { headers: { "user-agent": UA, accept: "application/json" }, redirect: "follow" });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const type = res.headers.get("content-type") || "";
  if (!type.includes("json")) throw new Error("not json: " + type);
  return res.json();
}

await mkdir("data/sources", { recursive: true });
const summary = [];
for (const domain of domains) {
  const products = [];
  try {
    for (let page = 1; page <= 4; page++) {
      const data = await getJson(`https://${domain}/products.json?limit=250&page=${page}`);
      if (!data.products?.length) break;
      products.push(...data.products);
    }
    const slim = products.map((p) => ({
      title: p.title,
      vendor: p.vendor,
      type: p.product_type,
      handle: p.handle,
      tags: (p.tags || []).slice(0, 12),
      price: p.variants?.[0]?.price,
      available: p.variants?.some((v) => v.available),
      images: (p.images || []).slice(0, 4).map((i) => ({ src: i.src, w: i.width, h: i.height })),
    }));
    await writeFile(`data/sources/${domain}.json`, JSON.stringify(slim, null, 1));
    summary.push({ domain, ok: true, count: slim.length, vendors: [...new Set(slim.map((p) => p.vendor))].slice(0, 40) });
  } catch (e) {
    summary.push({ domain, ok: false, error: String(e.message || e) });
  }
  console.log(JSON.stringify(summary.at(-1)));
}
await writeFile("data/sources/_summary.json", JSON.stringify(summary, null, 1));
