interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto mb-14" : "mb-14"}>
      <h2
        className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal tracking-tight"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-charcoal/60 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
