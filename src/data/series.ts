export const seriesRegistry = [
  {
    slug: 'sample-observatory',
    title: 'The Sample Observatory',
    description:
      'A draft sequence used to test ordered series across Notes and Thoughts. It exists for design review and should be removed before a real series takes its place.',
    order: 1,
    sample: true,
  },
  {
    slug: 'sample-instruments',
    title: 'Instruments for Reading',
    description:
      'A second draft sequence used to test a localized series, part ordering, and the series index.',
    order: 2,
    sample: true,
  },
] as const;

export type SeriesMeta = (typeof seriesRegistry)[number];

export function getSeriesMeta(slug: string): SeriesMeta | undefined {
  return seriesRegistry.find((item) => item.slug === slug);
}

export function getSeriesTitle(slug: string): string {
  const meta = getSeriesMeta(slug);
  if (meta) return meta.title;
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
