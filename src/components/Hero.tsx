import { lazy, Suspense } from "react";
const VoiceToCrm = lazy(() => import("@/components/VoiceToCrm"));

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-16 bg-background">
      <div className="container relative z-10 px-4 py-10 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full shadow-lg">
              For Financial Advisors & Professionals
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-foreground leading-tight">
            Get 10 hours back{" "}
            <span className="text-accent">every week.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            FinProIQ automates scheduling, CRM updates, follow-ups, and compliance - the work that used to eat your nights and weekends.
          </p>

          <div className="mb-10">
            <Suspense fallback={<div className="min-h-[280px]" />}>
              <VoiceToCrm />
            </Suspense>
          </div>

          <p className="text-sm text-muted-foreground">
            Built for financial advisors who want to move faster, stay compliant, and close more without adding work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
