# Work log

Chronological record of changes to this blog. Newest first.
State reference: [`BLOG-STATE.md`](BLOG-STATE.md).

---

## 2026-10-15 — trilingual post in a single file + multi-chip fix

**Added** `content/posts/some-random-thoughts.md` — one post holding the Chinese original and
its English and Japanese translations, in that order, under `## 中文` / `## English` /
`## 日本語` headings, with an `索引 / Index` line at the top linking to the three sections.
Tagged `["中文", "日本語", "English"]` so it appears in all three language views. `ShowToc:
false` on this post, so the theme TOC doesn't compete with the hand-written index.

Original text preserved verbatim, including the trailing emoji; no copy-editing of the
source's wording or typos. Section headings are the language names rather than each
translation's own title (一点迷思 / Some random thoughts / ふとした思索), since those three are
translations of the one page title.

**Fixed** `layouts/partials/post_meta.html`. It accumulated the language chip into a single
variable, overwriting on each match, so a post carrying three language tags rendered one
arbitrary chip (`English`, the last tag). It now walks `params.languageTags` and emits one
chip per match — deterministic order, and correct for multi-language posts. Single-language
posts render exactly as before.

Renamed the post during review: it was created as `一点迷思.md` (title `一点迷思`) and renamed
to `some-random-thoughts.md` with an English title. Free at this point — nothing had been
published, so no redirect stub was needed.

**Added the 图一 screenshot** (`1e873ca`, follow-up) at the top of the post —
`static/images/1in8b.png`, 1268×2756, in a `<figure>` whose caption names it 图一 / Figure 1,
since the text refers to it by number in all three languages. Sits above the index line, so
at content width it renders ~1520px tall and pushes the index down a scroll. Raw HTML passes
through because `markup.goldmark.renderer.unsafe` is `true`.

**Credited the translations** (`ad8f49c`, follow-up): an italic `translated by Gemini` opens
the English section, `Geminiによる翻訳` the Japanese one. The Chinese section is the original
and gets neither.

**Verified** locally: `hugo --gc --minify --cleanDestinationDir` clean; the index anchors
resolve (`id=中文` / `id=english` / `id=日本語`); chips correct on the single page, `/posts/`
and `/archives/`, with no regression on the single-language posts; `/tags/中文/` 4→5,
`/tags/日本語/` 1→2, `/tags/english/` 3→4; `index.json` has 9 entries.

---

## 2026-10-06 — collapse to one site: language becomes a tag

Commit `b62fee7` — *collapse to one site: language becomes a tag, not a URL tree*.

**Removed** the 124-line `languages:` block from `hugo.yaml`. The menu and all taxonomies
lived *inside* it, so both were re-added at top level.

**Renamed** every post to drop its language infix (which had become part of the slug, since
with no `languages:` there is no infix mechanism), moved language into `tags:`, and added
`aliases:` so the old `/ja/...` and `/zh-hans/...` URLs redirect. `test.zh-hans.md` collided
with `test.en.md` and became `cn-test.md`. `test1.md`'s inert singular `tag:` key was migrated
to `tags:` so its `读书` tag actually worked.

**Replaced** `_index.ja.md` + `_index.zh-hans.md` with one `posts/_index.md`; added a home
`_index.md` carrying only aliases.

**Simplified** `layouts/_default/archives.html` and `layouts/_default/index.json` from
`range site.Sites` back to `site.RegularPages`, now that there is only one site to walk.
**Added** `layouts/partials/post_meta.html` (the language chip). **Deleted**
`layouts/partials/header.html` — its only job was stopping `absLangURL` prefixing shared menu
URLs, and with one language there is no prefix.

**Deploy hygiene** — this was load-bearing, not cleanup. `public/` was 86 tracked files and
stale (67 with `localhost:1313` canonicals, plus `/en/`, `/fa/`, `/fr/` trees for languages
the config no longer had), and CI ran `hugo --minify` with no `--cleanDestinationDir` before
publishing `./public` wholesale. The stale `/ja/...` pages would have shadowed the new
redirects. Added `--cleanDestinationDir` to CI, untracked `public/`, and added `.gitignore`.

**Verified** live: `/archives/` 8 entries / 8 chips, `/tags/` exposes english + 中文 + 日本語 +
读书 with working per-language views, all old URLs redirect, and the stale `/en/`, `/fa/`,
`/fr/`, `/ja/タグ/`, `/zh-hans/标签/` trees now 404.

---

## 2026-10-06 — unify archive and search

Commit `0ab8d8a` — *unify archive and search into one page shared by all languages*.

Made `/archives/` and `/search/` single pages aggregating every language, deleting the
per-language `archives.{ja,zh-hans}.md` / `search.{ja,zh-hans}.md`, pointing the ja/zh menus
at the shared URLs, and keeping the trilingual post URLs. Added `layouts/_default/archives.html`
and `layouts/_default/index.json` to walk `site.Sites`, and `layouts/partials/header.html` to
stop `absLangURL` prefixing the shared menu URLs. (That header fork was removed in the
collapse, below.)

---

## 2026-08-26 — initial site build-out

Chronological, oldest first:

| Commit | Change |
|---|---|
| `c852afa` | fix: restore vrchat social icon via site layout override |
| `faeb708` | ci: bump actions (checkout v4, hugo v3, gh-pages v4), drop placeholder cname |
| `aa4c5aa` | add archives and search pages (en/ja/zh-hans) |
| `cdc9f5c` | add background image to site + custom extended css |
| `9bddee3` | fix: make body transparent so bg image shows through |
| `90f2561` | Revert "fix: make body transparent so bg image shows through" |
| `09ce641` | remove background image |
| `c1992e4` | add odyssey reading notes post (zh-hans) |
| `cd42e9c` | add odyssey magazine-style page |
| `f4692b2` | move odyssey magazine page into zh posts |

The background-image episode is worth remembering: PaperMod's `.list { background:
var(--code-bg) }` makes `<body>` opaque, so a body background-image is invisible without
`body { background: transparent !important; }`. The fix was applied, reverted, and the
feature dropped. `assets/css/extended/` has been empty since.
