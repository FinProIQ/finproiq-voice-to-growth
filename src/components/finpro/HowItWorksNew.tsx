import { motion } from "framer-motion";
import { FileUp, Calculator, Palette, PenTool, Send } from "lucide-react";

const steps = [
  { icon: FileUp, h: "Upload a 1040", b: "Drag in the PDF. The system reads the document and extracts every line item in seconds." },
  { icon: Calculator, h: "Tax analysis", b: "A deterministic rules engine identifies the moves: IRMAA bracket positioning, Roth conversion windows, capital gains, charitable timing. Ranked by dollar impact - not AI guesses." },
  { icon: Palette, h: "Voice + brand", b: "Captured once during a 30-minute intake. Your tone, your palette, your slide template. Stored as your brand profile." },
  { icon: PenTool, h: "Content generation", b: "The same analysis becomes a LinkedIn post, newsletter blurb, and carousel in your voice and brand. Anonymized. Marketing Rule and FINRA 2210 compliant." },
  { icon: Send, h: "One-tap publish", b: "Approve on mobile. Schedule. See which posts drove DMs and which became discovery calls." },
];

const HowItWorksNew = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/40">
      <div className="container px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center mb-4 text-foreground"
        >
          Your tax planning work, finally{" "}
          <span className="text-electric">visible to prospects.</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          How the AI Visibility Engine works.
        </p>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-electric/10 text-electric flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Step {i + 1}</div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{s.h}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksNew;