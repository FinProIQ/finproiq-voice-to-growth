import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Zap, Shield, TrendingUp, ChevronDown, ChevronUp, Mic, Heart, Target, Database, Workflow, MousePointerClick, Link2, MessageSquare, ScanSearch, FileCheck, CheckCircle, BookOpen, Archive, BarChart3, Mail, Award, Bell } from "lucide-react";

interface SubFeature {
  title: string;
  meaning: string;
  points: string[];
  icon: React.ElementType;
}

interface CoreSystem {
  number: string;
  title: string;
  subtitle: string;
  positioning: string;
  icon: React.ElementType;
  gradient: string;
  borderColor: string;
  features: SubFeature[];
}

const coreSystems: CoreSystem[] = [
  {
    number: "01",
    title: "Advisor Intelligence Engine",
    subtitle: "Voice + Intent + Sentiment + Memory",
    positioning: "Cognitive Layer",
    icon: Brain,
    gradient: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-l-blue-500",
    features: [
      {
        title: "Voice-to-Action",
        meaning: "Advisor speaks after a meeting. The system converts speech into structured actions.",
        points: ["Transcribes voice note", "Identifies what needs to be done", "Converts into tasks, emails, or CRM updates"],
        icon: Mic,
      },
      {
        title: "Sentiment Detection",
        meaning: "Detects emotional tone in conversation.",
        points: ["Identifies if client is concerned, confident, hesitant, urgent", "Helps advisor tailor tone in follow-up"],
        icon: Heart,
      },
      {
        title: "Intent Extraction",
        meaning: "Understands what the advisor actually wants done.",
        points: ["Detects primary action (e.g., \"send tax guide\")", "Detects secondary actions (e.g., \"schedule next week\")", "Converts unstructured speech into structured workflow plan"],
        icon: Target,
      },
      {
        title: "Memory Layer",
        meaning: "System remembers client history and preferences.",
        points: ["Stores past concerns", "Recalls previous discussions", "Enriches future communication automatically"],
        icon: Database,
      },
    ],
  },
  {
    number: "02",
    title: "Autonomous Execution Engine",
    subtitle: "Meeting Lifecycle Sync + Workflow Automation + CRM Execution",
    positioning: "Execution Layer",
    icon: Zap,
    gradient: "from-amber-500/10 to-orange-500/10",
    borderColor: "border-l-amber-500",
    features: [
      {
        title: "Workflow Automation",
        meaning: "Automatically performs tasks based on detected intent.",
        points: ["Creates tasks", "Sends emails", "Updates CRM", "Triggers follow-ups"],
        icon: Workflow,
      },
      {
        title: "Direct CRM Execution",
        meaning: "Connects directly to CRM without manual entry.",
        points: ["Creates contacts", "Updates activities", "Logs meetings", "Syncs lifecycle changes"],
        icon: Link2,
      },
      {
        title: "One-Click Execution",
        meaning: "Advisor reviews plan and clicks \"Execute.\"",
        points: ["Executes full workflow instantly", "Confirms completion", "Logs activity"],
        icon: MousePointerClick,
      },
      {
        title: "Intent-Triggered Workflows",
        meaning: "Certain phrases automatically trigger predefined actions.",
        points: ["\"Schedule review\" → opens calendar flow", "\"Send retirement guide\" → email + attachment", "Fully automated if enabled"],
        icon: MessageSquare,
      },
    ],
  },
  {
    number: "03",
    title: "Compliance & Governance Engine",
    subtitle: "Language Screening + Approval Routing + Audit Trail",
    positioning: "Risk Layer",
    icon: Shield,
    gradient: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-l-emerald-500",
    features: [
      {
        title: "Risk Language Detection",
        meaning: "Scans outgoing communication for risky statements.",
        points: ["Flags guarantees", "Flags performance promises", "Assigns risk score"],
        icon: ScanSearch,
      },
      {
        title: "Policy Mapping",
        meaning: "Aligns communication with firm-level compliance rules.",
        points: ["Applies internal policies", "Adjusts messaging to meet regulatory standards"],
        icon: FileCheck,
      },
      {
        title: "Approval Workflows",
        meaning: "High-risk messages require review before sending.",
        points: ["Routes message to compliance officer", "Tracks approval status", "Blocks send until approved"],
        icon: CheckCircle,
      },
      {
        title: "Audit Logs & Archiving",
        meaning: "Records every action and preserves all outbound communication.",
        points: ["Stores communication history", "Stores workflow execution logs", "Archives emails & meeting notes", "Enables export for audits"],
        icon: Archive,
      },
    ],
  },
  {
    number: "04",
    title: "Growth & Trust Engine",
    subtitle: "InstantFollow + TrustBuilder + Brand Studio + Proactive AI",
    positioning: "Revenue Layer",
    icon: TrendingUp,
    gradient: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-l-violet-500",
    features: [
      {
        title: "AI InstantFollow",
        meaning: "Generates personalized follow-ups instantly.",
        points: ["Drafts client-ready email", "Adjusts tone based on sentiment", "References past context"],
        icon: Mail,
      },
      {
        title: "TrustBuilder",
        meaning: "Enhances communication with credibility.",
        points: ["Adds relevant insights", "Suggests educational material", "Strengthens advisor authority"],
        icon: Award,
      },
      {
        title: "Brand Studio",
        meaning: "Publishes compliant, branded content across platforms.",
        points: ["Summarizes trending insights", "Generates compliant social posts", "Keeps advisor visible and trusted"],
        icon: BarChart3,
      },
      {
        title: "Proactive Follow-Up Suggestions",
        meaning: "Detects when advisor should reach out.",
        points: ["Detects inactivity", "Suggests check-in messages", "Identifies opportunity signals"],
        icon: Bell,
      },
    ],
  },
];

const SystemCard = ({ system, index }: { system: CoreSystem; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-gradient-to-br ${system.gradient} rounded-2xl border border-border ${system.borderColor} border-l-4 overflow-hidden shadow-soft hover:shadow-medium transition-shadow`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 md:p-8 flex items-start gap-4 group"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <system.icon className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-accent tracking-widest uppercase">
              System {system.number}
            </span>
            <span className="text-xs text-muted-foreground">· {system.positioning}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
            {system.title}
          </h3>
          <p className="text-sm text-muted-foreground">{system.subtitle}</p>
        </div>
        <div className="flex-shrink-0 mt-2">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 grid sm:grid-cols-2 gap-4">
              {system.features.map((feature, fi) => (
                <motion.div
                  key={fi}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: fi * 0.05 }}
                  className="bg-card/80 backdrop-blur-sm rounded-xl p-5 border border-border"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <feature.icon className="w-4 h-4 text-accent" />
                    <h4 className="font-bold text-foreground text-sm">{feature.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{feature.meaning}</p>
                  <ul className="space-y-1">
                    {feature.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-accent mt-0.5 text-xs">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProductSuite = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-feature">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            4 Core Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each system works independently and in concert — forming a complete operating layer for your practice.
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {coreSystems.map((system, index) => (
            <SystemCard key={index} system={system} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;
