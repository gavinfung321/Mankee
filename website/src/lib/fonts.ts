import localFont from "next/font/local";

export const fontText = localFont({
  src: "../fonts/noto-sans-tc.woff2",
  display: "swap",
  preload: false,
  weight: "100 900",
  variable: "--font-text-loaded",
  fallback: ["PingFang TC", "Microsoft JhengHei", "sans-serif"],
  adjustFontFallback: false,
});

export const fontDisplay = localFont({
  src: "../fonts/noto-serif-tc.woff2",
  display: "swap",
  preload: false,
  weight: "200 900",
  variable: "--font-display-loaded",
  fallback: ["Source Han Serif TC", "PMingLiU", "serif"],
  adjustFontFallback: false,
});
