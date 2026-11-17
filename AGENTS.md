# AGENTS.md

Instructions for AI agents working in this repository.

## Before editing

Read `README.md`, `astro.config.mjs`, `src/content.config.ts`, `src/data/sections.ts`, and `src/styles/global.css`. The site is an ongoing publication and will keep changing. Extend the existing system with focused changes instead of replacing working pages.

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Run `npm run check` and `npm run build` before reporting work as complete.

## Architecture

- `src/content/` holds the four content collections.
- `src/layouts/` owns page shells and the shared content layout.
- `src/pages/` owns routes, search, topics, tags, and generated files.
- `src/components/` owns reusable navigation, figures, lists, and article parts.
- `src/data/sections.ts` is the single source for section metadata, navigation groups, collection nodes, and star-map geometry.
- `src/data/taxonomy.ts` is the single source for topic and tag ids, multilingual labels, descriptions, and search aliases.
- `src/data/series.ts` holds human-authored series titles and descriptions.
- `src/data/selected.ts` holds the curated Selected hrefs.
- `src/lib/content.ts` owns collection queries, language views, topic/tag groups, series groups, and archive helpers.
- `src/styles/global.css` owns design tokens and shared styles.

Use the existing data flow. Do not duplicate section or entry metadata in components.

## Content rules

- Do not invent facts, quotes, dates, data, awards, or personal history.
- Never add a student number, supervisor, institution, degree, thesis PDF, or DOCX. Keep personal identifiers out of the archive.
- Do not publish private correspondence or identifiable details about other people without consent.
- Write in the language of the entry. For multilingual entries, set `lang` to an array and make the first item the primary language.
- Use `## 中文`, `## English`, and `## 日本語` section headings when an entry has distinct language sections. The build adds `lang` attributes to those sections.
- `topics` is the broad upper-level shelf; `tags` are specific concepts. Both fields contain canonical IDs from `src/data/taxonomy.ts`, never display labels. A Chinese entry about Japanese literature has `lang: 中文`, a Japan-related topic or tag ID, and no `日本語` tag.
- Add or rename taxonomy entries in `src/data/taxonomy.ts` first. The content schema rejects unknown topic and tag IDs.
- Keep language names out of topics and tags. Language is represented by `lang` and `/languages/<lang>/`.
- Use `series` with `seriesOrder` for ordered sequences. Register series metadata in `src/data/series.ts`. A series may cross collections.
- Keep descriptions specific and short. Do not use promotional or generic marketing language.
- Use the frontmatter schema in `src/content.config.ts`. The file name is the URL slug.
- Use `$...$` or `$$...$$` for math. Keep display equations short enough to read on a narrow screen.
- Store site images and the author avatar under `public/images/` and reference them from the site root.

## Entry templates

### Notes

```md
---
title: ""
date: YYYY-MM-DD
lang: 中文
topics: [] # canonical IDs from src/data/taxonomy.ts
tags: []   # canonical IDs from src/data/taxonomy.ts
description: ""
reading: 6 min
dropcap: false
# series: sample-observatory
# seriesOrder: 1
margin: []
---

Start from the source and the reading situation. Record what the text says, the concepts worth keeping, the passages you want to return to, and what remains unresolved.
```

### Thoughts

```md
---
title: ""
date: YYYY-MM-DD
lang: 中文
topics: [] # canonical IDs from src/data/taxonomy.ts
tags: []   # canonical IDs from src/data/taxonomy.ts
description: ""
reading: 8 min
dropcap: false
figure: chord
# series: sample-observatory
# seriesOrder: 1
margin: []
---

Begin with a concrete scene, conversation, or question. Include a turn in the argument. End on an open judgment instead of forcing a resolution. Use sections only when the piece is long enough to need them.
```

### Research

```md
---
title: ""
date: YYYY-MM-DD
lang: 中文
kind: Research note
topics: [] # canonical IDs from src/data/taxonomy.ts
tags: []   # canonical IDs from src/data/taxonomy.ts
description: ""
reading: 10 min
dropcap: false
figure: thermal
# series: sample-observatory
# seriesOrder: 1
margin: []
---

## Abstract

<What question the note addresses and what it finds.>

## 1. <Section>

<Definitions, assumptions, method, results, limits, and references.>
```

Use `## 中文` and `## English` or `## 中文摘要` and `## Abstract` for parallel language sections. Keep the thesis-appropriate privacy rules above.

### Projects

```md
---
title: ""
date: YYYY-MM-DD
lang: English
kind: Project
topics: [] # canonical IDs from src/data/taxonomy.ts
tags: []   # canonical IDs from src/data/taxonomy.ts
description: ""
reading: Case study
year: 2026 —
status: Ongoing
role: ""
stack: ""
link: ""
figure: folded
# series: sample-observatory
# seriesOrder: 1
margin: []
---

## 01 / The idea

<What the project is and the problem it addresses.>

## 02 / The shape

<The core loop, main interface, and constraints.>

## 03 / Stack and status

<What exists, the technical choices, and what remains.>
```

## Interface rules

- Use the semantic tokens in `global.css`; do not hard-code new palette values.
- Preserve the Library, Observatory, and Frontier modes and the day/night themes.
- Keep CJK text on its language-specific font stack. New display text needs an appropriate `lang` attribute.
- Respect `prefers-reduced-motion` for animation work.
- Keep the star map, running folio, TOC, and search behavior intact unless the task explicitly changes them.
- Check keyboard focus, touch targets, and horizontal overflow when changing layout or controls.

## Verification

For visual changes, check at least 1440px, 1024px, 768px, and 390px in both day and night themes. Confirm that the page has no horizontal overflow and that the running folio, TOC, search, section filters, language views, series views, and star-map interactions still work. Section and search filters should restore from URL parameters and reset cleanly.

For content changes, run `npm run check` and `npm run build`, then inspect the generated page at the affected route.

## Git and deployment

- Do not commit, push, or deploy unless explicitly asked.
- Deployment replaces the public GitHub Pages site. Treat a push to the deployment branch as destructive and confirm before running it.
- Do not read or write repository secrets.
- Do not modify the old Hugo site or its files.
