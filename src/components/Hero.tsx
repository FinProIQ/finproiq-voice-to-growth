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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-accent/5 via-white to-white">
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-accent to-accent-hover text-white text-sm font-semibold rounded-full shadow-lg">
              AI-Powered Growth Ecosystem
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Never Miss a Lead — Convert Every Conversation Into a <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">Client</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FinProIQ turns your voice notes and client meetings into compliant follow-ups, CRM updates, and emotionally intelligent messages — all in under 60 seconds. Stay proactive, stay compliant, and stay human.
          </p>

          <Button 
            variant="default" 
            size="lg" 
            onClick={handleCTAClick}
            className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent shadow-lg hover:shadow-xl transition-all"
          >
            Join Waitlist →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
