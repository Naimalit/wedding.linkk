"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./ui/SectionHeading";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.faq.title} />

        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <div
              key={item.q}
              className="rounded-2xl border border-rose-gold/10 bg-white overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-blush/20 transition-colors"
              >
                <span className="font-medium text-charcoal pr-4">{item.q}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-rose-gold shrink-0 transition-transform",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              {open === i && (
                <p className="px-5 pb-5 text-sm text-charcoal/60 leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
