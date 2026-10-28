"use client";

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TransitionEvent,
} from "react";
import { homeSections, site, topTen } from "../../content/index.ts";
import { withBase } from "../../lib/basePath.ts";
import { publicValue } from "../../lib/facts.ts";
import { previewFor } from "./dishPreview.ts";

const section = homeSections[2];
const disclaimer = publicValue(site.disclaimer);
const dishes = [...topTen];

export function TopTen() {
  const rootRef = useRef<HTMLElement>(null);
  const [previewId, setPreviewId] = useState<number>(dishes[0].order);
  const [motionPreview, setMotionPreview] = useState(false);
  const rowRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const pendingFocus = useRef<number | null>(null);

  const previewDish = dishes.find((dish) => dish.order === previewId) ?? dishes[0];
  const preview = previewFor(previewDish.name);
  const previewRef = useRef(preview);
  const [settled, setSettled] = useState(preview);
  const [overlay, setOverlay] = useState<ReturnType<typeof previewFor> | null>(null);
  const [overlayIn, setOverlayIn] = useState(false);
  previewRef.current = preview;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      root.classList.add("is-entered");
      return;
    }

    root.classList.add("is-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || entry.intersectionRatio < 0.1) return;
        root.classList.add("is-entered");
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -24% 0px",
        threshold: 0.1,
      },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const index = pendingFocus.current;
    if (index == null) return;
    pendingFocus.current = null;
    rowRefs.current[index]?.focus();
  }, [previewId]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!motionPreview || reduce || preview.image === settled.image) {
      setSettled(preview);
      setOverlay(null);
      setOverlayIn(false);
      return;
    }
    setOverlay(preview);
    setOverlayIn(false);
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setOverlayIn(true));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [preview, settled.image, motionPreview]);

  function finishFade(event: TransitionEvent<HTMLImageElement>) {
    if (event.propertyName !== "opacity") return;
    if (Number(getComputedStyle(event.currentTarget).opacity) < 1) return;
    const current = previewRef.current;
    if (!event.currentTarget.src.endsWith(current.image)) return;
    setSettled(current);
    setOverlay(null);
    setOverlayIn(false);
  }

  function showPreview(id: number, animate: boolean) {
    setMotionPreview(animate);
    setPreviewId(id);
  }

  function movePreview(index: number) {
    setMotionPreview(false);
    pendingFocus.current = index;
    setPreviewId(dishes[index].order);
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowDown") movePreview(Math.min(dishes.length - 1, index + 1));
    else if (event.key === "ArrowUp") movePreview(Math.max(0, index - 1));
    else if (event.key === "Home") movePreview(0);
    else if (event.key === "End") movePreview(dishes.length - 1);
    else if (event.key === "Enter" || event.key === " ")
      showPreview(dishes[index].order, false);
    else return;
    event.preventDefault();
  }

  return (
    <section
      ref={rootRef}
      id={section.anchor}
      className="home-section top-ten-section nav-target"
    >
      <div className="home-inner">
        <div className="top-ten-layout">
          <div className="top-ten-index">
            <p className="section-kicker">十大推介</p>
            <h2>{section.heading}</h2>
            <p className="top-ten-intro">可以由這十款開始</p>
          </div>
          <p className="top-ten-guide">點選配料，預覽大圖</p>
          <div className="top-ten-stage">
            <figure className="dish-preview">
              <span className="dish-preview-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="dish-preview-photo"
                  src={withBase(settled.image)}
                  alt={settled.name}
                  width={1200}
                  height={750}
                  style={{ objectPosition: settled.crop }}
                />
                {overlay && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className={`dish-preview-photo dish-preview-photo-in${overlayIn ? " is-in" : ""}`}
                    src={withBase(overlay.image)}
                    alt=""
                    aria-hidden="true"
                    width={1200}
                    height={750}
                    style={{ objectPosition: overlay.crop }}
                    onTransitionEnd={finishFade}
                  />
                )}
              </span>
              <figcaption className="dish-preview-label">
                <span>目前預覽</span>
                <span className="dish-preview-num">
                  {String(previewDish.order).padStart(2, "0")}
                </span>
                <span className="dish-preview-name">{previewDish.name}</span>
              </figcaption>
            </figure>
          </div>
          <div className="top-ten-ledger">
            <ol className="top-ten-list top-ten-interactive" aria-label="文記十大">
              {dishes.map((dish, index) => {
                const number = String(dish.order).padStart(2, "0");
                const current = dish.order === previewId;
                return (
                  <li key={dish.name}>
                    <button
                      ref={(node) => {
                        rowRefs.current[index] = node;
                      }}
                      type="button"
                      className="top-ten-dish"
                      aria-current={current ? "true" : undefined}
                      data-dish-id={dish.order}
                      data-dish-name={dish.name}
                      data-index={number}
                      tabIndex={current ? 0 : -1}
                      onClick={() => showPreview(dish.order, true)}
                      onKeyDown={(event) => onKeyDown(event, index)}
                    >
                      <span className="top-ten-name">{dish.name}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        {disclaimer && <p className="top-ten-note">{disclaimer}</p>}
      </div>
    </section>
  );
}
