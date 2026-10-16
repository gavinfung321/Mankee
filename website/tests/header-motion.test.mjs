import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("the masthead opens cinematically without blocking the page", () => {
  const header = readFileSync(
    join(root, "src/components/shell/Header.tsx"),
    "utf8",
  );
  const css = readFileSync(join(root, "src/app/globals.css"), "utf8");

  assert.match(header, /mankee-opening-credits-v2-seen/);
  assert.match(header, /dataset\.mankeeIntro/);
  assert.match(header, /--header-progress/);
  assert.doesNotMatch(header, /masthead-light/);
  assert.match(css, /header\.site-header::before/);
  assert.match(css, /@keyframes masthead-credit-in/);
  assert.match(css, /@keyframes masthead-rule-in/);
  assert.match(css, /@keyframes masthead-cta-in/);
  assert.match(css, /masthead-quick-in 0\.5s/);
  assert.doesNotMatch(css, /@keyframes masthead-seal-in/);
  assert.doesNotMatch(css, /@keyframes masthead-stamp-in/);
  assert.doesNotMatch(css, /@keyframes masthead-metal-pass/);
  assert.match(css, /header\.site-header\.is-hero \.nav-links/);
  assert.match(
    css,
    /@media \(prefers-reduced-motion: reduce\)[\s\S]*header\.site-header/,
  );
  assert.doesNotMatch(css, /header\.site-header\s*\{[^}]*pointer-events:\s*none/);
});
