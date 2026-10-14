import { readFileSync } from "node:fs";

const W = 1672;
const H = 941;
const src = readFileSync(new URL("./v15.rgba", import.meta.url));

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

function at(x, y) {
  const i = (y * W + x) * 4;
  return [src[i], src[i + 1], src[i + 2]];
}

const ceramic = [];
const orange = [];
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const [r, g, b] = at(x, y);
    const [h, s, l] = hsl(r, g, b);
    if (l > 0.74 && s < 0.2 && x > 850 && y > 280) ceramic.push([x, y]);
    if (h > 8 && h < 40 && s > 0.86 && l > 0.25 && l < 0.7 && y > 340 && y < 640 && x < 1200) orange.push([x, y]);
  }
}

function bounds(pts) {
  let minX = Infinity, minY = Infinity, maxX = 0, maxY = 0, sx = 0, sy = 0;
  for (const [x, y] of pts) {
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
    sx += x;
    sy += y;
  }
  return { n: pts.length, minX, minY, maxX, maxY, cx: Math.round(sx / pts.length), cy: Math.round(sy / pts.length) };
}

console.log("ceramic", bounds(ceramic));
console.log("orange", bounds(orange));

const cx = bounds(ceramic).cx;
const cy = bounds(ceramic).cy;
let maxR = 0;
const rim = [];
for (let a = 0; a < 360; a += 3) {
  const rad = (a * Math.PI) / 180;
  let far = null;
  for (let r = 20; r < 700; r++) {
    const x = Math.round(cx + Math.cos(rad) * r);
    const y = Math.round(cy + Math.sin(rad) * r);
    if (x < 0 || y < 0 || x >= W || y >= H) break;
    const [rr, g, b] = at(x, y);
    const [h, s, l] = hsl(rr, g, b);
    const blue = b > rr + 12 && b > g;
    if ((l > 0.7 && s < 0.25) || blue) far = r;
  }
  if (far) {
    rim.push(far);
    if (far > maxR) maxR = far;
  }
}
rim.sort((a, b) => a - b);
console.log("rim radius min/med/max", rim[0], rim[Math.floor(rim.length / 2)], rim[rim.length - 1], "from", cx, cy);

// Vertical scans for chopsticks: strongest thin dark-light pair
for (const x of [820, 1000, 1200, 1400, 1550, 1660]) {
  const hits = [];
  for (let y = 180; y < 520; y++) {
    const [r1, g1, b1] = at(x, y - 2);
    const [r2, g2, b2] = at(x, y);
    const [r3, g3, b3] = at(x, y + 2);
    const l1 = (r1 + g1 + b1) / 3;
    const l2 = (r2 + g2 + b2) / 3;
    const l3 = (r3 + g3 + b3) / 3;
    if (l2 > l1 + 18 && l2 > l3 + 8) hits.push(`${y}:${Math.round(l2)}`);
  }
  console.log("highlights x", x, hits.slice(0, 12).join(" "));
}
