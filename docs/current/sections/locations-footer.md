# Locations + Footer — implementation plan

Live check: http://localhost:3000/

## Follow this

Updated 14 Oct 2026. This block wins where it disagrees with older paragraphs.

### Locations — two equal store entries (owner direction, 14 Oct 2026)

**Rejected on 14 Oct 2026:** the asymmetric primary/secondary build (深水埗 about two-thirds, `另一分店`, solid cream map button), and then the single full-width 深水埗 storefront banner above two text columns. Older paragraphs below that make 深水埗 dominant, call 尖沙咀 secondary or supporting, or say 尖沙咀 has no map or contacts are superseded.

Owner decision: 深水埗店 and 尖沙咀店 have **equal visual and typographic importance**. Each has its own storefront photograph.

Built in `src/components/home/Locations.tsx` and the Locations rules in `src/styles/home.css`. **Visually and factually approved by the owner on 14 Oct 2026** at desktop (1440px), tablet (1024px) and mobile (390px), and frozen against further visual redesign. The 尖沙咀 photograph's publication permission and the Foodpanda mark's brand-use clearance were confirmed by the owner the same day. Preserve:

- two equal storefront entries;
- the shared telephone and email, stored once in `sharedContacts`;
- both map links;
- the Foodpanda icon always beside the visible `Foodpanda ↗` label;
- no embedded maps;
- no motion (the shared section-entry animation stays off).

```text
━━ (gold rule)
到店／外賣

┌──────────────────────┐   ┌──────────────────────┐
│ 深水埗 storefront 4:3 │   │ 尖沙咀 storefront 4:3 │
└──────────────────────┘   └──────────────────────┘
深水埗店                     尖沙咀店
address                      address
營業時間  hours               營業時間  hours
電話      (+852) 9059-5104    電話      (+852) 9059-5104
電郵      mankee…@gmail.com   電郵      mankee…@gmail.com
地圖 ↗   Foodpanda ↗          地圖 ↗   Foodpanda ↗
```

- **Ground:** `--jade-dark` with `--cream` text (about 13:1). Gold (`--noodle`) only for the heading rule, field labels and link underlines (about 5.9:1). No card, shadow, gradient, rounded container, map embed or motion; the shared section-entry animation stays off for this section.
- **Heading:** the existing `到店／外賣` with the short gold rule above it.
- **Layout:** two equal-width columns from 1024px with a 64px gap. A four-row subgrid lines up photo, name, facts and actions across both columns. Below 1024px the complete 深水埗 entry stacks above the complete 尖沙咀 entry, 64px apart.
- **Each entry, identical system:**
  - storefront photograph at 4:3, no text over it;
  - shop name in the display role, same size and weight for both (32–44px, 700);
  - address at 17px. The 尖沙咀 address breaks into two controlled lines after `商場` (`addressBreakAfter` in `locations.ts`, rendered as `<wbr>` with `word-break: keep-all`); 深水埗 stays on one line;
  - label/value rows `營業時間`, `電話`, `電郵` (13px gold labels in a 4.5rem column, 17px values). The email stays on one line at 390px and wider; on narrower phones it breaks only after `@`, and its accessible name stays the unbroken address;
  - actions `地圖 ↗` and `Foodpanda ↗` as underlined text links, 16px semibold, 44px tap height.
- **Photographs** (owner-supplied, originals in `assets/sourced/user/store/` unchanged; both derivatives pre-cropped to 4:3):
  - 深水埗: `ssp-storefront-day.jpg` → `/media/store/ssp-storefront-day-1024.webp`, `-640.webp`. Full frame: 文記 sign, Man Kee Cart Noodle lettering and entrance.
  - 尖沙咀: `tst-storefront-wide.jpg` → `/media/store/tst-storefront-768.webp`, `-480.webp`. Left 4:3 crop keeping the 文記車仔麵 sign, Michelin frame, entrance and counter. At desktop the 768px source is shown at about 544px, so no upscaling. Supplied by the owner in the project chat on 14 Oct 2026, with publication permission confirmed the same day (asset R15).
  - Both frames hold 4:3 at every width (measured 502×376 at 1114px, 457×342 at 1024px, 358×269 at 390px).
- **Shared contacts:** (+852) 9059-5104 and mankeecartnoodles@gmail.com are owner-confirmed shared contacts for both shops (14 Oct 2026). Telephone uses `tel:`, email uses `mailto:`, each with a 44px tap height.
- **Maps:** 深水埗 https://share.google/otLrnzLumqWZaN8mg; 尖沙咀 https://maps.app.goo.gl/acZKwec46s7T8JsB9 (Food Atlas, supplied by the owner on 14 Oct 2026). Links only; no embedded map.
- **Foodpanda:** always the visible word `Foodpanda ↗`, with the owner-supplied panda mark (`/media/brand/foodpanda-mark-64.webp`, 20px, decorative, empty alt) beside it, never alone. Brand-use clearance was confirmed by the owner on 14 Oct 2026 (`docs/reference/content-register.md`). The icon path lives in `linkIcons` in `locations.ts`. The underline sits on the label only, so `地圖 ↗` and `Foodpanda ↗` keep the same text treatment.
- **External links:** open in a new tab with `rel="noopener noreferrer"`, show a visible `↗` and carry an accessible name such as `尖沙咀店 地圖（新分頁開啟）`.
- **New copy:** only the structural field labels `營業時間`, `電話`, `電郵`. Image alt text: `深水埗店門面：文記車仔麵招牌與入口`, `尖沙咀店門面：文記車仔麵招牌與入口`.
- **Header:** the solid header background is fully opaque (`#faf8f3`), and Locations is an isolated stacking context, so location text cannot show through or above the header.
- Recognition, Founder, Footer and every other section are unchanged.

### Footer — compact three-zone sign-off on warm paper (owner direction, 14 Oct 2026)

**Rejected after visual review on 14 Oct 2026:**

1. The full lacquer-red Footer field (deepened lacquer ground, 2px gold top rule, wordmark up to 136px). It did not match the approved header and was too abrupt after Locations.
2. The cream, header-mirroring Footer (header cream `#faf8f3`, large seal, 108px red wordmark, horizontal navigation row). It read as an oversized duplicate of the header.
3. The near-black `--ink` editorial Footer (52px seal, 84px cream wordmark, ruled vertical index). It was too heavy straight after the dark-green Locations and made one continuous dark block.

Older paragraphs below that call for an ink or lacquer-red brand field, an oversized wordmark, a "final brand peak", or that forbid a slogan or social links are superseded: the owner supplied the slogan and the social URLs below.

**Approved direction:** a compact, structured three-zone Footer on the warm sand `--paper` token, visibly deeper than the header cream and clearly separate from the dark-green Locations. The brand no longer dominates.

**Refinement, 14 Oct 2026 (owner: "clean but too sparse and generic"):** 4px lacquer top rule, less empty space, everything aligned to the site container, a horizontal brand lockup, compact right-hand navigation and social groups, circular 44px social controls. A slim lacquer closing strip with `到店／外賣 →` was tried and then **removed at owner request (14 Oct 2026)**: it linked to the immediately preceding Locations section and duplicated the navigation link. The Footer ends after the brand, navigation and social row. Further owner refinements the same day: the top rule reduced from 4px to 2px, the three columns aligned flush to one top line, the slogan made slightly larger and darker, and `報道 →` given the same style as the other links so it no longer looks disabled.

Built in `src/components/shell/Footer.tsx` and the Footer rules in `src/app/globals.css`. **Approved by the owner on 14 Oct 2026** at desktop, tablet and mobile, and frozen against further visual redesign; no Footer motion. Measured in the browser at 1440px, 1024px, 768px and 390px: content edges match the Locations container, every link and icon is at least 44px, no horizontal overflow (measured with the strip; removing it only shortens the Footer by about 44px).

```text
Locations (dark green)
━━━━━━━━━━━━━━━━━━━━━━━━━━ 2px lacquer rule ━━━━━━━━━━━━━━━━━━━━━━━━━━━
warm paper (--paper), site container
[seal] 文記車仔麵 (40px)        網站導覽 ───── (gold)       關注我們 ── (gold)
       你揀，文記煮。            首頁   點餐   文記十大       (IG) (FB) (in) (YT)
                                故事   到店／外賣  報道 →
```

- **Ground and colour:** `var(--paper)`; no raw hex. A 2px `--lacquer` rule on the top edge. Ink text. Lacquer red for interaction: the 2px hover underline on text links, and the social hover state. Gold (`--noodle` at 60%) only for the 1px divider under each zone label. No black or full-red field, cards, shadows, gradients or animation.
- **Container alignment:** the Footer uses the shared site gutter `max(16px, (100% − 72rem) ÷ 2)` with the header, so its content lines up with the Locations container. Padding is 32px top and bottom.
- **Brand lockup (horizontal):** the existing seal (`/brand/mankee-seal-320.webp`, `next/image`, decorative) at 44px beside `文記車仔麵` in the display face, 700, ink, 40px, one line; `你揀，文記煮。` sits 8px beneath the wordmark at 17px, ink at 90%. The seal, wordmark and both zone labels start on one shared top line (line-height 1 on the wordmark and labels).
- **Navigation zone:** the label `網站導覽` over a gold divider, then `primaryNav` in its established order (首頁, 點餐, 文記十大, 故事, 到店／外賣) followed by `報道 →` (same style as the other links) in a grid of equal 6.5rem columns: three columns from 640px, two below. 16px semibold ink, 44px tall. `到店／外賣` is a plain link. The `nav` keeps the accessible name `頁尾`.
- **Social zone:** the label `關注我們` over a gold divider, then four icon-only circular controls (lucide-react `Instagram`, `Facebook`, `Linkedin`, `Youtube`, 20px icons in 44×44px circles with a 1px ink-22% border). Hover: lacquer border and icon with an 8% lacquer tint. Each has an accessible name such as `Instagram（新分頁開啟）` and opens in a new tab with `rel="noopener noreferrer"`. URLs supplied and verified by the owner on 14 Oct 2026, unchanged, stored in `socialLinks` in `Footer.tsx`:
  - Instagram: https://www.instagram.com/mankeecartnoodles/
  - Facebook: https://www.facebook.com/profile.php?id=61587927208864
  - LinkedIn: https://www.linkedin.com/company/%E6%96%87%E8%A8%98%E8%BB%8A%E4%BB%94%E9%BA%B5-man-kee-cart-noodles/?viewAsMember=true
  - YouTube: https://www.youtube.com/@ManKeeCartNoodles
- **Desktop (from 1024px):** brand on the left (flexible column), navigation and social as compact top-aligned columns on the right, 64px apart. Padding 32px top, 24px bottom.
- **Tablet (768–1023px):** brand across the top; navigation left and social right beneath it.
- **Mobile (below 768px, owner polish 14 Oct 2026):** brand, then navigation, then social, 16px apart; Footer padding 24px top and bottom. Seal 36px and wordmark 30px, with the slogan (16px) directly beneath and aligned to the wordmark's column. Navigation is a balanced 3 × 2 grid of equal columns (首頁 點餐 文記十大 / 故事 到店／外賣 報道 →). The four social icons stay on one row. Locations' bottom padding drops from 64px to 48px on mobile only, so less dark green sits before the Footer.
- **Policy and terms:** no Privacy, Terms or Cookie links until approved pages exist. When they do, add them as a fourth full-width row under the three zones in `.footer-layout`; no dead links or generic legal copy in the meantime.
- **Not in the Footer:** addresses, telephone, email, maps, Foodpanda, buttons, a closing `到店／外賣` strip, legal name, copyright line and newsletter.

## Purpose

Locations and Footer form the practical ending of the homepage:

1. **Locations:** turn interest into a clear visit, call, email or delivery action.
2. **Footer:** deliver a memorable brand-led ending with concise navigation and practical continuity.

The intended final sequence is:

**Founder purpose → Recognition records → Visit or order → Decisive 文記 sign-off**

Locations is not another storytelling climax. It should feel confident, useful and unmistakably designed for 文記 rather than like a generic pair of location cards. Footer then supplies the stronger final brand beat without adding another information-heavy chapter.

## Governing visual direction

This plan adopts the approved decisions in `docs/current/inspiration-analysis.md` and the Mankee-specific principles in `docs/reference/visual-analysis.md`.

- Locations is the practical action chapter, not another narrative spectacle.
- Footer is the final brand peak: visually memorable, compositionally simple and free of invented content.
- Use one dominant focal point per viewport, strong type-scale contrast and strict colour roles.
- Preserve documentary authenticity and local character rather than imitating a glossy international chain.
- The static layout must be approved before any supporting reveal is considered.

## Inspiration Alignment Gate

This gate must pass before Locations or Footer is marked complete.

1. **Single visual job:** Locations answers where, when and how to visit or order. Footer leaves one unmistakable final 文記 impression and a concise route back through the site.
2. **Page rhythm:** Locations is a practical pause after Recognition. Footer is the decisive final brand beat, not a second information directory.
3. **Dominant focal point:** 深水埗 is the Locations focal point. The oversized 文記 wordmark/signage treatment is the Footer focal point.
4. **Colour role:** Locations uses one dominant dark-green or ink ground with ivory text. Footer uses a decisive ink or lacquer-red brand field. Gold and red remain small semantic accents unless lacquer red is selected as the Footer ground.
5. **Type hierarchy:** Location name, address, hours, actions and secondary branch must be visibly distinct. Footer wordmark is deliberately oversized; navigation remains compact and secondary.
6. **Image treatment:** No image is required. If one approved documentary image is later accepted, it remains supporting atmosphere and never competes with location facts or the Footer wordmark.
7. **Motion budget:** Locations may receive one short reading-order reveal only after static approval. Footer requires no dedicated animation. Reduced motion shows the complete state immediately.
8. **Prohibited patterns:** No equal location cards, map embed, corporate sitemap, newsletter block, invented slogan, decorative marquee, parallax, scroll capture, glass effect or competing palette.
9. **Transitions:** Recognition moves deliberately into practical Locations. Locations then resolves into a visibly stronger brand field without merging its final action with Footer navigation.
10. **Viewport approval:** Static Locations and Footer must be visually approved at 1440px, 1024px and 390px, including hierarchy, long-address wrapping, touch targets and overflow.
11. **Global-pass boundary:** The later Global Visual-System Pass may standardise tokens, scale, rules, captions and spacing, but must not restructure an approved composition.

Factual accuracy, link validity and accessibility override visual inspiration whenever they conflict.

## Source-of-truth content

Use the current typed content in `src/content/zh-HK/locations.ts` as the factual authority. Do not restore stale placeholders from the wireframe.

### Primary location — 深水埗店

- Address: `深水埗福榮街109、115、121及123C號`
- Opening hours: `每日 11:00–04:00`
- Telephone: `(+852) 9059-5104`
- Email: `mankeecartnoodles@gmail.com`
- Map: `https://share.google/otLrnzLumqWZaN8mg`
- Foodpanda: `https://www.foodpanda.hk/zh/chain/cu0nv/man-kee-cart-noodle`
- Keeta: not confirmed; do not display it.

### 尖沙咀店

- Address: `尖沙咀廣東道3-27號海港城港威商場4樓4102號舖11號檔 Food Atlas`
- Opening hours: `每日 11:00–21:00`
- Map: `https://maps.app.goo.gl/acZKwec46s7T8JsB9` — the Food Atlas map, supplied by the owner on 14 Oct 2026.
- Foodpanda: `https://www.foodpanda.hk/zh/restaurant/anos/man-kee-cart-noodle-harbour-city-anos`
- Telephone and email: the shared `(+852) 9059-5104` and `mankeecartnoodles@gmail.com`, owner-confirmed for both shops on 14 Oct 2026.
- Keeta is not confirmed; do not invent or display it.

### Footer

- Brand name, wordmark and navigation labels must come from the established site content and navigation model.
- Do not invent a legal company name, slogan, social profile, policy page or copyright statement.
- Keep Press as a secondary destination rather than adding it to the primary navigation.

## Audit of the current implementation

### Locations

What works:

- Confirmed location facts and action URLs already live in one typed content source.
- Both shops are represented without invented information.
- The current markup is simple and can remain progressively enhanced.

What is weak:

- A plain ordered list does not communicate that 深水埗 is the primary location.
- Both shops lack an intentional information hierarchy.
- Address, hours, contact and ordering actions read as one undifferentiated text block.
- The section does not feel like the practical conclusion of the Founder and Recognition sequence.
- There is no clear editorial distinction between visiting, contacting and ordering.

### Footer

What works:

- The established brand name and primary navigation are already available.
- The footer is structurally lightweight.

What is weak:

- The generic horizontal flex layout looks like a duplicated navigation bar.
- It does not visually continue the location section or provide a deliberate end to the page.
- The hierarchy between brand, navigation and secondary destinations is unclear.
- It risks repeating actions that the user has just seen in Locations.

## Design direction

Use a **dark-green practical chapter followed by a decisive brand-led footer**.

- Locations should feel rooted, direct and useful.
- 深水埗 must be visually dominant; 尖沙咀 is a supporting location.
- Use typography, rules, spacing and asymmetric scale rather than two equal rounded cards.
- Reuse the existing lacquer red and muted gold only as small directional accents.
- Make the Footer a memorable final brand field using an oversized 文記 wordmark/signage treatment and either a decisive ink or lacquer-red ground.
- Avoid gradients, glowing buttons, oversized icons, glass effects and template-style card grids.
- The static layout must work without any new media.

Existing documentary store imagery such as `/media/store/queue-day.webp` or `/media/store/queue-dusk.webp` may be considered later as a restrained supporting strip only after visual review. Do not make new image generation or a background photograph a requirement for this pass.

## Section 1 — Locations

### Information hierarchy

Use this reading order:

1. Small chapter label: `到店／外賣`
2. Clear location heading
3. Primary 深水埗 location
4. Secondary 尖沙咀 location
5. Clear handoff into the Footer

The heading should explain the section's purpose without adding a marketing claim. Keep labels concise and in Traditional Chinese.

### Desktop composition

- Use an asymmetric layout rather than two equal cards.
- Give 深水埗 approximately two-thirds of the visual weight.
- Give 尖沙咀 approximately one-third and clearly label it as the secondary location.
- Within 深水埗, separate practical facts from actions:
  - location identity and address;
  - hours and contact details;
  - `地圖` as the primary action;
  - `Foodpanda` as the secondary action.
- Within 尖沙咀, show only its confirmed address, hours and Foodpanda action.
- Use dividers, alignment and spacing instead of raised or heavily rounded cards.
- Keep the section substantial enough to scan easily, but do not make it a full-screen pinned scene.

### Action treatment

- Deep-link the 深水埗 telephone with `tel:` while preserving the readable displayed number.
- Deep-link the confirmed email with `mailto:`.
- Open map and delivery destinations as clearly marked external links.
- Add an external-link cue in text or an accessible icon; never rely on an icon alone.
- External links opened in a new tab must use safe link attributes.
- Do not show disabled buttons or `coming soon` placeholders for missing location data.
- Do not embed an interactive map. The external map link is faster, calmer and avoids an unnecessary privacy/performance cost.

### Optional documentary image

If an approved existing store image improves the composition after the static section is accepted:

- use at most one image;
- treat it as supporting atmosphere, not as the source of location facts;
- avoid placing essential text over a visually busy area;
- preserve a stable aspect ratio and responsive sizes;
- omit it entirely on mobile if it makes the information harder to scan.

Do not generate a new location image during this implementation.

### Motion

- The section may use one short entrance reveal after the static design is approved.
- Location details can appear in reading order with a small opacity/vertical transition.
- No pinning, map animation, marquee, parallax or scroll capture.
- Reduced motion must show the complete section immediately.

## Section 2 — Footer

### Role

The Footer is a decisive brand closing frame, not another information section and not a second call-to-action panel.

It should:

- reinforce the 文記 identity;
- make the established 文記 wordmark/signage treatment the dominant final visual;
- provide concise navigation back to important destinations;
- include Press as a secondary editorial route;
- end the page with deliberate spacing and a clear baseline.

It should not:

- repeat the red `到店／外賣` call to action;
- repeat all location details;
- introduce newsletter, social media or policy links that do not exist;
- display a made-up legal name or an unapproved slogan;
- become a large multi-column corporate sitemap.

### Desktop composition

- Resolve the dark-green Locations chapter into a decisive ink or lacquer-red Footer field.
- Use a compact two-zone structure:
  - oversized brand/wordmark zone;
  - concise navigation and secondary links zone.
- Let the wordmark carry the visual ending; navigation and Press remain clearly secondary.
- Use the existing primary navigation labels in their established order.
- Add `/press/` as a visually secondary link.
- Use one thin contrasting rule to mark the transition if needed.
- Give the wordmark enough scale and space to form a memorable ending without turning the Footer into a corporate sitemap.

### Mobile composition

- Brand first.
- Navigation second in a wrapped or vertical list with comfortable tap spacing.
- Press last as a secondary route.
- Avoid a dense multi-column layout or tiny inline links.
- Do not repeat location contact actions in the Footer.

### Motion

- No dedicated footer animation is required.
- If the site has a shared reveal pattern, use the lightest version once.
- Reduced motion must remain identical in information and hierarchy.

## Section transitions

### Recognition → Locations

- Move from Recognition's warm ivory into dark green with a deliberate colour boundary.
- Keep the transition calm; the user is moving from evidence to practical information.
- Recognition's `其他報道 →` link remains inside Recognition and must not compete with location actions.

### Locations → Footer

- Move into the selected ink or lacquer-red brand field as a deliberate final colour beat.
- Use spacing and one rule to separate practical actions from the oversized brand sign-off.
- The final Foodpanda action and Footer navigation must not visually merge.

## Mobile plan

- Keep the chapter label and heading above both locations.
- Render 深水埗 first as the full-width primary block.
- Stack its address, hours, contact details and actions in a predictable order.
- Use full-width or comfortably sized action targets where appropriate.
- Render 尖沙咀 below as a quieter secondary block.
- Preserve complete addresses without truncation.
- Allow long email and delivery labels to wrap safely.
- Footer content follows in one clear vertical flow.
- Verify no horizontal overflow at 390px.

## Accessibility and performance

- Use a real section heading and logical heading order.
- Mark postal information with semantic address markup without forcing unwanted italic styling.
- Keep telephone and email labels understandable without relying on visual icons.
- Every action must have a visible keyboard focus state.
- Target controls should be at least approximately 44×44px on touch devices.
- External-link labelling must remain understandable to screen readers.
- Ensure dark-green, ivory, red and gold combinations meet WCAG AA for text.
- Do not encode addresses or hours inside an image.
- Do not add an interactive map, iframe or third-party script.
- Add no new JavaScript or animation dependency.
- If an existing image is approved later, preserve explicit dimensions, responsive sources and lazy loading.

## Implementation sequence

### Pass 1 — Content and action contract

- Confirm the typed location facts and URLs listed above still match the approved source.
- Add only the short structural labels required by the final design.
- Remove no confirmed facts.
- Add no placeholder, inferred contact detail or new marketing claim.

### Pass 2 — Locations markup and styling

- Replace the generic list presentation with the asymmetric primary/secondary composition.
- Establish the dark-green chapter, information hierarchy and action treatment.
- Keep this pass static.
- Review desktop and mobile screenshots before continuing.

### Pass 3 — Footer markup and styling

- Replace the generic duplicated-nav appearance with the compact two-zone closing frame.
- Preserve established navigation destinations.
- Add Press only as a secondary route.
- Review desktop and mobile screenshots before continuing.

### Pass 4 — Transition and optional reveal

- Refine Recognition-to-Locations and Locations-to-Footer colour handoffs.
- Add only a restrained one-time Locations reveal if the static composition is already approved.
- Do not add motion to compensate for weak layout.

### Pass 5 — QA

- Review at 1440×900 and 390×844.
- Test all location actions and footer links.
- Check keyboard order, visible focus, reduced motion, long-text wrapping and colour contrast.
- Confirm that no unapproved location facts, media or Footer destinations entered production.

## Implementation files

Expected scope:

- `src/components/home/Locations.tsx`
- `src/components/shell/Footer.tsx`
- `src/content/zh-HK/locations.ts` only if approved structural labels require it
- `src/content/zh-HK/site.ts` only if the Footer's approved secondary navigation requires it
- Locations rules in `src/styles/home.css`
- Shared Footer rules in the existing shell/global stylesheet only if they cannot remain component-scoped

Do not edit Hero, Sensory Trio, How to Order, Top Ten, Order Slip, Founder, Recognition, menu content or press content during this work.

## Speed guardrails

- Implement Locations first and stop for screenshot review.
- Implement Footer only after Locations is accepted.
- Use the existing `http://localhost:3000/` server.
- Do not inspect or start the retired port 4500 wireframe server.
- Do not scan the whole repository or restart a working development server.
- Do not generate media or add dependencies.
- Capture only the requested 1440×900 and 390×844 views.
- Do not run a full production build until both sections are visually accepted.
- Do not commit until the combined section passes content, interaction and visual review.

## Execution checklist

Check an item only after it has been implemented and visually verified. Locations must be approved before Footer begins.

### Locations — content contract

- [x] Confirm 深水埗 address, hours, telephone, email, map URL and Foodpanda URL against the typed content source.
- [x] Confirm 尖沙咀 address, hours, owner-supplied Food Atlas map URL (14 Oct 2026) and Foodpanda URL against the typed content source.
- [x] ~~Confirm 深水埗 remains the primary location and 尖沙咀 remains secondary.~~ Superseded 14 Oct 2026: both shops have equal typographic importance.
- [x] Confirm the shared telephone and email (owner-confirmed 14 Oct 2026) appear for both shops, and no unverified Keeta destination is displayed.
- [x] Confirm no stale `待定`, `coming soon` or disabled placeholder appears.
- [x] Confirm any new label is structural copy, not a new factual claim. New labels: `營業時間`, `電話`, `電郵` and the two storefront alt texts. `另一分店` and the banner caption `深水埗店外` are removed.

The two-entry build below was approved by the owner on 14 Oct 2026.

### Locations — implementation and approval

- [x] Add the dark-green practical closing chapter treatment.
- [x] ~~Build the asymmetric desktop composition with 深水埗 carrying approximately two-thirds of the visual weight.~~ Rejected 14 Oct 2026.
- [x] ~~Place one wide documentary storefront photograph below the heading.~~ Rejected 14 Oct 2026: each shop now has its own photograph.
- [x] Give each shop its own 4:3 storefront photograph showing signage and entrance, with no text over it.
- [x] Build two equal-width shop columns on desktop with identical name size, weight, typography and spacing; stack them on mobile with the same styling.
- [x] Separate identity/address, hours/contact and actions into a clear reading hierarchy.
- [x] Give both shops the same compact `地圖 ↗` and `Foodpanda ↗` actions with 44px tap targets.
- [x] Make the confirmed telephone and email directly actionable and visibly labelled.
- [x] ~~Present 尖沙咀 as a quieter secondary location with only its confirmed information and Foodpanda action.~~ Rejected 14 Oct 2026.
- [x] Use rules, alignment and spacing rather than two matching rounded cards.
- [x] Keep all external links distinguishable and safely configured.
- [x] Do not embed a map or load third-party location scripts.
- [x] Keep the pass static. The only new media is the two owner-supplied storefront photographs and the Foodpanda mark.
- [x] Keep the opaque header above Locations with no text showing through.
- [x] Verify the mobile order is heading, 深水埗, then 尖沙咀.
- [x] Verify complete addresses and email wrap without clipping (measured at 1024px, 390px and 375px; no horizontal overflow; every link at least 44px tall).
- [x] Review Locations at 1440×900 (owner review, 14 Oct 2026).
- [x] Review Locations at 390×844 (owner review, 14 Oct 2026).
- [x] Receive Locations visual and content approval before starting Footer (14 Oct 2026, including the 尖沙咀 photo permission and Foodpanda mark clearance).

### Footer — implementation and approval

The Footer was approved by the owner on 14 Oct 2026.

- [x] ~~Resolve Locations into the approved decisive ink or lacquer-red Footer field (deepened lacquer, one 2px gold rule).~~ Rejected after visual review, 14 Oct 2026.
- [x] ~~Resolve Locations into a cream, header-matching Footer with one 2px lacquer rule.~~ Rejected after visual review, 14 Oct 2026: read as an oversized duplicate of the header.
- [x] ~~Resolve Locations into a dark-ink editorial Footer with one 3px lacquer rule, a restrained brand zone and a vertical navigation index.~~ Rejected after visual review, 14 Oct 2026: too heavy after the dark-green Locations.
- [x] Resolve Locations into a compact three-zone Footer (brand, 網站導覽, 關注我們) on the warm `--paper` ground.
- [x] ~~Build the oversized wordmark zone plus compact navigation/secondary-links zone.~~ Superseded: a compact horizontal brand lockup beside navigation and social zones.
- [x] Confirm the 文記 seal and wordmark lockup leads the Footer without dominating it (owner review, 14 Oct 2026).
- [x] Preserve the established primary navigation labels and destinations.
- [x] Add `/press/` only as a secondary editorial destination.
- [x] Do not repeat the location address, contact details or red location CTA.
- [x] Do not add an unapproved slogan, social account, policy page, newsletter or legal name. The slogan `你揀，文記煮。` and the four social URLs are owner-supplied (14 Oct 2026); no policy links until approved pages exist.
- [x] Avoid a generic large corporate sitemap or duplicated header appearance.
- [x] Ensure mobile links have comfortable touch spacing and a clear vertical order (brand, navigation, 報道; 44px targets).
- [x] Capture and review one 1440×900 Footer screenshot.
- [x] Capture and review one 390×844 Footer screenshot (owner screenshot, 14 Oct 2026).
- [x] Receive Footer visual and content approval (14 Oct 2026).

### Combined transition and QA

- [ ] Confirm Recognition moves cleanly from warm ivory into the dark-green Locations chapter.
- [ ] Confirm Locations and Footer are visually related but remain clearly separate.
- [ ] Confirm the final location action does not merge visually with Footer navigation.
- [ ] Verify logical heading order and semantic address treatment.
- [ ] Verify every telephone, email, map, delivery and Footer link reaches the intended destination.
- [ ] Verify visible keyboard focus and logical tab order.
- [ ] Verify touch targets, long-text wrapping and no horizontal overflow at 390px.
- [ ] Verify WCAG AA text contrast across both dark sections.
- [ ] Verify the complete static experience with reduced motion enabled.
- [ ] Verify no iframe, third-party map script, new dependency or unnecessary client JavaScript was added.
- [ ] Verify no unconfirmed location data or Footer destination was introduced.
- [x] Run lint, tests, type check and the production build after visual approval (14 Oct 2026, Stage 3 checkpoint).
- [ ] Complete final desktop and mobile visual review before committing.

## Acceptance criteria

### Locations

- ~~深水埗 is immediately recognizable as the primary location.~~ ~~尖沙咀 remains easy to find without competing equally for attention.~~ Superseded 14 Oct 2026: both shops have equal visual and typographic importance.
- A visitor can understand where to go, when it is open and which actions are available within a quick scan.
- Missing facts are omitted cleanly rather than replaced with placeholders.
- The section feels specific to 文記 and not like a generic pair of location cards.
- The static composition works without a map embed, new image or motion effect.

### Footer

- Feels like an intentional, memorable 文記 sign-off rather than a repeated header or utility bar.
- Uses an oversized established wordmark/signage treatment without inventing a slogan or new brand asset.
- Reinforces the brand and offers concise navigation without repeating Locations.
- Contains only real, approved destinations.
- Remains compact and readable on desktop and mobile.

### Combined sequence

- Recognition, Locations and Footer read as evidence → action → closure.
- Location facts and actions remain accurate, accessible and easy to scan.
- No invented copy, placeholder data, generated media or new dependency is introduced.
- Works at desktop and mobile widths without overflow or unnecessary motion.

## Current next step

Locations (Pass 2, two equal store entries) was visually and factually approved and frozen on 14 Oct 2026. The full lacquer-red, cream header-mirroring and near-black Footers were rejected after visual review; the compact three-zone Footer on warm paper (Pass 3) was approved and frozen on 14 Oct 2026. Stage 3 is complete. Pass 4's transition review moves to the Stage 5 global continuity pass, and any optional Locations reveal to Stage 6. Do not reopen Locations or the Footer.
