# 文記 homepage — project control plan

Status: **active recovery and organisation**  
Updated: 14 Oct 2026

This is the current website-phase index for workflow, priorities and approval status. It does not replace the root project governance, section plans or factual content files.

## Immediate rule

Stage 1 — Typography Lock was approved on 14 Oct 2026. Font families are now fixed; no section may change them.

On 14 October 2026 the recovery checkpoint `35548f48b5545db9918ec02cd7c3f482508e4cbb` was made on `codex/mankee-recovery-2026-10-14`. The earlier note of 23 uncommitted changes described the tree before that checkpoint. Do not layer another section redesign onto the current phase.

## Order of authority

The Git and project root is `Mankee/`, not `Mankee/website/`. Root governance remains authoritative:

1. `docs/reference/hero-media-handoff.md` for Hero media, credit safety and generation restrictions.
2. `docs/current/homepage-structure.md` for homepage order and content scope.
3. `docs/current/implementation-plan.md` and `docs/current/implementation-checklist.md` for production architecture and gates.
4. `docs/reference/content-register.md` for factual evidence, permissions and operational status.
5. `docs/reference/asset-manifest.md` for asset provenance and approval.

Within the current website-design phase:

1. This file coordinates sequence and status.
2. `docs/current/visual-system.md` governs fonts (locked 14 Oct 2026), and type scale, colour roles and shared visual tokens **after their approval gates pass**.
3. `docs/current/inspiration-analysis.md` governs pacing, focal-point discipline, composition principles and motion budget.
4. The relevant `docs/current/sections/*` plan governs section-specific layout and acceptance criteria.
5. `docs/reference/visual-analysis.md` remains historical rationale rather than a current implementation checklist.

Typed records in `src/content/zh-HK/*` implement approved content; they do not replace the evidence and permission status in the root `docs/reference/content-register.md`. No document may override factual, licensing, accessibility or performance requirements.

## Workspace boundary

- Open `C:/Users/gavin/OneDrive/Desktop/Mankee` as the Cursor workspace so root governance and the production application are visible together.
- Run Git operations from `Mankee/`; the `.git` directory is at the project root.
- Run Next.js, npm and application tests from `Mankee/website/`, where `package.json` lives.
- Keep production source, styles, tests and public assets inside `website/`.
- Keep root planning, source assets, wireframes, ScrollCraft experiments and tooling in their existing root folders.
- Do not move the Next.js package to the root and do not copy the whole asset or experiment library into `website/`.

## Working method

- One active design problem at a time.
- One Cursor prompt equals one bounded pass.
- Update the relevant plan before production code.
- Approve the static desktop, tablet and mobile composition before motion.
- A checked item is reopened when its design is intentionally changed.
- Do not let a section introduce its own fonts or colour tokens.
- Do not run a global redesign and a section redesign in the same pass.
- Do not commit until the active stage has passed its visual and technical checks.

## Stage 0 — Stabilise the workspace

- [ ] Stop current Cursor implementation work.
- [ ] Review the 23 uncommitted changes and separate intentional work from accidental drift.
- [ ] Confirm no approved asset or interaction was unintentionally removed.
- [ ] Run focused tests for the existing changes.
- [x] Create one recoverable checkpoint commit before beginning another redesign. Commit `35548f48b5545db9918ec02cd7c3f482508e4cbb` on `codex/mankee-recovery-2026-10-14`.
- [x] Record the checkpoint commit here.

Checkpoint: `35548f48b5545db9918ec02cd7c3f482508e4cbb`

The other Stage 0 checks stay open. This documentation reconciliation did not run tests or audit every earlier change.

## Stage 1 — Typography Lock

**Locked by the owner on 14 Oct 2026.** Font families are fixed. Sizes, weights, spacing and colour were not changed by the lock.

### Locked two-role system

- **Display — `--font-display`:** `"DFKai-SB"`, then `"BiauKai"`, then the existing self-hosted LXGW WenKai TC Bold, then `"Kaiti TC"`, `serif`. Used for Hero and section headings, feature quotations, founder/location names and signature lines.
- **Text — `--font-text`:** the existing self-hosted Noto Sans TC, then `"PingFang TC"`, `"Microsoft JhengHei"`, `sans-serif`. Used for body copy, navigation, kickers, captions, labels, buttons and practical information.

標楷體 leads the display role to match the Hero. It cannot be self-hosted, so self-hosted WenKai TC is the consistent stand-in on devices without `DFKai-SB` or `BiauKai`. The stacks are defined once in `website/src/styles/tokens.css` and mirrored in `website/src/app/globals.css`; `website/src/lib/fonts.ts` only loads the files and adds no fallbacks of its own.

### Typography decisions

- [x] Approve the display order `DFKai-SB`, `BiauKai`, self-hosted WenKai TC, `Kaiti TC`, `serif`.
- [x] Approve self-hosted Noto Sans TC as the first text face.
- [x] Confirm exactly two font-family roles: `var(--font-display)` and `var(--font-text)`.
- [x] Remove duplicate or conflicting font declarations. The temporary `/typography-review` route is removed.
- [x] Run the focused typography test.
- [ ] Display weights below 700 and the shared responsive type scale are carried to the Stage 5 typography audit. The lock does not change sizes or weights.

### Typography stop conditions

- No component-specific font family.
- No font-family role other than `--font-display` and `--font-text`.
- No reordering of the locked display or text stacks without owner approval.
- No synthesized or unsupported display weights.
- No section-specific type scale invented during layout work.
- No font file deletion is accepted until the replacement loads and covers the published copy.

## Stage 2 — Shared colour and spacing roles

**Approved by the owner on 14 Oct 2026. No visual change.** The audit, roles, decisions and contrast results are in `docs/current/visual-system.md` under "Stage 2 — colour and spacing roles".

- [x] Audit colour and spacing usage across `globals.css` and `home.css`.
- [x] Add role tokens with existing values and replace exact-match raw colours.
- [x] Confirm the global colour roles and the destination token for each near-duplicate.
- [x] Define shared spacing and content-width rules: `--section-space` is 64px below `64rem` and 96px from `64rem`, for reopened sections only.
- [x] Define the shared kicker, rule, focus and action treatments. The rule is `--rule-length` × `--rule-weight` (2.25rem × 2px) in lacquer. Caption styling stays with the Stage 5 audit.
- [x] Lacquer small text on a light ground requires at least 4.5:1.
- [x] Verify WCAG AA contrast for every approved role pairing from source.
- [ ] One dominant ground per chapter. The three neighbouring light grounds (`文記十大`, `你揀，文記煮`, Founder) are decided during the Founder redesign.

Frozen sections (Hero, `舊式香港`, `文記落單體驗`, `文記十大`, `你揀，文記煮`) do not receive kicker colours, `--section-space` or near-duplicate merges until each is reopened in Stage 4. Known exception to fix on reopening: `.order-slip-card .slip-row b`, lacquer on the slip at 4.37:1.

This is a token pass, not a section redesign.

## Stage 3 — Complete unfinished chapters

Work sequentially:

1. **Founder** — next active redesign. Uses the Stage 2 roles and decides the neighbouring light grounds. Keep 黃志強 centred and follow the reopened checklist in `docs/current/sections/founder-recognition.md`.
2. **Recognition** — begin only after Founder receives visual approval.
3. **Locations** — begin only after Recognition is approved.
4. **Footer** — begin only after Locations is approved; finish with the approved memorable 文記 brand field.

Each chapter requires static approval at 1440px, 1024px and 390px before the next begins.

## Stage 4 — Inspiration-led review of completed chapters

The owner has chosen to reconsider completed sections using the new inspiration analysis. Reopen them one at a time; do not redesign the whole page simultaneously.

Recommended review order:

1. Hero
2. `舊式香港`
3. `文記落單體驗`
4. `文記十大`
5. `你揀，文記煮`

For each section:

- [ ] Audit against `docs/current/inspiration-analysis.md`.
- [ ] Decide explicitly whether to keep, refine or redesign.
- [ ] Update its section plan and reopen affected checklist items.
- [ ] Preserve confirmed content and working interactions.
- [ ] Approve static desktop, tablet and mobile views.
- [ ] Stop before moving to the next section.

## Stage 5 — Global continuity pass

Run only after every static chapter is approved.

- [ ] Audit colour roles across the assembled page.
- [ ] Audit the locked typography scale without changing font families.
- [ ] Audit vertical rhythm, section boundaries, image treatment and caption styling.
- [ ] Remove accidental repeated layout grammar.
- [ ] Confirm every viewport has one obvious focal point.
- [ ] Verify the complete page at 1440px, 1024px and 390px.

## Stage 6 — Motion and performance

Motion remains last.

- [ ] Preserve Hero scrub as the primary cinematic movement unless its later review changes that decision.
- [ ] Preserve `文記十大` selection/completion as the primary interaction.
- [ ] Decide whether the deferred bowl cinemagraph is still needed.
- [ ] Add only approved short supporting reveals.
- [ ] Verify reduced motion, loading behaviour and performance.
- [ ] Run formatting, lint, tests and production build.

## Current section status

| Chapter | Current state | Next action |
| --- | --- | --- |
| Hero | Built; future inspiration review planned | Freeze until Stage 4 |
| `舊式香港` | Built; future inspiration review planned | Freeze until Stage 4 |
| `文記落單體驗` | Built; future inspiration review planned | Freeze until Stage 4 |
| `文記十大` | Built; future inspiration review planned | Freeze until Stage 4 |
| `你揀，文記煮` | Static composition built; cinemagraph deferred | Freeze until Stage 4/6 |
| Founder | Redesign plan reopened; current result not approved | Next: Stage 3 redesign |
| Recognition | Implementation has begun but is not visually approved | Freeze; resume after Founder |
| Locations | Aligned plan exists | Not started |
| Footer | Aligned plan exists | Not started |
| Global visual audit | Pending | Stage 5 |
| Motion/performance | Deferred | Stage 6 |

## Current next action

Do not ask Cursor to improve another section. The recovery checkpoint exists, and the Typography Lock and Stage 2 are approved. The current next action is Stage 3, starting with the Founder redesign, which also decides the neighbouring light grounds. In `docs/current/visual-system.md`, fonts and the colour and spacing roles are approved; the type scale and per-chapter grounds stay draft.
