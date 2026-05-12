import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CALENDLY = "https://calendly.com/raman-sivasankar";

interface Props {
  onJoinWaitlist: () => void;
}

const ProductsNew = ({ onJoinWaitlist }: Props) => {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground">
            One platform. <span className="text-electric">Two products.</span> Built
            to work together.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-8 flex flex-col shadow-soft hover:shadow-medium transition-shadow"
          >
            <span className="self-start inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wide rounded-full bg-electric/10 text-electric border border-electric/20">
              In production today
            </span>
            <h3 className="text-2xl font-bold mb-2">Automation Layer</h3>
            <p className="text-electric font-medium mb-4">
              Pre-built integrations across the XYPN tech stack.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
              Calendly bookings flow into Wealthbox automatically. Reschedules sync.
              Cancellations close cleanly. No duplicate contacts. AdvicePay,
              RightCapital, Clockify integrations roll out next - included.
            </p>
            <p className="text-3xl font-bold mb-6">$199<span className="text-base font-normal text-muted-foreground">/month</span></p>
            <Button
              onClick={() => {
                window.gtag?.("event", "cta_click", { event_label: "Automation Layer" });
                window.open(CALENDLY, "_blank");
              }}
              className="bg-accent hover:bg-accent-hover text-accent-foreground"
            >
              See it run on your stack
            </Button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border-2 border-electric/40 rounded-xl p-8 flex flex-col shadow-medium"
          >
            <span className="self-start inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wide rounded-full bg-accent text-accent-foreground">
              Design partners only
            </span>
            <h3 className="text-2xl font-bold mb-2">AI Visibility Engine</h3>
            <p className="text-electric font-medium mb-4">
              Tax planning + content + brand. One pipeline.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
              Upload a 1040. Get tax moves with dollar estimates AND a LinkedIn post
              in your voice. Same upload, two outcomes. Marketing Rule compliant.
              First 10 design partners only.
            </p>
            <p className="text-3xl font-bold mb-1">
              $399<span className="text-base font-normal text-muted-foreground">/month</span>
            </p>
            <p className="text-sm text-electric font-semibold mb-6">
              Founder rate $299/mo - first 10 only
            </p>
            <Button
              onClick={onJoinWaitlist}
              className="bg-accent hover:bg-accent-hover text-accent-foreground"
            >
              Apply for design partner program
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsNew;