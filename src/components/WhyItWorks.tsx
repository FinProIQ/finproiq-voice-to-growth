import { motion } from "framer-motion";
import { Ear, Target, SlidersHorizontal, UserCheck } from "lucide-react";

const reasons = [
  { icon: Ear, text: "Detects hesitation in conversations" },
  { icon: Target, text: "Identifies client intent" },
  { icon: SlidersHorizontal, text: "Adjusts tone automatically" },
  { icon: UserCheck, text: "Responds like a top-performing advisor" },
];

const WhyItWorks = () => {
  return (
    <section className="py-12 md:py-20 bg-background border-t border-border">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-display mb-4 text-foreground"
          >
            Most tools summarize. FinProIQ <span className="text-accent">understands</span>.
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4 my-12 max-w-2xl mx-auto">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border shadow-soft transition-shadow hover:shadow-medium cursor-default"
              >
                <reason.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{reason.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground"
          >
            So your follow-ups don't just go out - they bring conversations back.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;