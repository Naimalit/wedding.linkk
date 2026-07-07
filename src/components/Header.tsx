"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useI18n, locales } from "@/lib/i18n";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "./ui/WhatsAppButton";
import { orderMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/themes", label: t.nav.themes },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "glass shadow-sm py-3" : "bg-white/80 backdrop-blur-sm py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0 hover:opacity-90 transition-opacity">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#2c2c2c]/70 hover:text-[#b76e79] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center rounded-full border border-[#b76e79]/15 bg-white p-0.5">
            {locales.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                className={cn(
                  "px-2.5 py-1 text-xs font-medium rounded-full transition-all",
                  locale === l.code
                    ? "bg-[#b76e79] text-white"
                    : "text-[#2c2c2c]/60 hover:text-[#b76e79]"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <WhatsAppButton
              message={orderMessage("Base", undefined, locale)}
              label={t.nav.order}
              size="sm"
            />
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-full hover:bg-[#f4e4e4]/50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass border-t border-[#b76e79]/10 mt-3">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#2c2c2c]/80 hover:text-[#b76e79] py-2"
              >
                {link.label}
              </a>
            ))}
            <WhatsAppButton
              message={orderMessage("Base", undefined, locale)}
              label={t.nav.order}
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
