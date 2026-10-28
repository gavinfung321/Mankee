import { site } from "./site.ts";

export const ordering = {
  steps: [
    {
      id: "soup",
      label: "湯",
      choices: ["腩汁", "瑞士汁", "清湯", "走湯"],
      flavours: ["咖喱", "沙嗲", "麻辣"],
    },
    {
      id: "noodle",
      label: "麵",
      choices: ["粗麵", "河粉", "烏冬", "日式拉麵"],
    },
    {
      id: "topping",
      label: "餸",
      note: "六十二款，可以逐樣加",
    },
  ],
  disclaimer: site.disclaimer,
} as const;
