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
    <section className="py-20 md:py-32 bg-muted">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to see FinProIQ in action?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground">
            Book your personalized demo and see how AI can help you build credibility, 
            grow faster, and stay compliant — effortlessly.
          </p>

          <Button 
            variant="default" 
            size="lg"
            onClick={handleCTAClick}
            className="text-lg px-10 py-7 h-auto"
          >
            Book Your Demo Now →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
