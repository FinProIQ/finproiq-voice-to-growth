import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is FinProIQ?",
    answer:
      "FinProIQ is an operating system for independent financial advisors. It handles the work that piles up around client meetings: writing the summary, updating your CRM, drafting the follow-up, and queuing the next task. You stay in control while the busywork runs itself.",
  },
  {
    question: "Who is FinProIQ built for?",
    answer:
      "Independent financial advisors and small-firm owners who run their own tech decisions, especially advisors already using tools like Wealthbox, Calendly, AdvicePay, and RightCapital. If you handle your own admin and want that time back, it fits.",
  },
  {
    question: "What does FinProIQ integrate with?",
    answer:
      "It connects to the tools independent advisors already run, including Wealthbox, Calendly, AdvicePay, RightCapital, and Clockify. The point is to stop you from rekeying the same client data across five different systems.",
  },
  {
    question: "Will AI replace me or contact my clients on its own?",
    answer:
      "No. Nothing reaches a client without your review. FinProIQ prepares and drafts, then routes anything that needs a decision back to you. The AI does the assembly work; the judgment stays with you.",
  },
  {
    question: "Is it compliant? Is there an audit trail?",
    answer:
      "Every action runs through validation before it happens, and each step is logged, so you always have a record of what was done and when. Anything outside the defined rules gets flagged to you rather than guessed at.",
  },
  {
    question: "How much does FinProIQ cost?",
    answer:
      "There are two ways in: a one-time workflow automation setup, or a monthly AI Engine subscription starting at $79/month. You can also bundle both. Full details are on the pricing page.",
  },
  {
    question: "How long does setup take?",
    answer:
      "The workflow automation rolls out in phases, so you are not rebuilding your entire practice at once. The core automation is running early, and each phase builds on the last.",
  },
  {
    question: "Do I need to be technical to use it?",
    answer:
      "No. FinProIQ runs in the background of the tools you already use. If you can run Wealthbox and Calendly, you can run this.",
  },
  {
    question: "What happens to my client data?",
    answer:
      "FinProIQ works across the tools you already trust and moves information between them rather than becoming one more place your data sits unprotected. If you want specifics on data handling, reach out and we will walk you through it.",
  },
  {
    question: "Can I see it working?",
    answer:
      "Yes. Book a call for a live walkthrough. There are also a limited number of founding member slots with locked-in pricing for advisors who want to shape the product early.",
  },
];

const FAQ = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>FAQ - FinProIQ</title>
        <meta name="description" content="Straight answers on how FinProIQ automates follow-ups and CRM updates, what it costs, how compliance works, and how fast you can get set up." />
        <meta property="og:description" content="Straight answers on how FinProIQ automates follow-ups and CRM updates, what it costs, how compliance works, and how fast you can get set up." />
        <meta property="og:url" content="https://finproiq.com/faq" />
        <link rel="canonical" href="https://finproiq.com/faq" />
      </Helmet>
      <Navigation onOpenCalendly={() => {}} />
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container px-4 max-w-4xl">
            <Link to="/">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Everything you need to know about FinProIQ
            </p>

            <Accordion
              type="single"
              collapsible
              className="bg-card rounded-xl border border-border shadow-soft divide-y divide-border overflow-hidden"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b-0 px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center bg-accent/5 border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Book a live walkthrough and we will show you exactly how FinProIQ fits into your practice.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-md hover:shadow-lg transition-all"
              >
                <a
                  href="https://calendly.com/finproiq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Demo
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
