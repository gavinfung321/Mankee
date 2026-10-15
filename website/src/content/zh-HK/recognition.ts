import { confirmed, pending } from "../types.ts";

export const recognition = [
  {
    id: "michelin",
    name: confirmed("米芝蓮"),
    line: confirmed("米芝蓮"),
    heading: confirmed("米芝蓮推介，八年記錄。"),
    wording: pending(),
    yearRange: confirmed("2018–2025"),
    image: confirmed("/media/recognition/michelin-2018-2025.png"),
    // Facts shown on the official Michelin listing, restated by the owner on 14 Oct 2026; not copied editorial text.
    listingName: confirmed("文記車仔麵（深水埗）"),
    listingMeta: confirmed("Street Food · $"),
    listingAddress: confirmed("121 Fuk Wing Street, Sham Shui Po"),
    portrait: pending(),
  },
  {
    id: "paik",
    name: confirmed("白種元"),
    line: confirmed("白種元曾到訪文記"),
    quotation: pending(),
    portrait: pending(),
    // Broadcast still: publication clearance pending in docs/reference/content-register.md.
    still: confirmed("/media/recognition/paik-visit-counter-1400.webp"),
    stillCredit: confirmed("韓國節目畫面"),
  },
  {
    id: "luisa",
    name: confirmed("黎芷珊"),
    line: confirmed("黎芷珊曾到訪文記"),
    quotation: pending(),
    portrait: pending(),
    // Broadcast still: publication clearance pending in docs/reference/content-register.md.
    still: confirmed("/media/recognition/luisa-tvb-counter-960.webp"),
    stillCredit: confirmed("TVB 節目畫面"),
  },
] as const;
