# 報道與推介 — Homepage Source Rail

> **Superseded on 14 October 2026 by `docs/current/sections/journal-gallery.md` (文記誌 · BLOG).** The Journal plan is now authoritative for the source set, card order, header, labels, logo fields, anchors, redirects and Footer.
>
> **Still valid, and carried over into the Journal plan:**
>
> - the "Interaction and fallback" section;
> - the card geometry and overlay rules in "Composition" and "Visual correction";
> - the external-link rules;
> - the content and rights rules.
>
> **Replaced:**
>
> - the six-card source set;
> - the `報道與推介` header;
> - `id="press"`;
> - the Footer `/#press` link;
> - the `/press/` → `/#press` redirect;
> - the white logo fields;
> - the HKTB `/us/` URL, which now returns 404.
>
> The rest of this document is kept as the record of the third pass.

Status: first implementation rejected by the owner at visual review on 14 October 2026 (0/10). The image-card rebuild was rejected at 2/10 after motion review. The third pass is materially improved; its visible autoplay control has been removed and it awaits owner review, uncommitted. Implementation issue: [#25](https://github.com/gavinfung321/Mankee/issues/25). This plan supersedes the separate `/press/` index direction from issue #8.

## Owner decision

The seven external references collected on the existing Mankee Blogs page belong on the homepage. They are third-party coverage, restaurant guides and directory listings, not Mankee-authored blog posts. The production label is `報道與推介`.

The section sits after Recognition and before Locations. It is a separate `PressRail` chapter with `id="press"`; it does not visually restructure the approved Michelin-first Recognition composition.

## Source set

| Publisher | Display title | Confirmed destination | Homepage treatment |
| --- | --- | --- | --- |
| ELLE | 香港在地人推薦！深水埗必吃街邊美食地圖 | https://www.elle.com/tw/life/travel/g63110243/2026-hongkong-food-map/ | Image-backed rail card with publisher identity artwork |
| Time Out Hong Kong | Best cart noodles in Hong Kong | https://www.timeout.com/hong-kong/restaurants/best-cart-noodles-in-hong-kong | Image-backed rail card with publisher identity artwork |
| South China Morning Post | Real Hong Kong street food: how cart noodles have survived into the 21st century | https://www.scmp.com/lifestyle/food-drink/article/3077947/real-hong-kong-street-food-how-cart-noodles-have-survived-21st | Image-backed rail card with publisher identity artwork |
| UFood | 文記車仔麵 | https://ufood.com.hk/restaurant/news/detail/2254117 | Image-backed rail card; do not invent an article title |
| Michelin Guide | Man Kee Cart Noodles (Sham Shui Po) | https://guide.michelin.com/us/en/hong-kong-region/hong-kong/restaurant/man-kei-cart-noodles | Link from the existing Michelin panel, not a duplicate rail card |
| Hong Kong Tourism Board | Man Kee Cart Noodles | https://www.discoverhongkong.com/us/place-to-go/man-kee-cart-noodles.html | Image-backed rail card with publisher identity artwork |
| Wanderlog | Man Kee Cart Noodle | https://wanderlog.com/place/details/410396/man-kee-cart-noodle | Image-backed rail card with publisher identity artwork |

All external links use `target="_blank"` and `rel="noopener noreferrer"`. Titles may be shortened visually with line clamping, but stored source titles and accessible names remain truthful.

Approved hover/focus summaries:

- ELLE: `ELLE 精選深水埗街頭美食，文記列入在地人推薦的車仔麵選擇。`
- Time Out Hong Kong: `Time Out 將文記列入香港最佳車仔麵名單，介紹牛腩湯底與多款配料。`
- South China Morning Post: `SCMP 從香港街頭飲食文化出發，訪問文記談車仔麵如何延續至今。`
- UFood: `UFood 介紹文記的米芝蓮推介、十大必食與招牌配料。`
- Hong Kong Tourism Board: `香港旅發局介紹文記的自由配搭方式與十大必試配料。`
- Wanderlog: `Wanderlog 將文記列為深水埗的人氣車仔麵體驗。`

These are concise link summaries, not quotations or endorsements. Do not copy longer publisher excerpts into the cards.

## Composition

Use the image-dominant responsive card composition of [21st.dev's Carousel with Responsive Basis](https://21st.dev/@sean0205/components/c-carousel-4) as the visual and structural reference. Do not install ReUI.

- Press is a distinct chapter on `--ground-sage`, creating the approved progression from the continuous Founder/Recognition light ground into Press, then dark-jade Locations and the paper Footer. The previous light Press ground was inherited during implementation, not an owner-approved decision.
- Header uses the same two-level grammar as the other homepage chapters: kicker `報道與推介` with the short 2px lacquer rule, followed by the display headline `媒體與指南眼中的文記。`. Do not use a one-line custom heading or attach the rule directly to the `h2`.
- Each card follows the reference's exact `aspect-3/4`, borderless, overflow-hidden image-card geometry, with approved publisher identity artwork filling the background. The publisher mark is the visual subject, not a small text label inside a cream box.
- The complete card is the external link. Do not show repeated `閱讀原文 ↗` copy.
- At rest, show publisher identity and source title over a fixed-height deep-jade overlay shared by every card. On hover and `:focus-visible`, expand every overlay to the same fixed height and reveal the approved summary; the background may scale no more than 1.03. Content length must never determine overlay height.
- On touch/no-hover devices the short description is visible without requiring a hover-only interaction.
- Publisher identity assets must come from an official publisher source or an owner-supplied file, be stored locally with provenance, and be marked review-only until publication use is confirmed. Do not hotlink them or copy article photography/screenshots.
- Match the supplied reference basis exactly: one card by default, two from `sm`, three from `md`, and four from `lg`. Previous/next controls are hidden below `sm`, where native swipe remains available.
- Previous and next buttons sit vertically centred at the left and right sides of the carousel, outside the card content area and inside the section container. Do not group both controls in the heading.
- Autoplay is owner-authorized for this pass: advance one card every 5 seconds and wrap from the final position to the start. There is no visible autoplay play/pause button. Motion pauses while the rail is hovered, focused, touched or manually dragged, and while the page is hidden; manual interaction must provide an immediate way to suppress motion. Disable autoplay under `prefers-reduced-motion`.
- No visible scrollbar, pagination dots, marquee, 3D effect, generic cream boxes or shadow-heavy card treatment.

## Interaction and fallback

- Prefer native horizontal overflow and CSS scroll snap with a small client enhancement for previous/next controls; add no carousel dependency unless the issue records a justified scope change.
- Touch and trackpad scrolling remain native.
- Hide the native scrollbar in Firefox, Chromium and Safari while retaining native scrolling.
- Arrow controls are at least 44px and have meaningful accessible names. Because autoplay wraps, manual next/previous may wrap consistently rather than presenting disabled end states.
- Keyboard users can reach every source link in document order. Focus remains visible and is never moved automatically.
- With JavaScript disabled, all six rail links remain visible in a horizontally scrollable or wrapping list.
- Reduced motion removes smooth animated scrolling; no information depends on motion.

## Visual correction after 2/10 motion review

- All six cards must share one art direction: publisher identity centred on a clean white or warm-paper field, with no full-card black publisher background. Rebuild the UFood artboard from its official transparent mark on the shared light field; do not reproduce the source SVG's black presentation as the card ground.
- Replace the black-looking overlay with the approved deep jade at a consistent opacity and height. Suggested starting geometry is 34% of card height at rest and 56% on hover/focus, tuned only if all cards remain exactly equal.
- Preserve the reference's borderless 3:4 image geometry, but give the rail cleaner spacing, stronger scale and restrained branded controls so it reads as a current editorial carousel rather than a logo directory.
- The visible scrollbar, uneven overlays, top-right paired arrows, one-line custom header, UFood black field and continuous cream Press ground are acceptance failures, not polish items.

## Route and navigation changes

- The existing Michelin panel becomes a direct external link to the Michelin Guide without changing its approved hierarchy or composition.
- Make that external destination discoverable with the permanently visible CTA `查看米芝蓮指南詳情 ↗` and the restrained hover/focus treatment defined in `founder-recognition.md`; Michelin remains absent from the six-card rail.
- Retire `其他報道 →`; the following `PressRail` section supplies the destination instead.
- Footer `報道` points to `/#press`.
- `/press/` redirects to `/#press` so existing bookmarks do not break. It no longer renders a separate index.

## Content and rights rules

- The seven URLs above were confirmed from the owner-supplied existing Blogs page on 14 October 2026.
- A public webpage is evidence for a link, not permission to copy its article photography or text. Publisher identity artwork requires recorded provenance and publication-use review before launch.
- Do not repeat historic prices, branch counts, hours or endorsements contained in old articles.
- Keep `Michelin > 白種元 > 黎芷珊` as the approved Recognition hierarchy.
- Founder, Locations and Footer stay frozen and outside this redesign.

## Acceptance gate

- [x] Section order is Recognition → 報道與推介 → Locations → Footer.
- [x] Michelin links once from its approved panel; the other six confirmed sources appear once in the rail.
- [ ] Desktop 1440px, tablet 1024px and mobile 390px are visually approved.
- [ ] Touch, mouse, trackpad and keyboard operation pass. Mouse clicks on the controls and focus retention at the ends were verified; touch and trackpad were not tested on hardware.
- [x] No-JavaScript and reduced-motion presentations retain all links.
- [ ] Every publisher identity asset has an official source, local file, provenance record and publication-use status; review-only assets do not ship without approval.
- [x] Footer anchor and `/press/` redirect resolve correctly.
- [x] Focused tests, ESLint, type-check and production build pass.

## Implementation notes

Third pass implemented on 14 October 2026 after the image-card pass was rejected at 2/10. After owner review the visible play/pause control was removed; uncommitted and awaiting final review.

- `website/src/content/zh-HK/press.ts` holds the seven confirmed records with the approved summaries; `placement` separates the six rail cards from the Michelin panel link. Each rail record carries a review-only `artwork` entry with its official source URL.
- Artwork: the official publisher files (asset manifest R18) are placed unmodified on a white 3:4 field by `website/scripts/build-press-cards.mjs` and served from `website/public/media/press/`. Logos are centred at 30% height so the expanded overlay never covers them. UFood uses its official orange-on-white mark (from its site share image, trimmed) because the transparent SVG's white lettering disappears on a light field. Review-only artwork renders in development only; a production build omits it, leaving a plain white card with the jade overlay, until each publisher's use is approved and its status changed to `approved`.
- `PressRail.tsx` is server-rendered: the shared `section-kicker` (`報道與推介`, lacquer rule) and the `h2` `媒體與指南眼中的文記。`, then the card list. Each card is one link (`aria-label` publisher and title, `aria-describedby` summary).
- `PressCarousel.tsx` is the only client code. Previous and next arrows sit vertically centred at the carousel's left and right edges (hidden below 40rem) and wrap at either end. Autoplay advances one card every 5 seconds and wraps; hover, keyboard focus and a hidden page pause it temporarily; an arrow, drag, wheel or touch on the rail stops it for the rest of the visit. There is no visible play/pause control and no space reserved for one. Under reduced motion autoplay never starts and arrow scrolling is instant.
- Overlays are deep jade at 95% and a fixed share of the card: 34% at rest and 56% on hover or focus-visible, with the summary fading in; touch and coarse pointers keep the 56% overlay and summary. Title clamps to two lines and summary to three, sized in container units so text never sets the height.
- Press uses `--ground-sage`. The scrollbar is hidden (`scrollbar-width: none` and `::-webkit-scrollbar`); swipe, trackpad and keyboard scrolling remain native. Cards per view: 1 below 40rem, 2 from 40rem, 3 from 48rem and 4 from 64rem.
- `/press/` is a permanent `next.config.ts` redirect to `/#press`; the old page, `PressList` and their CSS are removed.

## Current next step

Owner review of the third pass at 1440px, 1024px and 390px plus motion review, then owner review at 1440px, 1024px and 390px plus motion review. Do not begin Stage 4 Hero review until this owner-directed addition is approved and checkpointed.
