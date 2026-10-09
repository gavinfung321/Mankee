import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("section entrances stay off the hero, the top ten, and reduced motion", () => {
  const css = readFileSync(join(root, "src/styles/home.css"), "utf8");
  const hero = readFileSync(join(root, "src/components/home/Hero.tsx"), "utf8");
  const slip = readFileSync(
    join(root, "src/components/home/OrderSlip.tsx"),
    "utf8",
  );

  assert.match(css, /prefers-reduced-motion:\s*no-preference/);
  assert.match(css, /animation-duration:\s*auto/);
  assert.match(css, /animation-timeline:\s*view\(\)/);
  assert.match(css, /\.home-section:not\(#top-ten\)/);
  assert.match(css, /translateY\(var\(--space-12\)\)/);
  assert.doesNotMatch(css, /parallax|prototype/);
  assert.doesNotMatch(hero, /section-enter|animation-timeline/);
  assert.doesNotMatch(slip, /section-enter|animation/);
});
