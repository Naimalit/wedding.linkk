import { notFound } from "next/navigation";
import { Great_Vibes, Cormorant_Garamond, DM_Sans } from "next/font/google";
import { THEMES } from "@/data/themes";
import { InvitationPreview } from "@/components/InvitationPreview";
import "../preview/invitation.css";

const script = Great_Vibes({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inv-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inv-sans",
  display: "swap",
});

interface DemoPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return THEMES.map((theme) => ({ slug: theme.slug }));
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const theme = THEMES.find((t) => t.slug === slug);
  if (!theme) notFound();

  return (
    <div className={`${script.variable} ${serif.variable} ${sans.variable} invitation-demo`}>
      <InvitationPreview />
    </div>
  );
}
