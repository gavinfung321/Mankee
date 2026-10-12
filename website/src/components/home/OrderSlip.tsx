import Image from "next/image";

export function OrderSlip() {
  return (
    <div className="order-pass">
      <div className="order-pass-copy">
        <div className="section-kicker">湯、麵、餸都揀好</div>
        <div className="order-pass-title">你揀，文記煮。</div>
      </div>
      <div className="order-pass-stage">
        <p className="order-pass-line">
          <span className="order-pass-line-lead">熱騰騰上枱</span>
          <span className="order-pass-line-payoff">坐低，開餐。</span>
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
