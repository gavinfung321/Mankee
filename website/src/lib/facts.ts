import type { Fact } from "../content/types.ts";

export function publicValue<T>(fact: Fact<T>): T | undefined {
  if (fact.status === "pending") return undefined;
  return fact.value;
}
