import { getCollection, type CollectionEntry } from 'astro:content';
import { getSeriesMeta, getSeriesTitle } from '../data/series';
import { selectedHrefs } from '../data/selected';
import {
  getTag,
  getTagLabel,
  getTagSearchTerms,
  getTopicLabel,
  getTopicSearchTerms,
  topics as topicRegistry,
  type TaxonomyLabels,
} from '../data/taxonomy';

export type ContentKey = 'notes' | 'thoughts' | 'research' | 'projects';

export type EntrySummary = {
  section: ContentKey;
  category: string;
  kind: string;
  group: string;
  title: string;
  href: string;
  date: Date;
  langs: string[];
  topics: string[];
  topicLabels: string[];
  tags: string[];
  tagLabels: string[];
  description: string;
  reading?: string;
  status?: string;
  year?: string;
  series?: string;
  seriesOrder?: number;
  seriesTitle?: string;
};

export type SearchEntry = {
  section: ContentKey;
  category: string;
  group: string;
  kind: string;
  title: string;
  href: string;
  date: string;
  langs: string[];
  topics: string[];
  topicLabels: string[];
  tags: string[];
  tagLabels: string[];
  description: string;
  series?: string;
  seriesOrder?: number;
  seriesTitle?: string;
  taxonomyAliases: string;
  body: string;
};

export type LanguageGroup = {
  lang: string;
  entries: EntrySummary[];
};

export type TagGroup = {
  id: string;
  labels: TaxonomyLabels;
  aliases: string[];
  description?: string;
  entries: EntrySummary[];
};

export type TopicGroup = {
  id: string;
  labels: TaxonomyLabels;
  aliases: string[];
  description: string;
  entries: EntrySummary[];
};

export type SeriesGroup = {
  slug: string;
  title: string;
  description?: string;
  order: number;
  sample: boolean;
  entries: EntrySummary[];
};

const sectionMeta: Record<
  ContentKey,
  { href: string; category: string; kind: string; group: string }
> = {
  notes: { href: '/notes/', category: 'Notes', kind: 'Note', group: '01 Writing' },
  thoughts: { href: '/thoughts/', category: 'Thoughts', kind: 'Thought', group: '01 Writing' },
  research: { href: '/research/', category: 'Research', kind: 'Research', group: '02 Work' },
  projects: { href: '/projects/', category: 'Projects', kind: 'Project', group: '02 Work' },
};

export function getSectionMeta(key: ContentKey) {
  return sectionMeta[key];
}

function isPublished<T extends { data: { draft: boolean } }>(entry: T): boolean {
  return !entry.data.draft || import.meta.env.DEV;
}

function byDateDesc<T extends { data: { date: Date } }>(a: T, b: T): number {
  return b.data.date.getTime() - a.data.date.getTime();
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10).replaceAll('-', '.');
}

export function langCode(lang: string): string {
  if (lang === '日本語') return 'ja';
  if (lang === '中文') return 'zh-Hans';
  return 'en';
}

export function isLanguageTag(tag: string): boolean {
  return tag === '中文' || tag === '日本語' || tag === 'English';
}

export function textLang(text: string): string {
  if (text === '日本語') return 'ja';
  if (text === '中文') return 'zh-Hans';
  if (/[぀-ヿㇰ-ㇿ]/.test(text)) return 'ja';
  if (/[㐀-鿿豈-﫿]/.test(text)) return 'zh-Hans';
  return 'en';
}

export async function getNoteEntries(): Promise<CollectionEntry<'notes'>[]> {
  return (await getCollection('notes')).filter(isPublished).sort(byDateDesc);
}

export async function getThoughtEntries(): Promise<CollectionEntry<'thoughts'>[]> {
  return (await getCollection('thoughts')).filter(isPublished).sort(byDateDesc);
}

export async function getResearchEntries(): Promise<CollectionEntry<'research'>[]> {
  return (await getCollection('research')).filter(isPublished).sort(byDateDesc);
}

export async function getProjectEntries(): Promise<CollectionEntry<'projects'>[]> {
  return (await getCollection('projects')).filter(isPublished).sort(byDateDesc);
}

type CommonData = {
  title: string;
  date: Date;
  lang: string[];
  topics: string[];
  tags: string[];
  description: string;
  reading?: string;
  series?: string;
  seriesOrder?: number;
};

function makeSummary(
  section: ContentKey,
  entry: { id: string; data: CommonData },
  kind: string,
): EntrySummary {
  const meta = sectionMeta[section];
  const primaryLang = entry.data.lang[0];
  return {
    section,
    category: meta.category,
    kind,
    group: meta.group,
    title: entry.data.title,
    href: `${meta.href}${entry.id}/`,
    date: entry.data.date,
    langs: entry.data.lang,
    topics: entry.data.topics,
    topicLabels: entry.data.topics.map((id) => getTopicLabel(id, primaryLang)),
    tags: entry.data.tags,
    tagLabels: entry.data.tags.map((id) => getTagLabel(id, primaryLang)),
    description: entry.data.description,
    reading: entry.data.reading,
    series: entry.data.series,
    seriesOrder: entry.data.seriesOrder,
    seriesTitle: entry.data.series ? getSeriesTitle(entry.data.series) : undefined,
  };
}

function projectSummary(entry: CollectionEntry<'projects'>): EntrySummary {
  return {
    ...makeSummary('projects', entry, 'Project'),
    status: entry.data.status,
    year: entry.data.year,
  };
}

export async function getSectionSummaries(section: ContentKey): Promise<EntrySummary[]> {
  if (section === 'notes') {
    return (await getNoteEntries()).map((entry) => makeSummary('notes', entry, 'Note'));
  }
  if (section === 'thoughts') {
    return (await getThoughtEntries()).map((entry) => makeSummary('thoughts', entry, 'Thought'));
  }
  if (section === 'research') {
    return (await getResearchEntries()).map((entry) =>
      makeSummary('research', entry, entry.data.kind),
    );
  }
  return (await getProjectEntries()).map(projectSummary);
}

export async function getAllSummaries(): Promise<EntrySummary[]> {
  const [notes, thoughts, research, projects] = await Promise.all([
    getSectionSummaries('notes'),
    getSectionSummaries('thoughts'),
    getSectionSummaries('research'),
    getSectionSummaries('projects'),
  ]);
  return [...notes, ...thoughts, ...research, ...projects].sort(
    (a, b) => b.date.getTime() - a.date.getTime(),
  );
}

export async function getRecent(limit = 4): Promise<EntrySummary[]> {
  return (await getAllSummaries()).slice(0, limit);
}

export async function getCategoryCounts(): Promise<Record<ContentKey, number>> {
  const counts: Record<ContentKey, number> = {
    notes: 0,
    thoughts: 0,
    research: 0,
    projects: 0,
  };
  for (const entry of await getAllSummaries()) {
    counts[entry.section] += 1;
  }
  return counts;
}

export async function getAdjacent(
  section: ContentKey,
  id: string,
): Promise<{ prev: EntrySummary | null; next: EntrySummary | null }> {
  const summaries = await getSectionSummaries(section);
  const index = summaries.findIndex(
    (entry) => entry.href === `${sectionMeta[section].href}${id}/`,
  );
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? summaries[index - 1] : null,
    next: index < summaries.length - 1 ? summaries[index + 1] : null,
  };
}

export async function getTags(): Promise<TagGroup[]> {
  const entries = await getAllSummaries();
  const map = new Map<string, EntrySummary[]>();
  for (const entry of entries) {
    for (const tag of new Set(entry.tags)) {
      const list = map.get(tag) ?? [];
      list.push(entry);
      map.set(tag, list);
    }
  }
  return [...map.entries()]
    .map(([id, list]) => {
      const meta = getTag(id);
      return {
        id,
        labels: meta?.labels ?? { zh: id, ja: id, en: id },
        aliases: meta?.aliases ?? [],
        description: meta?.description,
        entries: [...list].sort((a, b) => b.date.getTime() - a.date.getTime()),
      };
    })
    .sort((a, b) => a.labels.en.localeCompare(b.labels.en));
}

export async function getPopularTags(limit = 8): Promise<TagGroup[]> {
  return (await getTags())
    .sort(
      (a, b) =>
        b.entries.length - a.entries.length || a.labels.en.localeCompare(b.labels.en),
    )
    .slice(0, limit);
}

export async function getTopics(): Promise<TopicGroup[]> {
  const entries = await getAllSummaries();
  const map = new Map<string, EntrySummary[]>();
  for (const entry of entries) {
    for (const topic of new Set(entry.topics)) {
      const list = map.get(topic) ?? [];
      list.push(entry);
      map.set(topic, list);
    }
  }
  return topicRegistry
    .map((topic) => ({
      id: topic.id,
      labels: topic.labels,
      aliases: topic.aliases,
      description: topic.description,
      entries: [...(map.get(topic.id) ?? [])].sort(
        (a, b) => b.date.getTime() - a.date.getTime(),
      ),
    }))
    .filter((topic) => topic.entries.length > 0)
    .sort((a, b) => b.entries.length - a.entries.length || a.labels.en.localeCompare(b.labels.en));
}

export async function getLanguages(): Promise<LanguageGroup[]> {
  const entries = await getAllSummaries();
  const map = new Map<string, EntrySummary[]>();
  for (const entry of entries) {
    for (const lang of new Set(entry.langs)) {
      const list = map.get(lang) ?? [];
      list.push(entry);
      map.set(lang, list);
    }
  }
  return [...map.entries()]
    .map(([lang, list]) => ({
      lang,
      entries: [...list].sort((a, b) => b.date.getTime() - a.date.getTime()),
    }))
    .sort((a, b) => b.entries.length - a.entries.length || a.lang.localeCompare(b.lang));
}

export async function getSeriesGroups(): Promise<SeriesGroup[]> {
  const entries = await getAllSummaries();
  const map = new Map<string, EntrySummary[]>();
  for (const entry of entries) {
    if (!entry.series) continue;
    const list = map.get(entry.series) ?? [];
    list.push(entry);
    map.set(entry.series, list);
  }
  return [...map.entries()]
    .map(([slug, list]) => {
      const meta = getSeriesMeta(slug);
      return {
        slug,
        title: meta?.title ?? getSeriesTitle(slug),
        description: meta?.description,
        order: meta?.order ?? 999,
        sample: meta?.sample ?? false,
        entries: [...list].sort(
          (a, b) =>
            (a.seriesOrder ?? Number.MAX_SAFE_INTEGER) -
              (b.seriesOrder ?? Number.MAX_SAFE_INTEGER) ||
            a.date.getTime() - b.date.getTime(),
        ),
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export async function getSeriesGroup(slug: string): Promise<SeriesGroup | undefined> {
  return (await getSeriesGroups()).find((group) => group.slug === slug);
}

export async function getSelectedEntries(): Promise<EntrySummary[]> {
  const entries = await getAllSummaries();
  return selectedHrefs.flatMap((href) => {
    const entry = entries.find((item) => item.href === href);
    return entry ? [entry] : [];
  });
}

type SearchableEntry = {
  id: string;
  body?: string;
  data: CommonData;
};

function plainBody(body: string | undefined): string {
  return (body ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~()[\]!-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function makeSearchEntry(
  section: ContentKey,
  entry: SearchableEntry,
  kind: string,
): SearchEntry {
  const meta = sectionMeta[section];
  const taxonomyAliases = [
    ...new Set([
      ...entry.data.topics.flatMap((id) => getTopicSearchTerms(id)),
      ...entry.data.tags.flatMap((id) => getTagSearchTerms(id)),
    ]),
  ].join(' ');
  return {
    section,
    category: meta.category,
    group: meta.group,
    kind,
    title: entry.data.title,
    href: `${meta.href}${entry.id}/`,
    date: entry.data.date.toISOString(),
    langs: entry.data.lang,
    topics: entry.data.topics,
    topicLabels: entry.data.topics.map((id) => getTopicLabel(id, 'en')),
    tags: entry.data.tags,
    tagLabels: entry.data.tags.map((id) => getTagLabel(id, 'en')),
    description: entry.data.description,
    series: entry.data.series,
    seriesOrder: entry.data.seriesOrder,
    seriesTitle: entry.data.series ? getSeriesTitle(entry.data.series) : undefined,
    taxonomyAliases,
    body: plainBody(entry.body),
  };
}

export async function getSearchEntries(): Promise<SearchEntry[]> {
  const [notes, thoughts, research, projects] = await Promise.all([
    getNoteEntries(),
    getThoughtEntries(),
    getResearchEntries(),
    getProjectEntries(),
  ]);
  return [
    ...notes.map((entry) => makeSearchEntry('notes', entry, 'Note')),
    ...thoughts.map((entry) => makeSearchEntry('thoughts', entry, 'Thought')),
    ...research.map((entry) => makeSearchEntry('research', entry, entry.data.kind)),
    ...projects.map((entry) => makeSearchEntry('projects', entry, 'Project')),
  ].sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}
