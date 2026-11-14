import type { ReactNode } from 'react';

/**
 * Design-preview kit. These screens are authored at 390x800 from the real tokens and are NOT screenshots.
 * They are tracked in content/screens.manifest.json and replaced by real captures after Phase 5.
 */

export function Phone({ children, scale, label }: { children: ReactNode; scale?: number; label: string }) {
  return (
    <div className="phone-scale" style={{ ['--s' as string]: scale }} role="img" aria-label={`${label} screen of the Klin app (design preview)`}>
      <div className="phone" aria-hidden="true">
        <div
          className="relative h-full w-full overflow-hidden bg-bg-canvas text-text-primary"
          style={{ border: '9px solid #17151C', borderRadius: 54, boxShadow: '0 0 0 1px rgba(246,237,231,0.22)' }}
        >
          <div className="absolute left-1/2 top-[9px] z-10 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-[#17151C]" />
          {children}
        </div>
      </div>
    </div>
  );
}

export function StatusBar() {
  return (
    <div className="flex h-[52px] items-end justify-between px-8 pb-1 text-[15px] font-bold">
      <span>9:41</span>
      <span className="flex items-center gap-1.5">
        <svg width="18" height="11" viewBox="0 0 18 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1" /><rect x="5" y="5" width="3" height="6" rx="1" /><rect x="10" y="2.5" width="3" height="8.5" rx="1" /><rect x="15" y="0" width="3" height="11" rx="1" /></svg>
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="currentColor" opacity=".45" /><rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor" /><rect x="24" y="4" width="2" height="4" rx="1" fill="currentColor" opacity=".45" /></svg>
      </span>
    </div>
  );
}

const icons: Record<string, ReactNode> = {
  Home: <path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" />,
  Chat: <path d="M4 5h16v11H9l-5 4z" />,
  Memories: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
      <path d="M3.5 16l5-5 4 4 3-3 5 5" />
    </>
  ),
  Together: (
    <>
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </>
  ),
  Profile: (
    <>
      <circle cx="12" cy="9" r="4" />
      <path d="M5 20c1-4 4-6 7-6s6 2 7 6" />
    </>
  ),
};

export function TabBar({ active }: { active: keyof typeof icons }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex h-[84px] items-start justify-around border-t border-border-subtle bg-bg-canvas px-2 pt-2.5">
      {Object.keys(icons).map((k) => (
        <div key={k} className={`flex w-16 flex-col items-center gap-0.5 ${k === active ? 'text-text-primary' : 'text-text-tertiary'}`}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">{icons[k]}</svg>
          <span className="text-[11px] font-medium">{k}</span>
          <span className={`h-[5px] w-[5px] rounded-full ${k === active ? 'bg-rose-fill' : 'bg-transparent'}`} />
        </div>
      ))}
    </div>
  );
}

const avatarTone = {
  rose: 'bg-rose-subtle text-rose-text',
  sage: 'bg-sage-subtle text-sage-text',
  terracotta: 'bg-terracotta-subtle text-terracotta-text',
} as const;

export function Avatar({ initial, tone = 'rose', size = 44, ring = false }: { initial: string; tone?: 'rose' | 'sage' | 'terracotta'; size?: number; ring?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-bold ${avatarTone[tone]} ${ring ? 'ring-2 ring-rose-fill ring-offset-2 ring-offset-bg-canvas' : ''}`}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      {initial}
    </span>
  );
}

type Scene = 'sun' | 'hills' | 'window' | 'plate';
export function Photo({ scene = 'sun', tone = 'terracotta', className = '' }: { scene?: Scene; tone?: 'rose' | 'terracotta' | 'sage'; className?: string }) {
  const sub = `var(--${tone}-subtle)`;
  const fill = `var(--${tone}-fill)`;
  const other = tone === 'sage' ? 'var(--rose-subtle)' : 'var(--sage-subtle)';
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className={`block h-full w-full ${className}`} aria-hidden="true">
      <rect width="100" height="100" fill={sub} />
      {scene === 'sun' && (<><circle cx="66" cy="42" r="15" fill={fill} /><rect y="62" width="100" height="38" fill={other} /></>)}
      {scene === 'hills' && (<><path d="M0 70 Q25 40 50 62 T100 55 V100 H0Z" fill={other} /><path d="M0 82 Q30 60 60 78 T100 72 V100 H0Z" fill={fill} opacity=".7" /></>)}
      {scene === 'window' && (<><rect x="22" y="14" width="56" height="64" fill={other} /><path d="M50 14V78M22 46H78" stroke={sub} strokeWidth="3" /><rect y="80" width="100" height="20" fill={fill} opacity=".6" /></>)}
      {scene === 'plate' && (<><circle cx="50" cy="52" r="30" fill={other} /><circle cx="50" cy="52" r="19" fill={fill} opacity=".75" /></>)}
    </svg>
  );
}

export function Hair() {
  return <div className="rule" />;
}
