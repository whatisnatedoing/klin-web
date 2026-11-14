import { sections as c, faqs } from '@/content/copy';
import { hasStoreLinks, site, primaryCta } from '@/lib/site';
import { FaqList, faqJsonLd } from './Faq';
import { WaitlistForm } from './WaitlistForm';

/* Free and Plus: a plain table, shown on the Features page. */
export function Plus() {
  return (
    <section aria-labelledby="plus-title" className="py-24 md:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="plus-title" className="t-title1 max-w-[16ch]">{c.plus.title}</h2>
          <p className="mt-6 max-w-measure text-text-secondary">{c.plus.body}</p>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <table className="w-full table-fixed border-collapse text-left text-[0.9375rem] sm:text-base">
            <caption className="sr-only">What is in Klin Free and Klin Plus</caption>
            <thead>
              <tr className="border-b border-border-strong">
                <th scope="col" className="w-[34%] py-3 pr-3"><span className="sr-only">Feature</span></th>
                <th scope="col" className="py-3 pr-3 font-bold">Free</th>
                <th scope="col" className="py-3 font-bold">Klin Plus</th>
              </tr>
            </thead>
            <tbody>
              {c.plus.rows.map(([area, free, plus]) => (
                <tr key={area} className="border-b border-border-subtle align-top">
                  <th scope="row" className="py-4 pr-3 font-medium">{area}</th>
                  <td className="py-4 pr-3 text-text-secondary">{free}</td>
                  <td className="py-4 text-text-secondary">{plus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="t-caption mt-4">Klin Plus includes everything in Free. If either of you subscribes, it covers both.</p>
        </div>
      </div>
    </section>
  );
}

/* 14. FAQ */
export function Faqs() {
  return (
    <section aria-labelledby="faq-title" className="py-24 md:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <h2 id="faq-title" className="t-title1 lg:col-span-4">Questions, answered.</h2>
        <div className="lg:col-span-7 lg:col-start-6"><FaqList items={faqs} /></div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
    </section>
  );
}

/* 15. Download. Store buttons exist only when a real URL is configured. */
export function Download() {
  const live = site.launchState !== 'prelaunch' && hasStoreLinks();
  const beta = site.launchState === 'beta' && site.betaUrl;
  const waitlist = site.launchState === 'prelaunch';
  const cta = primaryCta();

  return (
    <section id="download" aria-labelledby="dl-title" className="cut-tl bg-rose-fill py-24 text-[color:var(--rose-on-fill)] [--border-strong:var(--rose-on-fill)] [--text-secondary:var(--rose-on-fill)] md:py-40">
      <div className="wrap">
        <h2 id="dl-title" className="t-display max-w-[12ch]">{c.download.title}</h2>
        <div className="mt-12">
          {live ? (
            <div className="flex flex-wrap gap-3">
              {site.appStoreUrl && <a className="btn btn-primary" href={site.appStoreUrl}>Download on the App Store</a>}
              {site.playStoreUrl && <a className="btn btn-primary" href={site.playStoreUrl}>Get it on Google Play</a>}
            </div>
          ) : beta ? (
            <a className="btn btn-primary" href={site.betaUrl}>{cta.label}</a>
          ) : waitlist ? (
            <>
              <p className="t-lede mb-8 max-w-measure">{c.download.prelaunch}</p>
              <WaitlistForm label={cta.label} />
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
