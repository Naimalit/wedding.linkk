export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function cls(
  base: string,
  variants: Record<string, boolean | undefined>
): string {
  const active = Object.entries(variants)
    .filter(([, v]) => v)
    .map(([k]) => k);
  return cn(base, ...active);
}
