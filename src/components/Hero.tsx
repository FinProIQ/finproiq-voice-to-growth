import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mic, Brain, MessageSquare, UserCheck } from "lucide-react";

    const DEMO_URL = "https://advisorflow.replit.app/?demo=true";

const workflowSteps = [
  { icon: Mic, label: "Voice" },
  { icon: Brain, label: "AI" },
  { icon: MessageSquare, label: "Message" },
  { icon: UserCheck, label: "Client" },
];

const Hero = () => {
  const handlePrimaryClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Hero How It Works'
      });
    }
    window.open(DEMO_URL, '_blank');
  };

  const handleSecondaryClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Hero Try With Last Meeting'
      });
    }
    window.open(DEMO_URL, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background">
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full shadow-lg">
              For Financial Advisors & Professionals
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-foreground leading-tight"
          >
            Never lose a client because of a{" "}
            <span className="text-accent">weak or delayed follow-up.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Turn every client meeting into a personalized, compliant follow-up that actually gets replies - in under 60 seconds.
          </motion.p>

          {/* Workflow illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 flex items-center justify-center gap-3 md:gap-6"
          >
            {workflowSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-6">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{step.label}</span>
                </div>
                {i < workflowSteps.length - 1 && (
                  <span className="text-accent font-bold text-lg">→</span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button
              size="lg"
              onClick={handlePrimaryClick}
              className="text-lg px-8 py-6 h-auto bg-accent hover:bg-accent-hover text-accent-foreground shadow-lg hover:shadow-xl transition-all"
            >
              How It Works
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleSecondaryClick}
              className="text-lg px-8 py-6 h-auto border-accent text-accent hover:bg-accent/10 transition-all"
            >
              Try It With Your Last Meeting
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-sm text-muted-foreground"
          >
            Built for financial advisors who want to move faster, stay compliant, and close more without adding work.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
