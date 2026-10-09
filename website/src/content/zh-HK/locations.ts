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

export const locations = [
  {
    id: "sham-shui-po",
    role: "primary" as const,
    label: confirmed("深水埗店"),
    district: confirmed("深水埗"),
    address: confirmed("深水埗福榮街109、115、121及123C號"),
    hours: confirmed("每日 11:00–04:00"),
    lastOrder: pending(),
    holidays: pending(),
    phone: confirmed("(+852) 9059-5104"),
    email: confirmed("mankeecartnoodles@gmail.com"),
    mapUrl: confirmed("https://share.google/otLrnzLumqWZaN8mg"),
    foodpanda: confirmed(
      "https://www.foodpanda.hk/zh/chain/cu0nv/man-kee-cart-noodle",
    ),
    keeta: pending(),
  },
  {
    id: "tsim-sha-tsui",
    role: "secondary" as const,
    label: confirmed("尖沙咀店"),
    district: confirmed("尖沙咀"),
    address: confirmed(
      "尖沙咀廣東道3-27號海港城港威商場4樓4102號舖11號檔 Food Atlas",
    ),
    hours: confirmed("每日 11:00–21:00"),
    lastOrder: pending(),
    holidays: pending(),
    phone: pending(),
    email: pending(),
    mapUrl: pending(),
    foodpanda: confirmed(
      "https://www.foodpanda.hk/zh/restaurant/anos/man-kee-cart-noodle-harbour-city-anos",
    ),
    keeta: pending(),
  },
] as const;
