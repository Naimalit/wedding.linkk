"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Themes } from "@/components/Themes";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";
import { PackageBuilder } from "@/components/PackageBuilder";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <ErrorBoundary>
      <Header />
      <main className="relative z-0 bg-[#fafaf8]">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Features />
        <Themes />
        <Comparison />
        <Pricing />
        <PackageBuilder />
        <FAQ />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}
