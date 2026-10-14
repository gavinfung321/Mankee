import { readFileSync, writeFileSync } from "node:fs";

const W = 1672;
const H = 941;
const src = readFileSync(new URL("./v15.rgba", import.meta.url));
const label = new Uint8Array(W * H);

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

function fillEllipse(cx, cy, rx, ry, value, keepForeground) {
  const y0 = Math.max(0, Math.floor(cy - ry));
  const y1 = Math.min(H - 1, Math.ceil(cy + ry));
  const x0 = Math.max(0, Math.floor(cx - rx));
  const x1 = Math.min(W - 1, Math.ceil(cx + rx));
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      if (keepForeground && label[y * W + x] === 1) continue;
      const nx = (x - cx) / rx;
      const ny = (y - cy) / ry;
      if (nx * nx + ny * ny <= 1) label[y * W + x] = value;
    }
  }
}

fillEllipse(1164, 550, 428, 262, 1);

function strongWood(x, y) {
  const [r, g, b] = at(x, y);
  const [h, s, l] = hsl(r, g, b);
  return h > 12 && h < 42 && s > 0.32 && l > 0.1 && r > b + 42;
}

const protect = new Uint8Array(W * H);

function fillProtect(cx, cy, rx, ry) {
  const y0 = Math.max(0, Math.floor(cy - ry));
  const y1 = Math.min(H - 1, Math.ceil(cy + ry));
  const x0 = Math.max(0, Math.floor(cx - rx));
  const x1 = Math.min(W - 1, Math.ceil(cx + rx));
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const nx = (x - cx) / rx;
      const ny = (y - cy) / ry;
      if (nx * nx + ny * ny <= 1) protect[y * W + x] = 1;
    }
  }
}

function tableRing(x, y) {
  const [r, g, b] = at(x, y);
  const [h, s, l] = hsl(r, g, b);
  const chroma = Math.max(r, g, b) - Math.min(r, g, b);
  const ceramic = chroma < 58 && r > 155 && g > 145 && b > 135;
  return h > 8 && h < 50 && s > 0.2 && l > 0.06 && l < 0.78 && r > b + 24 && !ceramic;
}

function peel(value, rounds) {
  for (let n = 0; n < rounds; n++) {
    const kill = [];
    for (let y = 1; y < H - 1; y++) {
      for (let x = 1; x < W - 1; x++) {
        const p = y * W + x;
        if (label[p] !== value || protect[p] || !tableRing(x, y)) continue;
        if (label[p - 1] !== value || label[p + 1] !== value || label[p - W] !== value || label[p + W] !== value) {
          kill.push(p);
        }
      }
    }
    if (kill.length === 0) break;
    for (const p of kill) label[p] = 0;
  }
}

function isRim(x, y) {
  const [r, g, b] = at(x, y);
  const chroma = Math.max(r, g, b) - Math.min(r, g, b);
  const ceramic = chroma < 62 && r > 160 && g > 148 && b > 132;
  const blue = b > r + 6 && b > g - 4 && b > 85 && chroma < 90;
  return ceramic || blue;
}

const rimRight = new Int16Array(H);
rimRight.fill(-1);
for (let y = 500; y < 790; y++) {
  let run = 0;
  for (let x = 1650; x > 980; x--) {
    if (isRim(x, y)) {
      run++;
      if (run > 4) {
        rimRight[y] = x + run;
        break;
      }
    } else run = 0;
  }
}
let lastRim = -1;
for (let y = 500; y < 790; y++) {
  if (rimRight[y] < 0) continue;
  if (lastRim > 0 && rimRight[y] < lastRim - 40) rimRight[y] = -1;
  else lastRim = rimRight[y];
}

function rimAt(y) {
  if (y < 500 || y >= 900) return -1;
  if (rimRight[y] > 0) return rimRight[y];
  for (let k = y - 1; k >= 500; k--) {
    if (rimRight[k] > 0) return rimRight[k] - (y - k) * 5;
  }
  return -1;
}

for (let y = 520; y < 860; y++) {
  const edge = rimAt(y);
  if (edge < 0) continue;
  for (let x = edge + 4; x < W; x++) {
    if (label[y * W + x] === 1 && !isRim(x, y)) label[y * W + x] = 0;
  }
}

for (let y = 600; y < 770; y++) {
  let run = 0;
  let edge = -1;
  for (let x = 700; x < 1200; x++) {
    if (isRim(x, y)) {
      run++;
      if (run > 4) {
        edge = x - run;
        break;
      }
    } else run = 0;
  }
  if (edge < 0) continue;
  for (let x = 700; x < edge - 3; x++) {
    if (label[y * W + x] === 1 && !isRim(x, y)) label[y * W + x] = 0;
  }
}

for (let x = 820; x < 1460; x++) {
  let foot = -1;
  for (let y = 880; y > 680; y--) {
    if (isRim(x, y)) {
      foot = y;
      break;
    }
  }
  if (foot < 0) continue;
  for (let y = foot + 4; y < 900; y++) {
    if (label[y * W + x] !== 1) continue;
    const [r, g, b] = at(x, y);
    if ((r + g + b) / 3 > 145) continue;
    label[y * W + x] = 0;
  }
}

function isSpoon(x, y) {
  const [r, g, b] = at(x, y);
  const [h, s, l] = hsl(r, g, b);
  return h > 6 && h < 42 && s > 0.78 && l > 0.2 && l < 0.72 && r > g + 20 && g > b;
}

const seen = new Uint8Array(W * H);
const stack = [[679, 423]];
seen[679 + 423 * W] = 1;
let spoonCount = 0;
while (stack.length) {
  const [x, y] = stack.pop();
  if (!isSpoon(x, y)) continue;
  label[y * W + x] = 1;
  spoonCount++;
  for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    const nx = x + dx;
    const ny = y + dy;
    if (nx < 560 || ny < 340 || nx >= 1200 || ny >= 640) continue;
    const n = ny * W + nx;
    if (seen[n]) continue;
    seen[n] = 1;
    stack.push([nx, ny]);
  }
}

function inside(poly, x, y) {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

const p0 = [830, 300];
const p1 = [1220, 379];
const vx = p1[0] - p0[0];
const vy = p1[1] - p0[1];
const vlen = Math.hypot(vx, vy);
const ox = (-vy / vlen) * 6;
const oy = (vx / vlen) * 6;
const stick = [
  [p0[0] + ox, p0[1] + oy],
  [p1[0] + ox, p1[1] + oy],
  [p1[0] - ox, p1[1] - oy],
  [p0[0] - ox, p0[1] - oy],
];
let sx0 = Infinity;
let sy0 = Infinity;
let sx1 = 0;
let sy1 = 0;
for (const [x, y] of stick) {
  sx0 = Math.min(sx0, x);
  sy0 = Math.min(sy0, y);
  sx1 = Math.max(sx1, x);
  sy1 = Math.max(sy1, y);
}
for (let y = Math.floor(sy0); y <= Math.ceil(sy1); y++) {
  for (let x = Math.floor(sx0); x <= Math.ceil(sx1); x++) {
    if (inside(stick, x + 0.5, y + 0.5)) label[y * W + x] = 1;
  }
}

function isStick(x, y) {
  if (x < 0 || y < 0 || x >= W || y >= H) return false;
  const [r, g, b] = at(x, y);
  const bright = (r + g + b) / 3;
  return r > 135 && g > 65 && g < 170 && b < 100 && r > b + 45 && bright > 95 && r > g + 8;
}

for (let y = 400; y < 530; y++) {
  for (let x = 1280; x < 1630; x++) {
    if (x > 1460 && y < 430) continue;
    const edge = rimAt(y);
    const outside = edge > 0 && x > edge + 3;
    if (isStick(x, y)) label[y * W + x] = 1;
    else if (outside && label[y * W + x] === 1 && !isRim(x, y)) label[y * W + x] = 0;
  }
}

for (let x = 1280; x < 1624; x++) {
  let previous = -1;
  for (let y = 370; y < 530; y++) {
    if (!isStick(x, y)) continue;
    if (previous > 0 && y - previous > 1 && y - previous <= 8) {
      for (let k = previous + 1; k < y; k++) label[k * W + x] = 1;
    }
    previous = y;
  }
}

function fillCapsule(x0, y0, x1, y1, value) {
  const cx = (x0 + x1) / 2;
  const rad = (x1 - x0) / 2;
  const top = y0 + rad;
  const bot = y1 - rad;
  for (let y = Math.max(0, Math.floor(y0)); y <= Math.min(H - 1, Math.ceil(y1)); y++) {
    for (let x = Math.max(0, Math.floor(x0)); x <= Math.min(W - 1, Math.ceil(x1)); x++) {
      if (label[y * W + x] === 1) continue;
      const cy = y < top ? top : y > bot ? bot : y;
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy <= rad * rad) label[y * W + x] = value;
    }
  }
}

fillCapsule(988, 0, 1058, 258, 2);
fillCapsule(1156, 88, 1208, 274, 2);
fillCapsule(1298, 48, 1378, 322, 2);
fillCapsule(1472, 152, 1572, 372, 2);

const mark = readFileSync(new URL("./mark.rgba", import.meta.url));
const markW = 748;
const markH = 652;
const markScale = 0.96;
const markOx = 420;
const markOy = 2;
const painted = new Uint8Array(W * H);
let marked = 0;
for (let y = 280; y < 540; y++) {
  for (let x = 1200; x < 1650; x++) {
    const mx = Math.round(((x * 1200) / W - markOx) * markScale);
    const my = Math.round(((y * 675) / H - markOy) * markScale);
    if (mx < 1 || my < 1 || mx >= markW - 1 || my >= markH - 1) continue;
    let hit = false;
    for (let dy = -2; dy <= 2 && !hit; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const i = ((my + dy) * markW + (mx + dx)) * 4;
        const r = mark[i];
        const g = mark[i + 1];
        const b = mark[i + 2];
        if (r > 190 && g < 70 && b < 70 && Math.abs(g - b) < 28 && r > g + 100) {
          hit = true;
          break;
        }
      }
    }
    if (!hit) continue;
    painted[y * W + x] = 1;
    if (label[y * W + x] !== 1 || isRim(x, y)) continue;
    label[y * W + x] = 0;
    marked++;
  }
}
for (let y = 280; y < 540; y++) {
  for (let x = 1200; x < 1650; x++) {
    if (label[y * W + x] !== 1 || isRim(x, y) || isStick(x, y)) continue;
    let near = false;
    for (let dy = -5; dy <= 5 && !near; dy++) {
      for (let dx = -5; dx <= 5; dx++) {
        if (painted[(y + dy) * W + (x + dx)]) {
          near = true;
          break;
        }
      }
    }
    if (!near) continue;
    label[y * W + x] = 0;
    marked++;
  }
}

let bowlN = 0;
let condN = 0;
const preview = Buffer.alloc(W * H * 4);
for (let p = 0; p < W * H; p++) {
  const i = p * 4;
  if (label[p] === 1) bowlN++;
  if (label[p] === 2) condN++;
  const color = label[p] === 1 ? [210, 30, 30] : label[p] === 2 ? [30, 70, 220] : [src[i], src[i + 1], src[i + 2]];
  preview[i] = color[0];
  preview[i + 1] = color[1];
  preview[i + 2] = color[2];
  preview[i + 3] = 255;
}
writeFileSync(new URL("./mask-preview.rgba", import.meta.url), preview);
writeFileSync(new URL("./labels.bin", import.meta.url), label);

const onGray = Buffer.alloc(W * H * 4);
for (let p = 0; p < W * H; p++) {
  const i = p * 4;
  const show = label[p] !== 0;
  onGray[i] = show ? src[i] : 186;
  onGray[i + 1] = show ? src[i + 1] : 186;
  onGray[i + 2] = show ? src[i + 2] : 186;
  onGray[i + 3] = 255;
}
writeFileSync(new URL("./cutout-gray.rgba", import.meta.url), onGray);

const table = Buffer.from(src);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const p = y * W + x;
    if (label[p] === 0) continue;
    let left = -1;
    let right = -1;
    for (let d = 1; d < 900; d++) {
      if (left < 0 && x - d >= 0 && label[p - d] === 0) left = x - d;
      if (right < 0 && x + d < W && label[y * W + x + d] === 0) right = x + d;
      if (left >= 0 && right >= 0) break;
    }
    const i = p * 4;
    const pick = left >= 0 ? left : right;
    if (pick < 0) continue;
    const j = (y * W + pick) * 4;
    if (left >= 0 && right >= 0) {
      const span = right - left;
      const t = (x - left) / span;
      const li = (y * W + left) * 4;
      const ri = (y * W + right) * 4;
      table[i] = Math.round(src[li] * (1 - t) + src[ri] * t);
      table[i + 1] = Math.round(src[li + 1] * (1 - t) + src[ri + 1] * t);
      table[i + 2] = Math.round(src[li + 2] * (1 - t) + src[ri + 2] * t);
    } else {
      table[i] = src[j];
      table[i + 1] = src[j + 1];
      table[i + 2] = src[j + 2];
    }
    table[i + 3] = 255;
  }
}

function cut(value) {
  const out = Buffer.alloc(W * H * 4);
  for (let p = 0; p < W * H; p++) {
    const i = p * 4;
    if (label[p] !== value) continue;
    out[i] = src[i];
    out[i + 1] = src[i + 1];
    out[i + 2] = src[i + 2];
    out[i + 3] = 255;
  }
  return out;
}

let maxDiff = 0;
let diffCount = 0;
for (let p = 0; p < W * H; p++) {
  const i = p * 4;
  const useSrc = label[p] === 1 || label[p] === 2;
  for (let c = 0; c < 3; c++) {
    const got = useSrc ? src[i + c] : table[i + c];
    const d = Math.abs(got - src[i + c]);
    if (d > maxDiff) maxDiff = d;
    if (d !== 0) diffCount++;
  }
}

writeFileSync(new URL("./layer-table.rgba", import.meta.url), table);
writeFileSync(new URL("./layer-bowl.rgba", import.meta.url), cut(1));
writeFileSync(new URL("./layer-condiments.rgba", import.meta.url), cut(2));
console.log({ spoonCount, bowlN, condN, marked, maxDiff, diffCount });
