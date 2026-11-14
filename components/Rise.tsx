import type { CSSProperties, ReactNode } from 'react';

/** The one orchestrated entrance on the page. Pure CSS (see globals.css); reduced motion renders it settled. */
export function Rise({ children, delay = 0, y = 28, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const style = { '--rise-y': `${y}px`, '--rise-delay': `${delay}s` } as CSSProperties;
  return <div className={`rise ${className ?? ''}`} style={style}>{children}</div>;
}

/** The full stop of the headline: it settles in after the words. */
export function SettlingDot({ delay = 0.5 }: { delay?: number }) {
  return (
    <span
      aria-hidden="true"
      className="settle ml-[0.04em] inline-block h-[0.17em] w-[0.17em] rounded-full bg-rose-fill align-baseline"
      style={{ '--rise-delay': `${delay}s` } as CSSProperties}
    />
  );
}
