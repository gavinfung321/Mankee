import { homeSections } from "../../content/index.ts";
import { withBase } from "../../lib/basePath.ts";
import { publicValue } from "../../lib/facts.ts";

const section = homeSections[4];
const name = publicValue(section.founder.name);
const englishName = publicValue(section.founder.englishName);
const portraitValue = publicValue(section.founder.portrait);
const roleValue = publicValue(section.founder.role);
const contextValue = publicValue(section.founder.context);
const quotation = publicValue(section.founder.quotation);
const portrait =
  typeof portraitValue === "string" ? withBase(portraitValue) : undefined;
const portraitSmall =
  typeof portraitValue === "string"
    ? withBase(portraitValue.replace("-960.webp", "-640.webp"))
    : undefined;
const english = typeof englishName === "string" ? englishName : undefined;
const role = typeof roleValue === "string" ? roleValue : undefined;
const context = typeof contextValue === "string" ? contextValue : undefined;
const quote = typeof quotation === "string" ? quotation : undefined;
const storyLabel = "創辦人故事";
const detail = "深水埗 · 創立於2010";
const quoteLead = "最希望是港人珍惜";
const quoteRest =
  quote?.startsWith(quoteLead) === true ? quote.slice(quoteLead.length) : undefined;

export function Founder() {
  return (
    <section id={section.anchor} className="home-section founder-section nav-target">
      <div className="home-inner founder-layout">
        <h2 className="founder-label">{storyLabel}</h2>
        <div className="founder-feature">
          {portrait && (
            <div className="founder-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="founder-photo"
                src={portrait}
                srcSet={`${portraitSmall} 640w, ${portrait} 960w`}
                sizes="(min-width: 64rem) 58vw, 100vw"
                width={960}
                height={641}
                loading="lazy"
                decoding="async"
                alt="文記車仔麵創辦人黃志強"
              />
            </div>
          )}
          <div className="founder-rail">
            <div className="founder-lead">
              {quote && (
                <blockquote className="founder-quote">
                  {quoteRest ? (
                    <>
                      <span className="founder-quote-line">{quoteLead}</span>
                      <span className="founder-quote-line">{quoteRest}</span>
                    </>
                  ) : (
                    quote
                  )}
                </blockquote>
              )}
              {context && <p className="founder-context">{context}</p>}
            </div>
            {name && (
              <div className="founder-meta">
                <p className="founder-identity">
                  <span>
                    {name}
                    {english ? ` · ${english}` : null}
                  </span>
                  {role ? <span className="founder-role">{role}</span> : null}
                  <span className="founder-detail">{detail}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
