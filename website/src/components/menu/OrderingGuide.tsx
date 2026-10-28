import { homeSections, site, topTen } from "../../content/index.ts";
import { publicValue } from "../../lib/facts.ts";

const orderLink = site.navigation.find((item) => item.id === "order");
const steps = homeSections[1];
const signatures = homeSections[2];
const disclaimer = publicValue(site.disclaimer);

export function OrderingGuide() {
  return (
    <section className="home-section menu-guide">
      <div className="home-inner">
        {orderLink && <h1>{orderLink.label}</h1>}
        <h2>{steps.flow}</h2>
        <ol className="order-steps">
          {steps.steps.map((step) => (
            <li key={step.id}>
              <span>{step.label}</span>
              {"flavours" in step && step.flavours.length > 0 && (
                <span className="flavours">{step.flavours.join("、")}</span>
              )}
            </li>
          ))}
        </ol>
        <h2>{signatures.heading}</h2>
        <ol className="top-ten-list">
          {topTen.map((dish) => (
            <li key={dish.name}>{dish.name}</li>
          ))}
        </ol>
        {disclaimer && <p>{disclaimer}</p>}
      </div>
    </section>
  );
}
