# 報道與推介 — Homepage Source Rail

Status: owner-approved scope and design direction, 14 October 2026. Implementation issue: [#25](https://github.com/gavinfung321/Mankee/issues/25). This plan supersedes the separate `/press/` index direction from issue #8.

## Owner decision

The seven external references collected on the existing Mankee Blogs page belong on the homepage. They are third-party coverage, restaurant guides and directory listings, not Mankee-authored blog posts. The production label is `報道與推介`.

The section sits after Recognition and before Locations. It is a separate `PressRail` chapter with `id="press"`; it does not visually restructure the approved Michelin-first Recognition composition.

## Source set

| Publisher | Display title | Confirmed destination | Homepage treatment |
| --- | --- | --- | --- |
| ELLE | 香港在地人推薦！深水埗必吃街邊美食地圖 | https://www.elle.com/tw/life/travel/g63110243/2026-hongkong-food-map/ | Rail card |
| Time Out Hong Kong | Best cart noodles in Hong Kong | https://www.timeout.com/hong-kong/restaurants/best-cart-noodles-in-hong-kong | Rail card |
| South China Morning Post | Real Hong Kong street food: how cart noodles have survived into the 21st century | https://www.scmp.com/lifestyle/food-drink/article/3077947/real-hong-kong-street-food-how-cart-noodles-have-survived-21st | Rail card |
| UFood | 文記車仔麵 | https://ufood.com.hk/restaurant/news/detail/2254117 | Rail card; do not invent an article title |
| Michelin Guide | Man Kee Cart Noodles (Sham Shui Po) | https://guide.michelin.com/us/en/hong-kong-region/hong-kong/restaurant/man-kei-cart-noodles | Link from the existing Michelin panel, not a duplicate rail card |
| Hong Kong Tourism Board | Man Kee Cart Noodles | https://www.discoverhongkong.com/us/place-to-go/man-kee-cart-noodles.html | Rail card |
| Wanderlog | Man Kee Cart Noodle | https://wanderlog.com/place/details/410396/man-kee-cart-noodle | Rail card |

All external links use `target="_blank"` and `rel="noopener noreferrer"`. Titles may be shortened visually with line clamping, but stored source titles and accessible names remain truthful.

## Composition

Use the responsive multi-card structure of [21st.dev's Carousel with Responsive Basis](https://21st.dev/@sean0205/components/c-carousel-4) as reference only. Do not install ReUI or copy its generic image-card styling.

- Ground, type, rules, focus and controls use the approved Mankee tokens.
- Header: shared kicker/rule treatment, then `報道與推介`.
- Each text-led card contains publisher, source title and `閱讀原文 ↗`.
- Do not republish publisher photography, logos, screenshots, article excerpts or decorative thumbnails without separately recorded permission.
- The rail shows three cards at desktop, two at tablet and approximately 1.1 cards at mobile so continuation is visible.
- Previous and next buttons sit beside the heading or rail edge without covering content.
- No autoplay, infinite loop, pagination dots, marquee, 3D effect, gradient, shadow-heavy card treatment or essential animation.

## Interaction and fallback

- Prefer native horizontal overflow and CSS scroll snap with a small client enhancement for previous/next controls; add no carousel dependency unless the issue records a justified scope change.
- Touch and trackpad scrolling remain native.
- Arrow controls are at least 44px, have meaningful accessible names and disable truthfully at the ends.
- Keyboard users can reach every source link in document order. Focus remains visible and is never moved automatically.
- With JavaScript disabled, all six rail links remain visible in a horizontally scrollable or wrapping list.
- Reduced motion removes smooth animated scrolling; no information depends on motion.

## Route and navigation changes

- The existing Michelin panel becomes a direct external link to the Michelin Guide without changing its approved hierarchy or composition.
- Retire `其他報道 →`; the following `PressRail` section supplies the destination instead.
- Footer `報道` points to `/#press`.
- `/press/` redirects to `/#press` so existing bookmarks do not break. It no longer renders a separate index.

## Content and rights rules

- The seven URLs above were confirmed from the owner-supplied existing Blogs page on 14 October 2026.
- A public webpage is evidence for a link, not permission to copy its media or article text.
- Do not repeat historic prices, branch counts, hours or endorsements contained in old articles.
- Keep `Michelin > 白種元 > 黎芷珊` as the approved Recognition hierarchy.
- Founder, Locations and Footer stay frozen and outside this redesign.

## Acceptance gate

- [ ] Section order is Recognition → 報道與推介 → Locations → Footer.
- [ ] Michelin links once from its approved panel; the other six confirmed sources appear once in the rail.
- [ ] Desktop 1440px, tablet 1024px and mobile 390px are visually approved.
- [ ] Touch, mouse, trackpad and keyboard operation pass.
- [ ] No-JavaScript and reduced-motion presentations retain all links.
- [ ] No unapproved third-party image, logo, screenshot or excerpt ships.
- [ ] Footer anchor and `/press/` redirect resolve correctly.
- [ ] Focused tests, ESLint, type-check and production build pass.

## Current next step

Implement issue #25 from this plan. Stop for owner review after the static desktop, tablet and mobile composition is available; do not begin Stage 4 Hero review until this owner-directed addition is approved and checkpointed.
