import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ModernProfessionals from "@/components/ModernProfessionals";
import ProductSuite from "@/components/ProductSuite";
import HowItWorks from "@/components/HowItWorks";
import Outcome from "@/components/Outcome";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleOpenWaitlist = () => {
    if (window.gtag) {
      window.gtag('event', 'modal_open', {
        event_category: 'engagement',
        event_label: 'Waitlist Modal'
      });
    }
    setIsWaitlistOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Navigation onOpenCalendly={handleOpenWaitlist} />
      <Hero onOpenCalendly={handleOpenWaitlist} />
      <section id="features">
        <ModernProfessionals onOpenCalendly={handleOpenWaitlist} />
      </section>
      <ProductSuite />
      <HowItWorks />
      <Outcome />
      <section id="testimonials">
        <Testimonials />
      </section>
      <FinalCTA onOpenCalendly={handleOpenWaitlist} />
      <Footer />
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </main>
  );
};

export default Index;
