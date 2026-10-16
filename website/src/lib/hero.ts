import { withBase } from "./basePath.ts";

export const heroMedia = {
  src: withBase("/media/hero/hero-signature-three-toppings-scrub-v1-web.mp4"),
  poster: withBase("/media/hero/hero-signature-three-toppings-poster-v1.webp"),
  posterSrcSet: [
    withBase("/media/hero/hero-signature-three-toppings-poster-v1-640.webp") +
      " 640w",
    withBase("/media/hero/hero-signature-three-toppings-poster-v1.webp") +
      " 1280w",
  ].join(", "),
  posterWidth: 1280,
  posterHeight: 720,
  scrollStart: 0.02,
  scrollEnd: 0.74,
  crop: {
    fit: "cover",
    position: "center",
  },
  textSafe: "left",
} as const;

export function heroMediaProgress(scrollProgress: number) {
  const progress =
    (scrollProgress - heroMedia.scrollStart) /
    (heroMedia.scrollEnd - heroMedia.scrollStart);
  return Math.min(1, Math.max(0, progress));
}
