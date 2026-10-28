import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("the homepage top ten uses preview selection and a large dish stage", () => {
  const topTen = readFileSync(join(root, "src/components/home/TopTen.tsx"), "utf8");
  const menu = readFileSync(
    join(root, "src/components/menu/OrderingGuide.tsx"),
    "utf8",
  );
  const css = readFileSync(join(root, "src/styles/home.css"), "utf8");

  assert.equal(existsSync(join(root, "src/islands/TopTenPreview.ts")), false);
  assert.doesNotMatch(topTen, /role="checkbox"/);
  assert.doesNotMatch(topTen, /aria-checked/);
  assert.match(topTen, /aria-current=\{current \? "true" : undefined\}/);
  assert.match(topTen, /data-dish-name=\{dish\.name\}/);
  assert.match(topTen, /data-dish-id=\{dish\.order\}/);
  assert.match(topTen, /<button/);
  assert.match(topTen, /dish-preview/);
  assert.match(topTen, /點選配料，預覽大圖/);
  assert.doesNotMatch(topTen, /已揀|加入|selectedNames|selectedIds/);
  assert.doesNotMatch(topTen, /<details|<summary>|attachTopTenPreview|top-ten-feature/);
  assert.doesNotMatch(topTen, /assets\/references|assets\/sourced|\$\d/);
  assert.doesNotMatch(topTen, /top-ten-senses|dish-preview-note/);
  assert.doesNotMatch(topTen, /name="top-ten"/);
  assert.doesNotMatch(topTen, /order-slip-card|top-ten-slip|slipDone|落單紙|slip-toppings/);
  assert.doesNotMatch(topTen, /slipDone \? "完成" : "落單"/);
  assert.doesNotMatch(css, /aria-checked="true"/);
  assert.doesNotMatch(css, /top-ten-action|top-ten-tick|top-ten-plus|top-ten-count/);
  assert.match(css, /#top-ten \.dish-preview-frame \{[^}]*height: 240px/);
  assert.match(css, /clamp\(320px, 42vh, 380px\)/);
  assert.match(css, /clamp\(360px, 44vh, 440px\)/);
  assert.doesNotMatch(css, /min\(56vh, 520px\)/);
  assert.match(css, /#top-ten \.top-ten-stage[\s\S]*position:\s*static/);
  assert.doesNotMatch(css, /#top-ten \.top-ten-stage[\s\S]*position:\s*sticky/);
  assert.match(
    css,
    /@media \(hover: hover\) and \(pointer: fine\) \{\s*#top-ten \.top-ten-dish:hover/,
  );
  assert.match(css, /repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(css, /min-height: 72px/);
  assert.doesNotMatch(css, /top-ten-tick-in|\.dish-preview::before/);
  assert.match(topTen, /showPreview\(dish\.order, true\)/);
  assert.match(topTen, /showPreview\(dishes\[index\]\.order, false\)/);
  assert.match(topTen, /rootMargin: "0px 0px -24% 0px"/);
  assert.doesNotMatch(css, /#top-ten \.top-ten-slip/);
  assert.match(menu, /top-ten-list/);
  assert.doesNotMatch(menu, /<details|TopTenPreview|top-ten-feature/);
  assert.doesNotMatch(topTen, /\[open\] summary|slipName|花膠/);
});
