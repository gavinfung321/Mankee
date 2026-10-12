# 文記網站 — overall visual analysis and decision checklist

Planning and review document only. Do not change production code from this document until the relevant decisions are approved.

Review basis:

- Current production page at `http://localhost:3000/`
- Current homepage components and styling
- Existing Hero, Order Pass, Founder + Recognition, and Locations + Footer plans
- Visual review date: 2026-10-11

## Executive verdict

The website has a strong idea and several genuinely distinctive ingredients, but it does not yet feel like one finished visual world.

The strongest moments are:

1. the Hero scrub;
2. the documentary queue photographs;
3. the physical order-slip idea;
4. the founder photograph and quotation.

These work because they are specific to 文記 and to the Hong Kong cart-noodle experience. They show real food, a real place, a real ordering ritual, and a real person.

The weakest moments are:

1. the three generic rounded ordering cards;
2. the abstract queue of stick figures;
3. the large boxed Top Ten selector;
4. the current low-poly bowl and condiment scene;
5. the plain Recognition, Locations and Footer blocks.

These feel like interface components or prototypes rather than parts of the restaurant. The page therefore changes visual language several times:

**cinematic food film → documentary photographs → generic cards → menu buttons → low-poly 3D → plain editorial content → raw contact list**

That inconsistency is the main reason the page feels boring outside the Hero and order-slip animation. The solution is not to give every section more animation. The solution is to make every section feel physically and culturally connected to the same restaurant.

### Overall production assessment

| Area | Current assessment | Main reason |
| --- | --- | --- |
| Brand authenticity | Promising | Real shop, food, founder and ordering references are present. |
| Visual coherence | Weak | Photography, cards, abstract illustrations and low-poly 3D do not share one material language. |
| Narrative flow | Good structure, uneven execution | The sequence makes sense, but several sections do not visually advance the story. |
| Distinctiveness | Concentrated in two moments | Hero and order slip carry most of the personality. |
| Food appeal | Inconsistent | Hero is strong; other food crops and the current 3D bowl are much weaker. |
| Motion design | Strong ideas, poor distribution | Two memorable interactions are surrounded by generic reveals and static blocks. |
| Mobile rhythm | Too repetitive | Large stacked cards and lists create a long, uniform vertical page. |
| Practical conversion | Present but under-designed | Locations and order actions exist but are not yet presented as a deliberate final chapter. |

The site is not fundamentally wrong. Its content architecture is stronger than its current visual execution. The correct next step is to lock one visual system and redesign the weak sections inside it.

## Does this visual direction fit the restaurant?

### What the restaurant should feel like online

The supplied material suggests a restaurant identity that is:

- unmistakably Hong Kong;
- practical and direct rather than luxurious;
- busy, tactile and made by hand;
- built around personal choice and a familiar ordering ritual;
- rich in flavour, but not styled like fine dining;
- established and credible without becoming corporate;
- warm and human, with ordinary signs of use and age.

The best website translation is therefore **documentary restaurant photography plus restrained Hong Kong editorial design**.

It should not feel like:

- a luxury tasting-menu restaurant;
- a polished international chain;
- a technology product landing page;
- a nostalgic theme park;
- a 3D game or miniature diorama;
- an image-generator showcase.

### Visual ingredients that fit

- Real queue and shop photographs
- Stainless-steel trays and counters
- The white bowl with blue details
- Paper order slips and red stamps
- Lacquer red used for completion and action
- Jade/dark green used as a heritage counter colour
- Warm ivory paper tones
- Dark brown wood and charcoal kitchen shadows
- Traditional display type paired with a clean modern body face
- Documentary imperfections: scratches, worn edges, uneven food shapes and real lighting

### Visual ingredients that do not fit

- Uniform 16px rounded cards throughout the page
- Floating objects without believable contact shadows
- Low-poly or toy-like food
- Excessive glossy 3D materials
- Repeated generic image panels with captions
- Identical grid cards for unlike kinds of information
- Artificial paper grain or fake “old Hong Kong” decoration everywhere
- Decorative animation that is not connected to ordering or serving food

## Recommended master direction

Use the following statement to judge every section:

> **A cinematic but honest visit to a working Hong Kong cart-noodle shop, told through real food, physical ordering objects and disciplined editorial composition.**

The Hero may be cinematic. The middle of the page should become tactile and process-led. The final chapters should become human, factual and practical. Not every section should be cinematic, but every section must feel as if it belongs to the same shop.

## Global visual-system analysis

### 1. Colour

The current palette is appropriate:

- warm paper/ivory;
- ink/charcoal;
- lacquer red;
- jade green;
- noodle gold.

The problem is not the individual colours. It is that section backgrounds currently change without a sufficiently clear chapter rhythm.

Recommended use:

- **Ivory:** editorial information, paper, Founder copy and Recognition evidence.
- **Charcoal/dark brown:** food photography, documentary moments and menu-board sections.
- **Jade:** ordering process and practical Locations chapter.
- **Lacquer red:** active choice, completed stamp, important action and small rules only.
- **Gold:** labels, numbering and restrained highlights; never a large decorative surface.

Do not let red and gold become general decoration. Their meaning becomes stronger when red indicates an active selection or completed action and gold indicates hierarchy or numbering.

### 2. Typography

The traditional display face is one of the site's most useful brand signals. It works especially well in the Hero, the order-slip statement and the founder quotation.

Current risk:

- Using the same display treatment for headings, links, addresses and controls reduces hierarchy.
- Several sections rely on type alone without enough composition.
- Large mobile type plus long addresses creates visually heavy pages.

Recommended roles:

- **Display/Kai or serif:** major Chinese statements, dish names, founder quotation and chapter titles.
- **Sans serif:** explanations, practical details, hours, navigation and disclaimers.
- **Small uppercase or spaced label:** section kicker, record type and step number.
- **Tabular or aligned numerals:** Top Ten numbers, years, hours and ordered steps.

Keep headline line lengths short. Do not apply the traditional face to every interactive control. Controls need clarity before atmosphere.

### 3. Shape language

The current page uses many large rounded rectangles. This is a major source of the generic template feeling.

Recommended rules:

- Use squared or lightly softened edges for menu, tray and paper-inspired structures.
- Reserve noticeable rounding for the ceramic bowl, photographs where the crop genuinely benefits, and touch controls.
- Use lines, rails, paper edges and alignment instead of cards whenever possible.
- Use shadows only when an item represents a physical object sitting on a surface.
- Do not give ordinary text groups floating-card shadows.

### 4. Photography

Photography should be the main realism system. It is currently inconsistent in crop, colour, scale and purpose.

Recommended image standard:

- One clear subject per image.
- Preserve enough environment to prove that the scene is real.
- Warm directional light with dark but readable shadows.
- Consistent white balance across the food set.
- Natural moisture and texture without extreme sharpening or lacquer gloss.
- Avoid crops so close that ingredients become unrecognisable surfaces.
- Avoid mixing documentary shop images with highly artificial commercial food images without a controlled transition.
- Keep visible imperfections that support authenticity.

All generated or heavily edited food images require full-resolution inspection for repeated microtexture, honeycomb, embossed marks, duplicated ingredients, malformed utensils, false labels and inconsistent light.

### 5. Motion

The site should have three main motion events, not constant animation:

1. **Hero scrub:** ingredients entering the bowl.
2. **Ordering process:** the order slip progresses through 湯 → 麵 → 餸.
3. **Completed order:** the slip arrives beside the finished bowl.

Everything else should use either no motion or one short reveal under approximately 20px of travel.

Recommended motion budget:

- No additional long pinned section.
- No second scrub video.
- No carousels or automatic horizontal movement.
- No continuously rotating bowl, bottle or food object.
- No parallax unless it has a clear physical relationship to the order slip or counter.
- Reduced motion must preserve the complete story without blank or intermediate states.

### 6. Section cadence

The page currently repeats a common pattern: heading, supporting copy, rectangular visual, then another section. A stronger sequence varies composition while keeping the same brand language.

Recommended cadence:

1. Full-bleed cinematic Hero
2. Documentary shop diptych
3. Continuous service-counter ordering rail
4. Compact menu ledger with one food preview
5. Photographic completed-order still life
6. Documentary founder portrait chapter
7. Editorial recognition ledger
8. Practical Locations chapter
9. Quiet Footer

This creates visual variety without introducing unrelated styles.

## Section-by-section analysis

## A. Header and navigation

### Current strengths

- The red brand mark is recognisable over the Hero.
- The header changes from transparent Hero treatment to a solid state.
- Mobile navigation is compact.
- The site does not overload the primary navigation.

### Current problems

- The solid mobile header reads as a large pale strip sitting on top of every section.
- Its visual weight competes with narrow-screen content and repeatedly interrupts photographs.
- The header and Footer currently feel like generic shell components rather than parts of the same restaurant identity.
- The active page and current section are not strongly communicated.

### Recommended direction

- Preserve the transparent Hero state.
- Make the solid state slightly quieter and more compact without reducing touch accessibility.
- Use warm paper rather than a clean generic white.
- Keep one restrained bottom rule; avoid heavy shadow.
- Let the brand remain the strongest header item.
- Use the red CTA only for the primary visit/order action.
- Do not add more navigation items merely to fill space.

### Decision required

- Decide whether the solid header should remain always visible or hide gently while scrolling down and return on scroll up.
- Decide whether mobile needs the full wordmark or a smaller seal plus text treatment.

## B. Hero scrub

### Current strengths

- It is the clearest signature experience on the site.
- Food, tray environment, hand and bowl establish the restaurant immediately.
- Scroll controls a meaningful action rather than a decorative effect.
- The headline is memorable and spatially integrated with the image.
- The three signature toppings are tied to the story.

### Current problems

- At `385vh`, the Hero carries a very large share of the page's attention.
- On narrow screens, the bowl and hand crop can dominate while contextual tray information disappears.
- The rest of the site feels weaker because it cannot match the Hero's visual density.
- Any visible AI texture, ingredient inconsistency or malformed utensil in the source video will be repeated for the entire opening experience.
- The final Hero message and the next section need a more deliberate handoff.

### Recommended direction

- Keep the Hero concept and current narrative.
- Do not redesign it while weaker sections remain unresolved.
- When the final scrub video is ready, review whether the scroll distance can be reduced while preserving the three topping beats.
- Create deliberate desktop and mobile crops instead of relying on one object position.
- Keep the text-safe region protected in every frame.
- End on a clean enough frame that the dark documentary section feels like the next room, not an unrelated page.

### Do not add

- Sound autoplay
- More ingredient labels
- A second CTA over the food
- Extra particle or steam effects
- Another scroll-controlled video immediately after the Hero

## C. `舊式香港` documentary queue section

### Current strengths

- The actual day and dusk queue photographs are highly specific to the restaurant.
- The subject explains a real part of the cart-noodle experience.
- The dark background follows the Hero naturally.
- The staggered image pair introduces a human scale after the close-up food film.

### Current problems

- The pale frames and slight stagger can read like a generic scrapbook layout.
- `日間` and `傍晚` are descriptive but do not add much narrative meaning.
- The section is called a sensory section in code, but its real role is history, place and queue culture.
- The photographs are visually authentic, but the composition does not yet make them feel editorially important.
- There is no strong directional handoff from the real queue into the ordering process.

### Recommended direction

- Treat one queue image as the dominant documentary frame and the second as a smaller time-of-day record.
- Use a simple contact-sheet, newspaper or documentary-caption logic without fake ageing.
- Replace decorative framing with one confident border or caption rail.
- Let the queue direction lead visually toward `你的一碗，由你決定`.
- Keep the original images; do not replace them with generated crowd photography.

### Decision required

- Choose whether the primary photograph is daytime or dusk.
- Decide whether the labels remain time labels or become a single factual caption about the queue experience.

## D. `你的一碗，由你決定` — How to Order

### Current strengths

- This is the correct subject for the middle of the page.
- 湯 → 麵 → 餸 is simple, memorable and true to the ordering experience.
- The disclaimer correctly avoids turning the homepage into a constantly maintained full menu.
- The order-slip concept can connect this section to the completed bowl.
- The jade background belongs to the brand palette.

### Current problems

- Three equal rounded cards make the experience look like a software feature grid.
- The step images do not consistently prove the step they represent; the noodle step currently uses a food crop that reads more like toppings than noodles.
- The white cards, large radius and generic shadow do not resemble trays, menu boards or a counter.
- The abstract stick-figure queue is visually weaker than the real queue photography immediately above it.
- The automatic red figure change is animation without enough narrative value.
- On mobile, the three cards plus queue panel create a long repetitive stack.

### Review of the current counter-photo iteration

The photo-and-slip direction is more authentic than the earlier card grid, but the current scale is not approved.

- The portrait source photograph is being displayed almost in full, so it determines an unnecessarily tall section.
- The photograph becomes the dominant subject even though it is supporting evidence, not the Hero.
- Its lower foreground bowls are visually large and pull attention away from 湯 → 麵 → 餸.
- The adjacent order-slip panel is forced to match the photograph's height, creating a large empty paper area below the content.
- Two equal tall rectangles make the section feel like a gallery layout rather than a quick ordering experience.
- The transition slip later appearing at the lower-right risks feeling like a duplicate instead of the same paper continuing its journey.
- The section occupies too much screen time immediately before Top Ten.

The problem is therefore not the use of photography. It is the proportion and role assigned to that photograph.

### Revised recommended direction

Use a **compact documentary service vignette**, not a large photo card and not a three-column rail.

- Keep the authentic counter photograph as supporting atmosphere.
- Crop it into a shallow landscape counter window focused on the tray grid and working hand.
- Exclude or greatly reduce the oversized lower foreground bowls.
- Target a desktop photo height of approximately `260–340px`; never show the complete portrait image merely to avoid cropping.
- Give the entire section a compact desktop height of approximately `520–650px`, including heading and spacing.
- Place one readable live order slip partially overlapping the counter window by approximately `24–40px`, so it feels like paper resting at the service counter rather than a matching gallery panel.
- The slip must size to its content; do not force it to equal the photograph's height and do not leave a large blank lower half.
- Present 湯, 麵 and 餸 as three stacked slip rows with clear `01–03` markers.
- Preserve the approved choices and disclaimer, but keep supporting text concise.
- Use one believable paper shadow and square physical edges; avoid card chrome.
- The queue is implied by the exterior-to-interior transition and the slip's progress, not by stick figures.

Desktop reading order:

**heading → shallow working-counter view → overlapping order slip → continuation toward Top Ten**

Mobile reading order:

**heading → counter crop around 180–220px high → full-width content-sized slip**

Do not overlap the slip on mobile if it reduces legibility. Do not use horizontal scrolling.

There must be only one perceived order slip. If the slip later detaches and follows the user, the transition must originate from the slip in this composition. Never show a second independent copy while the first remains visible.

### Motion recommendation

- This is the second major motion event.
- The order-slip rows may mark once in sequence.
- When the user leaves the section, the same perceived slip may detach into the existing follow interaction.
- The motion should be brief and local, not another long pin.
- On reduced motion, all three stages and the completed slip remain visible.

### Decision required

- Approve replacement of the three-card grid.
- Approve removal of the abstract queue people.
- Approve the authentic counter photograph only as a shallow supporting crop.
- Approve a content-sized overlapping slip instead of two equal tall panels.
- Confirm the section must remain shorter and visually quieter than the Hero and Top Ten combined.

## E. `文記十大` — Top Ten

### Current strengths

- The list is confirmed and useful.
- One preview that changes with selection is more efficient than ten large food cards.
- The dark menu-board background works with the restaurant theme.
- The active red state provides clear feedback.

### Current problems

- The current preview crop is often too close and can make the food look like an abstract wet texture.
- The ten large rectangular buttons still resemble a generic accordion or settings list.
- The featured image and selector compete for height, especially on mobile.
- All dish names receive almost identical visual treatment, so the section lacks rhythm.
- The section does not yet feel like a real 文記 recommendation board.
- Repeated bordered boxes contribute to the site's template feeling.

### Recommended direction

Use a compact **menu ledger** rather than ten button boxes:

- Number items `01–10`.
- Use typographic rows separated by thin rules.
- Keep one red active marker or full-width lacquer line.
- Let the preview occupy a controlled frame rather than a huge section.
- Show enough tray, plate or bowl context to make the ingredient recognisable.
- Standardise crop, lighting and colour across all ten preview images.
- Keep the disclaimer visible but quiet.

Desktop may use an asymmetric preview-plus-ledger composition. Mobile should lead with the heading and a compact active preview, followed by tappable rows. It should not force the user through ten oversized panels.

### Motion recommendation

- Use a short image crossfade when the selection changes.
- Do not pin the entire section.
- Do not turn all ten dishes into a scrub sequence; the Hero already owns that interaction.

### Decision required

- Approve the numbered ledger visual language.
- Decide the maximum preview height on desktop and mobile.
- Review every ingredient image for consistency before styling the section further.

## F. `你揀，文記煮。` — completed order and bowl

### Current strengths

- This is the correct narrative payoff after the ordering steps and Top Ten.
- The completed order slip is distinctive, understandable and highly specific to the restaurant.
- The idea of the slip moving through the pass to a finished bowl is one of the best concepts in the site.
- The warm wooden counter can provide a good transition from menu selection to human service.

### Current problems

- The current browser-built Three.js scene looks like a prototype or miniature diorama.
- Primitive geometry cannot represent broth depth, noodle tangling, fish maw, pig skin, oil, ceramic glaze or condiment materials convincingly.
- The style directly conflicts with the photorealistic Hero and the documentary photographs.
- Generated label textures and simplified bottle shapes create a visible “computer-made” signal.
- A weak 3D bowl beside a realistic Hero lowers trust in the food rather than adding depth.
- On mobile, the stage becomes a large block whose content is partially cropped and visually unclear.

### Does a 3D bowl fit the page?

**A low-poly or browser-modelled bowl does not fit. A dimensional bowl moment does fit.**

The distinction is important:

- If “3D bowl” means real-time Three.js geometry made from procedural primitives, reject it.
- If “3D bowl” means a convincing photographic still with spatial layering, subtle steam and an HTML order slip, approve that direction.
- A fully photorealistic Blender or photogrammetry bowl could theoretically work, but producing it well would require modelling, material maps, lighting and food art direction far beyond what this one section needs.

### Option comparison

| Method | Realism | Fit with page | Cost/risk | Decision |
| --- | --- | --- | --- | --- |
| Browser-built low-poly Three.js | Low | Poor | High iteration risk | Reject |
| Fully photoreal offline 3D render | Potentially high | Possible | Very high production cost | Not recommended now |
| Real restaurant photo shoot | Highest authenticity | Excellent | Requires access and coordination | Ideal future option |
| One approved photorealistic foundation image + live HTML slip | High if carefully approved | Best practical fit | Controlled | Recommended |

### Recommended direction

Follow the existing Order Pass plan: **photo-first 2.5D**.

- One coherent photograph or approved photorealistic plate contains bowl, broth, noodles, toppings, spoon, chopsticks, condiments and counter.
- The order slip remains real HTML in reserved negative space.
- All shadows and reflections belong to one camera and one light source.
- Add restrained steam only after the still works.
- Add at most 1–2% depth movement if it genuinely improves the landing interaction.
- Prepare separate desktop and mobile compositions when one crop cannot protect both the bowl and slip.

The finished visual should be quieter than the Hero. It is the moment of completion, not another spectacle.

### Hard visual requirements

- Bowl does not dominate the full stage.
- Dark broth has visible depth and a believable liquid level.
- Noodles remain thick, yellow, moist and irregular.
- Toppings remain anatomically believable and ingredient-specific.
- Pig knuckle shows skin and connective tissue rather than exposed bone as the dominant surface.
- Condiments remain secondary and do not look like product renders.
- Wood grain, ceramic, liquid, plastic, glass and food remain materially distinct.
- No AI text, repeated microtexture, honeycomb, embossed networks or duplicated food.

### Decision required before further work

- Confirm that production will not continue with the current procedural 3D bowl.
- Confirm photo-first 2.5D as the target.
- Approve one desktop composition before requesting expensive final realism.
- Approve a mobile companion composition before integration.

## G. Founder

### Current strengths

- The real founder portrait is more valuable than a polished generated image.
- The quotation is concise and emotionally relevant.
- The founder's name and English name are confirmed.
- This section gives the website a human source of authority.

### Current problems

- The current presentation is a standard image followed by a quote on an ivory background.
- It does not feel like a deliberate chapter after the completed-order scene.
- The image, quotation and identity line do not form one strong editorial composition.
- The portrait's restaurant environment is visible but not used as part of the story.
- On mobile, the section is correct but visually flat.

### Recommended direction

- Use a dark documentary chapter with the landscape photograph kept close to its natural ratio.
- Let the shop interior remain visible; do not crop the founder into an artificial studio portrait.
- Make the quotation the visual headline.
- Keep the name and English name as a compact identity line.
- Use one restrained reveal only.
- Do not retouch the founder into a glossy campaign image.

This section should feel human and quiet after the crafted order-pass moment.

## H. Recognition

### Current strengths

- The three approved records are clear.
- Michelin has an approved visual.
- The two visits remain text-only, avoiding questionable celebrity imagery or endorsement language.
- Press has a dedicated route.

### Current problems

- The section has no visible introductory hierarchy in the current build.
- The Michelin block, two plain text rows and underlined `報道` link feel unfinished.
- Recognition and documented visits are not visually differentiated enough.
- The current layout reads like a raw content list.
- It does not provide a designed transition from the founder story to practical location information.

### Recommended direction

- Add the planned `認可與到訪` label and `三項重要記錄` heading.
- Use an asymmetric editorial ledger.
- Give Michelin a compact evidence block.
- Label 白種元 and 黎芷珊 as separate `到訪記錄` rows.
- Use rules, numbering and spacing rather than three equal cards.
- End with `其他報道 →` as an editorial footnote.
- Keep the background warm ivory so the section reads as evidence following the dark Founder chapter.

## I. Locations

### Current strengths

- Confirmed address, hours and action links are available.
- 深水埗 and 尖沙咀 are both represented.
- The primary location already contains useful phone, email, map and Foodpanda actions.

### Current problems

- The current build looks like raw text content rather than the page's final practical chapter.
- Long underlined contact information dominates the mobile page.
- 深水埗 is typographically larger, but the overall hierarchy is still weak.
- Both locations sit on the same pale field as several preceding sections, making the end of the page feel unfinished.
- Action priority is unclear.

### Recommended direction

- Follow the dedicated Locations + Footer plan.
- Use a dark-green closing chapter.
- Give 深水埗 approximately two-thirds of the visual weight.
- Give 尖沙咀 a quieter supporting block.
- Separate address, hours/contact and actions.
- Make `地圖` the primary 深水埗 action and Foodpanda secondary.
- Do not embed a map or show unavailable placeholders.
- Use layout and rules, not two matching rounded cards.

## J. Footer

### Current strengths

- It is simple.
- It uses the established brand and primary links.
- It does not contain invented social or newsletter content.

### Current problems

- It resembles a duplicate header navigation placed under a red rule.
- The pale background provides little sense of closure.
- Repeating the location CTA after the Locations section is unnecessary.
- There is no secondary Press route in the current Footer.
- The final page ending feels functional rather than designed.

### Recommended direction

- Continue from dark-green Locations into a near-black or charcoal Footer.
- Use a compact brand zone and concise navigation zone.
- Keep Press secondary.
- Do not repeat address, hours or the red location CTA.
- Do not invent policy, social or corporate links.
- Keep the Footer shallow and quiet.

## Where the page currently becomes boring

The problem is not simply “not enough motion.” It happens for four specific reasons:

1. **Repeated containers:** rounded cards and bordered rows recur without a physical reason.
2. **Equal weighting:** unrelated items often receive the same size and visual treatment.
3. **Weak asset hierarchy:** close-up food crops, abstract figures and authentic photographs are treated as equivalent.
4. **Missing transitions:** sections stop and start instead of passing an object, colour or idea to the next chapter.

### How to add interest without overbuilding

- Create asymmetry: one dominant item and one supporting item.
- Use physical continuity: queue → order rail → slip → completed bowl.
- Use colour chapters rather than decorative gradients.
- Use fewer, stronger images.
- Replace card grids with ledgers, rails and editorial alignments.
- Let genuine restaurant objects create depth.
- Keep motion tied to ordering and service.
- Leave quiet sections quiet, but compose them deliberately.

## Cross-section narrative improvements

### Hero → Queue

The Hero finishes with a bowl. The next section should widen the camera to show the people and place behind that bowl.

### Queue → How to Order

The direction of the queue should lead into the three ordering stations. This is a conceptual handoff, not merely a background-colour change.

### How to Order → Top Ten

After explaining the mechanism, the site offers a practical starting point: ten signatures. The order slip should remain the connecting object.

### Top Ten → Completed Order

The selected choices resolve into the completed slip and finished bowl. The background may move from dark menu board to warm counter light.

### Completed Order → Founder

The crafted bowl gives way to the person and purpose behind the restaurant. Avoid keeping both visual subjects on screen simultaneously.

### Founder → Recognition

Move from a dark human chapter into a warm evidence ledger.

### Recognition → Locations → Footer

Public evidence leads to a practical visit decision, then the page ends quietly.

## Preventing an “AI-generated website” appearance

### Media rules

- Prefer real restaurant photography whenever it exists.
- Use generated media only where a real photograph is unavailable and the visual has a precise narrative job.
- Never use generated text inside an image.
- Inspect all generated food at full resolution.
- Reject repeated textures, synthetic grooves, perfect duplication and impossible anatomy.
- Preserve natural scratches, lighting variation and uneven food surfaces.

### Interface rules

- Avoid a page made entirely of rounded cards.
- Avoid excessive gradients, glows and glass effects.
- Avoid generic icon packs where text is clearer.
- Avoid identical section templates.
- Use restaurant-specific physical logic: menu ledger, tray rail, paper slip, red stamp and service counter.

### Copy rules

- Keep claims factual and concise.
- Do not add generic brand phrases such as “crafted with passion” or “an unforgettable experience.”
- Let confirmed details, ingredients, process and documentary evidence create personality.

## Recommended priority order

### Priority 0 — lock the visual grammar

Approve:

- documentary/editorial master direction;
- colour roles;
- typography roles;
- reduced card/radius rules;
- three-event motion budget;
- photo-first 2.5D decision for the bowl.

Do not continue polishing individual sections until these are accepted.

### Priority 1 — repair the middle of the page

1. Redesign How to Order as a compact documentary counter vignette with one content-sized live slip.
2. Remove the abstract queue figures.
3. Redesign Top Ten as a compact numbered menu ledger.
4. Standardise the Top Ten food images.

This work will produce the largest improvement because the current middle is long and visually repetitive.

### Priority 2 — approve the completed-order foundation

1. Approve the desktop photographic composition.
2. Inspect food and material realism.
3. Approve the mobile companion composition.
4. Integrate the live HTML slip only after both assets pass.
5. Remove the current Three.js scene only after the replacement is working.

### Priority 3 — finish the human and evidence chapters

1. Implement Founder according to its approved plan.
2. Implement Recognition according to its approved plan.
3. Review their transition together.

### Priority 4 — finish the practical ending

1. Implement Locations only and review.
2. Implement Footer only after Locations is accepted.
3. Test all practical actions.

### Priority 5 — final continuity pass

- Review Hero duration and mobile crop.
- Refine section transitions.
- Confirm the same image grade and type hierarchy across the page.
- Remove redundant reveal animations.
- Run full desktop/mobile accessibility, performance and visual QA.

## Decision checklist

Do not treat this as an implementation checklist. It is the approval record that should be completed before Cursor receives narrow build prompts.

### Overall identity

- [ ] Approve `documentary restaurant photography + restrained Hong Kong editorial design` as the master direction.
- [ ] Confirm the site should feel practical, local, tactile and human rather than luxurious or corporate.
- [ ] Confirm authentic shop evidence takes priority over generated decoration.
- [ ] Confirm sections may vary in composition but must share the same colour, type, material and motion rules.
- [ ] Confirm the site will not attempt to make every section a full-screen experience.

### Colour and typography

- [ ] Approve ivory for editorial/paper content.
- [ ] Approve charcoal/dark brown for food and documentary chapters.
- [ ] Approve jade for ordering and practical location content.
- [ ] Approve lacquer red for active selection, completion and primary action only.
- [ ] Approve gold for small labels and numbering only.
- [ ] Approve the display face for major statements and dish names.
- [ ] Approve sans serif for explanation, controls, hours and addresses.
- [ ] Confirm long practical text will not use oversized display type.

### Shape and layout

- [ ] Approve removal of unnecessary large rounded cards.
- [ ] Approve squared/lightly softened menu, paper and tray structures.
- [ ] Confirm shadows will be used only for physical objects or photographs.
- [ ] Approve more asymmetric compositions with clear primary and secondary elements.
- [ ] Confirm each section must add a new visual role rather than repeat the previous layout.

### Motion

- [ ] Approve Hero scrub as motion event 1.
- [ ] Approve the order-slip journey through 湯 → 麵 → 餸 as motion event 2.
- [ ] Approve the completed-slip landing beside the bowl as motion event 3.
- [ ] Confirm there will be no additional long pinned or scrubbed section.
- [ ] Confirm all other animation will be restrained and optional.
- [ ] Confirm reduced-motion mode will show complete static states.

### Header and Hero

- [ ] Decide whether the solid header remains fixed or hides on downward scroll.
- [ ] Decide whether the mobile wordmark remains full-size or becomes more compact.
- [ ] Preserve the current Hero concept.
- [ ] Review the final Hero source for AI texture and food continuity before launch.
- [ ] Approve separate desktop and mobile Hero crops.
- [ ] Review Hero scroll length only after the rest of the page is visually stronger.

### Queue documentary chapter

- [ ] Keep the real day and dusk queue photographs.
- [ ] Choose the dominant photograph.
- [ ] Decide whether captions remain `日間／傍晚` or become one factual documentary caption.
- [ ] Approve a restrained documentary frame rather than a scrapbook treatment.
- [ ] Approve a directional handoff into the ordering process.

### How to Order

- [x] Approve replacing the three equal rounded cards.
- [x] Approve removing the abstract stick-figure queue.
- [x] Approve the counter photograph as supporting atmosphere, not the dominant object.
- [x] Approve a shallow desktop counter crop above the ordering rail.
- [x] Approve excluding the oversized lower foreground bowls from the crop.
- [x] Approve one dark lacquer rail partially overlapping the counter window.
- [x] Confirm 湯, 麵 and 餸 appear as three unboxed rail steps with clear `01–03` markers.
- [x] Confirm numbers remain fully inside the rail in normal flow.
- [x] Approve a compact desktop section that remains quieter than the Hero.
- [x] Approve the stacked mobile composition with no clipping or horizontal overflow at approximately `390px`.
- [x] Keep the availability disclaimer and choices as accessible HTML.
- [ ] Replace the temporary photograph with an approved documentary counter/tray photograph.
- [ ] Record the final photograph's provenance, rights, alt text and crop guidance.
- [ ] Restore and approve one non-duplicating order-slip journey in a separate motion task.
- [ ] Correct and approve the slip speed, reduced-motion state and landing behaviour.

### Top Ten

- [ ] Approve numbered menu-ledger rows `01–10`.
- [ ] Approve removal of ten large bordered button boxes.
- [ ] Set a maximum preview height for desktop.
- [ ] Set a maximum preview height for mobile.
- [ ] Review and approve every preview crop and colour grade.
- [ ] Confirm one active red marker and a short image crossfade are sufficient.
- [ ] Confirm the section will not become another scrub or full-screen pin.

### Completed order and bowl

- [ ] Reject the current low-poly/procedural Three.js bowl as the production visual.
- [ ] Approve photo-first 2.5D as the production direction.
- [ ] Approve the bowl as the main focal point and condiments as secondary.
- [ ] Approve reserved negative space for the live HTML order slip.
- [ ] Approve one camera, one light source and coherent contact shadows.
- [ ] Approve the desktop composition before final realism work.
- [ ] Complete full-resolution food and material inspection.
- [ ] Reject AI text, honeycomb, embossing, repeated food or malformed utensils.
- [ ] Approve a dedicated mobile crop or companion composition.
- [ ] Confirm no steam or parallax is added before the static plate works.
- [ ] Confirm the old Three.js code is removed only after the replacement is accepted.

### Founder and Recognition

- [ ] Approve the dark documentary Founder chapter.
- [ ] Keep the real founder photograph close to its natural landscape ratio.
- [ ] Make the approved quotation the visual headline.
- [ ] Do not add biography or claims that are not confirmed.
- [ ] Approve Recognition as an asymmetric editorial ledger.
- [ ] Add the planned Recognition heading and framing copy.
- [ ] Keep 白種元 and 黎芷珊 as text-only visit records.
- [ ] Keep Press as a secondary editorial route.

### Locations and Footer

- [ ] Approve dark-green Locations as the practical closing chapter.
- [ ] Confirm 深水埗 is visually primary and 尖沙咀 secondary.
- [ ] Confirm map and Foodpanda action priority.
- [ ] Confirm no embedded map or placeholder contact information.
- [ ] Approve a darker, compact Footer.
- [ ] Do not repeat the location CTA in the Footer.
- [ ] Add Press only as a secondary Footer destination.

## Visual QA checklist

Use this after the approved section plans have been implemented.

### Desktop review — 1440×900

- [ ] Hero copy remains readable over every important frame.
- [ ] The Hero ending hands off cleanly to the queue chapter.
- [ ] Queue imagery remains documentary and not over-styled.
- [ ] How to Order reads as one compact process, not three unrelated cards or two oversized gallery panels.
- [ ] Top Ten is compact and its active dish is immediately clear.
- [ ] The completed bowl looks photographic and materially coherent.
- [ ] The live slip does not cover the bowl or condiments.
- [ ] Founder feels like a new human chapter.
- [ ] Recognition clearly separates Michelin from visit records.
- [ ] Locations action hierarchy is obvious.
- [ ] Footer feels like closure rather than a repeated header.
- [ ] No section visually competes with the Hero at the same scale.

### Mobile review — 390×844

- [ ] Header does not cover essential headings or image subjects.
- [ ] Hero crop protects bowl, ingredient action and text.
- [ ] Long scroll sections do not feel trapped or repetitive.
- [ ] Queue photographs remain legible at narrow width.
- [ ] Ordering process remains understandable without three giant stacked cards.
- [ ] Top Ten preview and list do not create excessive page length.
- [ ] Bowl and slip remain separate and recognisable.
- [ ] Founder portrait is not cropped into an artificial close-up.
- [ ] Recognition order remains clear.
- [ ] Addresses and email wrap without overflow.
- [ ] All actions have comfortable touch targets.
- [ ] There is no horizontal overflow.

### Authenticity and AI-artifact review

- [ ] No repeated squares, honeycomb, tessellation or embossed networks.
- [ ] No shared synthetic microtexture across food, ceramic, metal and wood.
- [ ] No duplicated ingredients or repeated garnish clusters.
- [ ] No malformed fingers, utensils, bowl rims, labels or food anatomy.
- [ ] No generated Chinese text appears inside photographs.
- [ ] Food remains ingredient-specific rather than uniformly glossy.
- [ ] Contact shadows and reflection directions agree.
- [ ] Documentary photographs retain ordinary real-world imperfections.
- [ ] Copy contains no generic invented claims.

### Accessibility and performance review

- [ ] Heading order is logical.
- [ ] Important meaning is not embedded only in images.
- [ ] Keyboard focus is visible.
- [ ] Reduced motion presents complete static content.
- [ ] Touch targets are appropriately sized.
- [ ] Contrast meets WCAG AA.
- [ ] Responsive images preserve dimensions and avoid layout shift.
- [ ] Below-the-fold images lazy-load.
- [ ] No unnecessary map, WebGL or animation dependency remains.
- [ ] The final Hero video is compressed and has a useful poster fallback.

## Definition of visual success

The homepage is ready for production when:

- a visitor can identify the site as 文記 and as a Hong Kong cart-noodle restaurant without reading every paragraph;
- the middle of the page remains engaging without relying on another full-screen video;
- real restaurant evidence is more prominent than generated or abstract decoration;
- the ordering story connects queue, choices, slip and completed bowl as one continuous narrative;
- the bowl is appetising and photographic rather than visibly computer-modelled;
- Founder, Recognition, Locations and Footer feel designed but calmer than the opening;
- desktop and mobile have intentionally composed crops and rhythms;
- no major section looks like a generic template card grid;
- no media contains visible AI surface artifacts or invented text;
- motion has a reason and reduced motion retains the complete experience.

## Recommended next decision

Before building the bowl, approve two decisions:

1. adopt the documentary/editorial master direction and the three-event motion budget;
2. treat the completed bowl as a **photo-first 2.5D scene**, not a real-time procedural 3D model.

After those are approved, the highest-value design task is not the Footer or another animation. It is to redesign **How to Order** and **Top Ten** so the middle of the page belongs to the same restaurant as the Hero. In parallel, the bowl foundation can proceed through its existing composition and realism approval gates.
