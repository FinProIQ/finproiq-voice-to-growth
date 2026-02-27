import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const advisorTiers = [
  {
    name: "Starter",
    tagline: "Operational Foundation",
    price: "$199",
    period: "/month",
    positioning: "For advisors who want admin under control.",
    sections: [
      {
        title: "Advisor Cognitive Layer",
        items: ["Voice-to-Action", "Intent extraction", "Sentiment detection", "Basic client memory"],
      },
      {
        title: "Advisor Execution Layer",
        items: ["CRM updates", "Task creation", "Meeting sync (new / cancel / reschedule)", "One-click execution"],
      },
    ],
    solves: "Removes manual CRM work and follow-up friction. You speak → system logs and structures.",
  },
  {
    name: "Professional",
    tagline: "Foundation + Embedded Protection",
    price: "$897",
    period: "/month",
    positioning: "Everything in Starter, plus:",
    popular: true,
    sections: [
      {
        title: "Compliance & Governance Layer",
        items: [
          "Risk language detection",
          "Compliant rewrites",
          "Policy mapping",
          "Approval workflows",
          "Audit-ready logs",
          "Communication archiving",
        ],
      },
    ],
    solves: "Removes admin + compliance anxiety. Move faster without fear.",
  },
  {
    name: "Growth",
    tagline: "Full Autonomous Advisor Operating System",
    price: "$1,497",
    period: "/month",
    positioning: "Everything in Professional, plus:",
    sections: [
      {
        title: "Growth & Trust Engine",
        items: [
          "AI InstantFollow",
          "TrustBuilder",
          "Brand Studio",
          "Proactive follow-up suggestions",
          "Client inactivity detection",
          "Opportunity surfacing",
        ],
      },
    ],
    solves: "Removes admin + removes fear + drives revenue. You don't just stay organized — you grow systematically.",
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

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <div className="mb-1">
                      <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">{tier.period}</span>
                    </div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-accent">
                      {tier.tagline}
                    </span>
                    <CardDescription className="text-sm mt-2">
                      {tier.positioning}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {tier.sections.map((section, si) => (
                      <div key={si}>
                        <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">{section.title}</p>
                        <ul className="space-y-1.5">
                          {section.items.map((item, fi) => (
                            <li key={fi} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">What it solves</p>
                      <p className="text-sm text-muted-foreground">{tier.solves}</p>
                    </div>
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
