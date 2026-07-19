import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service - FinProIQ</title>
        <meta name="description" content="The terms that govern your use of FinProIQ. Please review before getting started." />
        <meta property="og:description" content="The terms that govern your use of FinProIQ. Please review before getting started." />
        <meta property="og:url" content="https://finproiq.com/terms" />
        <link rel="canonical" href="https://finproiq.com/terms" />
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border mb-8">
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using FinProIQ, you agree to responsible usage in accordance with FINRA/SEC and other 
                  regulatory standards. FinProIQ provides AI automation tools but does not offer legal, 
                  financial, or compliance advice.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
                  <h3 className="text-xl font-bold mb-3">Use of Services</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    FinProIQ is designed to assist financial professionals in managing their practice more 
                    efficiently while maintaining compliance with industry regulations. Users are responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Ensuring all content published meets their firm's compliance requirements</li>
                    <li>Reviewing AI-generated content before publication</li>
                    <li>Maintaining the security of their account credentials</li>
                    <li>Using the service in accordance with applicable laws and regulations</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
                  <h3 className="text-xl font-bold mb-3">Compliance Assistance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    While FinProIQ incorporates compliance features and checks, it is an assistance tool and 
                    not a substitute for professional compliance review. Users remain solely responsible for 
                    ensuring their communications and materials comply with all applicable regulations.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
                  <h3 className="text-xl font-bold mb-3">Intellectual Property</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Content created using FinProIQ belongs to you, the user. FinProIQ retains ownership of 
                    its platform, technology, and proprietary algorithms.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
                  <h3 className="text-xl font-bold mb-3">Limitation of Liability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    FinProIQ provides tools and technology in good faith but cannot guarantee specific outcomes 
                    or results. Users agree that FinProIQ is not liable for any regulatory issues, compliance 
                    violations, or business outcomes resulting from the use of the platform.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
                  <h3 className="text-xl font-bold mb-3">Termination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Either party may terminate service at any time. Upon termination, users retain access to 
                    their data for a reasonable period to facilitate transition.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
                  <h3 className="text-xl font-bold mb-3">Changes to Terms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update these terms from time to time. Continued use of the service after changes 
                    constitutes acceptance of the updated terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
