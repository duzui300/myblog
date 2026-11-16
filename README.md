# A Catalogue of Curiosities

A static personal publication built with Astro. The site keeps writing and work in a single archive with a shared editorial system.

## Stack

- Astro 7 and TypeScript
- Markdown and MDX content collections
- KaTeX through `remark-math` and `rehype-katex`
- Static output with no client framework

## Development

```bash
npm install
npm run dev       # local dev server
npm run check     # Astro and TypeScript checks
npm run build     # static build to dist/
npm run preview   # preview the build
```

The project uses Node 24. The package lock is committed.

## Project map

```text
src/
  content/              Markdown entries by collection
  components/           navigation, figures, article parts, lists
  layouts/              MainLayout, SectionLayout, ContentLayout
  pages/                routes for the home page, sections, entries, search, and tags
  data/
    sections.ts         section metadata, navigation groups, star-map geometry
    site.ts             site title, description, volume, social links
  lib/
    content.ts          collection queries and archive helpers
    search-normalize.ts client-side query normalization
    rehype-language-sections.mjs
  styles/global.css     design tokens and shared styles
  content.config.ts     content collection schemas
public/
  favicon.svg
  images/               site images and the author avatar
  logo.svg
```

## Content model

Entries live in four collections under `src/content/`:

- `notes`
- `thoughts`
- `research`
- `projects`

Every entry has a title, date, language, tags, description, and optional reading time, series, dropcap, margin notes, and metadata. Collection-specific fields are defined in `src/content.config.ts`. The file name is the URL slug. Draft entries are excluded from production listings.

The first item in `lang` is the primary language. Multilingual entries may mark sections with headings such as `## 中文`, `## English`, and `## 日本語`; the Markdown pipeline adds the corresponding `lang` attributes to the sections that follow. Interface copy stays in English.

Math can use `$...$` or `$$...$$`. Display equations should be kept short; split long derivations into separate blocks rather than relying on `\begin{aligned}` with `&`.

## Pages

```text
/                         home
/writing/                 01 Writing
/work/                    02 Work
/notes/                   notes index
/thoughts/                thoughts index
/research/                research index
/projects/                projects index
/<section>/<slug>/        content entry
/about/                   about and colophon
/search/                  unified archive search
/tags/<tag>/              tag views
/search.json              generated search index
/index.xml                RSS
```

Redirects for retired paths are configured in `astro.config.mjs`.

## Search

`/search/` queries the build-time `search.json` index. The page supports live filtering, category browsing, popular tags, and a chronological archive. The implementation is a client-side substring match that handles English and CJK.

## Design system

`src/styles/global.css` contains the palette, type scale, paper textures, page layouts, prose styles, figures, and the day/night themes. The site has three visual modes:

- **The Library** for notes and thoughts
- **The Observatory** for research
- **The Frontier** for projects

The home page and section indexes use a star-map navigation system. Section metadata, constellation geometry, and panel copy live in `src/data/sections.ts`.

Language-aware typography is handled with `:lang()` rules and collection language metadata. Day and night themes share the same semantic tokens; use the existing custom properties rather than hard-coded colors.

## Deployment

The workflow at `.github/workflows/deploy.yml` builds the site and publishes `dist/` to the GitHub Pages repository with `peaceiris/actions-gh-pages@v4`. It runs on pushes to `main` and can be started manually.

Deployment requires a repository secret with write access to the Pages repository. The workflow replaces the published site, so do not run it until the build and content have been reviewed.
