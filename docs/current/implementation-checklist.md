# Mankee Website Implementation Checklist

Use this checklist with `docs/current/implementation-plan.md` and `docs/reference/github-issues-guide.md`. Decisions stay in the plan. This file tracks whether the work is done.

Status on 9 October 2026: Gate 0 is complete. Local `main` has the baseline commit. Next.js App Router with TypeScript is the approved production architecture, recorded on `chore/issue-19-nextjs-architecture`.

Status on 14 October 2026: visual implementation is paused at the Typography Lock in `docs/current/project-plan.md`. Typography, Founder, Recognition, Locations and Footer are not visually approved. Do not mark that unresolved work complete. The checks below record earlier structure and issue work; they are not a visual sign-off.

## Gate 0 — Before Cursor writes code

- [x] Confirm the correct Mankee GitHub repository, visibility and default branch. `gavinfung321/Mankee` is public, with default branch `main`.
- [x] Confirm that `website/` is the production application directory.
- [x] Confirm Next.js App Router and TypeScript as the production architecture. Tailwind CSS may support utilities and must not dictate a generic template appearance. Framer Motion is only for restrained progressive enhancement. Lucide supplies the menu icon. Supabase is not used. The earlier Astro recommendation is superseded.
- [x] Read `docs/reference/hero-media-handoff.md` completely.
- [x] Read `docs/current/homepage-structure.md` completely.
- [x] Read `docs/current/implementation-plan.md` completely.
- [x] Read `docs/reference/content-register.md` and `docs/reference/asset-manifest.md` for content and rights status.
- [x] Treat older architecture and roadmap material as superseded where it conflicts.
- [x] Correct Concept B’s Top Ten list to the wall list in `docs/current/implementation-plan.md`.
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
- [x] Design tokens cover colour, spacing, focus and motion. The brand colours are paper, ink, lacquer, jade, and noodle. Jade dark is the Hero backdrop only. The page background is paper. Typography remains unresolved at the Typography Lock.
- [x] `lang="zh-HK"` is applied.
- [x] Content records are locale-keyed but only Traditional Chinese is visible.
- [x] No inactive language switcher is rendered.
- [x] Shared navigation and footer work on desktop and mobile.
- [x] Skip link and visible keyboard focus are present.

## Homepage structure

- [x] Hero uses the temporary approved development media.
- [x] Hero has a poster fallback and replaceable media contract.
- [x] The second section is `舊式香港`, implemented inside the historically named `SensoryTrio`. The names 香／瑞士雞翼, 厚／上湯花膠, 濃／南乳豬手 stay approved dish names; this check does not place them in a new section.
- [x] Ordering is presented as the compact photographic 湯 → 麵 → 餸 rail. The timber-card and queue-figure specification is superseded.
- [x] Curry, satay and spicy flavour are optional within the soup step.
- [x] 文記十大 matches the wall list in `docs/current/implementation-plan.md`.
- [x] Availability disclaimer is visible.
- [x] The order form stays in `文記十大`, changes from 落單 to 完成 while still visible near the end of that section, and does not fly into `你揀，文記煮`. **Superseded:** the service-window transition into Founder.
- [x] Founder section is present after `你揀，文記煮`. Visual approval and the publication review are still open.
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
- [ ] Founder portrait and quotation have passed the pending-publication review in `docs/reference/content-register.md`. Visual approval is also open.
- [ ] Michelin artwork and wording have passed the pending-publication review in `docs/reference/content-register.md`. Visual approval is also open.
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
- [ ] Fonts are licensed and loading is controlled. Shipped subsets are not the Typography Lock, which remains open.
- [x] Hero loading does not prevent first content render.
- [ ] Metadata, canonical URLs and social cards are correct.
- [ ] Structured data contains only verified information.
- [ ] Broken links and failed assets are checked.
- [ ] Analytics and privacy behavior are approved if enabled.
- [ ] Owner performs final visual, content and operational sign-off.

## Homepage polish — Issue #20

Historical log from 10 October 2026. The structure issues #1–#19 are closed. Issue #20 was opened on `design/issue-20-concept-b-visual-system`.

**Current status, 14 October 2026:** visual implementation is paused at the Typography Lock. The checks in this section are not permission to continue a visual pass. Step 1 is not the Typography Lock and stays open. Founder, Recognition, Locations and Footer stay open.

- [ ] 1. Global typography. An earlier token pass exists. It is not approval of the Typography Lock, and this item stays open.
- [x] 2. Header and Hero overlay. The temporary Hero film remains. This check does not approve a new logo or a font lock.
- [x] 3. `舊式香港`, `文記落單體驗` and `文記十大`. `舊式香港` is the current second section inside `SensoryTrio`. Ordering is the compact photographic rail. **Superseded:** the queue-figure pause, the timber cards, and the copy-column layout as current direction.

### Sensory chapter — Issue #21

Historical note. The pinned three-dish chapter was set aside, and the second section is now `舊式香港` inside `SensoryTrio`. **Superseded as current direction:** any instruction that the locked section is still the old-style queue pause. This checklist does not decide a new placement for 香、厚、濃.

Found while reviewing that chapter, not part of #21: at the join, the pinned film is still behind the bar, and the bar is 96% opaque, so the last frame ghosts through the navigation.
- [ ] 4. `你揀，文記煮`, Founder and Recognition. The static food photograph is the current `你揀，文記煮` decision, and its cinemagraph stays deferred. Founder and Recognition are not visually approved. **Superseded:** a flying slip into this section.
- [ ] 5. Locations and Footer. Not visually approved. Daytime Sham Shui Po storefront placement is still open. Broadcast frames of 白種元 and 黎芷珊 stay off the page. Tsim Sha Tsui facts and delivery links remain in the pending-publication review.
- [ ] 6. Mobile and responsive treatment. Audited at 1440, 1280 and 390. Not refined, and not approved.
- [ ] 7. Subtle motion and final performance work. Not started. Hero media stays unchanged. The `你揀，文記煮` cinemagraph stays deferred.

Locked for every step: approved facts, Hero video and poster bytes, heading 文記十大, founder before recognition, no prices, no V10 or honeycomb media, no redraw of the stall mural.

## Per-issue completion

- [ ] Every acceptance criterion is verified.
- [ ] Relevant automated and manual checks pass.
- [ ] Commit messages reference the issue ID: `[#ID] Summary`.
- [ ] Pull request or merge summary references the issue.
- [ ] Any scope change is documented and moved to a follow-up issue.
- [ ] Closing comment summarizes changes, verification and remaining follow-ups.
- [ ] Issue is closed only after the work is genuinely complete.

