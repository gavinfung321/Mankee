import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const requiredPaths = [
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/menu/page.tsx",
  "src/app/press/page.tsx",
  "src/styles",
  "src/content/zh-HK",
  "src/lib",
  "src/components/shell",
  "src/components/home",
  "src/components/menu",
  "src/components/press",
  "src/islands",
  "public/brand",
  "public/media/hero",
  "public/media/food",
];

for (const path of requiredPaths) {
  assert.equal(existsSync(join(root, path)), true, path);
}

assert.equal(existsSync(join(root, "src/pages/privacy")), false);

const layout = readFileSync(join(root, "src/app/layout.tsx"), "utf8");
assert.match(layout, /lang="zh-HK"/);
assert.match(layout, /<Header/);
assert.match(layout, /<Footer/);
assert.match(layout, /href="#content"/);

const header = readFileSync(
  join(root, "src/components/shell/Header.tsx"),
  "utf8",
);
const footer = readFileSync(
  join(root, "src/components/shell/Footer.tsx"),
  "utf8",
);
const navigation = readFileSync(join(root, "src/lib/navigation.ts"), "utf8");
const site = readFileSync(join(root, "src/content/zh-HK/site.ts"), "utf8");
for (const label of ["首頁", "點餐", "文記十大", "故事", "到店／外賣"]) {
  assert.match(site, new RegExp(label));
}
assert.match(header, /primaryNav/);
assert.match(footer, /primaryNav/);
assert.match(navigation, /site\.navigation/);
assert.match(site, /href: "\/menu\/"/);
assert.match(site, /href: "\/#top-ten"/);
assert.match(site, /href: "\/#story"/);
assert.match(site, /href: "\/#locations"/);
assert.doesNotMatch(
  `${header}\n${footer}\n${navigation}`,
  /福榮街|11:00|Foodpanda|Keeta/,
);
assert.match(layout, /globals\.css/);

const tokens = readFileSync(join(root, "src/styles/tokens.css"), "utf8");
for (const token of [
  "--paper: #eadcbf",
  "--ink: #1b1916",
  "--lacquer: #cf2028",
  "--jade: #23493d",
  "--noodle: #c99e26",
  "--jade-dark: #102d26",
  "--font-display:",
  "LXGW WenKai TC",
  "--font-text:",
  "Noto Sans TC",
  "--duration-short: 0ms",
]) {
  assert.match(
    tokens,
    new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
  );
}

assert.doesNotMatch(
  tokens,
  /--wood|--steel|--paper-deep|--lacquer-bright|--muted|--on-jade|KaiTi/,
);

const globalCss = readFileSync(join(root, "src/app/globals.css"), "utf8");
assert.match(globalCss, /outline: var\(--focus-width\) solid var\(--noodle\)/);
assert.match(globalCss, /outline-offset: var\(--focus-offset\)/);
assert.match(globalCss, /\.hero-backdrop[\s\S]*background: var\(--jade-dark\)/);
assert.doesNotMatch(globalCss, /color:\s*var\(--noodle\)/);

const page = readFileSync(join(root, "src/app/page.tsx"), "utf8");
const hero = readFileSync(join(root, "src/components/home/Hero.tsx"), "utf8");
assert.doesNotMatch(page, /specimen|swatch/);
assert.match(hero, /hero-backdrop/);
assert.match(page, /<Hero/);
assert.match(page, /<TopTen/);
assert.match(page, /<Founder/);
assert.match(page, /<Locations/);

const readme = readFileSync(join(root, "README.md"), "utf8");
assert.match(readme, /SIL Open Font License/);
