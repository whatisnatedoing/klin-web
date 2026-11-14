import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { site } from '@/lib/site';
import { WORDMARK_PATH, WORDMARK_VIEWBOX } from '@/components/brand-paths';

export const alt = 'Klin. Love, in all the little things.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const dir = path.join(process.cwd(), 'app/fonts');
  const [serif, sans] = await Promise.all([
    readFile(path.join(dir, 'dm-serif-display-latin-400-normal.woff')),
    readFile(path.join(dir, 'dm-sans-latin-500-normal.woff')),
  ]);
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', background: '#F6EDE7', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 96px' }}>
        <svg width="560" height={Math.round(560 * 348 / 952)} viewBox={WORDMARK_VIEWBOX} fill="none">
          <path d={WORDMARK_PATH} fill="#17151C" />
        </svg>
        <div style={{ fontFamily: 'DM Serif Display', fontSize: 52, color: '#17151C', marginTop: 56 }}>{site.tagline}</div>
      </div>
    ),
    { ...size, fonts: [
      { name: 'DM Serif Display', data: serif, style: 'normal', weight: 400 },
      { name: 'DM Sans', data: sans, style: 'normal', weight: 500 },
    ] },
  );
}
