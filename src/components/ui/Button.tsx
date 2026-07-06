import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "inverse";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

const variantClass = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "text-[#2c2c2c] hover:text-[#b76e79] hover:bg-[#f4e4e4]/40",
  outline: "btn-outline",
  inverse: "btn-inverse",
} as const;

const sizeClass = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
} as const;

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const styles = cn("btn", variantClass[variant], sizeClass[size], className);

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
