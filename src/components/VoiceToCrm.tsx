import { motion } from "framer-motion";
import { CalendarCheck, Database, Mic, Mail } from "lucide-react";

type Stage = {
  icon: typeof CalendarCheck;
  label: string;
  caption: string;
};

const stages: Stage[] = [
  { icon: CalendarCheck, label: "Booking", caption: "Sarah books a call" },
  { icon: Database, label: "CRM add", caption: "Contact created" },
  { icon: Mic, label: "Voice note", caption: "Post-meeting recap" },
  { icon: Mail, label: "Email / SMS", caption: "Follow-up sent" },
  { icon: Database, label: "CRM update", caption: "Notes + next steps" },
];

const CYCLE = stages.length * 1.2; // seconds for full pipeline pass

const VoiceToCrm = () => {
  return (
    <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card shadow-soft p-5 md:p-6">
      <div className="flex items-center justify-between gap-3 md:gap-4">
        {stages.map((s, i) => {
          const Icon = s.icon;
          const delay = (i / stages.length) * CYCLE;
          return (
            <div key={i} className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
              {/* Stage card */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  borderColor: [
                    "hsl(var(--border))",
                    "hsl(var(--accent))",
                    "hsl(var(--border))",
                  ],
                }}
                transition={{
                  duration: CYCLE,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [
                    delay / CYCLE,
                    (delay + 0.4) / CYCLE,
                    (delay + 0.8) / CYCLE,
                  ].map((t) => Math.min(t, 1)),
                }}
                className="flex flex-col items-center text-center gap-1.5 rounded-xl border border-border bg-background px-2.5 py-3 flex-1 min-w-0"
              >
                <motion.div
                  animate={{
                    backgroundColor: [
                      "hsl(var(--accent) / 0.1)",
                      "hsl(var(--accent))",
                      "hsl(var(--accent) / 0.1)",
                    ],
                    color: [
                      "hsl(var(--accent))",
                      "hsl(var(--accent-foreground))",
                      "hsl(var(--accent))",
                    ],
                  }}
                  transition={{
                    duration: CYCLE,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [
                      delay / CYCLE,
                      (delay + 0.4) / CYCLE,
                      (delay + 0.8) / CYCLE,
                    ].map((t) => Math.min(t, 1)),
                  }}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-foreground leading-tight">
                  {s.label}
                </span>
                <span className="hidden md:block text-[10px] text-muted-foreground leading-tight truncate w-full">
                  {s.caption}
                </span>
              </motion.div>

              {/* Connector with traveling pulse */}
              {i < stages.length - 1 && (
                <div className="relative h-[2px] flex-shrink-0 w-6 md:w-10 bg-border rounded-full overflow-hidden">
                  <motion.span
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: CYCLE / stages.length,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay + 0.4,
                    }}
                    className="absolute inset-y-0 left-0 w-full bg-accent"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VoiceToCrm;