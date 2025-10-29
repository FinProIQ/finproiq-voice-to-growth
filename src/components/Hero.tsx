import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  onOpenCalendly: () => void;
}

const Hero = ({ onOpenCalendly }: HeroProps) => {
  const handleCTAClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Hero CTA'
      });
    }
    onOpenCalendly();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Financial growth visualization" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="text-accent font-bold text-lg md:text-xl tracking-wide">
              🏠 FinProIQ
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Where Financial Professionals Grow Smarter
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 max-w-3xl mx-auto font-medium">
            🧠 Turn Voice Into Action. Build Trust at Scale. Stay 100% Compliant.
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto">
            Your AI-powered Financial Professional Growth Ecosystem — converts voice into compliant client actions in under 60 seconds
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="text-primary-foreground/90 space-y-2 text-left sm:text-center">
              <p className="text-base md:text-lg">👉 No more missed follow-ups.</p>
              <p className="text-base md:text-lg">👉 No more compliance anxiety.</p>
              <p className="text-base md:text-lg">👉 Just faster growth — intelligently guided.</p>
            </div>
          </div>

          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleCTAClick}
            className="text-lg px-8 py-6 h-auto animate-pulse-soft"
          >
            Get Started →
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
