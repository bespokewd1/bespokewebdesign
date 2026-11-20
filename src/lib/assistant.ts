export const ASSISTANT_AGENT_ID = "agent_7901m7vtp3enfsn8b288jnamtafg";
export const ASSISTANT_WELCOME = [
  "Welcome to Bespoke! 👋",
  "Looking to grow your business online? I can help you explore our website design and digital marketing services.",
  "Ask me anything about how we can help your business get found online, attract more customers, and build a stronger online presence.",
  "How can I help you today?",
];
export const ASSISTANT_QUESTIONS = [
  "What digital marketing services do you offer?",
  "How much does a website cost?",
  "How can you help my business rank on Google?",
  "Do you manage social media?",
  "How do I get started?",
];
const REQUESTED_LANGUAGES = [
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
  { code: "tl", name: "Tagalog" },
  { code: "zh", name: "Mandarin Chinese" },
];

/** Only provider-advertised overrides may change the real conversation. */
export function assistantLanguages(supported: string[], defaultLanguage = "en") {
  const all = [...REQUESTED_LANGUAGES];
  for (const code of supported) {
    if (all.some(language => language.code === code)) continue;
    let name = code;
    try { name = new Intl.DisplayNames(["en"], { type: "language" }).of(code) ?? code; } catch { /* Show the provider code if unknown. */ }
    all.push({ code, name });
  }
  return all.map(language => ({ ...language, supported: language.code === defaultLanguage || supported.includes(language.code) }));
}