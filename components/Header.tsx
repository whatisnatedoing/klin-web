'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Wordmark } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { nav, primaryCta } from '@/lib/site';

const CTA = { label: primaryCta().label, href: '/#download' };

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header" data-scrolled={scrolled || open}>
      <div className="wrap flex h-[var(--header-h)] items-center justify-between">
        <Link href="/" aria-label="Klin, home" className="block text-text-primary">
          <Wordmark className="h-9 w-auto md:h-10" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-text-primary no-underline hover:underline">
              {n.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link href={CTA.href} className="btn btn-primary">
            {CTA.label}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={btn}
            type="button"
            className="btn btn-secondary"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="absolute inset-x-0 top-full border-b border-border-subtle bg-bg-canvas md:hidden">
          <ul className="wrap flex flex-col py-2">
            {nav.map((n) => (
              <li key={n.href} className="border-b border-border-subtle last:border-0">
                <Link href={n.href} onClick={() => setOpen(false)} className="block py-4 text-xl no-underline">
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Link href={CTA.href} onClick={() => setOpen(false)} className="btn btn-primary w-full">
                {CTA.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
