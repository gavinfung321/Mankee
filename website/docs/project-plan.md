# 文記 homepage — project control plan

Status: **active recovery and organisation**  
Updated: 14 Oct 2026

This is the single index for workflow, priorities and approval status. It does not replace section plans or factual content files.

## Immediate rule

Pause all visual implementation in Cursor until Stage 1 — Typography Lock is approved.

The working tree currently contains 23 uncommitted changes spanning documentation, fonts, components, styles and tests. Do not layer another section redesign onto this state. Do not discard or overwrite these changes; first audit and checkpoint them.

## Order of authority

When documents disagree, use this order:

1. Confirmed content and media records in `src/content/zh-HK/*` plus explicit owner decisions.
2. This project control plan for sequence, status and scope.
3. `docs/visual-system.md` for fonts, type scale, colour roles and shared visual tokens **after its approval gate passes**.
4. `docs/inspiration-analysis.md` for pacing, focal-point discipline, composition principles and motion budget.
5. The relevant `docs/sections/*` plan for section-specific content, layout and acceptance criteria.
6. `docs/analysis.md` as historical analysis and rationale, not a current implementation checklist.

No document may override factual, licensing, accessibility or performance requirements.

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
- [ ] Create one recoverable checkpoint commit before beginning another redesign.
- [ ] Record the checkpoint commit here.

Checkpoint: `pending`

## Stage 1 — Typography Lock

This is the next active stage. No section redesign proceeds until it is approved.

### Recommended two-role system

- **Display:** self-hosted LXGW WenKai TC Bold, weight 700, for Hero and section headings, feature quotations, founder/location names and signature lines.
- **Text:** self-hosted Noto Sans TC for body copy, navigation, kickers, captions, labels, buttons and practical information.

Use the self-hosted display font first so Windows, macOS and mobile render the same primary face. System `DFKai-SB`, `BiauKai` and `Kaiti TC` may remain fallbacks only. A system font must not lead the stack if cross-device consistency is the goal.

### Typography decisions to approve

- [ ] Approve LXGW WenKai TC Bold as the first display face across devices.
- [ ] Approve Noto Sans TC as the first text face across devices.
- [ ] Confirm exactly two font-family roles: `var(--font-display)` and `var(--font-text)`.
- [ ] Remove duplicate or conflicting font declarations after the two roles are approved.
- [ ] Set supported display weights to 700; do not request unavailable 500/650 weights from the bold-only font.
- [ ] Define one responsive scale for kicker, section heading, feature quote, title, body and caption.
- [ ] Produce a single typography specimen using real homepage Chinese copy.
- [ ] Review the specimen at 1440px, 1024px and 390px.
- [ ] Verify font loading, glyph coverage, layout shift and fallback behaviour.
- [ ] Run the typography test only after the system is visually approved.
- [ ] Mark `docs/visual-system.md` approved only after all checks pass.

### Typography stop conditions

- No component-specific font family.
- No mixture of Noto Serif, DFKai, BiauKai and WenKai as competing primary faces.
- No synthesized or unsupported display weights.
- No section-specific type scale invented during layout work.
- No font file deletion is accepted until the replacement loads and covers the published copy.

## Stage 2 — Shared colour and spacing roles

Start only after Typography Lock.

- [ ] Confirm the global colour roles for paper, ink, lacquer, jade and noodle gold.
- [ ] Confirm one dominant ground per chapter.
- [ ] Define shared spacing and content-width rules.
- [ ] Define shared kicker, rule, caption, focus and action treatments.
- [ ] Change tokens before changing individual sections.
- [ ] Verify WCAG AA contrast for every approved role.

This is a token pass, not a section redesign.

## Stage 3 — Complete unfinished chapters

Work sequentially:

1. **Founder** — active redesign after Typography Lock. Keep 黃志強 centred and follow the reopened checklist in `docs/sections/founder-recognition/implementation.md`.
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

- [ ] Audit against `docs/inspiration-analysis.md`.
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
| Founder | Redesign plan reopened; current result not approved | Blocked by Typography Lock |
| Recognition | Implementation has begun but is not visually approved | Freeze; resume after Founder |
| Locations | Aligned plan exists | Not started |
| Footer | Aligned plan exists | Not started |
| Global visual audit | Pending | Stage 5 |
| Motion/performance | Deferred | Stage 6 |

## Current next action

Do not ask Cursor to improve another section. First review and preserve the current working tree in a recoverable checkpoint. Then audit and approve the two-font typography system before returning to Founder or any other section.
