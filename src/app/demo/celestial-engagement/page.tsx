import type { Metadata } from "next";
import { DemoLoader } from "@/components/DemoLoader";
import "../preview/celestial-engagement-gate.css";
import "../preview/celestial-engagement-invitation.css";

export const metadata: Metadata = {
  title: "Demo Ftesë — Celestial Engagement · Elira & Arben | Wedding.linkk",
  description: "Ftesë digjitale luksoze për fejesë — Celestial Engagement demo nga Wedding.linkk",
};

export default function CelestialEngagementDemoPage() {
  return <DemoLoader variant="celestial-engagement" />;
}
