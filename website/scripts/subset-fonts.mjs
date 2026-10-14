import { access, mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import subsetFont from "subset-font";

const website = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = process.argv[2];
if (!sourceDir) {
  console.error(
    "Usage: node scripts/subset-fonts.mjs <dir with NotoSansTC.ttf and/or LXGWWenKaiTC-Bold.ttf>",
  );
  process.exit(1);
}

const families = [
  ["NotoSansTC.ttf", "noto-sans-tc.woff2"],
  ["LXGWWenKaiTC-Bold.ttf", "lxgw-wenkai-tc-bold.woff2"],
];

async function collectText(directory) {
  let text = "";
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "fonts") continue;
      text += await collectText(path);
      continue;
    }
    if ([".ts", ".tsx", ".css", ".mjs"].includes(extname(entry.name))) {
      text += await readFile(path, "utf8");
    }
  }
  return text;
}

const text = [...new Set(await collectText(join(website, "src")))].join("");
const outDir = join(website, "src", "fonts");
await mkdir(outDir, { recursive: true });

for (const [sourceName, outName] of families) {
  const sourcePath = join(sourceDir, sourceName);
  try {
    await access(sourcePath);
  } catch {
    console.log(`${sourceName} not found, keeping existing ${outName}`);
    continue;
  }
  const source = await readFile(sourcePath);
  const subset = await subsetFont(source, text, { targetFormat: "woff2" });
  const outPath = join(outDir, outName);
  await writeFile(outPath, subset);
  const size = (await stat(outPath)).size;
  console.log(`${outName} ${size} bytes from ${text.length} characters`);
}
