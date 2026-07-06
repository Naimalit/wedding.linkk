"use client";

import { Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./ui/SectionHeading";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.testimonials.title} />

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item) => (
            <div key={item.name} className="glass rounded-3xl p-8 relative">
              <Quote className="w-8 h-8 text-rose-gold/20 absolute top-6 right-6" />
              <p className="text-charcoal/70 leading-relaxed italic">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 pt-6 border-t border-rose-gold/10">
                <p className="font-medium text-charcoal">{item.name}</p>
                <p className="text-sm text-charcoal/45 mt-1">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
