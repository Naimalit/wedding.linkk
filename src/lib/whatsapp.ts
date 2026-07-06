import { WHATSAPP_NUMBER } from "./constants";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(
  packageName: string,
  theme?: string,
  locale: "sq" | "en" | "mk" = "sq"
): string {
  const templates = {
    sq: `Pershendetje Wedding.linkk! Jam i interesuar për paketën ${packageName}${theme ? ` dhe temën "${theme}"` : ""}. Data e eventit: `,
    en: `Hello Wedding.linkk! I'm interested in the ${packageName} package${theme ? ` and the "${theme}" theme` : ""}. Event date: `,
    mk: `Здраво Wedding.linkk! Сакам пакетот ${packageName}${theme ? ` и темата "${theme}"` : ""}. Датум на настанот: `,
  };
  return templates[locale];
}
