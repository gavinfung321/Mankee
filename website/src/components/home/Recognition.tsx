import { recognition } from "../../content/index.ts";
import type { Fact } from "../../content/types.ts";
import { publicValue } from "../../lib/facts.ts";

function shown(fact: unknown) {
  if (!fact || typeof fact !== "object" || !("status" in fact))
    return undefined;
  const value = publicValue(fact as Fact<string>);
  return typeof value === "string" ? value : undefined;
}

const [michelin, ...visits] = recognition;

export function Recognition() {
  const years = shown(michelin.yearRange);
  const image = shown(michelin.image);
  const line = publicValue(michelin.line);

  return (
    <section className="home-section recognition-section">
      <div className="home-inner recognition-layout">
        <header className="recognition-intro">
          <p className="section-kicker">認可與到訪</p>
          <h2>三項重要記錄</h2>
        </header>
        <div className="recognition-spread">
          <figure className="recognition-michelin">
            {image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="recognition-mark"
                src={image}
                width={500}
                height={500}
                loading="lazy"
                decoding="async"
                alt={years ? `${years} 米芝蓮` : (line ?? "米芝蓮")}
              />
            )}
            <figcaption>
              <span className="recognition-label">指南記錄</span>
            </figcaption>
          </figure>
          <ol className="recognition-ledger">
            {visits.map((item) => {
              const visit = publicValue(item.line);
              if (!visit) return null;
              const name = publicValue(item.name);
              const rest =
                name && visit.startsWith(name)
                  ? visit.slice(name.length)
                  : undefined;
              return (
                <li key={item.id}>
                  <span className="recognition-label">到訪記錄</span>
                  <p>
                    {rest ? (
                      <>
                        <span className="recognition-name">{name}</span>
                        {rest}
                      </>
                    ) : (
                      visit
                    )}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
        <a className="press-link" href="/press/">
          其他報道 →
        </a>
      </div>
    </section>
  );
}
