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

  assert.match(header, /mankee-header-intro-seen/);
  assert.match(header, /--header-progress/);
  assert.match(header, /masthead-light/);
  assert.match(css, /@keyframes masthead-seal-in/);
  assert.match(css, /@keyframes masthead-wordmark-in/);
  assert.match(css, /@keyframes masthead-stamp-in/);
  assert.match(css, /header\.site-header\.is-hero \.nav-links/);
  assert.match(
    css,
    /@media \(prefers-reduced-motion: reduce\)[\s\S]*header\.site-header/,
  );
  assert.doesNotMatch(css, /header\.site-header\s*\{[^}]*pointer-events:\s*none/);
});
