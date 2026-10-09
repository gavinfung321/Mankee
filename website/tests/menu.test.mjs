import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("the menu page is an evergreen guide", () => {
  const page = readFileSync(join(root, "src/pages/menu/index.astro"), "utf8");
  const guide = readFileSync(
    join(root, "src/components/menu/OrderingGuide.astro"),
    "utf8",
  );

  assert.match(page, /title="文記車仔麵｜點餐"/);
  assert.match(page, /<OrderingGuide/);
  assert.equal(guide.match(/<h1>/g)?.length ?? 0, 1);
  assert.match(guide, /orderLink\.label/);
  assert.match(guide, /steps\.steps/);
  assert.match(guide, /topTen\.map/);
  assert.match(guide, /site\.disclaimer/);
  assert.doesNotMatch(
    `${page}\n${guide}`,
    /Foodpanda|Keeta|福榮街|11:00|完整|全部|\$\d|粗麵|奶茶/,
  );
});
