export const PREMIUM_DEMO_SLUGS = [
  "vibrant-vows",
  "sacred-garden",
  "luxury-date-reveal",
  "celestial-engagement",
] as const;

export type PremiumDemoSlug = (typeof PREMIUM_DEMO_SLUGS)[number];

export const PREMIUM_DEMO_SET = new Set<string>(PREMIUM_DEMO_SLUGS);

export interface PremiumDemoConfig {
  slug: PremiumDemoSlug;
  href: string;
  themeId: PremiumDemoSlug;
  names: [string, string];
  date: string;
  accent: string;
  border: string;
  bg: string;
  image: string;
  glow: string;
  btn: string;
}

export const PREMIUM_DEMOS: PremiumDemoConfig[] = [
  {
    slug: "vibrant-vows",
    href: "/demo/vibrant-vows",
    themeId: "vibrant-vows",
    names: ["Erion", "Sara"],
    date: "22 · 08 · 2026",
    accent: "#c76b98",
    border: "#f0c8dc",
    bg: "from-[#fdf4ff] via-[#f8d8ec] to-[#f0c0dc]",
    image: "/demo/hero.jpg",
    glow: "shadow-[#c76b98]/15 group-hover:shadow-[#c76b98]/35",
    btn: "bg-[#c76b98] shadow-[#c76b98]/25 group-hover:bg-[#a05078]",
  },
  {
    slug: "sacred-garden",
    href: "/demo/preview",
    themeId: "sacred-garden",
    names: ["Erion", "Sara"],
    date: "22 · 08 · 2026",
    accent: "#b76e79",
    border: "#e8ddd8",
    bg: "from-[#f4e4e4] via-[#fafaf8] to-[#f4e4e4]/90",
    image: "/demo/hero.jpg",
    glow: "shadow-[#b76e79]/15 group-hover:shadow-[#b76e79]/30",
    btn: "bg-[#b76e79] shadow-[#b76e79]/20 group-hover:bg-[#9a5a64]",
  },
  {
    slug: "luxury-date-reveal",
    href: "/demo/luxury-date-reveal",
    themeId: "luxury-date-reveal",
    names: ["Alexa", "Richard"],
    date: "14 · 09 · 2025",
    accent: "#64a0bd",
    border: "#d4e8f0",
    bg: "from-[#e8f4fa] via-[#fffdfb] to-[#e8f4fa]/90",
    image: "/demo/luxury-date-reveal/venue.jpg",
    glow: "shadow-[#64a0bd]/15 group-hover:shadow-[#64a0bd]/30",
    btn: "bg-[#64a0bd] shadow-[#64a0bd]/20 group-hover:bg-[#4a8aaa]",
  },
  {
    slug: "celestial-engagement",
    href: "/demo/celestial-engagement",
    themeId: "celestial-engagement",
    names: ["Elira", "Arben"],
    date: "18 · 10 · 2026",
    accent: "#e8c872",
    border: "#2a3050",
    bg: "from-[#0c1228] via-[#141c38] to-[#0c1228]",
    image: "/demo/celestial-engagement/hero.jpg",
    glow: "shadow-[#e8c872]/20 group-hover:shadow-[#e8c872]/40",
    btn: "bg-gradient-to-r from-[#c9a84c] to-[#e8c872] text-[#0c1228] shadow-[#e8c872]/25 group-hover:from-[#b8944a] group-hover:to-[#f5e6c0]",
  },
];

export function getPremiumDemoHref(slug: string): string | undefined {
  return PREMIUM_DEMOS.find((d) => d.slug === slug)?.href;
}
