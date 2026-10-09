const reduceMotion = "(prefers-reduced-motion: reduce)";

export function attachHeroScrub(section: HTMLElement) {
  const video = section.querySelector("video");
  if (!(video instanceof HTMLVideoElement)) return;
  if (window.matchMedia(reduceMotion).matches) return;

  let frame = 0;

  const update = () => {
    frame = 0;
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;
    const rect = section.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
    const nextTime = progress * video.duration;
    if (Math.abs(video.currentTime - nextTime) > 0.012) {
      video.currentTime = nextTime;
    }
  };

  const requestUpdate = () => {
    if (frame !== 0) return;
    frame = window.requestAnimationFrame(update);
  };

  video.addEventListener("loadedmetadata", requestUpdate);
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  requestUpdate();
}
