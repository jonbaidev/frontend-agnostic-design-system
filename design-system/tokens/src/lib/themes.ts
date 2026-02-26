export type ThemeName = "light" | "dark";

export const themes: Record<ThemeName, Record<string, string>> = {
  light: {
    "--ds-bg": "#ffffff",
    "--ds-fg": "#0b1220",
    "--ds-muted": "#64748b",
    "--ds-border": "#e2e8f0",

    "--ds-brand": "#2563eb",
    "--ds-brand-fg": "#ffffff",

    "--ds-danger": "#ef4444",
    "--ds-danger-fg": "#ffffff",
  },
  dark: {
    "--ds-bg": "#0b1220",
    "--ds-fg": "#e5e7eb",
    "--ds-muted": "#94a3b8",
    "--ds-border": "#1f2937",

    "--ds-brand": "#60a5fa",
    "--ds-brand-fg": "#0b1220",

    "--ds-danger": "#f87171",
    "--ds-danger-fg": "#0b1220",
  },
}
