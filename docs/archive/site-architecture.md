# Mankee Website Architecture

Status: Historical. Superseded for production on 9 October 2026 by GitHub issue [#1](https://github.com/gavinfung321/Mankee/issues/1).

Production does not follow this draft. These instructions in this file are superseded by `docs/current/homepage-structure.md` and `docs/current/implementation-plan.md`:

- The nine-section homepage, including 一碗香港, 靜候一刻, and 一條麵，連起兩代.
- Primary navigation labels 菜單 and 分店, and the noodle-divider navigation.
- Assumed routes `/story/` and `/locations/`.
- ScrollCraft plus a Three.js bowl as the production engine.
- Homepage recognition that adds the Hong Kong Tourism Board beside Michelin, 白種元, and 黎芷珊.
- A menu page that publishes prices or presents a complete catalogue.

Open facts are recorded in `docs/reference/content-register.md` and must not render as confirmed. The body below is retained as planning history.

Primary language: Traditional Chinese for Hong Kong (`zh-HK`).

Creative system: ScrollCraft Split Stage, contrasting old Hong Kong cart-noodle culture with Mankee carrying that tradition forward today. Both sides are anchored in the Sham Shui Po main store.

## 1. Architecture decision

Build an immersive homepage supported by three practical content pages. The homepage carries the emotional brand story. The supporting pages make menu and location information easy to find, link and update without forcing visitors to replay the scroll experience.

Sham Shui Po is the narrative centre, primary visual source and default location outcome. Tsim Sha Tsui remains fully findable as a collaboration location, but it does not receive equal historical weight and is not used to represent the future of the brand.

This structure serves both first-time visitors and regular customers:

- First-time visitors receive the full heritage-to-future story on the homepage.
- Returning customers can go directly to 菜單 or 分店.
- Search engines and map visitors receive stable URLs with semantic text.
- Reduced-motion visitors receive the same content without empty pinned sections.

## 2. Primary navigation

Approved labels:

1. 首頁
2. 菜單
3. 文記故事
4. 分店

There is no separate 搵間文記 item.

### Desktop navigation treatment

The fixed noodle divider is the homepage chrome. It carries the Mankee mark, the two stage labels and four accessible navigation stops. The selected stop moves along the divider as the visitor progresses.

This is not a conventional floating navigation bar. Opening the navigation exposes all four labels with a visible current-page state and keyboard focus.

### Mobile navigation treatment

The desktop vertical divide becomes a horizontal noodle ribbon. A compact 選單 control attached to that ribbon opens the same four navigation items in a full-width sheet. The control remains readable, reachable and independent of motion.

### Supporting-page navigation

菜單, 文記故事 and 分店 use a simpler sticky header with the same four labels. The immersive divider is reserved for the homepage so practical pages remain fast and easy to scan.

## 3. Sitemap

```text
/
├── 一碗香港                         old Hong Kong culture and its continuation
├── 碗內主角                         signature food and appetite-led close-ups
├── 任你配搭                         menu system introduction
├── 本店十大必食                     signature dishes
├── 創辦人故事                       cultural purpose and human voice
├── 靜候一刻                         authored silence before the peak
├── 一條麵，連起兩代                 3D emotional peak
├── 名人之聲                         白種元, 黎芷珊 and verified recognition
└── 分店                             Sham Shui Po and Tsim Sha Tsui

/menu/
├── 麵底
├── 配料
├── 十大必食
├── 小食
└── 飲品

/story/
├── 車仔麵文化
├── 福榮街與文記
├── 傳統落單方式
├── 現代傳送帶體驗
└── 認可與報導

/locations/
├── 深水埗                             main store and default location
│   ├── connected shopfronts: 109, 115, 121 and 123C Fuk Wing Street
│   ├── daily hours: 11:00–04:00
│   ├── map and transport
│   └── branch-specific delivery links
└── 尖沙咀                             collaboration location
    ├── Harbour City / Gateway Arcade details
    ├── confirmed hours
    ├── map and transport
    └── branch-specific delivery links

/privacy/                            add only if analytics or forms require it
```

## 4. Homepage information order

| Order | Section | Visitor learns | Primary content |
|---|---|---|---|
| 1 | 一碗香港 | Mankee continues a living old Hong Kong cart-noodle tradition | Split hero, old Hong Kong visual language and present-day Sham Shui Po |
| 2 | 碗內主角 | Mankee's food is the reason to continue | Signature toppings, texture and close-up preparation |
| 3 | 任你配搭 | Choice is the core of the cart-noodle experience | Noodle bases, toppings, soup and sauce structure |
| 4 | 本店十大必食 | Visitors receive an appetising starting point | Owner-supplied ten-item list and real photography |
| 5 | 創辦人故事 | The tradition has a human reason to continue | 黃志強 portrait, role and sourced line about cherishing local food establishments |
| 6 | 靜候一刻 | The page pauses before its largest transformation | Steam, menu strips and restrained noodle tension |
| 7 | 一條麵，連起兩代 | The remembered food resolves into one bowl | Shared 3D hero bowl, physical noodle and remembered ingredients |
| 8 | 名人之聲 | Documented visits and recognition support trust without replacing the food story | 白種元, 黎芷珊, Michelin and HKTB, with rights-safe treatment |
| 9 | 到店／外賣 | The visitor can now act | Location selection, hours, navigation and branch-specific Keeta/Foodpanda delivery links |

## 5. Supporting pages

### 菜單

The menu is semantic HTML, not a photograph of the board. The visual language may borrow the board's red, yellow, black, vertical labels and dense market energy.

Initial filters:

- 麵底
- 配料
- 十大必食
- 小食
- 飲品

Each item can carry Chinese name, price, category, branch availability, spice level and allergen notes. Filters update the visible list without changing the URL requirement for basic content access.

Until the complete topping transcription is confirmed, the page can launch with verified categories, noodle bases, the ten recommendations and clearly read featured snacks. Unverified small-print items do not enter production content.

### 文記故事

This is an editorial page rather than a second animation showcase. It supports the homepage with fuller history, photographs, captions and source-backed recognition.

Required content blocks:

- Cart-noodle context in Hong Kong.
- Mankee on Fuk Wing Street.
- How the four connected shopfronts operate.
- Traditional ordering and how Mankee continues the experience today.
- Verified awards and media references.
- Founder or team story when owner material is supplied.

### 分店

Treat 深水埗 as one location with four connected shopfront addresses. Do not render four separate branch cards. Its approved public label is 「深水埗店」. It appears first, larger and selected by default.

Treat 尖沙咀 as a supporting collaboration location inside the mall. It receives complete practical information but does not share equal visual prominence with the main store. Its approved public label is 「尖沙咀店」; the collaboration relationship remains internal context unless separately approved for public copy.

Each location record includes:

- Chinese and English display name.
- Full address and connected-shopfront explanation where relevant.
- Opening hours and last order.
- Telephone.
- Dining format.
- MTR and accessibility guidance.
- Map link.
- Foodpanda and Keeta links.
- Exterior photograph.

Location-specific actions are 地圖導航 and 外賣落單. They appear only after the visitor selects a location.

## 6. Visitor journeys

### Regular Hong Kong diner

首頁 or 菜單 -> review dish or price -> 到店／外賣 -> 深水埗 appears first -> choose 到店導航, Keeta or Foodpanda -> optionally choose 尖沙咀 when its operational links are confirmed.

### Visitor to Hong Kong

首頁 -> understand the traditional/modern story -> 十大必食 -> 分店 -> transport guidance and map.

### Media or partner

文記故事 -> verified recognition -> official brand/contact information.

## 7. Content model

Keep operational data outside page templates so Cursor can update it without editing animation code.

```text
content/
├── site.zh-HK.json
├── locations.json
├── menu.json
├── story.json
└── recognition.json
```

The homepage reads from the same menu and location records as the practical pages. No price, hour or address is hard-coded inside the animation component.

## 8. Technical architecture

Recommended implementation:

- Astro with TypeScript for static delivery, SEO and content routes.
- ScrollCraft engine for scroll progress, cues, reveals, parallax and verification.
- Three.js only for the bowl and noodle peak, loaded immediately before that section.
- CSS and genuine alpha imagery for hero depth and ingredient layers.
- JSON or typed TypeScript content records for menu, locations and recognition.
- AVIF/WebP images with responsive sources and separately framed phone assets.
- No CMS for the first build unless Mankee expects frequent non-technical updates.

Suggested source shape:

```text
src/
├── components/
│   ├── navigation/
│   ├── homepage/
│   ├── menu/
│   └── locations/
├── content/
├── layouts/
├── pages/
│   ├── index.astro
│   ├── menu.astro
│   ├── story.astro
│   └── locations.astro
├── scripts/
│   ├── bowl-memory.ts
│   └── noodle-scene.ts
└── styles/
```

ScrollCraft's shared engine stays unchanged. Mankee-specific divider, bowl-memory and collapse behavior lives in page-local components and scripts.

## 9. Performance and fallback contract

- The first screen is complete before JavaScript or WebGL loads.
- Initial copy, navigation and location information work without WebGL.
- The 3D scene loads only near its section and pauses offscreen.
- Core GLB target: approximately 3–5 MB or less after optimization.
- Desktop and phone receive separately composed posters.
- Reduced motion replaces pinned travel with normal document flow.
- No essential copy is baked into images, video or 3D textures.
- Third-party publisher imagery remains reference-only unless licensed.

## 10. Accessibility and language

- Document language is `zh-HK`.
- Natural Hong Kong Traditional Chinese is the source copy.
- All controls have visible focus, sufficient contrast and minimum touch size.
- Menu filters remain buttons with clear selected state.
- Navigation and location selection work with keyboard and screen reader.
- Decorative layers use empty alt text; factual food and shop images receive useful Chinese alt text.
- Reduced-motion mode preserves every fact and action without surplus scroll distance.

## 11. Search and structured data

- Unique Chinese title and description for every route.
- Restaurant or LocalBusiness structured data for the two public locations.
- The Sham Shui Po record explains the connected 109, 115, 121 and 123C shopfronts in visible copy.
- Menu items are indexable text, not only visual cards.
- Official recognition claims link to their authoritative source.
- An English route and `hreflang` are added only if a real English version is commissioned.

## 12. Phase-one boundaries

Included:

- Brand storytelling.
- Structured menu display.
- Location selection.
- Map and delivery links.
- Bowl-memory interaction.
- Responsive, reduced-motion and no-WebGL fallbacks.

Not included unless requested later:

- Online payment or an owned ordering cart.
- Reservations.
- Customer accounts.
- User reviews copied from third-party platforms.
- A CMS or automated social feed.

## 13. Measurement plan

Recommended anonymous events:

- `nav_select`
- `menu_filter`
- `dish_view`
- `location_select`
- `map_open`
- `delivery_open`
- `story_complete`

Do not track ingredient memory as personal profiling. It remains browser-local, temporary interaction state.

## 14. Architecture acceptance criteria

- A visitor can reach menu or location information in one action from every route.
- 深水埗 appears as one connected location, not four branches.
- Published Sham Shui Po hours are 11:00–04:00 daily.
- All operational content comes from shared records.
- The immersive homepage remains understandable with animation disabled.
- The ending resolves first into the Sham Shui Po main store and a concrete next action, while retaining access to the Tsim Sha Tsui collaboration location.
