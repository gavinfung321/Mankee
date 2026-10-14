import { readFileSync } from "node:fs";

const MW = 748;
const MH = 652;
const W = 1672;
const mark = readFileSync(new URL("./mark.rgba", import.meta.url));
const scale = 0.96;
const ox = 420;
const oy = 2;
const sx = 1672 / 1200;
const sy = 941 / 675;

function isRed(r, g, b) {
  return r > 190 && g < 70 && b < 70 && Math.abs(g - b) < 28 && r > g + 100;
}

let minX = 9999;
let maxX = 0;
let minY = 9999;
let maxY = 0;
let n = 0;
for (let y = 0; y < MH; y++) {
  for (let x = 0; x < MW; x++) {
    const i = (y * MW + x) * 4;
    if (!isRed(mark[i], mark[i + 1], mark[i + 2])) continue;
    const px = Math.round((ox + x / scale) * sx);
    const py = Math.round((oy + y / scale) * sy);
    n++;
    if (px < minX) minX = px;
    if (px > maxX) maxX = px;
    if (py < minY) minY = py;
    if (py > maxY) maxY = py;
  }
}
console.log({ n, minX, maxX, minY, maxY });
