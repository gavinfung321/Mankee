import { readFileSync } from "node:fs";
const W = 1672;
const H = 941;
const src = readFileSync(new URL("./v15.rgba", import.meta.url));
let count = 0;
let minX = 9999, minY = 9999, maxX = 0, maxY = 0;
const bottom = [];
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    const r = src[i], g = src[i + 1], b = src[i + 2];
    const chroma = Math.max(r, g, b) - Math.min(r, g, b);
    if (chroma < 48 && r > 170 && g > 160 && b > 150 && y > 280 && x > 800) {
      count++;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
      if (y > 700 && bottom.length < 12) bottom.push([x, y, r, g, b]);
    }
  }
}
console.log({ count, minX, minY, maxX, maxY, bottom });
