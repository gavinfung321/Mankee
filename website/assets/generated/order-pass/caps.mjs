import { readFileSync } from "node:fs";

const W = 1672;
const src = readFileSync(new URL("./v15.rgba", import.meta.url));

function at(x, y) {
  const i = (y * W + x) * 4;
  return [src[i], src[i + 1], src[i + 2]];
}

let run = false;
let start = 0;
for (let x = 980; x <= 1672; x++) {
  let metal = 0;
  const xx = Math.min(x, 1671);
  for (let y = 0; y < 180; y++) {
    const [r, g, b] = at(xx, y);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    const s = max === min ? 0 : (max - min) / (255 - Math.abs(max + min - 255));
    if (s < 0.18 && l > 140) metal++;
  }
  const on = metal > 12;
  if (on && !run) {
    run = true;
    start = x;
  } else if (!on && run) {
    run = false;
    console.log("metal", start, x - 1, "w", x - start);
  }
}
