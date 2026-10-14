# Documentation consolidation plan

**Executed 14 October 2026.** No path stubs were created. `.cursor/rules/homepage-one-part.mdc` and `website/README.md` point at the new paths. The table below records pre-move locations. Those old paths are not live links. The stub steps in section 5 were withdrawn before execution and must not be followed.

Status: executed record. Written 14 October 2026. This file does not change a production decision.

This plan does not change a production decision. Homepage order, the Typography Lock pause, publication status, Hero-media limits, and asset provenance stay where the 14 October 2026 reconciliation left them.

## 1. Proposed structure

One project entry point stays at the repository root. Everything else that is documentation moves under root `docs/`, in three folders. Original filenames stay, so a later `git mv` keeps history attached to the same basename.

```text
README.md                                      start here only
DOCUMENTATION-CONSOLIDATION-PLAN.md            this plan, until the move is finished
docs/
  current/                                     what to follow now
    project-plan.md
    homepage-structure.md                      filename change: was CONCEPT-B-APPROVED-STRUCTURE.md
    implementation-plan.md                     filename change: was IMPLEMENTATION_PLAN.md
    implementation-checklist.md                filename change: was IMPLEMENTATION_CHECKLIST.md
    visual-system.md
    inspiration-analysis.md
    sections/
      old-hong-kong.md                         filename change: was implementation.md
      文記落單體驗.md
      文記十大.md
      你揀，文記煮.md
      founder-recognition.md                   filename change: was implementation.md
      locations-footer.md                      filename change: was implementation.md
  reference/                                   authoritative for one subject, not the workflow index
    content-register.md
    asset-manifest.md
    hero-media-handoff.md                      filename change: was PROJECT-HANDOFF.md
    github-issues-guide.md
    rebuild-brief.md                           filename change: was BRIEF.md
    visual-analysis.md                         filename change: was analysis.md
    visual-generation-standards.md
    order-pass/
      implementation.md
      cinemagraph-plan.md
      final-photo-regeneration.md
      foundation-brief.md
  archive/                                     superseded instructions, kept verbatim
    site-architecture.md
    production-roadmap.md
    wireframe-review.md
    review-checklist.md
    motion-storyboard.md
    website-section-index.md                   filename change: was website/IMPLEMENTATION_CHECKLIST.md
```

Two paths stay outside `docs/` on purpose:

- `website/README.md` stays. `website/tests/routes.test.mjs` reads that file and requires the words “SIL Open Font License”. Moving or rewriting it would edit the website.
- `.cursor/rules/` stays. See section 7.

Filename changes are limited to files whose current name is generic (`implementation.md`) or whose name is a root-level shout that would be confusing inside a folder. Chinese section titles keep their filenames.

`docs/current/homepage-structure.md` is a move of `CONCEPT-B-APPROVED-STRUCTURE.md`, not a rewrite. The same rule applies to every other renamed file.

### How the three classes are used

- **current** — read this before the next website decision.
- **reference** — authoritative for one subject (facts, rights, assets, Hero media, a standard, or a deferred plan). Not optional history, and not the place that sets workflow order.
- **archive** — superseded production instructions. Keep the text. Do not choose the next task from it. Do not copy facts out of it when `content-register.md` already holds them.

### What the folders do not do

- They do not merge the registers, the Hero handoff, or the section plans into the implementation plan.
- They do not approve the draft in `visual-system.md`.
- They do not reopen Typography Lock, Founder, Recognition, Locations, or Footer.
- They do not create the missing files named only as history in `PRODUCTION_ROADMAP.md`: `TECHNICAL_PLAN.md`, `CONTENT_MAP.md`, and `CURSOR_BUILD_PROMPT.md`.

## 2. File table

“References” lists Markdown and rule files in this inventory that name the current path. Application-code mentions are included where a move would break a path that must stay valid.

| Current path | Proposed destination | Class | Reason | Referenced by |
|---|---|---|---|---|
| `CONCEPT-B-APPROVED-STRUCTURE.md` | `docs/current/homepage-structure.md` | current | Current nine-part homepage order, navigation, language, and safeguards. | `IMPLEMENTATION_PLAN.md`, `IMPLEMENTATION_CHECKLIST.md`, `PROJECT-HANDOFF.md`, `website/docs/project-plan.md`, `website/docs/visual-system.md`, `GITHUB_ISSUES_GUIDE.md`, `PRODUCTION_ROADMAP.md`, `SITE_ARCHITECTURE.md` |
| `IMPLEMENTATION_PLAN.md` | `docs/current/implementation-plan.md` | current | Approved Next.js architecture, issue history, and the 14 October 2026 visual-phase addendum. | `CONCEPT-B-APPROVED-STRUCTURE.md`, `IMPLEMENTATION_CHECKLIST.md`, `PROJECT-HANDOFF.md`, `website/docs/project-plan.md`, `website/docs/visual-system.md`, `GITHUB_ISSUES_GUIDE.md`, `PRODUCTION_ROADMAP.md`, `SITE_ARCHITECTURE.md` |
| `IMPLEMENTATION_CHECKLIST.md` | `docs/current/implementation-checklist.md` | current | Gate record. Visual work is paused at the Typography Lock. Unresolved items stay open. | `CONCEPT-B-APPROVED-STRUCTURE.md`, `IMPLEMENTATION_PLAN.md`, `website/docs/project-plan.md`, `GITHUB_ISSUES_GUIDE.md`, `PRODUCTION_ROADMAP.md`, `.cursor/rules/homepage-one-part.mdc` |
| `website/docs/project-plan.md` | `docs/current/project-plan.md` | current | Current visual workflow and the Typography Lock pause. | `IMPLEMENTATION_PLAN.md`, `IMPLEMENTATION_CHECKLIST.md`, `CONCEPT-B-APPROVED-STRUCTURE.md`, `PROJECT-HANDOFF.md`, `CONTENT_REGISTER.md`, `website/docs/visual-system.md`, `website/docs/inspiration-analysis.md` |
| `website/docs/visual-system.md` | `docs/current/visual-system.md` | current | Explicit draft until the Typography Lock. It is the active type proposal, not an approved system. | `IMPLEMENTATION_PLAN.md`, `CONTENT_REGISTER.md`, `website/docs/project-plan.md`, `website/README.md` |
| `website/docs/inspiration-analysis.md` | `docs/current/inspiration-analysis.md` | current | Pacing and motion budget. Workflow order already defers to the project plan. | `IMPLEMENTATION_PLAN.md`, `website/docs/project-plan.md`, `website/docs/visual-system.md`, `website/docs/analysis.md`, `website/docs/sections/old-hong-kong/implementation.md`, `website/docs/sections/founder-recognition/implementation.md`, `website/docs/sections/locations-footer/implementation.md` |
| `website/docs/sections/old-hong-kong/implementation.md` | `docs/current/sections/old-hong-kong.md` | current | Section plan for `舊式香港` inside `SensoryTrio`. | `website/docs/project-plan.md` (by the `docs/sections/*` rule) |
| `website/docs/sections/how-to-order/文記落單體驗.md` | `docs/current/sections/文記落單體驗.md` | current | Section plan for the compact 湯 → 麵 → 餸 rail. | `IMPLEMENTATION_PLAN.md`, `website/IMPLEMENTATION_CHECKLIST.md` |
| `website/docs/sections/top-ten/文記十大.md` | `docs/current/sections/文記十大.md` | current | Section plan for `文記十大` and the in-section order form. | `website/docs/project-plan.md` (by the `docs/sections/*` rule) |
| `website/docs/sections/order-pass/你揀，文記煮.md` | `docs/current/sections/你揀，文記煮.md` | current | Section plan for the approved static photograph. The cinemagraph stays deferred. | `ASSET_MANIFEST.md`, `website/IMPLEMENTATION_CHECKLIST.md`, `website/docs/sections/order-pass/implementation.md`, `website/docs/sections/order-pass/foundation-brief.md` |
| `website/docs/sections/founder-recognition/implementation.md` | `docs/current/sections/founder-recognition.md` | current | Section plan. Not visual approval, and not publication clearance. | `website/docs/project-plan.md` |
| `website/docs/sections/locations-footer/implementation.md` | `docs/current/sections/locations-footer.md` | current | Section plan. Not visual approval. | `website/docs/project-plan.md` (by the `docs/sections/*` rule) |
| `CONTENT_REGISTER.md` | `docs/reference/content-register.md` | reference | Factual evidence, permissions, and the pending-publication review. Must stay a separate register. | `IMPLEMENTATION_PLAN.md`, `IMPLEMENTATION_CHECKLIST.md`, `website/docs/project-plan.md`, `website/docs/visual-system.md`, `ASSET_MANIFEST.md`, `BRIEF.md`, `SITE_ARCHITECTURE.md` |
| `ASSET_MANIFEST.md` | `docs/reference/asset-manifest.md` | reference | Asset provenance. Keeps the Hero bowl and the `你揀，文記煮` photograph distinct. | `IMPLEMENTATION_PLAN.md`, `IMPLEMENTATION_CHECKLIST.md`, `website/docs/project-plan.md`, `website/docs/visual-system.md` |
| `PROJECT-HANDOFF.md` | `docs/reference/hero-media-handoff.md` | reference | Separate Hero-media workstream. Port 4500 and the proof board stay lab context. | `IMPLEMENTATION_PLAN.md`, `IMPLEMENTATION_CHECKLIST.md`, `website/docs/project-plan.md`, `website/docs/visual-system.md`, `ASSET_MANIFEST.md`, `PRODUCTION_ROADMAP.md` |
| `GITHUB_ISSUES_GUIDE.md` | `docs/reference/github-issues-guide.md` | reference | Issue workflow. The line that the repository is still “to be confirmed” is stale and must not be treated as a new decision. | `IMPLEMENTATION_PLAN.md`, `IMPLEMENTATION_CHECKLIST.md`, `CONCEPT-B-APPROVED-STRUCTURE.md` |
| `BRIEF.md` | `docs/reference/rebuild-brief.md` | reference | Early brief. Holds owner-confirmed shopfront evidence beside superseded 3D proposals. Do not fold it into the content register. | No inbound Markdown link in this inventory |
| `website/docs/analysis.md` | `docs/reference/visual-analysis.md` | reference | Historical visual rationale still cited by section plans. Not the workflow index. | `website/docs/project-plan.md`, `website/docs/visual-system.md`, `website/docs/sections/top-ten/文記十大.md`, `website/docs/sections/locations-footer/implementation.md` |
| `website/docs/visual-generation-standards.md` | `docs/reference/visual-generation-standards.md` | reference | Standing ban on synthetic texture for generated photographs. | `website/docs/sections/order-pass/你揀，文記煮.md`, `website/docs/sections/order-pass/final-photo-regeneration.md` |
| `website/docs/sections/order-pass/implementation.md` | `docs/reference/order-pass/implementation.md` | reference | Short pointer to the section plan, the cinemagraph plan, and the photo record. | No inbound Markdown link |
| `website/docs/sections/order-pass/cinemagraph-plan.md` | `docs/reference/order-pass/cinemagraph-plan.md` | reference | Deferred motion plan. Not current website work. | `website/docs/sections/order-pass/你揀，文記煮.md`, `website/docs/sections/order-pass/implementation.md`, `website/docs/sections/order-pass/final-photo-regeneration.md` |
| `website/docs/sections/order-pass/final-photo-regeneration.md` | `docs/reference/order-pass/final-photo-regeneration.md` | reference | Provenance of the approved still. Not a licence to regenerate it. | `website/docs/sections/order-pass/implementation.md` |
| `website/docs/sections/order-pass/foundation-brief.md` | `docs/reference/order-pass/foundation-brief.md` | reference | Completed Gate 1 record. It does not authorise a production edit. | No inbound Markdown link |
| `website/README.md` | unchanged | reference | Application command card. The test suite reads it. Its font paragraph is not a Typography Lock and must not be rewritten in the move. | `website/tests/routes.test.mjs` |
| `SITE_ARCHITECTURE.md` | `docs/archive/site-architecture.md` | archive | Already marked superseded on 9 October 2026. Nine-act homepage, `/story/`, `/locations/`, and a 3D bowl are not current. | No inbound Markdown link |
| `PRODUCTION_ROADMAP.md` | `docs/archive/production-roadmap.md` | archive | Already marked superseded on 9 October 2026. | No inbound Markdown link |
| `WIREFRAME_REVIEW.md` | `docs/archive/wireframe-review.md` | archive | Concept A/B wireframe scoring, including the 3D bowl and edge rail. | No inbound Markdown link |
| `REVIEW_CHECKLIST.md` | `docs/archive/review-checklist.md` | archive | 7 October 2026 wireframe gate. Navigation labels and the 3D bowl are not current. Shopfront facts already live in the content register. | No inbound Markdown link |
| `MOTION_STORYBOARD.md` | `docs/archive/motion-storyboard.md` | archive | ScrollCraft acts and a shared 3D bowl. Not the current homepage. | No inbound Markdown link |
| `website/IMPLEMENTATION_CHECKLIST.md` | `docs/archive/website-section-index.md` | archive | Partial section index. Its note that ordering-section slip motion is still open is superseded. Do not merge it into the root checklist. | No inbound Markdown link |

Outside this move, and left untouched:

- `.cursor/rules/homepage-one-part.mdc`
- `.cursor/rules/homepage-checks.mdc`
- `.cursor/rules/small-type-edits.mdc`
- Hero-lab files cited by `PROJECT-HANDOFF.md` under `scrollcraft/`
- `C:\Users\gavin\.codex\skills\surface-texture-transfer\SKILL.md`

## 3. Root `README.md`

There is no root `README.md` today. A later pass may add one. It is the only “start here” document. It does not absorb the other files.

Proposed contents, in this order:

1. What this repository is: 文記車仔麵 / Man Kee Cart Noodles. Production app: `website/`. Git root: `Mankee/`.
2. Start path: read `docs/current/project-plan.md`, then `docs/current/homepage-structure.md`. Stop there unless the task needs another file.
3. Current pause: visual implementation is paused at the Typography Lock. Founder, Recognition, Locations, and Footer are not visually approved.
4. Homepage order, as a list of names only, pointing at `docs/current/homepage-structure.md` for the rules.
5. Where facts live: `docs/reference/content-register.md`. Where assets live: `docs/reference/asset-manifest.md`. Where Hero media lives: `docs/reference/hero-media-handoff.md`.
6. A map of `docs/current/`, `docs/reference/`, and `docs/archive/`, with one line of purpose per folder.
7. How to run the site: one line pointing at `website/README.md`. Commands stay in that file.
8. What not to do: do not follow `docs/archive/`, do not treat `docs/current/visual-system.md` as approved, do not start port 4500, do not generate paid Hero video from the handoff’s lab steps.

The README does not restate prices, hours, quotations, font stacks, or clearance.

## 4. Merge rules

### Must remain separate

- `content-register.md` — evidence and publication status.
- `asset-manifest.md` — provenance. The Hero recipe and the `你揀，文記煮` photograph stay in this file, not in the homepage structure.
- `hero-media-handoff.md` — Hero-lab workstream.
- `implementation-plan.md` — Next.js architecture and the dated addendum.
- `project-plan.md` — visual workflow only.
- `homepage-structure.md` — order, navigation, language, and safeguards.
- `visual-system.md` — draft type proposal.
- `inspiration-analysis.md` — pacing. It does not become the workflow.
- `visual-generation-standards.md` — the texture ban.
- Each file under `docs/current/sections/` — one section, one plan.
- `cinemagraph-plan.md`, `final-photo-regeneration.md`, and `foundation-brief.md` — deferred motion, still provenance, and a closed gate. Merging them into the section plan would hide which instruction is current.
- `rebuild-brief.md` — early evidence mixed with superseded proposals. Merging it into the content register would blur that distinction.
- Every file in `docs/archive/` — history stays in its own file.
- `website/README.md` — application card, held in place by a test.
- `.cursor/rules/` — editor rules, not project documentation.

### Can be merged later, only after a separate review

- `docs/reference/order-pass/implementation.md` into the top of `docs/current/sections/你揀，文記煮.md` as a short “related records” list. It is already only a pointer. Do that only after every inbound link is updated, and do not bring the cinemagraph or regeneration bodies with it.
- The future root `README.md` may list the six section paths. That list replaces the role of `website/IMPLEMENTATION_CHECKLIST.md`. The old file still moves to `docs/archive/` intact. It is not pasted into the README.

Nothing else is a safe merge. In particular, do not merge the implementation plan with the project plan, the content register with the asset manifest, or the archive into a single history file.

## 5. Link-update checklist

Do this only in the execution pass. Update links inside Markdown. Do not edit application code to satisfy this list.

- [ ] `git mv` each row in the table. Do not copy-and-delete.
- [ ] Leave a permanent stub at `IMPLEMENTATION_CHECKLIST.md` whose only job is to point at `docs/current/implementation-checklist.md`. `.cursor/rules/homepage-one-part.mdc` names that root path and must not be edited.
- [ ] Leave a permanent stub at `website/docs/visual-system.md` pointing at `docs/current/visual-system.md`. `website/README.md` links to `docs/visual-system.md` and must not be edited.
- [ ] Leave temporary stubs at every other old path. Each stub is a title plus the new path. Remove a temporary stub only when a search for the old path is clean.
- [ ] Rewrite links in `docs/current/implementation-plan.md` to the new project-plan, visual-system, inspiration, homepage-structure, checklist, content-register, asset-manifest, hero handoff, issues guide, and `文記落單體驗` paths.
- [ ] Rewrite links in `docs/current/project-plan.md` away from root filenames and `docs/...` paths that were relative to `website/`.
- [ ] Rewrite links in `docs/current/homepage-structure.md`, `docs/current/implementation-checklist.md`, `docs/current/visual-system.md`, `docs/current/inspiration-analysis.md`, and `docs/reference/content-register.md`.
- [ ] Rewrite section-plan links that still say `docs/inspiration-analysis.md`, `docs/analysis.md`, `docs/visual-generation-standards.md`, `docs/project-plan.md`, or `docs/sections/...`.
- [ ] Rewrite order-pass links among `你揀，文記煮.md`, `cinemagraph-plan.md`, `final-photo-regeneration.md`, `foundation-brief.md`, and `implementation.md`.
- [ ] Rewrite archive banners that name `CONCEPT-B-APPROVED-STRUCTURE.md`, `IMPLEMENTATION_PLAN.md`, `IMPLEMENTATION_CHECKLIST.md`, `PROJECT-HANDOFF.md`, and `CONTENT_REGISTER.md`.
- [ ] Point `docs/reference/asset-manifest.md` at the new handoff, content register, and `你揀，文記煮` plan.
- [ ] Point `docs/reference/github-issues-guide.md` at the new structure, plan, and checklist. Do not “fix” the stale repository sentence in that same pass.
- [ ] Search the repo for `CONCEPT-B-APPROVED-STRUCTURE.md`, `IMPLEMENTATION_PLAN.md`, `PROJECT-HANDOFF.md`, `CONTENT_REGISTER.md`, `ASSET_MANIFEST.md`, `BRIEF.md`, `website/docs/`, and `docs/sections/`.
- [ ] Confirm the only remaining hits are the two permanent stubs, `website/README.md`, `.cursor/rules/homepage-one-part.mdc`, and archive files that mention a name as history.
- [ ] Do not update `website/tests/routes.test.mjs`. It must keep reading `website/README.md`.

## 6. Rollback and verification

- [ ] Before the move, record `git status` and `git rev-parse HEAD`. The tree must be clean, or the move waits.
- [ ] Make the move its own commit. Do not mix it with wording changes.
- [ ] If a stub or link is wrong, `git revert` that commit. Do not `git reset --hard`, and do not rewrite history.
- [ ] After the move, `git log --follow` on `docs/reference/content-register.md`, `docs/reference/asset-manifest.md`, `docs/reference/hero-media-handoff.md`, and `docs/current/implementation-plan.md` still shows the pre-move history.
- [ ] Diff the moved files with `-M` and confirm the only intended text changes are link paths and stub files.
- [ ] Confirm no file under `website/src/`, `website/public/`, `website/tests/`, `website/package.json`, or `.env` changed.
- [ ] Confirm `.cursor/rules/` is byte-for-byte unchanged.
- [ ] Confirm `website/README.md` is byte-for-byte unchanged.
- [ ] Open the root README map and check that every current file is linked once.
- [ ] Read `docs/current/project-plan.md` and confirm the Typography Lock is still the pause.
- [ ] Read `docs/current/homepage-structure.md` and confirm the nine-part order is unchanged.
- [ ] Read the pending-publication review in `docs/reference/content-register.md` and confirm it still grants no clearance.
- [ ] Confirm `docs/archive/` is not linked from the README as a place to implement from.
- [ ] Search for a deleted path. A missing file fails the pass. Archive files must still exist.

## 7. Unchanged by design

This consolidation, when executed as written, does not change:

- `.cursor/rules/homepage-one-part.mdc`
- `.cursor/rules/homepage-checks.mdc`
- `.cursor/rules/small-type-edits.mdc`
- Application code, tests, styles, fonts, or `website/package.json`
- `website/README.md`
- Assets, Hero media, or generated photographs
- Environment files, including `.env`
- Git history. Moves use `git mv`. No history rewrite.

The two permanent stubs exist so those unchanged rules and the unchanged website README keep a valid path.

## Counts

| Class | Number |
|---|---|
| current | 12 |
| reference | 12 |
| archive | 6 |
| Markdown files in this inventory | 30 |

`website/README.md` is one of the 12 reference files and does not move. The three `.cursor/rules` files are not part of the 30.
