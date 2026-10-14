# GitHub Issues Guide — Mankee Website

Status: adopted from the Meridian CPA workflow and adapted for Mankee. Meridian repository details and project-specific instructions do not apply here.

## Project reference

| Field | Value |
|---|---|
| Repository | **To be confirmed before the first production issue is created** |
| Production directory | `website/` |
| Planning root | `C:\Users\gavin\OneDrive\Desktop\Mankee` |
| Source structure | `docs/current/homepage-structure.md` |
| Implementation plan | `docs/current/implementation-plan.md` |
| Implementation checklist | `docs/current/implementation-checklist.md` |

Never create Mankee issues in `gavinfung321/Meridian-CPA`.

## Core rule

Every production-code change must be traceable to a GitHub Issue.

- Before code: search for or create the relevant issue.
- At start: post a brief starting-work comment.
- During work: record blockers, pivots and scope changes.
- At completion: verify acceptance criteria, post a summary and close the issue.

Planning discussions and private wireframe exploration may occur before a repository exists, but Cursor must not start the production application until the repository and first issue are confirmed.

## Issue lifecycle

```text
OPEN → IN PROGRESS → REVIEW → DONE
```

| Stage | Required action |
|---|---|
| Open | Issue has a complete body, label and milestone |
| In progress | Add a starting-work comment and use an issue branch |
| Review | Verify acceptance criteria and record checks performed |
| Done | Add a closing summary, identify follow-ups and close the issue |

## Required issue format

### Title

`[Type]: Short, clear description`

Allowed types include Feature, Design, Bug, Enhancement, Accessibility, Content, Media, SEO, Performance, Documentation and Chore.

### Body

```markdown
## Summary
One or two sentences describing the outcome.

## Context
Why this work is needed and which approved document or prior issue it follows.

## Acceptance Criteria
- [ ] Observable criterion 1
- [ ] Observable criterion 2
- [ ] Required responsive, accessibility or reduced-motion criterion

## Notes
- Dependencies and blocked decisions
- Content, asset or rights constraints
- Explicit out-of-scope work
```

Acceptance criteria describe observable outcomes, not vague activities such as “make it better.”

## Labels

Every issue receives at least one label. Create missing labels only after checking the repository.

| Label | Use |
|---|---|
| `feature` | New user-visible functionality |
| `bug` | Broken behavior |
| `enhancement` | Improvement to existing behavior |
| `design` | Visual or interaction-system work |
| `accessibility` | Keyboard, screen-reader, contrast or reduced-motion work |
| `content` | Copy, structured records or operational information |
| `media` | Photography, video or Hero asset work |
| `seo` | Metadata, structured data or discoverability |
| `performance` | Loading, rendering or bundle improvements |
| `documentation` | Plans, guides and developer documentation |
| `chore` | Tooling, configuration and dependencies |
| `question` | Decision required before implementation |
| `blocked` | Cannot proceed until a named dependency is resolved |

## Milestones

Use only an existing fitting milestone. Create a new milestone only for a genuinely new project phase.

- `v0.1 — Planning & Foundation`
- `v0.2 — Static Experience`
- `v0.3 — Interaction & Accessibility`
- `v0.4 — Content & Media Approval`
- `v1.0 — Launch Ready`

## Branches and commits

- Feature: `feat/issue-ID-short-description`
- Fix: `fix/issue-ID-short-description`
- Documentation: `docs/issue-ID-short-description`
- Chore: `chore/issue-ID-short-description`

Commit format:

```text
[#ISSUE_ID] Clear imperative summary
```

Do not combine unrelated issues in one branch. Do not silently expand scope.

## Starting-work comment

```markdown
Starting work on this issue.

Approach:
- [brief step]
- [brief step]

I will keep the work inside the stated acceptance criteria and record any blocker or scope change here.
```

## Blocker or scope-change comment

```markdown
Blocked / scope change:

- Current condition: [what happened]
- Impact: [which acceptance criterion is affected]
- Proposed resolution: [next action or required decision]

No additional scope will be implemented until it is recorded in this issue or a follow-up issue.
```

## Closing comment

```markdown
Completed.

Implemented:
- [result]
- [result]

Verified:
- [test or manual check]
- [acceptance criterion confirmation]

Follow-ups:
- [issue link or “None”]
```

## Mankee-specific safeguards

- No paid video generation or final Hero replacement without explicit owner approval.
- No unapproved proof merge or use of rejected Hero foundations.
- No review, lab or reference-only asset is promoted to production without provenance and permission review.
- No prices, hours, locations, awards or endorsements are guessed.
- Third-party screenshots remain private references unless usage is cleared.
- Reduced motion and mobile behavior belong in the original feature issue, not an optional cleanup issue.
- A visually complete animation is not complete if the underlying static content or accessibility fails.

## Start-of-session checklist

- [ ] Read the current user request and relevant source-of-truth documents.
- [ ] Check the repository and working tree.
- [ ] Search existing open and closed issues.
- [ ] Identify the correct issue or create a non-duplicate issue.
- [ ] Confirm label and milestone.
- [ ] Post the starting-work comment.
- [ ] Work on the issue branch only.

## End-of-session checklist

- [ ] Verify acceptance criteria.
- [ ] Record tests and review performed.
- [ ] Record blockers or follow-up issues.
- [ ] Add a closing summary when complete.
- [ ] Close only genuinely completed issues.
- [ ] Leave incomplete issues open with a clear status comment.

