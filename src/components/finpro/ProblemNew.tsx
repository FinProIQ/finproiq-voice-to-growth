import { motion } from "framer-motion";

const ProblemNew = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-muted/40">
      <div className="container px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center mb-14 text-foreground"
        >
          Two infrastructure problems killing advisor growth.
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {[
            {
              h: "The Plumbing Tax",
              b: "Calendly schedules. Wealthbox holds contacts. AdvicePay invoices. RightCapital plans. The handoffs between them eat hours every week. You re-enter the same client across 4-6 tools. You build a Zap; it works for 3 months; it breaks silently; you find out from a client.",
            },
            {
              h: "The Visibility Tax",
              b: "You do excellent tax planning. Roth conversions, IRMAA management, harvesting, charitable timing. None of it shows up where prospects can see it. On LinkedIn you look identical to every other advisor posting templated content. Your real work stays invisible. Prospects choose more visible advisors.",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-electric">{c.h}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemNew;