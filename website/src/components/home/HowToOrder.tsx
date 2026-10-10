import { homeSections, site } from "../../content/index.ts";
import { publicValue } from "../../lib/facts.ts";

const section = homeSections[2];
const orderLink = site.navigation.find((item) => item.id === "order");
const disclaimer = publicValue(site.disclaimer);
const stepMarks = ["一", "二", "三"];
const stepNotes = ["先揀湯底", "再揀麵", "逐樣揀餸"];

export function HowToOrder() {
  const soup = section.steps.find((step) => "flavours" in step);
  const flavours =
    soup && "flavours" in soup ? soup.flavours.join("／") : undefined;

  return (
    <section
      id="how-to-order"
      className="home-section order-section nav-target"
    >
      <div className="home-inner">
        <div className="order-layout">
          <div className="order-intro">
            <p className="section-kicker">文記落單體驗</p>
            <h2>你的一碗，由你決定</h2>
            <p className="order-story">
              先揀湯底，然後揀麵，最後逐樣告訴師傅你想吃甚麼。想味道再突出，可以在揀湯時選擇加
              {flavours}。沿着不鏽鋼配料檔向前，就是香港車仔麵的點法。
            </p>
            <p className="order-callout">{section.flow}</p>
            {flavours && (
              <p className="optional-flavour">揀湯時可選加味：{flavours}</p>
            )}
            {disclaimer && <p className="order-note">{disclaimer}</p>}
            {orderLink && (
              <a className="order-link" href={orderLink.href}>
                {orderLink.label}
              </a>
            )}
            <ol className="order-steps">
              {section.steps.map((step, index) => (
                <li key={step.id}>
                  <span className="step-mark" aria-hidden="true">
                    {stepMarks[index]}
                  </span>
                  <span className="step-label">{step.label}</span>
                  <span className="step-note">{stepNotes[index]}</span>
                  {"flavours" in step && step.flavours.length > 0 && (
                    <span className="flavours">{step.flavours.join("、")}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
          <figure className="counter-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/food/counter-trays.webp"
              alt="不鏽鋼配料檔"
              width={1600}
              height={1800}
            />
            <figcaption>不鏽鋼配料檔</figcaption>
          </figure>
        </div>
        <p className="order-handoff">
          <a href="#top-ten">第一次來，可以由文記十大開始</a>
        </p>
      </div>
    </section>
  );
}
