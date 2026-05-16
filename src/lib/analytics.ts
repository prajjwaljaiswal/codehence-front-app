import posthog from "posthog-js";

let initialized = false;

export function initAnalytics(): void {
  if (initialized) return;
  if (typeof window === "undefined") return;

  const key = import.meta.env.VITE_POSTHOG_KEY;
  const host = import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com";

  if (!key) {
    if (import.meta.env.DEV) {
      console.info("[analytics] VITE_POSTHOG_KEY not set — analytics disabled.");
    }
    return;
  }

  posthog.init(key, {
    api_host: host,
    capture_pageview: false,
    capture_pageleave: true,
    persistence: "localStorage+cookie",
    autocapture: true,
  });

  initialized = true;
}

export function trackPageview(path: string): void {
  if (!initialized) return;
  posthog.capture("$pageview", { $current_url: path });
}

export function trackEvent(name: string, props?: Record<string, unknown>): void {
  if (!initialized) return;
  posthog.capture(name, props);
}

export function identify(userId: string, traits?: Record<string, unknown>): void {
  if (!initialized) return;
  posthog.identify(userId, traits);
}
