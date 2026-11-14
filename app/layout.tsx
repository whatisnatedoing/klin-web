import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ConsentBanner } from '@/components/Analytics';
import { site } from '@/lib/site';

const dmSans = localFont({
  src: [
    { path: './fonts/dm-sans-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/dm-sans-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/dm-sans-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-dm-sans',
  display: 'swap',
});
const dmSerif = localFont({
  src: [{ path: './fonts/dm-serif-display-latin-400-normal.woff2', weight: '400', style: 'normal' }],
  variable: '--font-dm-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
    url: site.url,
    locale: 'en_GB',
  },
  twitter: { card: 'summary_large_image', title: `${site.name}: ${site.tagline}`, description: site.description },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6EDE7' },
    { media: '(prefers-color-scheme: dark)', color: '#17151C' },
  ],
  colorScheme: 'light dark',
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: site.name, url: site.url, logo: `${site.url}/brand/klin-social-avatar.svg` },
    { '@type': 'WebSite', name: site.name, url: site.url, description: site.description },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${dmSans.variable} ${dmSerif.variable}`} suppressHydrationWarning>
      <head>
        {/* Apply a saved light/dark choice before first paint so the page never flashes the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('klin-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}" }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-bg-raised focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ConsentBanner />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
