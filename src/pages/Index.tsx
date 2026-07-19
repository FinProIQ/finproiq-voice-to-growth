import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductSuite from "@/components/ProductSuite";
import TwoFrictionPoints from "@/components/TwoFrictionPoints";
import WhatItDoes from "@/components/WhatItDoes";
import WhyItWorks from "@/components/WhyItWorks";
import PreMeetingFlow from "@/components/PreMeetingFlow";
import Outcome from "@/components/Outcome";
import LiveDemoCTA from "@/components/LiveDemoCTA";
import ThreeWaysToBuy from "@/components/ThreeWaysToBuy";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import FoundingMembers from "@/components/FoundingMembers";
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
      <Helmet>
        <title>FinProIQ - Autonomous Advisor Operating System</title>
        <meta name="description" content="Advisors lose real revenue to slow follow-ups and post-meeting busywork. FinProIQ turns every client conversation into compliant action in 60 seconds." />
        <meta property="og:description" content="Advisors lose real revenue to slow follow-ups and post-meeting busywork. FinProIQ turns every client conversation into compliant action in 60 seconds." />
        <meta property="og:url" content="https://finproiq.com/" />
        <link rel="canonical" href="https://finproiq.com/" />
      </Helmet>
      <Navigation onOpenCalendly={handleOpenWaitlist} />
      <Hero />
      <TwoFrictionPoints />
      <PreMeetingFlow />
      <WhatItDoes />
      <WhyItWorks />
      <ProductSuite />
      <Outcome />
      <LiveDemoCTA />
      <ThreeWaysToBuy />
      <Pricing />
      <Trust />
      <FoundingMembers />
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
