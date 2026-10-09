import { homeSections } from "../../content/index.ts";

const sensory = homeSections[1];

export function SensoryTrio() {
  return (
    <section className="home-section">
      <div className="home-inner">
        <ul className="sensory-list">
          {sensory.items.map((item) => (
            <li key={item.dish}>
              {item.sense}：{item.dish}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
