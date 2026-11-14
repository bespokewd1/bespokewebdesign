ALTER POLICY "Visitors can submit inquiries only"
ON public.marketing_inquiries
TO anon, authenticated
WITH CHECK (
  kind IN ('review', 'consultation')
  AND char_length(btrim(business)) BETWEEN 2 AND 120
  AND char_length(business) <= 120
  AND char_length(btrim(contact_name)) BETWEEN 2 AND 100
  AND char_length(contact_name) <= 100
  AND char_length(email) BETWEEN 3 AND 200
  AND email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
  AND char_length(phone) <= 30
  AND phone ~ '^[0-9+().[:space:]-]*$'
  AND char_length(website) <= 200
  AND (website = '' OR website ~ '^https?://[^[:space:]/?#]+[^[:space:]]*$')
  AND char_length(industry) <= 100
  AND char_length(services) <= 500
  AND char_length(message) <= 1500
  AND (
    (kind = 'review'
      AND char_length(btrim(industry)) BETWEEN 2 AND 100
      AND char_length(btrim(message)) BETWEEN 5 AND 1500
      AND services = '')
    OR
    (kind = 'consultation'
      AND char_length(btrim(services)) BETWEEN 2 AND 500
      AND website = ''
      AND industry = '')
  )
);
COMMENT ON POLICY "Visitors can submit inquiries only" ON public.marketing_inquiries
IS 'Public insert-only lead capture: validate field lengths, contact formats and review/consultation payload shape. No public read, update or delete policy.';