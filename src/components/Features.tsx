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

        {/* Flow Diagram */}
        <div className="max-w-5xl mx-auto mb-16 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Column 1: Input */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border-2 border-accent/20 hover:border-accent transition-all hover:scale-105" style={{ transition: 'var(--transition-bounce)' }}>
                <div className="text-4xl mb-2 text-center">🎤</div>
                <p className="font-semibold text-center text-sm">Voice/Meeting<br/>Input</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-accent text-2xl rotate-90 md:rotate-0">→</div>

            {/* Column 2: InstantFollow */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border-2 border-accent/20 hover:border-accent transition-all hover:scale-105" style={{ transition: 'var(--transition-bounce)' }}>
                <div className="text-4xl mb-2 text-center">🎤</div>
                <p className="font-semibold text-center text-sm">InstantFollow<br/>Agent</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-accent text-2xl rotate-90 md:rotate-0">→</div>

            {/* Column 3: Insight Engine */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border-2 border-accent/20 hover:border-accent transition-all hover:scale-105" style={{ transition: 'var(--transition-bounce)' }}>
                <div className="text-4xl mb-2 text-center">🧠</div>
                <p className="font-semibold text-center text-sm">Client Insight<br/>Engine</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-accent text-2xl rotate-90 md:rotate-0">→</div>

            {/* Column 4: TrustBuilder */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border-2 border-accent/20 hover:border-accent transition-all hover:scale-105" style={{ transition: 'var(--transition-bounce)' }}>
                <div className="text-4xl mb-2 text-center">🛡️</div>
                <p className="font-semibold text-center text-sm">TrustBuilder<br/>Agent</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-accent text-2xl rotate-90 md:rotate-0">→</div>

            {/* Column 5: Output */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border-2 border-accent/20 hover:border-accent transition-all hover:scale-105" style={{ transition: 'var(--transition-bounce)' }}>
                <div className="text-4xl mb-2 text-center">📧</div>
                <p className="font-semibold text-center text-sm">Compliant<br/>Message</p>
              </div>
            </div>
          </div>

          {/* Brand Studio Flow (separate) */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border-2 border-accent/20 hover:border-accent transition-all hover:scale-105" style={{ transition: 'var(--transition-bounce)' }}>
                  <div className="text-4xl mb-2 text-center">⚡</div>
                  <p className="font-semibold text-center text-sm">Automated<br/>Trigger</p>
                </div>
              </div>

              <div className="text-accent text-2xl rotate-90 md:rotate-0">→</div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border-2 border-accent/20 hover:border-accent transition-all hover:scale-105" style={{ transition: 'var(--transition-bounce)' }}>
                  <div className="text-4xl mb-2 text-center">🎨</div>
                  <p className="font-semibold text-center text-sm">Brand Studio<br/>Agent</p>
                </div>
              </div>

              <div className="text-accent text-2xl rotate-90 md:rotate-0">→</div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border-2 border-accent/20 hover:border-accent transition-all hover:scale-105" style={{ transition: 'var(--transition-bounce)' }}>
                  <div className="text-4xl mb-2 text-center">🤖</div>
                  <p className="font-semibold text-center text-sm">OpenAI/<br/>Perplexity</p>
                </div>
              </div>

              <div className="text-accent text-2xl rotate-90 md:rotate-0">→</div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border-2 border-accent/20 hover:border-accent transition-all hover:scale-105" style={{ transition: 'var(--transition-bounce)' }}>
                  <div className="text-4xl mb-2 text-center">🛡️</div>
                  <p className="font-semibold text-center text-sm">TrustBuilder<br/>Review</p>
                </div>
              </div>

              <div className="text-accent text-2xl rotate-90 md:rotate-0">→</div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border-2 border-accent/20 hover:border-accent transition-all hover:scale-105" style={{ transition: 'var(--transition-bounce)' }}>
                  <div className="text-4xl mb-2 text-center">📱</div>
                  <p className="font-semibold text-center text-sm">Social Media<br/>Posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 border-l-4 border-accent hover:border-accent-hover border-t border-r border-b border-border group"
              style={{ transition: 'var(--transition-bounce)' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{agent.icon}</div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{agent.title}</h3>
              </div>
              <p className="text-foreground leading-relaxed">{agent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
