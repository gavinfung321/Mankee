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
    phone: pending(),
    mapUrl: pending(),
    foodpanda: pending(),
    keeta: pending(),
  },
  {
    id: "tsim-sha-tsui",
    role: "secondary" as const,
    label: confirmed("尖沙咀店"),
    district: confirmed("尖沙咀"),
    address: pending(),
    hours: pending(),
    lastOrder: pending(),
    holidays: pending(),
    phone: pending(),
    mapUrl: pending(),
    foodpanda: pending(),
    keeta: pending(),
  },
] as const;
