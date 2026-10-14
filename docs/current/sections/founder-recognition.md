# Founder + Recognition — implementation plan

## Follow this

Updated 14 Oct 2026. This block wins. Older paragraphs below are history; ignore them when they disagree.

### Founder — editorial poster composition (approved 14 Oct 2026)

**Approved by the owner on 14 Oct 2026 at desktop and mobile.** This is the Founder design of record. Do not restructure it; the Stage 5 audit may only adjust shared type scale and weights. Optional motion is deferred to Stage 6.

The half-and-half photograph/type split is **retired**, as are the 52/48 split and the equal-height three-zone text column.

Approved values (`src/components/home/Founder.tsx`, Founder rules in `src/styles/home.css`):

- Quotation: desktop up to 80px, scaled to the canvas; mobile and tablet scale to the canvas width (about 34px at 390px). Line height 1.04 on desktop. The closing `」` is pulled back against `。`.
- Portrait: about 70% of the canvas on desktop (7fr/3fr feature grid), frame 1.78 with crop position `50% 76%`; mobile frame 1.62 at `50% 74%`. 黃志強 horizontally centred.
- Rail: same height as the photograph on desktop. A short lacquer rule and identity align to the photo's top; the 17px context sentence aligns to its bottom.
- Lacquer accents: the label rule and the rail rule only.

```text
創辦人故事

「最希望是港人珍惜
  本土風味食店。」

[        large documentary portrait — about 68% width        ]   黃志強 · Simon Wong
                                                                創辦人

                                                                車仔麵為本土食物，夠地道。
```

- Ground and boundary unchanged: `--ground-light`, `--section-space` padding, 1px ink hairline at 18% on the top edge. Inner spacing uses the `--space-*` scale.
- Top: lacquer rule, then `創辦人故事`. The rule is the only lacquer accent.
- The quotation sits above the photograph and spans most of the canvas. It is the only large type. Break after `珍惜`; the second line indents one character so `本` sits under `最`.
- The photograph is a large documentary feature beneath the quotation, about 68% of the canvas width. 黃志強 stays horizontally centred. Crop reduces the bright ceiling while keeping the restaurant context.
- Identity and context form a narrow editorial rail beside the photograph, aligned to its lower edge: `黃志強 · Simon Wong`, `創辦人`, then `車仔麵為本土食物，夠地道。`.
- The composition is intentionally asymmetric and has enough vertical presence to stand against the red Recognition section.
- Mobile order: label → quotation → photograph → identity → context. No extreme crop.
- No overlap, card, shadow, biography, second quotation, new media or animation. Do not copy the Concept B dark field.

### Recognition — two-level editorial composition (approved 14 Oct 2026)

**Approved by the owner on 14 Oct 2026 at desktop, tablet and mobile, including typography.** This Michelin-first composition (Michelin > 白種元 > 黎芷珊) is the Recognition design of record and is frozen against further visual redesign; the Stage 5 audit may only adjust shared type scale and weights. The programme screenshots remain pending publication clearance (see below). Optional motion is deferred to Stage 6.

Rejected on 14 Oct 2026: the full-red certificate layout, and the documentary spread that made 白種元 dominant with a compact Michelin block (its hierarchy was backwards). Replace; do not refine either.

Required hierarchy: **Michelin > 白種元 > 黎芷珊.**

Refined 14 Oct 2026 (same concept): section header restored above the panel, larger artwork, `到訪記錄` divider, bottom-aligned visitor row.

```text
— 認可與到訪
米芝蓮指南，八年記錄。

┌───────────────────────┬──────────────────────────────────┐
│  Michelin artwork      │                                  │  Level 1 — Michelin panel
│  (~40% of panel width, │  2018—2025   ← prominent,        │  --michelin red, ~420–440px tall
│   ~2.3× previous size) │     vertically centred           │  on desktop
└───────────────────────┴──────────────────────────────────┘
到訪記錄 ─────────────────────────────────────────────────────  divider
┌──────────────────────────────────┐ ┌──────────────────┐
│ 白種元 still (larger, ~2/3)        │ │ 黎芷珊 still       │    Level 2 — visitor evidence
└──────────────────────────────────┘ └──────────────────┘
白種元曾到訪文記 · 韓國節目畫面             黎芷珊曾到訪文記 · TVB 節目畫面
                                        其他報道 →   ← bottom-aligned with the 白種元 caption
```

- Ground: `--ground-light`, continuous with Founder, with the Stage 2 boundary (`--section-space` padding, 1px ink hairline at 18% on the top edge). The red is a panel inside the section, not the section ground.
- **Header:** kicker `認可與到訪` (`--jade-text`, lacquer rule) and headline `米芝蓮指南，八年記錄。` in ink, above the panel.
- **Level 1 — Michelin panel.** `--michelin` red (the artwork's own red), full content width, about 420–440px tall on desktop. The artwork takes about 40% of the panel width and is shown at 120% of that column so its empty red margins crop away invisibly; every word in it (`MICHELIN`, `文記車仔麵`, `Man Kee Cart Noodles`, `2018 - 2025`) renders at about 1.1× its source size. `2018—2025` sits in the other 60%, prominent but capped at 96px so it does not overpower the artwork. Both sides vertically centred. The in-panel label and headline are removed because the header carries them. Do not claim a Michelin star.
- **Divider:** `到訪記錄` label with a 1px ink hairline at 18% running to the right edge, between the panel and the photographs. The per-caption `到訪記錄` labels are removed.
- **Level 2 — visitor evidence.** 白種元 still larger (about two-thirds), 黎芷珊 still smaller (about one-third), top-aligned. Deliberate 2:1 crops that keep the top-edge watermarks (백 channel mark top left, `tvb.com` top right). Captions: `白種元曾到訪文記` / `黎芷珊曾到訪文記` and the source credit (`韓國節目畫面`, `TVB 節目畫面`). No endorsement wording.
- `其他報道 →` to `/press/` sits at the foot of the 黎芷珊 column, bottom-aligned with the end of the 白種元 caption, so the right column has no trailing empty space. On mobile it follows the 黎芷珊 caption. (Existing tests require the Recognition section to keep a `/press/` link.)
- Removed: `三項重要記錄`, the scattered three-object layout, equal treatment of the three records, excess empty space.
- Mobile order: header, Michelin panel, divider, 白種元 still and caption, 黎芷珊 still and caption, `其他報道 →`.

**Polish pass (owner direction, 14 Oct 2026) — supersedes the conflicting points above:**

- Michelin panel: small cream label above `2018—2025`. Artwork unchanged. (Label superseded by the responsive pass below.)
- Visitor chapter header: `到訪記錄` kicker row with hairline, headline `從指南，到鏡頭。`, supporting line `文記亦曾出現在海外與本地節目。`.
- Visitor grid about 64/36. 白種元 stays 2:1 and dominant. 黎芷珊 is enlarged to the 36% column at 7:5 (close to 4:3; exact 4:3 clips 黎芷珊's arm), cropped from the right edge so 黎芷珊, both staff and the `tvb.com` mark stay in frame.
- Captions standardised: visitor statement 21px display, source 13px `--ink-muted`, same spacing under both photographs.
- `其他報道 →` sits directly beneath the 黎芷珊 caption, not at the foot of the column.
- A restrained 1px ink hairline at 18% closes the section; the bottom padding is reduced to `--space-48` so the gap before `到店／外賣` is shorter.
- Locked fonts, colours and header. No card styling, shadow, rounded corner, logo wall or animation. Do not edit any other section.

**Responsive polish (owner direction, 14 Oct 2026) — desktop structure approved and kept:**

- Desktop, 1024px (64rem) and above: the split panel stays exactly as approved — enlarged artwork left, `指南收錄記錄` and the large `2018—2025` right, same size, colour and alignment.
- Below 1024px (the same breakpoint where the panel stacks): the whole external `指南收錄記錄 / 2018—2025` block is hidden, because the artwork already carries the years. The heading `米芝蓮指南，八年記錄。` stays above the panel. The panel holds only the artwork, centred on its own content box (about 49% × 51% of the file, centred at 49.5% / 48.3%). The artwork is `min(140% of the panel width, 640px)` and the panel height is 0.72 of that, leaving about 50px of red above and below at 390px and about 65px at 768px. The artwork's lines stay at or above their native size at both widths, and the mark stays inside the panel's overflow clip, so there is no horizontal overflow.
- Visitor records: 白種元 stays full-width and dominant on mobile; 黎芷珊 stays the narrower secondary entry. Both use the same rhythm: image → 16px → statement → 8px → source. Watermarks and source labels stay visible.
- `其他報道 →` stays below the 黎芷珊 entry with a minimum 44px tap area; the gap above it is 8px so the visible spacing matches the caption rhythm.
- The closing hairline and the reduced gap before `到店／外賣` are unchanged.

**Typography (owner direction, 14 Oct 2026):**

- The display role (DFKai-SB first) is used only for `米芝蓮指南，八年記錄。`, `從指南，到鏡頭。` and the large `2018—2025`. Both headlines are tracked at -0.02em, trim the full-width punctuation boxes where the browser and font support it, and wrap with balanced natural breaks.
- `2018—2025` uses tabular numerals at -0.02em.
- The text role is used for the kickers, the supporting line (16px), visitor captions (semibold, 17px below 1024px and 19px from 1024px), sources (13px `--ink-muted`) and `其他報道 →` (16px semibold, 44px tap area). No third font.

**Header:** the global header is fixed and opaque and is not edited here. The Recognition section is an isolated stacking context, so none of its content can paint above or through the header.

**Publication clearance — pending.** `paik-visit-counter.png` (Korean programme frame) and `luisa-tvb-counter.png` (TVB frame) are third-party broadcast stills. Per `docs/reference/content-register.md`, reuse permission and source URLs are not yet recorded. They are shown at owner direction for design review only and must not ship to production until clearance is recorded there. Web derivatives live in `website/public/media/recognition/`.

Live check: http://localhost:3000/

## Purpose

These two sections follow the completed food payoff in `你揀，文記煮`:

1. **Founder:** reveal the person and local-food purpose behind 文記.
2. **Recognition:** show three important public records without turning visits into endorsements or publishing unlicensed programme imagery.

The emotional order is:

**熱騰騰上枱 → 創辦人與堅持 → 三項重要記錄 → 到店／外賣**

Founder is the emotional chapter. Recognition is supporting evidence. Neither should compete with the Hero or become another motion climax.

## Governing visual direction

This plan adopts the approved decisions in `docs/current/inspiration-analysis.md` without copying the reference site's branding or compositions.

- Use the approved peak-and-pause rhythm: Founder is a quiet human pause after the food payoff; Recognition is the factual evidence that follows it.
- Give each viewport one obvious focal point. Founder is led by the portrait and quotation; Recognition is led by the Michelin record and its adjacent visitor ledger.
- Use stronger scale contrast among chapter label, quotation/heading, identity line and supporting text. Avoid a middle-sized-everything hierarchy.
- Use warm cream as the dominant Founder ground. Do not introduce another competing dark green, brown or black chapter here.
- Keep lacquer red semantic and restrained; it may mark a rule, link or small emphasis, but must not compete with the portrait.
- Preserve documentary authenticity. Do not imitate the inspiration's glossy chain aesthetic.
- Treat the inspiration's suggestion of a biography or archival detail as conditional only. The approved portrait already contains useful restaurant context, and no biography or archival claim may be added without verified source content.

The later **Global Visual-System Pass** will standardise colour tokens, typography scale, captions, rules and spacing across the assembled page. It must not restructure an approved Founder or Recognition composition.

## Inspiration Alignment Gate

This gate must pass before either section is marked complete.

1. **Single visual job:** Founder communicates the person and purpose behind 文記; Recognition presents concise external evidence. Do not merge the two jobs into one collage.
2. **Page rhythm:** Founder is the quiet human pause after the food payoff. Recognition is the structured evidence beat before practical visit information.
3. **Dominant focal point:** Founder is led by 黃志強 centred inside the portrait, with the approved quotation as the linked typographic focal point. Recognition is led by the Michelin record with the two visitor records clearly secondary.
4. **Colour role:** Founder uses warm cream and ink with one restrained lacquer-red accent. Recognition remains in the warm editorial family and must not introduce another equally strong palette.
5. **Type hierarchy:** Kicker, dominant quotation/heading, identity, supporting line and record label must use visibly distinct scales and weights. The Founder quotation must occupy substantial visual area rather than sitting as a polite text block. Avoid middle-sized-everything typography.
6. **Image treatment:** Preserve the founder portrait's documentary context and natural landscape character. Use only the approved Michelin artwork in Recognition; visitor records remain text-only.
7. **Motion budget:** Static composition is approved first. Later motion is limited to one short entrance reveal in reading order, with an immediate reduced-motion state.
8. **Prohibited patterns:** No equal-card grid, biography card, celebrity gallery, logo wall, carousel, marquee, parallax, continuous zoom, competing quotation or unverified copy.
9. **Transitions:** `你揀，文記煮` resolves before Founder; Founder changes from human statement to factual Recognition; Recognition hands off calmly to Locations.
10. **Viewport approval:** The static composition must be visually approved at 1440px, 1024px and 390px, including crop, hierarchy, wrapping and overflow.
11. **Global-pass boundary:** The later Global Visual-System Pass may standardise tokens, scale, rules, captions and spacing, but must not restructure an approved composition.

Content accuracy, licensing and attribution requirements override visual inspiration whenever they conflict.

## Source-of-truth content

### Founder — approved content hierarchy

1. Label: `創辦人故事`
2. Small context: `車仔麵為本土食物，夠地道。`
3. Dominant quotation: `最希望是港人珍惜本土風味食店。`
4. Identity: `黃志強 · Simon Wong`
5. Role: `創辦人`

Portrait: `/media/founder/wong-chi-keung-960.webp`

On desktop the quotation is two lines, and the break is after `珍惜`. See **Follow this** at the top. The earlier break, before `珍惜`, is retired.

Removed from the rendered Founder section: `取得米芝蓮殊榮固然驚喜。`, `以為都係西餐食物同日式嗰啲拎到米芝蓮！`, the long English press paragraph, and `8 Year Michelin Guide`. Michelin information belongs to Recognition. Do not invent biography, dates or other claims.

### Recognition — approved homepage records

1. 米芝蓮 — 2018–2025 with `/media/recognition/michelin-2018-2025.png`
2. 白種元曾到訪文記
3. 黎芷珊曾到訪文記

Portraits and programme screenshots of 白種元 and 黎芷珊 stay off the production site. Do not imply endorsement, sponsorship, recommendation or quotation.

All other coverage belongs on `/press/` and renders only when its source and publication treatment are approved.

## Audit of the current implementation

### Founder

What works:

- Correct approved portrait, name and quotation are present.
- The split layout is responsive and semantically simple.
- The portrait is already available at useful responsive sizes.

What is weak:

- The section reads like an image beside a blockquote, not a designed story chapter.
- There is no deliberate handoff from the completed order slip.
- `故事` does not establish enough hierarchy by itself.
- The portrait, quotation and name lack a shared editorial composition.
- The authentic restaurant context inside the photograph is not being used as part of the narrative.

### Recognition

What works:

- The three approved records come from the typed content model.
- Only the approved Michelin visual is published.
- The two visitor records remain text-only.

What is weak:

- The section has no heading, introduction or explanation of why these three records are grouped.
- A generic list gives all three items the same treatment and removes their meaning.
- Michelin recognition and documented visits need visibly different labels.
- The `/press/` route is presented as a bare link instead of the next editorial destination.
- There is no clear transition into Locations.

## Design direction

Use a **layered warm documentary portrait chapter followed by an editorial records ledger**.

- Founder: warm, calm, human and image-led; it is a tonal pause after the food photograph.
- Recognition: lighter, factual and structured.
- No rounded cards, testimonial carousel, logo cloud or celebrity gallery.
- No additional generated media is required.

## Section 1 — Founder

### Desktop composition

- Replace the polite side-by-side profile with one connected editorial canvas inside the established content width.
- Let the photograph and the type each occupy about half the canvas. The earlier 62–66% photograph with a 40–56px cream overlap is retired. See **Follow this**.
- Keep 黃志強 horizontally centred inside the visible photograph. Do not shift him toward either edge to manufacture empty space.
- Retain enough counter, customers and restaurant interior to establish place, but reduce excess ceiling and foreground.
- Place the name with the red rule at the top, the oversized quotation beneath it, and the small context line under the quotation. Do not park the name at the bottom.
- Make the image and quote field feel interlocked through alignment and overlap rather than separated by a full-height border.
- Use the approved warm-cream editorial ground to create a tonal break after `你揀，文記煮`.
- Use ink for primary text and one restrained lacquer-red rule or edge accent. Do not add jade, gold, brown and red at equal visual strength.
- Give the section enough presence to feel like a major brand chapter, but do not make it a second full-screen Hero.
- Keep the portrait and quotation as the only two major masses; do not introduce biography cards, badges, decorative panels or extra quotations.

### Copy hierarchy

1. Label: `創辦人故事`
2. Small context: `車仔麵為本土食物，夠地道。`
3. Dominant quotation: `最希望是港人珍惜本土風味食店。`
4. Identity: `黃志強 · Simon Wong`
5. Role: `創辦人`

The quotation is the visual headline. On desktop it is two lines, breaking after `珍惜`. The name and role sit above it. The context line sits below it.

The quotation must have a decisive scale jump from the label, context and identity line. On desktop it should occupy substantial width and height inside the quote field rather than reading as ordinary body copy beside a photograph.

### Portrait treatment

- Preserve the original documentary character.
- Correct only layout-level presentation: crop, contrast and a restrained colour cast adjustment if necessary.
- Keep 黃志強 at the horizontal centre of the visible crop at every desktop and tablet width. Use a centred object position and only a restrained crop; do not combine an aggressive scale with an off-centre transform origin.
- Do not retouch the person, replace the background or generate another portrait.
- Use the existing 640px/960px responsive files.
- Keep a stable aspect ratio to prevent layout shift.

### Motion

- One restrained entrance: portrait reveals by a short crop or fade; quotation follows slightly later.
- Maximum travel around 12–20px.
- No pinning, parallax portrait, zoom or continuous animation.
- With reduced motion, everything appears immediately.

## Section 2 — Recognition

### Introductory hierarchy

The homepage-explanation line is retired. It made the chapter talk about the website. Follow the Recognition block at the top: Michelin mark, two visit rows, then `其他報道 →`.

### Desktop composition

Use an asymmetric editorial grid:

- **Michelin feature:** the approved red artwork, large enough to be the only visual mass. Do not repeat `2018–2025` in display type.
- **Visitor ledger:** two quieter text rows beside it, not the same size as a headline.
- Use rules, spacing and typography rather than three matching cards.

```text
米芝蓮 mark            到訪記錄
指南記錄              白種元曾到訪文記

                      到訪記錄
                      黎芷珊曾到訪文記

其他報道 →
```

### Meaning and labels

- Michelin may be labelled `指南記錄` or `米芝蓮`.
- 白種元 and 黎芷珊 must be labelled `到訪記錄`.
- Do not call either visit an award, endorsement, recommendation or testimonial.
- Do not add quotations or descriptive programme copy unless separately approved.

### Press route

- End with a clear text link such as `其他報道 →` leading to `/press/`.
- The link must not promise articles that are not yet published.
- Keep Press outside the primary navigation.

### Motion

- Michelin artwork and the two ledger rows may reveal once in reading order.
- Use opacity and a small vertical shift only.
- No logo carousel, marquee, auto-rotation or scroll capture.

## Section transitions

### `你揀，文記煮` → Founder

- Let the bowl photograph finish as the food payoff before Founder begins.
- Move from photographic wood and food tones into a clean warm-cream editorial ground.
- Use spacing or one restrained rule as the boundary; do not overlap the bowl scene with the founder portrait.
- Founder should feel like a pause, not another immediate visual climax.

### Founder → Recognition

- Keep the transition within the warm editorial family, but create separation through spacing, rules and a clearer factual grid.
- A thin lacquer or brass rule may bridge the two sections.
- Recognition should feel like evidence following the founder's statement.

### Recognition → Locations

- End Recognition with `其他報道 →` and a quiet transition toward the practical visit information.
- Do not add another large handoff animation.

## Mobile plan

### Founder

- Image first, quotation second.
- Keep 黃志強 centred in the mobile photograph.
- Remove the desktop overlap and place the quote field in normal flow below the photograph.
- Keep the landscape photograph close to its natural ratio; do not crop the founder into an extreme vertical close-up.
- Name and English name remain together.
- Avoid full-screen section height.

### Recognition

- Intro first.
- Michelin block second.
- 白種元 and 黎芷珊 ledger rows follow in that order.
- `/press/` link remains last.
- No horizontal carousel.

## Accessibility and performance

- Founder portrait alt text remains `文記車仔麵創辦人黃志強`.
- Michelin alt text identifies the visible year range without describing it as an award.
- Visitor records remain real text, not text embedded in graphics.
- Preserve one logical heading order.
- Links have visible keyboard focus.
- Colour contrast meets WCAG AA.
- No essential information depends on animation.
- Continue lazy-loading both below-the-fold images and preserve explicit dimensions.
- Add no new JavaScript library.

## Implementation sequence

### Pass 1 — Content contract

- Keep existing confirmed facts and media paths.
- Add only the approved structural labels and headings needed by the layout.
- Do not copy the longer descriptive paragraphs or programme claims from the wireframe.

### Pass 2 — Founder markup and styling

- Build the connected documentary canvas with a centred portrait and restrained overlapping quote field.
- Establish the centred crop, decisive quote hierarchy and warm-cream editorial ground.
- Verify desktop and mobile before continuing.

### Pass 3 — Recognition markup and styling

- Replace the generic list with the Michelin feature plus two text ledger rows.
- Add the section introduction and Press route.
- Do not add visitor imagery.

### Pass 4 — Transitions and restrained reveal

- Add the `你揀，文記煮`-to-Founder boundary, Founder-to-Recognition transition and one-time reveals.
- Skip this pass if the static sections are not already strong.

### Pass 5 — QA

- Review at 1440×900 and 390×844.
- Check keyboard order, reduced motion, image loading and heading hierarchy.
- Confirm no unapproved claims or media entered the output.

## Implementation files

Expected scope:

- `src/components/home/Founder.tsx`
- `src/components/home/Recognition.tsx`
- `src/content/zh-HK/home.ts` only for approved structural copy
- `src/content/zh-HK/recognition.ts` only if the approved structure requires labels
- Founder and Recognition rules in `src/styles/home.css`

Do not edit Hero, Sensory Trio, How to Order, Top Ten, Order Slip, Locations, menu or press content during this work.

## Speed guardrails

- Implement Founder first and stop for one screenshot review.
- Implement Recognition only after Founder is accepted.
- Use the existing localhost:3000 server.
- Do not scan the repository or restart the server.
- Do not generate media.
- Do not run a full production build until both sections are accepted.
- Do not commit until the combined section passes visual and content review.

## Execution checklist

Check an item only after it has been implemented and visually verified. Founder must be approved before Recognition begins.

### Founder — implementation and approval

- [x] Confirm the component uses only the approved name, English name, quotation and portrait.
- [x] Add the `創辦人故事` chapter label without adding biography or timeline claims.
- [x] ~~Build the connected desktop canvas with photograph and type each taking about half the canvas.~~ Retired 14 Oct 2026, with the 62–66% overlap version before it.
- [x] Build the editorial poster composition: quotation above, about 68% documentary portrait below, identity and context rail beside it.
- [x] Verify the mobile order: label, quotation, photograph, identity, context.
- [x] Keep 黃志強 horizontally centred in the visible photograph at desktop, tablet and mobile widths.
- [x] Keep the portrait close to its natural landscape ratio and preserve the restaurant context.
- [x] Make the approved quotation the visual headline.
- [x] Keep `黃志強 · Simon Wong` together as the identity line.
- [x] Apply the approved warm-cream Founder ground with ink text and no competing dark chapter colour.
- [x] Confirm the quotation has a decisive scale jump from the label and identity line.
- [x] Confirm the portrait and quotation are the only two major visual masses.
- [x] Confirm the quote field is square, shadowless and visually part of the warm-cream page ground rather than a floating card.
- [x] ~~Confirm label, quotation and identity use the quote field's full vertical span.~~ Retired with the split layout; the poster rail matches the photograph height instead.
- [ ] Optional short entrance reveal — deferred to Stage 6. No pinning, zoom or parallax.
- [x] Verify reduced motion displays the complete static composition.
- [x] ~~Verify the mobile order is portrait, quotation, then identity.~~ Retired; the poster mobile order is label, quotation, photograph, identity, context.
- [x] Capture and review one 1440×900 Founder screenshot.
- [x] Capture and review one 1024px Founder screenshot.
- [x] Capture and review one 390×844 Founder screenshot.
- [x] Adopt the Stage 2 roles (14 Oct 2026): `--section-space` padding, top hairline boundary, inner spacing on the `--space-*` scale. Type sizes and weights wait for Stage 5.
- [x] Owner review of the poster composition, including the Stage 2 spacing and hairline, at desktop and mobile.
- [x] Receive Founder visual approval before starting Recognition. Approved 14 Oct 2026.

### Recognition — implementation and approval

- [x] Add the `認可與到訪` label and `三項重要記錄` heading.
- [x] Add a concise framing line without introducing new claims.
- [x] Build the asymmetric Michelin feature plus visitor-ledger composition.
- [x] Use only the approved `michelin-2018-2025.png` visual and confirmed year range.
- [x] Present 白種元 and 黎芷珊 as separate text-only `到訪記錄` rows.
- [x] Do not publish visitor portraits, programme screenshots, quotations or invented descriptions.
- [x] Clearly distinguish Michelin recognition from documented visits.
- [x] Add a truthful `其他報道 →` route to `/press/`.
- [ ] Optional restrained one-time reveal — deferred to Stage 6. No carousel, marquee or scroll capture.
- [x] Verify the mobile order is introduction, Michelin, 白種元, 黎芷珊, then Press.
- [x] Capture and review one 1440×900 Recognition screenshot.
- [x] Capture and review one 390×844 Recognition screenshot.
- [x] ~~Text-only ledger and full-red certificate layout.~~ Rejected 14 Oct 2026; the items above describe that retired build.
- [x] ~~Documentary editorial spread with dominant 白種元 still and compact Michelin block.~~ Rejected 14 Oct 2026: hierarchy backwards.
- [x] Build the two-level composition: Michelin hero field (Level 1), then 白種元 larger and 黎芷珊 smaller (Level 2).
- [x] Verify the mobile order: Michelin, 白種元, 黎芷珊.
- [x] Below 1024px, show only the centred Michelin artwork; from 1024px, keep the split panel with `指南收錄記錄` and `2018—2025`.
- [x] Apply the Recognition typography: display role for the two headlines and `2018—2025` only; text role for kickers, supporting copy, captions, sources and `其他報道 →`.
- [x] Owner review of the Michelin-first composition and typography at desktop, tablet and mobile.
- [ ] Record publication clearance for both broadcast stills in `docs/reference/content-register.md` before production release.
- [x] Receive Recognition visual approval. Approved 14 Oct 2026 at desktop, tablet and mobile; frozen against further visual redesign.

### Combined transition and QA

- [ ] Confirm `你揀，文記煮` completes as the food payoff before Founder begins.
- [ ] Confirm the bowl scene and founder portrait never overlap.
- [ ] Confirm the warm-cream Founder chapter reads as a quiet pause rather than another motion peak.
- [ ] Confirm the Founder-to-Recognition transition stays coherent while clearly changing from human story to factual evidence.
- [ ] Confirm Recognition hands off cleanly to Locations without another large animation.
- [ ] Verify heading order, portrait alt text, Michelin alt text and visible keyboard focus.
- [ ] Verify WCAG AA text contrast and complete reduced-motion presentation.
- [ ] Verify explicit image dimensions, lazy loading and no layout shift.
- [ ] Verify no horizontal overflow at 1440px and 390px.
- [ ] Verify no unconfirmed facts, implied endorsements or unlicensed media were added.
- [ ] Verify no new JavaScript or animation dependency was added.
- [ ] Run formatting, lint, tests and production build only after both sections are approved.
- [ ] Complete final visual review before committing.

## Acceptance criteria

### Founder

- Feels calm, documentary and human—not like a generic quote card.
- Creates the approved warm editorial pause after the photographic food payoff.
- Portrait context remains visible, 黃志強 is horizontally centred in the crop, and he remains the clear subject.
- The approved quotation is the visual focus.
- Photograph and quote field read as one layered editorial composition rather than two separate rectangles.
- Typography has obvious label, quotation and identity levels rather than one middle scale.
- No biography or claim has been invented.
- The section follows `你揀，文記煮` without overlapping it.

### Recognition

- Clearly distinguishes Michelin recognition from two documented visits.
- Uses only the approved Michelin visual.
- 白種元 and 黎芷珊 appear prominently without portraits or implied endorsement.
- Does not resemble three equal cards or a logo wall.
- Provides a clear but truthful route to `/press/`.

### Combined sequence

- Reads as founder purpose followed by supporting public records.
- Uses static composition successfully before motion is added.
- Works at desktop and mobile widths without horizontal overflow.
- Introduces no unverified copy, unlicensed media or new dependencies.

## Current next step

Follow the block at the top. Founder is approved as the editorial poster composition (14 Oct 2026); its optional motion is deferred to Stage 6. Recognition is approved (14 Oct 2026) at desktop, tablet and mobile as the Michelin-first two-level composition (Michelin > 白種元 > 黎芷珊), including typography, and is frozen against further visual redesign. The programme screenshots remain pending publication clearance and must not ship to production until it is recorded. Optional motion for both sections is deferred to Stage 6.
