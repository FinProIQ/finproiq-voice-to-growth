import { useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WaitlistModal from "@/components/WaitlistModal";

const ProductSuite = lazy(() => import("@/components/ProductSuite"));
const TwoFrictionPoints = lazy(() => import("@/components/TwoFrictionPoints"));
const WhatItDoes = lazy(() => import("@/components/WhatItDoes"));
const WhyItWorks = lazy(() => import("@/components/WhyItWorks"));
const PreMeetingFlow = lazy(() => import("@/components/PreMeetingFlow"));
const Outcome = lazy(() => import("@/components/Outcome"));
const LiveDemoCTA = lazy(() => import("@/components/LiveDemoCTA"));
const ThreeWaysToBuy = lazy(() => import("@/components/ThreeWaysToBuy"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Trust = lazy(() => import("@/components/Trust"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FoundingMembers = lazy(() => import("@/components/FoundingMembers"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));

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
      <Suspense fallback={null}>
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
        <Testimonials />
        <FoundingMembers />
        <FinalCTA />
        <Footer />
      </Suspense>
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </main>
  );
};

export default Index;
