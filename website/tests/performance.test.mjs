import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function walk(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(path));
    else files.push(path);
  }
  return files;
}

test("fonts, images, and the hero stay within the launch budget", () => {
  const fonts = readFileSync(join(root, "src/lib/fonts.ts"), "utf8");
  const layout = readFileSync(join(root, "src/app/layout.tsx"), "utf8");
  const license = readFileSync(join(root, "src/fonts/OFL.txt"), "utf8");
  assert.match(fonts, /display:\s*"swap"/);
  assert.match(fonts, /preload:\s*false/);
  assert.match(layout, /fontDisplay\.variable/);
  assert.match(layout, /fontText\.variable/);
  assert.match(license, /SIL Open Font License/);
  assert.ok(
    statSync(join(root, "src/fonts/noto-sans-tc.woff2")).size < 150_000,
  );
  assert.ok(
    statSync(join(root, "src/fonts/noto-serif-tc.woff2")).size < 200_000,
  );

  const hero = readFileSync(join(root, "src/components/home/Hero.tsx"), "utf8");
  const founder = readFileSync(
    join(root, "src/components/home/Founder.tsx"),
    "utf8",
  );
  const recognition = readFileSync(
    join(root, "src/components/home/Recognition.tsx"),
    "utf8",
  );
  assert.match(hero, /preload="none"/);
  assert.match(hero, /fetchPriority="high"/);
  assert.match(hero, /prefers-reduced-motion/);
  assert.doesNotMatch(hero, /poster=\{/);
  assert.match(founder, /srcSet=/);
  assert.match(founder, /loading="lazy"/);
  assert.match(recognition, /width=\{500\}/);
  assert.match(recognition, /loading="lazy"/);
  assert.equal(
    existsSync(join(root, "public/media/founder/wong-chi-keung.jpeg")),
    false,
  );
  assert.ok(
    statSync(join(root, "public/media/founder/wong-chi-keung-960.webp")).size <
      120_000,
  );

  const blocked = /(^|\/)(scrollcraft|lab|proof|review-board)(\/|$)/i;
  for (const path of walk(join(root, "public"))) {
    assert.doesNotMatch(relative(root, path).replaceAll("\\", "/"), blocked);
  }
  const source = walk(join(root, "src"))
    .filter((path) => /\.(ts|tsx|css|mjs)$/.test(path))
    .map((path) => readFileSync(path, "utf8"))
    .join("\n");
  assert.doesNotMatch(source, /scrollcraft|assets\/generated|assets\/sourced/);
});
