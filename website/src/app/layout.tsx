import type { Metadata } from "next";
import { RestaurantJsonLd } from "../components/seo/RestaurantJsonLd";
import { Footer } from "../components/shell/Footer";
import { Header } from "../components/shell/Header";
import { withBase } from "../lib/basePath.ts";
import { fontDisplay, fontText } from "../lib/fonts.ts";
import { homeDescription, pageMetadata } from "../lib/seo.ts";
import "./globals.css";

export const metadata: Metadata = pageMetadata("文記車仔麵", homeDescription());

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-HK"
      className={`${fontDisplay.variable} ${fontText.variable}`}
      style={{
        ["--hero-mobile-poster" as string]: `url("${withBase("/media/hero/hero-signature-three-toppings-poster-v1-640.webp")}")`,
      }}
    >
      <body>
        <a className="skip-link" href="#content">
          跳至主要內容
        </a>
        <Header />
        <RestaurantJsonLd />
        <main id="content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
