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

  const handleSurveyClick = () => {
    if (window.gtag) {
      window.gtag('event', 'survey_click', {
        event_category: 'engagement',
        event_label: 'Final CTA Survey'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 via-white to-accent/10">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Ready to <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">Transform Your Practice?</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-foreground">
            Experience the <span className="text-accent font-bold">fastest way</span> to stay <span className="font-bold">compliant, personal, and proactive</span> — without lifting a finger.
          </p>

          <Button 
            variant="default" 
            size="lg"
            onClick={handleCTAClick}
            className="text-lg px-10 py-5 h-auto rounded-xl bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent shadow-lg hover:shadow-xl transition-all"
          >
            Join Waitlist Now →
          </Button>

          {/* Secondary option for those not ready */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-muted-foreground mb-4">
              Not ready to commit? Discover where your workflow is costing you time.
            </p>
            <Link to="/survey" onClick={handleSurveyClick}>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-accent hover:text-accent-hover hover:bg-accent/5 transition-all"
              >
                <ClipboardList className="w-5 h-5 mr-2" />
                Discover My Workflow Gaps
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
