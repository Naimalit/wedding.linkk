import type { Metadata } from "next";
import { DemoLoader } from "@/components/DemoLoader";
import "./invitation.css";
import "./sacred-garden-gate.css";
import "./sacred-garden-invitation.css";

export const metadata: Metadata = {
  title: "Demo Ftesë — Sacred Garden · Erion & Sara | Wedding.linkk",
  description: "Shikoni ftesën digjitale Sacred Garden demo nga Wedding.linkk",
};

export default function PreviewDemoPage() {
  return <DemoLoader variant="sacred-garden" />;
}
