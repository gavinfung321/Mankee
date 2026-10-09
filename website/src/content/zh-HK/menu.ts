import { site } from "./site.ts";

export const ordering = {
  steps: [
    {
      id: "soup",
      label: "湯",
      flavours: ["咖喱", "沙嗲", "麻辣"],
    },
    { id: "noodle", label: "麵" },
    { id: "topping", label: "餸" },
  ],
  disclaimer: site.disclaimer,
} as const;
