"use client";

import { useI18n } from "@/lib/i18n";
import { orderMessage } from "@/lib/whatsapp";
import { WhatsAppButton } from "./ui/WhatsAppButton";

export function FinalCTA() {
  const { t, locale } = useI18n();

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-[2rem] overflow-hidden p-12 md:p-16 bg-gradient-to-br from-rose-gold via-rose-gold-dark to-charcoal text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blush rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2
              className="font-serif text-4xl md:text-5xl font-medium"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t.cta.title}
            </h2>
            <p className="mt-4 text-white/75 text-lg">{t.cta.subtitle}</p>
            <WhatsAppButton
              message={orderMessage("Base", undefined, locale)}
              label={t.cta.button}
              size="lg"
              variant="inverse"
              className="mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
