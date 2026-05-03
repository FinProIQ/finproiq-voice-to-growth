import { motion } from "framer-motion";

const EmailComparison = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-muted/60 rounded-2xl p-8 md:p-10 border border-border transition-shadow hover:shadow-medium cursor-default"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Typical Follow-Up
            </p>
            <p className="text-lg text-muted-foreground italic leading-relaxed">
              "Great speaking today. Let me know your thoughts."
            </p>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-card rounded-2xl p-8 md:p-10 border-2 border-accent/20 shadow-medium transition-shadow hover:shadow-strong cursor-default"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-4">
              FinProIQ Follow-Up
            </p>
            <div className="text-foreground leading-relaxed space-y-4">
              <p>"Hey [Name], really enjoyed our conversation today.</p>
              <p>When you mentioned wanting to 'think about it,' it usually comes down to wanting to avoid making the wrong move or needing clarity on one piece.</p>
              <p>Just to make this easier - what part would you want to feel 100% clear on before moving forward?"</p>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-lg text-muted-foreground mt-10 max-w-3xl mx-auto"
        >
          That one difference often determines whether a conversation goes cold or moves forward.
        </motion.p>
      </div>
    </section>
  );
};

export default EmailComparison;