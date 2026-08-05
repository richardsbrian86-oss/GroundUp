const images = import.meta.glob(
  '@assets/generated_images/techniques/*.jpg',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

export function techniqueImage(filename?: string): string | undefined {
  if (!filename) return undefined;
  const entry = Object.entries(images).find(([k]) => k.endsWith('/' + filename));
  return entry?.[1];
}
