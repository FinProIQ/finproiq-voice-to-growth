import { Button } from "@/components/ui/button";

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

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 via-white to-accent/10">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join the <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">Waitlist</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground">
            Experience the fastest way to stay compliant, personal, and proactive — without lifting a finger.
          </p>

          <Button 
            variant="default" 
            size="lg"
            onClick={handleCTAClick}
            className="text-lg px-10 py-5 h-auto rounded-xl bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent shadow-lg hover:shadow-xl transition-all"
          >
            Join Waitlist Now →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
