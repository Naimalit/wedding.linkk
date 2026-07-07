"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { THEMES } from "@/data/themes";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ThemeCatalog } from "@/components/ThemeCatalog";
import { PremiumDemos } from "@/components/PremiumDemos";

export function ThemesPageContent() {
  const { t } = useI18n();

  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#themes"
            className="inline-flex items-center gap-2 text-sm text-charcoal/50 hover:text-charcoal mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.themes.backHome}
          </Link>

          <SectionHeading
            title={t.themes.catalogTitle}
            subtitle={t.themes.catalogSubtitle}
            eyebrow={t.themes.eyebrow}
          />

          <p className="text-center text-sm text-charcoal/50 max-w-2xl mx-auto -mt-6 mb-14">
            {t.themes.catalogHint}
          </p>

          <PremiumDemos />

          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-charcoal/35 mb-10">
            {t.themes.moreThemes}
          </p>

          <ThemeCatalog excludePremium />

          <p className="text-center text-xs text-charcoal/40 mt-12">
            {THEMES.length} {t.themes.modelsCount}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
