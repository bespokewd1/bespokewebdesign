export const ASSISTANT_AGENT_ID = "agent_7901m7vtp3enfsn8b288jnamtafg";
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