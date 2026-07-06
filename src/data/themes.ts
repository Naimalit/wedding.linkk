export type ThemeCategory = "wedding" | "engagement" | "henna" | "event";

export interface Theme {
  id: string;
  slug: string;
  category: ThemeCategory;
  gradient: string;
  accent: string;
}

export const THEMES: Theme[] = [
  { id: "classic-elegance", slug: "classic-elegance", category: "wedding", gradient: "from-stone-100 via-amber-50 to-stone-200", accent: "#B76E79" },
  { id: "elegant-wedding", slug: "elegant-wedding", category: "wedding", gradient: "from-rose-50 via-white to-rose-100", accent: "#C9A87C" },
  { id: "romantic-garden", slug: "romantic-garden", category: "wedding", gradient: "from-green-50 via-emerald-50 to-rose-50", accent: "#7D9B76" },
  { id: "rustic-charm", slug: "rustic-charm", category: "wedding", gradient: "from-amber-100 via-orange-50 to-stone-200", accent: "#A67B5B" },
  { id: "royal-gold", slug: "royal-gold", category: "wedding", gradient: "from-amber-900 via-yellow-900 to-stone-900", accent: "#D4AF37" },
  { id: "ethereal-swan", slug: "ethereal-swan", category: "wedding", gradient: "from-slate-50 via-blue-50 to-white", accent: "#8BA4B4" },
  { id: "day-night", slug: "day-night", category: "wedding", gradient: "from-indigo-950 via-slate-800 to-amber-100", accent: "#E8C872" },
  { id: "green-minimalist", slug: "green-minimalist", category: "wedding", gradient: "from-emerald-50 via-white to-stone-50", accent: "#2D5A4A" },
  { id: "royal-prince", slug: "royal-prince", category: "wedding", gradient: "from-blue-950 via-indigo-900 to-slate-800", accent: "#C9A227" },
  { id: "pastel-garden", slug: "pastel-garden", category: "wedding", gradient: "from-pink-100 via-purple-50 to-sky-100", accent: "#D4A5A5" },
  { id: "old-money", slug: "old-money", category: "wedding", gradient: "from-stone-200 via-neutral-100 to-stone-300", accent: "#1C1C1C" },
  { id: "swan-garden", slug: "swan-garden", category: "wedding", gradient: "from-white via-rose-50 to-slate-100", accent: "#B76E79" },
  { id: "henna-night", slug: "henna-night", category: "henna", gradient: "from-orange-900 via-red-900 to-amber-800", accent: "#E8A838" },
  { id: "golden-engagement", slug: "golden-engagement", category: "engagement", gradient: "from-amber-50 via-yellow-50 to-orange-100", accent: "#C9A87C" },
];

export function getThemeName(themeId: string, t: (key: string) => string): string {
  return t(`themes.items.${themeId}`);
}

export function getCategoryLabel(category: ThemeCategory, t: (key: string) => string): string {
  return t(`themes.categories.${category}`);
}
