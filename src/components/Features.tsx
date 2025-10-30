const agents = [
  {
    title: "AI InstantFollow Agent",
    description: "Captures voice messages and meeting recordings, then sends data to the Client Insight Engine for analysis.",
    trigger: "Voice note upload, meeting recording, CRM 'new lead' event",
    technology: "Speech-to-Text (Whisper/OpenAI), CRM API, Twilio (SMS), SendGrid (email)",
    bgColor: "bg-blue-50/50",
  },
  {
    title: "AI Client & Insight Engine Agent",
    description: "Assesses tone, urgency, and request type from conversations, then routes to the Credibility & TrustBuilder for compliant messaging.",
    trigger: "Email, call transcript, or chat log input",
    technology: "OpenAI or Anthropic LLMs + sentiment/emotion models",
    bgColor: "bg-purple-50/50",
  },
  {
    title: "AI Credibility & TrustBuilder Agent",
    description: "Creates FINRA/SEC compliant messages and follow-ups with Calendly scheduling links.",
    trigger: "Draft message event",
    technology: "Custom compliance rules + SEC/FINRA language filter (regex + LLM guardrails)",
    bgColor: "bg-green-50/50",
  },
  {
    title: "AI Brand Studio Agent",
    description: "Automates social media posting using OpenAI/Perplexity, with all content reviewed for compliance by the TrustBuilder agent.",
    trigger: "Scheduled daily or weekly",
    technology: "APIs: LinkedIn, Facebook, X, Instagram + Perplexity API (news sources)",
    bgColor: "bg-amber-50/50",
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
            Four intelligent agents working together in perfect harmony
          </p>
        </div>

        {/* Agent Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {agents.map((agent, index) => (
            <div
              key={index}
              className={`${agent.bgColor} rounded-lg p-8 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 border-l-4 border-accent hover:border-accent-hover border-t border-r border-b border-border group`}
              style={{ transition: 'var(--transition-bounce)' }}
            >
              <h3 className="text-xl font-bold group-hover:text-accent transition-colors mb-4">{agent.title}</h3>
              <p className="text-foreground leading-relaxed mb-4">{agent.description}</p>
              
              <div className="space-y-3 mt-4">
                <div className="bg-white/80 rounded-md p-3 border border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground mb-1">TRIGGER</p>
                  <p className="text-sm text-foreground">{agent.trigger}</p>
                </div>
                <div className="bg-white/80 rounded-md p-3 border border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground mb-1">TECHNOLOGY</p>
                  <p className="text-sm text-foreground">{agent.technology}</p>
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
