import { publicValue } from "../../lib/facts.ts";
import type { Fact } from "../types.ts";

export type PressItem = {
  id: string;
  publisher: Fact<string>;
  title: Fact<string>;
  url: Fact<string>;
  excerpt: Fact<string>;
};

export const pressItems: PressItem[] = [];

export function visiblePressLinks(items: readonly PressItem[]) {
  return items.flatMap((item) => {
    const title = publicValue(item.title);
    const url = publicValue(item.url);
    if (!title || !url) return [];
    return [{ title, url }];
  });
}
