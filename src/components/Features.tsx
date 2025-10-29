const agents = [
  {
    title: "AI InstantFollow Agent",
    purpose: "Captures voice or meeting data, detects intent, drafts follow-ups, and suggests questions.",
    trigger: "Voice note upload, meeting recording, CRM 'new lead' event",
    integration: "Speech-to-Text (Whisper/OpenAI), CRM API, Twilio (SMS), SendGrid (email)",
  },
  {
    title: "AI Client Insight Engine Agent",
    purpose: "Analyzes tone, emotional sentiment, and trust readiness.",
    trigger: "Email, call transcript, or chat log input",
    integration: "OpenAI or Anthropic LLMs + sentiment/emotion models",
  },
  {
    title: "AI Credibility & TrustBuilder Agent",
    purpose: "Creates compliant, tone-matched messages and ensures FINRA/SEC-safe language.",
    trigger: "Draft message event",
    integration: "Custom compliance rules + SEC/FINRA language filter (regex + LLM guardrails)",
  },
  {
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
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four intelligent agents working together to power your growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {agents.map((agent, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-accent hover:border-violet-500 border-t border-r border-b border-border group"
              >
                <h3 className="text-xl font-bold mb-6 group-hover:text-accent transition-colors">{agent.title}</h3>
                
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
