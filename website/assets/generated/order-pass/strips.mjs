import { readFileSync } from "node:fs";

const W = 1672;
const src = readFileSync(new URL("./v15.rgba", import.meta.url));

function line(x, y0, y1) {
  const parts = [];
  for (let y = y0; y <= y1; y += 4) {
    const i = (y * W + x) * 4;
    const r = src[i];
    const g = src[i + 1];
    const b = src[i + 2];
    parts.push(`${y}:${r},${g},${b}`);
  }
  console.log("x", x);
  console.log(parts.join(" "));
}

line(450, 360, 560);
line(900, 240, 460);
line(1200, 240, 480);
line(1500, 280, 500);
line(1640, 300, 520);

let n = 0;
for (let y = 341; y < 640; y++) {
  for (let x = 0; x < 500; x++) {
    const i = (y * W + x) * 4;
    const r = src[i];
    const g = src[i + 1];
    const b = src[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2 / 255;
    const s = max === min ? 0 : (max - min) / (255 - Math.abs(max + min - 255));
    if (s > 0.86 && l > 0.25 && l < 0.7 && r > g && g > b) {
      if (n < 8) console.log("orange", x, y, r, g, b);
      n++;
    }
  }
}
console.log("orange left of 500", n);
