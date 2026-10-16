import { withBase } from "../../lib/basePath.ts";

export function SensoryTrio() {
  return (
    <section className="home-section sensory-section" aria-label="舊式香港">
      <div className="sensory-steel" aria-hidden="true" />
      <div className="home-inner sensory-spread">
        <header className="sensory-heading">
          <p className="section-kicker sensory-kicker">舊式香港</p>
          <h2>
            <span>排隊輪候，逐樣落單。</span>
            <span>就是車仔麵的舊式點法。</span>
          </h2>
          <p className="sensory-note">
            舊時是一架木頭車，<span>麵、湯、餸都由客人自己揀。</span>
          </p>
        </header>

        <div className="sensory-stage">
          <figure className="sensory-plate sensory-dusk">
            <span className="sensory-back" aria-hidden="true" />
            <span className="sensory-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/media/store/queue-dusk.webp")}
                alt="傍晚，客人沿街輪候"
                width={1024}
                height={768}
                loading="lazy"
                decoding="async"
              />
            </span>
            <figcaption className="sensory-caption">傍晚｜隊伍沿街排開</figcaption>
          </figure>

          <svg
            className="sensory-queue-line sensory-queue-line--desktop"
            viewBox="0 0 1000 640"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              pathLength="1"
              d="M250 420 C 320 455, 380 510, 450 545 C 530 590, 620 600, 720 575 C 800 555, 860 530, 920 560"
            />
          </svg>

          <svg
            className="sensory-queue-line sensory-queue-line--mobile"
            viewBox="0 0 390 520"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              pathLength="1"
              d="M72 210 C 90 260, 105 320, 118 380 C 128 430, 145 470, 180 500"
            />
          </svg>

          <figure className="sensory-plate sensory-day">
            <span className="sensory-back" aria-hidden="true" />
            <span className="sensory-shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/media/store/queue-day.webp")}
                alt="日間，客人在文記店外輪候"
                width={1024}
                height={768}
                loading="lazy"
                decoding="async"
              />
            </span>
            <figcaption className="sensory-caption">日間｜店外逐位輪候</figcaption>
          </figure>

          <p className="sensory-handoff">
            <span className="sensory-marker" aria-hidden="true" />
            排到埋去，就由湯開始。
          </p>
        </div>
      </div>
    </section>
  );
}
