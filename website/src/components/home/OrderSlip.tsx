"use client";

import Image from "next/image";
import { withBase } from "../../lib/basePath.ts";

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
        <div className="order-pass-plate-track">
          <Image
            className="order-pass-plate"
            src={withBase("/media/order-pass/order-pass-bowl-atmosphere.png")}
            alt="文記完成車仔麵"
            width={1024}
            height={572}
            unoptimized
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
