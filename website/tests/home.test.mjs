import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("homepage renders the eight static sections from confirmed records", () => {
  const page = readFileSync(join(root, "src/pages/index.astro"), "utf8");
  const order = [
    "<Hero",
    "<SensoryTrio",
    "<HowToOrder",
    "<TopTen",
    "<OrderSlip",
    "<Founder",
    "<Recognition",
    "<Locations",
  ];
  let cursor = -1;
  for (const marker of order) {
    const index = page.indexOf(marker);
    assert.ok(index > cursor, marker);
    cursor = index;
  }
  assert.doesNotMatch(page, /specimen|client:|HeroScrub|video/);

  const hero = read("Hero.astro");
  const founder = read("Founder.astro");
  const recognition = read("Recognition.astro");
  const locations = read("Locations.astro");
  const slip = read("OrderSlip.astro");
  const topTen = read("TopTen.astro");
  const homeFiles = [
    hero,
    read("SensoryTrio.astro"),
    read("HowToOrder.astro"),
    topTen,
    slip,
    founder,
    recognition,
    locations,
  ].join("\n");

  assert.match(hero, /<h1>/);
  assert.equal(homeFiles.match(/<h1>/g)?.length ?? 0, 1);
  assert.match(topTen, /id=\{section\.anchor\}/);
  assert.match(founder, /id=\{section\.anchor\}/);
  assert.match(locations, /id=\{section\.anchor\}/);
  assert.match(recognition, /href="\/press\/"/);
  assert.match(slip, /<hr/);
  assert.doesNotMatch(slip, /<p|<h2/);
  assert.doesNotMatch(founder, /englishName|quotation|portrait/);
  assert.doesNotMatch(
    locations,
    /foodpanda|keeta|mapUrl|phone|lastOrder|holidays/,
  );
  assert.doesNotMatch(
    homeFiles,
    /Simon Wong|Foodpanda|Keeta|11:00–23:00|\$\d|specimen/,
  );
});

function read(name) {
  return readFileSync(join(root, "src/components/home", name), "utf8");
}
