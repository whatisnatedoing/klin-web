import type { ReactNode } from 'react';

/** Shared frame for the simple editorial pages: a serif title, an optional lede and a readable column. */
export function PageShell({ title, lede, children, wide = false }: { title: string; lede?: string; children: ReactNode; wide?: boolean }) {
  return (
    <article className="wrap pb-8 pt-12 md:pt-20">
      <header className="max-w-3xl">
        <h1 className="t-title1">{title}</h1>
        {lede && <p className="t-lede mt-6 max-w-prose">{lede}</p>}
      </header>
      <div className={`mt-14 ${wide ? '' : 'max-w-prose'}`}>{children}</div>
    </article>
  );
}

export function Draft({ children }: { children: ReactNode }) {
  return (
    <aside role="note" className="mb-10 border border-status-warning-text bg-status-warning-bg px-5 py-4 text-status-warning-text">
      <p className="t-small font-medium">{children}</p>
    </aside>
  );
}
