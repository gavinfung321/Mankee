import { publicValue } from "../../lib/facts.ts";
import { confirmed, pending, type Fact } from "../types.ts";

export type PressArtwork = {
  src: string;
  source: string;
  status: "review-only" | "approved";
};

export type PressItem = {
  id: string;
  publisher: Fact<string>;
  title: Fact<string>;
  url: Fact<string>;
  summary: Fact<string>;
  titleLang: "zh-Hant" | "en";
  format: "報道" | "指南" | "網誌";
  group: "press" | "creators";
  placement: "rail" | "michelin";
  artwork?: PressArtwork;
};

const ownerSupplied =
  "Owner-supplied in the project chat, 14 Oct 2026 (asset manifest R18)";

// The 11 文記誌 sources in owner-approved order (docs/current/sections/journal-gallery.md).
// Summaries are Mankee's own approved wording, not publisher excerpts.
// Artwork places each publisher's official file on one shared dark 3:4 field,
// with every mark fitted to the same box (scripts/build-press-cards.mjs).
// Provenance is asset manifest R18.
export const pressItems: PressItem[] = [
  {
    id: "elle",
    publisher: confirmed("ELLE"),
    title: confirmed("香港在地人推薦！深水埗必吃街邊美食地圖"),
    url: confirmed(
      "https://www.elle.com/tw/life/travel/g63110243/2026-hongkong-food-map/",
    ),
    summary: confirmed(
      "ELLE 精選深水埗街頭美食，文記列入在地人推薦的車仔麵選擇。",
    ),
    titleLang: "zh-Hant",
    format: "報道",
    group: "press",
    placement: "rail",
    artwork: {
      src: "/media/press/elle-card.webp",
      source:
        "https://www.elle.com/_assets/design-tokens/elle/static/images/logos/logo.2856426.svg",
      status: "review-only",
    },
  },
  {
    id: "time-out",
    publisher: confirmed("Time Out Hong Kong"),
    title: confirmed("Best cart noodles in Hong Kong"),
    url: confirmed(
      "https://www.timeout.com/hong-kong/restaurants/best-cart-noodles-in-hong-kong",
    ),
    summary: confirmed(
      "Time Out 將文記列入香港最佳車仔麵名單，介紹牛腩湯底與多款配料。",
    ),
    titleLang: "en",
    format: "指南",
    group: "press",
    placement: "rail",
    artwork: {
      src: "/media/press/time-out-card.webp",
      source: "https://www.timeout.com/hong-kong (inline header logo SVG)",
      status: "review-only",
    },
  },
  {
    id: "scmp",
    publisher: confirmed("South China Morning Post"),
    title: confirmed(
      "Real Hong Kong street food: how cart noodles have survived into the 21st century",
    ),
    url: confirmed(
      "https://www.scmp.com/lifestyle/food-drink/article/3077947/real-hong-kong-street-food-how-cart-noodles-have-survived-21st",
    ),
    summary: confirmed(
      "SCMP 從香港街頭飲食文化出發，訪問文記談車仔麵如何延續至今。",
    ),
    titleLang: "en",
    format: "報道",
    group: "press",
    placement: "rail",
    artwork: {
      src: "/media/press/scmp-card.webp",
      source:
        "https://assets-v2.i-scmp.com/production/icons/scmp-icon-512x512.png",
      status: "review-only",
    },
  },
  {
    id: "ufood",
    publisher: confirmed("UFood"),
    title: confirmed("文記車仔麵"),
    url: confirmed("https://ufood.com.hk/restaurant/news/detail/2254117"),
    summary: confirmed("UFood 介紹文記的米芝蓮推介、十大必食與招牌配料。"),
    titleLang: "zh-Hant",
    format: "報道",
    group: "press",
    placement: "rail",
    artwork: {
      src: "/media/press/ufood-card.webp",
      source: "https://ufood.com.hk/images/v5/ufood-logo.svg",
      status: "review-only",
    },
  },
  {
    id: "hktb",
    publisher: confirmed("香港旅遊發展局"),
    title: confirmed("文記車仔麵"),
    url: confirmed(
      "https://www.discoverhongkong.com/tc/place-to-go/travel.guide-man-kee-cart-noodles.html",
    ),
    summary: confirmed("香港旅發局介紹文記的自由配搭方式與十大必試配料。"),
    titleLang: "zh-Hant",
    format: "指南",
    group: "press",
    placement: "rail",
    artwork: {
      src: "/media/press/hktb-card.webp",
      source:
        "https://www.discoverhongkong.com/content/dam/dhk-cloud/common/logo/hktb-en1.png",
      status: "review-only",
    },
  },
  {
    id: "wanderlog",
    publisher: confirmed("Wanderlog"),
    title: confirmed("Man Kee Cart Noodle"),
    url: confirmed(
      "https://wanderlog.com/place/details/410396/man-kee-cart-noodle",
    ),
    summary: confirmed("Wanderlog 將文記列為深水埗的人氣車仔麵體驗。"),
    titleLang: "en",
    format: "指南",
    group: "press",
    placement: "rail",
    artwork: {
      src: "/media/press/wanderlog-card.webp",
      source:
        "https://wanderlog.com/p/images/66b10f1b0bb009ca93a55ee0_wanderlog-logo-wordmark.svg",
      status: "review-only",
    },
  },
  {
    id: "singtao",
    publisher: confirmed("星島頭條"),
    title: confirmed(
      "深水埗文記車仔麵創逆市奇蹟？福榮街連佔5舖位變「文記街」 食客批1原因不再幫襯",
    ),
    url: confirmed("https://www.stheadline.com/food/3385602/"),
    summary: confirmed(
      "星島頭條報道文記在福榮街連開多間舖位，並整理食客的不同意見。",
    ),
    titleLang: "zh-Hant",
    format: "報道",
    group: "press",
    placement: "rail",
    artwork: {
      src: "/media/press/singtao-card.webp",
      source: ownerSupplied,
      status: "review-only",
    },
  },
  {
    id: "weekendhk",
    publisher: confirmed("新假期"),
    title: confirmed(
      "深水埗文記車仔麵！高速列車送麵 必食瑞士雞翼＋足料餃子｜區區搵食",
    ),
    url: confirmed(
      "https://www.weekendhk.com/dining/%e6%96%87%e8%a8%98%e8%bb%8a%e4%bb%94%e9%ba%b5-%e6%b7%b1%e6%b0%b4%e5%9f%97-%e9%ab%98%e9%80%9f%e5%88%97%e8%bb%8a-ww03-1381194/",
    ),
    summary: confirmed(
      "新假期《區區搵食》介紹深水埗文記的送麵方式，以及瑞士雞翼和餃子。",
    ),
    titleLang: "zh-Hant",
    format: "報道",
    group: "press",
    placement: "rail",
    artwork: {
      src: "/media/press/weekendhk-card.webp",
      source: ownerSupplied,
      status: "review-only",
    },
  },
  {
    id: "metro",
    publisher: confirmed("Metro"),
    title: confirmed("These are the top dishes people ordered for delivery in 2020"),
    url: confirmed(
      "https://metro.co.uk/2020/12/22/these-are-the-top-food-dishes-people-ordered-for-delivery-in-2020-13790326/",
    ),
    summary: confirmed(
      "Metro 報道 Deliveroo 2020 年全球百大外賣菜式，文記的自選粉麵排第 49 位。",
    ),
    titleLang: "en",
    format: "報道",
    group: "press",
    placement: "rail",
    artwork: {
      src: "/media/press/metro-card.webp",
      source: "https://metro.co.uk/ (header #common-metro-logo SVG)",
      status: "review-only",
    },
  },
  {
    id: "hk01",
    publisher: confirmed("香港01"),
    title: confirmed(
      "【2018米芝蓮推介】文記車仔麵打入街頭小吃　冀港人珍惜本地風味",
    ),
    url: confirmed(
      "https://www.hk01.com/%E7%A4%BE%E6%9C%83%E6%96%B0%E8%81%9E/137826/",
    ),
    summary: confirmed(
      "香港01 報道文記獲 2018 年米芝蓮街頭小吃推介，以及對本地風味的堅持。",
    ),
    titleLang: "zh-Hant",
    format: "報道",
    group: "press",
    placement: "rail",
    artwork: {
      src: "/media/press/hk01-card.webp",
      source: ownerSupplied,
      status: "review-only",
    },
  },
  {
    id: "hongkongd",
    publisher: confirmed("阿金 · 香港D"),
    title: confirmed("【深水埗文記車仔麵】香港第一車仔麵? 米芝蓮也推薦"),
    url: confirmed("https://www.hongkongd.com/sham-shui-po-eat/15179/"),
    summary: confirmed(
      "旅遊博客阿金到深水埗文記試食，記錄這碗米芝蓮推介車仔麵。",
    ),
    titleLang: "zh-Hant",
    format: "網誌",
    group: "creators",
    placement: "rail",
    artwork: {
      src: "/media/press/hongkongd-card.webp",
      source: ownerSupplied,
      status: "review-only",
    },
  },
  {
    id: "michelin",
    publisher: confirmed("Michelin Guide"),
    title: confirmed("Man Kee Cart Noodles (Sham Shui Po)"),
    url: confirmed(
      "https://guide.michelin.com/us/en/hong-kong-region/hong-kong/restaurant/man-kei-cart-noodles",
    ),
    summary: pending(),
    titleLang: "en",
    format: "指南",
    group: "press",
    placement: "michelin",
  },
];

// Review-only artwork renders in development for owner review and never in a production build.
export function shownArtwork(
  artwork: PressArtwork | undefined,
  production = process.env.NODE_ENV === "production",
) {
  if (!artwork) return undefined;
  if (artwork.status === "approved" || !production) return artwork.src;
  return undefined;
}

export function visiblePressLinks(
  items: readonly PressItem[],
  placement: PressItem["placement"] = "rail",
) {
  return items.flatMap((item) => {
    if (item.placement !== placement) return [];
    const publisher = publicValue(item.publisher);
    const title = publicValue(item.title);
    const url = publicValue(item.url);
    if (!publisher || !title || !url) return [];
    return [
      {
        id: item.id,
        publisher,
        title,
        url,
        summary: publicValue(item.summary),
        titleLang: item.titleLang,
        format: item.format,
        group: item.group,
        artwork: shownArtwork(item.artwork),
      },
    ];
  });
}
