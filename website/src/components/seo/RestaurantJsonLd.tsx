import { restaurantJsonLd } from "../../lib/seo.ts";

export function RestaurantJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd()) }}
    />
  );
}
