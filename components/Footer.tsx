import Link from 'next/link';
import { Wordmark } from './Logo';
import { site } from '@/lib/site';
import { screens } from '@/lib/screens';

const links = [
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Support', href: '/support' },
];

export function Footer() {
  const social = Object.entries(site.social).filter(([, v]) => v) as [string, string][];
  const hasPreview = Object.values(screens).some((s) => s.status === 'preview');
  const label: Record<string, string> = { instagram: 'Instagram', x: 'X', tiktok: 'TikTok' };

  return (
    <footer className="mt-24 border-t border-border-subtle">
      <div className="wrap grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Wordmark className="h-8 w-auto text-text-primary" />
          <p className="t-small mt-4 max-w-measure text-text-secondary">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:max-w-xl md:justify-end">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="t-small text-text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
            {social.map(([k, v]) => (
              <li key={k}>
                <a href={v} className="t-small text-text-primary" rel="noopener noreferrer">
                  {label[k]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="wrap rule flex flex-col gap-2 py-6 md:flex-row md:justify-between">
        <p className="t-caption">
          &copy; {new Date().getFullYear()} Klin. All rights reserved.{' '}
          <span className="whitespace-nowrap">
            {site.builder.url ? (
              <a href={site.builder.url} rel="noopener noreferrer" className="underline">{site.builder.credit}</a>
            ) : (
              site.builder.credit
            )}
          </span>
        </p>
        {hasPreview && (
          <p className="t-caption">Screens and tiles on this site are design previews. Real screenshots replace them before launch.</p>
        )}
      </div>
    </footer>
  );
}
