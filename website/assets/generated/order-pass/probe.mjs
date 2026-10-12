import { readFileSync, writeFileSync } from "node:fs";

const W = 1672;
const H = 941;
const src = readFileSync(new URL("./v15.rgba", import.meta.url));

function px(x, y) {
  const i = (y * W + x) * 4;
  return [src[i], src[i + 1], src[i + 2]];
}

function hsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  const l = (max + min) / 2;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  let h = 0;
  if (d !== 0) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h = (h * 60 + 360) % 360;
  }
  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

const cols = 16;
const rows = 10;
const lines = [];
for (let gy = 0; gy < rows; gy++) {
  const y = Math.round(((gy + 0.5) / rows) * (H - 1));
  const cells = [];
  for (let gx = 0; gx < cols; gx++) {
    const x = Math.round(((gx + 0.5) / cols) * (W - 1));
    const [r, g, b] = px(x, y);
    const [h, s, l] = hsl(r, g, b);
    cells.push(`${x},${y} ${r},${g},${b} h${h} s${s} l${l}`);
  }
  lines.push(cells.join(" | "));
}
writeFileSync(new URL("./grid.txt", import.meta.url), lines.join("\n"));
console.log("wrote grid", src.length);
