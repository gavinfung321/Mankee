import {
  homeSections,
  locations,
  visibleLocationLinks,
} from "../../content/index.ts";
import { publicValue } from "../../lib/facts.ts";

const section = homeSections[7];

export function Locations() {
  return (
    <section id={section.anchor} className="home-section nav-target">
      <div className="home-inner">
        <h2>{section.heading}</h2>
        <ol className="location-list">
          {locations.map((location) => {
            const label = publicValue(location.label);
            const address = publicValue(location.address);
            const hours = publicValue(location.hours);
            const phoneValue = publicValue(location.phone);
            const emailValue = publicValue(location.email);
            const phone =
              typeof phoneValue === "string" ? phoneValue : undefined;
            const email =
              typeof emailValue === "string" ? emailValue : undefined;
            const links = visibleLocationLinks(location);
            return (
              <li key={location.id} className={`location-${location.role}`}>
                {label && <h3>{label}</h3>}
                {address && <p>{address}</p>}
                {hours && <p>{hours}</p>}
                {phone && (
                  <p>
                    <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
                  </p>
                )}
                {email && (
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                )}
                {links.length > 0 && (
                  <ul className="location-links">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a href={link.url}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
