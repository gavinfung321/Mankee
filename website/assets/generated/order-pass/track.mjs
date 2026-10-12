import { readFileSync } from "node:fs";

const W = 1672;
const H = 941;
const src = readFileSync(new URL("./v15.rgba", import.meta.url));

function rgb(x, y) {
  const i = (y * W + x) * 4;
  return [src[i], src[i + 1], src[i + 2]];
}

const seedX = 900;
const seedY = 268;
const half = 22;
const tmpl = [];
for (let dy = -half; dy <= half; dy++) tmpl.push(rgb(seedX, seedY + dy));

function score(x, y) {
  let err = 0;
  for (let dy = -half; dy <= half; dy++) {
    if (y + dy < 0 || y + dy >= H) return 1e12;
    const [r, g, b] = rgb(x, y + dy);
    const [tr, tg, tb] = tmpl[dy + half];
    err += (r - tr) ** 2 + (g - tg) ** 2 + (b - tb) ** 2;
  }
  return err;
}

let y = seedY;
const pts = [];
for (let x = seedX; x < 1670; x += 8) {
  let best = y;
  let bestErr = Infinity;
  for (let dy = -18; dy <= 18; dy++) {
    const err = score(x, y + dy);
    if (err < bestErr) {
      bestErr = err;
      best = y + dy;
    }
  }
  y = best;
  pts.push(`${x},${y}`);
}
console.log("right", pts.join(" "));

y = seedY;
const left = [];
for (let x = seedX; x > 700; x -= 8) {
  let best = y;
  let bestErr = Infinity;
  for (let dy = -18; dy <= 18; dy++) {
    const err = score(x, y + dy);
    if (err < bestErr) {
      bestErr = err;
      best = y + dy;
    }
  }
  y = best;
  left.push(`${x},${y}`);
}
console.log("left", left.join(" "));
