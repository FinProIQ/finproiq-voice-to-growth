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
            FinProIQ helps advisors, agents, and planners <span className="text-accent font-bold">grow faster</span> without sacrificing <span className="font-bold">trust</span> or <span className="font-bold">compliance</span>.
          </p>

          <p className="text-lg md:text-xl mb-6 text-foreground leading-relaxed">
            Traditional CRMs record what happened. FinProIQ understands <span className="text-accent font-bold">what needs to happen next</span>.
          </p>

          <p className="text-lg md:text-xl mb-0 text-foreground leading-relaxed">
            It listens, interprets emotion, drafts compliant outreach, and updates your CRM - <span className="text-accent font-bold">instantly</span>. This is not another tool to manage. It's your <span className="text-accent font-bold">AI growth partner</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernProfessionals;
