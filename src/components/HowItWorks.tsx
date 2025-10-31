const steps = [
  {
    number: "1",
    title: "Speak or Record",
    description: "Record a short voice note after any conversation.",
  },
  {
    number: "2",
    title: "FinProIQ Understands Context",
    description: "Our system analyzes intent, tone, and urgency — identifying emotion and compliance needs.",
  },
  {
    number: "3",
    title: "FinProIQ Acts Instantly",
    description: "AI InstantFollow and AI Credibility & TrustBuilder draft compliant, personalized follow-ups — with optional links to trending articles from AI Brand Studio.",
  },
  {
    number: "4",
    title: "You Approve & Send",
    description: "Review once, send instantly. CRM updated automatically; client feels seen; your day stays on track.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent to-accent-hover text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-xl font-medium text-foreground mt-16 max-w-2xl mx-auto">
          From conversation to client action in under a minute.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
