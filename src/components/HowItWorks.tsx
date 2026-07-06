"use client";

import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./ui/SectionHeading";

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.howItWorks.title} subtitle={t.howItWorks.subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.howItWorks.steps.map((step, i) => (
            <div key={step.title} className="relative">
              <span
                className="font-serif text-7xl font-light text-rose-gold/15 leading-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="font-serif text-2xl text-charcoal mt-2 mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {step.title}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
