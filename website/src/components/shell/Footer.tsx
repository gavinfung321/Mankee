import Link from "next/link";
import { primaryNav } from "../../lib/navigation";

export function Footer() {
  return (
    <footer className="site-footer flex flex-wrap items-center gap-4 border-t-4 border-lacquer bg-paper px-6 py-8 text-ink">
      <p className="font-display text-[1.35rem] leading-tight font-[650]">
        文記車仔麵
      </p>
      <nav aria-label="頁尾" className="w-full md:ml-auto md:w-auto">
        <ul className="m-0 grid list-none gap-2 p-0 md:flex md:items-center">
          {primaryNav.map((item) => {
            const cta = item.id === "visit";
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={
                    cta
                      ? "nav-cta inline-flex min-h-11 items-center bg-lacquer px-3 text-xl font-bold text-paper no-underline"
                      : "inline-flex min-h-11 items-center px-3 text-ink no-underline"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
