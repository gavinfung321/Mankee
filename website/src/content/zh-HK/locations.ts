import { publicValue } from "../../lib/facts.ts";
import { confirmed, pending, type Fact } from "../types.ts";

type LocationLinks = {
  mapUrl: Fact<string>;
  foodpanda: Fact<string>;
  keeta: Fact<string>;
};

export function visibleLocationLinks(location: LocationLinks) {
  const mapUrl = publicValue(location.mapUrl);
  const foodpanda = publicValue(location.foodpanda);
  const keeta = publicValue(location.keeta);
  return [
    ...(mapUrl ? [{ label: "地圖", url: mapUrl }] : []),
    ...(foodpanda ? [{ label: "Foodpanda", url: foodpanda }] : []),
    ...(keeta ? [{ label: "Keeta", url: keeta }] : []),
  ];
}

// Owner-supplied and brand-use confirmed 14 Oct 2026. Always shown beside its text label.
export const linkIcons: Partial<Record<string, string>> = {
  Foodpanda: "/media/brand/foodpanda-mark-64.webp",
};

// Owner-confirmed on 14 Oct 2026 as the shared contacts for both shops; each shop references these facts.
export const sharedContacts = {
  phone: confirmed("(+852) 9059-5104"),
  email: confirmed("mankeecartnoodles@gmail.com"),
};

export const locations = [
  {
    id: "sham-shui-po",
    role: "primary" as const,
    label: confirmed("深水埗店"),
    district: confirmed("深水埗"),
    address: confirmed("深水埗福榮街109、115、121及123C號"),
    addressBreakAfter: undefined,
    hours: confirmed("每日 11:00–04:00"),
    lastOrder: pending(),
    holidays: pending(),
    phone: sharedContacts.phone,
    email: sharedContacts.email,
    mapUrl: confirmed("https://share.google/otLrnzLumqWZaN8mg"),
    foodpanda: confirmed(
      "https://www.foodpanda.hk/zh/chain/cu0nv/man-kee-cart-noodle",
    ),
    keeta: pending(),
    storefront: {
      image: confirmed("/media/store/ssp-storefront-day-1024.webp"),
      small: "/media/store/ssp-storefront-day-640.webp",
      width: 1024,
      smallWidth: 640,
      alt: "深水埗店門面：文記車仔麵招牌與入口",
    },
  },
  {
    id: "tsim-sha-tsui",
    role: "secondary" as const,
    label: confirmed("尖沙咀店"),
    district: confirmed("尖沙咀"),
    address: confirmed(
      "尖沙咀廣東道3-27號海港城港威商場4樓4102號舖11號檔 Food Atlas",
    ),
    // Preferred line break: street and mall, then unit.
    addressBreakAfter: "商場",
    hours: confirmed("每日 11:00–21:00"),
    lastOrder: pending(),
    holidays: pending(),
    phone: sharedContacts.phone,
    email: sharedContacts.email,
    // Food Atlas map supplied by the owner on 14 Oct 2026.
    mapUrl: confirmed("https://maps.app.goo.gl/acZKwec46s7T8JsB9"),
    foodpanda: confirmed(
      "https://www.foodpanda.hk/zh/restaurant/anos/man-kee-cart-noodle-harbour-city-anos",
    ),
    keeta: pending(),
    storefront: {
      image: confirmed("/media/store/tst-storefront-768.webp"),
      small: "/media/store/tst-storefront-480.webp",
      width: 768,
      smallWidth: 480,
      alt: "尖沙咀店門面：文記車仔麵招牌與入口",
    },
  },
] as const;
