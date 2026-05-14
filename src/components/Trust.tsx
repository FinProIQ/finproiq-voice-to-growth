import { motion } from "framer-motion";
import { Briefcase, ShieldCheck, Lock } from "lucide-react";

const trustPoints = [
  { icon: Briefcase, text: "Built for financial advisor workflows" },
  { icon: ShieldCheck, text: "Compliance-aware messaging" },
  { icon: Lock, text: "Secure and private data handling" },
];

const Trust = () => {
  return (
    <section className="py-10 md:py-16 bg-muted/50">
      <div className="container px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <point.icon className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-muted-foreground font-medium">{point.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;