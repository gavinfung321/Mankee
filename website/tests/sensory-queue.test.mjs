import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("舊式香港 is removed from the homepage", async () => {
  const page = readFileSync(join(root, "src/app/page.tsx"), "utf8");
  assert.doesNotMatch(page, /SensoryTrio/);
  assert.ok(
    !existsSync(join(root, "src/components/home/SensoryTrio.tsx")),
    "SensoryTrio.tsx should be deleted",
  );

  const { homeSections } = await import("../src/content/index.ts");
  assert.ok(!homeSections.some((section) => section.id === "sensory"));
});
