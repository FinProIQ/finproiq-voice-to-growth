import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenCalendly: () => void;
}

const Hero = ({ onOpenCalendly }: HeroProps) => {
  const handleCTAClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Hero CTA'
      });
    }
    onOpenCalendly();
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
            Autonomous Advisor{" "}
            <span className="text-accent">Operating System</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            FinProIQ replaces manual execution, fragmented tools, and compliance anxiety
            with a <span className="text-accent font-semibold">unified AI operating system</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 max-w-2xl mx-auto"
          >
            <video
              className="w-full rounded-lg shadow-2xl border border-border"
              controls
              preload="metadata"
            >
              <source src="/videos/hero-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Button
              variant="default"
              size="lg"
              onClick={handleCTAClick}
              className="text-lg px-8 py-6 h-auto bg-accent hover:bg-accent-hover text-accent-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Join Waitlist →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
