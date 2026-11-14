import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { featureGroups } from '@/content/copy';
import { Plus } from '@/components/sections/Closing';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Everything in Klin: chat, calls, memories, a shared calendar, letters, journals, daily questions and more.',
  alternates: { canonical: '/features' },
};

export default function Features() {
  return (
    <>
    <PageShell
      title="Everything in the space."
      lede="Klin is one place for the things two people share. Here is what is in it, grouped by what you might want to do."
      wide
    >
      <div className="flex flex-col gap-16">
        {featureGroups.map((g) => (
          <section key={g.title} aria-labelledby={`g-${g.title}`} className="grid gap-6 lg:grid-cols-12">
            <h2 id={`g-${g.title}`} className="t-title2 lg:col-span-3">{g.title}</h2>
            <dl className="border-t border-border-subtle lg:col-span-8 lg:col-start-5">
              {g.items.map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-border-subtle py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                  <dt className="font-bold">{k}</dt>
                  <dd className="text-text-secondary">{v}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </PageShell>
    <Plus />
    </>
  );
}
