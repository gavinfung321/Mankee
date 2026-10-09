import { homeSections, site } from "../../content/index.ts";
import { publicValue } from "../../lib/facts.ts";

const section = homeSections[2];
const orderLink = site.navigation.find((item) => item.id === "order");
const disclaimer = publicValue(site.disclaimer);

export function HowToOrder() {
  return (
    <section className="home-section">
      <div className="home-inner">
        <h2>{section.flow}</h2>
        <ol className="order-steps">
          {section.steps.map((step) => (
            <li key={step.id}>
              <span>{step.label}</span>
              {"flavours" in step && step.flavours.length > 0 && (
                <span className="flavours">{step.flavours.join("、")}</span>
              )}
            </li>
          ))}
        </ol>
        {disclaimer && <p>{disclaimer}</p>}
        {orderLink && <a href={orderLink.href}>{orderLink.label}</a>}
      </div>
    </section>
  );
}
