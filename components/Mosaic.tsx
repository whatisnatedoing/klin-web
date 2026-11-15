import { Photo } from './screens/kit';

/**
 * Three small moments from a shared space, laid out like the cells of the logo: chamfered blocks that touch at
 * their corners. Design preview content, like the phone screens (see content/screens.manifest.json).
 * It reads as one beat: a question, your partner answering, a photo you both kept.
 */
const ink = 'text-[color:var(--rose-on-fill)]'; // ink on any accent fill: 10:1 or better

export function Mosaic() {
  return (
    <div aria-hidden="true" className="mosaic grid auto-rows-[7.5rem] grid-cols-2 md:auto-rows-[8rem] lg:auto-rows-[8.4rem]">
      {/* the daily question */}
      <div
        style={{ '--i': 0, '--c': '44px' } as React.CSSProperties}
        className={`cell col-span-2 row-span-2 flex flex-col justify-between bg-rose-fill p-5 md:col-span-1 md:row-span-3 md:p-6 ${ink}`}
      >
        <p className="text-[0.8125rem] font-medium opacity-80">Today&rsquo;s question</p>
        <p className="font-serif text-[1.6rem] leading-[1.15] md:text-[1.9rem] lg:text-[1.7rem] xl:text-[1.9rem]">
          What is something small that made you smile this week?
        </p>
        <p className="text-[0.8125rem] font-medium opacity-80">Answer first. Then see Sam&rsquo;s.</p>
      </div>

      {/* the partner has answered */}
      <div
        style={{ '--i': 2 } as React.CSSProperties}
        className={`cell flex flex-col justify-between bg-sage-fill p-4 md:col-start-2 md:row-start-3 ${ink}`}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--bg-inverse)] text-[0.8125rem] font-bold text-[var(--text-inverse)]">S</span>
        <p className="text-[0.9375rem] font-medium leading-tight">Sam has answered</p>
      </div>

      {/* a saved photo */}
      <div
        style={{ '--i': 3 } as React.CSSProperties}
        className="cell-alt relative overflow-hidden bg-terracotta-fill md:col-start-2 md:row-span-2 md:row-start-1"
      >
        <div className="absolute inset-0"><Photo scene="sun" tone="terracotta" /></div>
        <p className={`absolute inset-x-0 bottom-0 bg-terracotta-fill px-4 pb-4 pt-6 font-serif text-[1.0625rem] leading-tight ${ink}`}>
          Window seat, 18:12
        </p>
      </div>
    </div>
  );
}
