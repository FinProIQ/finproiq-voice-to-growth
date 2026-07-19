import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy - FinProIQ</title>
        <meta name="description" content="How FinProIQ collects, uses, and protects your data and your clients' information. Read our full privacy policy." />
        <meta property="og:description" content="How FinProIQ collects, uses, and protects your data and your clients' information. Read our full privacy policy." />
        <meta property="og:url" content="https://finproiq.com/privacy" />
        <link rel="canonical" href="https://finproiq.com/privacy" />
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-xl p-8 shadow-soft border border-border mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Commitment to Your Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We value your privacy. FinProIQ only collects essential user data to improve functionality, 
                  personalize experiences, and maintain compliance. We do not share or sell your data.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
                  <h3 className="text-xl font-bold mb-3">Information We Collect</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information necessary to provide and improve our services, including account 
                    information, usage data, and communication preferences. All data collection is done in 
                    accordance with applicable privacy laws and regulations.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
                  <h3 className="text-xl font-bold mb-3">How We Use Your Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information is used to provide, maintain, and improve our services, ensure compliance 
                    with financial regulations, and communicate with you about your account and our services.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
                  <h3 className="text-xl font-bold mb-3">Data Security</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your data, including encryption, 
                    secure storage, and regular security audits. Your data is stored on secure servers with 
                    restricted access.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
                  <h3 className="text-xl font-bold mb-3">Your Rights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, correct, or delete your personal information at any time. 
                    You can also opt out of marketing communications while continuing to use our services.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
                  <h3 className="text-xl font-bold mb-3">Contact Us</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about our privacy practices, please contact us through our 
                    support channels.
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

export default Privacy;
