import type { Metadata } from "next";
import { locations, site } from "../content/index.ts";
import { publicValue } from "./facts.ts";

const socialPreview = {
  url: "https://gavinfung321.github.io/Mankee/brand/mankee-hero-link-preview-v1.png",
  width: 1200,
  height: 630,
  alt: "文記車仔麵招牌配料落碗",
};

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

function sentence(parts: Array<string | undefined>) {
  const text = parts.filter((part) => part).join("。");
  return text ? `${text}。` : undefined;
}

export function homeDescription() {
  const place = locations.find((location) => location.role === "primary");
  return sentence([
    publicValue(site.name),
    place ? publicValue(place.address) : undefined,
    place ? publicValue(place.hours) : undefined,
  ]);
}

export function menuDescription() {
  const order = site.navigation.find((item) => item.id === "order");
  return sentence([order?.label, "湯 → 麵 → 餸", publicValue(site.disclaimer)]);
}

export function pageMetadata(
  title: string,
  description: string | undefined,
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: "zh_HK",
      type: "website",
      images: [socialPreview],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialPreview.url],
    },
  };
}

function openingHours(hours: string | undefined) {
  const match = hours?.match(/^每日 (\d{2}:\d{2})–(\d{2}:\d{2})$/);
  if (!match) return undefined;
  return {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...week],
    opens: match[1],
    closes: match[2],
  };
}

export function restaurantJsonLd() {
  const name = publicValue(site.name);
  const graph = locations.flatMap((location) => {
    const address = publicValue(location.address);
    const locality = publicValue(location.district);
    const phone = publicValue(location.phone);
    const mapUrl = publicValue(location.mapUrl);
    const hours = openingHours(publicValue(location.hours));
    if (!address && !hours) return [];
    return [
      {
        "@type": "Restaurant",
        name,
        servesCuisine: "車仔麵",
        ...(address
          ? {
              address: {
                "@type": "PostalAddress",
                streetAddress: address,
                ...(locality ? { addressLocality: locality } : {}),
                addressRegion: "香港",
              },
            }
          : {}),
        ...(hours ? { openingHoursSpecification: hours } : {}),
        ...(phone ? { telephone: phone } : {}),
        ...(mapUrl ? { hasMap: mapUrl } : {}),
      },
    ];
  });

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
