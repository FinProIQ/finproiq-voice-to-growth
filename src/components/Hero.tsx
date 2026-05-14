import { motion } from "framer-motion";
import VoiceToCrm from "@/components/VoiceToCrm";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-16 bg-background">
      <div className="container relative z-10 px-4 py-10 md:py-16">
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
            Get 10 hours back{" "}
            <span className="text-accent">every week.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            FinProIQ automates scheduling, CRM updates, follow-ups, and compliance - the work that used to eat your nights and weekends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10"
          >
            <VoiceToCrm />
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
