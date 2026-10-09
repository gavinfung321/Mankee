import type { Metadata } from "next";
import { RestaurantJsonLd } from "../components/seo/RestaurantJsonLd";
import { Footer } from "../components/shell/Footer";
import { Header } from "../components/shell/Header";
import { homeDescription, pageMetadata } from "../lib/seo.ts";
import "./globals.css";

export const metadata: Metadata = pageMetadata("文記車仔麵", homeDescription());

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
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
