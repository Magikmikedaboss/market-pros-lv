type AnalyticsEventPayload = Record<string, string | number | boolean | null | undefined>;

interface WindowWithAnalytics {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
  fbq?: (...args: unknown[]) => void;
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function track(eventName: string, props: AnalyticsEventPayload = {}): void {
  if (!isBrowser()) return;

  const w = window as unknown as WindowWithAnalytics;

  // Google Analytics (gtag)
  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, props);
  }

  // Facebook Pixel
  if (typeof w.fbq === "function") {
    w.fbq("trackCustom", eventName, props);
  }

 
  console.debug("[analytics]", eventName, props);
}
