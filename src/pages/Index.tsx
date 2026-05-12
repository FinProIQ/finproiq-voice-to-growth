import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroNew from "@/components/finpro/HeroNew";
import ProblemNew from "@/components/finpro/ProblemNew";
import ProductsNew from "@/components/finpro/ProductsNew";
import HowItWorksNew from "@/components/finpro/HowItWorksNew";
import WhyNew from "@/components/finpro/WhyNew";
import FoundingNew from "@/components/finpro/FoundingNew";
import FAQNew from "@/components/finpro/FAQNew";
import FooterNew from "@/components/finpro/FooterNew";
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
      <HeroNew />
      <ProblemNew />
      <ProductsNew onJoinWaitlist={handleOpenWaitlist} />
      <HowItWorksNew />
      <WhyNew />
      <FoundingNew onJoinWaitlist={handleOpenWaitlist} />
      <FAQNew />
      <FooterNew />
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </main>
  );
};

export default Index;
