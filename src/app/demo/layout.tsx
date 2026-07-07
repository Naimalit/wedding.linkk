import "./demo-frame.css";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { DemoMobileInit } from "@/components/DemoMobileInit";

export default function DemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="demo-shell">
      <DemoMobileInit />
      <PhoneMockup size="demo" className="demo-phone-device">
        {children}
      </PhoneMockup>
    </div>
  );
}
