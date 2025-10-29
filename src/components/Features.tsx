import { Mic, Brain, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: Mic,
    number: "1️⃣",
    title: "AI InstantFollow",
    subtitle: "Voice to Action in 30 Seconds",
    description: "Say it once. FinProIQ does the rest. Turn any quick voice note like \"Met Lisa at dinner — she's planning retirement\" into CRM updates, compliant follow-ups, and reminders — instantly.",
    highlight: "💡 Smart Prompts: Automatically suggests your next best question",
    example: "\"Ask Lisa if she's reviewed her old 401(k)\"",
  },
  {
    icon: Brain,
    number: "2️⃣",
    title: "AI Client & Insight Engine",
    subtitle: "Trust & Emotional Intelligence",
    description: "Reads between the lines — and tones. FinProIQ analyzes every email, note, or conversation for emotion and intent — enthusiasm, hesitation, disengagement — and recommends your best next move.",
    highlight: "🧭 Response Intelligence:",
    example: "\"Reassure,\" \"Inform,\" or \"Invite\" — always compliant, always empathetic",
  },
  {
    icon: Sparkles,
    number: "3️⃣",
    title: "AI Brand Studio",
    subtitle: "Compliance Meets Credibility",
    description: "Your content, your voice — finally automated. Create FINRA/SEC-compliant posts, newsletters, bios, and visuals without lifting a finger. FinProIQ adapts to your tone, builds your brand, and keeps every post safe and compliant.",
    highlight: "🚀 Effortless Publishing:",
    example: "LinkedIn, email, newsletters — all done for you",
  },
  {
    icon: Shield,
    number: "4️⃣",
    title: "AI Credibility & TrustBuilder",
    subtitle: "Safety Without Slowdown",
    description: "Your compliance copilot. FinProIQ reviews every message and post before it goes live — automatically flags risky language, adds required disclosures, and learns your firm's policies over time.",
    highlight: "🛡️ Peace of Mind:",
    example: "Post fast, stay safe, and keep your reputation spotless",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-feature">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ⚡ How FinProIQ Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four powerful AI agents working together to transform your practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in border border-border hover:border-accent/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl mb-2">{feature.number}</div>
                    <h3 className="text-2xl font-bold mb-1">{feature.title}</h3>
                    <p className="text-accent font-medium mb-3">{feature.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-accent">
                  <p className="font-semibold mb-1">{feature.highlight}</p>
                  <p className="text-sm text-muted-foreground italic">{feature.example}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
