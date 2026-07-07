"use client";

import dynamic from "next/dynamic";
import { getThemeStyle } from "@/data/theme-styles";

function DemoLoading() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#180818] md:min-h-full md:h-full">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#c76b98]/30 border-t-[#c76b98]" />
    </div>
  );
}

const SacredGardenInvitation = dynamic(
  () => import("./SacredGardenInvitation").then((m) => m.SacredGardenInvitation),
  { ssr: false, loading: DemoLoading },
);

const LuxuryDateRevealInvitation = dynamic(
  () => import("./LuxuryDateRevealInvitation").then((m) => m.LuxuryDateRevealInvitation),
  { ssr: false, loading: DemoLoading },
);

const CelestialEngagementInvitation = dynamic(
  () => import("./CelestialEngagementInvitation").then((m) => m.CelestialEngagementInvitation),
  { ssr: false, loading: DemoLoading },
);

const VibrantVowsInvitation = dynamic(
  () => import("./VibrantVowsInvitation").then((m) => m.VibrantVowsInvitation),
  { ssr: false, loading: DemoLoading },
);

const InvitationPreview = dynamic(
  () => import("./InvitationPreview").then((m) => m.InvitationPreview),
  { ssr: false, loading: DemoLoading },
);

type DemoLoaderProps =
  | { variant: "sacred-garden" }
  | { variant: "luxury-date-reveal" }
  | { variant: "celestial-engagement" }
  | { variant: "vibrant-vows" }
  | { variant: "theme"; slug: string };

export function DemoLoader(props: DemoLoaderProps) {
  if (props.variant === "sacred-garden") {
    return (
      <div className="invitation-demo inv-preset-sacred-garden">
        <SacredGardenInvitation />
      </div>
    );
  }

  if (props.variant === "luxury-date-reveal") {
    return (
      <div className="invitation-demo inv-preset-luxury-date-reveal">
        <LuxuryDateRevealInvitation />
      </div>
    );
  }

  if (props.variant === "celestial-engagement") {
    return (
      <div className="invitation-demo inv-preset-celestial-engagement">
        <CelestialEngagementInvitation />
      </div>
    );
  }

  if (props.variant === "vibrant-vows") {
    return (
      <div className="invitation-demo inv-preset-vibrant-vows">
        <VibrantVowsInvitation />
      </div>
    );
  }

  const themeStyle = getThemeStyle(props.slug);

  if (themeStyle.gateVariant === "vibrant-vows") {
    return (
      <div className="invitation-demo inv-preset-vibrant-vows">
        <VibrantVowsInvitation />
      </div>
    );
  }

  if (themeStyle.gateVariant === "celestial-engagement") {
    return (
      <div className="invitation-demo inv-preset-celestial-engagement">
        <CelestialEngagementInvitation />
      </div>
    );
  }

  if (themeStyle.gateVariant === "sacred-garden") {
    return (
      <div className="invitation-demo inv-preset-sacred-garden">
        <SacredGardenInvitation />
      </div>
    );
  }

  if (themeStyle.gateVariant === "luxury-date-reveal") {
    return (
      <div className="invitation-demo inv-preset-luxury-date-reveal">
        <LuxuryDateRevealInvitation />
      </div>
    );
  }

  return (
    <div className={`invitation-demo inv-preset-${themeStyle.preset}`}>
      <InvitationPreview themeSlug={props.slug} />
    </div>
  );
}
