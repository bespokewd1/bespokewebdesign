CREATE TABLE public.marketing_inquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 kind text NOT NULL CHECK (kind IN ('review', 'consultation')),
 business text NOT NULL CHECK (char_length(btrim(business)) BETWEEN 2 AND 120),
 contact_name text NOT NULL CHECK (char_length(btrim(contact_name)) BETWEEN 2 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 200 AND email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
 phone text NOT NULL DEFAULT '' CHECK (char_length(phone) <= 30 AND phone ~ '^[0-9+().[:space:]-]*$'),
 website text NOT NULL DEFAULT '' CHECK (char_length(website) <= 200 AND (website = '' OR website ~ '^https?://[^[:space:]]+$')),
 industry text NOT NULL DEFAULT '' CHECK (char_length(industry) <= 100),
 services text NOT NULL DEFAULT '' CHECK (char_length(services) <= 500),
 message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 1500),
 CHECK (kind <> 'review' OR (char_length(btrim(industry)) >= 2 AND char_length(btrim(message)) >= 5)),
 CHECK (kind <> 'consultation' OR char_length(btrim(services)) >= 2)
);
GRANT INSERT ON public.marketing_inquiries TO anon, authenticated;
GRANT ALL ON public.marketing_inquiries TO service_role;
ALTER TABLE public.marketing_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can submit inquiries only" ON public.marketing_inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);
COMMENT ON TABLE public.marketing_inquiries IS 'Private website inquiries. Visitors can only submit; staff review through Lovable Cloud. No public reads, updates or deletes.';