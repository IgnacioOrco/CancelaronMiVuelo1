import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PricingSection } from "@/components/sections/PricingSection";
import { TrustSecurity } from "@/components/sections/TrustSecurity";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F8F9FA] relative">
      {/* Top sticky navigation bar */}
      <Navbar />

      {/* Hero section with claim selector and primary WhatsApp CTA */}
      <HeroSection />

      {/* AbogacIAr value proposition and 5 pillars */}
      <ValueProposition />

      {/* 7-step process timeline (Free Stage vs Paid Stage) */}
      <ProcessTimeline />

      {/* Pricing section with 4 comparative cards */}
      <PricingSection />

      {/* Trust & Security: 4 unbreakable rules and Estudio Marquez endorsement */}
      <TrustSecurity />

      {/* Interactive FAQ accordion */}
      <FaqSection />

      {/* High-converting bottom CTA banner */}
      <FinalCtaSection />

      {/* Institutional footer */}
      <Footer />

      {/* Floating active WhatsApp launcher */}
      <FloatingWhatsApp />
    </main>
  );
}
