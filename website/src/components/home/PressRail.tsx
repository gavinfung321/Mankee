import Image from "next/image";
import { withBase } from "../../lib/basePath.ts";
import { pressItems, visiblePressLinks } from "../../content/index.ts";
import { PressCarousel } from "./PressCarousel";

const links = visiblePressLinks(pressItems);
const kicker = "文記誌 · BLOG";
const heading = "店內日常，與城中報道。";
const railId = "journal-press";
const firstCreator = links.find((link) => link.group === "creators")?.id;
const han = /\p{Script=Han}/u;

export function PressRail() {
  if (links.length === 0) return null;
  return (
    <section
      id="journal"
      className="home-section nav-target press-section"
      aria-labelledby="journal-heading"
    >
      <span id="press" className="nav-target" aria-hidden="true" />
      <div className="home-inner">
        <header className="press-header">
          <p className="section-kicker">{kicker}</p>
          <h2 id="journal-heading">{heading}</h2>
        </header>
        <PressCarousel railId={railId}>
          <ul id={railId} className="press-rail nav-target" aria-label={kicker}>
            {links.map((link) => (
              <li
                key={link.id}
                id={link.id === firstCreator ? "journal-creators" : undefined}
                className="press-card nav-target"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.format}：${link.publisher}：${link.title}（新分頁開啟）`}
                  aria-describedby={
                    link.summary ? `press-summary-${link.id}` : undefined
                  }
                >
                  {link.artwork && (
                    <Image
                      className="press-card-art"
                      src={withBase(link.artwork)}
                      alt=""
                      fill
                      sizes="(min-width: 64rem) 16rem, (min-width: 48rem) 30vw, (min-width: 40rem) 45vw, 100vw"
                    />
                  )}
                  <span className="press-card-overlay">
                    <span className="press-publisher">
                      <span className="press-format">{link.format}</span>
                      {" · "}
                      <span lang={han.test(link.publisher) ? "zh-Hant" : "en"}>
                        {link.publisher}
                      </span>
                    </span>
                    <span className="press-title" lang={link.titleLang}>
                      {link.title}
                    </span>
                    {link.summary && (
                      <span
                        id={`press-summary-${link.id}`}
                        className="press-summary"
                      >
                        <span className="press-summary-text">{link.summary}</span>
                      </span>
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </PressCarousel>
      </div>
    </section>
  );
}
