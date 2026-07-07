import { notFound } from "next/navigation";
import { THEMES } from "@/data/themes";
import { getThemeStyle } from "@/data/theme-styles";
import { DemoLoader } from "@/components/DemoLoader";
import "../preview/invitation.css";
import "../preview/sacred-garden-gate.css";
import "../preview/sacred-garden-invitation.css";

interface DemoPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return THEMES.filter(
    (t) =>
      t.slug !== "luxury-date-reveal" &&
      t.slug !== "celestial-engagement" &&
      t.slug !== "vibrant-vows",
  ).map((theme) => ({
    slug: theme.slug,
  }));
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const theme = THEMES.find((t) => t.slug === slug);
  if (!theme) notFound();

  const themeStyle = getThemeStyle(theme.slug);
  if (
    themeStyle.gateVariant === "luxury-date-reveal" ||
    themeStyle.gateVariant === "celestial-engagement" ||
    themeStyle.gateVariant === "vibrant-vows"
  ) {
    notFound();
  }

  return <DemoLoader variant="theme" slug={theme.slug} />;
}
