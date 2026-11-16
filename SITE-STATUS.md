# Site status

Last updated: 2026-11-16

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

## Stack

- Astro `7.4.12`
- Node `24`
- Markdown and MDX content collections
- KaTeX through `remark-math` and `rehype-katex`
- Static output, no client framework
- GitHub Actions deployment through `peaceiris/actions-gh-pages@v4`

## Content

- Notes: 23 entries
- Thoughts: 49 entries
- Research: 1 entry
- Projects: 2 entries
- Searchable archive: 75 entries
- Static build: 164 pages

The archive is public. It contains no student number, supervisor, institution, degree, thesis PDF, or DOCX. Multilingual entries use `lang` arrays and language-section headings.

## Shipped

- Home frontispiece with star-map navigation and five section constellations
- Notes, Thoughts, Research, and Projects indexes and entry routes
- Unified client-side search with category browsing, tags, and chronological archive
- Running folio, table of contents, margin notes, pager, and RSS
- Day and night themes with persistent local storage
- CJK-aware font routing and section-level `lang` annotations
- KaTeX display equations and inline code styling
- Responsive entry layout with a 1120px single-column breakpoint
- Author avatar on the home page
- About page colophon, social links, mode legend, and About plate image
- Simplified star-ring and column favicon
- `AGENTS.md` with repository rules and entry templates for all four collections

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
- Local safety branches: `backup/main-pre-squash`, `backup/direction-two-pre-rebase`.
- The old Hugo source folder `D:\blog\test` still exists locally and is no longer used by deployment. Its deletion was requested but blocked by the local safety check.
- The remote `myblog` Hugo history was replaced by the single-commit Astro history.

## Known limits

- Search renders the first 30 matches and reports that limit in the status line.
- The empty TOC rail on articles without headings remains because the A-02 layout change was reverted.
- GitHub Actions reports a non-blocking Node 20 deprecation warning for `actions/checkout` and `actions/setup-node`.
- The final Pages publish step depends on the repository secret having write access to the Pages repository.
