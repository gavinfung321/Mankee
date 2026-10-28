"use client";

import { useEffect, useRef } from "react";
import { homeSections, site } from "../../content/index.ts";
import { withBase } from "../../lib/basePath.ts";
import { publicValue } from "../../lib/facts.ts";

const section = homeSections[1];
const disclaimer = publicValue(site.disclaimer);
const marks = ["01", "02", "03"] as const;

export function HowToOrder() {
  const rootRef = useRef<HTMLElement>(null);

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
        rootMargin: "0px 0px -28% 0px",
        threshold: 0.1,
      },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      id="how-to-order"
      className="home-section order-section nav-target"
      aria-labelledby="order-heading"
    >
      <div className="home-inner order-layout">
        <div className="order-intro">
          <div className="order-intro-lead">
            <p className="section-kicker">文記落單體驗</p>
            <h2 id="order-heading">你的一碗，由你決定</h2>
          </div>
          <div className="order-intro-copy">
            <p className="order-story">
              望住一格格餸，逐樣自己揀，就是車仔麵的舊式點法。
            </p>
            {disclaimer && <p className="menu-disclaimer">{disclaimer}</p>}
          </div>
        </div>

        <div className="order-theatre">
          <figure className="order-counter">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${withBase("/media/food/counter-trays-order.webp")}?v=opt5b`}
              alt="文記櫃檯上的餸格，逐樣落進碗裡"
              width={1280}
              height={480}
              decoding="async"
              loading="lazy"
            />
          </figure>

          <ol className="order-theatre-legend">
            {section.steps.map((step, index) => (
              <li key={step.id}>
                <span className="order-num">{marks[index]}</span>
                <b>{step.label}</b>
                <p>
                  {"note" in step ? (
                    <>
                      <span>{step.note.split("，")[0]}</span>
                      <br />
                      <span>{step.note.split("，").slice(1).join("，")}</span>
                    </>
                  ) : "flavours" in step ? (
                    <>
                      <span>{step.choices.join("、")}</span>
                      <br />
                      <span>可加{step.flavours.join("、")}</span>
                    </>
                  ) : (
                    <span>{step.choices.join("、")}</span>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
