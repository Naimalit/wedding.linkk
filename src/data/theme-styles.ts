export type ThemeStylePreset =
  | "eternal-romance"
  | "royal-gold"
  | "minimalist"
  | "destination-love"
  | "sacred-garden"
  | "blossom-blush"
  | "dolce-vita"
  | "vibrant-vows"
  | "midnight-elegance"
  | "ethereal-light"
  | "henna-gold"
  | "engagement-glow"
  | "luxury-date-reveal"
  | "celestial-engagement";

export interface ThemeStyleConfig {
  preset: ThemeStylePreset;
  gateVariant: "classic" | "sacred-garden" | "luxury-date-reveal" | "celestial-engagement" | "vibrant-vows";
  gold: string;
  goldLight: string;
  cream: string;
  ivory: string;
  charcoal: string;
  rose: string;
  gateBg: string;
  heroOverlay: string;
  goldGradient: string;
  petalColor: string;
  envelopePaper: string;
  showPetals: boolean;
  heroCorners: boolean;
}

const PRESETS: Record<ThemeStylePreset, ThemeStyleConfig> = {
  "eternal-romance": {
    preset: "eternal-romance",
    gateVariant: "classic",
    gold: "#c9a87c",
    goldLight: "#e8d5b5",
    cream: "#faf6f0",
    ivory: "#fffdf9",
    charcoal: "#141012",
    rose: "#b76e79",
    gateBg: "#0a0908",
    heroOverlay:
      "linear-gradient(to bottom, rgba(10,7,8,0.35) 0%, rgba(10,7,8,0.55) 50%, rgba(10,7,8,0.75) 100%), radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201,168,124,0.1) 0%, transparent 70%)",
    goldGradient: "linear-gradient(135deg, #a8895a 0%, #e8d5b5 40%, #c9a87c 70%, #a8895a 100%)",
    petalColor: "rgba(255, 220, 220, 0.55)",
    envelopePaper: "linear-gradient(180deg, #f8f2e8 0%, #ebe0d0 50%, #ddd0bc 100%)",
    showPetals: true,
    heroCorners: true,
  },
  "royal-gold": {
    preset: "royal-gold",
    gateVariant: "classic",
    gold: "#d4af37",
    goldLight: "#f0dfa0",
    cream: "#1a1410",
    ivory: "#fffef8",
    charcoal: "#f5f0e6",
    rose: "#c9a87c",
    gateBg: "#050403",
    heroOverlay:
      "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(20,15,8,0.75) 50%, rgba(0,0,0,0.88) 100%), radial-gradient(ellipse 60% 45% at 50% 35%, rgba(212,175,55,0.15) 0%, transparent 70%)",
    goldGradient: "linear-gradient(135deg, #b8922e 0%, #f0dfa0 45%, #d4af37 70%, #9a7720 100%)",
    petalColor: "rgba(212, 175, 55, 0.35)",
    envelopePaper: "linear-gradient(180deg, #2a2218 0%, #1a1410 100%)",
    showPetals: false,
    heroCorners: true,
  },
  minimalist: {
    preset: "minimalist",
    gateVariant: "classic",
    gold: "#2d5a4a",
    goldLight: "#7d9b8a",
    cream: "#ffffff",
    ivory: "#ffffff",
    charcoal: "#1a1a1a",
    rose: "#2d5a4a",
    gateBg: "#f7f7f5",
    heroOverlay:
      "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.55) 40%, rgba(247,247,245,0.92) 100%)",
    goldGradient: "linear-gradient(135deg, #2d5a4a 0%, #5a8a72 50%, #2d5a4a 100%)",
    petalColor: "rgba(45, 90, 74, 0.2)",
    envelopePaper: "linear-gradient(180deg, #ffffff 0%, #f5f5f3 100%)",
    showPetals: false,
    heroCorners: false,
  },
  "destination-love": {
    preset: "destination-love",
    gateVariant: "classic",
    gold: "#e8c872",
    goldLight: "#f5e6b8",
    cream: "#0c1929",
    ivory: "#fffdf9",
    charcoal: "#f0f4f8",
    rose: "#6ba3c7",
    gateBg: "#081018",
    heroOverlay:
      "linear-gradient(to bottom, rgba(8,16,24,0.4) 0%, rgba(12,30,48,0.65) 50%, rgba(8,16,24,0.85) 100%), radial-gradient(ellipse 80% 60% at 50% 30%, rgba(107,163,199,0.12) 0%, transparent 65%)",
    goldGradient: "linear-gradient(135deg, #c9a050 0%, #f5e6b8 45%, #e8c872 70%, #a07830 100%)",
    petalColor: "rgba(107, 163, 199, 0.4)",
    envelopePaper: "linear-gradient(180deg, #e8f0f8 0%, #d0dce8 100%)",
    showPetals: true,
    heroCorners: false,
  },
  "sacred-garden": {
    preset: "sacred-garden",
    gateVariant: "sacred-garden",
    gold: "#6b8f63",
    goldLight: "#b8d4b0",
    cream: "#f9f6f1",
    ivory: "#fffefb",
    charcoal: "#2a3428",
    rose: "#701d21",
    gateBg: "#f9f6f1",
    heroOverlay:
      "linear-gradient(to bottom, rgba(249,246,241,0.15) 0%, rgba(125,155,118,0.25) 45%, rgba(42,52,40,0.72) 100%), radial-gradient(ellipse 80% 55% at 50% 35%, rgba(184,212,176,0.2) 0%, transparent 65%)",
    goldGradient: "linear-gradient(135deg, #5a7a54 0%, #b8d4b0 45%, #7d9b76 70%, #4a6644 100%)",
    petalColor: "rgba(184, 212, 176, 0.65)",
    envelopePaper: "linear-gradient(180deg, #faf8f4 0%, #f0ebe3 100%)",
    showPetals: true,
    heroCorners: true,
  },
  "blossom-blush": {
    preset: "blossom-blush",
    gateVariant: "classic",
    gold: "#d4a5a5",
    goldLight: "#f0d0d0",
    cream: "#fff8f8",
    ivory: "#fffdfd",
    charcoal: "#2a1818",
    rose: "#d4a5a5",
    gateBg: "#1a1012",
    heroOverlay:
      "linear-gradient(to bottom, rgba(26,16,18,0.3) 0%, rgba(42,24,28,0.55) 50%, rgba(26,16,18,0.78) 100%), radial-gradient(ellipse 70% 50% at 50% 40%, rgba(212,165,165,0.12) 0%, transparent 70%)",
    goldGradient: "linear-gradient(135deg, #b88888 0%, #f0d0d0 45%, #d4a5a5 70%, #a07070 100%)",
    petalColor: "rgba(240, 180, 190, 0.65)",
    envelopePaper: "linear-gradient(180deg, #fff5f5 0%, #f8e8e8 100%)",
    showPetals: true,
    heroCorners: true,
  },
  "dolce-vita": {
    preset: "dolce-vita",
    gateVariant: "classic",
    gold: "#a67b5b",
    goldLight: "#d4b896",
    cream: "#faf3eb",
    ivory: "#fffaf5",
    charcoal: "#2a1f14",
    rose: "#c4845c",
    gateBg: "#141008",
    heroOverlay:
      "linear-gradient(to bottom, rgba(20,16,8,0.4) 0%, rgba(42,31,20,0.62) 50%, rgba(20,16,8,0.82) 100%), radial-gradient(ellipse 70% 50% at 50% 40%, rgba(166,123,91,0.12) 0%, transparent 70%)",
    goldGradient: "linear-gradient(135deg, #8a6040 0%, #d4b896 45%, #a67b5b 70%, #705030 100%)",
    petalColor: "rgba(212, 184, 150, 0.5)",
    envelopePaper: "linear-gradient(180deg, #f8efe0 0%, #ead8c0 100%)",
    showPetals: false,
    heroCorners: true,
  },
  "vibrant-vows": {
    preset: "vibrant-vows",
    gateVariant: "vibrant-vows",
    gold: "#c76b98",
    goldLight: "#f0a8c8",
    cream: "#fdf4ff",
    ivory: "#fffeff",
    charcoal: "#2a1428",
    rose: "#c76b98",
    gateBg: "#180818",
    heroOverlay:
      "linear-gradient(to bottom, rgba(24,8,24,0.35) 0%, rgba(60,20,50,0.58) 50%, rgba(24,8,24,0.8) 100%), radial-gradient(ellipse 70% 50% at 50% 40%, rgba(199,107,152,0.14) 0%, transparent 70%)",
    goldGradient: "linear-gradient(135deg, #a05078 0%, #f0a8c8 45%, #c76b98 70%, #803860 100%)",
    petalColor: "rgba(240, 168, 200, 0.55)",
    envelopePaper: "linear-gradient(180deg, #fff0f8 0%, #f8d8ec 100%)",
    showPetals: true,
    heroCorners: false,
  },
  "midnight-elegance": {
    preset: "midnight-elegance",
    gateVariant: "classic",
    gold: "#e8c872",
    goldLight: "#f5e8b0",
    cream: "#0f0c18",
    ivory: "#fffdf9",
    charcoal: "#ece8f5",
    rose: "#8b7ec8",
    gateBg: "#060508",
    heroOverlay:
      "linear-gradient(to bottom, rgba(6,5,8,0.5) 0%, rgba(20,15,35,0.72) 50%, rgba(6,5,8,0.9) 100%), radial-gradient(ellipse 60% 45% at 50% 35%, rgba(139,126,200,0.12) 0%, transparent 70%)",
    goldGradient: "linear-gradient(135deg, #c9a050 0%, #f5e8b0 45%, #e8c872 70%, #907020 100%)",
    petalColor: "rgba(139, 126, 200, 0.35)",
    envelopePaper: "linear-gradient(180deg, #1a1428 0%, #120e20 100%)",
    showPetals: false,
    heroCorners: true,
  },
  "ethereal-light": {
    preset: "ethereal-light",
    gateVariant: "classic",
    gold: "#8ba4b4",
    goldLight: "#c8dce8",
    cream: "#f8fafc",
    ivory: "#ffffff",
    charcoal: "#1a2430",
    rose: "#8ba4b4",
    gateBg: "#eef2f6",
    heroOverlay:
      "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(200,220,232,0.45) 50%, rgba(248,250,252,0.88) 100%)",
    goldGradient: "linear-gradient(135deg, #6a8494 0%, #c8dce8 45%, #8ba4b4 70%, #506070 100%)",
    petalColor: "rgba(200, 220, 232, 0.55)",
    envelopePaper: "linear-gradient(180deg, #f8fafc 0%, #e8f0f8 100%)",
    showPetals: true,
    heroCorners: false,
  },
  "henna-gold": {
    preset: "henna-gold",
    gateVariant: "classic",
    gold: "#e8a838",
    goldLight: "#f5d080",
    cream: "#1a0c08",
    ivory: "#fff8f0",
    charcoal: "#f5e8d8",
    rose: "#c45030",
    gateBg: "#100804",
    heroOverlay:
      "linear-gradient(to bottom, rgba(16,8,4,0.45) 0%, rgba(60,20,12,0.7) 50%, rgba(16,8,4,0.88) 100%), radial-gradient(ellipse 70% 50% at 50% 40%, rgba(232,168,56,0.15) 0%, transparent 70%)",
    goldGradient: "linear-gradient(135deg, #c08020 0%, #f5d080 45%, #e8a838 70%, #a06010 100%)",
    petalColor: "rgba(232, 168, 56, 0.4)",
    envelopePaper: "linear-gradient(180deg, #3a2010 0%, #2a1808 100%)",
    showPetals: false,
    heroCorners: true,
  },
  "engagement-glow": {
    preset: "engagement-glow",
    gateVariant: "classic",
    gold: "#c9a87c",
    goldLight: "#f0e0c0",
    cream: "#fffaf0",
    ivory: "#fffef8",
    charcoal: "#2a2018",
    rose: "#c9a87c",
    gateBg: "#141010",
    heroOverlay:
      "linear-gradient(to bottom, rgba(20,16,16,0.35) 0%, rgba(42,32,24,0.58) 50%, rgba(20,16,16,0.78) 100%), radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201,168,124,0.14) 0%, transparent 70%)",
    goldGradient: "linear-gradient(135deg, #a88850 0%, #f0e0c0 45%, #c9a87c 70%, #887040 100%)",
    petalColor: "rgba(240, 224, 192, 0.5)",
    envelopePaper: "linear-gradient(180deg, #fff8f0 0%, #f0e8d8 100%)",
    showPetals: true,
    heroCorners: true,
  },
  "luxury-date-reveal": {
    preset: "luxury-date-reveal",
    gateVariant: "luxury-date-reveal",
    gold: "#64a0bd",
    goldLight: "#9bc9e1",
    cream: "#fffdfb",
    ivory: "#ffffff",
    charcoal: "#3a3a3a",
    rose: "#7a9aaa",
    gateBg: "#fffdfb",
    heroOverlay:
      "linear-gradient(to bottom, rgba(255,253,251,0.15) 0%, rgba(255,253,251,0.45) 50%, rgba(255,253,251,0.65) 100%)",
    goldGradient: "linear-gradient(135deg, #4a8aaa 0%, #9bc9e1 45%, #64a0bd 70%, #3a7a9a 100%)",
    petalColor: "rgba(155, 201, 225, 0.4)",
    envelopePaper: "linear-gradient(180deg, #fffdfb 0%, #f5f0ea 100%)",
    showPetals: false,
    heroCorners: false,
  },
  "celestial-engagement": {
    preset: "celestial-engagement",
    gateVariant: "celestial-engagement",
    gold: "#e8c872",
    goldLight: "#f5e6c0",
    cream: "#faf6ee",
    ivory: "#fffef8",
    charcoal: "#0c1228",
    rose: "#c9a84c",
    gateBg: "#080c1c",
    heroOverlay:
      "linear-gradient(to bottom, rgba(8,12,28,0.3) 0%, rgba(8,12,28,0.65) 50%, rgba(8,12,28,0.9) 100%)",
    goldGradient: "linear-gradient(135deg, #a88a3a 0%, #f5e6c0 45%, #e8c872 70%, #c9a84c 100%)",
    petalColor: "rgba(232, 200, 114, 0.4)",
    envelopePaper: "linear-gradient(180deg, #f5e6c0 0%, #d4b87a 100%)",
    showPetals: false,
    heroCorners: false,
  },
};

/** Maps each theme slug → visual preset (Webgency-style distinct designs) */
export const THEME_STYLE_MAP: Record<string, ThemeStylePreset> = {
  "classic-elegance": "eternal-romance",
  "elegant-wedding": "eternal-romance",
  "romantic-garden": "sacred-garden",
  "rustic-charm": "dolce-vita",
  "royal-gold": "royal-gold",
  "ethereal-swan": "ethereal-light",
  "day-night": "midnight-elegance",
  "green-minimalist": "minimalist",
  "royal-prince": "royal-gold",
  "pastel-garden": "vibrant-vows",
  "old-money": "minimalist",
  "swan-garden": "blossom-blush",
  "henna-night": "henna-gold",
  "golden-engagement": "engagement-glow",
  "sacred-garden": "sacred-garden",
  "blossom-blush": "blossom-blush",
  "destination-love": "destination-love",
  "eternal-romance": "eternal-romance",
  "dolce-vita": "dolce-vita",
  "minimalist-elegance": "minimalist",
  "luxury-date-reveal": "luxury-date-reveal",
  "celestial-engagement": "celestial-engagement",
};

export function getThemeStyle(slug: string): ThemeStyleConfig {
  const preset = THEME_STYLE_MAP[slug] ?? "eternal-romance";
  return PRESETS[preset];
}

export function themeStyleToCssVars(style: ThemeStyleConfig): Record<string, string> {
  return {
    "--inv-gold": style.gold,
    "--inv-gold-light": style.goldLight,
    "--inv-cream": style.cream,
    "--inv-ivory": style.ivory,
    "--inv-charcoal": style.charcoal,
    "--inv-rose": style.rose,
    "--inv-gate-bg": style.gateBg,
    "--inv-hero-overlay": style.heroOverlay,
    "--inv-gold-gradient": style.goldGradient,
    "--inv-petal-color": style.petalColor,
    "--inv-envelope-paper": style.envelopePaper,
  };
}
