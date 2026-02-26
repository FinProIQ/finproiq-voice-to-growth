import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Speak or Record",
    description: "Record a voice note or finish a client meeting. FinProIQ captures everything.",
  },
  {
    number: "2",
    title: "AI Understands Intent",
    description: "The Intelligence Engine analyzes intent, tone, urgency, and context — instantly.",
  },
  {
    number: "3",
    title: "Autonomous Execution",
    description: "Workflows fire automatically: CRM updates, compliant follow-ups, task creation — all at once.",
  },
  {
    number: "4",
    title: "You Review & Approve",
    description: "One-click approval. Everything logged, archived, and compliance-ready.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">From conversation to compliant client action in under a minute.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-accent/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
