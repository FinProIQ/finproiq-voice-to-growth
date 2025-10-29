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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background">
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Where Financial Professionals Grow Smarter
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-foreground max-w-3xl mx-auto font-medium">
            Turn Voice Into Action. Build Trust at Scale. Stay 100% Compliant.
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Your AI-powered Financial Professional Growth Ecosystem — converts voice into compliant client actions in under 60 seconds
          </p>

          <Button 
            variant="default" 
            size="lg" 
            onClick={handleCTAClick}
            className="text-lg px-8 py-6 h-auto"
          >
            Get Started →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
