# 文記誌 · BLOG — source inventory

Status: inventory complete and reconciled with the Journal plan, 14 October 2026. Nothing is unresolved. The implementation plan and checklist are in `docs/current/sections/journal-gallery.md`; this file is the evidence behind it. No production component, route, redirect or styling change has been made. No third-party image was downloaded or republished for this inventory.

Planning context: `docs/current/sections/journal-gallery.md` and issue #25.

## Method

- **Pages reviewed:** the legacy pages https://www.mankeecartnoodles.com/gallery and https://www.mankeecartnoodles.com/blogs.
- **Local files reviewed:** the local copies in `assets/sourced/current-site/originals/` (indexed in `assets/sourced/current-site/inventory.csv` and `ASSET_REVIEW.md`) and the user reference pack in `assets/sourced/user/press/`.
- **How Gallery images were treated:** each Gallery photograph is treated as evidence of third-party coverage, not as a Mankee-owned photograph.
- **How sources were traced:** from visible watermarks, headline overlays, programme graphics, file names and web search.
- **Grouping:** one coverage record per article, blogger, programme or video, however many photographs it supplied.
- **Permission:** appearing on the old website is not treated as reuse permission. No record below has documented permission to republish its photography, screenshots or thumbnails.
- **Link check:** done on 14 Oct 2026 with an automated browser-like request. A `403` from a large publisher usually means it blocks bots, not that the page is dead. Those pages still need one manual check in a normal browser.

The legacy Gallery contains 23 photographs, not counting logos: `site-001, 003, 005, 006, 008, 011, 013, 015, 019, 020, 021, 022, 023, 025, 026, 027, 028, 029, 030, 032, 034, 035, 036`. All 23 are allocated below.

## Owner decisions — 14 October 2026

1. **TVB and Paik:** they stay in Recognition only and are not added to the journal carousel.
2. **Heading:** keep `店內日常，與城中報道。`.
3. **Unattributed photographs:** all nine in U02 and the U01 social post are excluded from the journal. `site-001` is already used elsewhere on the homepage; the rest are general photographs with no coverage value. The `site-029` bowl photograph is excluded too, but its record (J14) stays as a logo card.
4. **香港01, 新假期 and LOVIN HK:** use logo cards. Official logos still need to be sourced, and each stays review-only (asset manifest R18 rules).
5. **星島頭條 and the Deliveroo ranking:** keep both. They are no longer exclusions and become records J13 and J14.
6. **J14 credit:** the card credits **Metro**, not HolidaySmart. HolidaySmart's article lists only the global top 10, where Hong Kong's entry is 天仁茗茶, and never mentions 文記. Metro's report publishes Deliveroo's full global top 100, which lists 「49. 自選粉麵 from 文記車仔麵 Man Kee, Hong Kong」.
7. **J12 publisher:** the card stays 阿金 · 香港D. The owner confirms a justsaying.ASIA article exists; it is not used in this pass.
8. **Logos and labels:** every card uses a uniform warm-white logo field. Cards use three format labels: 報道, 指南 (Time Out, HKTB, Wanderlog) and 網誌.

## Coverage records

Abbreviations:

- **媒體** = 媒體與指南
- **創作者** = 博客與影片
- **Identity** = identity artwork, meaning the official publisher logo on a flat ground, review-only under asset manifest R18
- **Link** = link only (text card, no image)

| ID | Publisher / creator | Category | Format | Confirmed title | Confirmed date | Original URL | Associated legacy images | Depicted shop / subject | Ownership / reuse status | Recommended treatment | Decision | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| J01 | ELLE (Taiwan) | 媒體 | 報道 | 香港在地人推薦！深水埗必吃街邊美食地圖 | Not recorded | https://www.elle.com/tw/life/travel/g63110243/2026-hongkong-food-map/ | None | Sham Shui Po street-food guide that includes Man Kee | Publisher copyright; logo is review-only (R18) | Identity | Keep | One of the seven owner-confirmed sources. Link returned 200. |
| J02 | Time Out Hong Kong | 媒體 | 指南 | Best cart noodles in Hong Kong | Not recorded | https://www.timeout.com/hong-kong/restaurants/best-cart-noodles-in-hong-kong | None | Cart-noodle ranking that includes Man Kee | Publisher copyright; logo is review-only (R18) | Identity | Keep | Owner-confirmed. Link returned 200. |
| J03 | South China Morning Post | 媒體 | 報道 | Real Hong Kong street food: how cart noodles have survived into the 21st century | 3 Apr 2020 | https://www.scmp.com/lifestyle/food-drink/article/3077947/real-hong-kong-street-food-how-cart-noodles-have-survived-21st | None | Cart-noodle culture feature with Man Kee | Publisher copyright; icon is review-only (R18) | Identity | Keep | Owner-confirmed. The page opens and the title and date are confirmed (direct requests get 403, a fetch tool reads it). The article quotes Emily Wu, who runs Man Kee with her husband. |
| J04 | UFood | 媒體 | 報道 | 文記車仔麵 | Not recorded | https://ufood.com.hk/restaurant/news/detail/2254117 | None | Man Kee | Publisher copyright; share image is review-only (R18) | Identity | Keep | Owner-confirmed. Link returned 200. The title is a placeholder until a source-visible title is rechecked. |
| J05 | Michelin Guide | — | Guide listing | Man Kee Cart Noodles (Sham Shui Po) | Not recorded | https://guide.michelin.com/us/en/hong-kong-region/hong-kong/restaurant/man-kei-cart-noodles | `site-008` (Michelin artwork, see X02) | Man Kee | Michelin trademark; owner-supplied artwork for Recognition | Recognition panel only | Keep in Recognition | Owner-confirmed. Link returned 202. Never added to the journal carousel. |
| J06 | 香港旅遊發展局 Hong Kong Tourism Board | 媒體 | 指南 | 文記車仔麵 | Not shown on the page | https://www.discoverhongkong.com/tc/place-to-go/travel.guide-man-kee-cart-noodles.html | None | Man Kee, 121 Fuk Wing Street | HKTB copyright; logo is review-only (R18) | Identity | Keep | **URL corrected.** The owner-confirmed `/us/place-to-go/man-kee-cart-noodles.html` now returns 404. The Traditional Chinese page (title 文記車仔麵) and the English page (`/eng/…`, title "Man Kee Cart Noodle") both load. The site is Chinese, so use the `/tc/` page. |
| J07 | Wanderlog | 媒體 | 指南 | Man Kee Cart Noodle | Not recorded | https://wanderlog.com/place/details/410396/man-kee-cart-noodle | None | Man Kee | Platform copyright; wordmark is review-only (R18) | Identity | Keep | Owner-confirmed. Link returned 200. |
| J08 | 香港01 | 媒體 | 報道 | 【2018米芝蓮推介】文記車仔麵打入街頭小吃　冀港人珍惜本地風味 | 30 Nov 2017 | https://www.hk01.com/社會新聞/137826/ (redirects to the full slug) | `site-036` (HK01 video thumbnail with the overlay 「拎咗獎係唔等於加價」); reference pack `hk01-video-thumbnail.png` | Man Kee, 2018 Michelin street-food listing | HK01 copyright; no permission | Identity: `hk01-logo.png` (owner-supplied, review-only) | Keep (owner chose a logo card) | Link returned 200 and the title was confirmed from the page. Do not reuse the thumbnail. |
| J09 | 新假期 Weekend HK | 媒體 | 報道 | 深水埗文記車仔麵！高速列車送麵 必食瑞士雞翼＋足料餃子｜區區搵食 | 29 Sep 2022 | https://www.weekendhk.com/dining/文記車仔麵-深水埗-高速列車-ww03-1381194/ | `site-006`; reference pack `weekendhk-video-thumbnail.png` | Man Kee (Fuk Wing Street) | 新假期 copyright; no permission | Identity: `weekendhk-logo.png` (owner-supplied, review-only) | Keep (owner chose a logo card) | Link returned 200 and the title was confirmed. The article states figures that are now out of date (3 years of Michelin, 62 toppings, 4 shops); do not repeat them in our summary. |
| J10 | TVB 《香港美食匠人》 | 創作者 | 節目 | 香港美食匠人第4集｜中菜廳歎42天飼養北京片皮鴨 人氣車仔麵店食瑞士雞翼 前港姐冠軍蝴蝶酥 | Article published 2 Oct 2025; broadcast date not confirmed | https://www.tvb.com/varietynews-c/香港美食匠人第4集-中菜廳歎42天飼養北京片皮鴨-人氣車仔麵店食瑞士雞翼-前港姐冠軍蝴蝶酥-1009066 | `site-015`, `site-030` (programme screenshots); reference pack `luisa-tvb-counter.png`, `tvb-founder-simon.png` | Man Kee, 121 Fuk Wing Street; 黎芷珊 interviews 黃志強 | TVB broadcast copyright; likeness of host and founder; no permission | Recognition visit card only | Keep in Recognition only (owner) | Link returned 200 and the title was confirmed. Man Kee is the second of three segments. The URL can be offered as the source link of the Recognition visit card. |
| J11 | 백종원 PAIK JONG WON (YouTube) | 創作者 | 影片 | [배고파_홍콩_EP.01] 산속으로 딤섬 먹으러 갔습니다 | 30 Mar 2023 | Exact YouTube URL not yet confirmed | `site-005`, `site-028`, `site-034` (frames with the 배고파 watermark); reference pack `paik-visit-counter.png`, `paik-program-noodle.png`, `paik-storefront.png` | Man Kee, Sham Shui Po cart-noodle segment; also a Tsuen Wan dim sum restaurant | Creator copyright; HKTB-sponsored ("Hello Hong Kong"); celebrity likeness; no permission | Recognition visit card only | Keep in Recognition only (owner) | Title and date are confirmed by Korean press (Sports Kyunghyang, 30 Mar 2023). Daily Hong Kong (1 Apr 2023) confirms EP.01 includes the Sham Shui Po cart-noodle shop. EP.08 visits 維記, not Man Kee. |
| J12 | 阿金 · 香港D (HONG KONG D; graphics watermarked 「阿金 · LOVIN HK」) | 創作者 | 網誌 | 【深水埗文記車仔麵】香港第一車仔麵? 米芝蓮也推薦 | Last updated 25 Mar 2020 (visit written in 2018) | https://www.hongkongd.com/sham-shui-po-eat/15179/ | `site-011`; reference pack `lovinhk-first-cart-noodle.png`. Secondary article: `site-023` (see X01) | Man Kee | Creator copyright; no permission | Identity: `hongkongd-logo.png` (香港D, the site hosting the article; owner-supplied, review-only). Only 447px square, so it may look soft on a retina card | Keep (owner chose a logo card) | The page opens, and the title and update date were confirmed. Its copyright note welcomes sharing the article link with credit; reposting photos needs permission, so use link only. A second article by the same creator, 【深水埗狂吃之旅4】深水埗四大麵王 (https://kingstonchoi.pixnet.net/blog/posts/8225685043, returned 200), is grouped here rather than counted separately. |
| J13 | 星島頭條 | 媒體 | 報道 | 深水埗文記車仔麵創逆市奇蹟？福榮街連佔5舖位變「文記街」 食客批1原因不再幫襯 | 24 Sep 2024 | https://www.stheadline.com/food/3385602/ (redirects to the full slug) | `site-019` (photograph credited to 香港旅遊發展局), `site-020` (overlay 「網民狠批1原因 唔幫襯」); reference pack `singtao-video-thumbnail.png`, `singtao-social-card.png` | Man Kee's Fuk Wing Street shopfronts | 星島 copyright; `site-019` is HKTB's photograph; no permission | Identity: `singtao-headline-logo.png` (owner-supplied, review-only) | Keep (owner) | Link returned 200; title and date confirmed from the page. The headline is partly negative, so our summary should describe the article truthfully and keep a neutral tone. |
| J14 | Metro (UK), reporting Deliveroo's 2020 global top 100 dishes | 媒體 | 報道 | These are the top dishes people ordered for delivery in 2020 | 22 Dec 2020 | https://metro.co.uk/2020/12/22/these-are-the-top-food-dishes-people-ordered-for-delivery-in-2020-13790326/ | `site-029` (`20201229Deliveroolist06`, a clean overhead bowl photograph; excluded, X06) | Man Kee's 自選粉麵, 49th of Deliveroo's global top 100 | Metro copyright; no permission | Identity: `metro-uk-logo.svg` (from the metro.co.uk header, review-only) | Keep (owner chose Metro, 14 Oct 2026) | The page opens and lists 文記 at 49. It replaces HolidaySmart (X07), whose article never mentions 文記. |

## Formerly unresolved items (excluded by the owner, 14 Oct 2026)

| ID | Publisher / creator | Category | Format | Confirmed title | Confirmed date | Original URL | Associated legacy images | Depicted shop / subject | Ownership / reuse status | Recommended treatment | Decision | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| U01 | Unknown creator (Simplified-Chinese social post, probably 小紅書) | 創作者 | 網誌 / social | Unknown (post opens 「文记车仔面，本地人排队也要吃的超正宗港式车仔面！」) | Unknown | Not found | `site-026` | Man Kee: shop sign and the 本店十大必食推介 wall; the legacy alt text wrongly says "Mui Kee" | Unknown creator; no permission | None | Exclude (owner) | General social post; no coverage record. |
| U02 | Unattributed legacy photographs | Unknown | Unknown | — | — | — | Nine photographs; see the table below | Man Kee food, shop and founder | Photographer unknown; no permission | None | Exclude (owner) | `site-001` is already used on the homepage; the other eight are general photographs. |

### U02 — the nine excluded photographs

| File | What it shows |
| --- | --- |
| `site-001.jpeg` | Founder portrait, arms crossed, inside the conveyor-counter shop |
| `site-003.jpg` | Original white 文記車仔麵 sign with a daytime queue; square, Instagram-style crop |
| `site-013.webp` | 本店十大必食推介 wall and condiment shelf, with a red 美食指南點贊榜 2025 plaque |
| `site-021.webp` | Long conveyor-counter dining room, full of customers, yellow ceiling |
| `site-022.jpg` | Styled overhead spread of toppings, dumplings, eggs and noodles on a dark table; looks like a professional shoot |
| `site-025.jpg` | Newer 文記 / MAN KEE CART NOODLE frontage with a daytime queue behind green railings |
| `site-027.jpg` | Night shopfront at 福榮街121號 with a queue. The image is Man Kee; only its legacy alt text ("Min Kee") is wrong |
| `site-032.webp` | Wide street view of the connected 文記 shopfronts on Fuk Wing Street |
| `site-035.webp` | Straight-on close-up of the 本店十大必食推介 wall with ten plaques |

## Excluded items

| ID | Item | Images | Reason |
| --- | --- | --- | --- |
| X01 | 阿金 「深水埗四大麵王」 composite image | `site-023` | The composite also shows 維記咖啡粉麵 and 劉森記麵家. The article itself stays inside J12. |
| X02 | Michelin artwork | `site-008` | Belongs to the Recognition panel; must not be duplicated in the journal. |
| X03 | Duplicate legacy files | `site-007` (= 004), `012` (= 008), `017` (= 009), `024` (= 001), `037` (= 022); `027` is a near-duplicate of 004 | Duplicates listed in `ASSET_REVIEW.md`. |
| X04 | Unattributed legacy photographs (U02) | `site-001`, `003`, `013`, `021`, `022`, `025`, `027`, `032`, `035` | Owner decision: `site-001` is already used on the homepage; the rest are general photographs, not coverage. |
| X05 | Unidentified social post (U01) | `site-026` | Owner decision: general post, no coverage record. |
| X06 | Deliveroo bowl photograph | `site-029` | Owner decision: no image. Its record (J14) stays as a logo card. |
| X07 | HolidaySmart 假期日常: 「外賣平台2020年全球人士最愛10大美食排行榜 香港人最愛嗌依樣嘢！」, 29 Dec 2020, https://holiday.presslogic.com/article/217490 | None | The article lists only the global top 10 and never mentions 文記. Replaced by Metro (J14). `holidaysmart-logo.png` stays on file, unused. |
| X08 | justsaying.ASIA | None | The owner confirms the article exists. It is not used in this pass, and the blogger card stays 阿金 · 香港D (J12). |

## Flags

- **Unidentified sources:** none remain in the journal; U01 and U02 were excluded by the owner. The exact Paik YouTube URL is still missing (J11, Recognition only).
- **Dead links:** one. The owner-confirmed HKTB `/us/` URL (J06) returns 404 and has been replaced with the working `/tc/` page. Every other source opens. SCMP, Metro and 香港D block direct requests but load through a fetch tool, with their titles and dates confirmed.
- **Duplicate coverage:**
  - TVB (J10) and Paik (J11) appear in Recognition only, by owner decision.
  - 阿金 wrote two articles; they are grouped as one record (J12).
  - 星島 (J13) reused an HKTB photograph.
  - Several legacy files are byte or near duplicates (X03).
- **Programme screenshots:** `site-015` and `site-030` (TVB), and `site-005`, `028` and `034` (Paik). Never self-host them.
- **Images that may depict another restaurant:**
  - `site-023` shows 維記 and 劉森記.
  - On inspection, `site-026` and `site-027` both show Man Kee; only their legacy alt text ("Mui Kee", "Min Kee") is wrong.
  - Paik EP.08 is 維記; make sure no frame from it is used.
- **Assets without documented reuse permission:**
  - All 23 Gallery photographs.
  - All files in `assets/sourced/user/press/`.
  - All R18 identity files.
  - The owner supplied logos for J08, J09, J12 and J13; they are stored and review-only. The Metro UK logo (J14) was taken from metro.co.uk; it is also review-only.

## Recommended record count

- **Confirmed source records: 14.** These are the seven owner-confirmed sources (J01–J07) plus seven traced records (J08–J14).
- **Records in the journal carousel: 11.** Michelin, TVB and Paik stay in Recognition.
  - 媒體與指南: 10 (J01–J04, J06–J09, J13, J14)
  - 博客與影片: 1 (J12)
- **Unresolved: 0.**
- **Excluded: 8** (X01–X08). Every legacy Gallery photograph is excluded from the journal.

## Recommended homepage structure

Use **one carousel** of 11 logo cards on uniform warm-white fields, with **no filter tabs**, no second carousel and no grid. The card order, summaries, format labels (報道 / 指南 / 網誌), anchors, redirects, Footer change and the full acceptance checklist are defined in `docs/current/sections/journal-gallery.md`.

## Still open

Nothing. The owner approved the Metro summary on 14 Oct 2026. The Metro UK logo is stored as `metro-uk-logo.svg`, taken from metro.co.uk's header. The Hong Kong Metro 都市日報 logo is a different publisher and is not used.

## Superseded next-pass scope (kept for history; use the Journal plan instead)

1. **Content:** extend `website/src/content/zh-HK/press.ts` to the 11 journal records:
   - add `category` (`press` | `creators`) and `format` (`報道` | `網誌` | `影片` | `節目`) fields;
   - add J08, J09 and J12–J14, using `pending()` for any unconfirmed date, title or summary;
   - write a Mankee summary for each new record. J13 needs a neutral wording.
2. **Logos:** all five are stored in `assets/sourced/publisher/press/` (asset manifest R18, owner-supplied 14 Oct 2026): `hk01-logo.png`, `weekendhk-logo.png`, `hongkongd-logo.png`, `singtao-headline-logo.png` and `holidaysmart-logo.png`. Render each card with `scripts/build-press-cards.mjs` and mark it review-only. Four come on their own coloured square, so the card ground should match that colour rather than sit as a square on white. 星島頭條 is already on white.
3. **Component:** extend `PressRail.tsx` and `PressCarousel.tsx` into the journal chapter:
   - section `id="journal"`;
   - kicker `文記誌 · BLOG` and the heading `店內日常，與城中報道。`;
   - a format label on each card;
   - the anchor targets, including scrolling the rail to the 阿金 card for `#journal-creators` (the `/gallery/` redirect targets `/#journal`, not this card);
   - no filter tabs.

   Keep the approved card geometry, overlays, arrows, autoplay and pause rules unchanged.
4. **Recognition (optional):** link the TVB and Paik visit cards to their sources (the TVB URL is confirmed; the Paik URL is pending).
5. **Footer:** change the label to `文記誌` with the link `/#journal`.
6. **Redirects:** add the three redirects above, then remove the `/press` route if it still exists.
7. **Tests:** update `website/tests/press.test.mjs` to cover:
   - categories and format labels;
   - the anchors;
   - Michelin, TVB and Paik excluded from the rail;
   - no third-party or legacy Gallery photographs imported.
8. **Docs:** update `journal-gallery.md`, `press-rail.md`, the content register, asset manifest R18 and issue #25.
9. **Out of scope:** Gallery photographs, programme screenshots, thumbnails and video embeds until permission is documented.
