import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Mail, Download } from "lucide-react";
import jsPDF from "jspdf";

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
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const maxWidth = pageWidth - margin * 2;
    let yPos = 20;

    // Helper to add new page if needed
    const checkPageBreak = (height: number) => {
      if (yPos + height > doc.internal.pageSize.getHeight() - 20) {
        doc.addPage();
        yPos = 20;
      }
    };

    // Title
    doc.setFontSize(20);
    doc.setTextColor(26, 54, 93); // accent color
    doc.text("Workflow Discovery Summary", pageWidth / 2, yPos, { align: "center" });
    yPos += 10;

    // Date
    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    const dateStr = new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    doc.text(dateStr, pageWidth / 2, yPos, { align: "center" });
    yPos += 15;

    // Divider line
    doc.setDrawColor(26, 54, 93);
    doc.setLineWidth(0.5);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 15;

    // Group questions by section
    const groupedQuestions = questions.reduce((acc, q) => {
      if (!acc[q.sectionTitle]) {
        acc[q.sectionTitle] = [];
      }
      acc[q.sectionTitle].push(q);
      return acc;
    }, {} as Record<string, Question[]>);

    // Render each section
    Object.entries(groupedQuestions).forEach(([sectionTitle, sectionQuestions]) => {
      checkPageBreak(20);
      
      // Section title
      doc.setFontSize(14);
      doc.setTextColor(26, 54, 93);
      doc.setFont("helvetica", "bold");
      doc.text(sectionTitle, margin, yPos);
      yPos += 3;
      
      // Section underline
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 10;

      sectionQuestions.forEach((q) => {
        const answer = answers[q.id];
        const formattedAnswer = Array.isArray(answer) ? answer.join(', ') : (answer || 'Not answered');

        // Question
        doc.setFontSize(11);
        doc.setTextColor(51, 65, 85);
        doc.setFont("helvetica", "bold");
        const questionLines = doc.splitTextToSize(q.question, maxWidth);
        checkPageBreak(questionLines.length * 5 + 15);
        doc.text(questionLines, margin, yPos);
        yPos += questionLines.length * 5 + 2;

        // Answer
        doc.setFontSize(10);
        doc.setTextColor(71, 85, 105);
        doc.setFont("helvetica", "normal");
        const answerLines = doc.splitTextToSize(formattedAnswer, maxWidth);
        checkPageBreak(answerLines.length * 4 + 10);
        doc.text(answerLines, margin, yPos);
        yPos += answerLines.length * 4 + 8;

        // Follow-up if exists
        if (q.followUp && q.followUp.condition.includes(answer as string)) {
          const followUpAnswer = answers[`${q.id}_followup`] as string || 'Not answered';
          
          doc.setFontSize(10);
          doc.setTextColor(51, 65, 85);
          doc.setFont("helvetica", "bolditalic");
          const followUpQLines = doc.splitTextToSize(`↳ ${q.followUp.question}`, maxWidth - 10);
          checkPageBreak(followUpQLines.length * 4 + 10);
          doc.text(followUpQLines, margin + 10, yPos);
          yPos += followUpQLines.length * 4 + 2;

          doc.setFont("helvetica", "italic");
          doc.setTextColor(71, 85, 105);
          const followUpALines = doc.splitTextToSize(followUpAnswer, maxWidth - 10);
          doc.text(followUpALines, margin + 10, yPos);
          yPos += followUpALines.length * 4 + 8;
        }
      });

      yPos += 5; // Extra spacing between sections
    });

    // Download the PDF
    doc.save("FinProIQ-Discovery-Summary.pdf");
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
            type="button"
            onClick={handleExportPDF}
            variant="outline"
            className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <Download className="w-4 h-4" />
            Save as PDF
          </Button>
          {email && (
            <Button 
              type="button"
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
