import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CALENDLY = "https://calendly.com/raman-sivasankar";

const HeroNew = () => {
  const onBook = () => {
    window.gtag?.("event", "cta_click", { event_label: "Hero Book Discovery" });
    window.open(CALENDLY, "_blank");
  };
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-background">
      <div className="container px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-secondary text-foreground/70">
            AI infrastructure for Financial Advisors
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight text-foreground mb-6">
            Your expertise is invisible.{" "}
            <span className="text-electric">We make it visible.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            FinProIQ is the AI infrastructure for Financial Advisors. Automation
            that gives you hours back. AI that turns your client work into the brand
            prospects actually find.
          </p>
          <div className="flex flex-col items-center gap-3 mb-6">
            <Button
              size="lg"
              onClick={onBook}
              className="text-base px-8 py-6 h-auto bg-accent hover:bg-accent-hover text-accent-foreground shadow-medium"
            >
              Book a 30-minute discovery call
            </Button>
            <p className="text-sm text-muted-foreground max-w-xl">
              Bring a redacted 1040 and we'll show you what tax moves AND what
              content come out of it.
            </p>
          </div>
          <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto pt-6 border-t border-border mt-10">
            Built by a 12+ year financial services product leader who watched too
            many great advisors get drowned out by templated LinkedIn feeds.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroNew;