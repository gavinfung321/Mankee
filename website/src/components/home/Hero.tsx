"use client";

import { useEffect, useRef } from "react";
import { homeSections } from "../../content/index.ts";
import { attachHeroScrub } from "../../islands/HeroScrub.ts";
import { heroMedia } from "../../lib/hero.ts";

const hero = homeSections[0];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    attachHeroScrub(section);
    const video = section.querySelector("video");
    if (!(video instanceof HTMLVideoElement)) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const start = () => {
      if (reduced.matches) return;
      video.preload = "metadata";
      video.load();
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-backdrop home-hero"
      data-text-safe={heroMedia.textSafe}
    >
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
        style={{
          objectFit: heroMedia.crop.fit,
          objectPosition: heroMedia.crop.position,
        }}
      />
      <video
        className="hero-video"
        src={heroMedia.src}
        muted
        playsInline
        preload="none"
        aria-hidden="true"
        style={{
          objectFit: heroMedia.crop.fit,
          objectPosition: heroMedia.crop.position,
        }}
      />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="home-inner">
        <h1>{hero.heading}</h1>
      </div>
    </section>
  );
}
