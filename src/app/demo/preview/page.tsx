import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, DM_Sans } from "next/font/google";
import { InvitationPreview } from "@/components/InvitationPreview";
import "./invitation.css";

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

export const metadata: Metadata = {
  title: "Demo Ftesë — Erion & Sara | Wedding.linkk",
  description: "Shikoni një ftesë digjitale luksoze demo nga Wedding.linkk",
};

export default function PreviewDemoPage() {
  return (
    <div className={`${script.variable} ${serif.variable} ${sans.variable} invitation-demo`}>
      <InvitationPreview />
    </div>
  );
}
