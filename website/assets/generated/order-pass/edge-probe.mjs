import { readFileSync } from "node:fs";

const W = 1672;
const src = readFileSync(new URL("./v15.rgba", import.meta.url));

function at(x, y) {
  const i = (y * W + x) * 4;
  return [src[i], src[i + 1], src[i + 2]];
}

function isRim(x, y) {
  const [r, g, b] = at(x, y);
  const chroma = Math.max(r, g, b) - Math.min(r, g, b);
  const ceramic = chroma < 62 && r > 160 && g > 148 && b > 132;
  const blue = b > r + 6 && b > g - 4 && b > 85 && chroma < 90;
  return ceramic || blue;
}

console.log("left rim, scanning inward from x=700");
for (let y = 620; y <= 820; y += 8) {
  let edge = -1;
  let run = 0;
  for (let x = 700; x < 1200; x++) {
    if (isRim(x, y)) {
      run++;
      if (run > 4) {
        edge = x - run;
        break;
      }
    } else run = 0;
  }
  console.log(y, edge);
}

console.log("lowest rim per x along the foot");
for (let x = 760; x <= 1300; x += 20) {
  let foot = -1;
  for (let y = 880; y > 640; y--) {
    if (isRim(x, y)) {
      foot = y;
      break;
    }
  }
  console.log(x, foot);
}
