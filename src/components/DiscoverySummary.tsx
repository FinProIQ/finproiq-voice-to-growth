import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Mail, Download } from "lucide-react";

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

interface DiscoverySummaryProps {
  questions: Question[];
  answers: Record<string, string | string[]>;
  email: string;
  onEmailSummary: () => void;
  isSendingEmail: boolean;
}

const DiscoverySummary = ({ 
  questions, 
  answers, 
  email, 
  onEmailSummary,
  isSendingEmail 
}: DiscoverySummaryProps) => {
  const summaryRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = () => {
    // Use browser print functionality for PDF export
    const printContent = summaryRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const styles = `
      <style>
        body { 
          font-family: 'Inter', system-ui, sans-serif; 
          padding: 40px; 
          max-width: 800px; 
          margin: 0 auto;
          color: #1a1a1a;
        }
        h1 { 
          font-size: 24px; 
          margin-bottom: 8px; 
          color: #1a365d;
        }
        h2 { 
          font-size: 18px; 
          margin-top: 32px; 
          margin-bottom: 16px; 
          color: #1a365d;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 8px;
        }
        .qa-item { 
          margin-bottom: 20px; 
          padding: 16px;
          background: #f8fafc;
          border-radius: 8px;
        }
        .question { 
          font-weight: 600; 
          margin-bottom: 8px; 
          color: #334155;
        }
        .answer { 
          color: #475569; 
          white-space: pre-wrap;
        }
        .header { 
          text-align: center; 
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #1a365d;
        }
        .date { 
          color: #64748b; 
          font-size: 14px; 
        }
      </style>
    `;

    const groupedQuestions = questions.reduce((acc, q) => {
      if (!acc[q.sectionTitle]) {
        acc[q.sectionTitle] = [];
      }
      acc[q.sectionTitle].push(q);
      return acc;
    }, {} as Record<string, Question[]>);

    let htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Workflow Discovery Summary - FinProIQ</title>
        ${styles}
      </head>
      <body>
        <div class="header">
          <h1>Workflow Discovery Summary</h1>
          <p class="date">Generated on ${new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
    `;

    Object.entries(groupedQuestions).forEach(([sectionTitle, sectionQuestions]) => {
      htmlContent += `<h2>${sectionTitle}</h2>`;
      sectionQuestions.forEach((q) => {
        const answer = answers[q.id];
        const formattedAnswer = Array.isArray(answer) ? answer.join(', ') : (answer || 'Not answered');
        htmlContent += `
          <div class="qa-item">
            <div class="question">${q.question}</div>
            <div class="answer">${formattedAnswer}</div>
          </div>
        `;
        
        // Include follow-up if exists
        if (q.followUp && q.followUp.condition.includes(answer as string)) {
          const followUpAnswer = answers[`${q.id}_followup`] as string || 'Not answered';
          htmlContent += `
            <div class="qa-item" style="margin-left: 20px; border-left: 3px solid #1a365d;">
              <div class="question">${q.followUp.question}</div>
              <div class="answer">${followUpAnswer}</div>
            </div>
          `;
        }
      });
    });

    htmlContent += `
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  // Group questions by section
  const groupedQuestions = questions.reduce((acc, q) => {
    if (!acc[q.sectionTitle]) {
      acc[q.sectionTitle] = [];
    }
    acc[q.sectionTitle].push(q);
    return acc;
  }, {} as Record<string, Question[]>);

  return (
    <div className="space-y-6">
      {/* Export Actions */}
      <Card className="p-6 border-accent/20 bg-accent/5">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-6 h-6 text-accent" />
          <h3 className="text-lg font-semibold text-foreground">Your Discovery Summary</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          Review your responses below. You can save a copy for your records.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button 
            onClick={handleExportPDF}
            variant="outline"
            className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <Download className="w-4 h-4" />
            Export as PDF
          </Button>
          {email && (
            <Button 
              onClick={onEmailSummary}
              disabled={isSendingEmail}
              className="gap-2 bg-accent hover:bg-accent-hover text-accent-foreground"
            >
              <Mail className="w-4 h-4" />
              {isSendingEmail ? "Sending..." : "Email Summary"}
            </Button>
          )}
        </div>
      </Card>

      {/* Q&A Summary */}
      <div ref={summaryRef} className="space-y-8">
        {Object.entries(groupedQuestions).map(([sectionTitle, sectionQuestions]) => (
          <Card key={sectionTitle} className="p-6 border-border">
            <h4 className="text-lg font-semibold text-accent mb-4 pb-2 border-b border-border">
              {sectionTitle}
            </h4>
            <div className="space-y-4">
              {sectionQuestions.map((q) => {
                const answer = answers[q.id];
                const formattedAnswer = Array.isArray(answer) 
                  ? answer.join(', ') 
                  : (answer || 'Not answered');
                
                return (
                  <div key={q.id} className="space-y-1">
                    <p className="font-medium text-foreground">{q.question}</p>
                    <p className="text-muted-foreground whitespace-pre-wrap">{formattedAnswer}</p>
                    
                    {/* Follow-up answer */}
                    {q.followUp && q.followUp.condition.includes(answer as string) && (
                      <div className="ml-4 mt-2 pl-4 border-l-2 border-accent/30">
                        <p className="font-medium text-foreground text-sm">{q.followUp.question}</p>
                        <p className="text-muted-foreground text-sm">
                          {(answers[`${q.id}_followup`] as string) || 'Not answered'}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DiscoverySummary;
