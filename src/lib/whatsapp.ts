export const WHATSAPP_MESSAGE = "Hi Bespoke Web Design! I'm interested in improving my business's online presence. Can you tell me more about your services?";

export function whatsappUrl(verifiedNumber: string) {
  if (!/^[1-9]\d{7,14}$/.test(verifiedNumber)) return null;
  return `https://wa.me/${verifiedNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}