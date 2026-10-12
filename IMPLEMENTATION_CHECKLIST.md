# Mankee Website Implementation Checklist

Use this checklist with `IMPLEMENTATION_PLAN.md` and `GITHUB_ISSUES_GUIDE.md`. Decisions stay in the plan. This file tracks whether the work is done.

Status on 9 October 2026: Gate 0 is complete. Local `main` has the baseline commit. Next.js App Router with TypeScript is the approved production architecture, recorded on `chore/issue-19-nextjs-architecture`.

## Gate 0 — Before Cursor writes code

- [x] Confirm the correct Mankee GitHub repository, visibility and default branch. `gavinfung321/Mankee` is public, with default branch `main`.
- [x] Confirm that `website/` is the production application directory.
- [x] Confirm Next.js App Router and TypeScript as the production architecture. Tailwind CSS may support utilities and must not dictate a generic template appearance. Framer Motion is only for restrained progressive enhancement. Lucide supplies the menu icon. Supabase is not used. The earlier Astro recommendation is superseded.
- [x] Read `PROJECT-HANDOFF.md` completely.
- [x] Read `CONCEPT-B-APPROVED-STRUCTURE.md` completely.
- [x] Read `IMPLEMENTATION_PLAN.md` completely.
- [x] Read `CONTENT_REGISTER.md` and `ASSET_MANIFEST.md` for content and rights status.
- [x] Treat older architecture and roadmap material as superseded where it conflicts.
- [x] Correct Concept B’s Top Ten list to the wall list in `IMPLEMENTATION_PLAN.md`.
- [x] Confirm no paid Hero generation or proof merge is authorized.
- [x] Create or verify project labels and milestones.
- [x] Search for an existing implementation issue before creating one.
- [x] Create the documentation-freeze issue with acceptance criteria, label and milestone.
- [x] Post the starting-work comment before editing.

## Per-issue start

- [ ] Matching open issue identified; no duplicate created.
- [ ] Issue contains Summary, Context, Acceptance Criteria and Notes.
- [ ] At least one correct label is applied.
- [ ] A milestone is assigned.
- [ ] Dependencies and blocked decisions are recorded.
- [ ] Branch follows `feat/issue-ID-short-description`, `fix/issue-ID-short-description` or an approved equivalent.
- [ ] Starting-work comment states the intended approach.
- [ ] Working tree is understood before edits begin.

## Foundation build

- [x] Next.js and TypeScript scaffold exists only under `website/`.
- [x] Existing reference and Hero-production folders are unchanged.
- [x] Run, build, format and test commands are documented.
- [x] Design tokens cover colour, typography, spacing, focus and motion. The brand colours are paper, ink, lacquer, jade, and noodle. Jade dark is the Hero backdrop only. The page background is paper.
- [x] `lang="zh-HK"` is applied.
- [x] Content records are locale-keyed but only Traditional Chinese is visible.
- [x] No inactive language switcher is rendered.
- [x] Shared navigation and footer work on desktop and mobile.
- [x] Skip link and visible keyboard focus are present.

## Homepage structure

- [x] Hero uses the temporary approved development media.
- [x] Hero has a poster fallback and replaceable media contract.
- [x] Sensory section uses 香／瑞士雞翼, 厚／上湯花膠, 濃／南乳豬手.
- [x] Ordering is presented as 湯 → 麵 → 餸.
- [x] Curry, satay and spicy flavour are optional within the soup step.
- [x] 文記十大 matches the wall list in `IMPLEMENTATION_PLAN.md`.
- [x] Availability disclaimer is visible.
- [x] Completed order slip transitions into the Founder story.
- [x] Founder section contains only sourced, approval-ready content.
- [x] Homepage recognition is limited to Michelin, 白種元 and 黎芷珊.
- [x] Other coverage routes to `/press/`.
- [x] 深水埗 is visually primary in locations.
- [x] No prototype notes, technical labels or review annotations appear.

## Supporting routes

- [x] `/menu/` works by direct URL and after refresh.
- [x] `/menu/` explains the experience rather than claiming a live complete catalogue.
- [x] `/press/` works by direct URL and after refresh.
- [x] Third-party imagery is used only when permission or a safe official embed exists.
- [ ] `/privacy/` is added only if site behavior requires it.

## Interaction and motion

- [x] Static content is complete before motion is connected.
- [x] Top Ten works with mouse, keyboard and touch.
- [x] Mobile Top Ten uses a clear tap/accordion pattern.
- [x] Only one signature motion idea is used per section.
- [x] `prefers-reduced-motion` produces a complete page without empty scroll space.
- [x] Hero scrub never blocks navigation or essential content.
- [x] No camera correction, paid media generation or final-Hero replacement occurs without approval.

## Content, rights and operational data

- [ ] Every production image has owner/source, usage status and alt text.
- [x] Founder portrait and quotation are approved.
- [x] Michelin wording and mark usage are approved.
- [x] 白種元 and 黎芷珊 are described as documented visits, not endorsements.
- [ ] Addresses, hours, map links and delivery links are owner-verified.
- [x] Pending operational fields do not render as confirmed facts.
- [ ] No guessed prices or complete unstable menu catalogue is published.
- [ ] `實際供應及選擇以店內餐牌為準。` appears where required.

## Responsive and accessibility QA

- [x] Desktop layout reviewed at common laptop and large-monitor widths.
- [x] Tablet layout reviewed.
- [x] Mobile reviewed around 390px.
- [x] Compact 360 × 640 layout reviewed.
- [ ] Real iPhone test completed before launch.
- [x] Heading order and landmarks are logical.
- [x] Keyboard navigation and focus order pass.
- [x] Screen-reader names are meaningful.
- [x] Text contrast passes.
- [x] Essential Chinese copy is not embedded inside images.
- [x] Controls meet touch-target expectations.

## Performance and release

- [x] Production build completes without warnings that affect users.
- [x] No lab, review-board or rejected media ships in the bundle.
- [x] Images are responsive and appropriately compressed.
- [x] Fonts are licensed and loading is controlled.
- [x] Hero loading does not prevent first content render.
- [ ] Metadata, canonical URLs and social cards are correct.
- [ ] Structured data contains only verified information.
- [ ] Broken links and failed assets are checked.
- [ ] Analytics and privacy behavior are approved if enabled.
- [ ] Owner performs final visual, content and operational sign-off.

## Homepage polish — Issue #20

Status on 10 October 2026. The structure issues #1–#19 are closed. Issue #20 is open on `design/issue-20-concept-b-visual-system`. The header and pinned hero are committed. Issue #21 is closed: the sensory slot is the queue pause, and that work is not committed yet.

Gemini’s seven steps are the same sequence as the five passes. The sensory chapter is the one extra issue, #21. Do not open a series for the remaining steps.

- [x] 1. Global typography, spacing, widths and color discipline. Pass 1. Type tokens, one content width, one photo frame, one text-link style, and section padding reduced from 6.5rem to 48px.
- [x] 2. Header and Hero overlay. Pass 2. Transparent 64px bar, logo, bold headline, and the pinned film are in place.
- [x] 3. Sensory, ordering and 文記十大 narrative flow. Pass 2. Sensory is closed on #21 as the queue pause. Ordering reads down the copy column as 湯、麵、餸. 文記十大 is one column, with 香、厚、濃 above the names.

### Sensory chapter — Issue #21

Closed. The pinned three-dish chapter was set aside. The locked section is the old-style queue pause: the three lines, day and evening queue photos on a full dark ground, and a scroll that stands the day print first and the evening print after. 香、厚、濃 sit above 文記十大. The changes are not committed yet.

Found while reviewing this chapter, not part of #21: at the join, the pinned film is still behind the bar, and the bar is 96% opaque, so the last frame ghosts through the navigation.
- [ ] 4. Order slip, founder and recognition. Pass 3. Slip, portrait and Michelin mark exist. They do not yet read as one sequence.
- [ ] 5. Locations and footer. Pass 3. Facts are published. Daytime Sham Shui Po storefront is chosen and not yet placed. Broadcast frames of 白種元 and 黎芷珊 stay off the page.
- [ ] 6. Mobile and responsive treatment. Pass 4. Audited at 1440, 1280 and 390. Not refined.
- [ ] 7. Subtle motion and final performance work. Pass 5. Not started. Hero media stays unchanged.

Locked for every step: approved facts, Hero video and poster bytes, heading 文記十大, founder before recognition, no prices, no V10 or honeycomb media, no redraw of the stall mural.

## Per-issue completion

- [ ] Every acceptance criterion is verified.
- [ ] Relevant automated and manual checks pass.
- [ ] Commit messages reference the issue ID: `[#ID] Summary`.
- [ ] Pull request or merge summary references the issue.
- [ ] Any scope change is documented and moved to a follow-up issue.
- [ ] Closing comment summarizes changes, verification and remaining follow-ups.
- [ ] Issue is closed only after the work is genuinely complete.

