'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export type TourStep = { id: string; tone: 'rose' | 'terracotta' | 'sage'; text: ReactNode; screen: ReactNode };

/**
 * One scrolling tour instead of three look-alike sections. On wide screens the phone stays put and its
 * screen and coloured stage change as each step passes the middle of the viewport. On small screens every
 * step carries its own phone. The phones are decorative previews: the text carries the meaning.
 */
export function Tour({ steps }: { steps: TourStep[] }) {
  const [active, setActive] = useState(0);
  const els = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i)); }),
      { rootMargin: '-45% 0px -45% 0px' },
    );
    els.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="tour" aria-label="What is inside Klin" className="wrap grid gap-x-8 lg:grid-cols-12">
      <div className="lg:col-span-6">
        {steps.map((s, i) => (
          <article
            key={s.id}
            data-i={i}
            ref={(el) => { els.current[i] = el; }}
            className="flex flex-col justify-center py-16 md:py-24 lg:min-h-[80vh]"
          >
            {s.text}
            <div aria-hidden="true" className="stage mx-auto mt-12 grid w-full max-w-sm place-items-center py-10 [--s:0.72] lg:hidden" style={{ backgroundColor: `var(--${s.tone}-fill)` }}>
              {s.screen}
            </div>
          </article>
        ))}
      </div>

      <div aria-hidden="true" className="hidden lg:col-span-6 lg:col-start-7 lg:block">
        <div className="sticky top-[var(--header-h)] grid h-[calc(100vh-var(--header-h))] place-items-center">
          <div className="stage absolute inset-y-[6vh] left-[8%] right-0" style={{ backgroundColor: `var(--${steps[active].tone}-fill)` }} />
          <div className="relative grid place-items-center [--s:0.8] [@media(max-height:780px)]:[--s:0.64]">
            {steps.map((s, i) => (
              <div key={s.id} data-active={i === active} className="tour-screen col-start-1 row-start-1">
                {s.screen}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
