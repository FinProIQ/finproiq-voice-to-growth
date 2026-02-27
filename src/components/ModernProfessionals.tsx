import { motion } from "framer-motion";
import { Brain, Zap, Shield, TrendingUp } from "lucide-react";

const capabilities = [
  { icon: Brain, text: "Understands advisor intent" },
  { icon: Zap, text: "Executes workflows" },
  { icon: Shield, text: "Enforces compliance" },
  { icon: TrendingUp, text: "Builds trust & grows revenue" },
];

interface ModernProfessionalsProps {
  onOpenCalendly: () => void;
}

const ModernProfessionals = ({ onOpenCalendly }: ModernProfessionalsProps) => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-display mb-6"
          >
            The Autonomous Advisor Operating System
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
          >
            An AI-powered execution and growth infrastructure that:
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border shadow-soft"
              >
                <cap.icon className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">{cap.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg font-semibold text-accent"
          >
            Not an assistant. Not automation. An operating system.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ModernProfessionals;
