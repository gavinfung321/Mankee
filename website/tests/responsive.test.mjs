import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("the layout stacks on small screens and keeps the order slip in flow", () => {
  const home = readFileSync(join(root, "src/styles/home.css"), "utf8");
  const header = readFileSync(
    join(root, "src/components/shell/Header.tsx"),
    "utf8",
  );
  const slip = readFileSync(
    join(root, "src/components/home/OrderSlip.tsx"),
    "utf8",
  );
  const wide = home.slice(home.indexOf("@media (min-width: 48rem)"));
  const mobileStart = home.indexOf("@media (max-width: 639px)");
  const mobile = home.slice(mobileStart, home.indexOf("@media", mobileStart + 1));

  assert.match(home, /width: min\(var\(--content\)/);
  assert.match(wide, /\.sensory-list/);
  assert.match(wide, /\.top-ten-list/);
  assert.match(mobile, /\.order-pass-stage[\s\S]*flex-direction:\s*column/);
  assert.doesNotMatch(home, /order-pass-wood/);
  assert.match(mobile, /\.order-pass-plate[\s\S]*order:\s*2/);
  assert.match(mobile, /aspect-ratio:\s*1/);
  assert.doesNotMatch(mobile, /\.order-steps/);
  assert.match(header, /md:hidden/);
  assert.match(header, /md:flex/);
  assert.match(slip, /order-pass-line/);
  assert.doesNotMatch(slip, /position:\s*(fixed|sticky)/);
  const wideTop = home.indexOf("@media (min-width: 64rem)");
  assert.doesNotMatch(home, /position:\s*fixed/);
  assert.doesNotMatch(home.slice(0, wideTop), /position:\s*sticky/);
  assert.match(home.slice(wideTop), /#top-ten \.top-ten-stage[\s\S]*position:\s*sticky/);
});
