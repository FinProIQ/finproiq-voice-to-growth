import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterNew from "@/components/finpro/FooterNew";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </div>
);

const DataHandling = () => {
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

            <h1 className="text-4xl md:text-5xl font-bold mb-4">FinProIQ - Data Handling</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Plain-language explanation of what happens to your data inside FinProIQ. This is not our
              Privacy Policy (that is a separate, lawyer-reviewed document). This page answers the
              operator-level question: "what do you actually do with my stuff."
            </p>

            <div className="space-y-6">
              <Section title="What data we collect">
                <p>Two categories:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Account data.</strong> Your name, firm name, email, billing address, and
                    payment method. Standard SaaS account information.
                  </li>
                  <li>
                    <strong>Client data.</strong> When you upload a 1040 PDF, we receive the document and
                    extract only the tax fields needed for planning analysis. We do not request or store
                    Social Security numbers, full account numbers, addresses, or other personally
                    identifying details beyond what the analysis requires. These fields are filtered out
                    before they leave the upload step.
                  </li>
                </ul>
              </Section>

              <Section title="Where data is stored">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account data lives in our application database, hosted on infrastructure operated by our hosting provider.</li>
                  <li>Uploaded 1040 PDFs are processed in memory and are not written to long-term storage by default.</li>
                  <li>Extracted tax fields are stored only for the duration of the analysis session, then removed unless you choose to save the analysis to your account.</li>
                  <li>Generated content (LinkedIn drafts, meeting briefs) is stored in your account until you delete it or close your account.</li>
                </ul>
              </Section>

              <Section title="How long we keep it">
                <ul className="list-disc pl-6 space-y-2">
                  <li>1040 PDFs: not retained past the session.</li>
                  <li>Extracted tax data: 30 days, then deleted, unless you save a specific analysis.</li>
                  <li>Generated content: until you delete it or close your account.</li>
                  <li>Account data: for the life of your subscription, plus 60 days for billing reconciliation, then deleted.</li>
                </ul>
              </Section>

              <Section title="Do we train AI models on your data?">
                <p>
                  No. Our AI provider does not use customer content sent through their API to train their
                  models. We do not run any model training of our own.
                </p>
              </Section>

              <Section title="Who at FinProIQ can see your data?">
                <p>
                  Today, FinProIQ is operated by one person - the founder. As the team grows, all
                  employees and contractors with access to customer data will sign confidentiality
                  agreements, and access will be logged.
                </p>
              </Section>

              <Section title="Sub-processors">
                <p>We use the following categories of third parties to operate the service:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI / LLM API provider - for document extraction and content generation</li>
                  <li>Application hosting - for the web app and database</li>
                  <li>Email delivery - for transactional emails (account, billing, notifications)</li>
                  <li>Payment processing - for subscription billing</li>
                  <li>Analytics - for basic page-view and product-usage metrics</li>
                </ul>
                <p>
                  Current sub-processors are listed at finproiq.com/sub-processors. We will notify
                  customers in writing at least 30 days before adding a new sub-processor.
                </p>
              </Section>

              <Section title="Encryption">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Data in transit: TLS 1.2 or higher on all connections.</li>
                  <li>Data at rest: industry-standard encryption (AES-256) on stored data via our hosting provider.</li>
                </ul>
              </Section>

              <Section title="Cancellation, deletion, and export">
                <p>
                  You can request a full export of your data at any time by emailing hello@finproiq.com.
                  We will deliver the export within 7 business days.
                </p>
                <p>
                  Upon cancellation, all your customer data is permanently deleted within 60 days, except
                  where retention is required by law (for example, tax records for billing).
                </p>
              </Section>

              <Section title="Compliance certifications">
                <p>
                  FinProIQ does not currently hold SOC 2, ISO 27001, or HIPAA certification. We follow
                  industry-standard practices for data handling and intend to pursue SOC 2 Type 1 as we
                  scale. Customers requiring formal certification or due-diligence questionnaires can
                  email hello@finproiq.com - we maintain a current security overview and can complete
                  most standard assessments.
                </p>
              </Section>

              <Section title="Marketing Rule and FINRA 2210">
                <p>
                  FinProIQ is a software vendor and does not provide investment advice or act as a
                  fiduciary. All content generated through the service is subject to the publishing
                  advisor's firm-level Marketing Rule and FINRA 2210 review and approval. Our automated
                  pre-checks are designed to help advisors and their compliance officers, not to replace
                  their judgment.
                </p>
              </Section>

              <Section title="Questions, concerns, or incidents">
                <p>Email hello@finproiq.com. We respond within one business day.</p>
                <p>
                  If you believe a data incident has affected your account, please mark the email subject
                  "Security." We will respond the same business day and follow up with a written summary
                  within 5 business days.
                </p>
              </Section>
            </div>
          </div>
        </section>
      </main>
      <FooterNew />
    </div>
  );
};

export default DataHandling;