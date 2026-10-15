# 文記誌 · BLOG — Journal implementation plan

Status: **authoritative plan, awaiting owner approval** (reconciled 14 October 2026). Nothing in this plan has been implemented or committed.

- **Source of truth:** this plan replaces `docs/current/sections/press-rail.md` as the plan for the homepage coverage section. Interaction and accessibility rules from that plan that still apply are carried over below.
- **Evidence:** the source research is in `docs/current/journal-source-inventory.md`.
- **Issue:** [#25](https://github.com/gavinfung321/Mankee/issues/25).

## Decision

The website stays a single homepage. The `報道與推介` section becomes the `文記誌 · BLOG` chapter: **one carousel of 11 logo cards**.

- **No filter tabs:** the blogger group has only one card.
- **No second carousel or grid.**
- **No separate Press, Blog or Gallery page.**

| Element | Value |
| --- | --- |
| Section id | `journal` |
| Kicker (with the shared 2px lacquer rule) | `文記誌 · BLOG` |
| Display heading (`h2#journal-heading`) | `店內日常，與城中報道。` |
| Position | After Recognition, before Locations |
| Ground | `--ground-sage` (unchanged) |

## Owner decisions — 14 October 2026

1. The legacy Gallery photographs are third-party coverage material, not house photography.
   - All 23 are excluded from the site.
   - The founder portrait is already used on the homepage.
   - The remaining photographs are general shots or belong to the sources below.
2. Michelin, TVB 《香港美食匠人》 and 백종원 배고파 홍콩 stay in Recognition only, and are never repeated in the carousel.
3. 星島頭條 and the Deliveroo 2020 ranking are kept.
4. **Deliveroo credit:** the card credits **Metro**, because HolidaySmart's article lists only the global top 10 and does not mention 文記. Metro publishes the full top 100, where 文記's 自選粉麵 is 49th.
5. **Blogger card:** it stays **阿金 · 香港D**.
   - The owner confirms a justsaying.ASIA article exists, but it is not used in this pass.
   - The article and its graphic are 阿金's, watermarked 「阿金 · LOVIN HK」, on hongkongd.com.
6. **Logo cards:** every card is a logo card on a **uniform warm-white field**.
7. **Format labels:** cards use three labels: `報道`, `指南` and `網誌`.
8. **Heading:** keep `店內日常，與城中報道。`.
9. **HKTB link:** the confirmed HKTB link (`/us/place-to-go/man-kee-cart-noodles.html`) now returns 404. It is replaced by HKTB's Traditional Chinese page, whose visible title is `文記車仔麵`.

## The 11 cards, in order

The six approved cards keep their order. The new media cards follow, newest first, and the single blogger card comes last.

| # | Publisher | Label | Group | Title (truthful, as published) | URL | Logo source file (`assets/sourced/publisher/press/`) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ELLE | 報道 | press | 香港在地人推薦！深水埗必吃街邊美食地圖 | https://www.elle.com/tw/life/travel/g63110243/2026-hongkong-food-map/ | `elle-logo.svg` |
| 2 | Time Out Hong Kong | 指南 | press | Best cart noodles in Hong Kong | https://www.timeout.com/hong-kong/restaurants/best-cart-noodles-in-hong-kong | `timeout-logo.svg` |
| 3 | South China Morning Post | 報道 | press | Real Hong Kong street food: how cart noodles have survived into the 21st century | https://www.scmp.com/lifestyle/food-drink/article/3077947/real-hong-kong-street-food-how-cart-noodles-have-survived-21st | `scmp-icon-512.png` |
| 4 | UFood | 報道 | press | 文記車仔麵 | https://ufood.com.hk/restaurant/news/detail/2254117 | `ufood-logo-light.jpg` |
| 5 | 香港旅遊發展局 | 指南 | press | 文記車仔麵 | https://www.discoverhongkong.com/tc/place-to-go/travel.guide-man-kee-cart-noodles.html | `hktb-logo.png` |
| 6 | Wanderlog | 指南 | press | Man Kee Cart Noodle | https://wanderlog.com/place/details/410396/man-kee-cart-noodle | `wanderlog-wordmark.svg` |
| 7 | 星島頭條 | 報道 | press | 深水埗文記車仔麵創逆市奇蹟？福榮街連佔5舖位變「文記街」 食客批1原因不再幫襯 | https://www.stheadline.com/food/3385602/ | `singtao-headline-logo.png` |
| 8 | 新假期 | 報道 | press | 深水埗文記車仔麵！高速列車送麵 必食瑞士雞翼＋足料餃子｜區區搵食 | https://www.weekendhk.com/dining/文記車仔麵-深水埗-高速列車-ww03-1381194/ | `weekendhk-logo.png` |
| 9 | Metro | 報道 | press | These are the top dishes people ordered for delivery in 2020 | https://metro.co.uk/2020/12/22/these-are-the-top-food-dishes-people-ordered-for-delivery-in-2020-13790326/ | `metro-uk-logo.svg` |
| 10 | 香港01 | 報道 | press | 【2018米芝蓮推介】文記車仔麵打入街頭小吃　冀港人珍惜本地風味 | https://www.hk01.com/社會新聞/137826/ | `hk01-logo.png` |
| 11 | 阿金 · 香港D | 網誌 | creators | 【深水埗文記車仔麵】香港第一車仔麵? 米芝蓮也推薦 | https://www.hongkongd.com/sham-shui-po-eat/15179/ | `hongkongd-logo.png` |

- **Michelin** remains in Recognition. Per the owner's 14 Oct 2026 decision in `founder-recognition.md`, the red panel is static and only the `查看米芝蓮指南詳情 ↗` button links to the Michelin Guide.
- **Recognition's two visit cards** (TVB, Paik) are unchanged in this pass.
- **URLs in code:** store non-ASCII URLs percent-encoded.
- **Language:** cards 2, 3, 6 and 9 have English titles (`lang="en"`); the rest are `zh-Hant`.
- **Dates:** cards show no dates, so publication dates are recorded in the inventory only.

## Approved summaries

These are Mankee's own one-line summaries, shown on hover and focus and always visible on touch. They are not quotations.

| # | Summary |
| --- | --- |
| 1 | ELLE 精選深水埗街頭美食，文記列入在地人推薦的車仔麵選擇。 |
| 2 | Time Out 將文記列入香港最佳車仔麵名單，介紹牛腩湯底與多款配料。 |
| 3 | SCMP 從香港街頭飲食文化出發，訪問文記談車仔麵如何延續至今。 |
| 4 | UFood 介紹文記的米芝蓮推介、十大必食與招牌配料。 |
| 5 | 香港旅發局介紹文記的自由配搭方式與十大必試配料。 |
| 6 | Wanderlog 將文記列為深水埗的人氣車仔麵體驗。 |
| 7 | 星島頭條報道文記在福榮街連開多間舖位，並整理食客的不同意見。 |
| 8 | 新假期《區區搵食》介紹深水埗文記的送麵方式，以及瑞士雞翼和餃子。 |
| 9 | Metro 報道 Deliveroo 2020 年全球百大外賣菜式，文記的自選粉麵排第 49 位。 |
| 10 | 香港01 報道文記獲 2018 年米芝蓮街頭小吃推介，以及對本地風味的堅持。 |
| 11 | 旅遊博客阿金到深水埗文記試食，記錄這碗米芝蓮推介車仔麵。 |

Summary 9 replaces the withdrawn HolidaySmart wording. The owner approved it on 14 Oct 2026.

Do not repeat outdated figures from old articles, such as the 62 toppings, four shops or three years of Michelin.

## Card design

The approved third-pass card is unchanged:

- borderless 3:4 geometry;
- the whole card is the external link;
- a deep-jade overlay at 95%, 34% of the card height at rest and 56% on hover or focus;
- title clamped to two lines, summary to three;
- background scale no more than 1.03;
- no shadows, gradients or `閱讀原文 ↗`.

### Logo fields

All 11 logo fields are the same warm white: `--cream` (`#fff8ea`).

- **Placement:** each logo is centred at 30% of the card height, so the expanded overlay never covers it.
- **Wordmarks** (ELLE, Time Out, UFood, HKTB, Wanderlog, Metro) render at one shared optical width.
- **Square marks** (SCMP, 星島頭條, 香港01, 新假期, 香港D) render at one shared square size.
- **Coloured tiles:** 香港01 (blue), 新假期 (orange) and 香港D (dark) keep their own square as a deliberate tile on the cream field.
- **White backgrounds:** remove the white or near-white background from the source files (SCMP, UFood, 星島頭條) so no white rectangle shows on cream. Only the background is removed; the mark itself is never redrawn, recoloured or cropped.
- **Script:** `website/scripts/build-press-cards.mjs` builds all 11 cards with the new ground.

### Format label

Each card shows its label (`報道`, `指南` or `網誌`) in small text before the publisher name in the overlay, separated by a middle dot. The label never changes the overlay height.

## Carousel interaction (carried over from `press-rail.md`)

- **Cards per view:** 1 below 40rem, 2 from 40rem, 3 from 48rem, 4 from 64rem.
- **Scrolling:** native horizontal scrolling with CSS scroll snap, with no carousel dependency. Touch and trackpad scrolling stay native, and the scrollbar is hidden in Firefox, Chromium and Safari.
- **Arrows:** previous and next arrows are at least 44px and wrap at both ends. From 40rem they are vertically centred at the carousel's sides. Below 40rem (owner decision, 14 Oct 2026) they sit in a control row under the card: `←  dots  →`.
- **Dots (below 40rem only):** one passive dot per card (11), the active one a wider jade pill that follows the scroll position. They are hidden from screen readers and are not buttons; the arrows are the controls. From 40rem there are no dots, because multi-card views cannot bring every card to the first slot.
- **Autoplay:**
  - advances one card every 5 seconds and wraps;
  - has no visible play/pause control;
  - pauses while the carousel is hovered or focused, and while the page is hidden;
  - stops for the rest of the visit after an arrow, a mouse press, a sideways wheel or a sideways touch swipe (more than 10px, more horizontal than vertical). A vertical page scroll that starts on a card never stops it;
  - never starts under `prefers-reduced-motion`, and arrow scrolling is then instant.
- **Focus:** focus is never moved automatically.
- **Without JavaScript:** all 11 links remain reachable in a horizontally scrollable list.

## Anchors, redirects and navigation

| Target | Behaviour |
| --- | --- |
| `#journal` | Section start. |
| `#journal-press` | The carousel list (`ul#journal-press`, which replaces `press-rail` as the arrows' `aria-controls` target), showing card 1. |
| `#journal-creators` | Card 11 (`li#journal-creators`). Arriving here scrolls the page to the section and the carousel to that card, and stops autoplay for the visit so the card stays in view. |
| `#press` | Compatibility alias: an empty anchor at the section start, so old links still land on the chapter. |

**Scroll offset:** every target has `scroll-margin-top`, so the fixed header never covers it.

**Redirects:** in `website/next.config.ts`, all permanent, with trailing slashes:

- `/press/` → `/#journal-press` (replaces the current `/#press`)
- `/blogs/` → `/#journal-press`
- `/gallery/` → `/#journal` (the chapter start, not the single blogger card)

**Footer:** `報道 →` (`/#press`) becomes `文記誌 →` (`/#journal`). No other Footer change.

## Rights and assets

- **Logo status:** every logo is stored locally with its provenance recorded in asset manifest R18 and marked review-only. It renders in development only. A production build shows a plain cream card with the jade overlay until each publisher's logo use is approved.
- **Publication blocker:** approving each publisher's logo use is a launch blocker, not an implementation blocker.
- **Not used:**
  - no Gallery photographs;
  - no article photography;
  - no TVB or Paik frames;
  - no thumbnails;
  - no quoted article text.
- **HolidaySmart logo:** `holidaysmart-logo.png` stays on file but is unused, because Metro replaces HolidaySmart.
- **Metro logo:** `metro-uk-logo.svg`, taken from metro.co.uk's own header and recorded in R18. Do not use the Hong Kong **Metro 都市日報 (Metro Daily)** logo; that is a different newspaper.

## Implementation and acceptance checklist

### Content

- [ ] `website/src/content/zh-HK/press.ts` holds exactly the 11 cards above plus the Michelin record (`placement: "michelin"`).
- [ ] Each card record has `format` (`報道` | `指南` | `網誌`) and `group` (`press` | `creators`) fields.
- [ ] Titles, URLs, title languages and summaries match this plan exactly. HKTB uses the `/tc/` URL and the title `文記車仔麵`.
- [x] Summary 9 is approved by the owner (14 Oct 2026).
- [ ] Section kicker `文記誌 · BLOG`, heading `店內日常，與城中報道。`, section `id="journal"`.

### 11-card ordering

- [ ] Cards render in the order 1–11 above. The 阿金 · 香港D card is last.
- [ ] Michelin, TVB and Paik do not appear in the carousel.
- [ ] Each publisher appears exactly once.

### Publisher assets and rights

- [x] The official Metro UK logo is sourced from metro.co.uk and recorded in R18 (`metro-uk-logo.svg`, 14 Oct 2026).
- [ ] `build-press-cards.mjs` produces 11 cards in `website/public/media/press/`.
- [ ] Every card's artwork entry carries its source and `status: "review-only"`.
- [ ] A production build omits all review-only artwork.
- [ ] No Gallery photograph, article image, screenshot or thumbnail is imported anywhere.

### Visual consistency

- [ ] All 11 logo fields are the same `--cream` warm white. No white rectangle shows around any logo.
- [ ] Wordmarks share one optical width, and square marks share one size. Every logo is centred at 30% of the card height.
- [ ] Every overlay is the same height at rest (34%) and on hover or focus (56%). The format label and long titles never change it.
- [ ] Format labels read `報道`, `指南` or `網誌` before the publisher name.
- [ ] No shadows, gradients, cream boxes or visible scrollbar. Dots appear only below 40rem.

### Carousel interaction

- [ ] The arrows wrap. Autoplay advances every 5 seconds and wraps.
- [ ] Below 40rem the control row `←  dots  →` sits under the card; the active dot follows autoplay, arrows and swipes.
- [ ] Hover, focus and a hidden page pause autoplay. An arrow, mouse press, sideways wheel, sideways swipe or `#journal-creators` arrival stops it for the visit. Scrolling the page with a thumb on a card does not.
- [ ] Reduced motion: no autoplay, instant arrow scrolling.
- [ ] Touch swipe and trackpad scrolling work natively.

### Anchors and redirects

- [ ] `/#journal`, `/#journal-press`, `/#journal-creators` and `/#press` land correctly below the fixed header.
- [ ] `/#journal-creators` brings card 11 into view at 1440px, 1024px and 390px.
- [ ] `/press/`, `/blogs/` and `/gallery/` permanently redirect to the targets above.
- [ ] No `/press`, `/blogs` or `/gallery` page renders.

### Footer navigation

- [ ] The Footer link reads `文記誌 →` and targets `/#journal`. Nothing else in the Footer changes.

### Responsive review

- [ ] Owner screenshot review at all three widths, each mandatory: 1440px, 1024px and 390px.
- [ ] Cards per view are 4, 3, 2 and 1 at the defined breakpoints. No card or arrow is clipped.

### Accessibility

- [ ] Each card's accessible name is `{format}：{publisher}：{title}（新分頁開啟）`, with `aria-describedby` pointing to the summary.
- [ ] English titles carry `lang="en"`.
- [ ] Links open in a new tab with `rel="noopener noreferrer"`.
- [ ] Keyboard order follows card order. Focus is always visible, and the focus outline is not clipped by the carousel.
- [ ] Arrow names are `上一則報道` and `下一則報道`, and their `aria-controls` points to `journal-press`.
- [ ] Without JavaScript, all 11 links are reachable. Under reduced motion, nothing depends on motion.

### Tests, lint, type-check and build

- [ ] `website/tests/press.test.mjs` asserts:
  - the 11-card order;
  - the format and group fields;
  - Michelin, TVB and Paik are excluded;
  - the HKTB `/tc/` URL;
  - the anchors and redirects;
  - the Footer link;
  - the cream logo fields;
  - review-only gating;
  - no Gallery or third-party photographs.
- [ ] The focused tests pass.
- [ ] ESLint passes on the touched files.
- [ ] `tsc --noEmit` passes.
- [ ] A production build passes. Use the temp-copy method while the dev server runs.

## Out of scope for this pass

- Recognition (including linking the TVB and Paik visit cards), Hero, Founder, Locations and `/menu`.
- Filter tabs. Reconsider them only if the blogger group reaches about three records.
- Any commit, push or merge before owner approval.
