import type { Metadata } from 'next';
import { Legal } from '@/components/Legal';
import { privacy } from '@/content/legal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What Klin collects, who can see it, how it is protected and your rights.',
  alternates: { canonical: '/privacy' },
  robots: site.legalReviewed ? undefined : { index: false, follow: false },
};

export default function Privacy() {
  return <Legal title="Privacy Policy" sections={privacy} />;
}
