import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const DEMO_URL = "https://advisorflow.replit.app/";

const LiveDemoCTA = () => {
  const handleClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Live Demo CTA'
      });
    }
    window.open(DEMO_URL, '_blank');
  };

  return (
    <section className="py-12 md:py-18 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-10 md:p-14 border-2 border-accent/20 shadow-medium text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-display mb-4 text-foreground">
            See what your follow-up should have been.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Paste your last meeting notes or record a quick voice note. Watch FinProIQ generate your follow-up, CRM summary, and next steps.
          </p>
          <Button
            size="lg"
            onClick={handleClick}
            className="text-lg px-8 py-6 h-auto bg-accent hover:bg-accent-hover text-accent-foreground shadow-lg hover:shadow-xl transition-all"
          >
            <Play className="w-5 h-5 mr-2" />
            Try it with your recent meeting
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveDemoCTA;