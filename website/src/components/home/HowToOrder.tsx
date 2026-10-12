import { homeSections, site } from "../../content/index.ts";
import { publicValue } from "../../lib/facts.ts";

const section = homeSections[2];
const disclaimer = publicValue(site.disclaimer);
const marks = ["01", "02", "03"];

function choiceLine(step: (typeof section.steps)[number]) {
  if ("note" in step) return step.note;
  const choices = step.choices.join("、");
  if (!("flavours" in step)) return choices;
  return (
    <>
      {choices}
      <br />
      可加{step.flavours.join("、")}
    </>
  );
}

export function HowToOrder() {
  return (
    <section
      id="how-to-order"
      className="home-section order-section nav-target"
    >
      <div className="home-inner order-layout">
        <div className="order-intro">
          <p className="section-kicker">文記落單體驗</p>
          <h2>你的一碗，由你決定</h2>
          <p className="order-story">
            跟住條隊向前，就是香港車仔麵的點法。
          </p>
          {disclaimer && <p className="menu-disclaimer">{disclaimer}</p>}
        </div>
        <figure className="order-window">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/food/counter-trays.webp"
            alt="文記櫃檯的鋼盤和配料"
            width={1024}
            height={768}
          />
          <ol className="order-strip">
            {section.steps.map((step, index) => (
              <li key={step.id}>
                <span className="order-num">{marks[index]}</span>
                <b>{step.label}</b>
                <p>{choiceLine(step)}</p>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}
