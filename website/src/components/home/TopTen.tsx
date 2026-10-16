"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type TransitionEvent } from "react";
import { homeSections, site, topTen } from "../../content/index.ts";
import { publicValue } from "../../lib/facts.ts";
import { previewFor } from "./dishPreview.ts";

const section = homeSections[3];
const disclaimer = publicValue(site.disclaimer);
const dishes = [...topTen];

export function TopTen() {
  const [previewId, setPreviewId] = useState<number>(dishes[0].order);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [slipDone, setSlipDone] = useState(false);
  const slipRef = useRef<HTMLElement>(null);
  const slipArmed = useRef(true);
  const rowRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const pendingFocus = useRef<number | null>(null);

  const previewDish = dishes.find((dish) => dish.order === previewId) ?? dishes[0];
  const preview = previewFor(previewDish.name);
  const previewRef = useRef(preview);
  const [settled, setSettled] = useState(preview);
  const [overlay, setOverlay] = useState<ReturnType<typeof previewFor> | null>(null);
  const [overlayIn, setOverlayIn] = useState(false);
  previewRef.current = preview;
  const selectedNames = dishes
    .filter((dish) => selectedIds.includes(dish.order))
    .map((dish) => dish.name);

  useEffect(() => {
    const onScroll = () => {
      const slip = slipRef.current;
      const last = rowRefs.current[dishes.length - 1];
      if (!slip || !last) return;
      const height = window.innerHeight;
      const slipRect = slip.getBoundingClientRect();
      const wide = window.matchMedia("(min-width: 64rem)").matches;
      const lastRect = last.getBoundingClientRect();
      const headerBottom = document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 64;
      const slipOnScreen = slipRect.top >= headerBottom && slipRect.bottom <= height * 0.92;
      const reached = wide
        ? slipRect.top < height * 0.9 &&
          slipRect.bottom > height * 0.1 &&
          lastRect.top <= height * 0.7 &&
          lastRect.bottom > 0
        : slipOnScreen;
      if (!reached) {
        slipArmed.current = true;
        return;
      }
      if (slipArmed.current) setSlipDone(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const index = pendingFocus.current;
    if (index == null) return;
    pendingFocus.current = null;
    rowRefs.current[index]?.focus();
  }, [previewId]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || preview.image === settled.image) {
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
  }, [preview, settled.image]);

  function finishFade(event: TransitionEvent<HTMLImageElement>) {
    if (event.propertyName !== "opacity") return;
    if (Number(getComputedStyle(event.currentTarget).opacity) < 1) return;
    setSettled(previewRef.current);
    setOverlay(null);
    setOverlayIn(false);
  }

  function toggle(id: number) {
    setSlipDone(false);
    slipArmed.current = false;
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id].sort((a, b) => a - b),
    );
    setPreviewId(id);
  }

  function movePreview(index: number) {
    pendingFocus.current = index;
    setPreviewId(dishes[index].order);
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowDown") movePreview(Math.min(dishes.length - 1, index + 1));
    else if (event.key === "ArrowUp") movePreview(Math.max(0, index - 1));
    else if (event.key === "Home") movePreview(0);
    else if (event.key === "End") movePreview(dishes.length - 1);
    else if (event.key === "Enter" || event.key === " ") toggle(dishes[index].order);
    else return;
    event.preventDefault();
  }

  return (
    <section id={section.anchor} className="home-section top-ten-section nav-target">
      <div className="home-inner">
        <div className="top-ten-layout">
          <div className="top-ten-index">
            <p className="section-kicker">十大推介</p>
            <h2>{section.heading}</h2>
            <p className="top-ten-intro">可以由這十款開始</p>
          </div>
          <p className="top-ten-guide">
            <span>點選配料，可揀多款</span>
            <span className="top-ten-count" aria-live="polite">
              已揀 <b>{selectedIds.length}</b> / 10
            </span>
          </p>
          <div className="top-ten-stage">
          <figure className="dish-preview">
            <span className="dish-preview-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="dish-preview-photo"
                src={settled.image}
                alt={settled.name}
                width={1200}
                height={750}
                style={{ objectPosition: settled.crop }}
              />
              {overlay && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className={`dish-preview-photo dish-preview-photo-in${overlayIn ? " is-in" : ""}`}
                  src={overlay.image}
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
          <aside ref={slipRef} className="order-slip-card top-ten-slip" aria-label="你的文記落單紙">
            <div className="slip-head">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/mankee-logo-transparent.png" alt="" width={28} height={28} />
              <span>文記落單紙</span>
            </div>
            <div className="slip-row">
              <b>湯</b>
              <span>已選</span>
            </div>
            <div className="slip-row">
              <b>麵</b>
              <span>已選</span>
            </div>
            <div className="slip-row slip-toppings">
              <b>餸</b>
              <span>{selectedNames.length > 0 ? selectedNames.join("、") : "逐樣揀"}</span>
            </div>
            <div className={slipDone ? "slip-stamp is-complete" : "slip-stamp"}>{slipDone ? "完成" : "落單"}</div>
            <div className="rail-label">由你揀，文記煮。</div>
          </aside>
          </div>
          <div className="top-ten-ledger">
            <ol className="top-ten-list top-ten-interactive" aria-label="文記十大">
              {dishes.map((dish, index) => {
                const number = String(dish.order).padStart(2, "0");
                const selected = selectedIds.includes(dish.order);
                return (
                  <li key={dish.name}>
                    <button
                      ref={(node) => {
                        rowRefs.current[index] = node;
                      }}
                      type="button"
                      className="top-ten-dish"
                      role="checkbox"
                      aria-checked={selected}
                      aria-current={dish.order === previewId ? "true" : undefined}
                      data-dish-id={dish.order}
                      data-dish-name={dish.name}
                      data-index={number}
                      tabIndex={dish.order === previewId ? 0 : -1}
                      onClick={() => toggle(dish.order)}
                      onKeyDown={(event) => onKeyDown(event, index)}
                    >
                      <span className="top-ten-name">{dish.name}</span>
                      <span className="top-ten-action">
                        {selected ? <span className="top-ten-tick" aria-hidden="true" /> : <span aria-hidden="true">＋</span>}
                        {selected ? "已揀" : "加入"}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
            <p className="top-ten-selected" hidden>
              {selectedNames.join("、")}
            </p>
          </div>
        </div>
        {disclaimer && <p className="top-ten-note">{disclaimer}</p>}
      </div>
    </section>
  );
}
