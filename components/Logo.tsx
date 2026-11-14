import { SYMBOL_PATH, SYMBOL_VIEWBOX, WORDMARK_PATH, WORDMARK_VIEWBOX } from './brand-paths';

type Props = { className?: string; title?: string };

/** The klin wordmark. It takes the current text colour, so it follows light and dark themes. */
export function Wordmark({ className, title = 'Klin' }: Props) {
  return (
    <svg viewBox={WORDMARK_VIEWBOX} className={className} role="img" aria-label={title} fill="none">
      <path d={WORDMARK_PATH} fill="currentColor" />
    </svg>
  );
}

/** The k on its own. */
export function Symbol({ className, title = 'Klin' }: Props) {
  return (
    <svg viewBox={SYMBOL_VIEWBOX} className={className} role="img" aria-label={title} fill="none">
      <path d={SYMBOL_PATH} fill="currentColor" />
    </svg>
  );
}
