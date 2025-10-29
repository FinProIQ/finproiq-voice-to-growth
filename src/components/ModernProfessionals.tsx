import { Button } from "@/components/ui/button";

interface ModernProfessionalsProps {
  onOpenCalendly: () => void;
}

const benefits = [
  "FINRA/SEC-Safe",
  "AI-Powered Insights",
  "Branding That Converts",
  "Voice-to-Action in Seconds",
];

const ModernProfessionals = ({ onOpenCalendly }: ModernProfessionalsProps) => {
  const handleCTAClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Modern Professionals CTA'
      });
    }
    onOpenCalendly();
  };

  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built for Modern Financial Professionals
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
            FinProIQ empowers advisors, agents, and firms to grow faster without sacrificing trust. 
            From client follow-ups to brand building — every workflow is compliant, intelligent, and automated.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-accent/5 to-white rounded-lg p-4 shadow-soft border border-accent/20 hover:border-accent/50 hover:scale-105 transition-all"
                style={{ transition: 'var(--transition-bounce)' }}
              >
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <Button 
            variant="default" 
            size="lg"
            onClick={handleCTAClick}
            className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent shadow-lg hover:shadow-xl transition-all"
          >
            Book Your Demo →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModernProfessionals;
