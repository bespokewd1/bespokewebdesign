import { SITE } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export function WhatsAppContact() {
  const href = whatsappUrl(SITE.whatsappNumber);
  if (!href) return null;
  return <Button asChild size="icon" className="whatsapp-contact fixed z-30 size-12 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:bg-whatsapp/90">
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp." title="Chat with us on WhatsApp.">
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-7" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.7a12 12 0 0 0 5.7 1.5c6.6 0 12-5.3 12-11.9 0-3.2-1.3-6.2-3.5-8.4ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.3-.4A9.8 9.8 0 0 1 2 11.9C2 6.4 6.5 2 12 2s10 4.4 10 9.9-4.5 9.9-10 9.9Zm5.5-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.7 1.2 2.9c.2.2 2 3.1 5 4.3.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z" /></svg>
    </a>
  </Button>;
}