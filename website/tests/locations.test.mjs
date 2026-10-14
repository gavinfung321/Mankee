import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("location links appear only when the URL is confirmed", async () => {
  const { confirmed, pending } = await import("../src/content/types.ts");
  const { locations, visibleLocationLinks } =
    await import("../src/content/zh-HK/locations.ts");
  const component = readFileSync(
    join(root, "src/components/home/Locations.tsx"),
    "utf8",
  );
  const footer = readFileSync(
    join(root, "src/components/shell/Footer.tsx"),
    "utf8",
  );

  assert.deepEqual(visibleLocationLinks(locations[0]), [
    {
      label: "地圖",
      url: "https://share.google/otLrnzLumqWZaN8mg",
    },
    {
      label: "Foodpanda",
      url: "https://www.foodpanda.hk/zh/chain/cu0nv/man-kee-cart-noodle",
    },
  ]);
  assert.deepEqual(visibleLocationLinks(locations[1]), [
    {
      label: "地圖",
      url: "https://maps.app.goo.gl/acZKwec46s7T8JsB9",
    },
    {
      label: "Foodpanda",
      url: "https://www.foodpanda.hk/zh/restaurant/anos/man-kee-cart-noodle-harbour-city-anos",
    },
  ]);

  const hidden = {
    mapUrl: pending(),
    foodpanda: pending(),
    keeta: pending(),
  };
  assert.deepEqual(visibleLocationLinks(hidden), []);

  assert.deepEqual(
    visibleLocationLinks({
      mapUrl: confirmed("https://example.com/map"),
      foodpanda: pending(),
      keeta: confirmed("https://example.com/keeta"),
    }),
    [
      { label: "地圖", url: "https://example.com/map" },
      { label: "Keeta", url: "https://example.com/keeta" },
    ],
  );

  assert.match(component, /visibleLocationLinks/);
  assert.match(component, /location\.phone/);
  assert.doesNotMatch(component, /lastOrder|holidays|<iframe/);
  assert.doesNotMatch(footer, /福榮街|11:00|Foodpanda|Keeta|foodpanda\.hk/);
  assert.equal(existsSync(join(root, "src/pages/locations")), false);
  assert.doesNotMatch(
    readFileSync(join(root, "src/content/zh-HK/locations.ts"), "utf8"),
    /11:00–23:00|11:00-23:00/,
  );
});
