"use client";

import { type CSSProperties, useEffect, useState } from "react";
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
  const [heroProgress, setHeroProgress] = useState(pathname === "/" ? 0 : 1);
  const [introMode, setIntroMode] = useState<"pending" | "full" | "quick">(
    "pending",
  );
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const introKey = "mankee-header-intro-seen";
    const seen = window.sessionStorage.getItem(introKey) === "true";
    setIntroMode(seen ? "quick" : "full");
    if (!seen) window.sessionStorage.setItem(introKey, "true");
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setHeroProgress(1);
      return;
    }
    const update = () => {
      const hero = document.querySelector(".home-hero");
      if (!(hero instanceof HTMLElement)) {
        setHeroProgress(1);
        return;
      }
      const travel = Math.max(1, hero.offsetHeight - window.innerHeight);
      const progress = Math.min(
        1,
        Math.max(0, -hero.getBoundingClientRect().top / travel),
      );
      setHeroProgress(progress);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  const overlay = pathname === "/" && heroProgress < 0.995 && !open;
  const collapse = overlay ? Math.min(1, heroProgress * 1.7) : 1;
  const headerStyle = {
    "--header-progress": collapse.toFixed(3),
    "--header-bg-alpha": overlay
      ? Math.min(0.94, collapse * 0.9).toFixed(3)
      : "0.98",
    "--header-border-alpha": overlay
      ? Math.max(0, collapse - 0.25).toFixed(3)
      : "1",
  } as CSSProperties;

  return (
    <header
      className={[
        "site-header",
        overlay ? "is-hero" : "is-solid",
        collapse > 0.68 ? "is-condensed" : "",
        `intro-${introMode}`,
      ]
        .filter(Boolean)
        .join(" ")}
      style={headerStyle}
    >
      <nav aria-label="主要" className="masthead">
        <span className="masthead-light" aria-hidden="true" />
        <div className="masthead-bar">
          <Link href="/" className="brand-mark" aria-label="文記車仔麵首頁">
            <img
              src={withBase("/brand/mankee-logo-transparent.png")}
              alt=""
              width={46}
              height={46}
            />
            <span className="brand-wordmark">
              <span>文記車仔麵</span>
            </span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-toggle-icon" aria-hidden="true">
              {open ? <X size={20} /> : <Menu size={20} />}
            </span>
            <span>選單</span>
          </button>
          <ul className="nav-links">
            {sectionLinks.map((item, index) => (
              <NavLink
                key={item.id}
                item={item}
                pathname={pathname}
                introIndex={index}
              />
            ))}
          </ul>
          {visit ? (
            <Link href={visit.href} className="nav-cta nav-cta-desktop">
              <span>{visit.label}</span>
            </Link>
          ) : null}
        </div>
        <AnimatePresence>
          {open ? (
            <motion.ul
              key="mobile-nav"
              className="mobile-nav"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.16, ease: [0.2, 0, 0, 1] }
              }
            >
              {primaryNav.map((item, index) => (
                <NavLink
                  key={item.id}
                  item={item}
                  pathname={pathname}
                  introIndex={index}
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
  introIndex = 0,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  introIndex?: number;
  onNavigate?: () => void;
}) {
  const current = isCurrentPath(item.href, pathname);
  const cta = item.id === "visit";

  return (
    <li style={{ "--nav-index": introIndex } as CSSProperties}>
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
        <span>{item.label}</span>
      </Link>
    </li>
  );
}
