import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { FaqList, faqJsonLd } from '@/components/sections/Faq';
import { faqs } from '@/content/copy';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Answers to common questions, how to contact us, and how to delete your Klin account.',
  alternates: { canonical: '/support' },
};

export default function Support() {
  return (
    <PageShell title="Support" lede="Most questions are answered below. If yours is not, write to us." wide>
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="t-title2 mb-6">Common questions</h2>
          <FaqList items={faqs} />
        </div>

        <div className="flex flex-col gap-14 lg:col-span-4 lg:col-start-9">
          <section id="contact" aria-labelledby="contact-title">
            <h2 id="contact-title" className="t-title2">Contact</h2>
            {site.supportEmail ? (
              <p className="mt-3">
                Email <a className="link" href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. We read everything and reply as soon as we can.
              </p>
            ) : (
              <p className="mt-3 text-text-secondary">Support opens when Klin does. A contact address will be here.</p>
            )}
          </section>

          <section id="delete-account" aria-labelledby="delete-title">
            <h2 id="delete-title" className="t-title2">Delete your account</h2>
            <p className="mt-3 text-text-secondary">You can delete your account in the app, any time.</p>
            <ol className="mt-4 list-decimal space-y-2 pl-5">
              <li>Open Klin and go to Profile.</li>
              <li>Choose Account, then Delete account.</li>
              <li>Read what will happen and confirm with your password.</li>
            </ol>
            <p className="mt-4 text-text-secondary">
              Your account is switched off straight away. For 14 days you can sign back in to change your mind. After that your personal data is removed. Subscriptions are managed in the App Store or Google Play and are not cancelled automatically.
            </p>
            {site.supportEmail && (
              <p className="mt-4 text-text-secondary">
                Cannot get into the app? Email <a className="link" href={`mailto:${site.supportEmail}?subject=Delete%20my%20Klin%20account`}>{site.supportEmail}</a> from the address on your account.
              </p>
            )}
          </section>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
    </PageShell>
  );
}
