import { motion } from "framer-motion";
import { Mic, Brain, Send } from "lucide-react";

const steps = [
  {
    icon: Mic,
    title: "Capture",
    text: "Record a voice note or paste meeting notes",
  },
  {
    icon: Brain,
    title: "Generate",
    text: "AI creates follow-up, CRM updates, and tasks",
  },
  {
    icon: Send,
    title: "Send",
    text: "Review or send instantly - or automate it",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-3">How It Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="text-center bg-card rounded-2xl p-6 border border-border shadow-soft transition-shadow hover:shadow-medium cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <p className="text-xs font-bold tracking-wider uppercase text-accent mb-2">
                Step {index + 1}
              </p>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
