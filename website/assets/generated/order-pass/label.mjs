import { readFileSync, writeFileSync } from "node:fs";

const W = 1672;
const H = 941;
const src = readFileSync(new URL("./v15.rgba", import.meta.url));
const out = Buffer.alloc(W * H * 4);

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
  return [h, s, l];
}

const counts = { spoon: 0, ceramic: 0, blue: 0, black: 0, metal: 0, food: 0 };
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    const r = src[i];
    const g = src[i + 1];
    const b = src[i + 2];
    const [h, s, l] = hsl(r, g, b);
    let label = "wood";
    if (h > 8 && h < 42 && s > 0.82 && l > 0.22 && l < 0.72 && x < 1250 && y > 300 && y < 620) {
      label = "spoon";
    } else if (l > 0.72 && s < 0.22 && x > 900 && y > 250) {
      label = "ceramic";
    } else if (b > r + 18 && b > g + 8 && s > 0.12 && x > 900 && y > 250) {
      label = "blue";
    } else if (l < 0.16 && y < 460 && x > 1000) {
      label = "black";
    } else if (s < 0.18 && l > 0.42 && y < 430 && x > 1000) {
      label = "metal";
    } else if (y > 380 && y < 860 && x > 780 && x < 1580 && l < 0.55 && s > 0.35) {
      label = "food";
    }
    if (label !== "wood") counts[label]++;
    const color = {
      wood: [r, g, b],
      spoon: [255, 80, 0],
      ceramic: [255, 255, 255],
      blue: [0, 80, 255],
      black: [180, 0, 180],
      metal: [0, 220, 220],
      food: [0, 200, 40],
    }[label];
    out[i] = color[0];
    out[i + 1] = color[1];
    out[i + 2] = color[2];
    out[i + 3] = 255;
  }
}
writeFileSync(new URL("./labels.rgba", import.meta.url), out);
console.log(counts);
