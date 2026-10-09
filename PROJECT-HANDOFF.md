# Mankee Hero Video Project Handoff

Updated 9 October 2026. This file is the authoritative continuation brief for a fresh Codex chat working in `C:\Users\gavin\OneDrive\Desktop\Mankee`.

## Immediate status

The website prototype is functional and currently uses a temporary natural-looking hero video. The final hero sequence must not be generated yet. The present blocker is a synthetic embossed or tessellated texture baked across the previous AI foundation image, including the stainless-steel counter, trays, broth and food. It appears as repeated squares, triangles, polygons, grids, scale-like marks and occasional letter-like stamps.

The latest work created no-credit cleanup proofs for the affected material classes. These proofs have not been merged into the master foundation and have not yet been approved by the user.

Start by showing or reviewing this board with the user:

`C:\Users\gavin\OneDrive\Desktop\Mankee\scrollcraft\builds\mankee-hero-r1\lab\clean-foundation-proofs-v1\clean-foundation-no-credit-proof-board-v1.jpg`

Do not generate video or spend Kie.ai credits until the user approves a completely clean master foundation and the full F0–F7 still-board package.

## User priorities

1. Avoid wasting paid video credits. Plan, preflight and review still frames first.
2. Preserve a single bowl, fixed camera, fixed kitchen layout and one consistent cook across the kitchen sequence.
3. Food must look photographic and natural, without a waxy, plastic, pasted-on or AI-generated surface.
4. Never use the global embossed pattern again. Treat it as a hard rejection condition on every material.
5. Make narrow, controlled edits. Do not replace a whole scene when only one surface needs correction.
6. Always let the user review no-credit boards before paid generation.

## Canonical hero story

The hero is a series of controlled clips joined through matching foundation frames, not one enormous generated shot.

- F0: Thick yellow 油麵 and dark brown broth; cook holds one 瑞士雞中翼 above the bowl.
- F1: Chicken wing released on the right side.
- F2: One modest 上湯花膠 piece released at the left/front without covering the wing.
- F3: One compact 南乳豬手 piece added while all three toppings remain readable.
- F4: A small amount of dark house sauce is added at the edge.
- F5: A restrained spring-onion garnish is added; the cook withdraws.
- F6: Hard service snap cut to the finished bowl already at the customer’s wooden counter seat. Do not show waiter, tray, carry action or hands moving the bowl.
- F7: Slim, anatomically realistic feminine-presenting hands; left hand supports the bowl from the left while the right hand lifts a narrow bundle of the same thick yellow 油麵. Use only subtle steam and no visible bite.

The bowl should remain a right-side visual anchor so the left 35–40 percent stays available for hero copy. Camera movement, digital zooming and corrective reframing are forbidden.

## Food specifications

- Chicken wing: familiar plump mid-wing shape, rounded and fat through the middle, bone structure visible at both ends. It must not resemble a drumstick.
- Pork knuckle: compact 南乳豬手 with naturally irregular reddish-orange braised skin, folds, pores, creases, fat and exposed interior structure.
- Fish maw: one modest folded piece with natural fibrous, porous and softly translucent structure. Keep the brighter website-friendly colour, but not fluorescent or waxy.
- Noodles: thick, distinctly yellow 油麵. Do not substitute thin pale noodles.
- Broth: warm, dark brown, glossy and translucent enough to reveal some noodle contours. Never black or pale.
- Food highlights: restrained wet highlights with irregular variation. Avoid lacquer-like or uniformly glossy surfaces.

## Global texture prohibition

Reject any frame containing repeated squares, triangles, polygons, grids, scales, stamped symbols, letter-like marks, embossed loops, etched networks or a shared microtexture across unrelated materials. Inspect the entire frame at 100 percent before approving or protecting any pixel region.

Each material needs its own physically plausible texture:

- Stainless steel: directional brushed grain, normal scratches, smudges and soft reflections.
- Broth: continuous liquid with irregular oil droplets and reflections, never honeycomb cells.
- Ceramic: smooth glaze with ordinary wear, no etched network.
- Food: ingredient-specific pores, folds and fibres with no repeated stamps.
- Background trays: natural shallow-focus detail without synthetic tessellation.

## Surface-editing method that worked

The successful method is a protected surface re-render, not a pasted cutout:

1. Work from a tight crop around one existing object.
2. Use the donor only as a material and texture reference.
3. Preserve the target object’s original silhouette, scale, placement, perspective, occlusion, contact edge, lighting and shadow.
4. Re-render only the object’s interior surface.
5. Merge through a conservative interior mask that stays inside the original silhouette.
6. Numerically verify that changed pixels outside the mask equal zero.
7. Inspect the whole source frame for pre-existing global artifacts before treating surrounding pixels as protected.

Reusable skill:

`C:\Users\gavin\.codex\skills\surface-texture-transfer\SKILL.md`

Merge helper:

`C:\Users\gavin\.codex\skills\surface-texture-transfer\scripts\merge_surface_rerender.py`

The skill has been updated to prohibit the global embossed pattern permanently.

## Latest no-credit clean-foundation work

Working folder:

`C:\Users\gavin\OneDrive\Desktop\Mankee\scrollcraft\builds\mankee-hero-r1\lab\clean-foundation-proofs-v1`

Important outputs:

- Review board: `clean-foundation-no-credit-proof-board-v1.jpg`
- Steel proof: `01-steel-counter-clean-proof.png`
- Broth proof: `07-broth-clean-deterministic-v4.png`
- Broth protection mask: `07-broth-liquid-mask-v4.png`
- Background tray proof: `04-background-trays-clean-deterministic-v1.png`
- Fish-maw tray proof: `05-fish-maw-tray-clean-proof.png`
- Board builder: `build_review_board.py`
- Broth cleanup script: `build_broth_cleanup_proof.py`
- Background cleanup script: `build_background_cleanup_proof.py`

These are method proofs, not a final approved composite. The broth proof deliberately modifies visible liquid while protecting noodles and toppings. The background proof suppresses micro-patterns while retaining the tray layout and depth of field.

One pork-tray image-generation attempt was rejected because it recreated letter-like stamped marks despite explicit prompting. Do not use that result. Pork tray pieces should be cleaned individually and merged conservatively, or rebuilt from a genuinely clean photographic anchor.

## Earlier useful assets

Master plan:

`C:\Users\gavin\OneDrive\Desktop\Mankee\scrollcraft\builds\mankee-hero-r1\HERO-VIDEO-MASTER-PLAN.md`

Motion quality specification:

`C:\Users\gavin\OneDrive\Desktop\Mankee\scrollcraft\builds\mankee-hero-r1\lab\quality-gates-v1\MOTION-TIMING-SPEC.md`

Chicken-wing surface proof folder:

`C:\Users\gavin\OneDrive\Desktop\Mankee\scrollcraft\builds\mankee-hero-r1\lab\chicken-wing-texture-transfer-v1`

Pork surface proof folder:

`C:\Users\gavin\OneDrive\Desktop\Mankee\scrollcraft\builds\mankee-hero-r1\lab\pork-knuckle-surface-rerender-v1`

F5-to-F6 service snap-cut preflight:

`C:\Users\gavin\OneDrive\Desktop\Mankee\scrollcraft\builds\mankee-hero-r1\lab\f5-f6-service-snap-preflight-v1`

Earlier motion clips remain reference material only. They are not authoritative foundations because their imagery can contain the global texture defect, tray mismatches, speed problems or continuity breaks.

## Website prototype state

Prototype page:

`C:\Users\gavin\OneDrive\Desktop\Mankee\wireframes\concept-b.html`

Scroll logic:

`C:\Users\gavin\OneDrive\Desktop\Mankee\wireframes\concept-b.js`

Current local URL used for review:

`http://localhost:4500/wireframes/concept-b.html?hero=focus&v=7`

The temporary hero asset is intentionally retained for scroll testing:

- `assets/generated/mankee-hero/hero-motion-temp-natural-no-zoom-scrub.mp4`
- `assets/generated/mankee-hero/hero-motion-temp-natural-poster.webp`

Current hero behavior already established:

- Full-screen video presentation without grey side blocks.
- Hero navigation shows only the logo and red Mankee name; the remaining navigation and background stay transparent until the next section.
- Topping labels can appear after each topping release.
- “一碗文記” sits at the lower left.
- Scroll pacing was slowed from the first implementation.
- No close zoom before the pork-knuckle pickup.

Do not replace the temporary hero until the complete final clip package has passed the foundation and motion quality gates.

## Motion quality gates

For every generated kitchen action:

- One cook and one continuous body silhouette.
- One consistent blue glove, sleeve and pair of tongs.
- Show the full pickup, carry, release and withdrawal action.
- No cut or identity change during an action.
- No pause at the top of a reach, after gripping food or after releasing food.
- No sudden acceleration, sprint, robotic stop or tempo mismatch.
- The next action begins from the previous action’s real end pose.
- No camera zoom, pan, reframing or invented cut.
- Review frame by frame before accepting.

The earlier fish-maw sequence established that visual continuity alone is insufficient: the cook’s body, hand velocity and action phase must remain continuous through the join.

## Credit and security rules

- No Kie.ai video generation until the user explicitly approves the still board and says to generate.
- No automatic retries.
- Diagnose each failure and update the board or prompt before any paid retry.
- Never expose, repeat or save API keys in files, prompts, logs or replies. The user shared keys in the old chat; this handoff intentionally contains none.
- Built-in image generation and local compositing may be used for no-credit still proofs, but tell the user when doing so.

## Required next step

1. Let the user review `clean-foundation-no-credit-proof-board-v1.jpg`.
2. Record which cleanup directions are approved or rejected.
3. Do not merge the board’s proofs automatically.
4. If approved, produce one clean full-resolution master foundation by applying material-specific edits in isolated masks.
5. Inspect the complete master at 100 percent for global embossed artifacts.
6. Only after the master passes, derive and review the complete F0–F7 foundation board.
7. Generate paid motion one clip at a time, beginning with A1 only after explicit approval.

## Suggested first message for the new chat

> Read `C:\Users\gavin\OneDrive\Desktop\Mankee\PROJECT-HANDOFF.md` completely and continue the Mankee hero project from its Required next step. Preserve all credit-safety, texture, continuity and security rules. Do not generate paid video or merge any proof until I explicitly approve it.
