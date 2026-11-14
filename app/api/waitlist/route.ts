import { NextResponse } from 'next/server';
import { appendFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';

/**
 * Waitlist signup. Where the email goes, in order of preference:
 *   1. Supabase table `waitlist_signups` (SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY; see supabase/migrations)
 *   2. A webhook (WAITLIST_WEBHOOK_URL) that receives {email, source, at}, e.g. your email provider
 *   3. In development only: a local file, apps/web/.data/waitlist.jsonl, so the form can be tried with no setup
 * In production with none of these set, the route says so honestly instead of pretending to save.
 */
const schema = z.object({ email: z.string().trim().toLowerCase().email().max(254), company: z.string().optional() });

const hits = new Map<string, { n: number; t: number }>();
function limited(ip: string) {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.t > 60_000) { hits.set(ip, { n: 1, t: now }); return false; }
  h.n += 1;
  return h.n > 5; // best effort: serverless instances do not share memory. Use a shared limiter at scale.
}

type Result = 'saved' | 'unconfigured' | 'failed';

async function save(email: string): Promise<Result> {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    const res = await fetch(`${url.replace(/\/$/, '')}/rest/v1/waitlist_signups?on_conflict=email`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=ignore-duplicates,return=minimal', // joining twice is not an error
      },
      body: JSON.stringify({ email, source: 'website' }),
    }).catch(() => null);
    return res?.ok ? 'saved' : 'failed';
  }

  const hook = process.env.WAITLIST_WEBHOOK_URL;
  if (hook) {
    const res = await fetch(hook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source: 'klin.website', at: new Date().toISOString() }),
    }).catch(() => null);
    return res?.ok ? 'saved' : 'failed';
  }

  if (process.env.NODE_ENV !== 'production') {
    const dir = path.join(process.cwd(), '.data');
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, 'waitlist.jsonl'), JSON.stringify({ email, at: new Date().toISOString() }) + '\n');
    return 'saved';
  }
  return 'unconfigured';
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (limited(ip)) return NextResponse.json({ error: 'Too many tries. Give it a minute.' }, { status: 429 });

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: 'That email does not look right.' }, { status: 400 });

  // A filled honeypot is answered as success so bots learn nothing.
  if (parsed.data.company) return NextResponse.json({ ok: true });

  const result = await save(parsed.data.email);
  if (result === 'saved') return NextResponse.json({ ok: true });
  if (result === 'unconfigured') {
    console.error('[waitlist] No storage configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, or WAITLIST_WEBHOOK_URL.');
    return NextResponse.json({ error: 'Sign-ups are not open just yet. Please check back soon.' }, { status: 503 });
  }
  return NextResponse.json({ error: 'That did not go through. Try again in a minute.' }, { status: 502 });
}
