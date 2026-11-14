import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/about', '/features', '/support', ...(site.legalReviewed ? ['/privacy', '/terms'] : [])];
  return paths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.6 }));
}
