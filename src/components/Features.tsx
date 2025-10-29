const agents = [
  {
    title: "AI InstantFollow Agent",
    description: "Captures voice messages and meeting recordings, then sends data to the Client Insight Engine for analysis.",
    icon: "🎤",
  },
  {
    title: "AI Client Insight Engine",
    description: "Assesses tone, urgency, and request type from conversations, then routes to the Credibility & TrustBuilder for compliant messaging.",
    icon: "🧠",
  },
  {
    title: "AI Credibility & TrustBuilder",
    description: "Creates FINRA/SEC compliant messages and follow-ups with Calendly scheduling links.",
    icon: "🛡️",
  },
  {
    title: "AI Brand Studio",
    description: "Automates social media posting using OpenAI/Perplexity, with all content reviewed for compliance by the TrustBuilder agent.",
    icon: "🎨",
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
              className="bg-card rounded-lg p-8 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 border-l-4 border-accent hover:border-accent-hover border-t border-r border-b border-border group"
              style={{ transition: 'var(--transition-bounce)' }}
            >
              <h3 className="text-xl font-bold group-hover:text-accent transition-colors mb-4">{agent.title}</h3>
              <p className="text-foreground leading-relaxed">{agent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
