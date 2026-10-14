# 文記 homepage — visual system

Status: **fonts locked 14 Oct 2026 — type scale and chapter colours still draft**  
Updated: 14 Oct 2026

The Typography Lock in `docs/current/project-plan.md` was approved on 14 Oct 2026. The font roles below are production direction and win over any section-level font instruction. The type scale, display weights and chapter colours remain drafts until their own gates pass.

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

## Recognition content limits

- Text-only until a visitor photograph's reuse permission is recorded in `docs/reference/content-register.md`. Card layouts keep a slot so a cleared photograph can be added without restructuring.
- One short factual line per visitor, drawn only from what `docs/reference/content-register.md` supports. No quotations, no endorsement, recommendation or sponsorship wording.
