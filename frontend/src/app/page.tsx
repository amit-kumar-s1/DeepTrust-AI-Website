import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import AuroraBackground from "@/components/effects/aurora-background";
import AnimatedGrid from "@/components/effects/animated-grid";
import FloatingOrbs from "@/components/effects/floating-orbs";
import StatsSection from "@/components/sections/stats-section";
import FeaturesSection from "@/components/sections/features-section";
import CategoriesSection from "@/components/sections/categories-section";
import WorkflowSection from "@/components/sections/workflow-section";
import WhyUsSection from "@/components/sections/why-us-section";
import CTASection from "@/components/sections/cta-section";

import HeroSection from "@/components/hero/hero-section";

export default function HomePage() {
  return (
    <>
      <AuroraBackground />

      <AnimatedGrid />

      <FloatingOrbs />

      <Navbar />

      <HeroSection />
      
      <StatsSection />

      <FeaturesSection />
        
      <CategoriesSection />
        
      <WorkflowSection />

      <WhyUsSection />
        
      <CTASection />
      
      <Footer />
    </>
  );
}
