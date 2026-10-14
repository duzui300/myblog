# Blog state

Reference for the current shape of this blog. Companion to [`WORKLOG.md`](WORKLOG.md)
(what changed, when) and the `hugo-blog` skill (how to operate it).

Last reviewed: 2026-10-15.

## The one design decision everything else follows

**Language is a tag, not a URL tree.** There is exactly one site, one `/posts/` list and one
set of pages. Every post carries a language tag (`中文` / `日本語` / `English`), so
`/tags/中文/` *is* the Chinese view of the blog.

This replaced a trilingual config (`languages: en / ja / zh-hans`) that produced three
parallel trees (`/`, `/ja/`, `/zh-hans/`) with three menus, three taxonomy name sets, three
titles and three profile pages — and near-empty listings in ja and zh-hans. The cost per
language was a whole tree. Now adding Spanish means writing a post and tagging it.

Two consequences worth internalising:

- **`hugo.yaml` has no `languages:` block.** Consequently the menu (`menu.main`) and the
  taxonomies (`taxonomies:`) are top-level keys. They *only* ever existed inside
  `languages:` before, so removing it silently deleted both — that was the trap.
- **Language no longer lives in the filename.** `.en.md` / `.ja.md` / `.zh-hans.md` infixes
  are gone; dropping them was mandatory, since with no `languages:` the infix becomes part
  of the URL slug.

## Key facts

| Item | Value |
|---|---|
| Site root | `D:\blog\test` |
| Live site | https://duzui300.github.io/ |
| Hugo | v0.153.1 extended (global, WinGet — no venv, no node) |
| Theme | `themes/PaperMod`, git submodule pinned `7d061d5` |
| Config | `hugo.yaml` (YAML) |
| Content | `content/posts/*.md`, `content/{_index,archives,search}.md` |
| Source repo | `duzui300/myblog` (remote `source` — push here to publish) |
| Deploy repo | `duzui300.github.io` (remote `pages` — CI pushes, never push by hand) |
| CI | `.github/workflows/hugo.yaml` |

## Content model

Post front matter as it exists today:

```yaml
---
date: '2026-10-15T01:33:32+08:00'
draft: false
title: 'Some random thoughts'
tags: ["中文", "日本語", "English"]   # language tags drive /tags/<lang>/
aliases: ["/zh-hans/posts/old-slug/"]  # optional: redirect stub for a moved page
---
```

`params.languageTags` in `hugo.yaml` lists `["English", "中文", "日本語"]`. A tag in that list
renders as a chip; a tag outside it (e.g. `读书`) still filters correctly on `/tags/`, it just
shows no chip. So the list is cosmetic, not load-bearing.

### Posts

| File | draft | Layout | Tags | Aliases from |
|---|---|---|---|---|
| `posts/some-random-thoughts.md` | false | — | 中文, 日本語, English | — |
| `posts/cn-test.md` | false | — | 中文 | `/zh-hans/posts/test/` |
| `posts/coffee-break-spanish-notes.md` | false | — | English | — |
| `posts/language-learning-record.md` | false | — | English | — |
| `posts/odyssey-notes.md` | false | — | 中文 | `/zh-hans/posts/odyssey-notes/` |
| `posts/odyssey.md` | false | `odyssey` | 中文 | `/zh-hans/posts/odyssey/` |
| `posts/random-thoughts-1.md` | **true** | — | 中文 | `/zh-hans/posts/random-thoughts-1/` |
| `posts/test.md` | false | — | English | — |
| `posts/test1.md` | false | — | 读书, 中文 | `/zh-hans/posts/test1/` |
| `posts/異文化理解について.md` | false | — | 日本語 | `/ja/posts/異文化理解について/` |

`some-random-thoughts.md` is the odd one out: a single post holding its own Chinese, English
and Japanese text, with an `索引 / Index` line at the top linking to the three `##` sections.
It carries all three language tags so it surfaces in all three language views. A `<figure>`
above the index carries the screenshot the text refers to as 图一 (`static/images/1in8b.png`),
and the two translated sections open with an italic credit — `translated by Gemini` and
`Geminiによる翻訳` — since the Chinese section is the original.

`random-thoughts-1.md` is still `draft: true`, so it appears nowhere on the live site.

### Section and home pages

| File | Purpose | Aliases |
|---|---|---|
| `posts/_index.md` | `/posts/` listing | `/ja/posts/`, `/zh-hans/posts/` |
| `_index.md` | home (alias-only; profile mode renders it) | `/ja/`, `/zh-hans/` |
| `archives.md` | `/archives/`, `layout: archives` | `/ja/archives/`, `/zh-hans/archives/` |
| `search.md` | `/search/`, `layout: search` | `/ja/search/`, `/zh-hans/search/` |

### Redirects

Old per-language URLs are kept alive with `aliases:` front matter, which Hugo renders as
meta-refresh stubs — the only redirect mechanism available on server-less GitHub Pages. The
stale `/en/`, `/fa/`, `/fr/` trees 404, as do the old localized taxonomy pages
(`/ja/タグ/`, `/zh-hans/标签/`), since nothing links to them.

## Layout overrides

Site `layouts/` shadows `themes/PaperMod/layouts/` at the same path. All five files here exist
because editing the theme submodule is not an option (see gotchas).

| File | Why it exists |
|---|---|
| `_default/archives.html` | Lists *every* post on `/archives/` rather than only the default language's, and skips the archives/search pages themselves. |
| `_default/index.json` | Feeds the search page; same "every post, minus the archives/search pages" rule. Needs `outputs.home` to include `JSON`. |
| `_default/odyssey.html` | The bespoke magazine-style page for the post with `layout: "odyssey"`. Self-contained `<style>`. It bypasses `post_meta.html`, so that page shows no language chip — deliberate. |
| `partials/post_meta.html` | Fork of the theme partial, so it reaches list entries, archive entries and single pages at once (all three call it). Adds the language chip(s). |
| `partials/social_icons.html` | Adds the VRChat icon, delegating everything else to the theme partial. |

A `partials/header.html` fork used to live here to stop `absLangURL` prefixing shared menu
URLs. It was deleted when the site collapsed to one language — with one language there is no
prefix to fight, so the stock theme header is back.

## Deploy

Push to `source/main` → GitHub Actions → build → publish `public/` to `duzui300.github.io`.

```bash
hugo --gc --minify --cleanDestinationDir   # what CI runs
hugo server -D                             # local preview, drafts included
git push source main                       # publish
```

`--cleanDestinationDir` is load-bearing: without it, a build whose config changed can leave
orphaned pages in `public/` which CI then republishes wholesale.

`public/` is **gitignored**. It used to be tracked (86 files, 67 of them carrying
`localhost:1313` canonicals plus stale `/en/`, `/fa/`, `/fr/` trees), and CI republished all
of it — including stale `/ja/...` pages that would have shadowed the new redirects.

## Gotchas

Things that cost real time here, so they don't cost it twice:

- **`--minify` strips quotes from attributes.** Grepping `class="post-language"` finds
  nothing; it emits `class=post-language`. A "missing" chip is usually this, not a real bug.
- **`grep -c` counts lines, not occurrences.** On minified HTML — one long line — this
  under-reports badly. Use `grep -o | wc -l`.
- **CJK heading anchors work but look odd in `href`.** `## 中文` → `id=中文`, while the
  generated link is `href=#%E4%B8%AD%E6%96%87`. Fragments are decoded before matching, so it
  resolves. Verify with a build rather than reasoning about the anchorizer.
- **Hugo lowercases ASCII tag slugs but leaves CJK alone.** The `English` tag lives at
  `/tags/english/`; `中文` and `日本語` keep their characters.
- **Hugo's `strings.TrimSuffix` takes `(suffix, string)`** — the reverse of Go's order. Its
  `strings.HasPrefix`/`HasSuffix` use Go's order. Easy to get backwards.
- **HTML comments are stripped from rendered output.** Debug probes must be real elements,
  e.g. `<span hidden data-dbg="...">`.
- **Never edit `themes/PaperMod`.** It's a submodule pinned to `7d061d5`; CI re-fetches the
  pinned commit and local edits vanish silently. This bite once already (a VRChat SVG added
  inside the submodule broke every deploy). Override in site `layouts/` or
  `assets/css/extended/` instead.
- **`assets/css/extended/` is currently empty.** The hook works (PaperMod concatenates
  `css/extended/*.css` after all theme CSS) but nothing uses it right now — the background
  image was removed 2026-08. Note that PaperMod's `.list { background: var(--code-bg) }` makes
  `<body>` opaque, so a body background-image needs `body { background: transparent
  !important; }` or must go on `html`.
- **PaperMod adds `<a hidden class=anchor>` heading links** — handy confirmation that a
  heading got the id you expect.

## Open items

- `random-thoughts-1.md` is still `draft: true`.
- A stale `public/` copy from before the gitignore may still be sitting on disk. Harmless —
  it's ignored, and CI builds fresh.
- **`some-random-thoughts.md` has a junk `og:description`.** Hugo derives its auto summary
  from the opening content and PaperMod feeds that to `og:description`, so link previews read
  `图一 / Figure 1 索引 / Index: 中文 · English · 日本語 中文 感觉现代...`. A `description:` in
  that post's front matter fixes it. Any post that opens with a figure or nav line has the
  same problem.
- The same post's `索引` index sits below the screenshot, which at content width renders
  ~1520px tall — so the language jump links are a scroll away. Deliberate (the image was
  asked for "at the top"), but easy to swap if it annoys.
