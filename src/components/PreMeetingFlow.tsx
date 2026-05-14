import { motion } from "framer-motion";
import { CalendarCheck, Zap, FileText, UserCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Client Books a Meeting",
    text: "A prospect schedules through your meeting scheduler.",
  },
  {
    icon: Zap,
    title: "FinProIQ Syncs Instantly",
    text: "Client details flow automatically to your CRM, financial planning, and billing platforms.",
  },
  {
    icon: FileText,
    title: "Records Are Created",
    text: "Contact records, opportunities, and tasks are provisioned automatically. No manual entry.",
  },
  {
    icon: UserCheck,
    title: "You Focus on the Client",
    text: "Walk into every meeting fully prepared. Systems ready, nothing slipping through the cracks.",
  },
];

const phases = [
  {
    number: "Phase 1",
    title: "Scheduler to CRM",
    body: "Calendly to Wealthbox. Contact creation, meeting activity, reschedule and cancellation sync.",
  },
  {
    number: "Phase 2",
    title: "+ Financial planning and billing",
    body: "RightCapital and AdvicePay client provisioning with canonical client identity.",
  },
  {
    number: "Phase 3",
    title: "+ Time tracking and compliance",
    body: "Clockify time entries and Smartria audit-trail integration.",
  },
];

const PreMeetingFlow = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-accent mb-3">
            How it works
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-display text-foreground">
            From first booking to final follow-up.
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Two phases. One Operating System.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-bold uppercase tracking-wider">
            <CalendarCheck className="w-4 h-4" /> Before the meeting
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-3 text-foreground">
            Before the meeting: from booking to{" "}
            <span className="text-accent">fully provisioned in seconds.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-5 max-w-6xl mx-auto mb-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-soft transition-shadow hover:shadow-medium cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-xs font-bold tracking-wider uppercase text-accent mb-2">
                Step {i + 1}
              </p>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-center text-foreground mb-8">
            Rolled out in three phases
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {phases.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft transition-shadow hover:shadow-medium cursor-default"
              >
                <p className="text-xs font-bold tracking-wider uppercase text-accent mb-2">
                  {p.number}
                </p>
                <h4 className="text-lg font-bold text-foreground mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreMeetingFlow;