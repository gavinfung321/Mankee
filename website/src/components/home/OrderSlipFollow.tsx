"use client";

import { useEffect, useRef } from "react";
import { withBase } from "../../lib/basePath.ts";

const stages = [
  ["#how-to-order", 0],
  ["#top-ten", 1],
  [".order-pass", 2],
] as const;

function selectedDishNames() {
  return [...document.querySelectorAll<HTMLElement>("#top-ten [aria-checked='true']")]
    .map((node) => node.dataset.dishName?.trim() ?? "")
    .filter(Boolean);
}

function syncSelection() {
  const names = selectedDishNames();
  const text = names.length > 0 ? names.join("、") : "逐樣揀";
  for (const node of document.querySelectorAll(".slip-toppings span")) {
    if (node.textContent !== text) node.textContent = text;
  }
}

export function OrderSlipFollow() {
  const railRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const rows = [...rail.querySelectorAll<HTMLElement>(".slip-row span")];
    const stamp = rail.querySelector<HTMLElement>(".slip-stamp");
    const markers = stages.flatMap(([selector, stage]) => {
      const node = document.querySelector(selector);
      return node ? [[node, stage] as const] : [];
    });
    const flyQuery = window.matchMedia("(min-width: 1024px)");
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canFly = () => flyQuery.matches && !reduceQuery.matches;

    const hideRail = () => {
      rail.style.opacity = "0";
      rail.style.visibility = "hidden";
      rail.style.transform = "";
      rail.style.transition = "";
      rail.style.boxShadow = "";
    };

    const show = (stage: number) => {
      rows.forEach((row, index) => {
        const revealAt = index < 2 ? 0 : 1;
        row.style.opacity = stage >= revealAt ? "1" : "0.2";
      });
      if (!stamp) return;
      const complete = stage >= 2;
      stamp.style.opacity = complete ? "1" : "0.16";
      stamp.style.transform = complete
        ? "rotate(-8deg) scale(1)"
        : "rotate(-8deg) scale(0.8)";
      stamp.textContent = complete ? "完成" : "落單";
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const height = window.innerHeight;
      let stage = -1;
      for (const [node, value] of markers) {
        const rect = node.getBoundingClientRect();
        if (rect.top < height * 0.78 && rect.bottom > height * 0.22) stage = value;
      }
      show(stage);
      land(stage);
    };

    const land = (stage: number) => {
      const ticket = document.querySelector(".order-ticket");
      if (!(ticket instanceof HTMLElement) || !canFly()) {
        hideRail();
        if (ticket instanceof HTMLElement) ticket.style.opacity = "1";
        return;
      }

      const title = document.querySelector(".order-pass-title");
      const table = document.querySelector(".order-pass-stage");
      if (!(title instanceof HTMLElement) || !(table instanceof HTMLElement)) return;
      const height = document.documentElement.clientHeight;
      const titleRect = title.getBoundingClientRect();
      const tableRect = table.getBoundingClientRect();
      const travel = height * 0.42 + (tableRect.top - titleRect.top);
      const progress = Math.min(1, Math.max(0, (height - titleRect.top) / travel));
      const ticketRect = ticket.getBoundingClientRect();
      const railW = rail.offsetWidth;
      const railH = rail.offsetHeight;
      rail.style.visibility = "visible";
      rail.style.opacity = stage >= 0 ? "1" : "0";
      rail.style.transform = "none";
      const home = rail.getBoundingClientRect();
      const restX = home.left + rail.offsetWidth / 2;
      const restY = home.top + rail.offsetHeight / 2;
      const landX = ticketRect.left + ticketRect.width / 2;
      const landY = ticketRect.top + ticketRect.height / 2;
      const belowTitle = titleRect.bottom + railH / 2 + 28;
      const onTable = tableRect.top + Math.min(72, tableRect.height * 0.2);
      const approachY = Math.min(
        height - railH / 2 - 8,
        Math.max(belowTitle, Math.min(onTable, landY - 24)),
      );
      rail.style.transition = "none";
      if (progress <= 0) {
        rail.style.transform = "";
        rail.style.boxShadow = "";
        ticket.style.opacity = "0";
        return;
      }
      const smooth = (value: number) => {
        const u = Math.min(1, Math.max(0, value));
        return u * u * (3 - 2 * u);
      };
      const rise = smooth(progress / 0.4);
      const slide = smooth((progress - 0.4) / 0.34);
      const drop = smooth((progress - 0.74) / 0.26);
      let x = restX + (landX - restX) * slide;
      let y = restY + (approachY - restY) * rise;
      y += (landY - y) * drop;
      const cardTop = y - railH / 2;
      const cardBottom = y + railH / 2;
      const crossesTitle =
        cardBottom > titleRect.top + 8 && cardTop < titleRect.bottom - 4;
      if (crossesTitle) x = Math.max(x, titleRect.right + railW / 2 + 28);
      const yaw = 6 + (-5 - 6) * slide;
      const pitch = Math.sin(Math.min(1, rise) * Math.PI) * (1 - drop) * 14;
      rail.style.transform = `perspective(900px) translate(${x - restX}px, ${y - restY}px) rotate(${yaw}deg) rotateX(${pitch}deg)`;
      const lift = (1 - drop) * 0.85;
      rail.style.boxShadow = `0 ${10 + lift * 14}px ${18 + lift * 22}px rgba(12, 8, 6, ${0.22 + Math.min(0.16, lift * 0.08)})`;
      const landed = progress >= 0.96;
      ticket.style.opacity = landed ? "1" : "0";
      if (landed) {
        rail.style.opacity = "0";
        rail.style.visibility = "hidden";
        rail.style.transform = "";
        rail.style.boxShadow = "";
        return;
      }
      if (stage >= 1 && stamp && progress > 0.7) {
        stamp.style.opacity = "1";
        stamp.style.transform = "rotate(-8deg) scale(1)";
        stamp.textContent = "完成";
      }
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };
    const topTen = document.querySelector("#top-ten");
    const selection = new MutationObserver(syncSelection);
    if (topTen) {
      selection.observe(topTen, {
        subtree: true,
        attributes: true,
        attributeFilter: ["aria-checked"],
      });
    }
    const onMode = () => update();

    syncSelection();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    flyQuery.addEventListener("change", onMode);
    reduceQuery.addEventListener("change", onMode);
    return () => {
      selection.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      flyQuery.removeEventListener("change", onMode);
      reduceQuery.removeEventListener("change", onMode);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
      <aside ref={railRef} className="order-slip-rail order-slip-card" aria-label="你的文記落單紙">
        <header>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/brand/mankee-logo-transparent.png")} alt="" width={28} height={28} />
          <span>文記落單紙</span>
        </header>
        <div className="slip-row">
          <b>湯</b>
          <span>已選</span>
        </div>
        <div className="slip-row">
          <b>麵</b>
          <span>已選</span>
        </div>
        <div className="slip-row slip-toppings">
          <b>餸</b>
          <span>逐樣揀</span>
        </div>
        <div className="slip-stamp">落單</div>
        <p className="rail-label">由你揀，文記煮。</p>
      </aside>
  );
}
