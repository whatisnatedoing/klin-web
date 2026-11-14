'use client';

import { useId, useState } from 'react';
import { sections } from '@/content/copy';

const qs = sections.daily.questions;

/**
 * A working demo of the daily question rule: you answer first, and only then see the other answer.
 * Nothing typed here leaves the page.
 */
export function DailyDemo() {
  const [i, setI] = useState(0);
  const [mine, setMine] = useState('');
  const [revealed, setRevealed] = useState(false);
  const id = useId();
  const current = qs[i];
  const ready = mine.trim().length > 0;

  const next = () => {
    setI((v) => (v + 1) % qs.length);
    setMine('');
    setRevealed(false);
  };

  return (
    <div>
      <p id={`${id}-q`} className="t-title1 max-w-[22ch]">{current.q}</p>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="border-l-[3px] border-rose-fill pl-5">
          <label htmlFor={`${id}-a`} className="t-caption block">You</label>
          <textarea
            id={`${id}-a`}
            aria-describedby={`${id}-q`}
            rows={3}
            value={mine}
            onChange={(e) => setMine(e.target.value)}
            readOnly={revealed}
            maxLength={240}
            placeholder="Write something, anything"
            className="mt-2 block w-full resize-none border-0 bg-transparent p-0 text-[1.1875rem] leading-8 text-text-primary placeholder:text-text-tertiary focus:outline-none focus-visible:outline-none"
          />
          {!revealed && (
            <button type="button" className="btn btn-primary mt-4" disabled={!ready} onClick={() => setRevealed(true)}>
              Show Sam&rsquo;s answer
            </button>
          )}
          {!ready && !revealed && <p className="t-small mt-3 text-text-secondary">Answer first. That&rsquo;s the rule.</p>}
        </div>

        <div className="border-l-[3px] border-sage-fill pl-5" aria-live="polite">
          <p className="t-caption">Sam</p>
          {revealed ? (
            <p key="open" className="fade-in mt-2 text-[1.1875rem] leading-8">{current.theirs}</p>
          ) : (
            <p key="shut" className="mt-2 text-[1.1875rem] leading-8 text-text-secondary">
              {ready ? 'Sam has answered. Ready when you are.' : 'Sam has answered. Yours first.'}
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
        {revealed && <p className="font-medium">That&rsquo;s today&rsquo;s question done.</p>}
        <button type="button" onClick={next} className="link t-small bg-transparent p-0">
          Try a different question
        </button>
        <p className="t-caption">This demo stays on your device. Sam&rsquo;s answers are made up.</p>
      </div>
    </div>
  );
}
