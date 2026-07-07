import type { CSSProperties } from "react";
import type { ThemeStylePreset } from "./theme-styles";
import { THEME_STYLE_MAP } from "./theme-styles";

export type ThemeCategory = "wedding" | "engagement" | "henna" | "event";
export type ThemeBadge = "new" | "popular" | "favorite";

export interface Theme {
  id: string;
  slug: string;
  category: ThemeCategory;
  gradient: string;
  accent: string;
  badge?: ThemeBadge;
  featured?: boolean;
  stylePreset: ThemeStylePreset;
  previewBg: string;
  previewAccent: string;
}

export const THEMES: Theme[] = [
  {
    id: "eternal-romance",
    slug: "eternal-romance",
    category: "wedding",
    gradient: "from-rose-50 via-white to-amber-50",
    accent: "#C9A87C",
    badge: "favorite",
    featured: true,
    stylePreset: "eternal-romance",
    previewBg: "#faf6f0",
    previewAccent: "#c9a87c",
  },
  {
    id: "destination-love",
    slug: "destination-love",
    category: "wedding",
    gradient: "from-sky-900 via-blue-950 to-amber-100",
    accent: "#E8C872",
    badge: "popular",
    featured: true,
    stylePreset: "destination-love",
    previewBg: "#0c1929",
    previewAccent: "#e8c872",
  },
  {
    id: "sacred-garden",
    slug: "sacred-garden",
    category: "wedding",
    gradient: "from-green-50 via-emerald-50 to-stone-100",
    accent: "#7D9B76",
    badge: "new",
    featured: true,
    stylePreset: "sacred-garden",
    previewBg: "#f9f6f1",
    previewAccent: "#701d21",
  },
  {
    id: "luxury-date-reveal",
    slug: "luxury-date-reveal",
    category: "wedding",
    gradient: "from-sky-50 via-white to-blue-50",
    accent: "#64A0BD",
    badge: "new",
    featured: true,
    stylePreset: "luxury-date-reveal",
    previewBg: "#fffdfb",
    previewAccent: "#64a0bd",
  },
  {
    id: "celestial-engagement",
    slug: "celestial-engagement",
    category: "engagement",
    gradient: "from-indigo-950 via-slate-900 to-amber-100",
    accent: "#E8C872",
    badge: "new",
    featured: true,
    stylePreset: "celestial-engagement",
    previewBg: "#0c1228",
    previewAccent: "#e8c872",
  },
  {
    id: "blossom-blush",
    slug: "blossom-blush",
    category: "wedding",
    gradient: "from-pink-100 via-rose-50 to-white",
    accent: "#D4A5A5",
    badge: "new",
    featured: true,
    stylePreset: "blossom-blush",
    previewBg: "#fff8f8",
    previewAccent: "#d4a5a5",
  },
  {
    id: "royal-gold",
    slug: "royal-gold",
    category: "wedding",
    gradient: "from-amber-900 via-yellow-900 to-stone-900",
    accent: "#D4AF37",
    featured: true,
    stylePreset: "royal-gold",
    previewBg: "#1a1410",
    previewAccent: "#d4af37",
  },
  {
    id: "minimalist-elegance",
    slug: "minimalist-elegance",
    category: "wedding",
    gradient: "from-white via-stone-50 to-emerald-50",
    accent: "#2D5A4A",
    featured: true,
    stylePreset: "minimalist",
    previewBg: "#ffffff",
    previewAccent: "#2d5a4a",
  },
  {
    id: "dolce-vita",
    slug: "dolce-vita",
    category: "wedding",
    gradient: "from-amber-100 via-orange-50 to-stone-200",
    accent: "#A67B5B",
    featured: true,
    stylePreset: "dolce-vita",
    previewBg: "#faf3eb",
    previewAccent: "#a67b5b",
  },
  {
    id: "vibrant-vows",
    slug: "vibrant-vows",
    category: "wedding",
    gradient: "from-fuchsia-100 via-pink-50 to-purple-100",
    accent: "#C76B98",
    badge: "new",
    featured: true,
    stylePreset: "vibrant-vows",
    previewBg: "#fdf4ff",
    previewAccent: "#c76b98",
  },
  {
    id: "classic-elegance",
    slug: "classic-elegance",
    category: "wedding",
    gradient: "from-stone-100 via-amber-50 to-stone-200",
    accent: "#B76E79",
    stylePreset: "eternal-romance",
    previewBg: "#faf6f0",
    previewAccent: "#b76e79",
  },
  {
    id: "elegant-wedding",
    slug: "elegant-wedding",
    category: "wedding",
    gradient: "from-rose-50 via-white to-rose-100",
    accent: "#C9A87C",
    stylePreset: "eternal-romance",
    previewBg: "#fff8f5",
    previewAccent: "#c9a87c",
  },
  {
    id: "romantic-garden",
    slug: "romantic-garden",
    category: "wedding",
    gradient: "from-green-50 via-emerald-50 to-rose-50",
    accent: "#7D9B76",
    stylePreset: "sacred-garden",
    previewBg: "#f0f8ec",
    previewAccent: "#7d9b76",
  },
  {
    id: "rustic-charm",
    slug: "rustic-charm",
    category: "wedding",
    gradient: "from-amber-100 via-orange-50 to-stone-200",
    accent: "#A67B5B",
    stylePreset: "dolce-vita",
    previewBg: "#f8efe0",
    previewAccent: "#a67b5b",
  },
  {
    id: "ethereal-swan",
    slug: "ethereal-swan",
    category: "wedding",
    gradient: "from-slate-50 via-blue-50 to-white",
    accent: "#8BA4B4",
    stylePreset: "ethereal-light",
    previewBg: "#f8fafc",
    previewAccent: "#8ba4b4",
  },
  {
    id: "day-night",
    slug: "day-night",
    category: "wedding",
    gradient: "from-indigo-950 via-slate-800 to-amber-100",
    accent: "#E8C872",
    stylePreset: "midnight-elegance",
    previewBg: "#0f0c18",
    previewAccent: "#e8c872",
  },
  {
    id: "green-minimalist",
    slug: "green-minimalist",
    category: "wedding",
    gradient: "from-emerald-50 via-white to-stone-50",
    accent: "#2D5A4A",
    stylePreset: "minimalist",
    previewBg: "#f7f7f5",
    previewAccent: "#2d5a4a",
  },
  {
    id: "royal-prince",
    slug: "royal-prince",
    category: "wedding",
    gradient: "from-blue-950 via-indigo-900 to-slate-800",
    accent: "#C9A227",
    stylePreset: "royal-gold",
    previewBg: "#141820",
    previewAccent: "#c9a227",
  },
  {
    id: "pastel-garden",
    slug: "pastel-garden",
    category: "wedding",
    gradient: "from-pink-100 via-purple-50 to-sky-100",
    accent: "#D4A5A5",
    stylePreset: "vibrant-vows",
    previewBg: "#fdf0ff",
    previewAccent: "#c76b98",
  },
  {
    id: "old-money",
    slug: "old-money",
    category: "wedding",
    gradient: "from-stone-200 via-neutral-100 to-stone-300",
    accent: "#1C1C1C",
    stylePreset: "minimalist",
    previewBg: "#f5f5f3",
    previewAccent: "#1c1c1c",
  },
  {
    id: "swan-garden",
    slug: "swan-garden",
    category: "wedding",
    gradient: "from-white via-rose-50 to-slate-100",
    accent: "#B76E79",
    stylePreset: "blossom-blush",
    previewBg: "#fff5f8",
    previewAccent: "#b76e79",
  },
  {
    id: "henna-night",
    slug: "henna-night",
    category: "henna",
    gradient: "from-orange-900 via-red-900 to-amber-800",
    accent: "#E8A838",
    stylePreset: "henna-gold",
    previewBg: "#1a0c08",
    previewAccent: "#e8a838",
  },
  {
    id: "golden-engagement",
    slug: "golden-engagement",
    category: "engagement",
    gradient: "from-amber-50 via-yellow-50 to-orange-100",
    accent: "#C9A87C",
    stylePreset: "engagement-glow",
    previewBg: "#fffaf0",
    previewAccent: "#c9a87c",
  },
];

export function getThemeBySlug(slug: string): Theme | undefined {
  return THEMES.find((t) => t.slug === slug);
}

export function getThemeName(themeId: string, t: (key: string) => string): string {
  return t(`themes.items.${themeId}`);
}

export function getCategoryLabel(category: ThemeCategory, t: (key: string) => string): string {
  return t(`themes.categories.${category}`);
}

export function resolveStylePreset(slug: string): ThemeStylePreset {
  return THEME_STYLE_MAP[slug] ?? "eternal-romance";
}

export function themeCatalogStyle(theme: Theme): CSSProperties {
  return {
    ["--preview-bg" as string]: theme.previewBg,
    ["--preview-accent" as string]: theme.previewAccent,
  };
}
