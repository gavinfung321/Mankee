import { confirmed, pending } from "../types.ts";

export const recognition = [
  {
    id: "michelin",
    name: confirmed("米芝蓮"),
    line: confirmed("米芝蓮"),
    wording: pending(),
    yearRange: confirmed("2018–2025"),
    image: confirmed("/media/recognition/michelin-2018-2025.png"),
    portrait: pending(),
  },
  {
    id: "paik",
    name: confirmed("白種元"),
    line: confirmed("白種元曾到訪文記"),
    quotation: pending(),
    portrait: pending(),
  },
  {
    id: "luisa",
    name: confirmed("黎芷珊"),
    line: confirmed("黎芷珊曾到訪文記"),
    quotation: pending(),
    portrait: pending(),
  },
] as const;
