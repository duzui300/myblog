import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeLanguageSections from './src/lib/rehype-language-sections.mjs';

export default defineConfig({
  site: 'https://duzui300.github.io',
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypeLanguageSections],
    }),
  },
  redirects: {
    '/posts/異文化理解について/': '/thoughts/ibunka-rikai/',
    '/ja/posts/異文化理解について/': '/thoughts/ibunka-rikai/',
    '/posts/': '/search/',
    '/ja/posts/': '/search/',
    '/zh-hans/posts/': '/search/',
    '/archives/': '/search/',
    '/odyssey/': '/thoughts/',
    '/library/': '/notes/',
    '/writings/': '/writing/',
    '/writings/ibunka-rikai/': '/thoughts/ibunka-rikai/',
    '/sitemap.xml': '/sitemap-index.xml',
    '/research/generalized-tfd-euclidean-note/': '/research/thermofield-double-state/',
  },
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
