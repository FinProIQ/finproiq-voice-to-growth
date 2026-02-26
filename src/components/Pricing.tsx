import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const advisorTiers = [
  {
    name: "Starter",
    tagline: "AI Productivity",
    price: "$149",
    period: "/mo per advisor",
    positioning: "Replace your admin assistant.",
    features: [
      "Voice-to-Action Engine",
      "AI InstantFollow",
      "Basic TrustBuilder",
      "Basic CRM sync (via Zapier)",
      "Manual approval before execution",
      "1 CRM integration",
      "30-day conversation memory",
    ],
  },
  {
    name: "Professional",
    tagline: "Execution Mode",
    price: "$349",
    period: "/mo per advisor",
    positioning: "Turn AI into your operations manager.",
    popular: true,
    features: [
      "Everything in Starter",
      "Direct CRM integration (Wealthbox / Redtail)",
      "One-click execution workflows",
      "Persistent client memory",
      "Proactive follow-up suggestions",
      "Workflow dashboard",
      "90-day conversation memory",
      "Audit log (basic)",
    ],
  },
  {
    name: "Growth",
    tagline: "Autonomous Advisor OS",
    price: "$699",
    period: "/mo per advisor",
    altPrice: "$1,499/mo per firm (up to 3)",
    positioning: "Your autonomous advisor operating system.",
    features: [
      "Autonomous intent-to-action execution",
      "Advanced TrustBuilder",
      "Brand Studio (authority engine)",
      "Proactive opportunity detection",
      "Compliance pre-screening",
      "Approval workflows",
      "Full dashboard + advanced analytics",
      "Unlimited memory",
      "Revenue insights engine",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Firm OS",
    price: "Custom",
    period: "$2,500 – $10,000/mo",
    positioning: "AI infrastructure for advisory firms.",
    features: [
      "Multi-user control & role-based permissions",
      "Compliance intelligence engine",
      "Policy rule mapping",
      "Enterprise audit trails",
      "Direct CRM + custodian integrations",
      "API access & custom workflows",
      "Dedicated onboarding & SLA support",
      "White labeling (optional)",
    ],
  },
];

const workflowPhases = [
  {
    name: "Phase 1",
    price: "$750",
    priceType: "one-time setup",
    features: [
      "ZAP workflow for New Meeting",
      "ZAP workflow for Reschedule",
      "ZAP workflow for Cancellation",
      "Secure and no duplications",
    ],
  },
  {
    name: "Phase 2",
    price: "$750",
    priceType: "one-time setup",
    features: [
      "Support & maintenance of Phase 1",
      "Quick enhancements & bug fixes",
      "No-Code to Low-Code support",
    ],
  },
  {
    name: "Phase 3",
    price: "$500",
    priceType: "one-time setup",
    features: [
      "Integration with RightCapital, Clockify, AdvicePay",
      "Secure and no duplications",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-3">
            Simple, <span className="text-accent">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your practice. Scale as you grow.
          </p>
        </motion.div>

        {/* Advisor OS Tiers */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center mb-3 text-accent"
          >
            Advisor Operating System
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Monthly subscription per advisor. All tiers include full compliance guardrails.
          </motion.p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {advisorTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card
                  className={`relative h-full transition-all duration-300 hover:shadow-medium ${
                    tier.popular
                      ? "border-accent border-2 shadow-medium"
                      : "border-border"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-xl">{tier.name}</CardTitle>
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
                        {tier.tagline}
                      </span>
                    </div>
                    <div className="mb-1">
                      <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">{tier.period}</span>
                    </div>
                    {tier.altPrice && (
                      <p className="text-xs text-accent font-medium">{tier.altPrice}</p>
                    )}
                    <CardDescription className="text-sm italic mt-2">
                      "{tier.positioning}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {tier.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workflow Automation Pricing */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center mb-3 text-accent"
          >
            Workflow Automation
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            One-time setup fees for automated client provisioning from scheduler to CRM.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {workflowPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="relative h-full transition-all duration-300 hover:shadow-medium">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl mb-1">{phase.name}</CardTitle>
                    <div className="mb-1">
                      <span className="text-3xl font-bold">{phase.price}</span>
                    </div>
                    <CardDescription className="text-sm font-medium">{phase.priceType}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {phase.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
