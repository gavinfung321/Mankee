# Concept B — Approved Production Structure

Status: approved for the next Concept B revision and Cursor handoff preparation.

Implementation is governed by `IMPLEMENTATION_PLAN.md`, `IMPLEMENTATION_CHECKLIST.md` and the Mankee-specific `GITHUB_ISSUES_GUIDE.md`. Production code must not begin until the checklist's Gate 0 is complete.

## Homepage sequence

1. Hero — `一碗，由這裏開始`
2. Three textures — the same three Hero toppings
   - `香：瑞士雞翼`
   - `厚：上湯花膠`
   - `濃：南乳豬手`
3. How to order — `湯 → 麵 → 餸`（加味屬於揀湯時的自選項目，不另設一步）
4. 文記十大 — the confirmed signature list
5. Completed order-slip transition into the Founder section
6. Founder and Mankee story
7. Recognition — Michelin, 白種元 and 黎芷珊
8. Locations and delivery

The order slip is a transition device, not a separate full-height chapter. It appears during the ordering journey, completes after 文記十大, passes through the service window and disappears before the Founder content.

## Menu and ordering scope

- `/menu/` is an evergreen ordering guide, not a complete price catalogue.
- Explain the real customer experience clearly as three primary steps: choose soup, choose noodles, then choose toppings. Mention curry/satay/spicy flavour as an optional choice within the soup step.
- Show 文記十大 as the confirmed signature selection.
- Do not publish full prices or claim to show every available item.
- Include: `實際供應及選擇以店內餐牌為準。`

## Recognition and press

Homepage recognition is limited to:

1. Michelin recognition
2. 白種元曾到訪文記
3. 黎芷珊曾到訪文記

All other coverage moves to `/press/`. Use sourced facts and approved imagery. Avoid publishing programme or publication screenshots unless usage permission is confirmed.

## Founder section

- Use one approved portrait.
- Use one sourced quotation and a concise factual paragraph.
- Confirm the portrait rights, quotation wording/source and whether the English name should appear before production launch.
- Keep the section calm and documentary rather than creating another motion climax.

## Location hierarchy

- 深水埗 is primary and visually dominant.
- Other locations are secondary.
- Verify addresses, hours, location classification and official Maps/delivery links before launch.

## Production navigation

- 首頁
- 點餐
- 文記十大
- 故事
- 到店／外賣

點餐 opens `/menu/`. The homepage still explains 湯 → 麵 → 餸 for people who are scrolling.

Press is reached from the recognition/story area and does not need a primary-navigation item.

## Top Ten behavior

- Desktop: hover and keyboard focus may change the featured ingredient image.
- Mobile: tap reveals the image and short description.
- No prices or full catalogue.
- State that current availability follows the shop menu.

## Mobile behavior

- Shorter Hero scroll distance.
- No persistent floating order slip.
- Ordering steps stack vertically.
- Top Ten uses tap/accordion behavior.
- Press content becomes a compact list or horizontal swipe.
- No essential information depends on animation.

## Language strategy

- Initial production language: Traditional Chinese.
- Use natural Hong Kong wording.
- English or Simplified Chinese may be added later through a language switcher.
- Do not show an inactive language switcher in the first release.
- Structure content as language-keyed records so additional locales can be introduced without rebuilding components or routes.
- English may still appear where it is part of a proper name, publication name, ingredient label or accessibility metadata.

## Hero status

- Keep the current temporary scrub during Cursor development.
- Treat the Hero media as a replaceable asset with a fixed aspect ratio, timing contract and text-safe area.
- Do not generate paid final video or replace the live Hero until the approved foundation and motion gates pass.

## Production presentation rules

- Remove prototype notes and technical ScrollCraft labels from the production build.
- Use one signature motion idea per section at most.
- Provide reduced-motion alternatives alongside animated behavior.
- Prefer real, sourced and permission-cleared photography for documentary sections.
