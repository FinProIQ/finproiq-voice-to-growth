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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-violet-50/30 via-white to-white">
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-accent to-violet-500 text-white text-sm font-semibold rounded-full shadow-lg">
              AI-Powered Growth Ecosystem
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Where Financial Professionals Grow <span className="bg-gradient-to-r from-accent to-violet-500 bg-clip-text text-transparent">Smarter</span>
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
            className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-accent to-violet-500 hover:from-accent-hover hover:to-violet-600 shadow-lg hover:shadow-xl transition-all"
          >
            Get Started →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
