"use client";

import { Heart, CheckCircle, Crown, QrCode } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./ui/SectionHeading";

const icons = [Heart, CheckCircle, Crown, QrCode];

export function Features() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-gradient-to-b from-blush/30 to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.features.title} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="glass rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-rose-gold/10 text-rose-gold mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className="font-serif text-xl text-charcoal mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/55">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
