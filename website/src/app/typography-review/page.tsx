import type { Metadata } from "next";
import styles from "./review.module.css";

export const metadata: Metadata = {
  title: "Typography review",
  robots: { index: false, follow: false },
};

const punctuation = "「最希望是港人珍惜本土風味食店。」";
const numbers = "01 02 03 04 05 06 07 08 09 10";

export default function TypographyReviewPage() {
  return (
    <>
      <style>{`html,body{overflow:hidden}`}</style>
      <section className={styles.stage} aria-label="Typography review">
        <p className={styles.banner}>
          Typography review
          <span>Temporary. Not the Typography Lock. Homepage type is unchanged.</span>
        </p>
        <div className={styles.examples}>
          <article className={styles.example}>
            <p className={styles.meta}>1. Current Hero style · DFKai-SB, BiauKai, WenKai, Kaiti TC · 700</p>
            <p className={`${styles.sample} ${styles.currentDisplay} ${styles.exampleLine}`}>一碗，由這裏開始</p>
          </article>
          <article className={styles.example}>
            <p className={styles.meta}>2. Cross-device style · LXGW WenKai TC Bold · 700</p>
            <p className={`${styles.sample} ${styles.proposedDisplay} ${styles.exampleLine}`}>一碗，由這裏開始</p>
          </article>
          <article className={styles.example}>
            <p className={styles.meta}>3. Hybrid recommendation · Hero signature keeps the current Hero stack; other headings use LXGW WenKai TC Bold</p>
            <p className={`${styles.sample} ${styles.currentDisplay} ${styles.exampleLine}`}>一碗，由這裏開始</p>
            <p className={`${styles.sample} ${styles.proposedDisplay} ${styles.exampleLine}`}>文記十大</p>
          </article>
        </div>
        <div className={styles.columns}>
          <article className={styles.column}>
            <h1 className={styles.heading}>
              Current production
              <small>Display leads with DFKai-SB, then BiauKai, then WenKai. Text is Noto Sans TC.</small>
            </h1>
            <Sample
              role="Main heading"
              face="DFKai-SB · 650"
              className={`${styles.currentDisplay} ${styles.main}`}
              style={{ fontWeight: 650 }}
            >
              一碗，由這裏開始
            </Sample>
            <Sample
              role="Section heading"
              face="DFKai-SB · 650"
              className={`${styles.currentDisplay} ${styles.section}`}
              style={{ fontWeight: 650 }}
            >
              文記十大
            </Sample>
            <Sample
              role="Founder quotation"
              face="DFKai-SB · 650"
              className={`${styles.currentDisplay} ${styles.quote}`}
              style={{ fontWeight: 650 }}
            >
              {punctuation}
            </Sample>
            <Sample role="Body" face="Noto Sans TC · 400" className={`${styles.textFace} ${styles.body}`}>
              瑞士雞翼、上湯花膠、南乳豬手。
            </Sample>
            <Sample role="Kicker" face="Noto Sans TC · 700" className={`${styles.textFace} ${styles.kicker}`}>
              文記推介
            </Sample>
            <Sample role="Caption" face="Noto Sans TC · 700" className={`${styles.textFace} ${styles.caption}`}>
              黃志強 · Simon Wong
            </Sample>
            <div className={styles.row}>
              <p className={styles.meta}>Navigation / button · Noto Sans TC · 400 / 700</p>
              <p className={`${styles.sample} ${styles.textFace} ${styles.nav}`}>
                首頁
                <span className={styles.button}>到店／外賣</span>
              </p>
            </div>
            <Sample role="Numbers" face="DFKai-SB · 650" className={`${styles.currentDisplay} ${styles.numbers}`} style={{ fontWeight: 650 }}>
              {numbers}
            </Sample>
          </article>

          <article className={styles.column}>
            <h1 className={styles.heading}>
              Proposed two-font system
              <small>Display is self-hosted LXGW WenKai TC Bold at 700. Text stays Noto Sans TC.</small>
            </h1>
            <Sample role="Main heading" face="LXGW WenKai TC Bold · 700" className={`${styles.proposedDisplay} ${styles.main}`}>
              一碗，由這裏開始
            </Sample>
            <Sample role="Section heading" face="LXGW WenKai TC Bold · 700" className={`${styles.proposedDisplay} ${styles.section}`}>
              文記十大
            </Sample>
            <Sample role="Founder quotation" face="LXGW WenKai TC Bold · 700" className={`${styles.proposedDisplay} ${styles.quote}`}>
              {punctuation}
            </Sample>
            <Sample role="Body" face="Noto Sans TC · 400" className={`${styles.textFace} ${styles.body}`}>
              瑞士雞翼、上湯花膠、南乳豬手。
            </Sample>
            <Sample
              role="Kicker"
              face="Noto Sans TC · 900"
              className={`${styles.textFace} ${styles.kicker} ${styles.proposedKicker}`}
            >
              文記推介
            </Sample>
            <Sample role="Caption" face="Noto Sans TC · 700" className={`${styles.textFace} ${styles.caption}`}>
              黃志強 · Simon Wong
            </Sample>
            <div className={styles.row}>
              <p className={styles.meta}>Navigation / button · Noto Sans TC · 400 / 700</p>
              <p className={`${styles.sample} ${styles.textFace} ${styles.nav}`}>
                首頁
                <span className={styles.button}>到店／外賣</span>
              </p>
            </div>
            <Sample role="Numbers" face="LXGW WenKai TC Bold · 700" className={`${styles.proposedDisplay} ${styles.numbers}`}>
              {numbers}
            </Sample>
          </article>

          <article className={`${styles.column} ${styles.phone}`}>
            <h1 className={styles.heading}>
              390px column
              <small>Same proposed faces, narrow measure. Not a separate viewport.</small>
            </h1>
            <Sample role="Main heading" face="LXGW WenKai TC Bold · 700" className={`${styles.proposedDisplay} ${styles.main}`}>
              一碗，由這裏開始
            </Sample>
            <Sample role="Section heading" face="LXGW WenKai TC Bold · 700" className={`${styles.proposedDisplay} ${styles.section}`}>
              文記十大
            </Sample>
            <Sample role="Founder quotation" face="LXGW WenKai TC Bold · 700" className={`${styles.proposedDisplay} ${styles.quote}`}>
              {punctuation}
            </Sample>
            <Sample role="Body" face="Noto Sans TC · 400" className={`${styles.textFace} ${styles.body}`}>
              瑞士雞翼、上湯花膠、南乳豬手。
            </Sample>
            <Sample
              role="Kicker"
              face="Noto Sans TC · 900"
              className={`${styles.textFace} ${styles.kicker} ${styles.proposedKicker}`}
            >
              文記推介
            </Sample>
            <Sample role="Caption" face="Noto Sans TC · 700" className={`${styles.textFace} ${styles.caption}`}>
              黃志強 · Simon Wong
            </Sample>
            <div className={styles.row}>
              <p className={styles.meta}>Navigation / button · Noto Sans TC · 400 / 700</p>
              <p className={`${styles.sample} ${styles.textFace} ${styles.nav}`}>
                首頁
                <span className={styles.button}>到店／外賣</span>
              </p>
            </div>
            <Sample role="Numbers" face="LXGW WenKai TC Bold · 700" className={`${styles.proposedDisplay} ${styles.numbers}`}>
              {numbers}
            </Sample>
          </article>
        </div>
      </section>
    </>
  );
}

function Sample({
  role,
  face,
  className,
  style,
  children,
}: {
  role: string;
  face: string;
  className: string;
  style?: { fontWeight: number };
  children: string;
}) {
  return (
    <div className={styles.row}>
      <p className={styles.meta}>
        {role} · {face}
      </p>
      <p className={`${styles.sample} ${className}`} style={style}>
        {children}
      </p>
    </div>
  );
}
