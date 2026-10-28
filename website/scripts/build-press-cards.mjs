import { mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// One dark field for every card. Each mark fits one box, above the hover overlay.
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
const logoCentreY = 0.26;
const ground = "#1c1814";
const cream = { r: 0xff, g: 0xf7, b: 0xe8 };
const boxW = 500;
const boxH = 360;
const minH = 140;
const maxW = 700;

// "cream" lifts a black-only wordmark onto the dark field.
// "white" / "black" remove only that file's flat backdrop.
const cards = [
  { id: "elle", file: "elle-logo.svg", ink: "cream" },
  { id: "time-out", file: "timeout-logo.svg", ink: "cream" },
  { id: "scmp", file: "scmp-icon-512.png", knockOut: "white" },
  { id: "ufood", file: "ufood-logo.svg" },
  { id: "hktb", file: "hktb-logo.png", knockOut: "black" },
  { id: "wanderlog", file: "wanderlog-wordmark.svg" },
  { id: "singtao", file: "singtao-headline-logo.png", knockOut: "white" },
  { id: "weekendhk", file: "weekendhk-logo.png" },
  { id: "metro", file: "metro-uk-logo.svg", ink: "cream" },
  { id: "hk01", file: "hk01-logo.png" },
  { id: "hongkongd", file: "hongkongd-logo.png", knockOut: "black" },
];

async function sourceFor(card) {
  const path = join(sourceDir, card.file);
  if (!card.file.endsWith(".svg")) return sharp(path);
  let svg = await readFile(path, "utf8");
  svg = svg.replace(/var\(--primary,\s*#000\)/g, "#000000");
  if (card.ink === "cream") svg = svg.replace("<svg", '<svg fill="#000000"');
  return sharp(Buffer.from(svg), { density: 600 });
}

async function knockOut(input, mode) {
  const { data, info } = await input
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 8) continue;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    if (mode === "white") {
      const distance = Math.max(255 - r, 255 - g, 255 - b);
      if (distance <= 16) data[i + 3] = 0;
    } else if (max <= 24 && max - min <= 14) {
      data[i + 3] = 0;
    }
  }
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  });
}

async function liftBlackInk(input) {
  const { data, info } = await input
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 8) continue;
    const max = Math.max(data[i], data[i + 1], data[i + 2]);
    if (max >= 96) continue;
    const shade = max / 96;
    data[i] = Math.round(cream.r * (1 - shade) + data[i] * shade);
    data[i + 1] = Math.round(cream.g * (1 - shade) + data[i + 1] * shade);
    data[i + 2] = Math.round(cream.b * (1 - shade) + data[i + 2] * shade);
  }
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  });
}

async function logoFor(card) {
  let source = await sourceFor(card);
  if (card.knockOut) source = await knockOut(source, card.knockOut);
  if (card.ink === "cream") source = await liftBlackInk(source);
  const trimmed = await source
    .trim({ background: "#00000000", threshold: 8 })
    .png()
    .toBuffer();
  const meta = await sharp(trimmed).metadata();
  const scale = Math.min(boxW / meta.width, boxH / meta.height);
  let markW = Math.max(1, Math.round(meta.width * scale));
  let markH = Math.max(1, Math.round(meta.height * scale));
  if (markH < minH) {
    const up = Math.min(minH / markH, maxW / markW);
    if (up > 1) {
      markW = Math.max(1, Math.round(markW * up));
      markH = Math.max(1, Math.round(markH * up));
    }
  }
  return sharp(trimmed)
    .resize({ width: markW, height: markH, fit: "fill" })
    .png()
    .toBuffer();
}

await mkdir(outDir, { recursive: true });

for (const card of cards) {
  const logo = await logoFor(card);
  const meta = await sharp(logo).metadata();
  const top = Math.round(height * logoCentreY - meta.height / 2);
  const left = Math.round((width - meta.width) / 2);
  const out = join(outDir, `${card.id}-card.webp`);
  await sharp({
    create: { width, height, channels: 3, background: ground },
  })
    .composite([{ input: logo, top, left }])
    .webp({ quality: 88 })
    .toFile(out);
  console.log(
    `${card.id} ${meta.width}x${meta.height} @ ${left},${top}`,
  );
}
