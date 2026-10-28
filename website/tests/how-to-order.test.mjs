import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const component = readFileSync(
  join(root, "src/components/home/HowToOrder.tsx"),
  "utf8",
);
const css = readFileSync(join(root, "src/styles/home.css"), "utf8");

test("How to Order keeps approved copy and the 湯 → 麵 → 餸 flow", () => {
  assert.match(component, /文記落單體驗/);
  assert.match(component, /你的一碗，由你決定/);
  assert.match(
    component,
    /望住一格格餸，逐樣自己揀，就是車仔麵的舊式點法。/,
  );
  assert.match(component, /section\.steps/);
  assert.match(component, /order-theatre/);
  assert.match(component, /order-theatre-legend/);
  assert.match(component, /order-intro-lead/);
  assert.match(component, /order-intro-copy/);
  assert.match(component, /counter-trays-order\.webp/);
  assert.match(
    readFileSync(join(root, "src/content/zh-HK/menu.ts"), "utf8"),
    /六十二款，可以逐樣加/,
  );
  assert.match(component, /IntersectionObserver/);
  assert.match(component, /rootMargin:\s*"0px 0px -28% 0px"/);
  assert.match(component, /threshold:\s*0\.1/);
  assert.match(component, /intersectionRatio\s*<\s*0\.1/);
  assert.doesNotMatch(
    component,
    /order-theatre-slip|slip-stamp|framer-motion|useScroll/,
  );
  assert.doesNotMatch(component, /glass|three\.js|@react-three/i);
});

test("the ink legend remains readable without sticky scrub theatre", () => {
  assert.match(css, /\.order-theatre-legend/);
  assert.match(
    css,
    /\.order-theatre-legend \{[^}]*background:\s*color-mix\(in srgb, var\(--cinema\) 70%, var\(--lounge-raised\)\)/,
  );
  assert.match(css, /\.order-counter img \{[^}]*height:\s*210px/);
  assert.match(
    css,
    /@media \(min-width: 48rem\) \{\s*\.order-counter img \{[^}]*height:\s*280px/,
  );
  assert.match(css, /\.order-counter img \{[^}]*height:\s*340px/);
  assert.match(
    css,
    /\.order-section \.menu-disclaimer \{[^}]*color:\s*color-mix\(in srgb, var\(--ink\) 82%, transparent\)/,
  );
  assert.match(
    css,
    /\.order-theatre-legend li p,\s*\.order-theatre-legend li p span \{[^}]*font-family:\s*var\(--font-text\)/,
  );
  assert.doesNotMatch(css, /\.order-theatre::before|\.order-theatre::after/);
  assert.match(css, /grid-template-columns: repeat\(3, minmax\(0, 1fr\)\)/);
  assert.match(css, /\.order-theatre \{[^}]*gap:\s*0/);
  assert.doesNotMatch(css, /\.order-theatre-stage \{[^}]*position:\s*sticky/);
  assert.doesNotMatch(css, /\.order-section[^\{]*\{[^}]*position:\s*sticky/);
  assert.doesNotMatch(css, /backdrop-filter|glassmorphism/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.doesNotMatch(css, /order-veil-away|order-counter-veil/);
  assert.match(css, /order-rise 420ms/);
  assert.match(css, /order-rise 420ms 60ms/);
  assert.match(css, /order-rise 420ms 180ms/);
  assert.match(css, /order-rise-soft 340ms/);
  assert.match(css, /li:nth-child\(1\) \{[^}]*animation-delay:\s*460ms/);
  assert.match(css, /li:nth-child\(2\) \{[^}]*animation-delay:\s*520ms/);
  assert.match(css, /li:nth-child\(3\) \{[^}]*animation-delay:\s*580ms/);
  assert.match(css, /var\(--ink\) 82%/);
  assert.match(css, /var\(--cream\) 84%/);
});
