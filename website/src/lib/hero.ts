export const heroMedia = {
  src: "/media/hero/hero-signature-three-toppings-scrub-v1-web.mp4",
  poster: "/media/hero/hero-signature-three-toppings-poster-v1.webp",
  posterSrcSet:
    "/media/hero/hero-signature-three-toppings-poster-v1-640.webp 640w, /media/hero/hero-signature-three-toppings-poster-v1.webp 1280w",
  posterWidth: 1280,
  posterHeight: 720,
  scrollStart: 0.02,
  scrollEnd: 0.92,
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
