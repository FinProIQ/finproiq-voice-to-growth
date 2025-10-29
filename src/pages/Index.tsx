import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ModernProfessionals from "@/components/ModernProfessionals";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CalendlyModal from "@/components/CalendlyModal";

const Index = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero onOpenCalendly={() => setIsCalendlyOpen(true)} />
      <Features />
      <ModernProfessionals onOpenCalendly={() => setIsCalendlyOpen(true)} />
      <Testimonials />
      <FinalCTA onOpenCalendly={() => setIsCalendlyOpen(true)} />
      <Footer />
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </main>
  );
};

export default Index;
