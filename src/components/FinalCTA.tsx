import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ClipboardList } from "lucide-react";

const DEMO_URL = "https://advisorflow.replit.app/?demo=true";
const SIGNUP_URL = "https://advisorflow.replit.app/";

const FinalCTA = () => {
  const handleSeeItClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Final CTA How It Works'
      });
    }
    window.open(DEMO_URL, '_blank');
  };

  const handleDemoSignupClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Final CTA Demo'
      });
    }
    window.open(SIGNUP_URL, '_blank');
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
            You don't need another tool. You need a system that makes sure{" "}
            <span className="text-accent">no opportunity slips.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button 
              size="lg"
              onClick={handleSeeItClick}
              className="text-lg px-10 py-5 h-auto rounded-xl bg-accent hover:bg-accent-hover text-accent-foreground shadow-lg hover:shadow-xl transition-all"
            >
              How It Works
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={handleDemoClick}
              className="text-lg px-10 py-5 h-auto rounded-xl border-accent text-accent hover:bg-accent/10 transition-all"
            >
              Try Live Demo
            </Button>
          </div>

          {/* Secondary option for those not ready */}
          <div className="pt-8 border-t border-border/50">
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
