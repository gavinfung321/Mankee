import { recognition } from "../../content/index.ts";
import type { Fact } from "../../content/types.ts";
import { publicValue } from "../../lib/facts.ts";

function shown(fact: unknown) {
  if (!fact || typeof fact !== "object" || !("status" in fact)) return undefined;
  const value = publicValue(fact as Fact<string>);
  return typeof value === "string" ? value : undefined;
}

export function Recognition() {
  return (
    <section className="home-section">
      <div className="home-inner">
        <ul className="recognition-list">
          {recognition.map((item) => {
            const line = publicValue(item.line);
            const years = "yearRange" in item ? shown(item.yearRange) : undefined;
            const image = "image" in item ? shown(item.image) : undefined;
            if (!line && !image) return null;
            return (
              <li key={item.id}>
                {image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="recognition-mark"
                    src={image}
                    width={500}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    alt={years ? `${years} 米芝蓮` : line}
                  />
                )}
                {line && (
                  <span>
                    {years ? `${years} ` : ""}
                    {line}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        <a href="/press/">報道</a>
      </div>
    </section>
  );
}
