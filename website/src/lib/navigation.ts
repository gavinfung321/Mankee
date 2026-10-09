import { site } from "../content/zh-HK/site.ts";

export const primaryNav = site.navigation;

export function normalizePath(pathname: string) {
  if (pathname === "/") return "/";
  return pathname.replace(/\/$/, "");
}

export function isCurrentPath(href: string, pathname: string) {
  const path = normalizePath(pathname);
  if (href === "/") return path === "/";
  if (href === "/menu/") return path === "/menu";
  return false;
}
