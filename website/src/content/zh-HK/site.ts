import { confirmed } from "../types.ts";

export const site = {
  locale: "zh-HK" as const,
  name: confirmed("文記車仔麵"),
  disclaimer: confirmed("實際供應及選擇以店內餐牌為準。"),
  navigation: [
    { id: "home", label: "首頁", href: "/" },
    { id: "order", label: "點餐", href: "/menu/" },
    { id: "ten", label: "文記十大", href: "/#top-ten" },
    { id: "story", label: "故事", href: "/#story" },
    { id: "visit", label: "到店／外賣", href: "/#locations" },
  ],
} as const;
