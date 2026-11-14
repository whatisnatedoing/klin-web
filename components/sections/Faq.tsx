import type { Faq } from '@/content/copy';

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t border-border-subtle">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-border-subtle">
          <summary className="flex items-start justify-between gap-6 py-5 text-[1.1875rem] font-medium leading-snug">
            <span>{f.q}</span>
            <span aria-hidden="true" className="mt-[0.2em] grid h-5 w-5 shrink-0 place-items-center text-xl leading-none text-text-secondary group-open:hidden">+</span>
            <span aria-hidden="true" className="mt-[0.2em] hidden h-5 w-5 shrink-0 place-items-center text-xl leading-none text-text-secondary group-open:grid">&minus;</span>
          </summary>
          <p className="max-w-prose pb-6 pr-10 text-text-secondary">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
