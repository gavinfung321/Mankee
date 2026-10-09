# Mankee Website Implementation Checklist

Use this checklist with `IMPLEMENTATION_PLAN.md` and `GITHUB_ISSUES_GUIDE.md`. Decisions stay in the plan. This file tracks whether the work is done.

Status on 9 October 2026: Gate 0 is complete. Local `main` has the baseline commit. The 文記十大 interaction is committed on `feat/issue-11-top-ten-interaction`. Map and delivery URLs are still unverified. The next build is restrained section transitions.

## Gate 0 — Before Cursor writes code

- [x] Confirm the correct Mankee GitHub repository, visibility and default branch. `gavinfung321/Mankee` is public, with default branch `main`.
- [x] Confirm that `website/` is the production application directory.
- [x] Confirm Astro with TypeScript as the production stack.
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

- [x] Astro and TypeScript scaffold exists only under `website/`.
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
- [ ] Founder portrait and quotation are approved.
- [ ] Michelin wording and mark usage are approved.
- [ ] 白種元 and 黎芷珊 are described as documented visits, not endorsements.
- [ ] Addresses, hours, map links and delivery links are owner-verified.
- [ ] Pending operational fields do not render as confirmed facts.
- [ ] No guessed prices or complete unstable menu catalogue is published.
- [ ] `實際供應及選擇以店內餐牌為準。` appears where required.

## Responsive and accessibility QA

- [ ] Desktop layout reviewed at common laptop and large-monitor widths.
- [ ] Tablet layout reviewed.
- [ ] Mobile reviewed around 390px.
- [ ] Compact 360 × 640 layout reviewed.
- [ ] Real iPhone test completed before launch.
- [ ] Heading order and landmarks are logical.
- [ ] Keyboard navigation and focus order pass.
- [ ] Screen-reader names are meaningful.
- [ ] Text contrast passes.
- [ ] Essential Chinese copy is not embedded inside images.
- [ ] Controls meet touch-target expectations.

## Performance and release

- [ ] Production build completes without warnings that affect users.
- [ ] No lab, review-board or rejected media ships in the bundle.
- [ ] Images are responsive and appropriately compressed.
- [ ] Fonts are licensed and loading is controlled.
- [ ] Hero loading does not prevent first content render.
- [ ] Metadata, canonical URLs and social cards are correct.
- [ ] Structured data contains only verified information.
- [ ] Broken links and failed assets are checked.
- [ ] Analytics and privacy behavior are approved if enabled.
- [ ] Owner performs final visual, content and operational sign-off.

## Per-issue completion

- [ ] Every acceptance criterion is verified.
- [ ] Relevant automated and manual checks pass.
- [ ] Commit messages reference the issue ID: `[#ID] Summary`.
- [ ] Pull request or merge summary references the issue.
- [ ] Any scope change is documented and moved to a follow-up issue.
- [ ] Closing comment summarizes changes, verification and remaining follow-ups.
- [ ] Issue is closed only after the work is genuinely complete.

