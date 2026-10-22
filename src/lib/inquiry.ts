import { z } from "zod";

const common = {
  business: z.string().trim().min(2, "Please enter your business name").max(120),
  name: z.string().trim().min(2, "Please enter your contact name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z.string().trim().max(30).regex(/^[0-9+()\-.\s]*$/, "Please enter a valid phone number"),
};
export const inquirySchema = z.discriminatedUnion("kind", [
  z.object({ ...common, kind: z.literal("review"), website: z.union([z.literal(""), z.string().trim().url("Please use a full website URL, such as https://example.ca").max(200).refine(v => /^https?:\/\//.test(v), "Please use an http or https website URL")]), industry: z.string().trim().min(2, "Please choose your industry").max(100), message: z.string().trim().min(5, "Please describe your main marketing challenge").max(1500) }),
  z.object({ ...common, kind: z.literal("consultation"), services: z.string().trim().min(2, "Please choose an interested service").max(500), message: z.string().trim().max(1500) }),
]);

export function inquiryRow(data: z.infer<typeof inquirySchema>) {
  return { kind: data.kind, business: data.business, contact_name: data.name, email: data.email, phone: data.phone,
    website: data.kind === "review" ? data.website : "", industry: data.kind === "review" ? data.industry : "",
    services: data.kind === "consultation" ? data.services : "", message: data.message };
}