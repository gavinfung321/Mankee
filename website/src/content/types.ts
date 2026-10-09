export const activeLocale = "zh-HK" as const;

export type Locale = typeof activeLocale;

export type Confirmed<T> = {
  status: "confirmed";
  value: T;
};

export type Pending = {
  status: "pending";
};

export type Fact<T> = Confirmed<T> | Pending;

export function confirmed<T>(value: T): Confirmed<T> {
  return { status: "confirmed", value };
}

export function pending(): Pending {
  return { status: "pending" };
}
