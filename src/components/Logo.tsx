interface LogoProps {
  variant?: "header" | "footer";
  className?: string;
}

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <span
      className={`font-serif tracking-tight leading-none ${
        isFooter
          ? "text-2xl md:text-3xl text-white"
          : "text-xl md:text-[1.35rem] text-[#1a1a1a]"
      } ${className}`}
      style={{ fontFamily: "var(--font-serif)" }}
    >
      Wedding
      <span className={isFooter ? "text-[#d4a5a5]" : "text-[#b76e79]"}>.linkk</span>
    </span>
  );
}
