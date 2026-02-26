import { motion } from "framer-motion";

const beforePoints = [
  { text: "Missed follow-ups and", highlight: "cold leads" },
  { text: "Hours of manual CRM entry and", highlight: "compliance checks" },
  { text: "Fragmented tools with", highlight: "no unified workflow" },
  { text: "Compliance anxiety on", highlight: "every outreach" },
  { text: "Clients slipping through", highlight: "the cracks" },
];

const afterPoints = [
  { text: "Autonomous execution from", highlight: "voice to action" },
  { text: "CRM, compliance, and follow-ups", highlight: "handled automatically" },
  { text: "One unified operating system for", highlight: "your entire practice" },
  { text: "Built-in compliance with", highlight: "audit-ready logs" },
  { text: "Every client fully tracked,", highlight: "nothing missed" },
];

const Outcome = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">The Outcome</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-soft border border-border"
          >
            <h3 className="text-2xl font-bold mb-6 text-destructive">Before FinProIQ</h3>
            <ul className="space-y-4">
              {beforePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-destructive text-xl mt-0.5">✗</span>
                  <span className="text-foreground">
                    {point.text} <span className="font-bold">{point.highlight}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent/5 to-accent-hover/5 rounded-2xl p-8 shadow-soft border-2 border-accent/30"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent">After FinProIQ</h3>
            <ul className="space-y-4">
              {afterPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent text-xl mt-0.5">✓</span>
                  <span className="text-foreground">
                    {point.text} <span className="text-accent font-bold">{point.highlight}</span>
                  </span>
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
