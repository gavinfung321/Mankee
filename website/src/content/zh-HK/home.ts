import { confirmed } from "../types.ts";
import { ordering } from "./menu.ts";

export const homeSections = [
  {
    id: "hero",
    heading: "一碗，由這裏開始",
  },
  {
    id: "how-to-order",
    flow: "湯 → 麵 → 餸",
    steps: ordering.steps,
  },
  {
    id: "top-ten",
    heading: "文記十大",
    anchor: "top-ten",
  },
  {
    id: "order-slip",
    role: "transition" as const,
  },
  {
    id: "story",
    heading: "故事",
    anchor: "story",
    founder: {
      name: confirmed("黃志強"),
      englishName: confirmed("Simon Wong"),
      role: confirmed("創辦人"),
      context: confirmed("車仔麵為本土食物，夠地道。"),
      quotation: confirmed("最希望是港人珍惜本土風味食店。"),
      portrait: confirmed("/media/founder/wong-chi-keung-960.webp"),
    },
  },
  {
    id: "recognition",
  },
  {
    id: "locations",
    heading: "到店／外賣",
    anchor: "locations",
  },
] as const;
