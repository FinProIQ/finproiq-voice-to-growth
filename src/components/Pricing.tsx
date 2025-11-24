import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Freemium",
    price: "$0",
    description: "Get started with the basics",
    features: [
      {
        category: "AI InstantFollow (Basic)",
        items: [
          "Takes short voice notes or typed notes",
          "Generates clean CRM-ready text",
          "Creates one compliant follow-up suggestion"
        ]
      },
      {
        category: "AI Client & Insight Engine (Lite)",
        items: [
          "Detects basic sentiment (positive/neutral/negative)",
          "Suggests a simple next step"
        ]
      },
      {
        category: "AI Credibility & TrustBuilder (Full Compliance — always full)",
        items: [
          "FINRA/SEC guardrails",
          "Detects non-compliant phrasing and removes it",
          "Ensures every message meets professional tone & regulatory expectations"
        ]
      },
      {
        category: "AI Brand Studio (Starter)",
        items: [
          "Generates one simple, compliant social post per week"
        ]
      }
    ]
  },
  {
    name: "Lite",
    price: "$79/mo",
    description: "Includes Freemium",
    popular: true,
    features: [
      {
        category: "AI InstantFollow (Full)",
        items: [
          "Unlimited voice/text inputs",
          "Multi-variant follow-up suggestions",
          "Creates full follow-up emails + SMS drafts",
          "Auto-attaches relevant market or article commentary"
        ]
      },
      {
        category: "AI Client & Insight Engine (Standard)",
        items: [
          "Detects hesitation, urgency, uncertainty",
          "Flags relationship risk (e.g., 'client disengaging,' 'potential lapse risk')",
          "Suggests timing, tone, and CTA for the next outreach"
        ]
      },
      {
        category: "AI Lead Studio (Weekly Workflow)",
        items: [
          "Weekly state of social content ideas",
          "Rewrite, refine, and compliance-check posts",
          "Auto-format text for LinkedIn, email, and short-form content"
        ]
      }
    ]
  },
  {
    name: "Pro",
    price: "$199/mo",
    description: "Includes Lite",
    features: [
      {
        category: "AI InstantFollow (Accelerated)",
        items: [
          "Real-time follow-up generation",
          "Automatically logs CRM summary + action items",
          "Multi-step nurturing sequences (completed)"
        ]
      },
      {
        category: "AI Client & Insight Engine (Advanced)",
        items: [
          "Emotion & confidence detection (confusion, fear, confidence, buying intent)",
          "Market-triggered client alerts",
          "Drop-off prediction + outreach recommendations",
          "Personalized client reasoning insights ('Why this client deltas matter')"
        ]
      },
      {
        category: "AI Brand Studio (Unlimited)",
        items: [
          "Unlimited FINRA-safe content",
          "Multi-platform formatting",
          "Weekly automated posting workflows (optional)"
        ]
      }
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-accent font-bold">Transparent</span> Pricing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your practice. Scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                tier.popular ? 'border-accent border-2 shadow-lg' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                </div>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {tier.features.map((featureGroup, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="font-semibold text-sm text-accent">{featureGroup.category}</h4>
                    <ul className="space-y-2">
                      {featureGroup.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
