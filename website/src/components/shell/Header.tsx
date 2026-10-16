"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { withBase } from "../../lib/basePath.ts";
import { isCurrentPath, primaryNav } from "../../lib/navigation";

type NavItem = (typeof primaryNav)[number];

const visit = primaryNav.find((item) => item.id === "visit");
const sectionLinks = primaryNav.filter((item) => item.id !== "visit");

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(pathname === "/");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (pathname !== "/") {
      setOverHero(false);
      return;
    }
    const update = () => {
      const hero = document.querySelector(".home-hero");
      if (!(hero instanceof HTMLElement)) {
        setOverHero(false);
        return;
      }
      const travel = Math.max(1, hero.offsetHeight - window.innerHeight);
      const progress = Math.min(
        1,
        Math.max(0, -hero.getBoundingClientRect().top / travel),
      );
      setOverHero(progress < 0.995);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  const overlay = overHero && !open;

  return (
    <header className={`site-header${overlay ? " is-hero" : " is-solid"}`}>
      <nav aria-label="主要" className="masthead">
        <Link href="/" className="brand-mark" aria-label="文記車仔麵首頁">
          <img
            src={withBase("/brand/mankee-logo-transparent.png")}
            alt=""
            width={46}
            height={46}
          />
          <span>文記車仔麵</span>
        </Link>
        <button
          type="button"
          className="menu-toggle ml-auto inline-flex min-h-11 items-center gap-2 px-4 md:hidden"
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
        <ul
          className={`nav-links list-none items-center gap-1 p-0 ${overlay ? "hidden" : "hidden md:flex"}`}
        >
          {sectionLinks.map((item) => (
            <NavLink key={item.id} item={item} pathname={pathname} />
          ))}
        </ul>
        {visit ? (
          <Link href={visit.href} className="nav-cta hidden md:inline-flex">
            {visit.label}
          </Link>
        ) : null}
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
          "inline-flex items-center no-underline",
          cta ? "nav-cta" : "",
          current && !cta ? "is-current" : "",
        ].join(" ")}
      >
        {item.label}
      </Link>
    </li>
  );
}
