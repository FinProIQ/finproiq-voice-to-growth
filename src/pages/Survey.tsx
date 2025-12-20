import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Users, 
  CheckCircle2,
  ClipboardList,
  Clock,
  Shield,
  Brain,
  TrendingUp,
  Search,
  RefreshCw,
  Target
} from "lucide-react";
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
  { id: 1, title: "Workflow", icon: ClipboardList },
  { id: 2, title: "Time", icon: Clock },
  { id: 3, title: "Compliance", icon: Shield },
  { id: 4, title: "Pain Points", icon: Brain },
  { id: 5, title: "Future", icon: TrendingUp },
  { id: 6, title: "Diagnosis", icon: Search },
  { id: 7, title: "Past Tries", icon: RefreshCw },
  { id: 8, title: "Vision", icon: Target },
];

const Survey = () => {
  const [currentSection, setCurrentSection] = useState(0); // 0 = intro
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentQuestions = currentSection > 0 ? questions.filter(q => q.section === currentSection) : [];
  const totalSections = sections.length;
  const progress = (currentSection / totalSections) * 100;

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
    if (currentSection === 0) return true;
    return currentQuestions.every(q => {
      const answer = answers[q.id];
      if (q.type === "text") return answer && (answer as string).trim().length > 0;
      if (q.type === "checkbox") return answer && (answer as string[]).length > 0;
      if (q.type === "radio" || q.type === "scale") return !!answer;
      return true;
    });
  };

  const transitionToSection = (newSection: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(newSection);
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    if (currentSection < totalSections) {
      transitionToSection(currentSection + 1);
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
    if (currentSection > 0) {
      transitionToSection(currentSection - 1);
    }
  };

  const handleSectionClick = (sectionId: number) => {
    if (sectionId <= currentSection) {
      transitionToSection(sectionId);
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

  const currentSectionData = sections.find(s => s.id === currentSection);
  const CurrentIcon = currentSectionData?.icon;

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to FinProIQ</span>
            </Link>
            <h1 className="text-lg font-semibold font-display text-accent">Survey Complete</h1>
            <div className="w-24" />
          </div>
        </header>

        <main className="container px-4 py-16 max-w-2xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/10 flex items-center justify-center">
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
                className="w-full border-accent text-accent hover:bg-accent/5"
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
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Exit</span>
            </Link>
            <h1 className="text-lg font-semibold font-display text-accent">
              Workflow Discovery
            </h1>
            <span className="text-sm text-muted-foreground font-medium">
              {currentSection > 0 ? `${currentSection}/${totalSections}` : "Intro"}
            </span>
          </div>
          {/* Progress bar */}
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Section Navigation */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm overflow-x-auto">
        <div className="container px-4 py-3">
          <div className="flex gap-2 min-w-max">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = section.id === currentSection;
              const isCompleted = section.id < currentSection;
              const isLocked = section.id > currentSection;
              
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  disabled={isLocked}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                    isActive && "bg-accent text-accent-foreground",
                    isCompleted && "bg-accent/10 text-accent cursor-pointer hover:bg-accent/20",
                    isLocked && "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container px-4 py-8 max-w-2xl mx-auto">
        <div 
          ref={contentRef}
          className={cn(
            "transition-all duration-300 ease-out",
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          )}
        >
          {/* Intro Screen */}
          {currentSection === 0 && (
            <div className="animate-fade-in">
              <Card className="p-8 md:p-12 border-accent/20 bg-card">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <ClipboardList className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                    Let's explore your workflow
                  </h2>
                </div>
                
                <div className="space-y-5 text-base leading-relaxed max-w-lg mx-auto">
                  <p className="text-foreground font-medium">
                    Thanks for taking a few minutes.
                  </p>
                  
                  <p className="text-muted-foreground">
                    This isn't a sales form — it's a quick workflow check to understand how advisors like you handle follow-ups, notes, and client communication.
                  </p>
                  
                  <p className="text-muted-foreground">
                    Answer as casually as you'd like. There are no right or wrong answers — just your honest experience.
                  </p>
                </div>

                <div className="mt-10 flex justify-center">
                  <Button
                    onClick={handleNext}
                    size="lg"
                    className="px-10 py-5 text-base bg-accent hover:bg-accent-hover text-accent-foreground"
                  >
                    Let's Begin
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* Section Content */}
          {currentSection > 0 && (
            <>
              {/* Section Title */}
              <div className="mb-8 animate-fade-in">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent/10">
                    {CurrentIcon && <CurrentIcon className="w-6 h-6 text-accent" />}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground">
                      {currentSectionData?.title}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {currentQuestions.length} question{currentQuestions.length > 1 ? 's' : ''} in this section
                    </p>
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-6">
                {currentQuestions.map((q, idx) => (
                  <Card 
                    key={q.id} 
                    className={cn(
                      "p-6 transition-all duration-300 animate-fade-in",
                      answers[q.id] ? "border-accent/30 bg-accent/5" : "border-border"
                    )}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <Label className="text-base font-medium text-foreground mb-4 block leading-relaxed">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3 bg-accent text-accent-foreground">
                        {idx + 1}
                      </span>
                      {q.question}
                    </Label>

                    {q.type === "text" && (
                      <Textarea
                        value={(answers[q.id] as string) || ""}
                        onChange={(e) => handleAnswer(q.id, e.target.value)}
                        placeholder={q.placeholder}
                        className="min-h-[100px] resize-none bg-background border-border focus:border-accent transition-colors"
                      />
                    )}

                    {q.type === "radio" && (
                      <RadioGroup
                        value={(answers[q.id] as string) || ""}
                        onValueChange={(value) => handleAnswer(q.id, value)}
                        className="space-y-2"
                      >
                        {q.options?.map((option) => (
                          <div 
                            key={option} 
                            className={cn(
                              "flex items-center space-x-3 p-3 rounded-lg transition-all cursor-pointer border",
                              answers[q.id] === option 
                                ? "bg-accent/10 border-accent/30" 
                                : "hover:bg-muted border-transparent"
                            )}
                          >
                            <RadioGroupItem value={option} id={`${q.id}-${option}`} />
                            <Label 
                              htmlFor={`${q.id}-${option}`} 
                              className="text-foreground cursor-pointer flex-1"
                            >
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}

                    {q.type === "checkbox" && (
                      <div className="space-y-2">
                        {q.options?.map((option) => {
                          const isChecked = ((answers[q.id] as string[]) || []).includes(option);
                          return (
                            <div 
                              key={option} 
                              className={cn(
                                "flex items-center space-x-3 p-3 rounded-lg transition-all cursor-pointer border",
                                isChecked 
                                  ? "bg-accent/10 border-accent/30" 
                                  : "hover:bg-muted border-transparent"
                              )}
                              onClick={() => handleCheckboxChange(q.id, option, !isChecked)}
                            >
                              <Checkbox
                                id={`${q.id}-${option}`}
                                checked={isChecked}
                                onCheckedChange={(checked) => handleCheckboxChange(q.id, option, checked as boolean)}
                              />
                              <Label 
                                htmlFor={`${q.id}-${option}`} 
                                className="text-foreground cursor-pointer flex-1"
                              >
                                {option}
                              </Label>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {q.type === "scale" && (
                      <div className="space-y-5 pt-2">
                        <Slider
                          value={[parseInt(answers[q.id] as string) || 5]}
                          onValueChange={(value) => handleAnswer(q.id, value[0].toString())}
                          min={1}
                          max={10}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Far from capacity</span>
                          <span className="text-3xl font-bold text-accent">
                            {answers[q.id] || "5"}
                          </span>
                          <span className="text-xs text-muted-foreground">At full capacity</span>
                        </div>
                      </div>
                    )}

                    {/* Follow-up question */}
                    {q.followUp && q.followUp.condition.includes(answers[q.id] as string) && (
                      <div className="mt-6 pt-6 border-t border-border animate-fade-in">
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
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="px-8 bg-accent hover:bg-accent-hover text-accent-foreground"
                >
                  {currentSection === totalSections ? "Complete Survey" : "Continue"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Survey;
