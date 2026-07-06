"use client";

import { useI18n } from "@/lib/i18n";
import { Button } from "./ui/Button";
import { WhatsAppButton } from "./ui/WhatsAppButton";
import { orderMessage } from "@/lib/whatsapp";
import { PRICING } from "@/lib/constants";

export function Hero() {
  const { t, locale } = useI18n();
  const titleLines = t.hero.title.split("\n");

  return (
    <section className="relative isolate min-h-screen bg-[#fafaf8] pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#b76e79]/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-80 w-80 rounded-full bg-[#f4e4e4] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#b76e79]/15 bg-white px-4 py-2 text-sm text-[#b76e79]">
            ✦ {t.hero.badge}
          </div>

          <h1
            className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-[#2c2c2c] sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span className="block text-[#b76e79]">{titleLines[0]}</span>
            <span className="block">{titleLines[1] ?? ""}</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#2c2c2c]/65 md:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppButton
              message={orderMessage("Base", undefined, locale)}
              label={t.hero.ctaPrimary}
              size="lg"
              variant="primary"
            />
            <Button href="/demo/preview" variant="outline" size="lg">
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <a
            href="#pricing"
            className="mt-8 inline-flex items-center rounded-full border border-[#b76e79]/25 bg-white px-6 py-3 text-sm font-medium text-[#b76e79] shadow-sm transition-all hover:border-[#b76e79]/45 hover:bg-[#f4e4e4] hover:shadow-md"
          >
            {t.hero.saveTheDate.replace("€15", `€${PRICING.saveTheDate}`)}
          </a>
        </div>

        <div className="relative z-10 mx-auto mt-20 max-w-sm">
          <a href="/demo/preview" className="group block">
            <div className="relative mx-auto h-[500px] w-[255px] overflow-hidden rounded-[2.75rem] border-[6px] border-[#e8ddd8] bg-[#fafaf8] shadow-2xl shadow-[#b76e79]/15 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[#b76e79]/30">
              <div className="absolute inset-0 bg-gradient-to-b from-[#f4e4e4] via-[#fafaf8] to-[#f4e4e4]/90" />
              <div
                className="absolute inset-0 bg-cover bg-center opacity-35 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/demo/hero.jpg')" }}
              />
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                <p className="mb-4 text-[9px] uppercase tracking-[0.35em] text-[#b76e79]/70">
                  {t.hero.ctaSecondary}
                </p>
                <p
                  className="font-serif text-[2.4rem] leading-none text-[#b76e79]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Erion
                </p>
                <p className="font-serif text-lg text-[#2c2c2c]/25">&amp;</p>
                <p
                  className="font-serif text-[2.4rem] leading-none text-[#b76e79]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Sara
                </p>
                <div className="my-5 h-px w-10 bg-[#b76e79]/30" />
                <p className="text-xs tracking-[0.25em] text-[#2c2c2c]/55">22 · 08 · 2026</p>
                <span className="mt-8 inline-flex items-center gap-1 rounded-full bg-[#b76e79] px-5 py-2.5 text-[10px] font-medium uppercase tracking-widest text-white shadow-md shadow-[#b76e79]/20 transition-colors group-hover:bg-[#9a5a64]">
                  Hap ftesën →
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
