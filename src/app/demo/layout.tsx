export default function DemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="demo-shell min-h-screen bg-[#0f0c0d] text-[#faf8f5]">
      {children}
    </div>
  );
}
