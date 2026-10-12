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

test("the live slip stays in Top Ten and the flight file is not mounted", () => {
  const topTen = readFileSync(join(root, "src/components/home/TopTen.tsx"), "utf8");
  const order = readFileSync(join(root, "src/components/home/OrderSlip.tsx"), "utf8");
  assert.equal(existsSync(join(root, "src/components/home/OrderSlipFollow.tsx")), true);
  assert.doesNotMatch(page, /<OrderSlipFollow/);
  assert.match(topTen, /selectedNames\.join\("、"\)/);
  assert.match(topTen, /"逐樣揀"/);
  assert.match(topTen, /slipDone \? "完成" : "落單"/);
  assert.match(topTen, /setSlipDone\(false\)/);
  assert.doesNotMatch(order, /order-ticket|order-slip-card/);
  assert.match(order, /你揀好的湯、麵同餸，煮成熱騰騰一碗。坐低，就可以開餐。/);
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
  assert.match(mobile, /position:\s*static/);
  assert.match(mobile, /order:\s*2/);
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
