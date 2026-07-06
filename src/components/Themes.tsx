"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { THEMES, getCategoryLabel } from "@/data/themes";
import { SectionHeading } from "./ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Themes() {
  const { t } = useI18n();
  const doubled = [...THEMES, ...THEMES];

  return (
    <section id="themes" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <SectionHeading title={t.themes.title} subtitle={t.themes.subtitle} />

        <div className="mt-10 max-w-2xl mx-auto">
          <Link
            href="/demo/preview"
            className="group flex items-center justify-between gap-4 p-5 rounded-2xl border border-rose-gold/20 bg-gradient-to-r from-blush/40 to-white hover:shadow-lg hover:shadow-rose-gold/10 transition-all"
          >
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-rose-gold mb-1">
                {t.hero.ctaSecondary}
              </p>
              <p className="font-serif text-lg text-charcoal" style={{ fontFamily: "var(--font-serif)" }}>
                Erion & Sara — {t.themes.categories.wedding}
              </p>
              <p className="text-sm text-charcoal/50 mt-1">
                RSVP · Countdown · Timeline · Gallery · Map
              </p>
            </div>
            <span className="flex items-center gap-1 text-sm text-rose-gold group-hover:gap-2 transition-all shrink-0">
              {t.themes.explore}
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-6 px-4">
          {doubled.map((theme, i) => (
            <ThemeCard key={`${theme.id}-${i}`} theme={theme} t={t} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {THEMES.slice(0, 8).map((theme) => (
            <ThemeCard key={theme.id} theme={theme} t={t} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

function ThemeCard({
  theme,
  t,
  compact,
}: {
  theme: (typeof THEMES)[0];
  t: ReturnType<typeof useI18n>["t"];
  compact?: boolean;
}) {
  const name = t.themes.items[theme.id] ?? theme.id;
  const category = getCategoryLabel(theme.category, (key) => {
    const id = key.replace("themes.categories.", "") as keyof typeof t.themes.categories;
    return t.themes.categories[id] ?? id;
  });

  return (
    <Link
      href={`/demo/${theme.slug}`}
      className={cn(
        "group block theme-card-shine rounded-3xl overflow-hidden border border-rose-gold/10 bg-white shadow-sm hover:shadow-xl hover:shadow-rose-gold/10 transition-all duration-500",
        compact ? "w-full" : "w-[280px] shrink-0"
      )}
    >
      <div
        className={cn(
          "relative bg-gradient-to-br flex flex-col items-center justify-center text-center p-6",
          theme.gradient,
          compact ? "h-48" : "h-56"
        )}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 mb-3">
          {category}
        </span>
        <p
          className="font-serif text-2xl text-charcoal/90 group-hover:scale-105 transition-transform"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {name}
        </p>
        <p className="text-xs text-charcoal/40 mt-2">Wedding · July 15, 2026</p>
      </div>
      <div className="flex items-center justify-between px-5 py-4 bg-white">
        <span className="text-sm font-medium text-charcoal">{name}</span>
        <span className="flex items-center gap-1 text-sm text-rose-gold group-hover:gap-2 transition-all">
          {t.themes.explore}
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
