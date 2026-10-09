import type { Metadata } from "next";
import { PressList } from "../../components/press/PressList";
import { pageMetadata, pressDescription } from "../../lib/seo.ts";

export const metadata: Metadata = pageMetadata(
  "文記車仔麵｜報道",
  pressDescription(),
);

export default function PressPage() {
  return <PressList />;
}
