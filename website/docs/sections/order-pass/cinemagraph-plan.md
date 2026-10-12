# `你揀，文記煮` — desktop cinemagraph plan

Status: **approved direction; asset not yet created or integrated.**

Current approved still: `public/media/order-pass/order-pass-desktop-approved-v1.png` (V15). V15 is the only source permitted for motion; never use V5, V9 or the rejected intermediate candidates.

This plan adds one restrained ambient loop to the approved V15 still. It is not a second Hero, a scroll scrub, or a new composition. The HTML order slip and its existing flight remain separate from the photographic motion.

## Purpose

Make the completed bowl feel freshly served while keeping this section quieter than the Hero. The motion should be noticed only after the viewer has already read the slip and bowl.

The section must still work as a complete static composition when motion is unavailable.

## Locked visual invariants

The following must remain pixel-stable:

- camera, crop and left wood reserve;
- bowl silhouette, rim and blue decoration;
- noodles, daikon, squid and exactly two dumplings;
- spoon and chopsticks;
- all four condiment containers;
- wood grain, contact shadows and lighting direction;
- HTML order slip, copy, typography and landing position.

Reject any result that changes food anatomy, invents ingredients, moves utensils, bends the bowl, shifts bottles, pulses the whole exposure, or introduces camera movement.

## Motion design

Loop duration: **5 seconds**, seamless, with no visible first or last frame.

Only two motion zones are permitted:

1. **Steam:** two or three fine, translucent wisps rise a short distance from the bowl. They drift slowly, dissolve before reaching the chopsticks or condiment group, and never cover the toppings or slip.
2. **Broth highlights:** an extremely small, irregular shimmer remains inside the visible broth. Displacement must stay below roughly 2px at source resolution. Noodles and toppings do not move.

No zoom, pan, parallax, rack focus, camera shake, animated garnish, moving shadows, pouring sauce, moving chopsticks, or floating food.

## Production method

Use the final approved still as the immutable base frame. Create motion as a masked overlay, then composite it back over the unchanged still. Do not rely on a free-running image-to-video result as the final asset because it may redraw the bowl and ingredients.

An image-to-video service may be used only to create candidate steam or broth movement. The final loop must restore untouched V15 pixels outside the two approved masks.

Produce one review master before any website integration:

- same 16:9 framing as V15;
- no crop or generative extension;
- 5-second seamless loop;
- 24fps;
- no audio;
- exact first-frame match to V15.

## Web deliverables

- WebM/VP9 primary loop, target **1.5MB or less**.
- MP4/H.264 fallback, target **2.5MB or less**.
- V15 still remains the poster and permanent fallback.
- Keep the source master outside `public/`; place only compressed delivery files in `public/media/order-pass/`.

Do not upscale V15 merely to claim 1080p. The current source is sufficient for its approved maximum display width; preserve detail instead of fabricating it.

## Playback policy

Motion is desktop-only:

- mount and play only at `min-width: 1024px`;
- `autoplay`, `muted`, `loop`, and `playsInline`;
- use `preload="metadata"` rather than eager loading;
- do not mount the video when `prefers-reduced-motion: reduce` is active;
- do not mount it when the browser reports data-saving mode;
- pause when the section is offscreen or the tab is hidden;
- use a separately approved mobile still at 360, 390 and 768px; until then, V15 is the temporary static fallback.

The video must not become the page's LCP asset and must not block the still image from rendering.

## Interaction relationship

The existing order-slip flight remains the only foreground interaction. The cinemagraph is ambient background motion and is not tied to scroll position.

- Do not restart the loop when the slip lands.
- Do not animate the HTML slip as part of the video.
- Do not add a second scrub timeline.
- Do not change the current topping-to-slip data flow.

## Approval gates

### C1 — motion proof

- [ ] One 5-second review loop uses V15 without changing composition.
- [ ] Only steam and contained broth highlights move.
- [ ] The seam is invisible during three consecutive loops.
- [ ] No ingredient, utensil, bowl, bottle or wood deformation is visible.
- [ ] The loop remains quieter than the Hero scrub.

### C2 — compressed assets

- [ ] WebM is 1.5MB or less and MP4 is 2.5MB or less.
- [ ] Both formats preserve the approved colour and contrast.
- [ ] The poster-to-video transition does not jump or change crop.
- [ ] No audio track is present.

### C3 — website integration

- [ ] V15 loads first and remains the desktop fallback.
- [ ] Motion mounts only at 1024px and above.
- [ ] Reduced-motion and data-saving users receive only V5.
- [ ] The video pauses offscreen and in a hidden tab.
- [ ] The existing slip flight and selected topping names remain correct.
- [ ] No layout shift, horizontal overflow or crop regression at 1024 and 1440px.
- [ ] Static presentation remains unchanged at 360, 390 and 768px.
- [ ] Automated tests and production build pass.

## Stop conditions

Keep the still image and cancel the cinemagraph if any of these remain after one correction pass:

- visible morphing or AI redrawing;
- steam looks like smoke, fog or a particle effect;
- the loop seam is noticeable;
- compression damages the food;
- playback competes with the order-slip flight;
- either delivery file exceeds its budget materially.

The still V15 photograph is the approved production fallback. Motion is optional enhancement, not a completion requirement.

