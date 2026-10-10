"use client";

import { useEffect, useRef } from "react";
import { homeSections, site, topTen } from "../../content/index.ts";
import { attachTopTenPreview } from "../../islands/TopTenPreview.ts";
import { publicValue } from "../../lib/facts.ts";
import { previewFor } from "./dishPreview.ts";

const section = homeSections[3];
const disclaimer = publicValue(site.disclaimer);
const dishes = [...topTen];
const opening = previewFor(dishes[0].name);

export function TopTen() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (node) attachTopTenPreview(node);
  }, []);

  return (
    <section
      ref={sectionRef}
      id={section.anchor}
      className="home-section top-ten-section nav-target"
    >
      <div className="home-inner">
        <div className="top-ten-layout">
          <figure className="dish-preview">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="dish-preview-photo"
              src={opening.image}
              alt={opening.name}
              width={1200}
              height={1500}
            />
            <figcaption>
              <p className="top-ten-feature" aria-live="polite">
                {dishes[0].name}
              </p>
              <p className="dish-preview-note">{opening.description}</p>
            </figcaption>
          </figure>
          <div className="top-ten-index">
            <p className="section-kicker">第一次來文記</p>
            <h2>{section.heading}</h2>
            <p className="top-ten-intro">可以由這十款開始</p>
            <ol className="top-ten-list top-ten-interactive">
              {dishes.map((dish, index) => {
                const preview = previewFor(dish.name);
                return (
                  <li key={dish.name}>
                    <details
                      className="top-ten-dish"
                      name="top-ten"
                      open={index === 0}
                      data-image={preview.image}
                      data-description={preview.description}
                    >
                      <summary>{dish.name}</summary>
                    </details>
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
