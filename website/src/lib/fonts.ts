import localFont from "next/font/local";

// Fallback order lives in --font-display and --font-text, not here.
export const fontText = localFont({
  src: "../fonts/noto-sans-tc.woff2",
  display: "swap",
  preload: false,
  weight: "100 900",
  variable: "--font-text-loaded",
  adjustFontFallback: false,
});

export const fontDisplay = localFont({
  src: "../fonts/lxgw-wenkai-tc-bold.woff2",
  display: "swap",
  preload: false,
  weight: "700",
  variable: "--font-display-loaded",
  adjustFontFallback: false,
});
