import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("homepage renders the static sections from confirmed records", () => {
  const page = readFileSync(join(root, "src/app/page.tsx"), "utf8");
  const order = [
    "<Hero",
    "<HowToOrder",
    "<TopTen",
    "<OrderSlip",
    "<Founder",
    "<Recognition",
    "<PressRail",
    "<Locations",
  ];
  let cursor = -1;
  for (const marker of order) {
    const index = page.indexOf(marker);
    assert.ok(index > cursor, marker);
    cursor = index;
  }
  assert.doesNotMatch(page, /specimen|client:|HeroScrub|video|SensoryTrio/);

  const hero = read("Hero.tsx");
  const founder = read("Founder.tsx");
  const recognition = read("Recognition.tsx");
  const locations = read("Locations.tsx");
  const slip = read("OrderSlip.tsx");
  const topTen = read("TopTen.tsx");
  const homeFiles = [
    hero,
    read("HowToOrder.tsx"),
    topTen,
    slip,
    founder,
    recognition,
    read("PressRail.tsx"),
    locations,
  ].join("\n");

  assert.match(hero, /<h1>/);
  assert.equal(homeFiles.match(/<h1>/g)?.length ?? 0, 1);
  assert.match(topTen, /id=\{section\.anchor\}/);
  assert.match(founder, /id=\{section\.anchor\}/);
  assert.match(locations, /id=\{section\.anchor\}/);
  assert.match(recognition, /href=\{michelinGuide\.url\}/);
  assert.match(slip, /<p className="order-pass-line">/);
  assert.doesNotMatch(slip, /<h2/);
  assert.match(founder, /englishName/);
  assert.match(founder, /portrait/);
  assert.match(founder, /quotation/);
  assert.doesNotMatch(locations, /foodpanda|keeta|mapUrl|lastOrder|holidays/);
  assert.doesNotMatch(
    homeFiles,
    /Simon Wong|Foodpanda|Keeta|11:00–23:00|\$\d|specimen/,
  );
});

function read(name) {
  return readFileSync(join(root, "src/components/home", name), "utf8");
}
