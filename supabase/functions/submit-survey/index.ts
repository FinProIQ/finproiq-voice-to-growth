import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Validation schema with strict limits
const surveySchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .max(255, "Email too long")
    .optional()
    .nullable()
    .or(z.literal("")),
  post_meeting: z.string().max(2000, "Response too long").optional().nullable(),
  notes_location: z
    .array(z.string().max(100))
    .max(10, "Too many selections")
    .optional()
    .nullable(),
  followup_writer: z.string().max(100).optional().nullable(),
  crm_updates: z.string().max(100).optional().nullable(),
  delayed_tasks: z.string().max(2000).optional().nullable(),
  time_spent: z.string().max(100).optional().nullable(),
  slippage_frequency: z.string().max(100).optional().nullable(),
  slippage_followup: z.string().max(2000).optional().nullable(),
  compliance_approach: z.string().max(100).optional().nullable(),
  compliance_redo: z.string().max(100).optional().nullable(),
  biggest_stress: z.string().max(2000).optional().nullable(),
  stress_reason: z.string().max(2000).optional().nullable(),
  real_cost: z.string().max(2000).optional().nullable(),
  future_pain: z.string().max(2000).optional().nullable(),
  capacity_limit: z.string().max(100).optional().nullable(),
  capacity_scale: z.string().max(100).optional().nullable(),
  predictable_process: z.string().max(100).optional().nullable(),
  biggest_challenge: z
    .array(z.string().max(100))
    .max(10, "Too many selections")
    .optional()
    .nullable(),
  prior_solutions: z
    .array(z.string().max(100))
    .max(10, "Too many selections")
    .optional()
    .nullable(),
  prior_outcome: z.string().max(2000).optional().nullable(),
  ideal_state: z.string().max(2000).optional().nullable(),
  time_focus: z
    .array(z.string().max(100))
    .max(10, "Too many selections")
    .optional()
    .nullable(),
});

Deno.serve(async (req) => {
  // Handle CORS preflight
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

    // Validate input with zod
    const validationResult = surveySchema.safeParse(body);
    if (!validationResult.success) {
      console.error("Validation failed:", validationResult.error.flatten());
      return new Response(
        JSON.stringify({
          error: "Invalid input",
          details: validationResult.error.flatten().fieldErrors,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const validatedData = validationResult.data;

    // Clean empty email string to null
    const cleanedData = {
      ...validatedData,
      email: validatedData.email?.trim() || null,
    };

    // Create Supabase client with service role for insert
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error } = await supabase
      .from("survey_responses")
      .insert(cleanedData);

    if (error) {
      console.error("Database error:", error.message);
      // Return generic error to prevent information leakage
      return new Response(
        JSON.stringify({ error: "Failed to save response" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Log success without sensitive data
    console.log("Survey response saved successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
