import Link from 'next/link';
import { PageShell } from '@/components/PageShell';

export default function NotFound() {
  return (
    <PageShell title="We could not find that page." lede="It may have moved, or the link may be mistyped.">
      <Link className="btn btn-primary" href="/">Back to the start</Link>
    </PageShell>
  );
}
