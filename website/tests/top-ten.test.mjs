import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("the homepage top ten can be featured without hiding the names", () => {
  const hero = readFileSync(
    join(root, "src/components/home/TopTen.astro"),
    "utf8",
  );
  const preview = readFileSync(
    join(root, "src/islands/TopTenPreview.ts"),
    "utf8",
  );
  const menu = readFileSync(
    join(root, "src/components/menu/OrderingGuide.astro"),
    "utf8",
  );
  const css = readFileSync(join(root, "src/styles/home.css"), "utf8");

  assert.match(hero, /class="top-ten-feature"/);
  assert.match(hero, /dishes\[0\]\.name/);
  assert.match(hero, /<details/);
  assert.match(hero, /<summary>/);
  assert.match(hero, /attachTopTenPreview/);
  assert.doesNotMatch(hero, /<img|assets\/references|厚身吸湯/);
  assert.match(preview, /mouseenter/);
  assert.match(preview, /focusin/);
  assert.match(preview, /min-width: 48rem/);
  assert.match(css, /top-ten-dish\[open\] summary/);
  assert.match(menu, /class="top-ten-list"/);
  assert.doesNotMatch(menu, /<details|TopTenPreview|top-ten-feature/);
});
