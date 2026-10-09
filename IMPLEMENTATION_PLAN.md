# Mankee Website Implementation Plan

Status: planning approved in principle; no production application code has started.

This plan converts the approved Concept B v9 wireframe into a production website while protecting the unfinished Hero project and keeping all work traceable through GitHub Issues.

## 1. Source-of-truth order

When project documents disagree, use this precedence:

1. `PROJECT-HANDOFF.md` — Hero media, credit safety, texture and continuity restrictions.
2. `CONCEPT-B-APPROVED-STRUCTURE.md` — current homepage order, navigation, language and content scope.
3. `IMPLEMENTATION_PLAN.md` — production phases, technical direction and delivery gates.
4. `CONTENT_REGISTER.md` — factual evidence, permissions and operational-data status.
5. `ASSET_MANIFEST.md` — asset provenance and approval status.
6. Concept B v9 — visual and interaction reference only.
7. Older roadmaps, architecture drafts and wireframes — historical reference only where they do not conflict with the documents above.

Do not restore the older nine-act homepage, the former three-topping combination, complete menu pricing or technical ScrollCraft labels merely because they remain in an older document.

## 2. Production strategy

### Stack

Decided 9 October 2026:

- Astro with TypeScript.
- Static-first semantic HTML and CSS.
- Client-side islands only for the Hero scrub, mobile navigation, and the 文記十大 preview.
- Typed TypeScript content records. `zh-HK` is the only active locale.
- No generic component library and no generic landing-page template.

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
  astro.config.mjs
  package.json
  tsconfig.json
  public/
    brand/                  logo, only after the production master is chosen
    media/
      hero/                 temporary video and poster, replaceable as a pair
      food/                 approved copies only, added in the media issue
  src/
    layouts/
      BaseLayout.astro      lang="zh-HK", skip link, header, footer
    styles/
      tokens.css            colour, type, spacing, focus, motion
      global.css
    content/
      types.ts              locale and confirmed/pending fact types
      zh-HK/
        site.ts             name, navigation, shared lines
        home.ts             eight homepage sections, in approved order
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
        Header.astro
        Footer.astro
        MobileNav.astro
      home/
        Hero.astro
        SensoryTrio.astro
        HowToOrder.astro
        TopTen.astro
        OrderSlip.astro     transition between 文記十大 and Founder
        Founder.astro
        Recognition.astro
        Locations.astro
      menu/
        OrderingGuide.astro
      press/
        PressList.astro
    islands/
      HeroScrub.ts          added with the Hero issue
      TopTenPreview.ts      added with the Top Ten interaction issue
      MobileNav.ts
    pages/
      index.astro           /
      menu/index.astro      /menu/
      press/index.astro     /press/
```

`/privacy/` is added only if analytics or a form requires it. Founder and locations stay on the homepage. Primary navigation is 首頁, 點餐, 文記十大, 故事, and 到店／外賣. Press is linked from the recognition section.

The homepage sensory names stay `瑞士雞翼`, `上湯花膠`, and `南乳豬手`. `top-ten.ts` uses the wall names, including `瑞士雞中翼`.

The scaffold issue creates the Astro project, this empty folder tree, `BaseLayout.astro`, and the three empty routes. Section components, token values, content copy, islands, and media copies arrive in their own issues.

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

Type, two families only:

- Display: `"Noto Serif TC", "Source Han Serif TC", "PMingLiU", serif`
- Text and controls: `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif`

Noto Serif TC and Noto Sans TC are the recommended webfonts. Both are SIL Open Font License. This issue records that license and does not add font files. Self-hosted WOFF2 subsets wait until the approved copy is locked. `DFKai-SB` and `KaiTi` stay in the wireframe only.

Motion tokens cover a short duration, a medium duration, and one easing. Reduced motion sets those durations to zero. Section animation itself stays in later issues.

The token issue applies these values in `website/src/styles/tokens.css` and `global.css`, through `BaseLayout.astro`. The homepage shows a temporary type, colour, and focus specimen. `/menu/` and `/press/` use the same base styles. The specimen is replaced when the static homepage is built.

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

1. Hero — `一碗，由這裏開始`
2. Three textures — `香：瑞士雞翼`, `厚：上湯花膠`, `濃：南乳豬手`
3. How to order — `湯 → 麵 → 餸`; curry, satay and spicy flavour remain optional soup choices
4. 文記十大
5. Completed order-slip transition
6. Founder and Mankee story
7. Recognition — Michelin, 白種元 and 黎芷珊 only
8. Locations and delivery

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

Use these names and this order for 文記十大. Keep the wall forms 滷水豬大腸 and 自制韭菜餃. The homepage sensory trio remains `香：瑞士雞翼`, `厚：上湯花膠`, `濃：南乳豬手`. Decisions that are still open, including founder, Michelin, portrait, map, hours, and delivery links, are listed in `CONTENT_REGISTER.md` and must not render as confirmed facts.

## 5. GitHub milestones

Every implementation issue must have a label and one of these milestones.

| Milestone | Outcome |
|---|---|
| `v0.1 — Planning & Foundation` | Repository confirmed, source-of-truth documents frozen, Astro scaffold and quality tooling ready |
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
   - Create `website/` with Astro and TypeScript, using the approved file structure.
   - Add the empty folders, `BaseLayout.astro`, and empty `/`, `/menu/`, and `/press/` routes.
   - Add formatting, linting and basic test commands.
   - Preserve all reference directories. Leave section components, tokens, content copy, islands, and media for later issues.

3. `Design: Establish Mankee design tokens and typography`
   - Add the five brand colours, the Hero-only jade dark, and the spacing, type, focus, layout, and motion tokens.
   - Use Noto Serif TC and Noto Sans TC by name. Record the SIL Open Font License and add no font files yet.
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
   - Replace the homepage specimen with the eight approved sections, in order, using the `zh-HK` records. The page stays complete with JavaScript disabled. No island, video scrub, or accordion.
   - Hero is a static jade-dark block whose only heading is `一碗，由這裏開始`. The temporary video, poster, and scrub stay with the later Hero issue.
   - Sensory trio, `湯 → 麵 → 餸` with 咖喱、沙嗲、麻辣 inside the soup step, and the wall-order 文記十大 render as visible text. Show `實際供應及選擇以店內餐牌為準。` The 點餐 link goes to `/menu/`; the menu guide itself stays a later issue.
   - The order slip is a short transition after 文記十大, not a second chapter and not a persistent mobile panel. It adds no new claims.
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
    - Hover and keyboard focus on desktop.
    - Tap/accordion behavior on mobile.
    - No essential information hidden behind interaction.

12. `Enhancement: Add restrained section transitions`
    - Maximum one signature motion concept per section.
    - No prototype labels, decorative AI artifacts or excessive parallax.

13. `Accessibility: Complete keyboard, screen-reader and reduced-motion pass`
    - Semantic headings and landmarks.
    - Visible focus, alt text and sufficient contrast.
    - No empty pinned space when reduced motion is active.

14. `Enhancement: Complete responsive layout pass`
    - Desktop, tablet, 390px and compact 360 × 640 review.
    - Mobile order slip is not persistent.

### v0.4 — Content & Media Approval

15. `Content: Verify founder, recognition and location records`
    - Founder portrait, quote, source and English-name decision.
    - Michelin wording and mark treatment.
    - Addresses, hours, maps and delivery links.

16. `Content: Approve and import production photography`
    - Copy only approved, permission-cleared assets.
    - Record ownership, alt text and crop guidance.

17. `Media: Produce and approve final Hero package`
    - Blocked until the owner explicitly approves still foundations and authorizes paid generation.
    - Follow all `PROJECT-HANDOFF.md` quality gates.

### v1.0 — Launch Ready

18. `SEO: Add metadata and structured data`
    - `zh-HK`, canonical URLs, social cards and verified restaurant/location schema.

19. `Performance: Meet launch performance budget`
    - Responsive images, local font strategy and bounded Hero loading.
    - No review or lab assets in the production bundle.

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

