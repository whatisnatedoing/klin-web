import type { Metadata } from 'next';
import { Legal } from '@/components/Legal';
import { terms } from '@/content/legal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms for using Klin.',
  alternates: { canonical: '/terms' },
  robots: site.legalReviewed ? undefined : { index: false, follow: false },
};

export default function Terms() {
  return <Legal title="Terms of Service" sections={terms} />;
}
