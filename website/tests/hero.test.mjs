import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const videoName = "hero-signature-three-toppings-scrub-v1-web.mp4";
const posterName = "hero-signature-three-toppings-poster-v1.webp";
const posterSmallName = "hero-signature-three-toppings-poster-v1-640.webp";

test("the hero uses the locked three-topping scrub and tuned scroll contract", () => {
  const publicVideo = join(root, "public/media/hero", videoName);
  const publicPoster = join(root, "public/media/hero", posterName);
  const publicPosterSmall = join(root, "public/media/hero", posterSmallName);
  assert.equal(existsSync(publicVideo), true);
  assert.equal(existsSync(publicPoster), true);
  assert.equal(existsSync(publicPosterSmall), true);
  assert.ok(statSync(publicVideo).size > 1_000_000);
  assert.ok(statSync(publicVideo).size < 10_000_000);
  assert.ok(statSync(publicPoster).size > statSync(publicPosterSmall).size);

  const contract = readFileSync(join(root, "src/lib/hero.ts"), "utf8");
  const hero = readFileSync(join(root, "src/components/home/Hero.tsx"), "utf8");
  const scrub = readFileSync(join(root, "src/islands/HeroScrub.ts"), "utf8");
  const css = readFileSync(join(root, "src/styles/home.css"), "utf8");

  assert.match(contract, new RegExp(videoName));
  assert.match(contract, new RegExp(posterName));
  assert.match(contract, new RegExp(posterSmallName));
  assert.match(contract, /scrollStart: 0\.02/);
  assert.match(contract, /scrollEnd: 0\.74/);
  assert.match(contract, /heroMediaProgress/);
  assert.match(contract, /fit: "cover"/);
  assert.match(contract, /textSafe: "left"/);
  assert.match(hero, /<h1>/);
  assert.match(hero, /hero-title-line/);
  assert.match(hero, /heroMedia\.poster/);
  assert.match(hero, /hero-video/);
  assert.match(hero, /preload="auto"/);
  assert.match(hero, /attachHeroScrub/);
  assert.doesNotMatch(hero, /autoplay|scale\(/);
  assert.match(scrub, /prefers-reduced-motion/);
  assert.match(scrub, /currentTime/);
  assert.match(scrub, /heroMediaProgress/);
  assert.match(hero, /heroMediaProgress/);
  assert.match(css, /object-fit:\s*cover|hero-video/);
  assert.match(css, /min-height:\s*300vh/);
  assert.match(css, /@keyframes hero-title-in/);
  assert.match(css, /@keyframes hero-kicker-in/);
  assert.match(
    css,
    /prefers-reduced-motion:\s*reduce[\s\S]*\.hero-title-line > span/,
  );
  assert.match(css, /prefers-reduced-motion:\s*reduce[\s\S]*\.hero-video/);
  const heroMedia = css.slice(
    css.indexOf(".hero-poster,"),
    css.indexOf(".hero-scrim"),
  );
  assert.match(heroMedia, /\.hero-video/);
  assert.doesNotMatch(heroMedia, /transform:\s*scale/);
  assert.match(
    css,
    /\.hero-progress i[\s\S]*?transform:\s*scaleX\(var\(--hero-p/,
  );
  assert.doesNotMatch(`${hero}\n${scrub}`, /transform:\s*scale|100vh\s+100vh/);
});
