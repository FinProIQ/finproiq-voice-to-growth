import { motion } from "framer-motion";
import { CalendarCheck, Database, Mic, Mail } from "lucide-react";
import { useEffect, useState } from "react";

type Stage = {
  icon: typeof CalendarCheck;
  label: string;
  caption: string;
  variant?: "voice";
  sample: string[];
};

const stages: Stage[] = [
  {
    icon: CalendarCheck,
    label: "Booking",
    caption: "Sarah books a call",
    sample: ["Sarah Chen", "Thu 2:00 PM - Discovery", "Calendly -> Wealthbox"],
  },
  {
    icon: Database,
    label: "CRM add",
    caption: "Contact created",
    sample: ["Contact: Sarah Chen", "Stage: New Lead", "Owner: You"],
  },
  {
    icon: Mic,
    label: "Voice note",
    caption: "Post-meeting recap",
    variant: "voice",
    sample: ["\"Great fit. Wants Roth", "conversion review next", "week. Send proposal.\""],
  },
  {
    icon: Mail,
    label: "Email / SMS",
    caption: "Follow-up sent",
    sample: ["Hi Sarah - thanks for", "today. Attached the Roth", "outline we discussed."],
  },
  {
    icon: Database,
    label: "CRM update",
    caption: "Notes + next steps",
    sample: ["Note logged", "Task: Send proposal Fri", "Next mtg: in 7 days"],
  },
];

const STEP_MS = 1400;
const BARS = 18;

const Waveform = ({ active }: { active: boolean }) => (
  <div className="flex items-center justify-center gap-[2px] h-5" aria-hidden="true">
    {Array.from({ length: BARS }).map((_, i) => (
      <motion.span
        key={i}
        className={`block w-[2px] rounded-full ${active ? "bg-accent-foreground" : "bg-muted-foreground/40"}`}
        animate={
          active
            ? { height: [4, 8 + ((i * 5) % 12), 4] }
            : { height: 4 }
        }
        transition={{
          duration: 0.9,
          repeat: active ? Infinity : 0,
          ease: "easeInOut",
          delay: (i % 8) * 0.06,
        }}
      />
    ))}
  </div>
);

const VoiceToCrm = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % (stages.length + 1)); // +1 for a brief reset pause
    }, STEP_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card shadow-soft p-5 md:p-6">
      <div className="flex items-center justify-between gap-3 md:gap-4">
        {stages.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === active;
          const isDone = i < active;
          const isPending = i > active;
          const cardCls = isActive
            ? "border-accent bg-accent/5 shadow-medium"
            : isDone
              ? "border-border bg-background"
              : "border-border bg-muted/40 opacity-60";
          const iconWrapCls = isActive
            ? "bg-accent text-accent-foreground"
            : isDone
              ? "bg-accent/15 text-accent"
              : "bg-muted text-muted-foreground/60";
          const labelCls = isPending ? "text-muted-foreground/60" : "text-foreground";
          const captionCls = isPending ? "text-muted-foreground/50" : "text-muted-foreground";
          const connectorActive = isDone || (isActive && i < stages.length - 1);

          return (
            <div key={i} className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className={`flex flex-col items-center text-center gap-1.5 rounded-xl border px-2.5 py-3 flex-1 min-w-0 transition-colors duration-500 ${cardCls}`}
              >
                <div
                  className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors duration-500 ${iconWrapCls}`}
                >
                  {s.variant === "voice" && (isActive || isDone) ? (
                    <Waveform active={isActive} />
                  ) : (
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  )}
                </div>
                <span className={`text-[11px] md:text-xs font-bold uppercase tracking-wider leading-tight transition-colors duration-500 ${labelCls}`}>
                  {s.label}
                </span>
                <span className={`hidden md:block text-[10px] leading-tight truncate w-full transition-colors duration-500 ${captionCls}`}>
                  {s.caption}
                </span>
                <div
                  className={`hidden md:block w-full mt-1.5 pt-1.5 border-t border-border/60 text-left transition-opacity duration-500 ${
                    isPending ? "opacity-40" : "opacity-100"
                  }`}
                >
                  {s.sample.map((line, idx) => (
                    <p
                      key={idx}
                      className="text-[9px] leading-snug font-mono text-muted-foreground truncate"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              {i < stages.length - 1 && (
                <div className="relative h-[2px] flex-shrink-0 w-5 md:w-8 bg-border rounded-full overflow-hidden">
                  <motion.span
                    initial={false}
                    animate={{ scaleX: connectorActive ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ originX: 0 }}
                    className="absolute inset-0 bg-accent"
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