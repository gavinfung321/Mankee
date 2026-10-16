"use client";

import { useEffect, useRef } from "react";
import { homeSections } from "../../content/index.ts";
import { attachHeroScrub } from "../../islands/HeroScrub.ts";
import { heroMedia, heroMediaProgress } from "../../lib/hero.ts";

const hero = homeSections[0];
const heroTitle = `${hero.heading}。`;
const heroTitleBreak = heroTitle.lastIndexOf("開始");
const heroTitleLines =
  heroTitleBreak > 0
    ? [heroTitle.slice(0, heroTitleBreak), heroTitle.slice(heroTitleBreak)]
    : [heroTitle];

const toppingMoments = [
  { start: 0.3, end: 2.75, name: "瑞士雞翼" },
  { start: 4.25, end: 7.25, name: "上湯花膠" },
  { start: 8.65, end: 11.35, name: "南乳豬手" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    attachHeroScrub(section);
    const video = section.querySelector("video");
    const label = section.querySelector(".hero-topping-label");
    const labelName = label?.querySelector("strong");
    const paint = () => {
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(
        1,
        Math.max(0, -section.getBoundingClientRect().top / travel),
      );
      const intro = 1 - Math.min(1, progress / 0.22);
      const finish = Math.min(1, Math.max(0, (progress - 0.66) / 0.08));
      const mobileMediaPhase = Math.min(
        1,
        Math.max(0, (progress - 0.08) / 0.16),
      );
      section.style.setProperty("--hero-p", progress.toFixed(4));
      section.style.setProperty("--hero-shade-opacity", (1 - progress * 0.55).toFixed(3));
      section.style.setProperty("--hero-intro-opacity", intro.toFixed(3));
      section.style.setProperty("--hero-intro-y", `${(-progress * 22).toFixed(2)}px`);
      section.style.setProperty("--hero-finish-opacity", finish.toFixed(3));
      section.style.setProperty("--hero-finish-y", `${((1 - progress) * 28).toFixed(2)}px`);
      section.style.setProperty(
        "--hero-mobile-media-top",
        `${(56 - mobileMediaPhase * 8).toFixed(2)}%`,
      );
      section.style.setProperty(
        "--hero-mobile-media-width",
        `${(140 + mobileMediaPhase * 6).toFixed(2)}vw`,
      );
      const time =
        video instanceof HTMLVideoElement && Number.isFinite(video.duration)
          ? heroMediaProgress(progress) * video.duration
          : 0;
      const active = toppingMoments.find((item) => time >= item.start && time <= item.end);
      label?.classList.toggle("is-visible", Boolean(active));
      if (labelName) labelName.textContent = active?.name ?? "";
    };
    paint();
    window.addEventListener("scroll", paint, { passive: true });
    window.addEventListener("resize", paint);
    if (!(video instanceof HTMLVideoElement)) {
      return () => {
        window.removeEventListener("scroll", paint);
        window.removeEventListener("resize", paint);
      };
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const start = () => {
      if (reduced.matches) return;
      video.preload = "auto";
      video.load();
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      window.removeEventListener("scroll", paint);
      window.removeEventListener("resize", paint);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-backdrop home-hero"
      data-text-safe={heroMedia.textSafe}
    >
      <div className="hero-stick">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hero-poster"
        src={heroMedia.poster}
        srcSet={heroMedia.posterSrcSet}
        sizes="100vw"
        width={heroMedia.posterWidth}
        height={heroMedia.posterHeight}
        alt=""
        fetchPriority="high"
        aria-hidden="true"
      />
      <video
        className="hero-video"
        src={heroMedia.src}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero-scrim" aria-hidden="true" />
      <header className="hero-intro">
        <p className="hero-kicker">文記推介</p>
        <h1>
          {heroTitleLines.map((line) => (
            <span className="hero-title-line" key={line}>
              <span>{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-lead">捲動控制三款招牌配料逐一落碗。</p>
      </header>
      <div className="hero-finish">
        <span>三款招牌</span>
        <strong>一碗文記</strong>
        <p>瑞士雞翼、上湯花膠、南乳豬手。</p>
      </div>
      <div className="hero-topping-label" aria-hidden="true">
        <strong />
      </div>
      <div className="hero-progress" aria-hidden="true">
        <i />
      </div>
      </div>
    </section>
  );
}
