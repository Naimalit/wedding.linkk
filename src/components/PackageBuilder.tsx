"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ADDONS, PRICING } from "@/lib/constants";
import { orderMessage } from "@/lib/whatsapp";
import { SectionHeading } from "./ui/SectionHeading";
import { WhatsAppButton } from "./ui/WhatsAppButton";
import { cn } from "@/lib/utils";

export function PackageBuilder() {
  const { t, locale } = useI18n();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const total = useMemo(() => {
    let sum = PRICING.base;
    ADDONS.forEach((addon) => {
      if (selected.has(addon.id)) sum += addon.price;
    });
    return sum;
  }, [selected]);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const addonNames = selected.size
    ? Array.from(selected)
        .map((id) => t.builder.addons[id]?.name ?? id)
        .join(", ")
    : "";

  const message = orderMessage(`Custom (€${total})${addonNames ? ` — ${addonNames}` : ""}`, undefined, locale);

  return (
    <section className="py-24 bg-gradient-to-b from-cream to-blush/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.builder.title} subtitle={t.builder.subtitle} />

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-3">
            <p className="text-sm font-medium text-charcoal/50 mb-4">{t.builder.orBuild}</p>
            {ADDONS.map((addon) => {
              const data = t.builder.addons[addon.id];
              const isOn = selected.has(addon.id);
              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggle(addon.id)}
                  className={cn(
                    "w-full flex items-center justify-between gap-4 p-5 rounded-2xl border text-left transition-all",
                    isOn
                      ? "border-rose-gold bg-white shadow-md shadow-rose-gold/10"
                      : "border-rose-gold/10 bg-white/60 hover:border-rose-gold/30"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5",
                        isOn ? "border-rose-gold bg-rose-gold" : "border-charcoal/20"
                      )}
                    >
                      {isOn && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">{data.name}</p>
                      <p className="text-sm text-charcoal/50">{data.desc}</p>
                    </div>
                  </div>
                  <span className="text-rose-gold font-medium shrink-0">+€{addon.price}</span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-2 glass rounded-3xl p-8 h-fit sticky top-28">
            <h3 className="font-serif text-2xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              {t.builder.total}
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-charcoal/70">
                <span>{t.builder.baseLabel}</span>
                <span>€{PRICING.base}</span>
              </div>
              {ADDONS.filter((a) => selected.has(a.id)).map((addon) => (
                <div key={addon.id} className="flex justify-between text-charcoal/70">
                  <span>{t.builder.addons[addon.id].name}</span>
                  <span>+€{addon.price}</span>
                </div>
              ))}
              <div className="border-t border-rose-gold/15 pt-4 flex justify-between items-baseline">
                <span className="font-medium">{t.builder.total}</span>
                <div>
                  <span className="font-serif text-4xl text-rose-gold" style={{ fontFamily: "var(--font-serif)" }}>
                    €{total}
                  </span>
                  <p className="text-xs text-charcoal/45 mt-1">{t.builder.oneTimePayment}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-rose-gold/10">
              <p className="text-xs font-medium text-charcoal/45 uppercase tracking-wider mb-3">
                {t.builder.alwaysIncluded}
              </p>
              <ul className="space-y-2">
                {t.builder.alwaysIncludedItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-charcoal/60">
                    <Check className="w-3 h-3 text-rose-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <WhatsAppButton message={message} label={t.pricing.getStarted} className="w-full mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
