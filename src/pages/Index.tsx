import { useState } from "react";
import Navigation from "@/components/Navigation";
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
      <Navigation onOpenCalendly={() => setIsCalendlyOpen(true)} />
      <Hero onOpenCalendly={() => setIsCalendlyOpen(true)} />
      <section id="features">
        <ModernProfessionals onOpenCalendly={() => setIsCalendlyOpen(true)} />
      </section>
      <Features />
      <section id="testimonials">
        <Testimonials />
      </section>
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
