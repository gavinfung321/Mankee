import { pressItems, visiblePressLinks } from "../../content/index.ts";

const links = visiblePressLinks(pressItems);

export function PressList() {
  return (
    <section className="home-section press-index">
      <div className="home-inner">
        <h1>報道</h1>
        {links.length > 0 && (
          <ul className="press-list">
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
