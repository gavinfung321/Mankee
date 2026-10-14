import { recognition } from "../../content/index.ts";
import type { Fact } from "../../content/types.ts";
import { publicValue } from "../../lib/facts.ts";

function shown(fact: unknown) {
  if (!fact || typeof fact !== "object" || !("status" in fact))
    return undefined;
  const value = publicValue(fact as Fact<string>);
  return typeof value === "string" ? value : undefined;
}

const [michelin, lead, second] = recognition;

const streakLabel = "指南收錄記錄";
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
        <div className="recognition-hero">
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
          {years && (
            <div className="recognition-record">
              <p className="recognition-streak">{streakLabel}</p>
              <p className="recognition-years">{years.replace("–", "—")}</p>
            </div>
          )}
        </div>
        <header className="recognition-visits-intro">
          <p className="recognition-divider">{visitsKicker}</p>
          <h3>{visitsHeading}</h3>
          <p className="recognition-visits-line">{visitsLine}</p>
        </header>
        <div className="recognition-visits">
          <Visit item={lead} className="recognition-visit--lead" />
          <div className="recognition-side">
            <Visit item={second} className="recognition-visit--second" />
            <a className="press-link" href="/press/">
              其他報道 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
