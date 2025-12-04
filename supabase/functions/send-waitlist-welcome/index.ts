import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  name: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: WaitlistRequest = await req.json();
    
    console.log(`Sending welcome email to ${email} for ${name}`);

    // Send welcome email to the subscriber
    const welcomeEmail = await resend.emails.send({
      from: "FinProIQ <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the FinProIQ Waitlist! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb;">Welcome to FinProIQ, ${name}!</h1>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Thank you for joining our waitlist! You're now part of an exclusive group of financial professionals 
            who will be the first to experience our AI-powered growth ecosystem.
          </p>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            <strong>What's next?</strong>
          </p>
          
          <ul style="font-size: 16px; color: #333; line-height: 1.8;">
            <li>We'll keep you updated on our launch progress</li>
            <li>You'll get early access before the public launch</li>
            <li>Exclusive insights and tips for financial professionals</li>
          </ul>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Stay connected and get ready to transform your practice with AI that understands 
            compliance, builds trust, and drives growth.
          </p>
          
          <p style="font-size: 16px; color: #2563eb; font-weight: bold;">
            The future of financial advising starts here!
          </p>
          
          <p style="font-size: 14px; color: #666; margin-top: 30px;">
            Best regards,<br>
            The FinProIQ Team
          </p>
        </div>
      `,
    });

    console.log("Welcome email sent:", welcomeEmail);

    // Send notification to owner
    const notificationEmail = await resend.emails.send({
      from: "FinProIQ <onboarding@resend.dev>",
      to: ["raman.sivasankar@gmail.com"],
      subject: `New Waitlist Signup: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Waitlist Signup!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    return new Response(
      JSON.stringify({ success: true, welcomeEmail, notificationEmail }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-waitlist-welcome:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
