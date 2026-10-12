import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("landmarks, focus, and decorative media stay accessible", () => {
  const layout = readFileSync(join(root, "src/app/layout.tsx"), "utf8");
  const header = readFileSync(
    join(root, "src/components/shell/Header.tsx"),
    "utf8",
  );
  const footer = readFileSync(
    join(root, "src/components/shell/Footer.tsx"),
    "utf8",
  );
  const hero = readFileSync(join(root, "src/components/home/Hero.tsx"), "utf8");
  const slip = readFileSync(
    join(root, "src/components/home/OrderSlip.tsx"),
    "utf8",
  );
  const topTen = readFileSync(
    join(root, "src/components/home/TopTen.tsx"),
    "utf8",
  );
  const globalCss = readFileSync(join(root, "src/app/globals.css"), "utf8");
  const homeCss = readFileSync(join(root, "src/styles/home.css"), "utf8");

  assert.match(layout, /<main id="content" tabIndex=\{-1\}>/);
  assert.match(header, /aria-label="主要"/);
  assert.match(footer, /aria-label="頁尾"/);
  assert.match(hero, /<h1>/);
  assert.match(hero, /aria-hidden="true"/);
  assert.match(slip, /order-pass-line/);
  assert.doesNotMatch(slip, /aria-hidden="true"/);
  assert.match(topTen, /alt=""/);
  assert.match(topTen, /aria-live="polite"/);
  assert.match(globalCss, /a \{\s*color: var\(--ink\)/);
  assert.match(globalCss, /\.nav-cta[\s\S]*font-weight: 700/);
  assert.match(
    homeCss,
    /\.top-ten-section \.top-ten-dish\[open\] summary \{[^}]*color: #fff1d9/,
  );
  const withoutStageStick = homeCss.replace(
    /#top-ten \.top-ten-stage \{[^}]*position:\s*sticky;/,
    "#top-ten .top-ten-stage {",
  );
  assert.match(homeCss, /#top-ten \.top-ten-stage \{[^}]*position:\s*sticky/);
  assert.doesNotMatch(
    withoutStageStick,
    /position:\s*sticky|animation-timeline:\s*view\(\)[\s\S]*prefers-reduced-motion:\s*reduce/,
  );
});
