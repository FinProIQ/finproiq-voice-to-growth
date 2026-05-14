import { motion } from "framer-motion";
import { MessageSquare, Database, ListChecks, Shield, Mic } from "lucide-react";

const features = [
  { icon: MessageSquare, text: "Generates follow-ups that feel personal and get replies" },
  { icon: Database, text: "Updates your CRM automatically" },
  { icon: ListChecks, text: "Creates tasks and next steps" },
  { icon: Shield, text: "Ensures compliance before anything is sent" },
];

const WhatItDoes = () => {
  return (
    <section className="py-12 md:py-20 bg-background border-t border-border">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider">
              <Mic className="w-4 h-4" /> After the meeting
            </span>
          </div>
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
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border shadow-soft text-left transition-shadow hover:shadow-medium cursor-default"
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