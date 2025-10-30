import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What is AI Client & Insight Engine Agent?",
    answer: "AI Client & Insight Engine Agent is an AI-powered growth ecosystem for financial professionals — combining client insights, compliance, and automation to help you grow your practice efficiently and safely.",
  },
  {
    question: "Is AI Client & Insight Engine Agent compliant with FINRA/SEC guidelines?",
    answer: "Yes. Every AI agent is designed with compliance as a built-in layer, not an afterthought. Our system automatically reviews content, flags risky language, and ensures all communications meet regulatory standards.",
  },
  {
    question: "Can I use AI Client & Insight Engine Agent with my existing CRM?",
    answer: "Yes. AI Client & Insight Engine Agent integrates easily with major CRMs through APIs or manual sync, allowing you to enhance your current workflow without disruption.",
  },
  {
    question: "Does it post automatically on social media?",
    answer: "Yes — you can review or approve before publishing, ensuring full compliance and maintaining your personal touch while automating the content creation process.",
  },
  {
    question: "How long does setup take?",
    answer: "Most professionals get fully onboarded and start automating within 48 hours. Our team guides you through the process to ensure a smooth transition.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
              Everything you need to know about AI Client & Insight Engine Agent
            </p>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-6 shadow-soft border border-border"
                >
                  <h2 className="text-xl font-bold mb-3">{index + 1}. {faq.question}</h2>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
