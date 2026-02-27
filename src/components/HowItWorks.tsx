import { motion } from "framer-motion";
import { Mic, Brain, Cog, Shield, TrendingUp, ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "INPUT",
    title: "Capture",
    icon: Mic,
    color: "bg-blue-500/10 text-blue-600",
    items: ["Voice note", "Meeting transcript", "CRM activity", "Calendar booking", "Email reply"],
    output: "Intelligence Engine",
  },
  {
    number: "02",
    label: "THINK",
    title: "Intelligence Engine",
    icon: Brain,
    color: "bg-violet-500/10 text-violet-600",
    items: ["Transcribe voice", "Extract intent", "Detect sentiment", "Retrieve client memory"],
    output: "Structured Action Plan + Context",
  },
  {
    number: "03",
    label: "DECIDE",
    title: "Execution Engine",
    icon: Cog,
    color: "bg-amber-500/10 text-amber-600",
    items: ["CRM updates", "Task creation", "Email drafting", "Meeting sync"],
    output: "Auto-execute or One-Click Approval",
  },
  {
    number: "04",
    label: "PROTECT",
    title: "Compliance Engine",
    icon: Shield,
    color: "bg-emerald-500/10 text-emerald-600",
    items: ["Risk language scan", "Policy rule mapping", "Risk scoring"],
    output: "Allow send or Route to approval",
  },
  {
    number: "05",
    label: "ENHANCE",
    title: "Growth & Trust Engine",
    icon: TrendingUp,
    color: "bg-rose-500/10 text-rose-600",
    items: ["Add credibility content", "Adjust tone by sentiment", "Suggest proactive follow-up"],
    output: "Finalized & sent",
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
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-3">How It Works</h2>
          <p className="text-muted-foreground text-lg">The full suite flow — from input to client action.</p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((step, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative bg-card rounded-2xl border border-border p-6 shadow-soft hover:shadow-medium hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold tracking-widest uppercase text-accent">
                        Step {step.number}
                      </span>
                      <span className="text-[11px] text-muted-foreground uppercase tracking-wide">
                        · {step.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {step.items.map((item, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium hover:bg-accent/10 hover:text-accent transition-colors duration-200 cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-accent font-medium">
                      → {step.output}
                    </p>
                  </div>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-4 h-4 text-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
