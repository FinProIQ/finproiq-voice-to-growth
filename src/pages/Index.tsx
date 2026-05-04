import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductSuite from "@/components/ProductSuite";
import Problem from "@/components/Problem";
import EmailComparison from "@/components/EmailComparison";
import WhatItDoes from "@/components/WhatItDoes";
import WhyItWorks from "@/components/WhyItWorks";
import HowItWorks from "@/components/HowItWorks";
import Outcome from "@/components/Outcome";
import LiveDemoCTA from "@/components/LiveDemoCTA";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
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
      <Hero />
      <Problem />
      <EmailComparison />
      <WhatItDoes />
      <WhyItWorks />
      <HowItWorks />
      <Outcome />
      <LiveDemoCTA />
      <section id="product">
        <ProductSuite />
      </section>
      <Pricing />
      <Trust />
      <section id="testimonials">
        <Testimonials />
      </section>
      <FinalCTA />
      <Footer />
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </main>
  );
};

export default Index;
