const queues = [
  {
    src: "/media/store/queue-day.webp",
    alt: "日間，客人在文記店外輪候",
    label: "日間",
    width: 1024,
    height: 768,
  },
  {
    src: "/media/store/queue-dusk.webp",
    alt: "傍晚，客人沿街輪候",
    label: "傍晚",
    width: 1024,
    height: 768,
  },
];

export function SensoryTrio() {
  return (
    <section className="home-section sensory-section" aria-label="舊式香港">
      <div className="home-inner">
        <header className="sensory-heading">
          <p className="section-kicker">舊式香港</p>
          <h2>排隊輪候，逐樣落單，是車仔麵的舊式點法。</h2>
          <p className="sensory-note">舊時是一架木頭車，麵、湯、餸都由客人自己揀。</p>
        </header>
        <div className="sensory-list">
          {queues.map((queue) => (
            <figure key={queue.src} className="sensory-queue">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={queue.src} alt={queue.alt} width={queue.width} height={queue.height} />
              <figcaption>{queue.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
