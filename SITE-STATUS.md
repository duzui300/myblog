# Site status

Last updated: 2026-11-17

## Live site

- URL: https://duzui300.github.io/
- Source repository: https://github.com/duzui300/myblog
- Pages repository: https://github.com/duzui300/duzui300.github.io
- Pages source: `main` branch, repository root, legacy build
- Current live title: `A Catalogue of Curiosities / Duzui`
- Initial publication commit: `298a465` (`Publish A Catalogue of Curiosities`)
- Deployment source: the current `main` branch
- Deploy workflow: `.github/workflows/deploy.yml`
- Last verified Pages build: 2026-11-16 05:05 UTC

The live site does not include the local library changes described below yet.

## Stack

- Astro `7.4.12`
- Node `24`
- Markdown and MDX content collections
- KaTeX through `remark-math` and `rehype-katex`
- Static output, no client framework
- GitHub Actions deployment through `peaceiris/actions-gh-pages@v4`

## Content

Production build:

- Notes: 27 entries
- Thoughts: 65 entries
- Research: 1 entry
- Projects: 2 entries
- Searchable archive: 95 entries
- Static build: 209 pages

Development also shows five draft sample entries used to test series ordering and cross-section series pages. They are excluded from the production build.

The archive is public. It contains no student number, supervisor, institution, degree, thesis PDF, or DOCX. Multilingual entries use `lang` arrays and language-section headings.

The taxonomy registry holds 11 topics and 85 canonical tags, each with Chinese, Japanese, and English labels, descriptions, and search aliases. All 95 entries were migrated from display-label tags to canonical IDs. The schema rejects unknown IDs. Retired tag URLs redirect to canonical tag routes, topic routes, language routes, or search.

## Shipped

- Home frontispiece with star-map navigation and the four section constellations
- Smaller About, Selected, and Series collection marks on the star map, plus the archive telescope
- Notes, Thoughts, Research, and Projects indexes and entry routes
- Canonical taxonomy in `src/data/taxonomy.ts`: 11 topics, 85 tags, multilingual labels, descriptions, and aliases
- `/topics/` index and 11 topic pages; `/tags/` index and 85 canonical tag pages
- Topic and tag chips on entry pages and the entry band
- Section filters for language, topic, tag, year, and series where those facets exist, filtering by canonical IDs and displaying localized labels
- Unified client-side search with combinable section, language, topic, tag, year, and series filters, indexing labels and aliases
- Global `/languages/<lang>/` views generated from entry `lang` values, separate from tag routes
- `/series/` index and dynamic `/series/<slug>/` views with ordered parts
- `/selected/` route with the first curated entry, `異文化理解について`
- Draft sample series for design review
- Running folio, table of contents, margin notes, pager, and RSS
- Day and night themes with persistent local storage
- CJK-aware font routing and section-level `lang` annotations
- KaTeX display equations and inline code styling
- Responsive entry layout with a 1120px single-column breakpoint
- Author avatar on the home page
- About page colophon, social links, mode legend, and About plate image
- Simplified star-ring and column favicon
- `AGENTS.md` with repository rules and entry templates for all four collections

## Current local work

The working tree contains the language, filter, series, selected, star-map, and taxonomy-migration changes. They pass `npm run check` and `npm run build` locally but have not been committed or deployed.

The taxonomy migration covers `src/data/taxonomy.ts`, all 95 entry frontmatter blocks, the content schema, tag and topic routes, search aliases, filters, and entry chips. Retired label-based tag URLs were intentionally dropped instead of redirected.

Open decisions and limits:

- `src/data/selected.ts` currently contains one entry and is ready for more.
- Series samples are drafts. Set `draft: false` only when a sample should become public.
- Search renders the first 30 matches and reports that limit in the status line.
- Old label-based tag URLs now 404 by design. Tag routes exist only as canonical IDs.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`. The workflow runs `npm ci`, `npm run build`, and publishes `dist/` to the Pages repository. The repository-level token secret used by the workflow must remain available.

The first Pages build after the migration remained in `building`. A manual Pages rebuild completed successfully. If the same thing happens again, trigger a rebuild:

```bash
gh api -X POST repos/duzui300/duzui300.github.io/pages/builds
gh api repos/duzui300/duzui300.github.io/pages/builds/latest --jq '.status'
```

Verify a deploy with:

```bash
curl -sL https://duzui300.github.io/ | grep '<title>'
curl -sI https://duzui300.github.io/ | grep -i last-modified
```

## Git state

- The published history is linear on `main`. The initial publication is commit `298a465`; later entries are normal content commits.
- Latest content commit before the current local work: `685dc4f` (`Expand the archive with new entries and media`).
- The current library changes are uncommitted.
- Local safety branches: `backup/main-pre-squash`, `backup/direction-two-pre-rebase`.
- The old Hugo source folder `D:\blog\test` still exists locally and is no longer used by deployment. Its deletion was requested but blocked by the local safety check.
- The remote `myblog` Hugo history was replaced by the single-commit Astro history.

## Known limits

- The empty TOC rail on articles without headings remains because the A-02 layout change was reverted.
- GitHub Actions reports a non-blocking Node 20 deprecation warning for `actions/checkout` and `actions/setup-node`.
- The final Pages publish step depends on the repository secret having write access to the Pages repository.
