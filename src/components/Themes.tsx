"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { THEMES } from "@/data/themes";
import { SectionHeading } from "./ui/SectionHeading";
import { ThemeCatalog } from "./ThemeCatalog";
import { PremiumDemos } from "./PremiumDemos";

export function Themes() {
  const { t } = useI18n();

  return (
    <section id="themes" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.themes.title}
          subtitle={t.themes.subtitle}
          eyebrow={t.themes.eyebrow}
        />

        <p className="text-center text-sm text-charcoal/50 max-w-2xl mx-auto -mt-6 mb-12">
          {t.themes.hint}
        </p>

        <PremiumDemos compact />

        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-charcoal/35 mb-8">
          {t.themes.moreThemes}
        </p>

        <ThemeCatalog showFeaturedOnly excludePremium />

        <div className="mt-12 text-center">
          <Link
            href="/themes"
            className="inline-flex items-center gap-2 text-sm font-medium text-rose-gold hover:gap-3 transition-all"
          >
            {t.themes.showAll} ({THEMES.length})
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
