const desktopQuery = "(min-width: 48rem)";

export function attachTopTenPreview(section: HTMLElement) {
  const feature = section.querySelector(".top-ten-feature");
  const dishes = [...section.querySelectorAll(".top-ten-dish")].filter(
    (item): item is HTMLDetailsElement => item instanceof HTMLDetailsElement,
  );
  if (!(feature instanceof HTMLElement) || dishes.length === 0) return;

  const nameOf = (dish: HTMLDetailsElement) =>
    dish.querySelector("summary")?.textContent?.trim() ?? "";

  const photo = section.querySelector(".dish-preview-photo");
  const note = section.querySelector(".dish-preview-note");

  const show = (dish: HTMLDetailsElement) => {
    const name = nameOf(dish);
    if (name) feature.textContent = name;
    if (photo instanceof HTMLImageElement && dish.dataset.image) {
      photo.src = dish.dataset.image;
      photo.alt = name;
    }
    if (note instanceof HTMLElement && dish.dataset.description) {
      note.textContent = dish.dataset.description;
    }
  };

  const select = (dish: HTMLDetailsElement) => {
    show(dish);
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
      show(dish);
      for (const item of dishes) {
        if (item !== dish && item.open) item.open = false;
      }
    });
  }
}
