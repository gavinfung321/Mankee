const desktopQuery = "(min-width: 48rem)";

export function attachTopTenPreview(section: HTMLElement) {
  const feature = section.querySelector(".top-ten-feature");
  const dishes = [...section.querySelectorAll(".top-ten-dish")].filter(
    (item): item is HTMLDetailsElement => item instanceof HTMLDetailsElement,
  );
  if (!(feature instanceof HTMLElement) || dishes.length === 0) return;

  const nameOf = (dish: HTMLDetailsElement) =>
    dish.querySelector("summary")?.textContent?.trim() ?? "";

  const select = (dish: HTMLDetailsElement) => {
    const name = nameOf(dish);
    if (name) feature.textContent = name;
    for (const item of dishes) {
      if (item !== dish && item.open) item.open = false;
    }
    if (!dish.open) dish.open = true;
  };

  for (const dish of dishes) {
    dish.addEventListener("mouseenter", () => {
      if (window.matchMedia(desktopQuery).matches) select(dish);
    });
    dish.addEventListener("focusin", () => {
      if (window.matchMedia(desktopQuery).matches) select(dish);
    });
    dish.addEventListener("toggle", () => {
      if (!dish.open) return;
      const name = nameOf(dish);
      if (name) feature.textContent = name;
      for (const item of dishes) {
        if (item !== dish && item.open) item.open = false;
      }
    });
  }
}
