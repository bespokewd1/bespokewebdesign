import { SITE } from "@/content/site";

type AnalyticsEvent = "generate_lead" | "email_click" | "booking_link_click" | "phone_click";
type GoogleTag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GoogleTag;
  }
}

const configuredId: string | undefined =
  import.meta.env["VITE_GA_MEASUREMENT_ID"] ?? "G-PYZQ9Y8P1T";
const measurementId = /^G-[A-Z0-9]+$/.test(configuredId ?? "") ? configuredId : undefined;
const productionOrigin = new URL(SITE.url).origin;
let previousPage: string | undefined;

export const hasAnalyticsConfiguration = Boolean(measurementId);

function getPageLocation() {
  return window.location.origin + window.location.pathname;
}

function getReferrer() {
  try {
    return new URL(document.referrer).origin;
  } catch {
    return "";
  }
}

export function trackPageView() {
  if (!measurementId || window.location.origin !== productionOrigin) return;

  const pageLocation = getPageLocation();
  if (pageLocation === previousPage) return;
  const pageReferrer = previousPage ?? getReferrer();
  const pageFields = {
    page_location: pageLocation,
    page_referrer: pageReferrer,
    page_title: document.title,
  };

  if (!window.gtag) {
    const dataLayer = (window.dataLayer ??= []);
    window.gtag = function () { dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      ...pageFields,
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  window.gtag("set", pageFields);
  window.gtag("event", "page_view", pageFields);
  previousPage = pageLocation;
}

export function trackAnalyticsEvent(event: AnalyticsEvent) {
  if (!previousPage) return;
  window.gtag?.("event", event, { page_location: getPageLocation() });
}

export function trackContactClick(event: MouseEvent) {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest("a");
  if (!link) return;
  if (link.protocol === "mailto:") trackAnalyticsEvent("email_click");
  else if (link.protocol === "tel:") trackAnalyticsEvent("phone_click");
  else if (link.href === SITE.calendly) trackAnalyticsEvent("booking_link_click");
}
