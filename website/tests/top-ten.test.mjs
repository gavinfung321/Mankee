import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("the homepage top ten uses checkbox selection and keeps the names visible", () => {
  const topTen = readFileSync(join(root, "src/components/home/TopTen.tsx"), "utf8");
  const menu = readFileSync(
    join(root, "src/components/menu/OrderingGuide.tsx"),
    "utf8",
  );
  const css = readFileSync(join(root, "src/styles/home.css"), "utf8");
  const slip = readFileSync(
    join(root, "src/components/home/OrderSlipFollow.tsx"),
    "utf8",
  );

  assert.equal(existsSync(join(root, "src/islands/TopTenPreview.ts")), false);
  assert.match(topTen, /role="checkbox"/);
  assert.match(topTen, /aria-checked=\{selected\}/);
  assert.match(topTen, /data-dish-name=\{dish\.name\}/);
  assert.match(topTen, /data-dish-id=\{dish\.order\}/);
  assert.match(topTen, /<button/);
  assert.match(topTen, /dish-preview/);
  assert.doesNotMatch(topTen, /<details|<summary>|attachTopTenPreview|top-ten-feature/);
  assert.doesNotMatch(topTen, /assets\/references|assets\/sourced|\$\d/);
  assert.doesNotMatch(topTen, /top-ten-senses|dish-preview-note/);
  assert.doesNotMatch(topTen, /name="top-ten"/);
  assert.match(css, /#top-ten \.top-ten-dish\[aria-checked="true"\]/);
  assert.match(menu, /top-ten-list/);
  assert.doesNotMatch(menu, /<details|TopTenPreview|top-ten-feature/);
  assert.match(topTen, /slip-toppings/);
  assert.match(topTen, /selectedNames\.join\("、"\)/);
  assert.match(topTen, /slipDone \? "完成" : "落單"/);
  assert.match(topTen, /is-complete/);
  assert.match(css, /top-ten-stamp 300ms ease/);
  assert.match(css, /prefers-reduced-motion:\s*reduce[\s\S]*top-ten-slip \.slip-stamp\.is-complete[\s\S]*animation:\s*none/);
  assert.doesNotMatch(topTen, /\[open\] summary|slipName|花膠/);
  assert.match(slip, /#top-ten \[aria-checked='true'\]/);
  assert.match(slip, /dataset\.dishName/);
  assert.doesNotMatch(slip, /\[open\] summary|slipName|花膠/);
});
