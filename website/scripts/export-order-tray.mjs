import sharp from "sharp";
import { copyFileSync } from "fs";

const src =
  "C:/Users/gavin/OneDrive/Desktop/Mankee/docs/current/proofs/order-trays/opt-5-trays-steam-wings.jpg";
const dest =
  "C:/Users/gavin/OneDrive/Desktop/Mankee/website/public/media/food/counter-trays-order.webp";
const destAlias =
  "C:/Users/gavin/OneDrive/Desktop/Mankee/website/public/media/food/counter-trays.webp";

const meta = await sharp(src).metadata();
// Front row (sausages / eggs / dumplings / wings) plus the tray row behind it.
// South cover on a 1280×480 frame keeps the front food and lets the deeper row survive.
const top = Math.round(meta.height * 0.1);
const height = Math.round(meta.height * 0.75);

await sharp(src)
  .extract({
    left: 0,
    top,
    width: meta.width,
    height: Math.min(height, meta.height - top),
  })
  .resize(1280, 480, { fit: "cover", position: "south" })
  .webp({ quality: 84 })
  .toFile(dest);

copyFileSync(dest, destAlias);
const out = await sharp(dest).metadata();
console.log("exported", out.width, out.height, "from top", top, "h", height);
