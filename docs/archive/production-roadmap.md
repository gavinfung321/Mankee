# Mankee Website Production Roadmap

Status: Historical. Superseded for production on 9 October 2026 by GitHub issue [#1](https://github.com/gavinfung321/Mankee/issues/1).

Production does not follow this roadmap. These instructions in this file are superseded by `docs/current/homepage-structure.md`, `docs/current/implementation-plan.md`, and `docs/current/implementation-checklist.md`:

- The vertical noodle divider and the horizontal noodle ribbon as production navigation.
- Copying the ScrollCraft engine into the production site.
- Foundation routes `/story/` and `/locations/`.
- A 3D Hero peak, and the provisional serving 瑞士雞中翼、南乳豬手、鹵水豬大腸.
- Beginning application code immediately after wireframe approval.

Hero media restrictions remain in `docs/reference/hero-media-handoff.md`. The locked 文記十大 is the wall list in `docs/current/implementation-plan.md`. The body below is retained as discovery history.

## Milestone 1: Wireframes

Produce two deliberately different compositions:

1. Desktop homepage wireframe showing the vertical noodle divider, eight beats and asymmetric Sham Shui Po ending.
2. Mobile homepage wireframe showing the horizontal noodle ribbon, top/bottom split and touch-sized location/menu controls.

The wireframes establish hierarchy, copy placement, image crops, interaction areas and scroll transitions. They do not require final photography or polished animation.

Owner review focuses on:

- Is Sham Shui Po clearly the heart of the story?
- Does every screen remain understandable in Traditional Chinese?
- Does the noodle divider feel like a useful narrative device rather than decoration?
- Does the final location choice feel clear and practical?

## Milestone 2: Cursor handoff package

After wireframe approval, prepare:

- `TECHNICAL_PLAN.md`
- `CONTENT_MAP.md`
- `CURSOR_BUILD_PROMPT.md`
- Typed menu and location data schemas.
- Component and route map.
- Asset placeholders and naming rules.
- Motion contracts for all eight acts.
- Definition of done for desktop, mobile and reduced motion.

This is the point at which coding in Cursor begins.

## Milestone 3: Cursor foundation build

Cursor builds the first working version without waiting for final 3D assets:

1. Initialize Astro with TypeScript.
2. Add `/`, `/menu/`, `/story/` and `/locations/`.
3. Copy the ScrollCraft engine without modifying it.
4. Implement design tokens, Traditional Chinese typography and navigation.
5. Build every homepage act as a static complete state.
6. Add typed content records for menu, locations and recognition.
7. Implement responsive and reduced-motion layouts.
8. Use approved placeholders where final photography or 3D is unavailable.

Foundation-build acceptance:

- All routes work.
- Navigation and content work without animation.
- Sham Shui Po appears as one connected location and is selected first.
- Hours display as 11:00–04:00.
- 尖沙咀店 appears secondarily.
- No essential information depends on WebGL.

## Milestone 4: Scroll behavior and Bowl Memory

After the static foundation is approved:

- Connect ScrollCraft progress and cues.
- Add divider navigation and section states.
- Implement ingredient memory using temporary browser state.
- Add layered photographic depth.
- Verify no device family repeats in adjacent acts.
- Build reduced-motion alternatives alongside every effect.

## Milestone 5: Food assets and 3D peak

- Confirm the exact 瑞士雞中翼、南乳豬手、鹵水豬大腸 serving.
- Capture full overhead and unobstructed 30-degree Mankee-owned photographs.
- Model or reconstruct the bowl, plate, noodle curve and contact shadow.
- Use photographic ingredient cards where full geometry adds no value.
- Add the noodle-to-bowl peak only after the static section already works.
- Generate only cleared enhancements such as steam or background repair if needed.

## Milestone 6: Verification and launch preparation

- Scroll-state screenshots on desktop and phone.
- Compact 360 × 640 test.
- Reduced-motion and no-WebGL tests.
- Keyboard and screen-reader navigation.
- Performance and failed-asset checks.
- Real iPhone test.
- Operational-data sign-off.
- Hosting, analytics and privacy configuration.

## Cursor and Codex working arrangement

- Cursor writes the application code from the approved handoff package.
- Codex maintains the source-of-truth planning documents, reviews implementation against ScrollCraft and helps diagnose or revise the build.
- Work from one project folder and Git repository.
- Avoid editing the same files in Cursor and Codex at the same time.
- Commit after each milestone so animation experiments can be reversed safely.

## Immediate next action

Review `wireframes/index.html` and select the homepage structure:

- Concept A: persistent central noodle thread.
- Concept B: chapter-based noodle markers.
- Recommended hybrid: Concept B with a subtle edge progress line on desktop.

When the structure is approved, generate the Cursor handoff package and begin coding immediately.
