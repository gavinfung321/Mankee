import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return entry.name === "fonts" ? [] : sourceFiles(path);
    return [".css", ".tsx", ".ts"].includes(extname(entry.name)) ? [path] : [];
  });
}

test("fonts are set only through the two shared roles", () => {
  const allowed = /^(var\(--font-(display|text)\)|inherit)$/;
  for (const file of sourceFiles(join(root, "src"))) {
    const source = readFileSync(file, "utf8");
    for (const match of source.matchAll(/font-family:\s*([^;]+);/g)) {
      assert.match(match[1].trim(), allowed, `${file}: font-family ${match[1]}`);
    }
    assert.doesNotMatch(source, /fontFamily\s*:/, `${file}: inline fontFamily`);
  }
});

test("the display role leads with the Hero's 標楷體 and falls back to WenKai TC", () => {
  for (const file of ["src/styles/tokens.css", "src/app/globals.css"]) {
    const source = readFileSync(join(root, file), "utf8");
    const display = source.match(/--font-display:\s*([^;]+);/)[1].replace(/\s+/g, " ");
    assert.equal(
      display.trim(),
      '"DFKai-SB", "BiauKai", var(--font-display-loaded, "LXGW WenKai TC"), "Kaiti TC", serif',
      file,
    );
  }
});
