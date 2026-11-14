'use client';

import Link from 'next/link';
import { useId, useState } from 'react';

type State = { kind: 'idle' } | { kind: 'sending' } | { kind: 'done' } | { kind: 'error'; message: string };

/** Email signup. Joining twice is fine: the server treats a repeat as success. */
export function WaitlistForm({ label = 'Join the waitlist', className = '' }: { label?: string; className?: string }) {
  const id = useId();
  const [state, setState] = useState<State>({ kind: 'idle' });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setState({ kind: 'sending' });
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.get('email'), company: form.get('company') }),
      });
      if (res.ok) return setState({ kind: 'done' });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      setState({ kind: 'error', message: body.error ?? 'That did not go through. Try again in a minute.' });
    } catch {
      setState({ kind: 'error', message: 'You seem to be offline. Try again when you are back.' });
    }
  }

  if (state.kind === 'done') {
    return (
      <div role="status" className={`max-w-md ${className}`}>
        <p className="font-serif text-2xl">You are on the list.</p>
        <p className="mt-2 text-text-secondary">We will send one email when Klin opens.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={`max-w-md ${className}`}>
      <label htmlFor={`${id}-email`} className="t-small font-medium">
        Your email
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          className="field"
          placeholder="you@example.com"
          aria-describedby={`${id}-note`}
          aria-invalid={state.kind === 'error' ? true : undefined}
        />
        {/* Honeypot: real people never see or fill this. */}
        <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />
        <button type="submit" className="btn btn-primary shrink-0" disabled={state.kind === 'sending'}>
          {state.kind === 'sending' ? 'Joining' : label}
        </button>
      </div>
      <p id={`${id}-note`} className="t-caption mt-3">
        One email when Klin opens, and nothing else. See our <Link href="/privacy" className="underline">privacy policy</Link>.
      </p>
      {state.kind === 'error' && (
        <p role="alert" className="t-small mt-3 text-status-error-text">
          {state.message}
        </p>
      )}
    </form>
  );
}
