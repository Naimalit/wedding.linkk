"use client";

import Link from "next/link";
import { Eye, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { THEMES, getCategoryLabel, type Theme } from "@/data/themes";
import { PREMIUM_DEMO_SET, getPremiumDemoHref } from "@/data/premium-demos";
import { buildWhatsAppUrl, orderMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { PhoneMockup } from "./ui/PhoneMockup";

const DEMO_PREVIEWS: Record<
  string,
  { name1: string; name2: string; date: string; initials: string; image?: string }
> = {
  "sacred-garden": {
    name1: "Erion",
    name2: "Sara",
    date: "22 · 08 · 2026",
    initials: "E&S",
  },
  "luxury-date-reveal": {
    name1: "Alexa",
    name2: "Richard",
    date: "14 · 09 · 2025",
    initials: "A&R",
    image: "/demo/luxury-date-reveal/venue.jpg",
  },
  "celestial-engagement": {
    name1: "Elira",
    name2: "Arben",
    date: "18 · 10 · 2026",
    initials: "E&A",
    image: "/demo/celestial-engagement/hero.jpg",
  },
  "vibrant-vows": {
    name1: "Erion",
    name2: "Sara",
    date: "22 · 08 · 2026",
    initials: "E&S",
    image: "/demo/hero.jpg",
  },
};

interface ThemeCatalogProps {
  limit?: number;
  showFeaturedOnly?: boolean;
  excludePremium?: boolean;
  className?: string;
}

export function ThemeCatalog({
  limit,
  showFeaturedOnly,
  excludePremium,
  className,
}: ThemeCatalogProps) {
  const { t, locale } = useI18n();

  let items = showFeaturedOnly ? THEMES.filter((th) => th.featured) : THEMES;
  if (excludePremium) items = items.filter((th) => !PREMIUM_DEMO_SET.has(th.id));
  if (limit) items = items.slice(0, limit);

  return (
    <div className={cn("grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", className)}>
      {items.map((theme) => (
        <ThemeCatalogCard key={theme.id} theme={theme} t={t} locale={locale} />
      ))}
    </div>
  );
}

function ThemeCatalogCard({
  theme,
  t,
  locale,
}: {
  theme: Theme;
  t: ReturnType<typeof useI18n>["t"];
  locale: ReturnType<typeof useI18n>["locale"];
}) {
  const name = t.themes.items[theme.id] ?? theme.id;
  const category = getCategoryLabel(theme.category, (key) => {
    const id = key.replace("themes.categories.", "") as keyof typeof t.themes.categories;
    return t.themes.categories[id] ?? id;
  });
  const orderUrl = buildWhatsAppUrl(orderMessage("Premium", name, locale));
  const previewHref = getPremiumDemoHref(theme.id) ?? `/demo/${theme.slug}`;
  const preview = DEMO_PREVIEWS[theme.id];
  const displayName1 = preview?.name1 ?? "Erion";
  const displayName2 = preview?.name2 ?? "Sara";
  const displayDate = preview?.date ?? "22 · 08 · 2026";
  const displayInitials = preview?.initials ?? "E&S";

  return (
    <article className="group flex flex-col rounded-3xl overflow-hidden border border-rose-gold/15 bg-white shadow-sm hover:shadow-xl hover:shadow-rose-gold/10 transition-all duration-500">
      <div className="relative p-4 pb-0">
        {theme.badge && (
          <span
            className={cn(
              "absolute top-6 left-6 z-10 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider",
              theme.badge === "popular" && "bg-amber-100 text-amber-800",
              theme.badge === "new" && "bg-emerald-100 text-emerald-800",
              theme.badge === "favorite" && "bg-rose-100 text-rose-800"
            )}
          >
            {t.themes.badges?.[theme.badge] ?? theme.badge}
          </span>
        )}

        <PhoneMockup size="xs" className="mx-auto">
          <div className="relative h-full w-full overflow-hidden" style={{ background: theme.previewBg }}>
            {preview?.image && (
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{ backgroundImage: `url('${preview.image}')` }}
              />
            )}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-3 pt-7 text-center">
              <span
                className="text-[7px] uppercase tracking-[0.35em] mb-1.5 opacity-50"
                style={{ color: theme.previewAccent }}
              >
                {category}
              </span>
              <p
                className="font-serif text-sm leading-tight opacity-90"
                style={{ fontFamily: "var(--font-serif)", color: theme.previewAccent }}
              >
                {displayName1}
              </p>
              <p className="text-[10px] opacity-40 my-0.5" style={{ color: theme.previewAccent }}>
                &
              </p>
              <p
                className="font-serif text-sm leading-tight opacity-90"
                style={{ fontFamily: "var(--font-serif)", color: theme.previewAccent }}
              >
                {displayName2}
              </p>
              <div
                className="mt-2 w-7 h-7 rounded-full border-2 flex items-center justify-center text-[8px] font-serif"
                style={{ borderColor: theme.previewAccent, color: theme.previewAccent }}
              >
                {displayInitials}
              </div>
              <p className="mt-2 text-[6px] uppercase tracking-[0.25em] opacity-35" style={{ color: theme.previewAccent }}>
                {displayDate}
              </p>
            </div>
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 opacity-20"
              style={{
                background: `linear-gradient(to top, ${theme.previewAccent}, transparent)`,
              }}
            />
          </div>
        </PhoneMockup>
      </div>

      <div className="flex flex-col flex-1 p-5 pt-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 mb-1">{category}</p>
        <h3
          className="font-serif text-xl text-charcoal mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {name}
        </h3>

        <div className="mt-auto flex gap-2">
          <Link
            href={previewHref}
            className="btn btn-secondary flex-1 !py-2.5 !text-xs !px-3 inline-flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            {t.themes.preview}
          </Link>
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-1 !py-2.5 !text-xs !px-3 inline-flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            {t.themes.order}
          </a>
        </div>
      </div>
    </article>
  );
}
