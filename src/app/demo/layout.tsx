import "./demo-frame.css";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export default function DemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="demo-shell">
      <PhoneMockup size="demo" className="demo-phone-device">
        {children}
      </PhoneMockup>
    </div>
  );
}
