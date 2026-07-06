"use client";

import { Check, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { PRICING } from "@/lib/constants";
import { orderMessage } from "@/lib/whatsapp";
import { SectionHeading } from "./ui/SectionHeading";
import { WhatsAppButton } from "./ui/WhatsAppButton";
import { cn } from "@/lib/utils";

type PackageKey = "base" | "premium" | "unlimited";

const packageConfig: {
  key: PackageKey;
  price: number;
  popular?: boolean;
  ctaKey: "getStarted" | "choosePremium" | "chooseUnlimited";
}[] = [
  { key: "base", price: PRICING.base, ctaKey: "getStarted" },
  { key: "premium", price: PRICING.premium, popular: true, ctaKey: "choosePremium" },
  { key: "unlimited", price: PRICING.unlimited, ctaKey: "chooseUnlimited" },
];

export function Pricing() {
  const { t, locale } = useI18n();

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.pricing.title} subtitle={t.pricing.subtitle} />

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {packageConfig.map((pkg, i) => {
            const data = t.pricing.packages[pkg.key];
            const ctaLabel = t.pricing[pkg.ctaKey];

            return (
              <div
                key={pkg.key}
                className={cn(
                  "relative rounded-3xl p-8 flex flex-col",
                  pkg.popular
                    ? "bg-charcoal text-white shadow-2xl shadow-charcoal/20 scale-[1.02] border-2 border-rose-gold/40"
                    : "glass"
                )}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1 rounded-full bg-rose-gold text-white text-xs font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    {t.pricing.popular}
                  </span>
                )}

                <h3
                  className="font-serif text-3xl capitalize"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {data.name}
                </h3>
                <p className={cn("mt-2 text-sm", pkg.popular ? "text-white/60" : "text-charcoal/55")}>
                  {data.desc}
                </p>

                <div className="mt-6 mb-8">
                  <span className="font-serif text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
                    €{pkg.price}
                  </span>
                  <span className={cn("text-sm ml-2", pkg.popular ? "text-white/50" : "text-charcoal/45")}>
                    {t.pricing.oneTime}
                  </span>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {data.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check
                        className={cn(
                          "w-4 h-4 shrink-0 mt-0.5",
                          pkg.popular ? "text-rose-gold-light" : "text-rose-gold"
                        )}
                      />
                      <span className={pkg.popular ? "text-white/80" : "text-charcoal/70"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <WhatsAppButton
                  message={orderMessage(data.name, undefined, locale)}
                  label={ctaLabel}
                  className={cn("w-full", pkg.popular && "bg-[#b76e79] hover:bg-[#9a5a64]")}
                />
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl" style={{ fontFamily: "var(--font-serif)" }}>
                {t.pricing.packages.saveTheDate.name}
              </h3>
              <p className="text-sm text-charcoal/55 mt-1">
                {t.pricing.packages.saveTheDate.desc}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-serif text-4xl text-rose-gold" style={{ fontFamily: "var(--font-serif)" }}>
                €{PRICING.saveTheDate}
              </span>
              <WhatsAppButton
                message={orderMessage("Save the Date", undefined, locale)}
                label={t.pricing.getStarted}
                size="sm"
              />
            </div>
          </div>

          <div className="glass rounded-3xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-rose-gold/20">
            <div>
              <h3 className="font-serif text-2xl" style={{ fontFamily: "var(--font-serif)" }}>
                {t.pricing.customTitle}
              </h3>
              <p className="text-sm text-charcoal/55 mt-1">{t.pricing.customDesc}</p>
            </div>
            <WhatsAppButton
              message={orderMessage("Custom", undefined, locale)}
              label={t.pricing.customCta}
              size="sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
