import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllSummaries } from '../lib/content';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const entries = await getAllSummaries();
  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    items: entries.map((entry) => ({
      title: entry.title,
      pubDate: entry.date,
      description: entry.description,
      link: entry.href,
    })),
    customData: '<language>en</language>',
  });
}
