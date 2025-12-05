import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting (per IP, resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // max requests
const RATE_WINDOW = 60000; // per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }
  
  if (record.count >= RATE_LIMIT) {
    return true;
  }
  
  record.count++;
  return false;
}

// Server-side validation
function validateInput(name: unknown, email: unknown): { valid: boolean; name?: string; email?: string } {
  if (typeof name !== 'string' || typeof email !== 'string') {
    return { valid: false };
  }
  
  const trimmedName = name.trim();
  const trimmedEmail = email.trim().toLowerCase();
  
  if (trimmedName.length === 0 || trimmedName.length > 100) {
    return { valid: false };
  }
  
  if (trimmedEmail.length === 0 || trimmedEmail.length > 255) {
    return { valid: false };
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return { valid: false };
  }
  
  return { valid: true, name: trimmedName, email: trimmedEmail };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Get client IP for rate limiting
  const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                   req.headers.get("cf-connecting-ip") || 
                   "unknown";

  if (isRateLimited(clientIP)) {
    console.log(`Rate limited IP: ${clientIP}`);
    // Return generic success to avoid information leakage
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    const body = await req.json();
    
    // Server-side validation
    const validation = validateInput(body.name, body.email);
    if (!validation.valid) {
      // Return generic success to avoid information leakage about validation
      console.log("Invalid input received");
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email } = validation;
    console.log(`Processing waitlist submission for ${email}`);

    // Create Supabase client with service role for server-side insert
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert into database
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert({ name, email });

    if (dbError) {
      // Log the actual error server-side but return generic response
      console.error("Database error:", dbError);
      // Return success regardless to prevent email enumeration
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send welcome email to the subscriber
    const welcomeEmail = await resend.emails.send({
      from: "FinProIQ <no-reply@finproiq.com>",
      to: [email!],
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
      from: "FinProIQ <no-reply@finproiq.com>",
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
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-waitlist-welcome:", error);
    // Return generic success to prevent information leakage
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
