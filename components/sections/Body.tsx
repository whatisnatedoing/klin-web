import Link from 'next/link';
import { sections as c } from '@/content/copy';
import { CalendarScreen, ChatScreen, MemoriesScreen, WelcomeScreen } from '../screens/screens';
import { DailyDemo } from './DailyDemo';
import { Tour, type TourStep } from './Tour';

const band = 'py-24 md:py-32';

/* 2. Your own little world: the only dark band. Everything stays inside it. */
export function World() {
  return (
    <section id="little-world" aria-labelledby="world-title" className="cut-tr relative mt-8 bg-bg-inverse text-text-inverse md:mt-12">
      <div className="wrap grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="world-title" className="t-statement">{c.world.title}</h2>
          <div className="mt-8 flex max-w-measure flex-col gap-5 text-[1.1875rem] opacity-85">
            {c.world.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <div className="relative lg:col-span-4 lg:col-start-9">
          <div className="mx-auto w-fit [--s:0.62] sm:[--s:0.7] lg:ml-0 lg:[--s:0.7]">
            <WelcomeScreen />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3. The tour: chat, memories, calendar. One sticky phone, three steps. */
export function ProductTour() {
  const steps: TourStep[] = [
    {
      id: 'chat', tone: 'rose', screen: <ChatScreen />,
      text: (
        <>
          <h2 className="t-title1">{c.chat.title}</h2>
          <p className="t-lede mt-6 max-w-prose">{c.chat.body}</p>
          <dl className="mt-10 border-t border-border-subtle">
            {c.chat.facts.map(([k, v]) => (
              <div key={k} className="grid gap-1 border-b border-border-subtle py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="font-bold">{k}</dt>
                <dd className="text-text-secondary">{v}</dd>
              </div>
            ))}
          </dl>
        </>
      ),
    },
    {
      id: 'memories', tone: 'terracotta', screen: <MemoriesScreen />,
      text: (
        <>
          <h2 className="t-title1">{c.memories.title}</h2>
          <p className="t-lede mt-6 max-w-prose">{c.memories.body}</p>
        </>
      ),
    },
    {
      id: 'calendar', tone: 'sage', screen: <CalendarScreen />,
      text: (
        <>
          <h2 className="t-title1">{c.calendar.title}</h2>
          <p className="t-lede mt-6 max-w-prose">{c.calendar.body}</p>
          <ul className="mt-10 border-t border-border-subtle">
            {c.calendar.kinds.map((k) => (
              <li key={k} className="border-b border-border-subtle py-3 font-serif text-2xl md:text-[1.75rem]">{k}</li>
            ))}
          </ul>
        </>
      ),
    },
  ];
  return <Tour steps={steps} />;
}

/* 6. Daily: the working demo. */
export function Daily() {
  return (
    <section aria-labelledby="daily-title" className="cut-tl bg-rose-subtle py-24 md:py-32">
      <div className="wrap">
        <h2 id="daily-title" className="t-title1 max-w-[20ch]">{c.daily.title}</h2>
        <p className="t-lede mt-3 max-w-prose">{c.daily.body}</p>
        <div className="mt-14"><DailyDemo /></div>
      </div>
    </section>
  );
}

/* 7. Letters: the paper sits lower than the text, so the two columns do not line up. */
export function Letters() {
  const l = c.letters.letter;
  return (
    <section aria-labelledby="letters-title" className="bg-terracotta-subtle py-24 md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-5 lg:col-start-1 lg:mt-20">
          <figure>
            <div className="rotate-[-1.5deg] border border-border-subtle bg-bg-raised px-8 py-10 shadow-[0_18px_40px_-24px_rgba(23,21,28,0.45)] md:px-10 md:py-12">
              <p className="t-letter">{l.salutation}</p>
              {l.paragraphs.map((p) => <p key={p} className="t-letter mt-4">{p}</p>)}
              <p className="t-letter mt-8">{l.closing}<br />{l.from}</p>
            </div>
            <figcaption className="t-caption mt-3">{l.arrives}</figcaption>
          </figure>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
          <h2 id="letters-title" className="t-title1">{c.letters.title}</h2>
          <p className="t-lede mt-6 max-w-prose">{c.letters.body}</p>
        </div>
      </div>
    </section>
  );
}

/* 9. Assistant: narrow and plain. */
export function Assistant() {
  return (
    <section aria-labelledby="ai-title" className={band}>
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:col-start-4">
          <h2 id="ai-title" className="t-title1">{c.assistant.title}</h2>
          <p className="t-lede mt-6">{c.assistant.body}</p>
          <ul className="mt-8 border-t border-border-subtle">
            {c.assistant.points.map((p) => <li key={p} className="border-b border-border-subtle py-3.5">{p}</li>)}
          </ul>
          <p className="mt-6"><Link href={c.assistant.link.href} className="link">{c.assistant.link.label}</Link></p>
        </div>
      </div>
    </section>
  );
}

/* 10. How it works: a real sequence, so numbering earns its place. */
export function How() {
  return (
    <section aria-labelledby="how-title" className="border-y border-border-subtle py-24 md:py-28">
      <div className="wrap">
        <h2 id="how-title" className="t-title2">{c.how.title}</h2>
        <ol className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
          {c.how.steps.map((s, i) => (
            <li key={s.title}>
              <span
                aria-hidden="true"
                style={{ '--c': '22px' } as React.CSSProperties}
                className={`${i % 2 ? 'cell-alt' : 'cell'} grid h-[5.25rem] w-24 place-items-center font-serif text-5xl text-[color:var(--rose-on-fill)] ${['bg-rose-fill', 'bg-terracotta-fill', 'bg-sage-fill'][i]}`}
              >
                {i + 1}
              </span>
              <h3 className="t-title3 mt-6">{s.title}</h3>
              <p className="mt-2 max-w-[34ch] text-text-secondary">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
