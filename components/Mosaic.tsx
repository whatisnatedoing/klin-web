import { Avatar, Photo } from './screens/kit';

/**
 * A handful of small moments from a shared space, laid out like the cells of the logo: chamfered blocks that
 * touch at their corners. Design preview content, like the phone screens (see content/screens.manifest.json).
 */
const ink = 'text-[color:var(--rose-on-fill)]'; // ink on any accent fill: 10:1 or better

function Bars({ n = 22 }: { n?: number }) {
  const h = [30, 55, 40, 75, 50, 90, 60, 35, 80, 55, 25, 65, 85, 45, 70, 30, 60, 40, 75, 50, 35, 55];
  return (
    <span aria-hidden="true" className="flex h-8 items-center gap-[3px]">
      {h.slice(0, n).map((v, i) => <span key={i} className="w-[3px] rounded-full bg-current" style={{ height: `${v}%` }} />)}
    </span>
  );
}

export function Mosaic() {
  return (
    <div aria-hidden="true" className="mosaic grid grid-flow-dense auto-rows-[7.75rem] grid-cols-2 md:auto-rows-[8rem] md:grid-cols-4 lg:auto-rows-[8.4rem]">
      {/* 0. the daily question */}
      <div style={{ '--i': 0, '--c': '44px' } as React.CSSProperties} className={`cell col-span-2 row-span-2 flex flex-col justify-between bg-rose-fill p-5 md:p-6 ${ink}`}>
        <p className="text-[0.8125rem] font-medium opacity-80">Today&rsquo;s question</p>
        <p className="font-serif text-[1.55rem] leading-[1.15] md:text-[1.9rem] lg:text-[1.7rem] xl:text-[1.9rem]">What is something small that made you smile this week?</p>
        <p className="text-[0.8125rem] font-medium opacity-80">Answer first. Then see Sam&rsquo;s.</p>
      </div>
      {/* 1. partner answered */}
      <div style={{ '--i': 2 } as React.CSSProperties} className={`cell flex flex-col justify-between bg-sage-fill p-4 ${ink}`}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--bg-inverse)] text-[0.8125rem] font-bold text-[var(--text-inverse)]">S</span>
        <p className="text-[0.9375rem] font-medium leading-tight">Sam has answered</p>
      </div>
      {/* 2. a saved photo */}
      <div style={{ '--i': 3 } as React.CSSProperties} className="cell-alt relative col-span-1 row-span-2 overflow-hidden bg-terracotta-fill">
        <div className="absolute inset-0"><Photo scene="sun" tone="terracotta" /></div>
        <p className={`absolute inset-x-0 bottom-0 bg-terracotta-fill px-4 pb-4 pt-8 font-serif text-[1.0625rem] leading-tight ${ink}`}>Window seat, 18:12</p>
      </div>
      {/* 3. a plan */}
      <div style={{ '--i': 4 } as React.CSSProperties} className="cell flex flex-col justify-between bg-bg-inverse p-4 text-text-inverse">
        <p className="text-[0.8125rem] font-medium opacity-80">Sat, 7:30 pm</p>
        <p className="font-serif text-[1.125rem] leading-tight">Dinner at Nkoyo&rsquo;s</p>
      </div>
      {/* 4. a countdown */}
      <div style={{ '--i': 5 } as React.CSSProperties} className="cell-alt flex flex-col justify-between bg-bg-sunken p-4">
        <p className="font-serif text-[2.75rem] leading-none">12</p>
        <p className="text-[0.8125rem] font-medium leading-tight text-text-secondary">days to the Jos trip</p>
      </div>
      {/* 5. a message */}
      <div style={{ '--i': 6 } as React.CSSProperties} className="cell col-span-2 flex flex-col justify-center gap-2 bg-terracotta-subtle p-4 md:p-5">
        <p className="w-fit rounded-md bg-bg-raised px-3 py-1.5 text-[0.9375rem]">Did you see the sunset?</p>
        <p className="ml-auto w-fit rounded-md bg-bg-inverse px-3 py-1.5 text-[0.9375rem] text-text-inverse">From the bus. Window seat.</p>
      </div>
      {/* 6. a voice note */}
      <div style={{ '--i': 7 } as React.CSSProperties} className="cell-alt flex flex-col justify-between bg-rose-subtle p-4">
        <Bars n={16} />
        <p className="text-[0.8125rem] font-medium text-text-secondary">Voice note 0:14</p>
      </div>
      {/* 7. a private diary entry */}
      <div style={{ '--i': 8 } as React.CSSProperties} className="cell hidden flex-col justify-between bg-sage-subtle p-5 md:col-span-2 md:flex">
        <p className="text-[0.8125rem] font-medium text-text-secondary">Diary &middot; only you can read this</p>
        <p className="font-serif text-[1.2rem] leading-snug">Slept badly, ate well, loved the rain.</p>
      </div>
      {/* 8. another saved photo */}
      <div style={{ '--i': 9 } as React.CSSProperties} className="cell-alt relative hidden overflow-hidden bg-sage-fill md:col-span-2 md:block">
        <div className="absolute inset-0"><Photo scene="plate" tone="sage" /></div>
        <p className={`absolute inset-x-0 bottom-0 bg-sage-fill px-5 pb-4 pt-6 font-serif text-[1.0625rem] leading-tight ${ink}`}>Sunday lunch, 14:05</p>
      </div>
    </div>
  );
}
