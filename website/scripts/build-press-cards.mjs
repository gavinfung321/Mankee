import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Places each official publisher file on one shared warm-white 3:4 field.
// The logo is centred at 30% height so the 56% hover/focus overlay never covers it.
const website = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(
  website,
  "..",
  "assets",
  "sourced",
  "publisher",
  "press",
);
const outDir = join(website, "public", "media", "press");

const width = 900;
const height = 1200;
const logoCentreY = 0.3;
const ground = "#fff8ea";
const wordmarkWidth = 560;
// Square marks end at about 42% height, clear of the 56% overlay's top edge at 44%.
const squareSize = 280;

// "knockOut" removes only the file's white background; the mark's own pixels are untouched.
// Tiles keep their full coloured square.
const cards = [
  { id: "elle", file: "elle-logo.svg", shape: "wordmark" },
  { id: "time-out", file: "timeout-logo.svg", shape: "wordmark" },
  { id: "scmp", file: "scmp-icon-512.png", shape: "square", knockOut: true },
  {
    id: "ufood",
    file: "ufood-logo-light.jpg",
    shape: "wordmark",
    knockOut: true,
  },
  { id: "hktb", file: "hktb-logo.png", shape: "wordmark" },
  { id: "wanderlog", file: "wanderlog-wordmark.svg", shape: "wordmark" },
  {
    id: "singtao",
    file: "singtao-headline-logo.png",
    shape: "square",
    knockOut: true,
  },
  { id: "weekendhk", file: "weekendhk-logo.png", shape: "tile" },
  { id: "metro", file: "metro-uk-logo.svg", shape: "wordmark" },
  { id: "hk01", file: "hk01-logo.png", shape: "tile" },
  { id: "hongkongd", file: "hongkongd-logo.png", shape: "tile" },
];

// Exact inverse of compositing over white, so anti-aliased edges keep their original colour.
async function knockOutWhite(input) {
  const { data, info } = await input
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const distance = Math.max(
      255 - data[i],
      255 - data[i + 1],
      255 - data[i + 2],
    );
    if (distance <= 6) {
      data[i + 3] = 0;
      continue;
    }
    const alpha = distance / 255;
    for (let c = 0; c < 3; c++) {
      data[i + c] = Math.round(255 - (255 - data[i + c]) / alpha);
    }
    data[i + 3] = Math.round(data[i + 3] * alpha);
  }
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  });
}

async function logoFor(card) {
  let source = sharp(join(sourceDir, card.file), { density: 600 });
  if (card.shape === "tile") {
    return source.resize({ width: squareSize, height: squareSize }).png().toBuffer();
  }
  if (card.knockOut) source = await knockOutWhite(source);
  const trimmed = await source
    .ensureAlpha()
    .trim({ background: "#00000000" })
    .png()
    .toBuffer();
  const sized = sharp(trimmed);
  if (card.shape === "square") {
    sized.resize({
      width: squareSize,
      height: squareSize,
      fit: "contain",
      background: "#00000000",
    });
  } else {
    sized.resize({ width: wordmarkWidth });
  }
  return sized.png().toBuffer();
}

await mkdir(outDir, { recursive: true });

for (const card of cards) {
  const logo = await logoFor(card);
  const meta = await sharp(logo).metadata();
  const top = Math.round(height * logoCentreY - meta.height / 2);
  const left = Math.round((width - meta.width) / 2);
  const out = join(outDir, `${card.id}-card.webp`);
  await sharp({ create: { width, height, channels: 3, background: ground } })
    .composite([{ input: logo, top, left }])
    .webp({ quality: 88 })
    .toFile(out);
  console.log(out);
}
