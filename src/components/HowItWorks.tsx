const voiceToActionSteps = [
  {
    number: "1",
    title: "Speak or Record",
    description: (
      <>
        Record a <span className="font-bold">short voice note</span> after any conversation.
      </>
    ),
  },
  {
    number: "2",
    title: "FinProIQ Understands Context",
    description: (
      <>
        Our system analyzes <span className="text-accent font-bold">intent, tone, and urgency</span> - identifying emotion and compliance needs.
      </>
    ),
  },
  {
    number: "3",
    title: "FinProIQ Acts Instantly",
    description: (
      <>
        AI InstantFollow and AI Credibility & TrustBuilder draft <span className="text-accent font-bold">compliant, personalized follow-ups</span> - with optional links to trending articles from AI Brand Studio.
      </>
    ),
  },
  {
    number: "4",
    title: "You Approve & Send",
    description: (
      <>
        Review once, send <span className="text-accent font-bold">instantly</span>. CRM updated automatically; client feels seen; your day stays on track.
      </>
    ),
  },
];

const workflowAutomationSteps = [
  {
    number: "1",
    title: "Client Books a Meeting",
    description: (
      <>
        A prospect schedules through your <span className="font-bold">meeting scheduler</span>.
      </>
    ),
  },
  {
    number: "2",
    title: "FinProIQ Syncs Instantly",
    description: (
      <>
        Client details flow automatically to your <span className="text-accent font-bold">CRM, financial planning, and billing platforms</span>.
      </>
    ),
  },
  {
    number: "3",
    title: "Records Are Created",
    description: (
      <>
        Contact records, opportunities, and tasks are <span className="text-accent font-bold">provisioned automatically</span> - no manual entry.
      </>
    ),
  },
  {
    number: "4",
    title: "You Focus on the Client",
    description: (
      <>
        Walk into every meeting <span className="text-accent font-bold">fully prepared</span> - systems ready, nothing slipping through the cracks.
      </>
    ),
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

        {/* Voice-to-Action Flow */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-accent">
            Voice-to-Action
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {voiceToActionSteps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < voiceToActionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-accent/30" />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-medium text-foreground mt-10 max-w-2xl mx-auto">
            From conversation to client action in <span className="text-accent font-bold">under a minute</span>.
          </p>
        </div>

        {/* Workflow Automation Flow */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-accent">
            Workflow Automation
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {workflowAutomationSteps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < workflowAutomationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-medium text-foreground mt-10 max-w-2xl mx-auto">
            From booking to fully provisioned client in <span className="text-accent font-bold">seconds</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
