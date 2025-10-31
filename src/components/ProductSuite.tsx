const products = [
  {
    title: "AI InstantFollow",
    subtitle: "(Voice → Intent → Conversion)",
    description: (
      <>
        Turn <span className="font-bold">voice notes</span> or meeting recaps into <span className="text-accent font-bold">instant, compliant action</span>. Speak naturally — "Met John, interested in term insurance" — and AI InstantFollow drafts the follow-up, updates your CRM, and suggests the next question to ask.
      </>
    ),
    bgColor: "bg-blue-50/50",
  },
  {
    title: "AI Client & Insight Engine",
    subtitle: "",
    description: (
      <>
        Detect <span className="font-bold">tone, sentiment, and readiness</span> across emails, calls, and notes. Know when to reassure, when to follow up, and when to escalate — <span className="text-accent font-bold">before your client asks</span>.
      </>
    ),
    bgColor: "bg-purple-50/50",
  },
  {
    title: "AI Credibility & TrustBuilder",
    subtitle: "",
    description: (
      <>
        Generate <span className="font-bold">FINRA/SEC-safe content</span> and messages that sound like you. From short client updates to bios and newsletters — build credibility <span className="text-accent font-bold">without compliance anxiety</span>.
      </>
    ),
    bgColor: "bg-green-50/50",
  },
  {
    title: "AI Brand Studio",
    subtitle: "",
    description: (
      <>
        Summarize trending insights and publish <span className="font-bold">compliant, branded posts</span> across all social media platforms. Stay <span className="text-accent font-bold">visible and trusted</span> even when you're offline.
      </>
    ),
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
              <h3 className="text-xl font-bold group-hover:text-accent transition-colors mb-2">
                {product.title}
                {product.subtitle && <span className="text-muted-foreground font-normal text-base ml-2">{product.subtitle}</span>}
              </h3>
              <p className="text-foreground leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;
