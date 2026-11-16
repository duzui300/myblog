import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const language = z.enum(['中文', '日本語', 'English']);
const langField = z
  .union([language, z.array(language).min(1)])
  .transform((value) => (Array.isArray(value) ? value : [value]));

const common = {
  title: z.string(),
  date: z.coerce.date(),
  lang: langField,
  tags: z.array(z.string()).default([]),
  description: z.string(),
  draft: z.boolean().default(false),
  reading: z.string().optional(),
  series: z.string().optional(),
  dropcap: z.boolean().default(false),
  margin: z.array(z.object({ label: z.string(), text: z.string() })).default([]),
  meta: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
};

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({ ...common }),
});

const thoughts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/thoughts' }),
  schema: z.object({
    ...common,
    figure: z.enum(['chord']).optional(),
  }),
});

const heroFigures = z.enum(['thermal', 'folded', 'diglot', 'annotation']);

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    ...common,
    kind: z.enum(['Thesis', 'Research note']).default('Research note'),
    figure: heroFigures.default('thermal'),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    ...common,
    kind: z.literal('Project').default('Project'),
    year: z.string(),
    status: z.enum(['Ongoing', 'Archived', 'Planned']).default('Ongoing'),
    role: z.string().optional(),
    stack: z.string().optional(),
    link: z.string().optional(),
    figure: heroFigures.default('folded'),
  }),
});

export const collections = { notes, thoughts, research, projects };
