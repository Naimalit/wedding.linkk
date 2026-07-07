import { cn } from "@/lib/utils";
import "@/styles/iphone-17-mockup.css";

type PhoneMockupSize = "xs" | "sm" | "md" | "demo";

interface PhoneMockupProps {
  children: React.ReactNode;
  size?: PhoneMockupSize;
  className?: string;
  hover?: boolean;
}

export function PhoneMockup({
  children,
  size = "md",
  className,
  hover = false,
}: PhoneMockupProps) {
  const showButtons = size !== "xs";

  return (
    <div
      className={cn(
        "iphone-17",
        `iphone-17--${size}`,
        hover && "iphone-17--hover",
        className,
      )}
    >
      <div className="iphone-17__shell">
        {showButtons && (
          <>
            <span className="iphone-17__btn iphone-17__btn--silent" aria-hidden />
            <span className="iphone-17__btn iphone-17__btn--vol-up" aria-hidden />
            <span className="iphone-17__btn iphone-17__btn--vol-down" aria-hidden />
            <span className="iphone-17__btn iphone-17__btn--power" aria-hidden />
          </>
        )}
        <div className="iphone-17__screen">
          <div className="iphone-17__island" aria-hidden />
          <div className="iphone-17__content">{children}</div>
        </div>
      </div>
    </div>
  );
}
