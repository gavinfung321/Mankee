import {
  pressItems,
  recognition,
  visiblePressLinks,
} from "../../content/index.ts";
import type { ReactNode } from "react";
import type { Fact } from "../../content/types.ts";
import { publicValue } from "../../lib/facts.ts";

function shown(fact: unknown) {
  if (!fact || typeof fact !== "object" || !("status" in fact))
    return undefined;
  const value = publicValue(fact as Fact<string>);
  return typeof value === "string" ? value : undefined;
}

const [michelin, lead, second] = recognition;
const [michelinGuide] = visiblePressLinks(pressItems, "michelin");

const listingLabel = "米芝蓮指南資料";
const michelinCta = "查看米芝蓮指南";
const visitsKicker = "到訪記錄";
const visitsHeading = "從指南，到鏡頭。";
const visitsLine = "文記亦曾出現在海外與本地節目。";

const stills = {
  paik: {
    width: 1400,
    height: 785,
    small: 800,
    sizes: "(min-width: 64rem) 44rem, 100vw",
  },
  luisa: {
    width: 960,
    height: 524,
    small: 480,
    sizes: "(min-width: 64rem) 25rem, 80vw",
  },
} as const;

function Visit({
  item,
  className,
}: {
  item: typeof lead | typeof second;
  className: string;
}) {
  const visit = publicValue(item.line);
  if (!visit) return null;
  const name = publicValue(item.name);
  const src = shown(item.still);
  const credit = shown(item.stillCredit);
  const size = stills[item.id];
  return (
    <figure className={`recognition-visit ${className}`}>
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="recognition-still"
          src={src}
          srcSet={`${src.replace(`-${size.width}.webp`, `-${size.small}.webp`)} ${size.small}w, ${src} ${size.width}w`}
          sizes={size.sizes}
          width={size.width}
          height={size.height}
          loading="lazy"
          decoding="async"
          alt={`${name ?? ""}到訪文記車仔麵的節目畫面`}
        />
      )}
      <figcaption>
        <span className="recognition-line">{visit}</span>
        {credit && <span className="recognition-credit">{credit}</span>}
      </figcaption>
    </figure>
  );
}

// The panel is static; only the button links to the Michelin Guide (owner decision, 14 Oct 2026).
// The listing is restated from confirmed facts: no screenshot, iframe or copied description.
function MichelinPanel({ children }: { children: ReactNode }) {
  const name = publicValue(michelin.listingName);
  const meta = publicValue(michelin.listingMeta);
  const address = publicValue(michelin.listingAddress);
  return (
    <div className="recognition-hero">
      {children}
      {michelinGuide && (
        <div className="recognition-listing">
          <p className="section-kicker">{listingLabel}</p>
          {name && <p className="recognition-listing-name">{name}</p>}
          <p className="recognition-listing-title" lang="en">
            {michelinGuide.title}
          </p>
          {meta && (
            <p className="recognition-listing-meta" lang="en">
              {meta}
            </p>
          )}
          {address && (
            <p className="recognition-listing-address" lang="en">
              {address}
            </p>
          )}
          <a
            className="recognition-cta"
            href={michelinGuide.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${michelinCta}（新分頁開啟）`}
          >
            {michelinCta}
            <span className="recognition-cta-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      )}
    </div>
  );
}

export function Recognition() {
  const years = shown(michelin.yearRange);
  const image = shown(michelin.image);
  const heading = shown(michelin.heading);
  const line = publicValue(michelin.line);

  return (
    <section className="home-section recognition-section">
      <div className="home-inner recognition-layout">
        <header className="recognition-intro">
          <p className="section-kicker">認可與到訪</p>
          {heading && <h2>{heading}</h2>}
        </header>
        <MichelinPanel>
          {image && (
            <div className="recognition-art">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="recognition-mark"
                src={image}
                width={500}
                height={500}
                loading="lazy"
                decoding="async"
                alt={`${line ?? "米芝蓮"} 文記車仔麵 ${years ?? ""}`.trim()}
              />
            </div>
          )}
        </MichelinPanel>
        <header className="recognition-visits-intro">
          <p className="recognition-divider">{visitsKicker}</p>
          <h3>{visitsHeading}</h3>
          <p className="recognition-visits-line">{visitsLine}</p>
        </header>
        <div className="recognition-visits">
          <Visit item={lead} className="recognition-visit--lead" />
          <div className="recognition-side">
            <Visit item={second} className="recognition-visit--second" />
          </div>
        </div>
      </div>
    </section>
  );
}
