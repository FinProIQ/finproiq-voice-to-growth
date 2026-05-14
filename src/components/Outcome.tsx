import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const beforePoints = [
  "Follow-ups delayed",
  "Generic messages ignored",
  "CRM takes hours",
  "Compliance anxiety",
  "Manual effort",
];

const afterPoints = [
  "Follow-ups sent instantly",
  "Messages get replies",
  "CRM handled automatically",
  "Built-in compliance",
  "More deals moving forward",
];

const Outcome = () => {
  return (
    <section className="py-14 md:py-22 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">
            Your Practice{" "}
            <span className="text-accent">Before & After</span>{" "}
            FinProIQ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-destructive/15"
          >
            <h3 className="text-xl font-bold text-destructive mb-8 tracking-tight">
              Before
            </h3>
            <ul className="space-y-4">
              {beforePoints.map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="w-3 h-3 text-destructive" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/85">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative bg-gradient-to-br from-accent/[0.04] via-card to-accent/[0.08] rounded-2xl p-8 md:p-10 shadow-medium border-2 border-accent/20"
          >
            <h3 className="text-xl font-bold text-accent mb-8 tracking-tight">
              After
            </h3>
            <ul className="space-y-4">
              {afterPoints.map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/85">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Outcome;
