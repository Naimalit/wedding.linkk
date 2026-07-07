import type { Metadata } from "next";
import { DemoLoader } from "@/components/DemoLoader";
import "../preview/luxury-date-reveal-gate.css";
import "../preview/luxury-date-reveal-invitation.css";

export const metadata: Metadata = {
  title: "Demo Ftesë — Luxury Date Reveal · Alexa & Richard | Wedding.linkk",
  description: "Shikoni ftesën digjitale luksoze Luxury Date Reveal demo nga Wedding.linkk",
};

export default function LuxuryDateRevealDemoPage() {
  return <DemoLoader variant="luxury-date-reveal" />;
}
