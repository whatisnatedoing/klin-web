// Fails a launch build while any website screenshot slot is still a design preview.
import { readFileSync } from 'node:fs';
const m = JSON.parse(readFileSync(new URL('../content/screens.manifest.json', import.meta.url), 'utf8'));
const strict = process.env.NEXT_PUBLIC_LAUNCH_STATE === 'live' || process.env.KLIN_REQUIRE_CAPTURED === '1';
const previews = Object.entries(m.screens).filter(([, s]) => s.status === 'preview');
if (previews.length === 0) console.log('All website screens are real captures.');
else if (strict) {
  console.error(`Launch build blocked: ${previews.length} screen(s) are still design previews:`);
  for (const [k, s] of previews) console.error(`  - ${k}: ${s.label} (${s.feature})`);
  process.exit(1);
} else console.log(`Note: ${previews.length} website screen(s) are design previews. This build must not be published publicly.`);
