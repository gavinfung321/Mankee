# 文記車仔麵

This repository is the Mankee website. The production app is `website/`. Git and project governance run from this directory.

## Start here

1. Read `docs/current/project-plan.md`.
2. Read `docs/current/homepage-structure.md`.
3. Stop, unless the task needs another file named below.

Visual implementation is paused at the Typography Lock. Founder, Recognition, Locations, and Footer are not visually approved.

The homepage order is:

1. Hero
2. `舊式香港`
3. `文記落單體驗`
4. `文記十大`
5. `你揀，文記煮`
6. Founder
7. Recognition
8. Locations
9. Footer

The rules for that order are in `docs/current/homepage-structure.md`.

## Where to look

- Facts and publication status: `docs/reference/content-register.md`
- Asset provenance: `docs/reference/asset-manifest.md`
- Hero media: `docs/reference/hero-media-handoff.md`

## Documentation map

- `docs/current/` — the workflow, homepage structure, architecture, checklist, draft visual system, pacing guide, and section plans.
- `docs/reference/` — evidence, assets, the Hero-media workstream, issue workflow, and deferred order-pass records.
- `docs/archive/` — superseded instructions, kept as history.

## Run the site

Run app commands from this directory or from `website/`. The root `package.json` has no dependencies; it forwards `dev`, `build`, `start`, `test`, `lint` and `format:check` to `website/` with `npm --prefix website`, so `npm run dev` here starts the site at http://localhost:3000/. Install dependencies inside `website/`. Details are in `website/README.md`.

## Leave alone

- Do not implement from `docs/archive/`.
- Do not treat `docs/current/visual-system.md` as an approved font system.
- Do not start port 4500.
- Do not generate paid Hero video from the Hero-lab steps.
