# Mankee website

Next.js and TypeScript workspace for the production site. Commands are run from this directory.

| Command                | Action                                    |
| ---------------------- | ----------------------------------------- |
| `npm install`          | Install dependencies                      |
| `npm run dev`          | Start the local site at `localhost:3000`  |
| `npm run build`        | Build the production site                 |
| `npm run start`        | Serve the production build                |
| `npm run format`       | Format the project with Prettier          |
| `npm run format:check` | Check formatting without writing files    |
| `npm run lint`         | Lint the Next.js app with ESLint          |
| `npm test`             | Check routes, layout, content, and tokens |

The production architecture is Next.js App Router with TypeScript. Tailwind CSS may support utilities and must not dictate a generic template appearance. Framer Motion is only for restrained progressive enhancement. Lucide supplies the menu icon. Supabase is not part of this site.

## Fonts

Display: Noto Serif TC, then `"Source Han Serif TC", "PMingLiU", serif`.

Text and controls: Noto Sans TC, then `"PingFang TC", "Microsoft JhengHei", sans-serif`.

Noto Serif TC and Noto Sans TC are licensed under the SIL Open Font License, Version 1.1. The license is `src/fonts/OFL.txt`. The site ships variable WOFF2 subsets of the published copy, with `font-display: swap` and no preload, so the Hero poster stays ahead of the fonts. Regenerate them with `npm run fonts -- <directory>` after placing `NotoSansTC.ttf` and `NotoSerifTC.ttf` from the Google Fonts `ofl/notosanstc` and `ofl/notoseriftc` sources in that directory. PingFang TC, Microsoft JhengHei, Source Han Serif TC, and PMingLiU are local fallbacks and are not redistributed.
