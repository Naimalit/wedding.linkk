"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message: string;
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost" | "outline" | "inverse";
  className?: string;
}

export function WhatsAppButton({
  message,
  label,
  size = "md",
  variant = "primary",
  className,
}: WhatsAppButtonProps) {
  return (
    <Button
      href={buildWhatsAppUrl(message)}
      external
      size={size}
      variant={variant}
      className={className}
    >
      <MessageCircle className="w-4 h-4" />
      {label}
    </Button>
  );
}
