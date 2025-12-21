-- Add email column to survey_responses table
ALTER TABLE public.survey_responses 
ADD COLUMN email text;