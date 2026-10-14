# 文記 homepage — visual system

Status: **fonts locked; colour and spacing roles approved (14 Oct 2026) — type scale and chapter grounds still draft**\
Updated: 14 Oct 2026

The Typography Lock and Stage 2 in `docs/current/project-plan.md` were approved on 14 Oct 2026. The font roles and the Stage 2 colour and spacing roles below are production direction and win over any section-level instruction. The type scale, display weights and per-chapter grounds remain drafts until their own gates pass.

## Order of authority

The root-level precedence in `docs/current/implementation-plan.md` remains authoritative. In particular, `docs/reference/hero-media-handoff.md`, `docs/current/homepage-structure.md`, `docs/reference/content-register.md` and `docs/reference/asset-manifest.md` remain outside `website/` and must be read from the `Mankee/` project root.

Within the current website-design phase:

1. `docs/current/project-plan.md` — workflow, priority and approval status.
2. This file after its approval gate passes — fonts, type scale and chapter colours.
3. `docs/current/inspiration-analysis.md` — pacing and motion budget: one focal point per viewport, peak-and-pause rhythm, signature motion limited to Hero, 文記十大 and the optional bowl cinemagraph.
4. `docs/current/sections/*` — layout and copy requirements for each section.
5. `docs/reference/visual-analysis.md` — historical analysis and rationale.

Typed content in `src/content/zh-HK/*` implements approved facts but does not establish evidence or media permission by itself.

Baseline: Concept B's type and colour system, refined by the inspiration's pacing and restraint.

## Fonts — locked 14 Oct 2026

Exactly two roles, `--font-display` and `--font-text`, defined once in `src/styles/tokens.css` (mirrored in the `@theme` block of `src/app/globals.css`). No component or rule sets a font any other way. `src/lib/fonts.ts` loads the self-hosted files and adds no fallbacks; the order lives only in the two roles. `tests/typography.test.mjs` enforces both stacks.

| Role | Stack | Used for |
| --- | --- | --- |
| Display | `"DFKai-SB"`, `"BiauKai"`, self-hosted LXGW WenKai TC Bold, `"Kaiti TC"`, `serif` | Every heading, the Hero, quotes, names, location names, signature lines |
| Text | self-hosted Noto Sans TC, `"PingFang TC"`, `"Microsoft JhengHei"`, `sans-serif` | Body copy, kickers, labels, buttons, navigation |

- 標楷體 (`DFKai-SB` on Windows, `BiauKai` on macOS) leads the display role to match the Hero. It cannot be self-hosted, so the self-hosted WenKai TC is the stand-in wherever 標楷體 is missing.
- Display weights are not part of the lock. Existing display-role rules below 700, including `.order-steps li`, `.top-ten-feature`, `.top-ten-intro`, `#top-ten .top-ten-dish`, `.founder-context` and `.recognition-ledger p`, stay as they are and are audited centrally in Stage 5 rather than section by section.
- After any copy change, run `npm run fonts -- <dir with NotoSansTC.ttf and LXGWWenKaiTC-Bold.ttf>`. Both files are trimmed to the characters in `src/`; a missing character silently falls back to 微軟正黑體 or PingFang mid-line.

## Type scale

Taken from Concept B. Apply when a section is rebuilt; approved sections are not restructured to meet it.

| Level | Size | Font | Weight | Notes |
| --- | --- | --- | --- | --- |
| Kicker | 12px | Text | 900 | Letter-spacing 0.08–0.2em, optional 2.25rem lacquer rule before it |
| Section heading | clamp(42px, 6vw, 84px) | Display | 700 | Line-height 1, slight negative tracking |
| Quote / feature line | clamp(26px, 3.5vw, 52px) | Display | 700 | Line-height 1.25 |
| Card or location title | clamp(36px, 4.5vw, 64px) | Display | 700 | Line-height 1 |
| Body / lead | 17–18px | Text | 400 | Line-height 1.7 |
| Label / caption | 12–13px | Text | 700 | |

The jump between kicker, heading and body must stay obvious. No middle-sized-everything sections.

## Chapter colours

| Chapter | Ground | Notes |
| --- | --- | --- |
| Hero | Photograph / `#17120e` | Unchanged |
| Founder | Warm cream `#f4efe6` | Ink text, one lacquer rule |
| Recognition | Cream `var(--paper)` | Dark 白種元 card, light 黎芷珊 card, full-width red Michelin band (`#a3191e`, the artwork's own red) |
| Locations | Dark green with cream cards | As Concept B; confirm when Locations is rebuilt |

Lacquer red stays semantic: actions, completion, the Michelin band and kicker rules.

## Stage 2 — colour and spacing roles

**Approved by the owner on 14 Oct 2026.** Audit of `src/app/globals.css` and `src/styles/home.css`. All roles are defined in `src/styles/tokens.css`. Stage 2 made no visual change.

### Owner decisions, 14 Oct 2026

- **Colour roles and near-duplicate destinations** in the table below are approved.
- **`--section-space`:** 64px below `64rem`, 96px from `64rem`. Use it for reopened sections only.
- **Shared lacquer rule:** 2.25rem × 2px, as `--rule-length` and `--rule-weight`.
- **Lacquer small text:** lacquer may be used for small text on a light ground only where contrast is at least 4.5:1.
- **Kicker colour:** `--jade-text` on light grounds, `--gold-bright` on dark grounds.
- **Neighbouring light grounds** for `文記十大`, `你揀，文記煮` and Founder are decided during the Founder redesign.
- **Frozen sections:** kicker colours, `--section-space` and near-duplicate colour merges are not applied to Hero, `舊式香港`, `文記落單體驗`, `文記十大` or `你揀，文記煮` until each is reopened in Stage 4. Reopened and unfinished sections (Founder, Recognition, Locations, Footer) adopt them when they are built.

### Findings

- The brand tokens `--paper`, `--ink`, `--lacquer`, `--jade`, `--noodle` and `--jade-dark` are used about 70 times. `home.css` also carries about 70 raw colour values, mostly near-duplicates of a handful of roles.
- Chapter grounds are all raw values. Three light creams sit next to each other: `文記十大` `#f4efe6`, `你揀，文記煮` `#e9dfcd`, Founder `#f4efe6`. The page itself is `--paper` `#eadcbf`.
- The default `.section-kicker` colour, `--noodle` on `--paper`, is 1.84:1 and fails WCAG AA. Sections currently patch it with raw `#1b4336` jade.
- Lacquer on paper is 3.98:1: acceptable for large text and rules, not for small text. Small lacquer text appears in `.order-slip-card .slip-row b` and `#top-ten .top-ten-count b`.
- The 2.25rem × 2px lacquer rule is written three times: `.section-kicker::before`, `.sensory-handoff::before` and `.founder-label::before`.
- Section vertical padding differs per section: 48px default, 88/80 (`舊式香港`), 72/88 (`你揀，文記煮`), 56/40 (Founder), 96/104 (Recognition). Many inner values are off the 4–96px scale: 5, 6, 10, 14, 18, 20, 22, 28, 36, 56, 72, 80, 88, 104.

### Colour roles

The brand tokens stay. The role tokens take the most-used existing value and are in place. Each near-duplicate moves to its destination token when its section is reopened.

| Token | Value | Role | Approved destination for near-duplicates |
| --- | --- | --- | --- |
| `--cream` | `#fff8ea` | Text on dark grounds and photographs | `#fff1d9`, `#f3e7ce`, `#e8ddce`, `#fff` |
| `--ground-light` | `#f4efe6` | Light chapter ground | `#e9dfcd`, `#f3e6cc` |
| `--ground-sage` | `#e6ead8` | `文記落單體驗` ground | `#eaf0dc` |
| `--ground-dark` | `#1c1712` | Dark chapter ground | `#17120e`, `#1a110d`, `#1d1b18`, `#26211b` |
| `--jade-text` | `#1b4336` | Jade text and kickers on light grounds (9.0:1 on sage) | — |
| `--gold-bright` | `#ffd25d` | Gold on photographs and dark grounds | `#f3c94d`, `#d4b15a` |
| `--ink-muted` | `#5c574e` | Secondary text on light grounds (6.3:1 on cream) | `#5c5348`, `#5e4c38`, `#3f3932` |
| `--michelin` | `#a3191e` | Recognition band only; matches the artwork | — |

Lacquer variants `#c62229` and `#a51e25` merge into `--lacquer` on reopening.

### Spacing roles

- Keep the `--space-4` … `--space-96` scale, `--content: 72rem` and `--measure: 40rem`.
- `--section-space` is the vertical padding for reopened sections: 64px (`--space-64`) below `64rem`, 96px (`--space-96`) from `64rem`.
- Snap off-scale inner values to the scale only when each section is reopened, not in one global sweep.

### Shared treatments

- **Kicker:** `--jade-text` on light grounds, `--gold-bright` on dark grounds, for reopened sections. The lacquer rule sits before it.
- **Rule:** `--rule-length` × `--rule-weight` (2.25rem × 2px) in `--lacquer`. Already used by `.section-kicker::before`, `.sensory-handoff::before` and `.founder-label::before`.
- **Focus:** unchanged. Ink outline with noodle ring on light; noodle outline on dark.
- **Action:** lacquer underline for text links. The nav button merges onto `--ground-dark` and `--lacquer` on reopening.

### Contrast check from source, 14 Oct 2026

Computed from the token values in `src/styles/tokens.css` against WCAG AA.

| Pairing | Ratio | Result |
| --- | --- | --- |
| `--ink` on `--paper` / `--ground-light` / `--ground-sage` | 12.94 / 15.32 / 14.30 | Pass |
| `--ink-muted` on `--paper` / `--ground-light` / `--ground-sage` | 5.29 / 6.26 / 5.85 | Pass |
| `--jade-text` on `--paper` / `--ground-light` / `--ground-sage` | 8.14 / 9.64 / 9.00 | Pass |
| `--gold-bright` on `--ground-dark` / `--jade-dark` | 12.39 / 10.26 | Pass |
| `--cream` on `--ground-dark` / `--jade-dark` / `--michelin` | 16.83 / 13.94 / 7.32 | Pass |
| `--lacquer` small text on `--ground-light` | 4.71 | Pass |
| `--lacquer` small text on `--paper` / `--ground-sage` | 3.98 / 4.40 | Not allowed; large text, rules and marks only (3:1) |
| `--noodle` focus ring against `--ink` outline | 7.02 | Pass (non-text 3:1) |

Existing small lacquer text: `#top-ten .top-ten-count b` on the `#eaf0dc` guide is 4.63:1 and passes. `.order-slip-card .slip-row b` on the `#f3e6cc` slip is 4.37:1 and fails. It is in frozen `文記落單體驗` and is fixed when that section is reopened.

## Recognition content limits

- Text-only until a visitor photograph's reuse permission is recorded in `docs/reference/content-register.md`. Card layouts keep a slot so a cleared photograph can be added without restructuring.
- One short factual line per visitor, drawn only from what `docs/reference/content-register.md` supports. No quotations, no endorsement, recommendation or sponsorship wording.
