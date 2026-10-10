export const dishPreviews = [
  {
    name: "上湯花膠",
    image: "/media/food/preview-fish-maw.webp",
    description: "厚身吸湯，口感飽滿。",
  },
  {
    name: "清甜蘿蔔",
    image: "/media/food/preview-radish.webp",
    description: "吸滿湯底，清甜入味。",
  },
  {
    name: "自制韭菜餃",
    image: "/media/food/preview-dumpling.webp",
    description: "餡料鮮香，保留手作口感。",
  },
  {
    name: "滷水豬大腸",
    image: "/media/food/preview-intestine.webp",
    description: "鹵香濃郁，口感軟腍。",
  },
  {
    name: "秘製牛孖根",
    image: "/media/food/preview-tendon.webp",
    description: "筋香軟糯，富有膠質。",
  },
  {
    name: "南乳豬手",
    image: "/media/food/preview-trotter.webp",
    description: "南乳香濃，豬手軟腍。",
  },
  {
    name: "手打魚肉",
    image: "/media/food/preview-fish-meat.webp",
    description: "手打彈牙，魚味自然。",
  },
  {
    name: "瑞士雞中翼",
    image: "/media/food/preview-wings.webp",
    description: "醬香軟嫩，招牌滋味。",
  },
  {
    name: "玻璃辣魷魚",
    image: "/media/food/preview-squid.webp",
    description: "爽口帶辣，層次鮮明。",
  },
  {
    name: "蠔皇小花菇",
    image: "/media/food/preview-mushroom.webp",
    description: "蠔香入味，小花菇厚實。",
  },
] as const;

export function previewFor(name: string) {
  return dishPreviews.find((item) => item.name === name) ?? dishPreviews[0];
}
