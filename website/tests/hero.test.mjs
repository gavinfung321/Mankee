import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const repo = join(root, "..");
const videoName = "hero-motion-temp-natural-no-zoom-scrub.mp4";
const posterName = "hero-motion-temp-natural-poster.webp";

test("the hero uses the temporary pair and a replaceable scrub contract", () => {
  const originalVideo = join(repo, "assets/generated/mankee-hero", videoName);
  const originalPoster = join(repo, "assets/generated/mankee-hero", posterName);
  const publicVideo = join(root, "public/media/hero", videoName);
  const publicPoster = join(root, "public/media/hero", posterName);
  assert.equal(existsSync(originalVideo), true);
  assert.equal(existsSync(originalPoster), true);
  assert.equal(statSync(publicVideo).size, statSync(originalVideo).size);
  assert.equal(statSync(publicPoster).size, statSync(originalPoster).size);

  const contract = readFileSync(join(root, "src/lib/hero.ts"), "utf8");
  const hero = readFileSync(
    join(root, "src/components/home/Hero.astro"),
    "utf8",
  );
  const scrub = readFileSync(join(root, "src/islands/HeroScrub.ts"), "utf8");
  const css = readFileSync(join(root, "src/styles/home.css"), "utf8");

  assert.match(contract, new RegExp(videoName));
  assert.match(contract, new RegExp(posterName));
  assert.match(contract, /fit: "cover"/);
  assert.match(contract, /textSafe: "left"/);
  assert.match(hero, /<h1>/);
  assert.match(hero, /heroMedia\.poster/);
  assert.match(hero, /class="hero-video"/);
  assert.match(hero, /attachHeroScrub/);
  assert.doesNotMatch(hero, /autoplay|scale\(/);
  assert.match(scrub, /prefers-reduced-motion/);
  assert.match(scrub, /currentTime/);
  assert.match(css, /object-fit:\s*cover|hero-video/);
  assert.match(css, /prefers-reduced-motion:\s*reduce[\s\S]*\.hero-video/);
  assert.doesNotMatch(
    `${hero}\n${scrub}\n${css}`,
    /transform:\s*scale|100vh\s+100vh/,
  );
});
