# Mankee Website Implementation Plan

Status: Next.js App Router with TypeScript is the approved production architecture. The application is `website/`.

This plan converts the approved Concept B v9 wireframe into a production website while protecting the unfinished Hero project and keeping all work traceable through GitHub Issues.

## 1. Source-of-truth order

When project documents disagree, use this precedence:

1. `PROJECT-HANDOFF.md` — Hero-media workstream only: credit safety, texture and continuity restrictions. Its port-4500 review URL and proof-board next step are Hero-lab context, not the current website task.
2. `CONCEPT-B-APPROVED-STRUCTURE.md` — current homepage order, navigation, language and content scope.
3. `IMPLEMENTATION_PLAN.md` — production architecture, technical direction and delivery gates. The 14 October 2026 addendum below is the current visual-phase reading of this file.
4. `CONTENT_REGISTER.md` — factual evidence, permissions and operational-data status.
5. `ASSET_MANIFEST.md` — asset provenance and approval status.
6. Current website visual work, in this order: `website/docs/project-plan.md` (workflow and approval status), `website/docs/visual-system.md` (draft until the Typography Lock is approved), `website/docs/inspiration-analysis.md` (pacing and motion budget; its workflow order defers to the project plan), and `website/docs/sections/` (section plans).
7. `wireframes/concept-b.html` (Concept B v9) — historical visual reference. Superseded on 14 October 2026 as the current visual source for section layout and interaction.
8. Older roadmaps, architecture drafts and wireframes — historical reference only where they do not conflict with the documents above.

Approved facts still come from `CONTENT_REGISTER.md`. Where a wireframe sentence and a confirmed fact disagree, the fact is what gets published. A checklist note does not replace a section plan.

### Current-phase addendum — 14 October 2026

Next.js App Router with TypeScript remains the approved production architecture. This addendum does not replace that decision, and it does not authorise a new master plan.

Visual implementation is paused at the Typography Lock in `website/docs/project-plan.md`. Typography is unresolved. The Noto Serif display stack in this file, the wireframe Kai titles, and the draft LXGW WenKai proposal in `website/docs/visual-system.md` are not an approved font lock.

Current homepage order. Component filenames stay as they are:

1. Hero — `Hero.tsx`
2. `舊式香港` — currently implemented inside the historically named `SensoryTrio`
3. `文記落單體驗` — `HowToOrder.tsx`
4. `文記十大` — `TopTen.tsx`
5. `你揀，文記煮` — `OrderSlip.tsx`
6. Founder — `Founder.tsx`
7. Recognition — `Recognition.tsx`
8. Locations — `Locations.tsx`
9. Footer — `Footer.tsx`

This nine-part sequence is the current homepage. It is not a restoration of the older nine-act homepage.

Current interaction decisions:

- `文記落單體驗` uses the compact photographic 湯 → 麵 → 餸 rail.
- The 10 October 2026 timber-card and queue-figure specification below is superseded.
- The order form supports the `文記十大` interaction.
- It changes from 落單 to 完成 while still visible near the end of that section.
- It does not fly into `你揀，文記煮`.
- `你揀，文記煮` uses the approved static food photograph recorded in `ASSET_MANIFEST.md` and `website/docs/sections/order-pass/`.
- Its cinemagraph remains deferred.
- Founder, Recognition, Locations and Footer are not visually approved.

### Visual rebuild

**Superseded on 14 October 2026.** The 10 October 2026 instruction to rebuild every section from `wireframes/wireframe.css`, including Kai titles, is not current visual direction. Current visual work follows the addendum and the website documents in the source-of-truth list. Hero media bytes stay the approved temporary pair. Real-website constraints that remain current: approved sentences, working links, semantic markup, the `48rem` and `64rem` breakpoints, and keeping `position: fixed` out of `home.css`.

Do not restore the older nine-act homepage, the former three-topping combination, complete menu pricing or technical ScrollCraft labels merely because they remain in an older document.

### 文記落單體驗

**Superseded on 14 October 2026.** The timber-card, queue-figure and flying-slip instructions in this section are not current. The current section is the compact photographic 湯 → 麵 → 餸 rail in `website/docs/sections/how-to-order/文記落單體驗.md`. The historical specification is kept below so the withdrawn direction stays readable.

Decided 10 October 2026, and withdrawn as current direction on 14 October 2026. The layout that stacks 一、二、三 under the heading, with one counter photograph beside that column, was withdrawn on 10 October 2026.

Port the paint, grid, and spacing from `.menu-stagger`, `.alt-grid`, `.menu-disclaimer`, `.menu-experience`, `.heritage-steps`, `.queue-story`, `.queue-counter`, `.queue-people`, and `.order-slip-rail`. The handoff 跟住點揀？ / 第一次來，可以由文記十大開始 stays off this section. 文記十大 says that itself. The heading and kicker use the same Kai title and gold kicker as the section above. The cards read 一 湯, 二 麵, 三 餸. Each card is a photo over a solid timber band. 一 lists 腩汁、瑞士汁、清湯、走湯 and 可加咖喱、沙嗲、麻辣. 二 lists 粗麵、河粉、烏冬、日式拉麵, cropped onto the noodles. 三 says 可以逐樣加. No prices, and the full noodle list and topping board stay off these cards. The left column aligns to the top of the cards. On this section the paper’s 餸 row says 逐樣揀. 花膠 · 魷魚 · 雞翼 appears when the paper reaches 文記十大. Each card keeps the timber wash over an existing photo: the counter for 湯, a noodle bowl for 麵, and the chicken-wing close-up for 餸. Hover lifts a card 4px and grows its hard shadow. 咖喱、沙嗲、麻辣 stay on the soup card only. The separate flavour sentence and the three 湯 麵 餸 circles stay off. The counter is the wireframe’s steel gradient, not a photograph. The queue figures are 揀湯, 揀麵, 揀餸. The red step moves from 揀湯 to 揀麵 to 揀餸 and repeats. Hover pauses that loop and steps the pointed figure forward. Reduced motion keeps the last figure red and still. The left paragraph is 跟住條隊向前，就是香港車仔麵的點法。 The red label 不鏽鋼配料檔 stays off the steel panel. This section does not use the scroll-entry transform, so the corner paper can stay fixed to the viewport.

**Superseded flying slip.** `position: fixed` on `.order-slip-rail` stays out of `home.css`. The 10 October instruction that one paper is fixed from `globals.css`, fills across sections, and stamps 完成 on a later slip is not current. The order form stays with `文記十大`, changes from 落單 to 完成 while still visible near the end of that section, and does not fly into `你揀，文記煮`. Published sentences stay the approved `zh-HK` records. `.act-tag`, `.device-badge`, and `.handoff` stay off the page, as Concept B already hides them.

## 2. Production strategy

### Stack

Decided 9 October 2026. Next.js App Router with TypeScript is the approved production architecture. This supersedes the earlier Astro recommendation. Do not revert the Next.js application and do not restore Astro.

- Next.js App Router.
- TypeScript.
- Tailwind CSS may support utilities. It must not dictate a generic template appearance. Colour, type, and layout stay on the Mankee tokens.
- Framer Motion only for restrained progressive enhancement. The mobile navigation is the current use.
- Lucide for the menu icon.
- No Supabase. This site has no database.
- Typed TypeScript content records. `zh-HK` is the only active locale.

### Motion

- The Hero scrub sets the temporary video’s current time from scroll position.
- Other sections use CSS, with one signature motion idea per section.
- Reduced motion and the static Hero poster remain a complete page.
- ScrollCraft stays in the wireframes.
- Production does not add a smooth-scroll library or a 3D bowl.

### Workspace boundary

- Production application: `website/`.
- Existing `wireframes/`, `scrollcraft/`, source assets and review material remain unchanged reference sources.
- Only approved assets are copied into `website/public/`.
- Never bulk-copy the accumulated lab or review folders.

### Hero boundary

- Use the current temporary Hero video and poster during development.
- Implement a replaceable Hero media contract: source, poster, duration, scroll timing, crop and text-safe area.
- Do not generate paid video, merge unapproved proof imagery or promote a final Hero without explicit owner approval.
- The website must remain functional with a static Hero poster and with reduced motion enabled.

### Approved file structure

Decided 9 October 2026. Planning documents, `wireframes/`, `scrollcraft/`, and source assets stay outside `website/`.

```text
website/
  next.config.ts
  postcss.config.mjs
  package.json
  tsconfig.json
  public/
    brand/                  logo, only after the production master is chosen
    media/
      hero/                 temporary video and poster, replaceable as a pair
      food/                 approved copies only, added in the media issue
  src/
    app/
      layout.tsx            lang="zh-HK", skip link, header, footer
      page.tsx              /
      globals.css
      menu/page.tsx         /menu/
      press/page.tsx        /press/
    styles/
      tokens.css            colour, type, spacing, focus, motion
      home.css
    content/
      types.ts              locale and confirmed/pending fact types
      zh-HK/
        site.ts             name, navigation, shared lines
        home.ts             homepage sections, in the current order in the 14 October 2026 addendum
        top-ten.ts          wall list, display order
        menu.ts             湯 → 麵 → 餸 and the signature list
        recognition.ts      Michelin, 白種元, 黎芷珊
        press.ts            other coverage
        locations.ts        深水埗 primary, 尖沙咀 secondary
      index.ts              exports zh-HK only
    lib/
      hero.ts               source, poster, duration, crop, text-safe area
      facts.ts              pending values render nothing
    components/
      shell/
        Header.tsx
        Footer.tsx
      home/
        Hero.tsx
        SensoryTrio.tsx
        HowToOrder.tsx
        TopTen.tsx
        OrderSlip.tsx       你揀，文記煮; historical filename, not a flying transition
        Founder.tsx
        Recognition.tsx
        Locations.tsx
      menu/
        OrderingGuide.tsx
      press/
        PressList.tsx
    islands/
      HeroScrub.ts          added with the Hero issue
      TopTenPreview.ts      added with the Top Ten interaction issue
```

`/privacy/` is added only if analytics or a form requires it. Founder and locations stay on the homepage. Primary navigation is 首頁, 點餐, 文記十大, 故事, and 到店／外賣. Press is linked from the recognition section.

The homepage sensory names `瑞士雞翼`, `上湯花膠`, and `南乳豬手` remain approved dish names. They do not define the second homepage section. That section is `舊式香港`, implemented inside `SensoryTrio`. `top-ten.ts` uses the wall names, including `瑞士雞中翼`.

The production app is this Next.js App Router tree. Section components, token values, content copy, islands, and media copies belong to their own issues.

### Design tokens

Planned for the design-token issue. Values come from the Concept B heritage palette and the typography rules in `CONTENT_REGISTER.md`.

Colour is five brand tokens, plus one Hero surface:

- `--paper` `#eadcbf` — page background, and text on jade
- `--ink` `#1b1916` — text. Quieter text uses ink at reduced opacity.
- `--lacquer` `#cf2028` — buttons, rules, and the name. Lacquer is not used for paragraphs.
- `--jade` `#23493d` — navigation and dark sections
- `--noodle` `#c99e26` — focus ring and short rules. Noodle is not used for small text.
- `--jade-dark` `#102d26` — Hero backdrop only

Wood and steel stay out of the token set. Hover and pressed states reuse these colours. The focus ring is `2px` solid `--noodle`, with `2px` offset.

Spacing uses a 4px step: 4, 8, 12, 16, 24, 32, 48, 64, 96.

Layout: content width `72rem`, text measure `40rem`. Review widths remain 360, 390, tablet, and desktop. Breakpoints are `48rem` and `64rem`.

Type, two families only. **Superseded on 14 October 2026 as a font lock.** The stacks below are the historical token-issue recommendation. Typography is unresolved and blocked by the Typography Lock. Do not treat Noto Serif TC, the wireframe Kai faces, or the draft display face in `website/docs/visual-system.md` as approved.

- Display: `"Noto Serif TC", "Source Han Serif TC", "PMingLiU", serif`
- Text and controls: `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif`

Noto Serif TC and Noto Sans TC were the recommended webfonts for that issue. Both are SIL Open Font License. That issue records the license and does not add font files. Self-hosted WOFF2 subsets wait until the Typography Lock approves the copy. `DFKai-SB` and `KaiTi` stay in the wireframe only.

Motion tokens cover a short duration, a medium duration, and one easing. Reduced motion sets those durations to zero. Section animation itself stays in later issues.

The token issue applies these values in `website/src/styles/tokens.css` and `website/src/app/globals.css`, through `src/app/layout.tsx`. `/menu/` and `/press/` use the same base styles.

### Shared shell

Planned for the navigation issue. Primary navigation is 首頁, 點餐, 文記十大, 故事, and 到店／外賣. Press is not a primary item.

| Label | Target |
|---|---|
| 首頁 | `/` |
| 點餐 | `/menu/` |
| 文記十大 | `/#top-ten` |
| 故事 | `/#story` |
| 到店／外賣 | `/#locations` |

`/menu/` is the evergreen ordering guide and the 點餐 destination. 首頁 is current on `/`. 點餐 is current on `/menu/`. The homepage keeps `#top-ten`, `#story`, and `#locations` when the specimen is replaced. On small screens the same links sit in a native disclosure, so the menu works with JavaScript off. The header uses the text wordmark 文記車仔麵. The footer repeats the five links and does not invent an address, hours, or delivery URL. 到店／外賣 uses lacquer.

## 3. Approved production scope

### Homepage

Current order, 14 October 2026. See the addendum. Component filenames are unchanged.

1. Hero — `一碗，由這裏開始`
2. `舊式香港` — implemented inside `SensoryTrio`
3. `文記落單體驗` — compact photographic 湯 → 麵 → 餸 rail
4. `文記十大`
5. `你揀，文記煮` — approved static food photograph; the order form does not fly here
6. Founder and Mankee story — not visually approved
7. Recognition — Michelin, 白種元 and 黎芷珊 only; not visually approved
8. Locations and delivery — not visually approved
9. Footer — not visually approved

**Superseded homepage list, 9–10 October 2026.** The earlier list put a three-texture chapter second, specified timber cards for how to order, and called item 5 a completed order-slip transition into Founder. Those three instructions are not current.

### Supporting routes

- `/menu/` — evergreen ordering guide and signature selection, not a complete live price catalogue
- `/press/` — other verified coverage and source links
- `/privacy/` — only if analytics, forms or other tracking require it

Founder and location material can remain homepage sections initially. Separate `/story/` or `/locations/` routes require a later approved issue rather than being assumed.

## 4. Content controls

- Traditional Chinese (`zh-HK`) is the initial interface language.
- English and Simplified Chinese fields may exist in the schema but no inactive switcher is displayed.
- Do not invent prices, menu availability, awards, quotations, addresses, hours or endorsement language.
- Use `實際供應及選擇以店內餐牌為準。`
- Third-party programme, publisher and award imagery remains private-wireframe material until rights are confirmed; production may use text links or official embeds instead.
- Unverified facts must be represented as pending content data and must not render publicly.

### Confirmed 文記十大 source list

Locked on 9 October 2026 from the owner-confirmed wall titled 本店十大必食推介. The plaques are not numbered. This order is top row, then bottom row, left to right. It replaces the 7 October 2026 menu-photo transcription.

1. 上湯花膠
2. 清甜蘿蔔
3. 自制韭菜餃
4. 滷水豬大腸
5. 秘製牛孖根
6. 南乳豬手
7. 手打魚肉
8. 瑞士雞中翼
9. 玻璃辣魷魚
10. 蠔皇小花菇

Use these names and this order for 文記十大. Keep the wall forms 滷水豬大腸 and 自制韭菜餃. The approved sensory names remain `香：瑞士雞翼`, `厚：上湯花膠`, `濃：南乳豬手`. They are not the second homepage section; that section is `舊式香港`. Founder portrait, founder quotation, Michelin artwork, Tsim Sha Tsui facts and delivery links stay in the pending-publication review in `CONTENT_REGISTER.md` and must not be treated as cleared.

## 5. GitHub milestones

Every implementation issue must have a label and one of these milestones.

| Milestone | Outcome |
|---|---|
| `v0.1 — Planning & Foundation` | Repository confirmed, source-of-truth documents frozen, Next.js scaffold and quality tooling ready |
| `v0.2 — Static Experience` | All approved routes and homepage sections work without animation |
| `v0.3 — Interaction & Accessibility` | Hero scrub, Top Ten interaction, responsive behavior and reduced motion pass |
| `v0.4 — Content & Media Approval` | Approved production assets and verified operational content replace placeholders |
| `v1.0 — Launch Ready` | Cross-device QA, performance, metadata, privacy and owner sign-off complete |

The final paid Hero motion work belongs to `v0.4` and cannot begin merely because code is ready.

## 6. Proposed issue backlog

Issue numbers are assigned only after the correct Mankee GitHub repository is confirmed. Search before creating each issue.

### v0.1 — Planning & Foundation

1. `Documentation: Freeze Concept B production sources`
   - Reconcile outdated roadmap and architecture references.
   - Correct the wireframe Top Ten list.
   - Record unresolved content and rights questions.

2. `Chore: Initialize Astro production workspace`
   - Superseded on 9 October 2026. Do not create or restore an Astro application.
   - The approved production app is Next.js App Router with TypeScript, recorded in the stack section above.
   - GitHub #2 closed the original scaffold. GitHub #19 records this architecture decision.

3. `Design: Establish Mankee design tokens and typography`
   - Add the five brand colours, the Hero-only jade dark, and the spacing, type, focus, layout, and motion tokens.
   - Historical issue text: use Noto Serif TC and Noto Sans TC by name. Record the SIL Open Font License and add no font files yet. Superseded as a font lock on 14 October 2026; typography waits for the Typography Lock.
   - Show a temporary specimen on the homepage. Leave navigation and section content for later issues.

4. `Feature: Build shared shell and production navigation`
   - Header, footer, the existing skip link, and mobile navigation.
   - Labels and targets: 首頁 `/`, 點餐 `/menu/`, 文記十大 `/#top-ten`, 故事 `/#story`, 到店／外賣 `/#locations`.
   - The same links stay in the HTML and work without JavaScript. Small screens use a native disclosure.
   - Wordmark text only. No logo image, address, hours, or delivery link until those are approved.

### v0.2 — Static Experience

5. `Feature: Implement locale-keyed content model`
   - Typed records for homepage copy, menu signatures, locations and recognition.
   - Only verified or explicitly pending data is accepted.

6. `Feature: Build static homepage sections`
   - Historical issue text: replace the homepage specimen with the eight approved sections, in order, using the `zh-HK` records. The page stays complete with JavaScript disabled. No island, video scrub, or accordion. The current order is the nine-part sequence in the 14 October 2026 addendum.
   - Hero is a static jade-dark block whose only heading is `一碗，由這裏開始`. The temporary video, poster, and scrub stay with the later Hero issue.
   - Historical issue text: sensory trio, `湯 → 麵 → 餸` with 咖喱、沙嗲、麻辣 inside the soup step, and the wall-order 文記十大 render as visible text. Show `實際供應及選擇以店內餐牌為準。` The 點餐 link goes to `/menu/`; the menu guide itself stays a later issue. Superseded as the second-section description on 14 October 2026: that section is `舊式香港` inside `SensoryTrio`, and ordering is the compact rail.
   - Historical issue text: the order slip is a short transition after 文記十大, not a second chapter and not a persistent mobile panel. It adds no new claims. Superseded on 14 October 2026: `你揀，文記煮` is its own section, and the order form stays in `文記十大` without flying forward.
   - 故事 shows the confirmed name 黃志強 only. English name, quotation, and portrait stay hidden.
   - Recognition shows 米芝蓮 as a name, plus the approved lines 白種元曾到訪文記 and 黎芷珊曾到訪文記. No year count, quotation, or portrait. A text link to `/press/` is the route for other coverage.
   - 到店／外賣 shows 深水埗 first, with the confirmed address and daily 11:00–04:00, and 尖沙咀店 as the secondary label. Pending maps, phones, 尖沙咀 hours, and delivery links stay hidden. Those controls stay with the later locations issue.
   - Keep `#top-ten`, `#story`, and `#locations`. One `h1` only. Review at desktop and about 390px.

7. `Feature: Build evergreen menu guide`
   - Replace the empty `/menu/` page with a static guide. The visible heading is 點餐. The page title stays `文記車仔麵｜點餐`, and 點餐 stays current in the header.
   - Explain the same three steps already stored in the records: 湯, then 麵, then 餸. 咖喱、沙嗲、麻辣 stay inside the soup step. They are not a fourth step.
   - Show the wall-order 文記十大 as the signature selection, plus `實際供應及選擇以店內餐牌為準。` Do not publish prices, noodle-base lists, drinks, snacks, or a claim that the page is the full menu.
   - Use the existing `zh-HK` records. Add no new dish, price, or address. No delivery button, map, or hours on this page.
   - JavaScript stays off. No accordion and no new island. Review at desktop and about 390px. The homepage sections stay as they are.

8. `Feature: Build press index with rights-safe treatments`
   - Replace the empty `/press/` page with a static index. The visible heading is 報道. The page title stays `文記車仔麵｜報道`. Press stays out of the primary navigation.
   - Render a text link only when that item has a confirmed title and a confirmed source URL. The current `pressItems` list is empty, so the page shows the heading and no article cards.
   - Do not publish the reference screenshots or name 星島頭條, 香港01, 新假期, LOVIN HK, TVB, or the Korean programme. No thumbnail, embed, or image until a source URL and reuse permission are recorded.
   - Leave the homepage recognition as it is: 米芝蓮, 白種元曾到訪文記, 黎芷珊曾到訪文記, and the existing 報道 link.
   - JavaScript stays off. Review at desktop and about 390px.

9. `Feature: Build locations and delivery section`
   - Keep the homepage 到店／外賣 section. 深水埗 stays first and visually primary, with the confirmed address and daily 11:00–04:00. 尖沙咀店 stays the secondary name. Do not add a `/locations/` route.
   - A map, Foodpanda, or Keeta control renders only as a text link when that URL is confirmed. Pending phone, last-order, holiday, 尖沙咀 address, and 尖沙咀 hours stay hidden.
   - Every one of those URLs is pending today, so the visible section does not gain a map, a delivery name, or a button. Do not use the wireframe Foodpanda chain URL or the OpenRice hours.
   - The footer still does not add an address, hours, or delivery link. JavaScript stays off. Review at desktop and about 390px.

### v0.3 — Interaction & Accessibility

10. `Feature: Implement replaceable Hero scrub component`
    - Copy only the temporary pair into `website/public/media/hero/`: `hero-motion-temp-natural-no-zoom-scrub.mp4` and `hero-motion-temp-natural-poster.webp`. Leave the originals in `assets/generated/mankee-hero/`. Do not generate, merge, or replace the Hero.
    - `src/lib/hero.ts` records the source, poster, crop, and text-safe area so a later approved pair can replace those two paths. Crop is `object-fit: cover` with no zoom. The heading `一碗，由這裏開始` stays in the left column over a readable scrim.
    - `HeroScrub.ts` sets `currentTime` from how far the hero has moved through the viewport. The section stays one view tall. It does not pin extra scroll space, hide the header, or add topping labels.
    - With JavaScript off, or with reduced motion, show the poster and the heading. Do not leave an empty gap. The jade-dark backdrop remains behind the media.

11. `Feature: Implement 文記十大 interaction`
    - Homepage only. All ten wall names and the disclaimer stay visible with JavaScript off. 上湯花膠 is the featured name on load.
    - At 48rem and above, hover and keyboard focus move the featured name. Below 48rem, each name is a native disclosure; the name stays visible when closed, and opening one closes the others.
    - Do not add an ingredient photo, a price, or a wireframe description. `/menu/` keeps the static ordered list.

12. `Enhancement: Add restrained section transitions`
    - Sections other than the Hero and 文記十大 fade in and rise 12px as they enter. The Hero keeps the scrub. 文記十大 keeps the featured-dish selection. Historical issue text that the order slip stays a static rule is superseded by the 14 October 2026 addendum: the order form changes from 落單 to 完成 inside `文記十大` and does not fly.
    - Use a view timeline inside `prefers-reduced-motion: no-preference`. Reduced motion, JavaScript off, and browsers without view timelines leave every section visible.
    - No parallax, prototype label, or new island.

13. `Accessibility: Complete keyboard, screen-reader and reduced-motion pass`
    - Header and footer navigation are named landmarks, 主要 and 頁尾. One `h1` per page. The skip link still targets `#content`.
    - On paper, focus is an ink, noodle, ink ring. On jade, focus stays a noodle ring. Body links and the selected 文記十大 name use ink. The 到店／外賣 label is large bold paper on lacquer. The six colour values stay unchanged.
    - Hero media is decorative. Historical issue text that the order slip is decorative is superseded: the order form is part of the `文記十大` interaction. Reduced motion adds no pinned space.

14. `Enhancement: Complete responsive layout pass`
    - Reviewed at 1440, 1024, 768, 390, and 360×640 on the homepage, `/menu/`, and `/press/`. No horizontal scroll. At 1440 the text column stays 72rem. At 768 and above the header links sit on one line. Below 768, 選單 is used and the sections are one column.
    - Historical issue text: the order slip stays a static rule in the page. It is not fixed or sticky. The flying-slip instruction elsewhere in this file is superseded. Current behaviour is the `文記十大` order form described in the 14 October 2026 addendum.

### v0.4 — Content & Media Approval

15. `Content: Verify founder, recognition and location records`
    - Historical issue text follows. It disagrees with itself about what was unpublished and what was placed on the site. **Superseded as a clearance decision on 14 October 2026.** The pending-publication review in `CONTENT_REGISTER.md` is the current status for the founder portrait, founder quotation, Michelin artwork, Tsim Sha Tsui facts and delivery links.
    - The public founder line stays 黃志強. The English name, quotation, and portrait stay unpublished.
    - Recognition stays 米芝蓮, 白種元曾到訪文記, and 黎芷珊曾到訪文記. No year count, mark, or quotation.
    - 深水埗 keeps the confirmed address and 每日 11:00–04:00. 尖沙咀店 stays a name. Maps, phones, last-order times, holiday notes, and delivery links stay unpublished. OpenRice 11:00–23:00 and the wireframe Foodpanda chain URL stay unused.
    - Simon Wong, the draft portrait, the draft quotation 「最希望是港人珍惜本土風味食店。」, the 2018–2025 Michelin image, the 尖沙咀 unit, daily 11:00–21:00, phone, email, the Sham Shui Po map link, and both Foodpanda links are published. 尖沙咀 has no map. There is no Keeta link.

16. `Content: Approve and import production photography`
    - Copy only approved, permission-cleared assets.
    - Record ownership, alt text and crop guidance.

17. `Media: Produce and approve final Hero package`
    - Blocked until the owner explicitly approves still foundations and authorizes paid generation.
    - Follow all `PROJECT-HANDOFF.md` quality gates.

### v1.0 — Launch Ready

18. `SEO: Add metadata and structured data`
    - Titles and descriptions for the homepage, `/menu/`, and `/press/` come from confirmed records.
    - Open Graph uses locale `zh_HK` and no image.
    - Restaurant structured data includes 文記車仔麵, the 深水埗 address, and daily 11:00–04:00.
    - The production origin stays pending, so no canonical host is published.

19. `Performance: Meet launch performance budget`
    - Responsive images, local font strategy and bounded Hero loading.
    - No review or lab assets in the production bundle.
    - Historical issue record: GitHub #18 ships SIL OFL WOFF2 subsets of Noto Serif TC and Noto Sans TC, a layout-sized founder photograph, and a Hero poster that loads before the temporary video. Those shipped files are not the Typography Lock.

20. `QA: Complete launch verification and owner sign-off`
    - Cross-browser, real iPhone, keyboard, screen-reader, reduced-motion and broken-link checks.
    - Content, rights and operational-data sign-off.

## 7. Delivery sequence

1. Confirm the Mankee repository name, visibility and default branch.
2. Create or verify the labels and milestones in `GITHUB_ISSUES_GUIDE.md`.
3. Search for existing issues; create only missing v0.1 issues.
4. Complete the documentation-freeze issue before application code.
5. Scaffold `website/` under its own issue and branch.
6. Build and approve the static experience before adding scroll behavior.
7. Add interactions one issue at a time with reduced-motion behavior in the same issue.
8. Import only approved production assets.
9. Keep the temporary Hero until the separate final-Hero issue is explicitly authorized.
10. Complete launch QA and owner sign-off before deployment.

## 8. Definition of done

The project is not done merely because the homepage looks similar to the wireframe. It is done when:

- Every merged change maps to a closed GitHub issue with an acceptance summary.
- All approved routes work directly and after refresh.
- The entire experience remains understandable without animation.
- Desktop, phone, keyboard and reduced-motion behavior pass.
- No unapproved media, review files, guessed facts or unstable prices ship.
- The Hero can be replaced without restructuring the homepage.
- The owner approves content, media, operations and launch behavior.

