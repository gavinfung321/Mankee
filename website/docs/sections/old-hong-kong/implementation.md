# `舊式香港` — editorial documentary implementation plan

Status: **planning approved for implementation review; production code is unchanged by this document.**

Issue: https://github.com/gavinfung321/Mankee/issues/23  
Related: #20, #21  
Visual direction: `docs/inspiration-analysis.md`

## Purpose

This chapter explains the queue and ordering culture before visitors reach `文記落單體驗`. It must shift the homepage from the cinematic Hero into a recognisably real Hong Kong street and shop.

The section is not a gallery and not a second scroll spectacle. Its job is to establish:

1. people really queue outside 文記;
2. the ordering experience is direct and sequential;
3. the story moves naturally from waiting outside to choosing 湯、麵、餸 inside.

## Approved direction

Use an **asymmetric documentary editorial spread** with one dominant photograph and one supporting time-of-day record.

- The **dusk photograph is primary** because the receding queue and wider shop frontage tell the story most clearly.
- The **day photograph is supporting evidence** showing that the queue continues in another part of the day.
- Keep both original photographs. Do not generate, replace or cosmetically reconstruct the crowd.
- Remove the current equal-card treatment, cream frames and deep card shadows.
- Use one photographic focal point per viewport.
- Motion is a short reveal only. There is no pin, scrub, parallax or stacked-card sequence.

## Current implementation assessment

Strengths:

- authentic store and queue photography;
- clear existing copy;
- strong dark-ground transition after the Hero;
- accurate alt text and explicit image dimensions;
- reduced-motion handling already exists.

Problems to correct:

- the two photographs receive nearly equal weight;
- cream frames and shadows resemble a generic scrapbook;
- `日間` and `傍晚` float over the images without explaining their documentary role;
- the layout does not visually lead into the ordering chapter;
- the current stagger is decorative rather than narrative.

## Content hierarchy

### Kicker

`舊式香港`

Small lacquer rule plus muted noodle-gold label. It identifies the chapter but does not compete with the headline.

### Headline

Recommended lockup:

> 排隊輪候，逐樣落單。  
> 就是車仔麵的舊式點法。

This is the existing meaning with a deliberate line break. Do not add nostalgic marketing language.

### Supporting line

> 舊時是一架木頭車，麵、湯、餸都由客人自己揀。

Keep it concise and factual.

### Documentary captions

Primary dusk photograph:

> 傍晚｜隊伍沿街排開

Supporting day photograph:

> 日間｜店外逐位輪候

Captions are HTML below or beside the photograph, not text baked into the image. If the owner prefers to retain only `日間` and `傍晚`, keep the same caption structure and shorten the words without changing the layout.

### Handoff to ordering

Recommended small handoff line at the bottom of the copy column:

> 排到埋去，就由湯開始。

This points toward `文記落單體驗` without adding a duplicate heading or CTA. It is not a link unless a later navigation decision requires one.

## Desktop composition

Target review width: 1440px.

Use the existing content width and a twelve-column editorial grid:

- columns 1–4: kicker, headline, supporting line and handoff;
- columns 5–12: dominant dusk photograph;
- supporting day photograph sits beneath the copy column at roughly 70–78% of that column's width;
- keep at least 32px between copy and photography;
- the dominant dusk photograph should occupy roughly 58–64% of the available section width;
- the supporting day photograph must not overlap or compete with the headline;
- no rounded corners, floating cards or thick cream frames;
- use one restrained 1px warm-grey/ivory image rule if separation from the dark ground is needed.

The dusk crop should retain:

- the 文記 storefront and illuminated signage;
- the people nearest the entrance;
- enough of the receding queue to show depth;
- no unnecessary emphasis on the vehicle at the right edge.

The day crop should retain:

- the large red 文記 sign;
- the foreground customers;
- the visible shop entrance;
- enough pavement to read as a real queue rather than a storefront crop.

## Mobile composition

Target review widths: 390px and 430px.

Order:

1. kicker;
2. headline;
3. supporting line;
4. dominant dusk photograph and caption;
5. smaller day photograph and caption;
6. handoff line;
7. next section.

Rules:

- the dusk photograph uses the full content width;
- the day photograph uses approximately 78–86% of the content width and aligns to the right to preserve asymmetry;
- do not overlap the images on mobile;
- do not use horizontal scrolling;
- preserve a clear dominant/supporting size difference;
- captions remain outside the images;
- do not make the chapter longer than necessary by adding extra historical copy.

## Colour and typography

This remains the page's primary dark documentary chapter.

- Ground: deep ink-brown, not pure black.
- Headline and body: warm ivory.
- Kicker and time labels: muted noodle gold.
- Lacquer red: one short rule or handoff accent only.
- Jade is reserved for the ordering chapter that follows.

Typography:

- headline uses the established Kai/display face at an editorial scale;
- body and captions use the established readable body face;
- headline, deck and captions must have visibly different sizes and weights;
- do not imitate the inspiration site's exact serif or italic styling.

## Section transition

### Hero → `舊式香港`

- Use a decisive dark handoff from the Hero rather than a blurred gradient.
- Provide enough top space for the documentary chapter to feel like a new act.
- The first readable element is the kicker/headline, not the photographs animating early behind it.

### `舊式香港` → `文記落單體驗`

- End with the handoff line `排到埋去，就由湯開始。`.
- Use a clean hard change from ink-brown to the current approved ordering-section ground. Do not recolour the next section as part of this pass.
- A short lacquer rule may bridge the chapters; do not use a broad fading colour wash.
- Do not repeat the title `文記落單體驗` inside this chapter.

## Motion

Motion is optional supporting polish, not the layout foundation.

Desktop and mobile, when reduced motion is not requested:

- headline reveals first with a small opacity/vertical movement;
- dusk photograph follows with one restrained masked or opacity reveal;
- day photograph follows slightly later;
- each motion settles once and does not replay during minor scrolling;
- total perceived sequence should finish within about 650ms after entry.

Not permitted:

- pinned scrolling;
- scroll scrub or timeline progress;
- parallax;
- continuous zoom;
- floating photographs;
- spring/bounce physics;
- another video;
- movement inside the photographs.

Reduced motion shows the final composition immediately.

## Accessibility and semantics

- Retain a semantic `<section>` with one `<h2>`.
- Keep both photographs as `<figure>` elements with HTML captions.
- Retain accurate, non-duplicative alt text.
- Do not put essential information only inside photographs.
- Verify text and gold-label contrast against the dark ground.
- Reading order in the DOM must match the mobile order.
- Decorative rules and reveal masks are hidden from assistive technology.

## Performance

- Reuse `/media/store/queue-day.webp` and `/media/store/queue-dusk.webp`.
- Preserve explicit width and height attributes.
- Add responsive `sizes` only if the implementation changes rendered widths materially.
- Do not create generated replacements, video or additional high-resolution assets.
- Avoid loading both images at Hero priority; they are below the fold.
- Motion must use opacity/transform or a simple reveal mask without a heavy runtime library.

## Implementation scope

Expected production files when implementation is authorised:

- `src/components/home/SensoryTrio.tsx` — semantic hierarchy, image roles and captions;
- `src/styles/home.css` — editorial grid, responsive hierarchy, transition and restrained reveal;
- relevant tests only where current structural or responsive expectations change.

Do not edit:

- Hero media or scrub timing;
- `文記落單體驗` layout or copy;
- `文記十大` interaction;
- order-pass photography;
- Founder, Recognition, Locations or Footer in this pass.

Renaming `SensoryTrio.tsx` is optional and should occur only if it reduces confusion without creating a broad import churn. A visual refinement does not require a refactor.

## Checklist

### Planning and approval

- [x] Existing #21 implementation and current source reviewed.
- [x] Inspiration principles reviewed.
- [x] Original day and dusk photographs inspected.
- [x] Dusk selected as the dominant photograph.
- [x] Day selected as the supporting photograph.
- [x] Owner approves the recommended headline line break.
- [x] Owner approves the expanded documentary captions or chooses time-only labels.
- [x] Owner approves the handoff line `排到埋去，就由湯開始。`.

### Desktop implementation

- [x] The dusk photograph stays dominant, and the day photograph is about 57% of its width.
- [x] Copy occupies a clear editorial column.
- [x] Day photograph is visibly supporting and does not overlap the headline.
- [x] Equal-card layout, cream frames and deep card shadows are removed.
- [x] Captions sit outside the photographs.
- [x] Dusk crop minimises the vehicle edge while preserving the queue.
- [x] Day crop preserves the sign, people and entrance.

### Mobile implementation

- [x] DOM and reading order follow the approved mobile sequence.
- [x] Dusk image is full content width.
- [x] Day image is smaller and right-aligned.
- [x] No image overlap or horizontal scrolling.
- [x] Captions remain readable and outside the photographs.
- [x] Section length remains proportionate to its narrative role.

### Visual system

- [x] Deep ink-brown is the only large background colour in this chapter.
- [x] Ivory, gold and lacquer accents follow their approved semantic roles.
- [x] Jade is held for the following ordering chapter.
- [x] Headline, supporting line, captions and handoff have distinct hierarchy.
- [x] The composition feels documentary, not nostalgic-theme or scrapbook styled.

### Motion

- [ ] Static composition is approved before motion is added.
- [ ] Reveal sequence completes in approximately 650ms or less.
- [ ] Motion runs once per meaningful entry and does not scrub.
- [ ] Reduced motion is immediate and complete.
- [ ] No pin, parallax, zoom, bounce or internal photo movement exists.

### Accessibility and performance

- [x] One correct `<h2>` and semantic figures are present.
- [x] Alt text and captions are accurate and non-duplicative.
- [x] Contrast passes for headline, body, captions and accents.
- [x] Explicit image dimensions prevent layout shift.
- [x] Images remain below-fold priority and use appropriate responsive sizing.
- [x] No new runtime motion dependency is introduced.

### Visual QA

- [x] Review at 1440×900.
- [x] Review at 1024×768.
- [ ] Review at 430px wide.
- [x] Review at 390×844.
- [ ] Review keyboard and reduced-motion modes.
- [x] Confirm the Hero handoff and ordering-section handoff both feel intentional.
- [x] Confirm the dusk photograph is the first photographic focal point.
- [x] Confirm the section does not imitate the inspiration site's branding.

## Non-goals

- Rebuilding the Hero.
- Adding historical archive imagery that has not been supplied.
- Generating crowds, storefronts or queue photographs.
- Turning the chapter into a carousel or gallery.
- Building a second ScrollCraft act.
- Adding a CTA or duplicating the next section's title.
- Rewriting the restaurant's history beyond the approved facts.

## Done when

At desktop width, visitors first read one clear statement and one dominant real queue photograph; the supporting day image adds evidence without competing. On mobile, the same hierarchy survives in a concise vertical sequence. The chapter feels like an editorial documentary spread from the same Mankee visual world, and its final line naturally hands the story to 湯 → 麵 → 餸.

## Current next step

The static composition is verified at 1440, 1024, and 390. Motion stays off until that still is accepted.
