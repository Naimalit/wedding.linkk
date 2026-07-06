"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Music, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { type Theme } from "@/data/themes";
import { WhatsAppButton } from "./ui/WhatsAppButton";
import { orderMessage } from "@/lib/whatsapp";

interface DemoViewProps {
  theme: Theme;
}

export function DemoView({ theme }: DemoViewProps) {
  const { t, locale } = useI18n();
  const name = t.themes.items[theme.id] ?? theme.id;
  const category = t.themes.categories[theme.category] ?? theme.category;
  const isDark = theme.gradient.includes("900") || theme.gradient.includes("950");

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.gradient}`}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTMwIDBoMS41djMwSDMwdjMwaDEuNVYwaDEuNXYxLjVIMzBWMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-50" />

      <div className="relative z-10 max-w-lg mx-auto px-4 py-8 min-h-screen flex flex-col">
        <Link
          href="/#themes"
          className={`inline-flex items-center gap-2 text-sm mb-8 w-fit ${
            isDark ? "text-white/70 hover:text-white" : "text-charcoal/60 hover:text-charcoal"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          {t.themes.explore}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center justify-center text-center pb-12"
        >
          <span
            className={`text-[10px] uppercase tracking-[0.3em] mb-6 ${
              isDark ? "text-white/40" : "text-charcoal/40"
            }`}
          >
            {category}
          </span>

          <p
            className={`font-serif text-5xl md:text-6xl mb-4 ${
              isDark ? "text-white" : "text-charcoal"
            }`}
            style={{ fontFamily: "var(--font-serif)", color: isDark ? undefined : theme.accent }}
          >
            Ana & Mark
          </p>

          <div
            className="w-16 h-px my-6"
            style={{ backgroundColor: isDark ? "rgba(255,255,255,0.3)" : theme.accent }}
          />

          <p
            className={`text-sm tracking-widest uppercase ${
              isDark ? "text-white/60" : "text-charcoal/55"
            }`}
          >
            15 · 07 · 2026
          </p>

          <div
            className={`mt-12 grid grid-cols-3 gap-6 text-xs ${
              isDark ? "text-white/50" : "text-charcoal/45"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <Calendar className="w-4 h-4" style={{ color: theme.accent }} />
              <span>Countdown</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: theme.accent }} />
              <span>Location</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Music className="w-4 h-4" style={{ color: theme.accent }} />
              <span>Music</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-12 px-8 py-3 rounded-full text-sm font-medium text-white shadow-lg"
            style={{ backgroundColor: theme.accent }}
          >
            <Heart className="w-4 h-4 inline mr-2 -mt-0.5" />
            RSVP
          </motion.button>

          <p
            className={`mt-8 text-xs ${isDark ? "text-white/30" : "text-charcoal/30"}`}
          >
            Demo · {name}
          </p>
        </motion.div>

        <div className="sticky bottom-6">
          <WhatsAppButton
            message={orderMessage("Base", name, locale)}
            label={t.hero.ctaPrimary}
            className="w-full shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
