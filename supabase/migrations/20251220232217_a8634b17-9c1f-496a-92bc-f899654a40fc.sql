-- Create survey_responses table to store advisor workflow survey responses
CREATE TABLE public.survey_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Section 1: Current Workflow
  post_meeting TEXT,
  notes_location TEXT[],
  followup_writer TEXT,
  crm_updates TEXT,
  
  -- Section 2: Time & Slippage
  delayed_tasks TEXT,
  time_spent TEXT,
  slippage_frequency TEXT,
  slippage_followup TEXT,
  
  -- Section 3: Compliance
  compliance_approach TEXT,
  compliance_redo TEXT,
  
  -- Section 4: Core Pain
  biggest_stress TEXT,
  stress_reason TEXT,
  real_cost TEXT,
  
  -- Section 5: Future Cost
  future_pain TEXT,
  capacity_limit TEXT,
  capacity_scale TEXT,
  
  -- Section 6: Self-Diagnosis
  predictable_process TEXT,
  biggest_challenge TEXT[],
  
  -- Section 7: Prior Attempts
  prior_solutions TEXT[],
  prior_outcome TEXT,
  
  -- Section 8: Vision
  ideal_state TEXT,
  time_focus TEXT[]
);

-- Enable RLS
ALTER TABLE public.survey_responses ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a survey response
CREATE POLICY "Anyone can submit survey responses"
ON public.survey_responses
FOR INSERT
WITH CHECK (true);

-- Block public from reading responses (admin only via service role)
CREATE POLICY "Block public read access"
ON public.survey_responses
FOR SELECT
USING (false);

-- Block public from updating responses
CREATE POLICY "Block public updates"
ON public.survey_responses
FOR UPDATE
USING (false);

-- Block public from deleting responses
CREATE POLICY "Block public deletes"
ON public.survey_responses
FOR DELETE
USING (false);