import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";

const advisorTiers = [
  {
    name: "Starter",
    tagline: "The compliant starting point",
    price: "$79",
    period: "/mo",
    positioning: "AI turns your notes into ready-to-review Email and SMS — you control the send.",
    features: [
      "Voice & text notes → Email & SMS formatted output",
      "Social content generation — up to 10 posts/month",
      "CRM entries auto-generated — manual update required",
      "Compliance engine applied to every output",
    ],
  },
  {
    name: "Professional",
    tagline: "Where real automation begins",
    price: "$199",
    period: "/mo",
    positioning: "One click sends the email, posts the content, and updates the CRM. No copy-paste.",
    popular: true,
    features: [
      "Everything in Starter",
      "Direct Email & SMS sending — one-click execution",
      "Automated CRM updates with full integration",
      "Unlimited social posts with direct publishing",
      "Full Brand Studio with scheduled social posts",
      "Memory Layer for personalized, context-aware output",
    ],
  },
  {
    name: "Growth",
    tagline: "Your autonomous advisor OS",
    price: "$399",
    period: "/mo",
    positioning: "Full intelligence stack — enrichment, insights, and intent-triggered workflows.",
    comingSoon: true,
    features: [
      "Everything in Professional",
      "CRM enrichment & new client addition",
      "Insights Dashboard — performance analytics",
      "Intent-triggered workflows",
    ],
    comingSoonItems: [
      "Proactive follow-up suggestions",
      "Automated meeting scheduling & follow-up emails",
      "Advisor authority & thought leadership engine",
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
    <section id="pricing" className="py-12 md:py-20 bg-muted/50">
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
            AI Engine subscription
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Choose the tier that fits your practice. Scale as you grow.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {advisorTiers.map((tier, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card
                  className={`relative h-full flex flex-col transition-all duration-300 hover:shadow-medium ${
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
                  {tier.comingSoon && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-muted text-muted-foreground px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-border">
                      Coming Soon
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
                  <CardContent className="flex flex-col flex-1">
                    <ul className="space-y-2 mb-5">
                      {tier.features.map((item, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {tier.comingSoonItems && (
                      <div className="mt-auto pt-3 border-t border-border">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Coming Soon</p>
                        <ul className="space-y-2">
                          {tier.comingSoonItems.map((item, fi) => (
                            <li key={fi} className="flex items-start gap-2 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" strokeWidth={2} />
                              <span className="text-muted-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-muted-foreground mt-8 text-lg font-medium"
          >
            Try it free for 14 days. Full refund if not happy.
          </motion.p>
        </div>

        {/* Workflow Automation Pricing */}
        <div id="workflow-automation">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center mb-3 text-accent"
          >
            Workflow Automation setup
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            One-time setup fee for automated client provisioning from scheduler to CRM. Buy phase by phase or all three at once.
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
