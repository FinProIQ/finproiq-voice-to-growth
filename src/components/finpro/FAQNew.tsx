import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  { q: "Are you SEC registered?", a: "FinProIQ is a software vendor, not an advisor. We do not provide investment advice or act as a fiduciary. Our customers (advisors) maintain all regulatory responsibility for what they publish." },
  { q: "What happens to my client data?", a: "We do not retain client documents past the session. We do not train models on your data. Detailed data handling on request." },
  { q: "What if AI hallucinates a tax move?", a: "Tax math is deterministic in our system - brackets, IRMAA thresholds, RMD ages, contribution limits are hard-coded rules in plain code. AI only ranks moves and writes explanations. It cannot invent a tax bracket." },
  { q: "How is this different from Holistiplan?", a: "Holistiplan does the extraction and analysis brilliantly. We do that and continue - turning the same analysis into branded content in your voice. We don't compete with Holistiplan; we extend past where it stops." },
  { q: "How is this different from FMG / Snappy Kraken?", a: "Their content is templated and shared across thousands of advisors. Ours is generated from your actual client work in your actual voice. Different category." },
  { q: "What if I cancel?", a: "30-day refund on automation. Founding member AI Visibility agreements have a 60-day exit. Full data export on departure. No clawbacks." },
];

const FAQNew = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center mb-12 text-foreground"
        >
          Frequently asked questions
        </motion.h2>
        <Accordion type="single" collapsible className="w-full">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQNew;