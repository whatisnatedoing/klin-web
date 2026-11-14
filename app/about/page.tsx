import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { sections } from '@/content/copy';

export const metadata: Metadata = {
  title: 'About',
  description: 'Why Klin exists and what it will and will not do.',
  alternates: { canonical: '/about' },
};

const principles = [
  ['Two people, nobody else', 'A space belongs to the two of you. There is no feed, no followers and no audience.'],
  ['No guilt', 'Streaks are off unless you turn them on. Reminders are quiet. A missed day is just a missed day.'],
  ['Honest about privacy', 'We tell you what is protected and how, including what is not. We will not describe Klin as end-to-end encrypted unless it is.'],
  ['Yours to take with you', 'You can export what you have saved, and you can delete your account.'],
] as const;

export default function About() {
  return (
    <PageShell title={sections.story.title} wide>
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="flex max-w-prose flex-col gap-6 text-[1.1875rem] leading-[1.7] lg:col-span-6">
          {sections.story.body.map((p) => <p key={p}>{p}</p>)}
        </div>
        <section aria-labelledby="principles" className="lg:col-span-5 lg:col-start-8">
          <h2 id="principles" className="t-title2">What we hold to</h2>
          <dl className="mt-6 border-t border-border-subtle">
            {principles.map(([k, v]) => (
              <div key={k} className="border-b border-border-subtle py-5">
                <dt className="font-bold">{k}</dt>
                <dd className="mt-1 text-text-secondary">{v}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </PageShell>
  );
}
