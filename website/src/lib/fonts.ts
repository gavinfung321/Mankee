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
  src: "../fonts/lxgw-wenkai-tc-bold.woff2",
  display: "swap",
  preload: false,
  weight: "700",
  variable: "--font-display-loaded",
  fallback: ["Kaiti TC", "serif"],
  adjustFontFallback: false,
});
