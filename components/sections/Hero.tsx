import Link from 'next/link';
import { hero } from '@/content/copy';
import { primaryCta, site } from '@/lib/site';
import { WaitlistForm } from './WaitlistForm';
import { Mosaic } from '../Mosaic';
import { Rise, SettlingDot } from '../Rise';

export function Hero() {
  const cta = primaryCta();
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="wrap grid items-center gap-12 pb-20 pt-8 md:pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        <div className="lg:col-span-6">
          <h1 id="hero-title" className="t-display">
            Love, in all the little things
            <span className="sr-only">.</span>
            <SettlingDot />
          </h1>
          <Rise delay={0.25} y={16}>
            <p className="t-lede mt-8 max-w-measure md:mt-10">{hero.support}</p>
            {site.launchState === 'prelaunch' ? (
              <div className="mt-8">
                <WaitlistForm />
              </div>
            ) : (
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={cta.href} className="btn btn-primary">{cta.label}</Link>
                <Link href={hero.secondary.href} className="btn btn-secondary">{hero.secondary.label}</Link>
              </div>
            )}
          </Rise>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 xl:pl-6">
          <Mosaic />
        </div>
      </div>
    </section>
  );
}
