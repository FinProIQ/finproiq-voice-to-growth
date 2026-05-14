import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const cards = [
  {
    badge: "One-time setup",
    title: "Workflow Automation",
    tagline: "The plumbing before the meeting.",
    body: "Pre-built integrations across the XYPN tech stack. Calendly to Wealthbox, AdvicePay, RightCapital, Clockify. We set it up. You stop maintaining Zaps.",
    price: "From $500 to $750 per phase, one-time",
    cta: "See workflow phases",
    target: "workflow-automation",
  },
  {
    badge: "Monthly subscription",
    title: "AI Engine",
    tagline: "The brainwork after the meeting.",
    body: "Voice notes become compliant follow-ups, CRM updates, social posts, and next steps. Three tiers from Starter to Growth.",
    price: "From $79 to $399 per month",
    cta: "See AI tiers",
    target: "pricing",
    popular: true,
  },
  {
    badge: "Workflow + AI",
    title: "Full Operating System",
    tagline: "Both layers. One bill.",
    body: "Workflow setup plus AI subscription. Everything connected end-to-end. Recommended for XYPN-stack firms scaling past 50 households.",
    price: "Workflow setup + AI subscription, bundled pricing",
    cta: "Talk to us about Full OS",
    target: "calendly",
  },
];

const ThreeWaysToBuy = () => {
  const handleClick = (target: string, label: string) => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: `Three Ways To Buy - ${label}`,
      });
    }
    if (target === "calendly") {
      window.open('https://calendly.com/finproiq', '_blank');
      return;
    }
    const el = document.getElementById(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="product" className="py-12 md:py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-3 text-foreground">
            Three ways to buy. <span className="text-accent">One Operating System.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Buy either layer alone, or the Full OS together. Most advisors start with one and add the other.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="h-full"
            >
              <Card
                className={`relative h-full flex flex-col transition-all duration-300 hover:shadow-medium ${
                  c.popular ? "border-accent border-2 shadow-medium" : "border-border"
                }`}
              >
                {c.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                    {c.badge}
                  </span>
                  <CardTitle className="text-xl">{c.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-foreground/80">
                    {c.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{c.body}</p>
                  <p className="text-sm font-semibold text-foreground mb-6">{c.price}</p>
                  <Button
                    onClick={() => handleClick(c.target, c.title)}
                    className="mt-auto bg-accent hover:bg-accent-hover text-accent-foreground"
                  >
                    {c.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeWaysToBuy;