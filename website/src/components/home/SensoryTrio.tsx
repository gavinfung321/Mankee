export function SensoryTrio() {
  return (
    <section className="home-section sensory-section" aria-label="舊式香港">
      <div className="home-inner sensory-spread">
        <header className="sensory-heading">
          <p className="section-kicker">舊式香港</p>
          <h2>
            <span>排隊輪候，逐樣落單。</span>
            <span>就是車仔麵的舊式點法。</span>
          </h2>
          <p className="sensory-note">
            舊時是一架木頭車，<span>麵、湯、餸都由客人自己揀。</span>
          </p>
        </header>
        <figure className="sensory-queue sensory-dusk">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/store/queue-dusk.webp"
            alt="傍晚，客人沿街輪候"
            width={1024}
            height={768}
            loading="lazy"
          />
          <figcaption>傍晚｜隊伍沿街排開</figcaption>
        </figure>
        <figure className="sensory-queue sensory-day">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/store/queue-day.webp"
            alt="日間，客人在文記店外輪候"
            width={1024}
            height={768}
            loading="lazy"
          />
          <figcaption>日間｜店外逐位輪候</figcaption>
        </figure>
        <p className="sensory-handoff">排到埋去，就由湯開始。</p>
      </div>
    </section>
  );
}
