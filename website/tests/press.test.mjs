import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFileSync(join(root, path), "utf8");

// [id, format, group, publisher, title language, url] in owner-approved order.
const journal = [
  ["elle", "報道", "press", "ELLE", "zh-Hant", "https://www.elle.com/tw/life/travel/g63110243/2026-hongkong-food-map/"],
  ["time-out", "指南", "press", "Time Out Hong Kong", "en", "https://www.timeout.com/hong-kong/restaurants/best-cart-noodles-in-hong-kong"],
  ["scmp", "報道", "press", "South China Morning Post", "en", "https://www.scmp.com/lifestyle/food-drink/article/3077947/real-hong-kong-street-food-how-cart-noodles-have-survived-21st"],
  ["ufood", "報道", "press", "UFood", "zh-Hant", "https://ufood.com.hk/restaurant/news/detail/2254117"],
  ["hktb", "指南", "press", "香港旅遊發展局", "zh-Hant", "https://www.discoverhongkong.com/tc/place-to-go/travel.guide-man-kee-cart-noodles.html"],
  ["wanderlog", "指南", "press", "Wanderlog", "en", "https://wanderlog.com/place/details/410396/man-kee-cart-noodle"],
  ["singtao", "報道", "press", "星島頭條", "zh-Hant", "https://www.stheadline.com/food/3385602/"],
  ["weekendhk", "報道", "press", "新假期", "zh-Hant", "https://www.weekendhk.com/dining/%e6%96%87%e8%a8%98%e8%bb%8a%e4%bb%94%e9%ba%b5-%e6%b7%b1%e6%b0%b4%e5%9f%97-%e9%ab%98%e9%80%9f%e5%88%97%e8%bb%8a-ww03-1381194/"],
  ["metro", "報道", "press", "Metro", "en", "https://metro.co.uk/2020/12/22/these-are-the-top-food-dishes-people-ordered-for-delivery-in-2020-13790326/"],
  ["hk01", "報道", "press", "香港01", "zh-Hant", "https://www.hk01.com/%E7%A4%BE%E6%9C%83%E6%96%B0%E8%81%9E/137826/"],
  ["hongkongd", "網誌", "creators", "阿金 · 香港D", "zh-Hant", "https://www.hongkongd.com/sham-shui-po-eat/15179/"],
];
const michelinUrl =
  "https://guide.michelin.com/us/en/hong-kong-region/hong-kong/restaurant/man-kei-cart-noodles";

test("the Journal lists the 11 approved sources in order and Michelin stays in its panel", async () => {
  const { pressItems, visiblePressLinks } =
    await import("../src/content/zh-HK/press.ts");

  const rail = visiblePressLinks(pressItems);
  assert.deepEqual(
    rail.map((link) => [
      link.id,
      link.format,
      link.group,
      link.publisher,
      link.titleLang,
      link.url,
    ]),
    journal,
  );
  assert.equal(new Set(rail.map((link) => link.url)).size, 11);
  for (const link of rail) {
    assert.match(link.url, /^https:\/\/[\x21-\x7e]+$/, link.id);
  }
  assert.equal(rail.find((link) => link.id === "hktb")?.title, "文記車仔麵");
  assert.equal(rail.find((link) => link.id === "ufood")?.title, "文記車仔麵");

  const michelin = visiblePressLinks(pressItems, "michelin");
  assert.deepEqual(
    michelin.map((link) => link.url),
    [michelinUrl],
  );
  assert.ok(!rail.some((link) => link.url === michelinUrl));
  assert.doesNotMatch(
    JSON.stringify(pressItems),
    /holidaysmart|justsaying|lovinhk|tvb\.com|openrice/i,
  );

  assert.deepEqual(
    Object.fromEntries(rail.map((link) => [link.id, link.summary])),
    {
      elle: "ELLE 精選深水埗街頭美食，文記列入在地人推薦的車仔麵選擇。",
      "time-out":
        "Time Out 將文記列入香港最佳車仔麵名單，介紹牛腩湯底與多款配料。",
      scmp: "SCMP 從香港街頭飲食文化出發，訪問文記談車仔麵如何延續至今。",
      ufood: "UFood 介紹文記的米芝蓮推介、十大必食與招牌配料。",
      hktb: "香港旅發局介紹文記的自由配搭方式與十大必試配料。",
      wanderlog: "Wanderlog 將文記列為深水埗的人氣車仔麵體驗。",
      singtao: "星島頭條報道文記在福榮街連開多間舖位，並整理食客的不同意見。",
      weekendhk:
        "新假期《區區搵食》介紹深水埗文記的送麵方式，以及瑞士雞翼和餃子。",
      metro:
        "Metro 報道 Deliveroo 2020 年全球百大外賣菜式，文記的自選粉麵排第 49 位。",
      hk01: "香港01 報道文記獲 2018 年米芝蓮街頭小吃推介，以及對本地風味的堅持。",
      hongkongd: "旅遊博客阿金到深水埗文記試食，記錄這碗米芝蓮推介車仔麵。",
    },
  );
});

test("publisher artwork is local, sourced and review-only", async () => {
  const { pressItems, shownArtwork } =
    await import("../src/content/zh-HK/press.ts");
  const rail = pressItems.filter((item) => item.placement === "rail");

  for (const item of rail) {
    const art = item.artwork;
    assert.ok(art, item.id);
    assert.match(art.src, /^\/media\/press\/[a-z0-9-]+-card\.webp$/);
    assert.ok(existsSync(join(root, "public", art.src)), art.src);
    assert.match(art.source, /^(https:\/\/|Owner-supplied .*R18)/);
    assert.equal(art.status, "review-only", item.id);
    assert.equal(shownArtwork(art, true), undefined, item.id);
    assert.equal(shownArtwork(art, false), art.src, item.id);
  }
  assert.equal(
    shownArtwork(
      { src: "/x.webp", source: "https://x", status: "approved" },
      true,
    ),
    "/x.webp",
  );

  const manifest = readFileSync(
    join(root, "..", "docs/reference/asset-manifest.md"),
    "utf8",
  );
  assert.match(manifest, /assets\/sourced\/publisher\/press\//);
  assert.match(manifest, /review-only/i);

  const script = read("scripts/build-press-cards.mjs");
  assert.match(script, /const ground = "#fff7e8";/);
  assert.doesNotMatch(script, /#ffffff|#fefefe/);
  for (const item of rail) {
    assert.match(script, new RegExp(`id: "${item.id}"`), item.id);
  }
});

test("pending facts never render as rail links", async () => {
  const { confirmed, pending } = await import("../src/content/types.ts");
  const { visiblePressLinks } = await import("../src/content/zh-HK/press.ts");
  const base = {
    id: "x",
    publisher: confirmed("Publisher"),
    title: confirmed("標題"),
    url: confirmed("https://example.com/story"),
    summary: pending(),
    titleLang: "zh-Hant",
    placement: "rail",
  };
  assert.deepEqual(visiblePressLinks([{ ...base, url: pending() }]), []);
  assert.deepEqual(visiblePressLinks([{ ...base, title: pending() }]), []);
  assert.deepEqual(visiblePressLinks([{ ...base, publisher: pending() }]), []);
  const [link] = visiblePressLinks([base]);
  assert.equal(link.summary, undefined);
  assert.equal(link.artwork, undefined);
});

test("the press rail is an image-card native scroll-snap carousel", () => {
  const rail = read("src/components/home/PressRail.tsx");
  const carousel = read("src/components/home/PressCarousel.tsx");
  const css = read("src/styles/home.css");

  assert.match(rail, /<section\s+id="journal"/);
  assert.match(rail, /aria-labelledby="journal-heading"/);
  assert.match(
    rail,
    /<span id="press" className="nav-target" aria-hidden="true" \/>/,
  );
  assert.match(rail, /const railId = "journal-press";/);
  assert.match(rail, /<ul id=\{railId\} className="press-rail nav-target"/);
  assert.match(
    rail,
    /id=\{link\.id === firstCreator \? "journal-creators" : undefined\}/,
  );
  assert.match(rail, /className="section-kicker"/);
  assert.match(rail, /const kicker = "文記誌 · BLOG";/);
  assert.match(rail, /const heading = "店內日常，與城中報道。";/);
  assert.match(rail, /<h2 id="journal-heading">\{heading\}<\/h2>/);
  assert.doesNotMatch(rail, /閱讀原文/);
  assert.match(rail, /target="_blank"/);
  assert.match(rail, /rel="noopener noreferrer"/);
  assert.match(
    rail,
    /aria-label=\{`\$\{link\.format\}：\$\{link\.publisher\}：\$\{link\.title\}（新分頁開啟）`\}/,
  );
  assert.match(
    rail,
    /<span className="press-format">\{link\.format\}<\/span>\s*\{" · "\}/,
  );
  assert.match(rail, /aria-describedby=/);
  assert.match(rail, /<Image[\s\S]*?alt=""[\s\S]*?fill/);
  assert.match(rail, /<PressCarousel railId=\{railId\}>[\s\S]*?<ul/);
  assert.doesNotMatch(rail, /"use client"/);
  assert.doesNotMatch(
    `${rail}\n${carousel}`,
    /<img|<iframe|<video|https?:\/\//,
  );

  assert.match(carousel, /^"use client";/);
  assert.match(carousel, /aria-controls=\{railId\}/);
  assert.match(carousel, /addEventListener\("hashchange", revealCard\)/);
  assert.match(
    carousel,
    /const revealCard[\s\S]*?setUserPaused\(true\);\s*card\.scrollIntoView\(\{ block: "nearest", inline: "start" \}\);\s*rail\.closest\("section"\)\?\.scrollIntoView\(\{ block: "start" \}\);/,
  );
  assert.match(carousel, /aria-label="上一則報道"/);
  assert.match(carousel, /aria-label="下一則報道"/);
  assert.doesNotMatch(carousel, /aria-disabled/);
  assert.match(carousel, /const interval = 5000;/);
  assert.match(
    carousel,
    /setInterval\([\s\S]*?:hover, :focus-within[\s\S]*?step\(1\);[\s\S]*?interval\)/,
  );
  assert.match(carousel, /scrollTo\(\{ left: 0, behavior \}\)/);
  assert.match(carousel, /scrollTo\(\{ left: max, behavior \}\)/);
  assert.match(carousel, /prefers-reduced-motion: reduce/);
  assert.match(carousel, /visibilitychange/);
  assert.match(carousel, /onPointerEnter/);
  assert.match(carousel, /onFocus/);
  for (const event of ["pointerdown", "wheel", "touchstart", "touchmove"]) {
    assert.match(carousel, new RegExp(`"${event}"`));
  }
  assert.match(carousel, /event\.pointerType !== "touch"/);
  assert.match(
    carousel,
    /Math\.abs\(event\.deltaX\) > Math\.abs\(event\.deltaY\)/,
  );
  assert.match(carousel, /dx > 10 && dx > dy/);
  assert.doesNotMatch(carousel, /addEventListener\("touchstart", manual/);

  assert.match(
    carousel,
    /<div className="press-controls">[\s\S]*?press-arrow--prev[\s\S]*?<div className="press-dots" aria-hidden="true">[\s\S]*?press-arrow--next/,
  );
  assert.match(carousel, /data-active=\{index === active \? "" : undefined\}/);
  assert.match(carousel, /setCount\(rail\?\.children\.length \?\? 0\)/);
  assert.match(carousel, /addEventListener\("scroll", syncActive/);
  assert.match(carousel, /!hovered && !focused && !pageHidden/);
  assert.match(carousel, /setUserPaused\(true\);\s*step\(direction\)/);
  assert.match(carousel, /const playing = ready && !reduced && !userPaused;/);
  assert.doesNotMatch(carousel, /自動輪播|press-autoplay|<Pause|<Play/);
  assert.match(
    carousel,
    /import \{ ArrowLeft, ArrowRight \} from "lucide-react";/,
  );
  assert.doesNotMatch(css, /press-autoplay/);

  const block =
    css.match(
      /\.press-section \{[\s\S]*?(?=\/\* Locations sits|\.locations-section \{)/,
    )?.[0] ?? "";
  assert.match(
    block,
    /\.press-section \{[^}]*background: var\(--canvas\)/,
  );
  assert.match(block, /\.press-rail \{[^}]*scroll-snap-type: x mandatory/);
  assert.match(block, /\.press-rail \{[^}]*scrollbar-width: none/);
  assert.match(block, /\.press-rail::-webkit-scrollbar \{\s*display: none;/);
  assert.match(block, /\.press-card \{[^}]*scroll-snap-align: start/);
  assert.match(
    block,
    /\.press-card a \{[^}]*aspect-ratio: 3 \/ 4;[^}]*overflow: hidden;[^}]*background: var\(--cream\);/,
  );
  assert.match(
    block,
    /\.press-publisher \{[^}]*overflow: hidden;[^}]*text-overflow: ellipsis;[^}]*white-space: nowrap;/,
  );
  assert.match(block, /\.press-format \{[^}]*color: var\(--cream\);/);
  assert.doesNotMatch(block.match(/\.press-card a \{[^}]*\}/)[0], /border/);
  assert.match(block, /\.press-card-art \{[^}]*object-fit: cover/);

  assert.match(
    block,
    /\.press-arrow \{[^}]*display: grid;[^}]*width: 44px;[^}]*height: 44px;/,
  );
  assert.doesNotMatch(
    block.match(/\.press-arrow \{[^}]*\}/)[0],
    /position: absolute|display: none/,
  );
  assert.match(block, /\.press-controls \{[^}]*display: flex;/);
  assert.match(block, /\.press-dot\[data-active\] \{/);
  assert.match(
    block,
    /@media \(hover: hover\) \{\s*\.press-arrow:hover \{/,
  );
  assert.match(block, /\.press-arrow--prev \{\s*left: 0;/);
  assert.match(block, /\.press-arrow--next \{\s*right: 0;/);

  const overlay = block.match(/\.press-card-overlay \{[^}]*\}/)[0];
  assert.match(overlay, /height: 56%;/);
  assert.match(overlay, /overflow: hidden;/);
  assert.match(overlay, /background: color-mix\(in srgb, var\(--jade\) 95%/);
  assert.doesNotMatch(block, /--ink\) \d+%|rgba\(0, 0, 0/);
  assert.match(
    block,
    /@media \(hover: hover\) and \(pointer: fine\) \{\s*\.press-card-overlay \{\s*height: 34%;[\s\S]*?:focus-visible \.press-card-overlay \{\s*height: 56%;/,
  );
  assert.match(block, /:focus-visible \.press-summary \{\s*opacity: 1;/);

  assert.match(block, /--press-per-view: 1;/);
  assert.match(
    block,
    /@media \(min-width: 40rem\) \{[\s\S]*?\.press-controls \{\s*display: contents;\s*\}\s*\.press-arrow \{\s*position: absolute;\s*top: 50%;\s*transform: translateY\(-50%\);\s*\}\s*\.press-dots \{\s*display: none;[\s\S]*?--press-per-view: 2;/,
  );
  assert.match(
    block,
    /@media \(min-width: 48rem\) \{[\s\S]*?--press-per-view: 3;/,
  );
  assert.match(
    block,
    /@media \(min-width: 64rem\) \{\s*\.press-rail \{\s*--press-per-view: 4;/,
  );
  const scales = [...block.matchAll(/scale\(([\d.]+)\)/g)].map((m) => +m[1]);
  assert.ok(scales.length > 0 && scales.every((s) => s <= 1.03), scales);
  assert.doesNotMatch(
    block,
    /box-shadow|gradient|scroll-behavior: smooth|animation/,
  );

  const pkg = read("package.json");
  assert.doesNotMatch(pkg, /reui|embla|swiper|keen-slider/i);
});

test("old press, blogs and gallery pages redirect to the Journal anchors", () => {
  const recognition = read("src/components/home/Recognition.tsx");
  const footer = read("src/components/shell/Footer.tsx");
  const config = read("next.config.ts");
  const site = read("src/content/zh-HK/site.ts");

  assert.equal(existsSync(join(root, "src/app/press")), false);
  assert.equal(existsSync(join(root, "src/components/press")), false);
  assert.match(
    config,
    /source: "\/press\/", destination: "\/#journal-press", permanent: true/,
  );
  assert.match(
    config,
    /source: "\/blogs\/", destination: "\/#journal-press", permanent: true/,
  );
  assert.match(
    config,
    /source: "\/gallery\/", destination: "\/#journal", permanent: true/,
  );
  assert.match(site, /label: "文記誌", href: "\/#journal"/);
  assert.match(footer, /primaryNav/);
  assert.doesNotMatch(footer, /href="\/press\/"|href="\/#press"|報道 →/);
  assert.doesNotMatch(recognition, /\/press\/|其他報道/);
  assert.match(recognition, /visiblePressLinks\(pressItems, "michelin"\)/);
  assert.match(
    recognition,
    /className="recognition-cta"[\s\S]*?target="_blank"/,
  );
  assert.doesNotMatch(site, /\/press\//);
  assert.doesNotMatch(
    `${recognition}\n${read("src/components/home/PressRail.tsx")}`,
    /星島頭條|香港01|新假期|LOVIN|TVB/,
  );
});

test("the Michelin panel is static and previews the listing with one CTA link", async () => {
  const recognition = read("src/components/home/Recognition.tsx");
  const rail = read("src/components/home/PressRail.tsx");
  const css = read("src/styles/home.css");
  const { recognition: records } = await import(
    "../src/content/zh-HK/recognition.ts"
  );
  const [michelin] = records;
  assert.equal(michelin.listingName.value, "文記車仔麵（深水埗）");
  assert.equal(michelin.listingMeta.value, "Street Food · $");
  assert.equal(
    michelin.listingAddress.value,
    "121 Fuk Wing Street, Sham Shui Po",
  );

  assert.match(recognition, /const listingLabel = "米芝蓮指南資料";/);
  assert.match(recognition, /const michelinCta = "查看米芝蓮指南";/);
  assert.match(
    recognition,
    /<div className="recognition-hero">\s*\{children\}\s*\{michelinGuide && \(\s*<div className="recognition-listing">\s*<p className="section-kicker">\{listingLabel\}<\/p>\s*\{name && <p className="recognition-listing-name">\{name\}<\/p>\}\s*<p className="recognition-listing-title" lang="en">\s*\{michelinGuide\.title\}\s*<\/p>[\s\S]*?recognition-listing-meta[\s\S]*?recognition-listing-address[\s\S]*?<a\s+className="recognition-cta"\s+href=\{michelinGuide\.url\}\s+target="_blank"\s+rel="noopener noreferrer"\s+aria-label=\{`\$\{michelinCta\}（新分頁開啟）`\}\s*>\s*\{michelinCta\}\s*<span className="recognition-cta-arrow" aria-hidden="true">\s*↗\s*<\/span>\s*<\/a>\s*<\/div>/,
  );
  assert.equal(recognition.match(/<a\b/g)?.length, 1);
  assert.doesNotMatch(
    recognition,
    /streakLabel|recognition-record|recognition-streak|recognition-years|指南收錄記錄|<iframe/,
  );
  assert.doesNotMatch(
    css,
    /recognition-record|recognition-streak|recognition-years/,
  );
  assert.doesNotMatch(recognition, /recognition-hero-stage|<a\s+className="recognition-hero"/);
  assert.doesNotMatch(rail, /Michelin|米芝蓮/);

  const block =
    css.match(/\.recognition-hero \{[\s\S]*?(?=\.recognition-art \{)/)?.[0] ??
    "";
  assert.match(block, /\.recognition-hero \{[^}]*position: relative;/);
  assert.doesNotMatch(
    block.match(/\.recognition-hero \{[^}]*\}/)[0],
    /transition|transform|cursor/,
  );
  assert.doesNotMatch(css, /recognition-hero-stage|\.recognition-hero:(hover|focus)/);

  assert.match(block, /\.recognition-hero \{[^}]*background: var\(--cream\);/);
  assert.match(css, /\.recognition-art \{[^}]*background: var\(--michelin\);/);
  const listing = block.match(/\.recognition-listing \{[^}]*\}/)[0];
  assert.match(listing, /justify-content: center;/);
  assert.doesNotMatch(listing, /border|box-shadow|background/);
  assert.match(
    block,
    /\.recognition-listing-title \{[^}]*color: color-mix\(in srgb, var\(--ink\) 85%, transparent\);[^}]*font-size: 17px;[^}]*font-weight: 400;/,
  );
  assert.match(
    block,
    /\.recognition-listing-meta,\s*\.recognition-listing-address \{[^}]*color: color-mix\(in srgb, var\(--ink\) 75%, transparent\);[^}]*font-size: 16px;[^}]*font-weight: 500;/,
  );
  assert.doesNotMatch(block, /--ink-muted/);

  const cta = block.match(/\.recognition-cta \{[^}]*\}/)[0];
  assert.doesNotMatch(cta, /position: absolute|border-radius/);
  assert.match(cta, /min-height: 44px;/);
  assert.match(cta, /background: var\(--michelin\);\s*color: var\(--cream\);/);
  assert.match(
    block,
    /\.recognition-cta:focus-visible \{[^}]*outline: 3px solid var\(--ink\);[^}]*background: color-mix\(in srgb, var\(--michelin\) 82%, var\(--ink\)\);/,
  );
  assert.match(
    block,
    /@media \(hover: hover\) \{\s*\.recognition-cta:hover \{\s*background: color-mix\(in srgb, var\(--michelin\) 82%, var\(--ink\)\);/,
  );
  assert.match(
    css,
    /\.recognition-hero \{\s*grid-template-columns: minmax\(0, 11fr\) minmax\(0, 9fr\);/,
  );
  assert.match(
    block,
    /@media \(prefers-reduced-motion: no-preference\) \{\s*\.recognition-cta:hover \.recognition-cta-arrow,\s*\.recognition-cta:focus-visible \.recognition-cta-arrow \{\s*translate: 2px -2px;/,
  );

  assert.doesNotMatch(css, /\.recognition-mark \{[^}]*scale/);
  assert.doesNotMatch(
    block,
    /transform:|box-shadow|perspective|rotateX|scale\(|gradient|mousemove|animation/,
  );
  assert.doesNotMatch(recognition, /onMouseMove|onPointerMove|"use client"/);
});
