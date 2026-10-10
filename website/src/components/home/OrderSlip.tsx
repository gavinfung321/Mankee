export function OrderSlip() {
  return (
    <div className="order-pass">
      <div className="order-pass-copy">
        <div className="section-kicker">湯、麵、餸都揀好</div>
        <div className="order-pass-title">你揀，文記煮。</div>
        <div className="order-pass-line">
          落單紙蓋上紅印，穿過出餐口，交到師傅手上。
        </div>
        <hr className="order-slip" />
      </div>
      <div className="order-pass-stage" aria-hidden="true">
        <div className="order-ticket">
          <span>文記車仔麵</span>
          <strong>
            湯 ✓
            <br />
            麵 ✓
            <br />餸 ✓
          </strong>
          <em>落單</em>
        </div>
        <div className="pass-window">出餐口</div>
      </div>
    </div>
  );
}
