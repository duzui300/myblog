---
title: "obsidian自动导入工具"
date: 2026-10-08
lang: 中文
tags:
  - 软件与工具
  - Obsidian
description: "前天搞完了Obsidian配置，但是因为自己平常看书主要还是手机上的各种阅读器，readest/kindle/readi……"
reading: 2 min
dropcap: false
---

前天搞完了Obsidian配置，但是因为自己平常看书主要还是手机上的各种阅读器，readest/kindle/readify之类的，为了方便导入书摘笔记就自己写了个Android小工具：拾曜Obsiclip，用来看书时分享书摘自动按照对应的格式导入指定笔记的指定位置。

看书的时候就选取要记得那一段然后点分享选这个app之后就能自动添加到obsidian了。

功能大概就 1.自动清洗和格式生成：剔除分享引言、推广链接和尾注，把中英文硬换行重新拼成整句，套上可以自定义的 Markdown 引用模板。 2.定点写入：单独设置发送位置和书籍信息，通过 obsidian:// 协议直接追加写入指定笔记的指定小节（如 ##摘录），不破坏双链和索引。 3. 适配Kindle：不给分享时，下拉通知栏磁贴一键抓剪贴板；甚至做了一个无障碍功能，直接去 Kindle注解页自动滚屏批量抓取（这个可能有bug）。

<div class="image-pair">
  <figure>
    <img src="/images/posts/obsiclip-clipper-for-obsidian/post_06_image_1.webp" alt="" />
  </figure>
  <figure>
    <img src="/images/posts/obsiclip-clipper-for-obsidian/post_06_image_2.webp" alt="" />
  </figure>
</div>

需要安装移动端obsidian，并切obsidian安装了advanced URL。

完全本地运行，协议 AGPL-3.0开源。

最后kindle这个分享复制限制太逆天了，除了恶心正版消费者以外没有任何用处，一般时间都在折腾那个滚屏抓取了。

现在终于可以安心试着把obsidian集成到日常的读书生活了，折腾文具折腾麻了（虽然也挺好玩的

<div class="image-grid">
  <figure>
    <img src="/images/posts/obsiclip-clipper-for-obsidian/post_06_image_3.webp" alt="" />
  </figure>
  <figure>
    <img src="/images/posts/obsiclip-clipper-for-obsidian/post_06_image_4.webp" alt="" />
  </figure>
  <figure>
    <img src="/images/posts/obsiclip-clipper-for-obsidian/post_06_image_5.webp" alt="" />
  </figure>
</div>
