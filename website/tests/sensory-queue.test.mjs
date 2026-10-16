import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sensory = readFileSync(
  join(root, "src/components/home/SensoryTrio.tsx"),
  "utf8",
);
const home = readFileSync(join(root, "src/styles/home.css"), "utf8");

test("舊式香港 Gate 1 keeps a static 2.5D queue composition contract", () => {
  assert.match(sensory, /sensory-steel/);
  assert.match(sensory, /sensory-stage/);
  assert.match(sensory, /sensory-back/);
  assert.match(sensory, /sensory-queue-line/);
  assert.match(sensory, /pathLength="1"/);
  assert.match(sensory, /aria-hidden="true"/);
  assert.match(sensory, /sensory-marker/);
  assert.match(sensory, /\/media\/store\/queue-dusk\.webp/);
  assert.match(sensory, /\/media\/store\/queue-day\.webp/);
  assert.match(sensory, /alt="傍晚，客人沿街輪候"/);
  assert.match(sensory, /alt="日間，客人在文記店外輪候"/);
  assert.match(sensory, /排到埋去，就由湯開始。/);
  assert.match(sensory, /舊式香港/);

  assert.doesNotMatch(sensory, /useScroll|framer-motion|motion\./);
  assert.doesNotMatch(home, /\.sensory-section[\s\S]{0,240}position:\s*sticky/);
  assert.match(home, /\.sensory-queue-line path[\s\S]*stroke:\s*var\(--lacquer\)/);
  assert.match(home, /\.sensory-back[\s\S]*background:\s*var\(--structure\)/);
  assert.match(home, /\.sensory-caption[\s\S]*color:\s*var\(--gold\)/);
});
