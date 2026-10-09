"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { isCurrentPath, primaryNav } from "../../lib/navigation";

type NavItem = (typeof primaryNav)[number];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="site-header bg-jade px-6 py-3 text-paper">
      <nav aria-label="主要" className="flex flex-wrap items-center gap-4">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center font-display text-[1.35rem] leading-tight font-[650] text-paper no-underline"
        >
          文記車仔麵
        </Link>
        <button
          type="button"
          className="ml-auto inline-flex min-h-11 items-center gap-2 px-4 md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X aria-hidden="true" size={20} />
          ) : (
            <Menu aria-hidden="true" size={20} />
          )}
          選單
        </button>
        <ul className="ml-auto hidden list-none items-center gap-2 p-0 md:flex">
          {primaryNav.map((item) => (
            <NavLink key={item.id} item={item} pathname={pathname} />
          ))}
        </ul>
        <AnimatePresence>
          {open ? (
            <motion.ul
              key="mobile-nav"
              className="grid w-full list-none gap-2 p-0 md:hidden"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.16, ease: [0.2, 0, 0, 1] }
              }
            >
              {primaryNav.map((item) => (
                <NavLink
                  key={item.id}
                  item={item}
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                />
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}

function NavLink({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate?: () => void;
}) {
  const current = isCurrentPath(item.href, pathname);
  const cta = item.id === "visit";

  return (
    <li>
      <Link
        href={item.href}
        aria-current={current ? "page" : undefined}
        onClick={onNavigate}
        className={[
          "inline-flex min-h-11 items-center px-3 no-underline",
          cta
            ? "nav-cta bg-lacquer text-xl font-bold text-paper"
            : "text-paper",
          current ? "shadow-[inset_0_-2px_0_var(--noodle)]" : "",
        ].join(" ")}
      >
        {item.label}
      </Link>
    </li>
  );
}
