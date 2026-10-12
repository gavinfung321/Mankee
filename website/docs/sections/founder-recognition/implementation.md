# Founder + Recognition — implementation plan

Planning document only. Do not implement until this plan is approved.

Live check: http://localhost:3000/

## Purpose

These two sections complete the story started by the order-slip transition:

1. **Founder:** reveal the person and local-food purpose behind 文記.
2. **Recognition:** show three important public records without turning visits into endorsements or publishing unlicensed programme imagery.

The emotional order is:

**一張完成的落單紙 → 創辦人與堅持 → 三項重要記錄 → 到店／外賣**

Founder is the emotional chapter. Recognition is supporting evidence. Neither should compete with the Hero or become another motion climax.

## Source-of-truth content

### Founder — approved for publication

- Name: 黃志強
- English name: Simon Wong
- Quotation: 「最希望是港人珍惜本土風味食店。」
- Portrait: `/media/founder/wong-chi-keung-960.webp`

Do not add a biography, founding date, timeline or business claim until it is recorded as confirmed content.

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

Use a **documentary portrait chapter followed by an editorial records ledger**.

- Founder: dark, calm, human and image-led.
- Recognition: lighter, factual and structured.
- No rounded cards, testimonial carousel, logo cloud or celebrity gallery.
- No additional generated media is required.

## Section 1 — Founder

### Desktop composition

- Use a two-column editorial layout inside the established content width.
- Portrait: approximately 54–58% of the composition.
- Copy: approximately 42–46%.
- Keep the existing landscape photograph; do not force it into an artificial portrait crop.
- Allow the restaurant interior and customers to remain visible around 黃志強.
- Use a restrained dark green or charcoal background that connects to the service-window transition.
- Give the section enough breathing room, but do not make it a second full-screen Hero.

### Copy hierarchy

1. Small chapter label: `創辦人故事`
2. Name line: `黃志強 · Simon Wong`
3. The approved quotation as the dominant text
4. No unverified biography

`故事` may remain the semantic section heading, but the quotation is the visual headline.

### Portrait treatment

- Preserve the original documentary character.
- Correct only layout-level presentation: crop, contrast and a restrained colour cast adjustment if necessary.
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

Add:

- Small label: `認可與到訪`
- Heading: `三項重要記錄`
- Concise framing line explaining that the homepage shows three representative records and other verified coverage belongs in 報道.

The framing line must not introduce new factual claims.

### Desktop composition

Use an asymmetric editorial grid:

- **Michelin feature:** a compact visual block using the approved red 2018–2025 artwork.
- **Visitor ledger:** two substantial text records stacked beside it.
- Use rules, spacing and typography rather than three matching cards.

Suggested hierarchy:

```text
米芝蓮 visual          到訪記錄 01
2018–2025              白種元曾到訪文記

                       到訪記錄 02
                       黎芷珊曾到訪文記
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

### Order Slip → Founder

- The live order slip completes and disappears before Founder content begins.
- Shift from warm counter tones into the darker documentary Founder background.
- Do not overlap the photographic bowl scene with the founder portrait.

### Founder → Recognition

- Use a deliberate light change from dark green/charcoal to warm ivory.
- A thin lacquer or brass rule may bridge the two sections.
- Recognition should feel like evidence following the founder's statement.

### Recognition → Locations

- End Recognition with `其他報道 →` and a quiet transition toward the practical visit information.
- Do not add another large handoff animation.

## Mobile plan

### Founder

- Image first, quotation second.
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

- Build the documentary split composition.
- Establish image crop, quote hierarchy and dark section background.
- Verify desktop and mobile before continuing.

### Pass 3 — Recognition markup and styling

- Replace the generic list with the Michelin feature plus two text ledger rows.
- Add the section introduction and Press route.
- Do not add visitor imagery.

### Pass 4 — Transitions and restrained reveal

- Add the Order Slip handoff, Founder-to-Recognition colour transition and one-time reveals.
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

- [ ] Confirm the component uses only the approved name, English name, quotation and portrait.
- [ ] Add the `創辦人故事` chapter label without adding biography or timeline claims.
- [ ] Build the documentary desktop split with the portrait occupying approximately 54–58%.
- [ ] Keep the portrait close to its natural landscape ratio and preserve the restaurant context.
- [ ] Make the approved quotation the visual headline.
- [ ] Keep `黃志強 · Simon Wong` together as the identity line.
- [ ] Apply the restrained dark green or charcoal section treatment.
- [ ] Add only the approved short entrance reveal; no pinning, zoom or parallax.
- [ ] Verify reduced motion displays the complete static composition.
- [ ] Verify the mobile order is portrait, quotation, then identity without extreme cropping.
- [ ] Capture and review one 1440×900 Founder screenshot.
- [ ] Capture and review one 390×844 Founder screenshot.
- [ ] Receive Founder visual approval before starting Recognition.

### Recognition — implementation and approval

- [ ] Add the `認可與到訪` label and `三項重要記錄` heading.
- [ ] Add a concise framing line without introducing new claims.
- [ ] Build the asymmetric Michelin feature plus visitor-ledger composition.
- [ ] Use only the approved `michelin-2018-2025.png` visual and confirmed year range.
- [ ] Present 白種元 and 黎芷珊 as separate text-only `到訪記錄` rows.
- [ ] Do not publish visitor portraits, programme screenshots, quotations or invented descriptions.
- [ ] Clearly distinguish Michelin recognition from documented visits.
- [ ] Add a truthful `其他報道 →` route to `/press/`.
- [ ] Add only a restrained one-time reveal; no carousel, marquee or scroll capture.
- [ ] Verify the mobile order is introduction, Michelin, 白種元, 黎芷珊, then Press.
- [ ] Capture and review one 1440×900 Recognition screenshot.
- [ ] Capture and review one 390×844 Recognition screenshot.
- [ ] Receive Recognition visual approval.

### Combined transition and QA

- [ ] Confirm the completed order slip disappears before Founder content begins.
- [ ] Confirm the bowl scene and founder portrait never overlap.
- [ ] Confirm the Founder-to-Recognition transition moves deliberately from dark to warm ivory.
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
- Portrait context remains visible and 黃志強 remains the clear subject.
- The approved quotation is the visual focus.
- No biography or claim has been invented.
- The section follows Order Slip without overlapping it.

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

Approve this plan. Then give Cursor only Pass 2: Founder markup and styling. Do not ask it to implement Founder and Recognition simultaneously.
