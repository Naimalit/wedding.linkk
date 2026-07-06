export type Locale = "sq" | "en" | "mk";

export interface Translations {
  meta: { title: string; description: string };
  nav: {
    themes: string;
    pricing: string;
    howItWorks: string;
    faq: string;
    order: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    saveTheDate: string;
  };
  benefits: { title: string; items: { title: string; desc: string }[] };
  howItWorks: { title: string; subtitle: string; steps: { title: string; desc: string }[] };
  features: { title: string; items: { title: string; desc: string }[] };
  themes: {
    title: string;
    subtitle: string;
    explore: string;
    categories: Record<string, string>;
    items: Record<string, string>;
  };
  comparison: {
    title: string;
    subtitle: string;
    traditional: string;
    digital: string;
    traditionalItems: string[];
    digitalItems: string[];
    quote: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    oneTime: string;
    popular: string;
    getStarted: string;
    choosePremium: string;
    chooseUnlimited: string;
    customTitle: string;
    customDesc: string;
    customCta: string;
    packages: {
      base: { name: string; desc: string; features: string[] };
      premium: { name: string; desc: string; features: string[] };
      unlimited: { name: string; desc: string; features: string[] };
      custom: { name: string; desc: string; features: string[] };
      saveTheDate: { name: string; desc: string; features: string[] };
    };
  };
  builder: {
    title: string;
    subtitle: string;
    orBuild: string;
    baseLabel: string;
    total: string;
    oneTimePayment: string;
    alwaysIncluded: string;
    alwaysIncludedItems: string[];
    addons: Record<string, { name: string; desc: string }>;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  testimonials: { title: string; items: { quote: string; name: string; event: string }[] };
  cta: { title: string; subtitle: string; button: string };
  footer: { tagline: string; rights: string };
}

export const locales: { code: Locale; label: string }[] = [
  { code: "sq", label: "SQ" },
  { code: "en", label: "EN" },
  { code: "mk", label: "MK" },
];
