export type LaunchState = 'prelaunch' | 'beta' | 'live';

const state = (process.env.NEXT_PUBLIC_LAUNCH_STATE ?? 'prelaunch') as LaunchState;

export const site = {
  name: 'Klin',
  tagline: 'Love, in all the little things.',
  description:
    'Klin brings your relationship closer with a private space to talk, share memories, make plans and keep the moments that matter.',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, ''),
  launchState: state,
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL || '',
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL || '',
  betaUrl: process.env.NEXT_PUBLIC_BETA_URL || '',
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || '',
  // Legal pages stay noindex until counsel has reviewed them.
  legalReviewed: process.env.NEXT_PUBLIC_LEGAL_REVIEWED === '1',
  legalUpdated: '13 November 2026',
  // Credit shown in the footer. Add NEXT_PUBLIC_BUILDER_URL to make it a link.
  builder: { credit: 'Built by Danbury', url: process.env.NEXT_PUBLIC_BUILDER_URL || '' },
  social: {
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || '',
    x: process.env.NEXT_PUBLIC_SOCIAL_X || '',
    tiktok: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK || '',
  },
} as const;

export const hasStoreLinks = () => Boolean(site.appStoreUrl || site.playStoreUrl);

/** Primary call to action depends on launch state. Store badges only render with real URLs. */
export function primaryCta() {
  switch (site.launchState) {
    case 'live':
      return { label: 'Get started', href: '#download' };
    case 'beta':
      return { label: 'Join the beta', href: '#download' };
    default:
      return { label: 'Join the waitlist', href: '#download' };
  }
}

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Support', href: '/support' },
] as const;
