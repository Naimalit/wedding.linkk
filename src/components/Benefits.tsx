"use client";

import { Link2, Users, Palette, Leaf } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [Link2, Users, Palette, Leaf];

export function Benefits() {
  const { t } = useI18n();

  return (
    <section className="py-16 border-y border-rose-gold/10 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {t.benefits.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blush/60 text-rose-gold mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-charcoal">{item.title}</h3>
                <p className="mt-1 text-sm text-charcoal/55">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
