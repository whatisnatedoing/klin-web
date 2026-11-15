import path from 'node:path';
import { fileURLToPath } from 'node:url';

// The Tailwind preset is generated into packages/config (one token source for web and mobile), which sits outside
// apps/web. Turbopack only compiles files under its root, and it picks that root from the nearest lockfile or git
// repository, which can end up being apps/web itself. Pin it to the monorepo root so the build behaves the same
// wherever the folder is checked out.
const monorepoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: monorepoRoot },
  outputFileTracingRoot: monorepoRoot,
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      { source: '/.well-known/apple-app-site-association', headers: [{ key: 'Content-Type', value: 'application/json' }] },
    ];
  },
};
export default nextConfig;
