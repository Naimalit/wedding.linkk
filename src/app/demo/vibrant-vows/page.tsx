import type { Metadata } from "next";
import { DemoLoader } from "@/components/DemoLoader";
import "../preview/vibrant-vows-gate.css";
import "../preview/vibrant-vows-invitation.css";

export const metadata: Metadata = {
  title: "Demo Ftesë — Vibrant Vows · Erion & Sara | Wedding.linkk",
  description: "Ftesë digjitale dasme me hapje letre & vule qirije — Vibrant Vows demo nga Wedding.linkk",
};

export default function VibrantVowsDemoPage() {
  return <DemoLoader variant="vibrant-vows" />;
}
