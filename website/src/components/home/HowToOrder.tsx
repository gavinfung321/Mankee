"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { homeSections, site } from "../../content/index.ts";
import { publicValue } from "../../lib/facts.ts";

const section = homeSections[2];
const disclaimer = publicValue(site.disclaimer);
const marks = ["01", "02", "03"] as const;

type Step = (typeof section.steps)[number];

function slipValue(step: Step) {
  if ("note" in step) return step.note;
  return step.choices.join("、");
}

function SnapRow({
  mark,
  label,
  value,
  progress,
  reduceMotion,
  index,
}: {
  mark: string;
  label: string;
  value: string;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
  index: number;
}) {
  const start = 0.22 + index * 0.18;
  const end = start + 0.1;
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const y = useTransform(progress, [start, end], [14, 0]);
  const scale = useTransform(progress, [start, end], [0.92, 1]);

  return (
    <motion.div
      className="slip-row"
      style={
        reduceMotion
          ? { opacity: 1 }
          : { opacity, y, scale }
      }
    >
      <b>{label}</b>
      <span>
        <em className="order-theatre-mark">{mark}</em>
        {value}
      </span>
    </motion.div>
  );
}

export function HowToOrder() {
  const theatreRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: theatreRef,
    offset: ["start 80%", "end 40%"],
  });

  const slipY = useTransform(scrollYProgress, [0, 0.18], [-56, 0]);
  const slipRotate = useTransform(scrollYProgress, [0, 0.18], [-6, -2]);
  const slipOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const counterTilt = useTransform(scrollYProgress, [0, 1], [8, 5]);
  const backY = useTransform(scrollYProgress, [0, 1], [12, -6]);
  const stampOpacity = useTransform(scrollYProgress, [0.78, 0.9], [0.14, 1]);
  const stampScale = useTransform(scrollYProgress, [0.78, 0.92], [0.72, 1]);
  const stampRotate = useTransform(scrollYProgress, [0.78, 0.92], [-18, -8]);

  return (
    <section
      id="how-to-order"
      className="home-section order-section nav-target"
      aria-labelledby="order-heading"
    >
      <div className="home-inner order-layout">
        <div className="order-intro">
          <p className="section-kicker">文記落單體驗</p>
          <h2 id="order-heading">你的一碗，由你決定</h2>
          <p className="order-story">
            跟住條隊向前，就是香港車仔麵的點法。
          </p>
          {disclaimer && <p className="menu-disclaimer">{disclaimer}</p>}
        </div>

        <div className="order-theatre" ref={theatreRef}>
          <div className="order-theatre-stage">
            <motion.div
              className="order-counter"
              style={
                reduceMotion
                  ? undefined
                  : { rotateX: counterTilt, transformPerspective: 1200 }
              }
            >
              <motion.div
                className="order-counter-back"
                style={reduceMotion ? undefined : { y: backY }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/food/counter-trays.webp"
                  alt=""
                  width={1024}
                  height={768}
                  decoding="async"
                  loading="lazy"
                />
              </motion.div>
              <div className="order-counter-top" aria-hidden="true" />
              <div className="order-counter-edge" aria-hidden="true" />

              <motion.aside
                className="order-slip-card order-theatre-slip"
                aria-label="文記落單紙"
                style={
                  reduceMotion
                    ? undefined
                    : {
                        y: slipY,
                        rotate: slipRotate,
                        opacity: slipOpacity,
                      }
                }
              >
                <div className="slip-head">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brand/mankee-logo-transparent.png"
                    alt=""
                    width={28}
                    height={28}
                  />
                  <span>文記落單紙</span>
                </div>
                {section.steps.map((step, index) => (
                  <SnapRow
                    key={step.id}
                    mark={marks[index]}
                    label={step.label}
                    value={slipValue(step)}
                    progress={scrollYProgress}
                    reduceMotion={reduceMotion}
                    index={index}
                  />
                ))}
                <motion.div
                  className="slip-stamp is-complete"
                  style={
                    reduceMotion
                      ? { opacity: 1, rotate: -8, scale: 1 }
                      : {
                          opacity: stampOpacity,
                          scale: stampScale,
                          rotate: stampRotate,
                        }
                  }
                >
                  完成
                </motion.div>
                <p className="rail-label">由你揀，文記煮。</p>
              </motion.aside>
            </motion.div>
          </div>

          <ol className="order-theatre-legend">
            {section.steps.map((step, index) => (
              <li key={step.id}>
                <span className="order-num">{marks[index]}</span>
                <b>{step.label}</b>
                <p>
                  {"note" in step ? (
                    step.note
                  ) : "flavours" in step ? (
                    <>
                      {step.choices.join("、")}
                      <br />
                      可加{step.flavours.join("、")}
                    </>
                  ) : (
                    step.choices.join("、")
                  )}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
