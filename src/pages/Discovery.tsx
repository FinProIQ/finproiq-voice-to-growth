import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
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
  Target,
  Home,
  X,
  Mail
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import WaitlistModal from "@/components/WaitlistModal";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  { id: 1, title: "Client Meeting", icon: ClipboardList },
  { id: 2, title: "Time", icon: Clock },
  { id: 3, title: "Compliance", icon: Shield },
  { id: 4, title: "Pain Points", icon: Brain },
  { id: 5, title: "Future", icon: TrendingUp },
  { id: 6, title: "Diagnosis", icon: Search },
  { id: 7, title: "Past Tries", icon: RefreshCw },
  { id: 8, title: "Vision", icon: Target },
];

const CALENDLY_URL = "https://calendly.com/raman-sivasankar/introductory-15-minute-call";

const Discovery = () => {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [showExitCalendly, setShowExitCalendly] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const canComplete = () => {
    return questions.every(q => {
      const answer = answers[q.id];
      if (q.type === "text") return answer && (answer as string).trim().length > 0;
      if (q.type === "checkbox") return answer && (answer as string[]).length > 0;
      if (q.type === "radio" || q.type === "scale") return !!answer;
      return true;
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleExitClick = () => {
    if (Object.keys(answers).length > 0) {
      setShowExitDialog(true);
    } else {
      navigate('/');
    }
  };

  const handleExitBookCall = () => {
    setShowExitCalendly(true);
  };

  const handleExitNoThanks = () => {
    setShowExitDialog(false);
    navigate('/');
  };

  const saveResponsesToDatabase = async () => {
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('survey_responses')
        .insert({
          email: email || null,
          post_meeting: answers.post_meeting as string || null,
          notes_location: answers.notes_location as string[] || null,
          followup_writer: answers.followup_writer as string || null,
          crm_updates: answers.crm_updates as string || null,
          delayed_tasks: answers.delayed_tasks as string || null,
          time_spent: answers.time_spent as string || null,
          slippage_frequency: answers.slippage_frequency as string || null,
          slippage_followup: answers.slippage_frequency_followup as string || null,
          compliance_approach: answers.compliance_approach as string || null,
          compliance_redo: answers.compliance_redo as string || null,
          biggest_stress: answers.biggest_stress as string || null,
          stress_reason: answers.stress_reason as string || null,
          real_cost: answers.real_cost as string || null,
          future_pain: answers.future_pain as string || null,
          capacity_limit: answers.capacity_limit as string || null,
          capacity_scale: answers.capacity_scale as string || null,
          predictable_process: answers.predictable_process as string || null,
          biggest_challenge: answers.biggest_challenge as string[] || null,
          prior_solutions: answers.prior_solutions as string[] || null,
          prior_outcome: answers.prior_outcome as string || null,
          ideal_state: answers.ideal_state as string || null,
          time_focus: answers.time_focus as string[] || null,
        });

      if (error) {
        console.error('Error saving discovery:', error);
        toast({
          title: "Error saving responses",
          description: "Your responses could not be saved, but you can still continue.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error saving discovery:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleComplete = async () => {
    if (email.trim() && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    await saveResponsesToDatabase();
    setIsComplete(true);
    if (window.gtag) {
      window.gtag('event', 'discovery_complete', {
        event_category: 'engagement',
        event_label: 'Workflow Discovery'
      });
    }
  };

  const handleBookCall = () => {
    if (window.gtag) {
      window.gtag('event', 'calendly_click', {
        event_category: 'engagement',
        event_label: 'Discovery Completion'
      });
    }
    setShowCalendly(true);
  };

  const getQuestionsForSection = (sectionId: number) => {
    return questions.filter(q => q.section === sectionId);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to FinProIQ</span>
            </Link>
            <h1 className="text-lg font-semibold font-display text-accent">Discovery Complete</h1>
            <div className="w-24" />
          </div>
        </header>

        <main className="container px-4 py-12 max-w-3xl mx-auto">
          {!showCalendly ? (
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
                Thanks — this was genuinely helpful.
              </h2>
              
              <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
                You're not alone. Most advisors describe the same friction points once they see them written down.
              </p>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                <Card className="p-6 border-accent/20 hover:border-accent/40 transition-colors cursor-pointer group" onClick={handleBookCall}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Book a Quick Call</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Walk through your responses and learn what other advisors are doing differently.
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent-hover text-accent-foreground">
                    Schedule 15-min Call
                  </Button>
                </Card>

                <Card className="p-6 border-border hover:border-accent/40 transition-colors cursor-pointer group" onClick={() => setIsWaitlistOpen(true)}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Users className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Join the Waitlist</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get early access and updates on how we're solving these workflow challenges.
                  </p>
                  <Button variant="outline" className="w-full border-border hover:border-accent hover:text-accent">
                    Get Early Access
                  </Button>
                </Card>
              </div>

              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Home className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Link>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <Button 
                  variant="ghost" 
                  onClick={() => setShowCalendly(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to options
                </Button>
              </div>
              
              <Card className="overflow-hidden border-accent/20">
                <iframe
                  src={`${CALENDLY_URL}?embed_domain=localhost&embed_type=Inline`}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a call"
                  className="bg-background"
                />
              </Card>
            </div>
          )}
        </main>

        <WaitlistModal 
          isOpen={isWaitlistOpen} 
          onClose={() => setIsWaitlistOpen(false)} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" className="gap-2" onClick={handleExitClick}>
              <ArrowLeft className="w-4 h-4" />
              Exit
            </Button>
            <h1 className="text-lg font-semibold font-display text-accent">
              Workflow Discovery
            </h1>
            <div className="w-16" />
          </div>
        </div>
      </header>

      {/* Main Content - Single Page */}
      <main className="container px-4 py-8 max-w-3xl mx-auto">
        {/* Intro Card */}
        <Card className="p-8 md:p-10 border-accent/20 bg-card mb-10">
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center">
              <ClipboardList className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-3">
              Let's explore your workflow
            </h2>
          </div>
          
          <div className="space-y-4 text-base leading-relaxed max-w-xl mx-auto text-center">
            <p className="text-foreground font-medium">
              Thanks for taking a few minutes.
            </p>
            
            <p className="text-muted-foreground">
              This isn't a sales form — it's a quick workflow check to understand how advisors like you handle follow-ups, notes, and client communication. Answer as casually as you'd like.
            </p>
          </div>
        </Card>

        {/* All Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const Icon = section.icon;
            const sectionQuestions = getQuestionsForSection(section.id);
            
            return (
              <div key={section.id} className="animate-fade-in">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent/10">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-display text-foreground">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {sectionQuestions.length} question{sectionQuestions.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                {/* Section Questions */}
                <div className="space-y-5">
                  {sectionQuestions.map((q, idx) => (
                    <Card 
                      key={q.id} 
                      className={cn(
                        "p-5 transition-all duration-300",
                        answers[q.id] ? "border-accent/30 bg-accent/5" : "border-border"
                      )}
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
                              onClick={() => handleAnswer(q.id, option)}
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
              </div>
            );
          })}
        </div>

        {/* Email Collection */}
        <Card className="p-6 mt-10 border-accent/30 bg-accent/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <Label className="text-base font-medium text-foreground block">
                Your email address <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <p className="text-sm text-muted-foreground">
                Helps us follow up with insights. We respect your privacy—no spam, ever.
              </p>
            </div>
          </div>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            placeholder="your@email.com"
            className={cn(
              "bg-background border-border focus:border-accent transition-colors",
              emailError && "border-destructive focus:border-destructive"
            )}
          />
          {emailError && (
            <p className="text-sm text-destructive mt-2">{emailError}</p>
          )}
        </Card>

        {/* Complete Button */}
        <div className="flex justify-center mt-10 pb-10">
          <Button
            onClick={handleComplete}
            disabled={!canComplete() || isSaving}
            size="lg"
            className="gap-2 px-10 py-6 text-base bg-accent hover:bg-accent-hover text-accent-foreground"
          >
            {isSaving ? "Saving..." : "Complete Discovery"}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </main>

      {/* Exit Confirmation Dialog */}
      <Dialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <DialogContent className="sm:max-w-md">
          {!showExitCalendly ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-display">
                  We value your time
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed pt-2">
                  We understand you're busy. Before you go, would you like to schedule a quick discovery call? We'd love to learn more about your workflow challenges.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 mt-4">
                <Button 
                  onClick={handleExitBookCall}
                  className="w-full bg-accent hover:bg-accent-hover text-accent-foreground gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Yes, book a call
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleExitNoThanks}
                  className="w-full gap-2"
                >
                  <X className="w-4 h-4" />
                  No thanks, exit
                </Button>
              </div>
            </>
          ) : (
            <div className="py-2">
              <div className="flex items-center justify-between mb-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowExitCalendly(false)}
                  className="text-muted-foreground hover:text-foreground gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setShowExitDialog(false);
                    setShowExitCalendly(false);
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <Card className="overflow-hidden border-accent/20">
                <iframe
                  src={`${CALENDLY_URL}?embed_domain=localhost&embed_type=Inline`}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Schedule a call"
                  className="bg-background"
                />
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Discovery;
