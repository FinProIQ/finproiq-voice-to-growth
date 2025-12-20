import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Calendar, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import WaitlistModal from "@/components/WaitlistModal";
import { cn } from "@/lib/utils";

interface Question {
  id: string;
  section: number;
  sectionTitle: string;
  question: string;
  type: "text" | "radio" | "checkbox" | "scale";
  options?: string[];
  placeholder?: string;
  followUp?: {
    condition: string[];
    question: string;
    type: "text";
    placeholder?: string;
  };
}

const questions: Question[] = [
  // Section 1: Current Workflow
  {
    id: "post_meeting",
    section: 1,
    sectionTitle: "Current Workflow",
    question: "Walk me through what happens right after a client meeting.",
    type: "text",
    placeholder: "Describe your typical post-meeting routine...",
  },
  {
    id: "notes_location",
    section: 1,
    sectionTitle: "Current Workflow",
    question: "Where do your notes live after the meeting?",
    type: "checkbox",
    options: ["In my head", "Paper", "CRM", "Notes app", "Email drafts", "End-of-day catch-up", "Other"],
  },
  {
    id: "followup_writer",
    section: 1,
    sectionTitle: "Current Workflow",
    question: "Who usually writes the follow-up message to the client?",
    type: "radio",
    options: ["Me, immediately", "Me, later", "Assistant", "Template", "Sometimes skipped"],
  },
  {
    id: "crm_updates",
    section: 1,
    sectionTitle: "Current Workflow",
    question: "How do CRM updates actually get done?",
    type: "radio",
    options: ["Same day", "End of week", "When I remember", "Rarely", "I don't use a CRM"],
  },
  // Section 2: Time & Slippage
  {
    id: "delayed_tasks",
    section: 2,
    sectionTitle: "Time & Slippage",
    question: "When things get busy, what part usually gets delayed or skipped?",
    type: "text",
    placeholder: "Be honest — we've all been there...",
  },
  {
    id: "time_spent",
    section: 2,
    sectionTitle: "Time & Slippage",
    question: "Roughly how much time per week do follow-ups, notes, and CRM updates take?",
    type: "radio",
    options: ["Less than 1 hour", "1–3 hours", "3–5 hours", "5+ hours", "Not sure"],
  },
  {
    id: "slippage_frequency",
    section: 2,
    sectionTitle: "Time & Slippage",
    question: "How often does something slip through the cracks?",
    type: "radio",
    options: ["Rarely", "Occasionally", "Often", "More than I'd like"],
    followUp: {
      condition: ["Often", "More than I'd like"],
      question: "Has that ever caused a client issue or awkward follow-up?",
      type: "text",
      placeholder: "Share an example if you're comfortable...",
    },
  },
  // Section 3: Compliance & Confidence
  {
    id: "compliance_approach",
    section: 3,
    sectionTitle: "Compliance & Confidence",
    question: "How do you keep messages compliant while still sounding human?",
    type: "radio",
    options: ["I rewrite carefully", "Compliance reviews later", "I use approved language", "I'm never fully sure", "I avoid saying too much"],
  },
  {
    id: "compliance_redo",
    section: 3,
    sectionTitle: "Compliance & Confidence",
    question: "How often do you redo a follow-up because compliance flagged something?",
    type: "radio",
    options: ["Never", "Occasionally", "Often"],
  },
  // Section 4: Core Pain
  {
    id: "biggest_stress",
    section: 4,
    sectionTitle: "Core Pain",
    question: "Out of everything you've shared so far — what part stresses you out the most?",
    type: "text",
    placeholder: "What keeps you up at night about your workflow?",
  },
  {
    id: "stress_reason",
    section: 4,
    sectionTitle: "Core Pain",
    question: "Why that specifically?",
    type: "text",
    placeholder: "Dig a little deeper...",
  },
  {
    id: "real_cost",
    section: 4,
    sectionTitle: "Core Pain",
    question: "What's the real cost of that happening — time, energy, missed opportunities, or something else?",
    type: "text",
    placeholder: "Think about the ripple effects...",
  },
  // Section 5: Gap & Future Cost
  {
    id: "future_pain",
    section: 5,
    sectionTitle: "Future Cost",
    question: "What's the worst part about operating this way for another 6–12 months?",
    type: "text",
    placeholder: "Project forward...",
  },
  {
    id: "capacity_limit",
    section: 5,
    sectionTitle: "Future Cost",
    question: "Does this limit how many clients you can realistically take on?",
    type: "radio",
    options: ["Yes", "Somewhat", "No"],
  },
  {
    id: "capacity_scale",
    section: 5,
    sectionTitle: "Future Cost",
    question: "On a scale of 1–10, how close do you feel to operating at your real capacity?",
    type: "scale",
  },
  // Section 6: Self-Diagnosis
  {
    id: "predictable_process",
    section: 6,
    sectionTitle: "Self-Diagnosis",
    question: "Do you have a predictable process that ensures every client gets a clear, compliant follow-up within minutes?",
    type: "radio",
    options: ["Yes, consistently", "Sometimes", "No, it's manual"],
  },
  {
    id: "biggest_challenge",
    section: 6,
    sectionTitle: "Self-Diagnosis",
    question: "What's been the biggest challenge fixing this yourself?",
    type: "checkbox",
    options: ["Time", "Tools", "Compliance uncertainty", "Too many systems", "Mental bandwidth"],
  },
  // Section 7: Prior Attempts
  {
    id: "prior_solutions",
    section: 7,
    sectionTitle: "Prior Attempts",
    question: "Have you tried anything before to improve this?",
    type: "checkbox",
    options: ["CRM features", "Templates", "AI note tools", "Assistants", "Nothing yet"],
  },
  {
    id: "prior_outcome",
    section: 7,
    sectionTitle: "Prior Attempts",
    question: "What was promised vs what actually happened?",
    type: "text",
    placeholder: "Share your experience...",
  },
  // Section 8: Vision
  {
    id: "ideal_state",
    section: 8,
    sectionTitle: "Vision",
    question: "What would it look like if follow-ups, notes, and compliance just \"handled themselves\"?",
    type: "text",
    placeholder: "Paint the picture...",
  },
  {
    id: "time_focus",
    section: 8,
    sectionTitle: "Vision",
    question: "If you had 5–10 hours a week back, what would you focus on instead?",
    type: "checkbox",
    options: ["Growth", "Client relationships", "Prospecting", "Personal time", "Less stress"],
  },
];

const sections = [
  { id: 1, title: "Current Workflow", icon: "📋" },
  { id: 2, title: "Time & Slippage", icon: "⏱️" },
  { id: 3, title: "Compliance", icon: "✅" },
  { id: 4, title: "Core Pain", icon: "💭" },
  { id: 5, title: "Future Cost", icon: "📈" },
  { id: 6, title: "Self-Diagnosis", icon: "🔍" },
  { id: 7, title: "Prior Attempts", icon: "🔄" },
  { id: 8, title: "Vision", icon: "🎯" },
];

const Survey = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const currentQuestions = questions.filter(q => q.section === currentSection);
  const totalSections = sections.length;
  const progress = ((currentSection - 1) / totalSections) * 100;

  const handleAnswer = (questionId: string, value: string | string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleCheckboxChange = (questionId: string, option: string, checked: boolean) => {
    const current = (answers[questionId] as string[]) || [];
    if (checked) {
      handleAnswer(questionId, [...current, option]);
    } else {
      handleAnswer(questionId, current.filter(o => o !== option));
    }
  };

  const canProceed = () => {
    return currentQuestions.every(q => {
      const answer = answers[q.id];
      if (q.type === "text") return answer && (answer as string).trim().length > 0;
      if (q.type === "checkbox") return answer && (answer as string[]).length > 0;
      if (q.type === "radio" || q.type === "scale") return !!answer;
      return true;
    });
  };

  const handleNext = () => {
    if (currentSection < totalSections) {
      setCurrentSection(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsComplete(true);
      if (window.gtag) {
        window.gtag('event', 'survey_complete', {
          event_category: 'engagement',
          event_label: 'Workflow Survey'
        });
      }
    }
  };

  const handlePrevious = () => {
    if (currentSection > 1) {
      setCurrentSection(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openCalendly = () => {
    if (window.gtag) {
      window.gtag('event', 'calendly_click', {
        event_category: 'engagement',
        event_label: 'Survey Completion'
      });
    }
    window.open('https://calendly.com/your-link', '_blank');
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="container px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to FinProIQ</span>
            </Link>
            <h1 className="text-lg font-semibold font-display text-foreground">Survey Complete</h1>
            <div className="w-24" />
          </div>
        </header>

        <main className="container px-4 py-16 max-w-2xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/20 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
              Thanks — this was genuinely helpful.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">
              You're not alone. Most advisors describe the same friction points once they see them written down.
            </p>

            <div className="space-y-6 max-w-md mx-auto">
              <Card className="p-6 border-accent/20 bg-accent/5">
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  If you'd like, I'm happy to walk through your responses and share what other advisors are doing differently.
                </p>
                <Button
                  onClick={openCalendly}
                  size="lg"
                  className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Optional 15-min conversation
                </Button>
              </Card>

              <div className="flex items-center gap-4">
                <div className="flex-1 border-t border-border" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Or stay hands-off</span>
                <div className="flex-1 border-t border-border" />
              </div>

              <Button
                onClick={() => setIsWaitlistOpen(true)}
                variant="outline"
                size="lg"
                className="w-full border-border hover:border-accent hover:bg-accent/5"
              >
                <Users className="w-5 h-5 mr-2" />
                Join the Waitlist
              </Button>

              <Link to="/" className="block">
                <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <WaitlistModal 
          isOpen={isWaitlistOpen} 
          onClose={() => setIsWaitlistOpen(false)} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Exit</span>
            </Link>
            <h1 className="text-lg font-semibold font-display text-foreground">Workflow Discovery</h1>
            <span className="text-sm text-muted-foreground">{currentSection}/{totalSections}</span>
          </div>
          {/* Progress bar */}
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Section Navigation */}
      <div className="border-b border-border/50 bg-background/50 backdrop-blur-sm overflow-x-auto">
        <div className="container px-4 py-3">
          <div className="flex gap-2 min-w-max">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => section.id <= currentSection && setCurrentSection(section.id)}
                disabled={section.id > currentSection}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  section.id === currentSection
                    ? "bg-accent text-accent-foreground shadow-md"
                    : section.id < currentSection
                    ? "bg-accent/10 text-accent cursor-pointer hover:bg-accent/20"
                    : "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                )}
              >
                <span className="mr-1.5">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container px-4 py-8 max-w-2xl mx-auto">
        {/* Intro message for first section */}
        {currentSection === 1 && (
          <Card className="mb-8 p-6 bg-accent/5 border-accent/20">
            <p className="text-foreground leading-relaxed">
              Thanks for taking a few minutes.<br /><br />
              This is <span className="font-semibold">not a sales form</span> — it's a short workflow check to understand how advisors handle follow-ups, notes, and client communication today.<br /><br />
              Answer as casually as you'd like.
            </p>
          </Card>
        )}

        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-2">
            {sections.find(s => s.id === currentSection)?.icon} {sections.find(s => s.id === currentSection)?.title}
          </h2>
          <p className="text-muted-foreground">
            Question {currentQuestions.findIndex(q => !answers[q.id]) + 1 || currentQuestions.length} of {currentQuestions.length} in this section
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {currentQuestions.map((q, idx) => (
            <Card 
              key={q.id} 
              className={cn(
                "p-6 transition-all duration-300",
                answers[q.id] ? "border-accent/30 bg-accent/5" : "border-border"
              )}
            >
              <Label className="text-lg font-medium text-foreground mb-4 block leading-relaxed">
                {idx + 1}. {q.question}
              </Label>

              {q.type === "text" && (
                <Textarea
                  value={(answers[q.id] as string) || ""}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  placeholder={q.placeholder}
                  className="min-h-[100px] resize-none bg-background border-border focus:border-accent"
                />
              )}

              {q.type === "radio" && (
                <RadioGroup
                  value={(answers[q.id] as string) || ""}
                  onValueChange={(value) => handleAnswer(q.id, value)}
                  className="space-y-3"
                >
                  {q.options?.map((option) => (
                    <div key={option} className="flex items-center space-x-3">
                      <RadioGroupItem value={option} id={`${q.id}-${option}`} />
                      <Label 
                        htmlFor={`${q.id}-${option}`} 
                        className="text-foreground cursor-pointer"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {q.type === "checkbox" && (
                <div className="space-y-3">
                  {q.options?.map((option) => (
                    <div key={option} className="flex items-center space-x-3">
                      <Checkbox
                        id={`${q.id}-${option}`}
                        checked={((answers[q.id] as string[]) || []).includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange(q.id, option, checked as boolean)}
                      />
                      <Label 
                        htmlFor={`${q.id}-${option}`} 
                        className="text-foreground cursor-pointer"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              )}

              {q.type === "scale" && (
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <button
                      key={num}
                      onClick={() => handleAnswer(q.id, num.toString())}
                      className={cn(
                        "w-10 h-10 rounded-lg font-medium transition-all",
                        answers[q.id] === num.toString()
                          ? "bg-accent text-accent-foreground shadow-md"
                          : "bg-muted text-foreground hover:bg-accent/20"
                      )}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              )}

              {/* Follow-up question */}
              {q.followUp && q.followUp.condition.includes(answers[q.id] as string) && (
                <div className="mt-6 pt-6 border-t border-border/50">
                  <Label className="text-base font-medium text-foreground mb-3 block">
                    {q.followUp.question}
                  </Label>
                  <Textarea
                    value={(answers[`${q.id}_followup`] as string) || ""}
                    onChange={(e) => handleAnswer(`${q.id}_followup`, e.target.value)}
                    placeholder={q.followUp.placeholder}
                    className="min-h-[80px] resize-none bg-background border-border focus:border-accent"
                  />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-border/50">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentSection === 1}
            className="text-muted-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="bg-accent hover:bg-accent-hover text-accent-foreground px-8"
          >
            {currentSection === totalSections ? "Complete Survey" : "Continue"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Survey;
