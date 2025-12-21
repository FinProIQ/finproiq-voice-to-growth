-- Ensure waitlist table has comprehensive RLS protection
-- Drop existing policies and recreate with proper restrictive settings

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can join waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Users cannot read waitlist" ON public.waitlist;

-- Create INSERT policy - allow anyone to join
CREATE POLICY "Allow public inserts" 
ON public.waitlist 
FOR INSERT 
TO public
WITH CHECK (true);

-- Create SELECT policy - block all public reads
CREATE POLICY "Block all reads" 
ON public.waitlist 
FOR SELECT 
TO public
USING (false);

-- Create UPDATE policy - block all updates  
CREATE POLICY "Block all updates" 
ON public.waitlist 
FOR UPDATE 
TO public
USING (false)
WITH CHECK (false);

-- Create DELETE policy - block all deletes
CREATE POLICY "Block all deletes" 
ON public.waitlist 
FOR DELETE 
TO public
USING (false);