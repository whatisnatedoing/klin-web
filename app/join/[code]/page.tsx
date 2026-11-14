import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { site, hasStoreLinks } from '@/lib/site';

// Invitation landing page and the target for Universal Links / App Links.
// It never validates or reveals anything about a code: validation happens inside the app, against the database.
export const metadata: Metadata = {
  title: 'You have been invited to Klin',
  robots: { index: false, follow: false },
  referrer: 'no-referrer',
};

const CODE = /^[A-Za-z0-9]{6,16}$/;

export default async function Join({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const valid = CODE.test(code);
  return (
    <PageShell title="Someone has invited you to Klin." lede="Klin is a private app for two people. Your invitation opens in the app, where you can look it over before you join.">
      {valid ? (
        <div className="flex flex-col items-start gap-6">
          <a className="btn btn-primary" href={`klin://join/${code}`}>Open in Klin</a>
          <p className="t-small text-text-secondary">Invitations work once and expire after seven days. If this one has run out, ask for a new one.</p>
          {hasStoreLinks() ? (
            <div className="flex flex-wrap gap-3">
              {site.appStoreUrl && <a className="btn btn-secondary" href={site.appStoreUrl}>App Store</a>}
              {site.playStoreUrl && <a className="btn btn-secondary" href={site.playStoreUrl}>Google Play</a>}
            </div>
          ) : (
            <p className="t-small text-text-secondary">Klin is not in the stores yet. We will have links here once it is.</p>
          )}
        </div>
      ) : (
        <p>That link does not look right. Ask the person who invited you to send it again.</p>
      )}
    </PageShell>
  );
}
