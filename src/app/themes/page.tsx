import type { Metadata } from "next";
import { ThemesPageContent } from "@/components/ThemesPageContent";

export const metadata: Metadata = {
  title: "Temat e Ftesave — Wedding.linkk",
  description: "Shfletoni të gjitha modelet e ftesave digjitale dhe zgjidhni stilin tuaj.",
};

export default function ThemesPage() {
  return <ThemesPageContent />;
}
