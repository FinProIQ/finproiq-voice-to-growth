import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Validation schema
const emailSummarySchema = z.object({
  email: z.string().email().max(255),
  questions: z.array(z.object({
    id: z.string(),
    sectionTitle: z.string(),
    question: z.string(),
  })),
  answers: z.record(z.union([z.string(), z.array(z.string())])),
});

function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    
    const validationResult = emailSummarySchema.safeParse(body);
    if (!validationResult.success) {
      return new Response(
        JSON.stringify({ error: "Invalid input" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { email, questions, answers } = validationResult.data;

    // Group questions by section
    const groupedQuestions = questions.reduce((acc, q) => {
      if (!acc[q.sectionTitle]) {
        acc[q.sectionTitle] = [];
      }
      acc[q.sectionTitle].push(q);
      return acc;
    }, {} as Record<string, typeof questions>);

    // Build email HTML
    let summaryHtml = '';
    Object.entries(groupedQuestions).forEach(([sectionTitle, sectionQuestions]) => {
      summaryHtml += `
        <h2 style="color: #1a365d; font-size: 18px; margin-top: 24px; margin-bottom: 12px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
          ${escapeHtml(sectionTitle)}
        </h2>
      `;
      sectionQuestions.forEach((q) => {
        const answer = answers[q.id];
        const formattedAnswer = Array.isArray(answer) 
          ? answer.map(a => escapeHtml(a)).join(', ') 
          : escapeHtml(answer || 'Not answered');
        
        summaryHtml += `
          <div style="margin-bottom: 16px; padding: 12px; background: #f8fafc; border-radius: 8px;">
            <p style="font-weight: 600; margin-bottom: 4px; color: #334155;">${escapeHtml(q.question)}</p>
            <p style="color: #475569; margin: 0;">${formattedAnswer}</p>
          </div>
        `;
      });
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Your Workflow Discovery Summary</title>
      </head>
      <body style="font-family: 'Inter', system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a1a;">
        <div style="text-align: center; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 2px solid #1a365d;">
          <h1 style="color: #1a365d; font-size: 24px; margin-bottom: 8px;">Workflow Discovery Summary</h1>
          <p style="color: #64748b; font-size: 14px;">Your responses from FinProIQ</p>
        </div>
        
        ${summaryHtml}
        
        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="color: #64748b; font-size: 12px;">
            This email was sent by FinProIQ. If you have questions, reply to this email.
          </p>
        </div>
      </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "FinProIQ <onboarding@resend.dev>",
      to: [email],
      subject: "Your Workflow Discovery Summary - FinProIQ",
      html: emailHtml,
    });

    console.log("Discovery summary email sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
