import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ClipboardList } from "lucide-react";

interface FinalCTAProps {
  onOpenCalendly: () => void;
}

const FinalCTA = ({ onOpenCalendly }: FinalCTAProps) => {
  const handleCTAClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Final CTA'
      });
    }
    onOpenCalendly();
  };

  const handleDiscoveryClick = () => {
    if (window.gtag) {
      window.gtag('event', 'discovery_click', {
        event_category: 'engagement',
        event_label: 'Final CTA Discovery'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-accent/5">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Ready to <span className="text-accent">Transform Your Practice?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-foreground">
            Experience the <span className="text-accent font-bold">fastest way</span> to stay <span className="font-bold">compliant, personal, and proactive</span> — without lifting a finger.
          </p>

          <Button 
            variant="default" 
            size="lg"
            onClick={handleCTAClick}
            className="text-lg px-10 py-5 h-auto rounded-xl bg-accent hover:bg-accent-hover text-accent-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Join Waitlist Now →
          </Button>

          {/* Secondary option for those not ready */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-muted-foreground mb-4">
              Not ready to commit? Help us understand your workflow challenges.
            </p>
            <Link to="/discovery" onClick={handleDiscoveryClick}>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 transition-all"
              >
                <ClipboardList className="w-5 h-5 mr-2" />
                Share Your Workflow Challenges
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
