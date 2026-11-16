import { getCollection, type CollectionEntry } from 'astro:content';

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
  tags: string[];
  description: string;
  reading?: string;
  status?: string;
  year?: string;
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
  tags: string[];
  description: string;
  body: string;
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
  tags: string[];
  description: string;
  reading?: string;
};

function makeSummary(
  section: ContentKey,
  entry: { id: string; data: CommonData },
  kind: string,
): EntrySummary {
  const meta = sectionMeta[section];
  return {
    section,
    category: meta.category,
    kind,
    group: meta.group,
    title: entry.data.title,
    href: `${meta.href}${entry.id}/`,
    date: entry.data.date,
    langs: entry.data.lang,
    tags: entry.data.tags,
    description: entry.data.description,
    reading: entry.data.reading,
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

export async function getTags(): Promise<{ tag: string; entries: EntrySummary[] }[]> {
  const entries = await getAllSummaries();
  const map = new Map<string, EntrySummary[]>();
  for (const entry of entries) {
    for (const tag of [...entry.langs, ...entry.tags]) {
      const list = map.get(tag) ?? [];
      list.push(entry);
      map.set(tag, list);
    }
  }
  return [...map.entries()]
    .map(([tag, list]) => ({
      tag,
      entries: list.sort((a, b) => b.date.getTime() - a.date.getTime()),
    }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

export async function getPopularTags(
  limit = 8,
): Promise<{ tag: string; entries: EntrySummary[] }[]> {
  return (await getTags())
    .filter(({ tag }) => !isLanguageTag(tag))
    .sort((a, b) => b.entries.length - a.entries.length || a.tag.localeCompare(b.tag))
    .slice(0, limit);
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
  return {
    section,
    category: meta.category,
    group: meta.group,
    kind,
    title: entry.data.title,
    href: `${meta.href}${entry.id}/`,
    date: entry.data.date.toISOString(),
    langs: entry.data.lang,
    tags: entry.data.tags,
    description: entry.data.description,
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
