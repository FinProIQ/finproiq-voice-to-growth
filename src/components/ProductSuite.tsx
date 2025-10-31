const products = [
  {
    title: "AI InstantFollow (Voice → Intent → Conversion)",
    description: "Turn voice notes or meeting recaps into instant, compliant action. Speak naturally — \"Met John, interested in term insurance\" — and AI InstantFollow drafts the follow-up, updates your CRM, and suggests the next question to ask.",
    bgColor: "bg-blue-50/50",
  },
  {
    title: "AI Client & Insight Engine",
    description: "Detect tone, sentiment, and readiness across emails, calls, and notes. Know when to reassure, when to follow up, and when to escalate — before your client asks.",
    bgColor: "bg-purple-50/50",
  },
  {
    title: "AI Credibility & TrustBuilder",
    description: "Generate FINRA/SEC-safe content and messages that sound like you. From short client updates to bios and newsletters — build credibility without compliance anxiety.",
    bgColor: "bg-green-50/50",
  },
  {
    title: "AI Brand Studio",
    description: "Summarize trending insights and publish compliant, branded posts to LinkedIn and email. Stay visible and trusted even when you're offline.",
    bgColor: "bg-amber-50/50",
  },
];

const ProductSuite = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-feature">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The FinProIQ Product Suite
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${product.bgColor} rounded-lg p-8 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 border-l-4 border-accent hover:border-accent-hover border-t border-r border-b border-border group`}
            >
              <h3 className="text-xl font-bold group-hover:text-accent transition-colors mb-4">{product.title}</h3>
              <p className="text-foreground leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;
