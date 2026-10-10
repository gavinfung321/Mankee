import { homeSections } from "../../content/index.ts";

const sensory = homeSections[1];

const frames: Record<string, { src: string; note: string }> = {
  瑞士雞翼: { src: "/media/food/sensory-wings.webp", note: "醬香、軟嫩" },
  上湯花膠: { src: "/media/food/sensory-fish-maw.webp", note: "飽滿、吸湯" },
  南乳豬手: { src: "/media/food/sensory-trotter.webp", note: "南乳香、軟腍" },
};

export function SensoryTrio() {
  return (
    <section className="home-section sensory-section">
      <div className="home-inner">
        <div className="sensory-heading">
          <p className="section-kicker">三款招牌</p>
          <h2>三款招牌，三種記憶。</h2>
          <p>
            同一碗裡，瑞士雞翼的香、上湯花膠的厚、南乳豬手的濃，各自有清楚的質感。
          </p>
        </div>
        <ul className="sensory-list">
          {sensory.items.map((item) => {
            const frame = frames[item.dish];
            return (
              <li key={item.dish}>
                {frame && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="sensory-photo"
                    src={frame.src}
                    alt={item.dish}
                    width={1200}
                    height={1400}
                  />
                )}
                <div className="sensory-caption">
                  <span className="sensory-sense">{item.sense}</span>
                  <span className="sensory-dish">{item.dish}</span>
                  {frame && <span className="sensory-note">{frame.note}</span>}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="sensory-handoff">
          <p>由三款招牌走到真實落單，沿着配料檔，由湯開始。</p>
          <a href="#how-to-order">沿着配料檔，由湯開始</a>
        </div>
      </div>
    </section>
  );
}
