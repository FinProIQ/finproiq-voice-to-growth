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
    <section className="py-20 md:py-32 bg-gradient-to-br from-accent/5 via-white to-accent/10">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to see <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">FinProIQ</span> in action?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground">
            Book your personalized demo and see how AI can help you build credibility, 
            grow faster, and stay compliant — effortlessly.
          </p>

          <Button 
            variant="default" 
            size="lg"
            onClick={handleCTAClick}
            className="text-lg px-10 py-7 h-auto bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent shadow-lg hover:shadow-xl transition-all"
          >
            Book Your Demo Now →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
