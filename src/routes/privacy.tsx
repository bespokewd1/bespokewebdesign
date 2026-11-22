import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead({ path: "/privacy", crumb: "Privacy Policy", title: "Privacy Policy | Bespoke Web Design", description: "How Bespoke Web Design collects, uses, and protects information submitted through this website." }),
  component: () => (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section">
        <div className="container-site max-w-3xl space-y-5 text-muted-foreground">
          <p className="text-sm">Last updated: November 22, 2026</p>
          <p>{SITE.name} is operated by {SITE.operator} in {SITE.location}. This policy explains how we handle personal information through our website and marketing inquiries. Alberta’s Personal Information Protection Act (PIPA) and other applicable privacy laws govern our handling of personal information.</p>

          <h2 className="text-xl font-bold text-navy">1. Information you share</h2>
          <p>When you request a review, contact us or become a client, we receive the information you provide: your name, business name, email, optional phone number, website and social page links, industry, marketing challenges and messages. For client work, we may also receive approved content and access to the business accounts needed to deliver your agreed services.</p>
          <p>Please do not send passwords, payment card details, health information or sensitive information about your customers through our inquiry form or AI assistant.</p>

          <h2 className="text-xl font-bold text-navy">2. Why we use it</h2>
          <p>We use your information to answer inquiries, prepare reviews and proposals, arrange meetings, deliver agreed services and manage our business records. Providing details for an inquiry allows us to respond to that request; it is not permission for unrelated promotional emails. Any promotional messages require an appropriate basis under applicable Canadian anti-spam law and a way to unsubscribe. We do not sell your personal information.</p>

          <h2 className="text-xl font-bold text-navy">3. Website analytics</h2>
          <p>On our published website, Lovable’s analytics records page visits, where visitors came from, their country, browser, operating system and device type, time on page, page load speed, errors, and clicks on buttons and links. These are recorded for every visitor. The analytics uses no cookies, stores nothing on your device, does not keep IP addresses and does not identify visitors. Detailed data is kept for 90 days and daily summaries for one year.</p>
          <p>Lovable collects this data for us. <a href="https://lovable.dev/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Lovable’s privacy policy</a> explains how it handles it. This cookie-free analytics is separate from the personal information you voluntarily send in a form or conversation.</p>

          <h2 className="text-xl font-bold text-navy">4. Services and external links</h2>
          <ul className="list-disc space-y-3 pl-5">
            <li><strong className="text-navy">Forms and hosting:</strong> inquiries are stored in Lovable Cloud, which processes the submitted details for us. Public website visitors cannot read, edit or delete submitted inquiries.</li>
            <li><strong className="text-navy">Casey AI assistant:</strong> ElevenLabs provides the chat and voice service. If you use it, your messages and, during a voice call, microphone audio are sent to ElevenLabs and may be stored as conversations, recordings or transcripts under its service settings. The widget loads when you visit the site and can send technical connection information to its providers. Microphone access requires your browser’s permission. See <a href="https://elevenlabs.io/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">ElevenLabs’ privacy policy</a>.</li>
            <li><strong className="text-navy">Booking and email:</strong> booking links open Calendly, which receives the details you enter there and sends booking information to us. Email sent to our Gmail address is handled by Google. These providers may retain booking or email records under their policies.</li>
            <li><strong className="text-navy">Fonts and media:</strong> Google Fonts, our hosting and media delivery services, and the assistant’s script provider receive technical request information, such as your IP address and browser details, when supplying website resources. These providers may retain technical logs under their policies.</li>
            <li><strong className="text-navy">Other websites:</strong> Facebook, Google reviews and client website links open external services. Their own privacy and cookie policies apply when you visit or interact with them.</li>
          </ul>
          <p>We do not currently install Google Ads or Meta advertising pixels on this website. Third-party services may use their own cookies or browser storage; Lovable’s cookie-free analytics does not mean every service is cookie-free. The footer’s Edmonton weather is requested through our server for a fixed location, not your device’s location.</p>

          <h2 className="text-xl font-bold text-navy">5. Sharing, storage and security</h2>
          <p>We limit sharing to service providers needed for the purposes above, people authorized to support our work, and disclosures required or permitted by law. Providers may process or store information outside Canada, where local laws may allow access by authorities. Contact us for information about our service providers and cross-border handling.</p>
          <p>We use reasonable safeguards and restrict access to submitted inquiries. No online service can guarantee complete security. We retain personal information only as reasonably needed for the purpose collected and applicable legal, accounting or dispute requirements, then securely delete or anonymize it. Provider retention settings may differ.</p>

          <h2 className="text-xl font-bold text-navy">6. Your choices and privacy contact</h2>
          <p>You can ask to access or correct your personal information, withdraw consent where applicable, or request deletion. Legal obligations and reasonable record-keeping requirements may limit deletion; we will explain any applicable limits. We may need to verify your identity, and withdrawing consent may prevent us from providing a requested service.</p>
          <p>For privacy questions, requests or complaints, contact Charles, our privacy contact, at <a href={`mailto:${SITE.email}`} className="break-words underline underline-offset-4">{SITE.email}</a>. If a concern remains unresolved, you may contact the <a href="https://oipc.ab.ca/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Office of the Information and Privacy Commissioner of Alberta</a>.</p>
          <p>We will post updates here and change the date above when this policy changes.</p>
        </div>
      </section>
    </>
  ),
});
