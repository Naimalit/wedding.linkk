"use client";

import { useI18n } from "@/lib/i18n";
import { Button } from "./ui/Button";
import { WhatsAppButton } from "./ui/WhatsAppButton";
import { orderMessage } from "@/lib/whatsapp";
import { PRICING } from "@/lib/constants";
import { PREMIUM_DEMOS } from "@/data/premium-demos";
import { PhoneMockup } from "./ui/PhoneMockup";

export function Hero() {
  const { t, locale } = useI18n();
  const titleLines = t.hero.title.split("\n");

  return (
    <section className="relative isolate min-h-screen bg-[#fafaf8] pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#b76e79]/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-80 w-80 rounded-full bg-[#f4e4e4] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#64a0bd]/8 blur-3xl" />
        <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-[#e8c872]/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 h-56 w-56 rounded-full bg-[#c76b98]/10 blur-3xl" />
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
            <Button href="#themes" variant="outline" size="lg">
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

        <div className="relative z-10 mx-auto mt-20 flex max-w-6xl flex-col items-center justify-center gap-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-center sm:gap-5 lg:gap-6">
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
                <PhoneMockup size="md" hover className={`mx-auto ${demo.glow}`}>
                  <div className="relative h-full w-full overflow-hidden bg-[#fafaf8]">
                    <div className={`absolute inset-0 bg-gradient-to-b ${demo.bg}`} />
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-35 transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${demo.image}')` }}
                    />
                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 pt-8 text-center">
                      <p
                        className="mb-3 text-[8px] uppercase tracking-[0.35em] opacity-70"
                        style={{ color: demo.accent }}
                      >
                        {t.hero.ctaSecondary}
                      </p>
                      <p
                        className="font-serif text-[2rem] leading-none sm:text-[1.85rem]"
                        style={{ fontFamily: "var(--font-serif)", color: demo.accent }}
                      >
                        {demo.names[0]}
                      </p>
                      <p className="font-serif text-base text-[#2c2c2c]/25">&amp;</p>
                      <p
                        className="font-serif text-[2rem] leading-none sm:text-[1.85rem]"
                        style={{ fontFamily: "var(--font-serif)", color: demo.accent }}
                      >
                        {demo.names[1]}
                      </p>
                      <div className="my-4 h-px w-10 opacity-30" style={{ backgroundColor: demo.accent }} />
                      <p className="text-[10px] tracking-[0.25em] text-[#2c2c2c]/55">{demo.date}</p>
                      <span
                        className={`mt-6 inline-flex items-center rounded-full px-4 py-2 text-[8px] font-medium uppercase tracking-widest text-white shadow-md transition-colors ${demo.btn}`}
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
    </section>
  );
}
