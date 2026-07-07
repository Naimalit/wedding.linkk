"use client";

import { useI18n } from "@/lib/i18n";
import { PREMIUM_DEMOS } from "@/data/premium-demos";
import { PhoneMockup } from "./ui/PhoneMockup";

interface PremiumDemosProps {
  compact?: boolean;
}

export function PremiumDemos({ compact = false }: PremiumDemosProps) {
  const { t } = useI18n();

  return (
    <div className={compact ? "mb-10" : "mb-16"}>
      <div className="mb-8 text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-rose-gold/70 mb-2">
          {t.themes.premiumDemos.eyebrow}
        </p>
        <h3
          className="font-serif text-2xl md:text-3xl text-charcoal"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {t.themes.premiumDemos.title}
        </h3>
        <p className="mt-2 text-sm text-charcoal/50 max-w-lg mx-auto">
          {t.themes.premiumDemos.subtitle}
        </p>
      </div>

      <div
        className={`flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:items-end ${
          compact ? "gap-5" : "gap-6 lg:gap-8"
        }`}
      >
        {PREMIUM_DEMOS.map((demo) => {
          const label = t.themes.items[demo.themeId] ?? demo.themeId;

          return (
            <a key={demo.slug} href={demo.href} className="group block no-underline">
              <p
                className="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.25em]"
                style={{ color: demo.accent }}
              >
                {label}
              </p>
              <PhoneMockup size={compact ? "sm" : "md"} hover className={`mx-auto ${demo.glow}`}>
                <div className="relative h-full w-full overflow-hidden bg-[#fafaf8]">
                  <div className={`absolute inset-0 bg-gradient-to-b ${demo.bg}`} />
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-35 transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${demo.image}')` }}
                  />
                  <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-8 text-center">
                    <p
                      className="mb-2 text-[8px] uppercase tracking-[0.35em] opacity-70"
                      style={{ color: demo.accent }}
                    >
                      {t.hero.ctaSecondary}
                    </p>
                    <p
                      className="font-serif text-[1.75rem] leading-none"
                      style={{ fontFamily: "var(--font-serif)", color: demo.accent }}
                    >
                      {demo.names[0]}
                    </p>
                    <p className="font-serif text-sm text-charcoal/25">&amp;</p>
                    <p
                      className="font-serif text-[1.75rem] leading-none"
                      style={{ fontFamily: "var(--font-serif)", color: demo.accent }}
                    >
                      {demo.names[1]}
                    </p>
                    <div
                      className="my-3 h-px w-8 opacity-30"
                      style={{ backgroundColor: demo.accent }}
                    />
                    <p className="text-[9px] tracking-[0.25em] text-charcoal/55">{demo.date}</p>
                    <span
                      className={`mt-5 inline-flex items-center rounded-full px-3.5 py-1.5 text-[8px] font-medium uppercase tracking-widest text-white shadow-md transition-colors ${demo.btn}`}
                    >
                      {t.hero.openInvite}
                    </span>
                  </div>
                </div>
              </PhoneMockup>
            </a>
          );
        })}
      </div>
    </div>
  );
}
