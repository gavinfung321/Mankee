import { readFileSync } from "node:fs";
const W = 1672;
const src = readFileSync(new URL("./v15.rgba", import.meta.url));
const pts = [[1100, 700], [1200, 740], [1250, 780], [1300, 700], [1000, 650], [900, 500], [850, 450], [1480, 600], [1400, 720], [1160, 800], [1160, 820], [1050, 400], [1200, 320]];
for (const [x, y] of pts) {
  const i = (y * W + x) * 4;
  console.log(x, y, src[i], src[i + 1], src[i + 2]);
}
