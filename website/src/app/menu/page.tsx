import type { Metadata } from "next";
import { OrderingGuide } from "../../components/menu/OrderingGuide";
import { menuDescription, pageMetadata } from "../../lib/seo.ts";

export const metadata: Metadata = pageMetadata(
  "文記車仔麵｜點餐",
  menuDescription(),
);

export default function MenuPage() {
  return <OrderingGuide />;
}
