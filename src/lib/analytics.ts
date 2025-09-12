export const track = (event: string, params: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", event, params);
  }
};
