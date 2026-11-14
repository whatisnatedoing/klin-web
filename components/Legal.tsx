import { Draft, PageShell } from './PageShell';
import type { LegalSection } from '@/content/legal';
import { site } from '@/lib/site';

export function Legal({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <PageShell title={title} wide>
      <div className="grid gap-12 lg:grid-cols-12">
        <nav aria-label={`${title} contents`} className="lg:col-span-3">
          <ul className="t-small space-y-2 lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="link no-underline hover:underline">{s.title}</a></li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-8 lg:col-start-5">
          {!site.legalReviewed && (
            <Draft>
              Draft for legal review. This describes how Klin is designed to work and has not yet been reviewed by a lawyer or checked against the finished app. Text in square brackets is still to be filled in.
            </Draft>
          )}
          <p className="t-caption">Last updated {site.legalUpdated}</p>
          <div className="mt-8 flex max-w-prose flex-col gap-12">
            {sections.map((s) => (
              <section key={s.id} id={s.id}>
                <h2 className="t-title2">{s.title}</h2>
                <div className="mt-3 flex flex-col gap-4 text-text-primary">
                  {s.body.map((p) => <p key={p}>{p}</p>)}
                  {s.list && (
                    <ul className="list-disc space-y-2 pl-5 text-text-primary">
                      {s.list.map((li) => <li key={li}>{li}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
