import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("the homepage top ten can be featured without hiding the names", () => {
  const hero = readFileSync(
    join(root, "src/components/home/TopTen.tsx"),
    "utf8",
  );
  const preview = readFileSync(
    join(root, "src/islands/TopTenPreview.ts"),
    "utf8",
  );
  const menu = readFileSync(
    join(root, "src/components/menu/OrderingGuide.tsx"),
    "utf8",
  );
  const css = readFileSync(join(root, "src/styles/home.css"), "utf8");

  assert.match(hero, /top-ten-feature/);
  assert.match(hero, /dishes\[0\]\.name/);
  assert.match(hero, /<details/);
  assert.match(hero, /<summary>/);
  assert.match(hero, /attachTopTenPreview/);
  assert.match(hero, /<img/);
  assert.match(hero, /dish-preview/);
  assert.doesNotMatch(hero, /assets\/references|assets\/sourced|\$\d/);
  assert.match(preview, /mouseenter/);
  assert.match(preview, /focusin/);
  assert.match(preview, /min-width: 48rem/);
  assert.match(css, /top-ten-dish\[open\] summary/);
  assert.match(menu, /top-ten-list/);
  assert.doesNotMatch(menu, /<details|TopTenPreview|top-ten-feature/);
});
