# Locations + Footer — implementation plan

Planning document only. Do not implement until this plan is approved.

Live check: http://localhost:3000/

## Purpose

Locations and Footer form the practical ending of the homepage:

1. **Locations:** turn interest into a clear visit, call, email or delivery action.
2. **Footer:** close the page quietly with useful navigation and brand continuity.

The intended final sequence is:

**Founder purpose → Recognition records → Visit or order → Quiet site ending**

This is not another storytelling climax. It should feel confident, useful and unmistakably designed for 文記 rather than like a generic pair of location cards.

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

### Secondary location — 尖沙咀店

- Address: `尖沙咀廣東道3-27號海港城港威商場4樓4102號舖11號檔 Food Atlas`
- Opening hours: `每日 11:00–21:00`
- Foodpanda: `https://www.foodpanda.hk/zh/restaurant/anos/man-kee-cart-noodle-harbour-city-anos`
- Telephone, email, map and Keeta are not confirmed; do not invent or display them.

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

Use a **dark-green practical closing chapter followed by a quieter near-black footer**.

- Locations should feel rooted, direct and useful.
- 深水埗 must be visually dominant; 尖沙咀 is a supporting location.
- Use typography, rules, spacing and asymmetric scale rather than two equal rounded cards.
- Reuse the existing lacquer red and muted gold only as small directional accents.
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
5. Quiet handoff into the Footer

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

The Footer is a restrained closing frame, not another content section and not a second call-to-action panel.

It should:

- reinforce the 文記 identity;
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

- Continue from the dark-green Locations background into a darker charcoal or near-black footer.
- Use a compact two-zone structure:
  - brand/wordmark zone;
  - concise navigation and secondary links zone.
- Use the existing primary navigation labels in their established order.
- Add `/press/` as a visually secondary link.
- Use a thin lacquer or muted-gold rule to mark the transition if needed.
- Keep the footer shallow enough that the end of the page feels intentional rather than empty.

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

- Darken the same colour family instead of introducing a new visual theme.
- Use spacing and one rule rather than another oversized heading.
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

- [ ] Confirm 深水埗 address, hours, telephone, email, map URL and Foodpanda URL against the typed content source.
- [ ] Confirm 尖沙咀 address, hours and Foodpanda URL against the typed content source.
- [ ] Confirm 深水埗 remains the primary location and 尖沙咀 remains secondary.
- [ ] Confirm no unverified map, telephone, email or Keeta destination is displayed.
- [ ] Confirm no stale `待定`, `coming soon` or disabled placeholder appears.
- [ ] Confirm any new chapter label or heading is structural copy, not a new factual claim.

### Locations — implementation and approval

- [ ] Add the dark-green practical closing chapter treatment.
- [ ] Build the asymmetric desktop composition with 深水埗 carrying approximately two-thirds of the visual weight.
- [ ] Separate identity/address, hours/contact and actions into a clear reading hierarchy.
- [ ] Make the 深水埗 map link the primary action and Foodpanda the secondary action.
- [ ] Make the confirmed telephone and email directly actionable and visibly labelled.
- [ ] Present 尖沙咀 as a quieter secondary location with only its confirmed information and Foodpanda action.
- [ ] Use rules, alignment and spacing rather than two matching rounded cards.
- [ ] Keep all external links distinguishable and safely configured.
- [ ] Do not embed a map or load third-party location scripts.
- [ ] Keep the first approved pass static and free of new media.
- [ ] Verify the mobile order is heading, 深水埗, then 尖沙咀.
- [ ] Verify complete addresses and email wrap without clipping.
- [ ] Capture and review one 1440×900 Locations screenshot.
- [ ] Capture and review one 390×844 Locations screenshot.
- [ ] Receive Locations visual and content approval before starting Footer.

### Footer — implementation and approval

- [ ] Continue the Locations colour family into a darker, quieter footer.
- [ ] Build the compact brand zone plus navigation/secondary-links zone.
- [ ] Preserve the established primary navigation labels and destinations.
- [ ] Add `/press/` only as a secondary editorial destination.
- [ ] Do not repeat the location address, contact details or red location CTA.
- [ ] Do not add an unapproved slogan, social account, policy page, newsletter or legal name.
- [ ] Avoid a generic large corporate sitemap or duplicated header appearance.
- [ ] Ensure mobile links have comfortable touch spacing and a clear vertical order.
- [ ] Capture and review one 1440×900 Footer screenshot.
- [ ] Capture and review one 390×844 Footer screenshot.
- [ ] Receive Footer visual and content approval.

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
- [ ] Run formatting, lint, tests and the production build only after visual approval.
- [ ] Complete final desktop and mobile visual review before committing.

## Acceptance criteria

### Locations

- 深水埗 is immediately recognizable as the primary location.
- 尖沙咀 remains easy to find without competing equally for attention.
- A visitor can understand where to go, when it is open and which actions are available within a quick scan.
- Missing facts are omitted cleanly rather than replaced with placeholders.
- The section feels specific to 文記 and not like a generic pair of location cards.
- The static composition works without a map embed, new image or motion effect.

### Footer

- Feels like an intentional quiet ending rather than a repeated header.
- Reinforces the brand and offers concise navigation without repeating Locations.
- Contains only real, approved destinations.
- Remains compact and readable on desktop and mobile.

### Combined sequence

- Recognition, Locations and Footer read as evidence → action → closure.
- Location facts and actions remain accurate, accessible and easy to scan.
- No invented copy, placeholder data, generated media or new dependency is introduced.
- Works at desktop and mobile widths without overflow or unnecessary motion.

## Current next step

Approve this plan. Then give Cursor only Pass 2: Locations markup and styling. Do not ask it to implement Locations and Footer simultaneously.
