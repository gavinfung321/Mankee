import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("metadata and structured data stay on confirmed facts", async () => {
  const { publicValue } = await import("../src/lib/facts.ts");
  const { site } = await import("../src/content/zh-HK/site.ts");
  const { homeDescription, menuDescription, restaurantJsonLd } =
    await import("../src/lib/seo.ts");
  const data = restaurantJsonLd();
  const json = JSON.stringify(data);
  const graph = data["@graph"];
  const seo = readFileSync(join(root, "src/lib/seo.ts"), "utf8");
  const layout = readFileSync(join(root, "src/app/layout.tsx"), "utf8");

  assert.equal(publicValue(site.origin), undefined);
  assert.equal(graph.length, 2);
  assert.equal(graph[0].name, "文記車仔麵");
  assert.equal(graph[1].name, "文記車仔麵");
  assert.match(json, /深水埗福榮街109、115、121及123C號/);
  assert.match(
    json,
    /尖沙咀廣東道3-27號海港城港威商場4樓4102號舖11號檔 Food Atlas/,
  );
  assert.match(json, /"closes":"04:00"/);
  assert.match(json, /"closes":"21:00"/);
  assert.match(json, /\(\+852\) 9059-5104/);
  assert.match(json, /share\.google\/otLrnzLumqWZaN8mg/);
  assert.equal(json.includes('"url"'), false);
  assert.doesNotMatch(
    json,
    /foodpanda|keeta|11:00–23:00|mankeecartnoodles|Simon Wong/i,
  );
  assert.match(homeDescription() ?? "", /每日 11:00–04:00/);
  assert.match(menuDescription() ?? "", /湯 → 麵 → 餸/);
  assert.match(seo, /locale: "zh_HK"/);
  assert.match(seo, /mankee-hero-link-preview-v1\.png/);
  assert.match(seo, /summary_large_image/);
  assert.doesNotMatch(seo, /metadataBase|mankeecartnoodles/);
  assert.match(layout, /RestaurantJsonLd/);
  assert.doesNotMatch(layout, /metadataBase|canonical/);
});
