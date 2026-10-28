import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const follow = readFileSync(
  join(root, "src/components/home/OrderSlipFollow.tsx"),
  "utf8",
);
const css = readFileSync(join(root, "src/styles/home.css"), "utf8");
const page = readFileSync(join(root, "src/app/page.tsx"), "utf8");
const pkg = readFileSync(join(root, "package.json"), "utf8");

test("Top Ten no longer mounts a slip; OrderSlipFollow stays unmounted", () => {
  const topTen = readFileSync(join(root, "src/components/home/TopTen.tsx"), "utf8");
  const order = readFileSync(join(root, "src/components/home/OrderSlip.tsx"), "utf8");
  assert.equal(existsSync(join(root, "src/components/home/OrderSlipFollow.tsx")), true);
  assert.doesNotMatch(page, /<OrderSlipFollow/);
  assert.doesNotMatch(topTen, /selectedNames|top-ten-slip|slipDone|落單紙|"逐樣揀"/);
  assert.doesNotMatch(order, /order-ticket|order-slip-card/);
  assert.match(order, /熱騰騰上枱/);
  assert.match(order, /坐低，開餐。/);
  assert.doesNotMatch(order, /排隊時揀好湯、麵同餸/);
  assert.doesNotMatch(order, /order-pass-wood/);
});

test("the slip stays static below 1024px and flies only on a wide screen", () => {
  assert.match(follow, /min-width:\s*1024px/);
  assert.match(follow, /if \(!\(ticket instanceof HTMLElement\) \|\| !canFly\(\)\)/);
  assert.match(follow, /hideRail\(\)/);
  assert.match(follow, /ticket\.style\.opacity = "1"/);
  assert.match(follow, /progress >= 0\.96/);
  assert.match(follow, /smooth\(progress \/ 0\.4\)/);
  assert.match(follow, /smooth\(\(progress - 0\.4\) \/ 0\.34\)/);
  assert.match(follow, /smooth\(\(progress - 0\.74\) \/ 0\.26\)/);
  assert.match(follow, /perspective\(900px\) translate/);
  assert.match(follow, /ticket\.style\.opacity = landed \? "1" : "0"/);
  assert.doesNotMatch(follow, /min-width:\s*48rem/);

  const mobileStart = css.indexOf("@media (max-width: 639px)");
  const mobile = css.slice(mobileStart, css.indexOf("@media", mobileStart + 1));
  assert.match(mobile, /flex-direction:\s*column/);
  assert.match(mobile, /\.order-pass-plate-track[\s\S]*position:\s*relative/);
  assert.match(mobile, /\.order-pass-plate-track[\s\S]*order:\s*2/);
});

test("reduced motion keeps the final static slip", () => {
  assert.match(follow, /prefers-reduced-motion:\s*reduce/);
  assert.match(follow, /flyQuery\.matches && !reduceQuery\.matches/);
  assert.match(follow, /reduceQuery\.addEventListener\("change", onMode\)/);
});

test("the rejected Three.js order-pass scene is gone", () => {
  assert.equal(
    existsSync(join(root, "src/components/home/OrderPassScene.tsx")),
    false,
  );
  assert.doesNotMatch(pkg, /"three"|"@designcodeio\/threeui"|"@types\/three"/);
});
