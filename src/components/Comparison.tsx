"use client";

import { Check, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./ui/SectionHeading";

export function Comparison() {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.comparison.title} subtitle={t.comparison.subtitle} />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-medium text-white/60 mb-6">
              {t.comparison.traditional}
            </h3>
            <ul className="space-y-4">
              {t.comparison.traditionalItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/50 text-sm">
                  <X className="w-4 h-4 shrink-0 mt-0.5 text-white/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-rose-gold/30 bg-gradient-to-br from-rose-gold/20 to-transparent p-8">
            <h3 className="text-lg font-medium text-rose-gold-light mb-6">
              {t.comparison.digital}
            </h3>
            <ul className="space-y-4">
              {t.comparison.digitalItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90 text-sm">
                  <Check className="w-4 h-4 shrink-0 mt-0.5 text-rose-gold-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="mt-14 text-center max-w-2xl mx-auto">
          <p
            className="font-serif text-xl md:text-2xl text-white/70 italic leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            &ldquo;{t.comparison.quote}&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
