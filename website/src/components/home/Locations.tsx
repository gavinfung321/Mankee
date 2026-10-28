import {
  homeSections,
  linkIcons,
  locations,
  visibleLocationLinks,
} from "../../content/index.ts";
import { withBase } from "../../lib/basePath.ts";
import { publicValue } from "../../lib/facts.ts";

const section = homeSections[6];

const fieldLabels = { hours: "營業時間", phone: "電話", email: "電郵" };

function text(value: unknown) {
  return typeof value === "string" ? value : undefined;
}

function withBreak(value: string, after?: string) {
  const at = after ? value.indexOf(after) : -1;
  if (!after || at < 0) return value;
  const cut = at + after.length;
  return (
    <>
      {value.slice(0, cut)}
      <wbr />
      {value.slice(cut)}
    </>
  );
}

function Location({ location }: { location: (typeof locations)[number] }) {
  const label = publicValue(location.label);
  const address = publicValue(location.address);
  const hours = publicValue(location.hours);
  const phone = text(publicValue(location.phone));
  const email = text(publicValue(location.email));
  const links = visibleLocationLinks(location);
  const photo = location.storefront;
  const image = publicValue(photo.image);
  const imageSrc = image ? withBase(image) : undefined;
  const imageSmall = withBase(photo.small);
  const headingId = `${location.id}-name`;

  return (
    <article
      className="location"
      aria-labelledby={label ? headingId : undefined}
    >
      <div className="location-photo">
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            srcSet={`${imageSmall} ${photo.smallWidth}w, ${imageSrc} ${photo.width}w`}
            sizes="(min-width: 64rem) 34rem, calc(100vw - 32px)"
            width={photo.width}
            height={(photo.width * 3) / 4}
            loading="lazy"
            decoding="async"
            alt={photo.alt}
          />
        )}
      </div>
      <header className="location-identity">
        {label && <h3 id={headingId}>{label}</h3>}
        {address && (
          <address>{withBreak(address, location.addressBreakAfter)}</address>
        )}
      </header>
      {(hours || phone || email) && (
        <dl className="location-facts">
          {hours && (
            <div>
              <dt>{fieldLabels.hours}</dt>
              <dd>{hours}</dd>
            </div>
          )}
          {phone && (
            <div>
              <dt>{fieldLabels.phone}</dt>
              <dd>
                <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
              </dd>
            </div>
          )}
          {email && (
            <div>
              <dt>{fieldLabels.email}</dt>
              <dd>
                <a href={`mailto:${email}`} aria-label={email}>
                  {withBreak(email, "@")}
                </a>
              </dd>
            </div>
          )}
        </dl>
      )}
      {links.length > 0 && (
        <ul className="location-actions">
          {links.map((link) => {
            const icon = linkIcons[link.label];
            return (
              <li key={link.label}>
                <a
                  className="location-action"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label ?? ""} ${link.label}（新分頁開啟）`.trim()}
                >
                  {icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="location-action-icon"
                      src={withBase(icon)}
                      width={20}
                      height={20}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <span>
                    {link.label}
                    <span aria-hidden="true"> ↗</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
}

export function Locations() {
  return (
    <section
      id={section.anchor}
      className="home-section nav-target locations-section"
    >
      <div className="home-inner">
        <h2>{section.heading}</h2>
        <div className="locations-layout">
          {locations.map((location) => (
            <Location key={location.id} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}
