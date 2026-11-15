import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Turbopack only compiles files under its root, and that root has to contain node_modules.
//  * Inside the monorepo, pnpm keeps dependencies in the repo's root node_modules, so the root is the repo.
//  * As a repository of its own (for example a Vercel project that holds only the website), the root is this folder.
// The design tokens live in ./styles either way, so the app never reads files outside its own folder.
const appRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(appRoot, '../..');
const root = existsSync(path.join(repoRoot, 'pnpm-workspace.yaml')) ? repoRoot : appRoot;

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root },
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
