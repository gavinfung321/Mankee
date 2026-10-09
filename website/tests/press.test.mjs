import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("the press index publishes confirmed links only", async () => {
  const { confirmed, pending } = await import("../src/content/types.ts");
  const { pressItems, visiblePressLinks } =
    await import("../src/content/zh-HK/press.ts");
  const page = readFileSync(join(root, "src/pages/press/index.astro"), "utf8");
  const list = readFileSync(
    join(root, "src/components/press/PressList.astro"),
    "utf8",
  );
  const navigation = readFileSync(
    join(root, "src/content/zh-HK/site.ts"),
    "utf8",
  );
  const recognition = readFileSync(
    join(root, "src/components/home/Recognition.astro"),
    "utf8",
  );

  assert.deepEqual(visiblePressLinks(pressItems), []);
  assert.deepEqual(
    visiblePressLinks([
      {
        id: "pending-url",
        publisher: pending(),
        title: confirmed("標題"),
        url: pending(),
        excerpt: pending(),
      },
    ]),
    [],
  );
  assert.deepEqual(
    visiblePressLinks([
      {
        id: "cleared",
        publisher: pending(),
        title: confirmed("標題"),
        url: confirmed("https://example.com/story"),
        excerpt: pending(),
      },
    ]),
    [{ title: "標題", url: "https://example.com/story" }],
  );

  assert.match(page, /title="文記車仔麵｜報道"/);
  assert.match(page, /<PressList/);
  assert.equal(list.match(/<h1>/g)?.length ?? 0, 1);
  assert.match(list, /visiblePressLinks/);
  assert.doesNotMatch(list, /<img|<iframe|<video|embed/);
  assert.doesNotMatch(
    `${page}\n${list}\n${navigation}`,
    /星島頭條|香港01|新假期|LOVIN|TVB/,
  );
  assert.doesNotMatch(navigation, /\/press\//);
  assert.match(recognition, /href="\/press\/"/);
});
