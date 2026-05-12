import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props { onJoinWaitlist: () => void }

const FoundingNew = ({ onJoinWaitlist }: Props) => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-accent text-accent-foreground">
      <div className="container px-4 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6"
        >
          10 founding member slots. Locked rates indefinitely.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base md:text-lg leading-relaxed opacity-90 mb-10 max-w-2xl mx-auto"
        >
          Standard pricing post-launch: $399/mo for AI Visibility Engine, $199/mo for
          Automation Layer, $499/mo for the bundle. Founding members lock in $299/mo
          for the AI product, $199/mo for automation, $399/mo for the bundle - forever.
          Your feedback shapes v1. We sign a written founding member agreement.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
          {[
            { name: "Automation Layer", standard: "$199/mo", founder: "$199/mo" },
            { name: "AI Visibility Engine", standard: "$399/mo", founder: "$299/mo" },
            { name: "Bundle", standard: "$499/mo", founder: "$399/mo" },
          ].map((p, i) => {
            const same = p.standard === p.founder;
            return (
              <div key={i} className="rounded-xl bg-background/5 border border-background/15 p-5">
                <div className="text-sm uppercase tracking-wider opacity-75 mb-2">{p.name}</div>
                <div className="text-xs opacity-70">
                  Standard {same ? <span>{p.standard}</span> : <span className="line-through">{p.standard}</span>}
                </div>
                <div className="text-2xl font-bold mt-1">{p.founder}</div>
                <div className="text-xs opacity-75">{same ? "Same for founders" : "Founder rate"}</div>
              </div>
            );
          })}
        </div>

        <Button
          size="lg"
          onClick={onJoinWaitlist}
          className="bg-electric hover:bg-electric-hover text-electric-foreground text-base px-8 py-6 h-auto"
        >
          Apply to be one of the 10
        </Button>
      </div>
    </section>
  );
};

export default FoundingNew;