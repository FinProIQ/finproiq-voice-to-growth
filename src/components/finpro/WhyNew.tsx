import { motion } from "framer-motion";

const tiles = [
  "We don't replace your tools - we connect them. Wealthbox stays. Calendly stays. We make them work as one.",
  "We don't do generic content. Your LinkedIn post comes from your actual client work, in your actual voice.",
  "Tax math is deterministic, not AI. AI cannot invent a tax bracket on us.",
  "Marketing Rule and FINRA 2210 reviewed on every output. Anonymization is a feature, not an afterthought.",
];

const WhyNew = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-background">
      <div className="container px-4 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center mb-14 text-foreground"
        >
          Built for the way{" "}
          <span className="text-electric">advice-only RIAs</span> actually work.
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {tiles.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 md:p-7 hover:shadow-medium transition-shadow"
            >
              <p className="text-foreground leading-relaxed">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNew;