import { Button } from "@/components/ui/button";

interface ModernProfessionalsProps {
  onOpenCalendly: () => void;
}


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
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Built for Modern Financial Professionals
          </h2>
          
          <p className="text-xl md:text-2xl mb-6 text-foreground leading-relaxed">
            FinProIQ helps advisors, agents, and planners grow faster without sacrificing trust or compliance.
          </p>

          <p className="text-lg md:text-xl mb-6 text-muted-foreground leading-relaxed">
            Traditional CRMs record what happened. FinProIQ understands what needs to happen next.
          </p>

          <p className="text-lg md:text-xl mb-0 text-muted-foreground leading-relaxed">
            It listens, interprets emotion, drafts compliant outreach, and updates your CRM — instantly. This is not another tool to manage. It's your AI growth partner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernProfessionals;
