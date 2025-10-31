const beforePoints = [
  "Missed follow-ups and cold leads",
  "Hours of CRM entry and compliance checks",
  "Uncertain timing for outreach",
  "Low visibility online",
];

const afterPoints = [
  "Instant client actions from conversations",
  "Personalized, compliant outreach automatically sent",
  "Predictive trust signals and timely engagement",
  "Consistent credibility and visibility",
];

const Outcome = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Outcome
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <h3 className="text-2xl font-bold mb-6 text-destructive">Before FinProIQ</h3>
            <ul className="space-y-4">
              {beforePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-destructive text-xl mt-0.5">✗</span>
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-accent/5 to-accent-hover/5 rounded-2xl p-8 shadow-soft border-2 border-accent/30">
            <h3 className="text-2xl font-bold mb-6 text-accent">After FinProIQ</h3>
            <ul className="space-y-4">
              {afterPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent text-xl mt-0.5">✓</span>
                  <span className="text-foreground font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcome;
