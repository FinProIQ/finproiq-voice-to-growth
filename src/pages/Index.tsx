import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ModernProfessionals from "@/components/ModernProfessionals";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navigation onOpenCalendly={() => setIsWaitlistOpen(true)} />
      <Hero onOpenCalendly={() => setIsWaitlistOpen(true)} />
      <section id="features">
        <ModernProfessionals onOpenCalendly={() => setIsWaitlistOpen(true)} />
      </section>
      <Features />
      <section id="testimonials">
        <Testimonials />
      </section>
      <FinalCTA onOpenCalendly={() => setIsWaitlistOpen(true)} />
      <Footer />
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </main>
  );
};

export default Index;
