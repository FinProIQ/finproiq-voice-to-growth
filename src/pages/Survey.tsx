import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Send, Loader2, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import WaitlistModal from "@/components/WaitlistModal";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Survey = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setSurveyComplete] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Start the survey on mount
  useEffect(() => {
    startSurvey();
  }, []);

  const startSurvey = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('survey-chat', {
        body: { messages: [] }
      });

      if (error) throw error;

      setMessages([{ role: "assistant", content: data.message }]);
    } catch (error) {
      console.error('Error starting survey:', error);
      setMessages([{ 
        role: "assistant", 
        content: "Thanks for taking a few minutes.\nThis is not a sales form — it's a short workflow check to understand how advisors handle follow-ups, notes, and client communication today.\nAnswer as casually as you'd like.\n\nLet's start: Walk me through what happens right after a client meeting." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('survey-chat', {
        body: { messages: updatedMessages }
      });

      if (error) throw error;

      setMessages([...updatedMessages, { role: "assistant", content: data.message }]);
      
      if (data.isComplete) {
        setSurveyComplete(true);
        setSummary(data.summary);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages([...updatedMessages, { 
        role: "assistant", 
        content: "I apologize, but I encountered an issue. Could you please try again?" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to FinProIQ</span>
          </Link>
          <h1 className="text-lg font-semibold text-foreground">Workflow Discovery</h1>
          <div className="w-24" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-8 max-w-3xl mx-auto">
        {!isComplete ? (
          <>
            {/* Chat Messages */}
            <div className="space-y-4 mb-6 min-h-[50vh]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <Card
                    className={`max-w-[85%] p-4 ${
                      msg.role === "user"
                        ? "bg-accent text-accent-foreground"
                        : "bg-card text-card-foreground border-border"
                    }`}
                  >
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</p>
                  </Card>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <Card className="bg-card text-card-foreground border-border p-4">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-accent" />
                      <span className="text-sm text-muted-foreground">Thinking...</span>
                    </div>
                  </Card>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="sticky bottom-4 bg-background/95 backdrop-blur-sm rounded-xl border border-border p-4 shadow-lg">
              <div className="flex gap-3">
                <Textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your response..."
                  className="min-h-[50px] max-h-[150px] resize-none bg-muted/50 border-border focus:border-accent"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="bg-accent hover:bg-accent-hover text-accent-foreground px-4"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Press Enter to send, Shift+Enter for new line
              </p>
            </div>
          </>
        ) : (
          /* Completion Screen */
          <div className="text-center py-12 animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Thanks — this was genuinely helpful.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              You're not alone. Most advisors describe the same friction points once they see them written down.
            </p>

            {summary && (
              <Card className="bg-muted/50 border-border p-6 mb-8 max-w-lg mx-auto text-left">
                <h3 className="font-semibold text-foreground mb-2">What we heard:</h3>
                <p className="text-muted-foreground text-sm">{summary}</p>
              </Card>
            )}

            <div className="space-y-4 max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-4">
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

              <div className="flex items-center gap-4 my-4">
                <div className="flex-1 border-t border-border" />
                <span className="text-xs text-muted-foreground">Or</span>
                <div className="flex-1 border-t border-border" />
              </div>

              <p className="text-sm text-muted-foreground mb-2">
                If you'd rather stay hands-off:
              </p>
              
              <Button
                onClick={() => setIsWaitlistOpen(true)}
                variant="outline"
                size="lg"
                className="w-full border-accent text-accent hover:bg-accent/10"
              >
                <Users className="w-5 h-5 mr-2" />
                Join the Waitlist
              </Button>

              <Link to="/">
                <Button variant="ghost" className="w-full mt-4 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
};

export default Survey;
