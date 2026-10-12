import Image from "next/image";

export function OrderSlip() {
  return (
    <div className="order-pass">
      <div className="order-pass-copy">
        <div className="section-kicker">湯、麵、餸都揀好</div>
        <div className="order-pass-title">你揀，文記煮。</div>
        <div className="order-pass-line">
          排隊時揀好湯、麵同餸，店員逐樣記低，再把落單紙交到你手上。
        </div>
        <hr className="order-slip" />
      </div>
      <div className="order-pass-stage">
        <p className="order-pass-wood">
          你揀好的湯、麵同餸，煮成熱騰騰一碗。坐低，就可以開餐。
        </p>
        <Image
          className="order-pass-plate"
          src="/media/order-pass/order-pass-desktop-approved-v1.png"
          alt="文記櫃檯上的完成車仔麵"
          width={1672}
          height={941}
          sizes="(max-width: 639px) calc((100vw - 32px) * 1.78), (min-width: 1184px) 1152px, calc(100vw - 32px)"
          loading="lazy"
        />
      </div>
    </div>
  );
}
