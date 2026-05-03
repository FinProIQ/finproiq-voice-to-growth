import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const painPoints = [
  "Follow-ups get delayed",
  "Messages become generic",
  "CRM updates get skipped",
  "Prospects quietly go cold",
];

const Problem = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-display mb-4 text-foreground"
          >
            The most important moment isn't during the meeting.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-semibold text-accent mb-12"
          >
            It's the 5 minutes after.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex items-center gap-3 bg-card rounded-xl p-4 border border-destructive/15 shadow-soft transition-shadow hover:shadow-medium cursor-default"
              >
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-foreground font-medium">{point}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Not because you're bad at what you do - but because there's no system built for that moment.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Problem;