import { motion } from "framer-motion";
import { MessageSquare, Database, ListChecks, Shield } from "lucide-react";

const features = [
  { icon: MessageSquare, text: "Generates follow-ups that feel personal and get replies" },
  { icon: Database, text: "Updates your CRM automatically" },
  { icon: ListChecks, text: "Creates tasks and next steps" },
  { icon: Shield, text: "Ensures compliance before anything is sent" },
];

const WhatItDoes = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-display mb-12 text-foreground"
          >
            You speak. FinProIQ handles the rest.
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border shadow-soft text-left"
              >
                <feature.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg font-semibold text-accent"
          >
            All in under a minute.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhatItDoes;