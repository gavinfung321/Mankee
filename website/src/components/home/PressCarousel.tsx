"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const interval = 5000;

// Children are the server-rendered card list, so every link works without JavaScript.
// An arrow, a sideways swipe or wheel, or a mouse press stops autoplay for the rest of the visit; there is no resume control.
// Below 40rem the arrows sit in a row under the card with one passive dot per card.
export function PressCarousel({
  railId,
  children,
}: {
  railId: string;
  children: ReactNode;
}) {
  const region = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);

  const step = useCallback(
    (direction: -1 | 1) => {
      const rail = document.getElementById(railId);
      const card = rail?.firstElementChild as HTMLElement | null;
      if (!rail || !card) return;
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
        ? "auto"
        : "smooth";
      const max = rail.scrollWidth - rail.clientWidth;
      if (direction === 1 && rail.scrollLeft >= max - 2) {
        rail.scrollTo({ left: 0, behavior });
      } else if (direction === -1 && rail.scrollLeft <= 2) {
        rail.scrollTo({ left: max, behavior });
      } else {
        const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
        rail.scrollBy({ left: direction * (card.offsetWidth + gap), behavior });
      }
    },
    [railId],
  );

  useEffect(() => {
    setReady(true);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduced(motion.matches);
    const syncVisibility = () =>
      setPageHidden(document.visibilityState === "hidden");
    syncMotion();
    syncVisibility();
    motion.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncVisibility);

    const rail = document.getElementById(railId);
    setCount(rail?.children.length ?? 0);

    // Only sideways intent stops autoplay; a page scroll that starts on a card must not.
    const manual = () => setUserPaused(true);
    const press = (event: PointerEvent) => {
      if (event.pointerType !== "touch") manual();
    };
    const wheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) manual();
    };
    let touchX = 0;
    let touchY = 0;
    const touchStart = (event: TouchEvent) => {
      touchX = event.touches[0].clientX;
      touchY = event.touches[0].clientY;
    };
    const touchMove = (event: TouchEvent) => {
      const dx = Math.abs(event.touches[0].clientX - touchX);
      const dy = Math.abs(event.touches[0].clientY - touchY);
      if (dx > 10 && dx > dy) manual();
    };
    const syncActive = () => {
      const card = rail?.firstElementChild as HTMLElement | null;
      if (!rail || !card) return;
      const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
      setActive(Math.round(rail.scrollLeft / (card.offsetWidth + gap)));
    };
    rail?.addEventListener("pointerdown", press);
    rail?.addEventListener("wheel", wheel, { passive: true });
    rail?.addEventListener("touchstart", touchStart, { passive: true });
    rail?.addEventListener("touchmove", touchMove, { passive: true });
    rail?.addEventListener("scroll", syncActive, { passive: true });

    // A card anchor (e.g. #journal-creators) shows the section heading with that card in the rail, held there.
    const revealCard = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const card = id ? document.getElementById(id) : null;
      if (!rail || !card || card.parentElement !== rail) return;
      setUserPaused(true);
      card.scrollIntoView({ block: "nearest", inline: "start" });
      rail.closest("section")?.scrollIntoView({ block: "start" });
    };
    revealCard();
    window.addEventListener("hashchange", revealCard);
    return () => {
      window.removeEventListener("hashchange", revealCard);
      motion.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncVisibility);
      rail?.removeEventListener("pointerdown", press);
      rail?.removeEventListener("wheel", wheel);
      rail?.removeEventListener("touchstart", touchStart);
      rail?.removeEventListener("touchmove", touchMove);
      rail?.removeEventListener("scroll", syncActive);
    };
  }, [railId]);

  const playing = ready && !reduced && !userPaused;
  const running = playing && !hovered && !focused && !pageHidden;

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      if (!region.current?.matches(":hover, :focus-within")) step(1);
    }, interval);
    return () => window.clearInterval(timer);
  }, [running, step]);

  function manualStep(direction: -1 | 1) {
    setUserPaused(true);
    step(direction);
  }

  return (
    <div
      ref={region}
      className="press-carousel"
      data-autoplay={running ? "running" : "paused"}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!region.current?.contains(event.relatedTarget as Node | null))
          setFocused(false);
      }}
    >
      {children}
      {ready && (
        <div className="press-controls">
          <button
            type="button"
            className="press-arrow press-arrow--prev"
            aria-controls={railId}
            aria-label="上一則報道"
            onClick={() => manualStep(-1)}
          >
            <ArrowLeft aria-hidden="true" size={20} strokeWidth={1.75} />
          </button>
          <div className="press-dots" aria-hidden="true">
            {Array.from({ length: count }, (_, index) => (
              <span
                key={index}
                className="press-dot"
                data-active={index === active ? "" : undefined}
              />
            ))}
          </div>
          <button
            type="button"
            className="press-arrow press-arrow--next"
            aria-controls={railId}
            aria-label="下一則報道"
            onClick={() => manualStep(1)}
          >
            <ArrowRight aria-hidden="true" size={20} strokeWidth={1.75} />
          </button>
        </div>
      )}
    </div>
  );
}
