import { homeSections } from "../../content/index.ts";
import { publicValue } from "../../lib/facts.ts";

const section = homeSections[5];
const name = publicValue(section.founder.name);
const englishName = publicValue(section.founder.englishName);
const portraitValue = publicValue(section.founder.portrait);
const roleValue = publicValue(section.founder.role);
const contextValue = publicValue(section.founder.context);
const quotation = publicValue(section.founder.quotation);
const portrait = typeof portraitValue === "string" ? portraitValue : undefined;
const english = typeof englishName === "string" ? englishName : undefined;
const role = typeof roleValue === "string" ? roleValue : undefined;
const context = typeof contextValue === "string" ? contextValue : undefined;
const quote = typeof quotation === "string" ? quotation : undefined;
const quoteLead = "最希望是港人珍惜";
const quoteRest =
  quote?.startsWith(quoteLead) === true ? quote.slice(quoteLead.length) : undefined;

export function Founder() {
  return (
    <section id={section.anchor} className="home-section founder-section nav-target">
      <div className="home-inner founder-layout">
        {portrait && (
          <div className="founder-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="founder-photo"
              src={portrait}
              srcSet={`${portrait.replace("-960.webp", "-640.webp")} 640w, ${portrait} 960w`}
              sizes="(min-width: 64rem) 50vw, 100vw"
              width={960}
              height={641}
              loading="lazy"
              decoding="async"
              alt="文記車仔麵創辦人黃志強"
            />
          </div>
        )}
        <div className="founder-copy">
          <h2 className="founder-label">
            {name}
            {name && english ? " · " : null}
            {english}
            {role ? <span className="founder-role">{role}</span> : null}
          </h2>
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
      </div>
    </section>
  );
}
