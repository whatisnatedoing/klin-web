import manifest from '../content/screens.manifest.json';

export type ScreenKey = keyof typeof manifest.screens;
export const screens = manifest.screens as Record<ScreenKey, { label: string; status: string; source: string; feature: string }>;
