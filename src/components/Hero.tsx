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
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full shadow-lg">
              AI-Powered Growth Ecosystem
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Never Miss a Lead - Convert Every Conversation Into a <span className="text-accent">Client</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto text-left">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-accent mb-3">Voice-to-Action</h3>
              <p className="text-foreground/90 leading-relaxed">
                Turn your <span className="font-semibold">voice notes</span> and <span className="font-semibold">client meetings</span> into compliant follow-ups, CRM updates, and emotionally intelligent messages - all in <span className="text-accent font-semibold">under 60 seconds</span>.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-accent mb-3">Workflow Automation</h3>
              <p className="text-foreground/90 leading-relaxed">
                Automate your <span className="font-semibold">client provisioning</span> from scheduler to CRM - reducing manual steps and ensuring no client slips through the cracks.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Stay proactive, stay compliant, and stay human.
          </p>

          <div className="mb-8 max-w-2xl mx-auto">
            <video 
              className="w-full rounded-lg shadow-2xl border border-border"
              controls
              preload="metadata"
            >
              <source src="/videos/hero-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <Button
            variant="default" 
            size="lg" 
            onClick={handleCTAClick}
            className="text-lg px-8 py-6 h-auto bg-accent hover:bg-accent-hover text-accent-foreground shadow-lg hover:shadow-xl transition-all"
          >
            Join Waitlist →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
