'use client';

import { useEffect, useState } from 'react';

const KEY = 'klin-consent';
type Choice = 'accepted' | 'declined';

function read(): Choice | null {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === 'accepted' || v === 'declined' ? v : null;
  } catch {
    return null;
  }
}
function write(v: Choice) {
  try {
    window.localStorage.setItem(KEY, v);
  } catch {
    /* storage unavailable: choice applies for this visit only */
  }
}

async function startAnalytics() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return; // analytics not configured: nothing loads
  const { default: posthog } = await import('posthog-js');
  if (posthog.__loaded) {
    posthog.opt_in_capturing();
    return;
  }
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: 'history_change',
    disable_session_recording: true,
    autocapture: false,
    persistence: 'localStorage',
  });
}

/**
 * Consent banner. Accept and Decline carry equal weight. Nothing loads before Accept,
 * and nothing loads at all unless NEXT_PUBLIC_POSTHOG_KEY is set.
 */
export function ConsentBanner() {
  const [choice, setChoice] = useState<Choice | 'unknown'>('unknown');

  useEffect(() => {
    const c = read();
    setChoice(c ?? 'unknown');
    if (c === 'accepted') void startAnalytics();
  }, []);

  if (choice !== 'unknown' || process.env.NEXT_PUBLIC_POSTHOG_KEY === undefined) {
    // Without an analytics key there is nothing to consent to, so no banner is shown.
    return null;
  }

  const decide = (c: Choice) => {
    write(c);
    setChoice(c);
    if (c === 'accepted') void startAnalytics();
  };

  return (
    <div
      role="region"
      aria-label="Cookie and analytics choice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border-subtle bg-bg-raised"
    >
      <div className="wrap flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <p className="t-small max-w-prose text-text-secondary">
          We would like to use anonymous analytics to see which parts of this site are useful. Nothing is collected unless you say yes, and we never use it for ads.{' '}
          <a href="/privacy#analytics" className="link">Details</a>
        </p>
        <div className="flex gap-3">
          <button type="button" className="btn btn-secondary" onClick={() => decide('declined')}>
            No thanks
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => decide('accepted')}>
            Allow analytics
          </button>
        </div>
      </div>
    </div>
  );
}
