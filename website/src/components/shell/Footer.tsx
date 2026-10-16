import Image from "next/image";
import { withBase } from "../../lib/basePath.ts";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { primaryNav } from "../../lib/navigation";

// Owner-supplied 14 Oct 2026.
const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mankeecartnoodles/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587927208864",
    Icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/%E6%96%87%E8%A8%98%E8%BB%8A%E4%BB%94%E9%BA%B5-man-kee-cart-noodles/?viewAsMember=true",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ManKeeCartNoodles",
    Icon: Youtube,
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-layout">
        <div className="footer-brand">
          <Image
            className="footer-seal"
            src={withBase("/brand/mankee-seal-320.webp")}
            alt=""
            width={320}
            height={295}
            sizes="44px"
            loading="lazy"
          />
          <p className="footer-wordmark">文記車仔麵</p>
          <p className="footer-tagline">你揀，文記煮。</p>
        </div>

        <nav aria-label="頁尾" className="footer-zone">
          <p className="footer-zone-label">網站導覽</p>
          <ul className="footer-nav">
            {primaryNav.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-zone">
          <p id="footer-social-label" className="footer-zone-label">
            關注我們
          </p>
          <ul className="footer-social" aria-labelledby="footer-social-label">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label}（新分頁開啟）`}
                >
                  <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
