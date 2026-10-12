export const dishPreviews = [
  { name: "上湯花膠", image: "/media/food/preview-fish-maw.webp", crop: "center 18%" },
  { name: "清甜蘿蔔", image: "/media/food/preview-radish.webp", crop: "center 50%" },
  { name: "自制韭菜餃", image: "/media/food/preview-dumpling.webp", crop: "center 38%" },
  { name: "滷水豬大腸", image: "/media/food/preview-intestine.webp", crop: "center 16%" },
  { name: "秘製牛孖根", image: "/media/food/preview-tendon.webp", crop: "center 32%" },
  { name: "南乳豬手", image: "/media/food/preview-trotter.webp", crop: "center 34%" },
  { name: "手打魚肉", image: "/media/food/preview-fish-meat.webp", crop: "center 8%" },
  { name: "瑞士雞中翼", image: "/media/food/preview-wings.webp", crop: "center 24%" },
  { name: "玻璃辣魷魚", image: "/media/food/preview-squid.webp", crop: "center 46%" },
  { name: "蠔皇小花菇", image: "/media/food/preview-mushroom.webp", crop: "center 22%" },
] as const;

export function previewFor(name: string) {
  return dishPreviews.find((item) => item.name === name) ?? dishPreviews[0];
}
