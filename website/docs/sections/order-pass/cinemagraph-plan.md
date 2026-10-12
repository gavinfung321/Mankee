# `你揀，文記煮` — Kie.ai living-photograph plan

Status: **deferred by the owner on 12 Oct 2026. Do not run the Kie.ai preflight, generate video, spend credits, or integrate motion until the owner explicitly reopens this plan.**

Locked desktop source: `public/media/order-pass/order-pass-desktop-approved-v1.png` (V15, 1672×941).  
Locked mobile fallback: `public/media/order-pass/order-pass-mobile-approved-v1.png` (864×1152).

This replaces the rejected 2.5D/parallax idea. The result is one quiet desktop cinemagraph, not another Hero scrub, narrative video, camera move, or new composition.

## Goal

Make the finished bowl feel freshly served without redrawing the food or competing with the Hero. The approved still remains the source of truth, poster and permanent fallback.

The HTML lockup remains separate from the video:

- 熱騰騰上枱
- 坐低，開餐。

The words are never baked into the generated video.

## Locked invariants

These pixels and shapes must remain visually stationary:

- camera, crop and wood grain;
- bowl silhouette, rim and blue decoration;
- noodles, daikon, squid and exactly two dumplings;
- spoon and chopsticks;
- all four condiment containers;
- contact shadows and overall exposure;
- HTML copy and typography.

Reject any result that changes food anatomy, invents ingredients, bends utensils, shifts the bowl or bottles, pulses the whole exposure, changes focus, or moves the camera.

## Motion scope

First proof: **steam only**.

- Two or three fine translucent wisps rise a short distance from the centre of the broth.
- Steam moves slowly, disperses naturally and disappears before touching the chopsticks or condiment group.
- Steam never obscures the squid, dumplings, noodles or payoff copy.
- Camera and every solid object remain locked.

Do not request broth shimmer in the first generation. It may be considered only after the steam proof passes and must remain inside a tightly drawn broth mask with movement below about 2px at source resolution.

## Kie.ai generation gate

Use an image-to-video model that supports first and last frames. Recommended first attempt: the current high-fidelity Kie model with first-and-last-frame control, quality mode, and no prompt expansion. Use V15 as **both** the first and last frame.

Generation settings:

- one 5-second clip;
- 16:9;
- 24fps delivery target;
- no audio;
- locked camera;
- identical V15 first and last frames;
- one candidate only before review;
- no batch generation and no automatic retries.

Prompt:

> Locked-off close food photograph on a warm wooden table. Preserve the supplied frame exactly. Only two or three very fine translucent wisps of natural heat steam rise slowly from the centre of the hot broth and dissolve before reaching the chopsticks. The camera, crop, bowl, noodles, daikon, squid, two dumplings, orange spoon, chopsticks, four condiment containers, wood grain, shadows, focus and exposure remain completely motionless and unchanged. Seamless restrained five-second cinemagraph. No audio.

Negative prompt:

> camera movement, zoom, pan, parallax, focus change, exposure pulsing, flicker, boiling, bubbling, smoke, fog, heavy steam, moving food, moving noodles, moving dumplings, moving squid, moving spoon, bending spoon, moving chopsticks, extra utensil, shifting bowl, shifting bottles, changing labels, duplicated ingredients, invented garnish, warped ceramic, warped table, altered wood grain, text, logo, watermark

## Required inputs and security

Already available:

- [x] Locked V15 desktop still.
- [x] Approved mobile still.
- [x] FFmpeg is available locally for inspection, masking, looping and compression.
- [x] `.env.local` is ignored by Git.

Still required before generation:

- [ ] The owner places the Kie key locally as `KIE_API_KEY` in `website/.env.local` or in the local process environment.
- [ ] Cursor confirms it will not print, paste, log or commit the key.
- [ ] V15 is uploaded through the supported Kie file/input mechanism and its temporary URL is used for both first and last frame.
- [ ] The chosen Kie model, estimated credit cost and exact settings are reported before submission.
- [ ] The owner approves that single paid generation.

Never paste the API key into a chat prompt, source file, plan, screenshot, command output or Git commit.

## Production method

The generated full-frame clip is only a motion source, not automatically the final website asset.

1. Generate one candidate using identical first and last frames.
2. Review the whole clip at 100% and compare several frames against V15.
3. If all solid objects are stable, isolate only the steam area with a feathered mask.
4. Composite that masked motion over untouched V15 pixels.
5. Make the five-second seam invisible.
6. Export a review master outside `public/`.

If the full frame deforms but the steam is usable, retain only the steam through the mask. If usable steam cannot be isolated after one correction pass, stop and keep the still. Do not enter another regeneration cycle.

## Review gates

### C0 — preflight

- [ ] Key is local, ignored and never exposed.
- [ ] Model, price estimate, duration, resolution and first/last-frame settings are stated.
- [ ] V15 is used at both ends without crop or generative extension.
- [ ] One-generation limit is acknowledged.

### C1 — raw motion proof

- [ ] Exactly one five-second candidate is generated.
- [ ] Only restrained steam is visible.
- [ ] Camera and crop are locked.
- [ ] Food, utensils, containers, wood and exposure do not drift.
- [ ] First and last frames return cleanly to V15.

### C2 — masked review master

- [ ] Untouched V15 supplies every pixel outside the steam mask.
- [ ] Steam looks like heat steam, not smoke, fog or a particle effect.
- [ ] Steam does not cross the chopsticks, condiments, food or HTML-copy area.
- [ ] The seam is invisible for three consecutive loops.
- [ ] The loop remains quieter than the Hero.

### C3 — web delivery

- [ ] WebM/VP9 is 1.5MB or less.
- [ ] MP4/H.264 is 2.5MB or less.
- [ ] Neither file contains audio.
- [ ] V15 remains the poster and immediate fallback.
- [ ] Poster and video have identical framing and colour.

### C4 — integration

- [ ] Desktop only at 1024px and above.
- [ ] `autoplay`, `muted`, `loop`, `playsInline`, `preload="metadata"`.
- [ ] Video mounts only when reduced motion and data saver are both off.
- [ ] Playback pauses offscreen and while the tab is hidden.
- [ ] Mobile and reduced-motion users receive the approved still.
- [ ] The HTML payoff text remains readable and stationary.
- [ ] No layout shift, overflow or crop regression at 1024 and 1440px.

## Stop conditions

Cancel the cinemagraph and keep V15 if any of these remain after one correction pass:

- bowl, food, spoon, chopsticks, condiments or table deform;
- camera, focus, crop or overall exposure moves;
- steam resembles smoke, fog or a digital particle effect;
- seam remains visible;
- compression damages the food;
- motion competes with the Hero or typography;
- delivery files materially exceed the size budget.

## Next action

None while deferred. Keep the approved static desktop and mobile photographs. Revisit this plan only after the other homepage chapters and the final continuity audit show that the section still needs motion.
