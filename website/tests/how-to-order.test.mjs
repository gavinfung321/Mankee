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
  assert.match(component, /跟住條隊向前，就是香港車仔麵的點法。/);
  assert.match(component, /section\.steps/);
  assert.match(component, /order-theatre/);
  assert.match(component, /order-theatre-slip/);
  assert.match(component, /order-theatre-legend/);
  assert.match(component, /slip-stamp/);
  assert.match(component, /完成/);
  assert.doesNotMatch(component, /glass|three\.js|@react-three/i);
});

test("Counter Theatre uses Framer Motion and respects reduced motion", () => {
  assert.match(component, /"use client"/);
  assert.match(component, /from "framer-motion"/);
  assert.match(component, /useReducedMotion/);
  assert.match(component, /useScroll/);
  assert.match(component, /prefers-reduced-motion|reduceMotion/);
  assert.match(css, /\.order-counter/);
  assert.match(css, /\.order-theatre-slip/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /\.order-theatre \{\s*[^}]*min-height:\s*0;/);
  assert.match(
    css,
    /@media \(min-width: 64rem\) \{[\s\S]*?\.order-theatre-stage \{[^}]*position:\s*sticky/,
  );
});

test("the ink legend remains readable without animation", () => {
  assert.match(css, /\.order-theatre-legend/);
  assert.match(css, /grid-template-columns: repeat\(3, minmax\(0, 1fr\)\)/);
  assert.doesNotMatch(css, /backdrop-filter|glassmorphism/);
});
