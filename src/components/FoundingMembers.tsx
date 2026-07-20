import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users } from "lucide-react";

const topCards = [
  {
    title: "What founding members get",
    items: [
      "Locked AI Engine pricing forever, even when standard rates increase",
      "Discounted Workflow Automation setup",
      "Monthly 30-minute call where your feedback shapes what gets built next",
      "First access to every new feature shipped",
    ],
  },
  {
    title: "Slots and status",
    items: [
      "10 founding member slots total",
      "First-come priority on roadmap influence",
      "Slots fill in announced cohorts",
    ],
  },
];

const agreeCard = {
  title: "What founding members agree to",
  items: [
    "Use the product weekly during the design partner phase",
    "Give honest feedback in monthly calls",
    "Allow being referenced (anonymously if preferred) in case studies",
  ],
};

const FoundingMembers = () => {
  const handleApply = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Founding Member Apply',
      });
    }
    window.open('https://calendly.com/finproiq', '_blank');
  };

  return (
    <section id="founding-members" className="py-12 md:py-20 bg-accent/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" /> Design partner phase
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-3 text-foreground">
            Founding member <span className="text-accent">program.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            FinProIQ is in design partner phase. The first 10 firms to onboard get founder pricing, locked indefinitely. Only 6 slots remaining.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {topCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Card className="h-full hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{c.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {c.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-10">
          <Button
            size="lg"
            onClick={handleApply}
            className="text-lg px-8 py-6 h-auto bg-accent hover:bg-accent-hover text-accent-foreground shadow-lg hover:shadow-xl transition-all"
          >
            Apply to be a Design Partner
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            15-minute intro call. No obligation to join.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="hover:shadow-medium transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{agreeCard.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {agreeCard.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundingMembers;