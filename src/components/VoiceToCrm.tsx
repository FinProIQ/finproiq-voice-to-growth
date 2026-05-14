import { motion } from "framer-motion";
import { Mic, Database, ArrowRight } from "lucide-react";

const BARS = 28;

const VoiceToCrm = () => {
  const lines = [
    { label: "Client", value: "Sarah Chen" },
    { label: "Next step", value: "Send Roth conversion plan" },
    { label: "Follow-up", value: "Tue 9:00 AM - reply expected" },
  ];

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card shadow-soft p-5 md:p-6">
      <div className="flex items-center gap-4 md:gap-6">
        {/* Voice side */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Mic className="w-4 h-4 text-accent" />
            </div>
            <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
              Voice note
            </span>
          </div>
          <div
            className="flex items-center gap-[3px] h-12"
            aria-hidden="true"
          >
            {Array.from({ length: BARS }).map((_, i) => (
              <motion.span
                key={i}
                className="block w-[3px] rounded-full bg-accent"
                initial={{ height: 6 }}
                animate={{
                  height: [6, 10 + ((i * 7) % 28), 6],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i % 10) * 0.08,
                }}
              />
            ))}
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-accent" />
        </motion.div>

        {/* CRM side */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Database className="w-4 h-4 text-accent" />
            </div>
            <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
              CRM update
            </span>
          </div>
          <div className="space-y-1.5">
            {lines.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + i * 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2.2,
                }}
                className="flex items-baseline gap-2 text-left"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-16 flex-shrink-0">
                  {l.label}
                </span>
                <span className="text-sm font-medium text-foreground truncate">
                  {l.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceToCrm;