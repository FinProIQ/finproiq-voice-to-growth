import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const before = {
  title: "Before the meeting: the plumbing tax",
  body: "Calendly schedules. Wealthbox holds contacts. AdvicePay invoices. RightCapital plans. The handoffs between them eat hours every week.",
  pains: [
    "Manual contact entry across 4 to 6 tools per new client",
    "Brittle DIY Zaps that break silently",
    "Duplicate clients and stale CRM records",
  ],
};

const after = {
  title: "After the meeting: the brainwork tax",
  body: "The most important 5 minutes of a client meeting happen after it ends. Follow-ups, CRM updates, next-step tasks, compliance checks. They never happen as fast as they need to.",
  pains: [
    "Follow-ups get delayed",
    "Messages become generic",
    "CRM updates get skipped",
  ],
};

const Column = ({ data, delay }: { data: typeof before; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay }}
    whileHover={{ y: -4 }}
    className="bg-card rounded-2xl p-8 border border-border shadow-soft transition-shadow hover:shadow-medium"
  >
    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
      {data.title}
    </h3>
    <p className="text-muted-foreground mb-6 leading-relaxed">{data.body}</p>
    <ul className="space-y-3">
      {data.pains.map((p, i) => (
        <li key={i} className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <span className="text-foreground">{p}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const TwoFrictionPoints = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/50">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold font-display mb-14 text-center text-foreground max-w-3xl mx-auto"
        >
          Your practice has two friction points. <span className="text-accent">We solve both.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Column data={before} delay={0} />
          <Column data={after} delay={0.1} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-lg text-muted-foreground mt-10 max-w-3xl mx-auto"
        >
          Not because you are bad at what you do. Because there is no system built for either moment.
        </motion.p>
      </div>
    </section>
  );
};

export default TwoFrictionPoints;