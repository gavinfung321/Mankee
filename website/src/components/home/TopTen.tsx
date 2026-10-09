"use client";

import { useEffect, useRef } from "react";
import { homeSections, site, topTen } from "../../content/index.ts";
import { attachTopTenPreview } from "../../islands/TopTenPreview.ts";
import { publicValue } from "../../lib/facts.ts";

const section = homeSections[3];
const disclaimer = publicValue(site.disclaimer);
const dishes = [...topTen];

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
      className="home-section nav-target"
    >
      <div className="home-inner">
        <h2>{section.heading}</h2>
        <p className="top-ten-feature" aria-live="polite">
          {dishes[0].name}
        </p>
        <ol className="top-ten-list top-ten-interactive">
          {dishes.map((dish, index) => (
            <li key={dish.name}>
              <details
                className="top-ten-dish"
                name="top-ten"
                open={index === 0}
              >
                <summary>{dish.name}</summary>
              </details>
            </li>
          ))}
        </ol>
        {disclaimer && <p>{disclaimer}</p>}
      </div>
    </section>
  );
}
