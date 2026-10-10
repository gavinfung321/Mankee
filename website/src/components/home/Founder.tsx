import { homeSections } from "../../content/index.ts";
import { publicValue } from "../../lib/facts.ts";

const section = homeSections[5];
const name = publicValue(section.founder.name);
const englishName = publicValue(section.founder.englishName);
const portraitValue = publicValue(section.founder.portrait);
const quotation = publicValue(section.founder.quotation);
const portrait = typeof portraitValue === "string" ? portraitValue : undefined;
const english = typeof englishName === "string" ? englishName : undefined;
const quote = typeof quotation === "string" ? quotation : undefined;

export function Founder() {
  return (
    <section id={section.anchor} className="home-section nav-target">
      <div className="home-inner founder-layout">
        {portrait && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="founder-photo"
            src={portrait}
            srcSet={`${portrait.replace("-960.webp", "-640.webp")} 640w, ${portrait} 960w`}
            sizes="(min-width: 28rem) 28rem, 100vw"
            width={960}
            height={641}
            loading="lazy"
            decoding="async"
            alt="文記車仔麵創辦人黃志強"
          />
        )}
        <div className="founder-copy">
          <h2>{section.heading}</h2>
          {quote && <blockquote className="founder-quote">{quote}</blockquote>}
          {name && <p className="founder-name">{name}</p>}
          {english && <p className="founder-english">{english}</p>}
        </div>
      </div>
    </section>
  );
}
