import { Avatar, Hair, Photo, Phone, StatusBar, TabBar } from './kit';

type P = { scale?: number };

export function HomeScreen({ scale }: P) {
  return (
    <Phone scale={scale} label="Home">
      <StatusBar />
      <div className="px-5 pt-3">
        <p className="t-caption">Friday 13 November</p>
        <h3 className="mt-1 font-serif text-[34px] leading-[38px]">Good evening, Ade.</h3>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex -space-x-2"><Avatar initial="A" ring size={40} /><Avatar initial="S" tone="sage" size={40} /></div>
          <p className="text-[16px] font-medium">One year together.</p>
        </div>
        <div className="mt-5"><Hair /></div>
        <div className="py-4">
          <p className="t-caption">Today&rsquo;s question</p>
          <p className="mt-1 text-[20px] font-medium leading-[27px]">What is something small that made you smile this week?</p>
          <div className="mt-3 flex items-center justify-between text-[14px]">
            <span className="text-text-secondary">Sam hasn&rsquo;t answered yet.</span>
            <span className="font-bold underline underline-offset-4">Answer</span>
          </div>
        </div>
        <Hair />
        <div className="flex items-stretch gap-3 py-4">
          <span className="w-[3px] rounded-full bg-terracotta-fill" />
          <div>
            <p className="t-caption">Tomorrow, 7:30 pm</p>
            <p className="text-[17px] font-medium">Dinner at Nkoyo&rsquo;s</p>
          </div>
        </div>
        <Hair />
        <div className="pt-4">
          <p className="t-caption">Saved this week</p>
          <div className="mt-2 flex gap-3">
            <div className="h-[84px] w-[132px] shrink-0 overflow-hidden rounded-lg"><Photo scene="sun" /></div>
            <p className="self-center text-[15px] leading-[21px]">Window seat, 18:12. The sky did the whole thing.</p>
          </div>
        </div>
      </div>
      <TabBar active="Home" />
    </Phone>
  );
}

export function WelcomeScreen({ scale }: P) {
  return (
    <Phone scale={scale} label="Welcome to your space">
      <StatusBar />
      <div className="flex h-[680px] flex-col justify-center px-7">
        <div className="mb-8 flex items-center gap-0">
          <Avatar initial="A" ring size={72} />
          <span className="mx-4 h-[10px] w-[10px] rounded-full bg-rose-fill" />
          <Avatar initial="S" tone="sage" size={72} />
        </div>
        <h3 className="font-serif text-[40px] leading-[43px]">You&rsquo;re both in.</h3>
        <p className="mt-4 text-[18px] leading-[27px] text-text-secondary">Your space is ready. Start with a message, a photo or today&rsquo;s question.</p>
        <span className="btn btn-primary mt-8 w-full">Go to your space</span>
      </div>
    </Phone>
  );
}

function Bubble({ me, children, tone }: { me?: boolean; children: React.ReactNode; tone?: 'plain' }) {
  return (
    <div className={`flex ${me ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[78%] px-3.5 py-2.5 text-[16px] leading-[22px] ${me ? 'rounded-[18px] rounded-br-[5px] bg-action-primary-bg text-action-primary-text' : 'rounded-[18px] rounded-bl-[5px] border border-border-subtle bg-bg-raised'} ${tone ?? ''}`}>{children}</div>
    </div>
  );
}

export function ChatScreen({ scale }: P) {
  const bars = [8, 14, 22, 12, 26, 18, 10, 24, 16, 28, 12, 20, 9, 15, 22, 11];
  return (
    <Phone scale={scale} label="Chat">
      <StatusBar />
      <div className="flex items-center gap-3 border-b border-border-subtle px-5 pb-3 pt-2">
        <Avatar initial="S" tone="sage" size={38} />
        <div className="flex-1">
          <p className="text-[17px] font-bold leading-5">Sam</p>
          <p className="t-caption flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-sage-fill" />Here now</p>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 px-4 pt-4">
        <p className="t-caption text-center">Today</p>
        <Bubble>Did you see the sunset?</Bubble>
        <Bubble me>On the bus, window seat. Watching it go orange.</Bubble>
        <div className="flex justify-start"><div className="h-[150px] w-[200px] overflow-hidden rounded-[14px]"><Photo scene="sun" tone="terracotta" /></div></div>
        <div className="flex justify-end">
          <div className="flex w-[230px] items-center gap-2.5 rounded-[18px] rounded-br-[5px] bg-action-primary-bg px-3.5 py-3 text-action-primary-text">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-rose-fill"><svg width="10" height="12" viewBox="0 0 10 12" fill="#17151C"><path d="M0 0l10 6-10 6z" /></svg></span>
            <span className="flex h-7 flex-1 items-center gap-[3px]">{bars.map((h, i) => <i key={i} className="block w-[3px] rounded-full bg-action-primary-text opacity-70" style={{ height: h }} />)}</span>
            <span className="text-[13px] tabular-nums">0:23</span>
          </div>
        </div>
        <Bubble>That one goes in the vault.</Bubble>
        <Bubble me>Already saved.</Bubble>
        <p className="t-caption -mt-1 text-right">Read 18:42</p>
        <div className="flex justify-start"><div className="flex gap-1 rounded-[18px] rounded-bl-[5px] border border-border-subtle bg-bg-raised px-4 py-3.5">{[0, 1, 2].map((i) => <i key={i} className="block h-[7px] w-[7px] rounded-full bg-text-tertiary" />)}</div></div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 border-t border-border-subtle bg-bg-canvas px-4 pb-8 pt-3">
        <span className="grid h-10 w-10 place-items-center rounded-full border border-border-strong text-[22px] leading-none">+</span>
        <span className="flex h-10 flex-1 items-center rounded-lg border border-border-strong px-3 text-[16px] text-text-tertiary">Message Sam</span>
      </div>
    </Phone>
  );
}

export function MemoriesScreen({ scale }: P) {
  const col = (items: { h: number; scene: 'sun' | 'hills' | 'window' | 'plate'; tone: 'rose' | 'terracotta' | 'sage'; cap: string; date: string }[]) => (
    <div className="flex flex-1 flex-col gap-4">
      {items.map((m) => (
        <div key={m.cap}>
          <div className="overflow-hidden rounded-lg" style={{ height: m.h }}><Photo scene={m.scene} tone={m.tone} /></div>
          <p className="mt-1.5 text-[14px] font-medium leading-[18px]">{m.cap}</p>
          <p className="t-caption">{m.date}</p>
        </div>
      ))}
    </div>
  );
  return (
    <Phone scale={scale} label="Memories">
      <StatusBar />
      <div className="px-5 pt-3">
        <h3 className="font-serif text-[34px] leading-[38px]">Memories</h3>
        <div className="mt-3 flex gap-5 border-b border-border-subtle text-[15px]">
          <span className="border-b-2 border-text-primary pb-2 font-bold">Year</span>
          <span className="pb-2 text-text-secondary">Event</span>
          <span className="pb-2 text-text-secondary">Albums</span>
        </div>
        <p className="mt-4 text-[22px] font-bold">2026</p>
        <div className="mt-3 flex gap-3">
          {col([
            { h: 140, scene: 'plate', tone: 'terracotta', cap: 'Bad sandwich, great day', date: 'October' },
            { h: 200, scene: 'hills', tone: 'sage', cap: 'Jos, long weekend', date: 'August' },
            { h: 130, scene: 'sun', tone: 'rose', cap: 'Rooftop, nobody else there', date: 'June' },
          ])}
          {col([
            { h: 190, scene: 'window', tone: 'rose', cap: 'Rain, and nowhere to be', date: 'November' },
            { h: 150, scene: 'sun', tone: 'terracotta', cap: 'Window seat, 18:12', date: 'November' },
            { h: 160, scene: 'hills', tone: 'terracotta', cap: 'The drive back', date: 'July' },
          ])}
        </div>
      </div>
      <TabBar active="Memories" />
    </Phone>
  );
}

export function CalendarScreen({ scale }: P) {
  // November 2026, weeks start on Monday. 13 November 2026 is a Friday.
  const cells = [26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const dots: Record<number, string> = { 14: 'bg-terracotta-fill', 21: 'bg-sage-fill', 28: 'bg-rose-fill' };
  return (
    <Phone scale={scale} label="Calendar">
      <StatusBar />
      <div className="px-5 pt-3">
        <h3 className="font-serif text-[34px] leading-[38px]">November</h3>
        <div className="mt-4 grid grid-cols-7 text-center text-[12px] font-medium text-text-secondary">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <span key={i}>{d}</span>)}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-y-1 text-center">
          {cells.map((n, i) => {
            const out = i < 6;
            const today = !out && n === 13;
            return (
              <div key={i} className="flex h-[42px] flex-col items-center justify-center">
                <span className={`grid h-8 w-8 place-items-center rounded-full text-[15px] ${today ? 'bg-action-primary-bg font-bold text-action-primary-text' : out ? 'text-text-tertiary' : ''}`}>{n}</span>
                <span className={`mt-0.5 h-[5px] w-[5px] rounded-full ${!out && dots[n] ? dots[n] : 'bg-transparent'}`} />
              </div>
            );
          })}
        </div>
        <div className="mt-3"><Hair /></div>
        {[
          ['Sat 14, 7:30 pm', 'Dinner at Nkoyo’s', 'Shared', 'bg-terracotta-fill'],
          ['Sat 21', 'Weekend in Jos', 'Shared, Sam is going', 'bg-sage-fill'],
          ['Sat 28', 'Sam’s birthday', 'Reminder a week before', 'bg-rose-fill'],
        ].map(([t, n, c, d]) => (
          <div key={n} className="flex items-stretch gap-3 border-b border-border-subtle py-3">
            <span className={`w-[3px] rounded-full ${d}`} />
            <div><p className="t-caption">{t}</p><p className="text-[16px] font-medium">{n}</p><p className="text-[13px] text-text-secondary">{c}</p></div>
          </div>
        ))}
      </div>
      <TabBar active="Together" />
    </Phone>
  );
}

export function DailyScreen({ scale }: P) {
  return (
    <Phone scale={scale} label="Today's question">
      <StatusBar />
      <div className="px-6 pt-4">
        <p className="t-caption">Today&rsquo;s question</p>
        <h3 className="mt-2 font-serif text-[32px] leading-[37px]">What is something small that made you smile this week?</h3>
        <div className="mt-7 border-l-[3px] border-rose-fill pl-4">
          <p className="t-caption">You</p>
          <p className="mt-1 text-[17px] leading-[25px]">The way you hummed while making coffee. You didn&rsquo;t know you were doing it.</p>
        </div>
        <div className="mt-6 border-l-[3px] border-sage-fill pl-4">
          <p className="t-caption">Sam</p>
          <p className="mt-1 text-[17px] leading-[25px]">That you remembered the name of my dentist&rsquo;s receptionist.</p>
        </div>
        <p className="mt-10 text-[17px] font-medium">That&rsquo;s today&rsquo;s question done.</p>
        <p className="mt-1 text-[15px] text-text-secondary">Tomorrow&rsquo;s arrives in the morning.</p>
      </div>
    </Phone>
  );
}

export function LetterScreen({ scale }: P) {
  return (
    <Phone scale={scale} label="A letter">
      <StatusBar />
      <div className="px-5 pt-2">
        <p className="t-caption">A letter from Sam</p>
        <div className="mt-3 border border-border-subtle bg-bg-raised px-6 py-7">
          <p className="font-serif text-[22px] leading-[34px]">Ade,</p>
          <p className="mt-3 font-serif text-[19px] leading-[31px]">Eleven months ago I would not have believed I could be this calm about a Tuesday.</p>
          <p className="mt-3 font-serif text-[19px] leading-[31px]">Thank you for the quiet, and for the loud parts too. I kept this to read on our day.</p>
          <p className="mt-6 font-serif text-[19px] leading-[31px]">Yours,<br />S.</p>
        </div>
        <p className="t-caption mt-4">Arrived on your anniversary</p>
      </div>
    </Phone>
  );
}

export const screenComponents = {
  home: HomeScreen,
  welcome: WelcomeScreen,
  chat: ChatScreen,
  memories: MemoriesScreen,
  calendar: CalendarScreen,
  daily: DailyScreen,
  letter: LetterScreen,
} as const;
