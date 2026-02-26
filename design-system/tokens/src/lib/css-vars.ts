import type { ThemeName } from "./themes";
import { themes } from "./themes";

export function applyThemeToElement(
  el: HTMLElement | null,
  theme: ThemeName,
  fallback: ThemeName = "light"
) {
  if (!el) return;

  const safeTheme = themes[theme] ? theme : fallback;
  const vars = themes[safeTheme]

  for (const [key, value] of Object.entries(vars)) {
    el.style.setProperty(key, value)
  }

  el.dataset.theme = safeTheme
}
