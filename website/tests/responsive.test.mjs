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

  assert.match(home, /width: min\(var\(--content\)/);
  assert.match(wide, /\.sensory-list/);
  assert.match(wide, /\.order-steps/);
  assert.match(wide, /\.top-ten-list/);
  assert.match(header, /md:hidden/);
  assert.match(header, /md:flex/);
  assert.match(slip, /order-slip/);
  assert.doesNotMatch(`${home}\n${slip}`, /position:\s*(fixed|sticky)/);
});
