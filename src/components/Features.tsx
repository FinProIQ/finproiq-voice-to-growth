import { Brain, TrendingUp, Shield, Zap } from "lucide-react";

const agents = [
  {
    icon: Zap,
    title: "AI InstantFollow Agent",
    purpose: "Captures voice or meeting data, detects intent, drafts follow-ups, and suggests questions.",
    trigger: "Voice note upload, meeting recording, CRM 'new lead' event",
    integration: "Speech-to-Text (Whisper/OpenAI), CRM API, Twilio (SMS), SendGrid (email)",
  },
  {
    icon: Brain,
    title: "AI Client Insight Engine Agent",
    purpose: "Analyzes tone, emotional sentiment, and trust readiness.",
    trigger: "Email, call transcript, or chat log input",
    integration: "OpenAI or Anthropic LLMs + sentiment/emotion models",
  },
  {
    icon: Shield,
    title: "AI Credibility & TrustBuilder Agent",
    purpose: "Creates compliant, tone-matched messages and ensures FINRA/SEC-safe language.",
    trigger: "Draft message event",
    integration: "Custom compliance rules + SEC/FINRA language filter (regex + LLM guardrails)",
  },
  {
    icon: TrendingUp,
    title: "AI Brand Studio Agent",
    purpose: "Automates social media posting and trending article summaries.",
    trigger: "Scheduled daily or weekly",
    integration: "APIs: LinkedIn, Facebook, X, Instagram + Perplexity API (news sources)",
  },
];

const Features = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-feature">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ⚡ How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four intelligent agents working together to power your growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in border border-border hover:border-accent/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">{agent.title}</h3>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-accent mb-1">Purpose:</p>
                    <p className="text-foreground leading-relaxed">{agent.purpose}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-accent mb-1">Trigger:</p>
                    <p className="text-foreground leading-relaxed">{agent.trigger}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-accent mb-1">Integration:</p>
                    <p className="text-foreground leading-relaxed">{agent.integration}</p>
                  </div>
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
