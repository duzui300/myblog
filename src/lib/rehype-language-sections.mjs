const HEADING_LANG = new Map([
  ['中文', 'zh-Hans'],
  ['English', 'en'],
  ['日本語', 'ja'],
  ['Abstract', 'en'],
  ['中文摘要', 'zh-Hans'],
]);

function textContent(node) {
  if (node.type === 'text') return node.value;
  if (!Array.isArray(node.children)) return '';
  return node.children.map(textContent).join('');
}

export default function rehypeLanguageSections() {
  return (tree) => {
    let lang = null;
    for (const node of tree.children ?? []) {
      if (node.type !== 'element') continue;
      if (/^h[1-6]$/.test(node.tagName)) {
        lang = HEADING_LANG.get(textContent(node).trim()) ?? null;
        if (lang) node.properties = { ...node.properties, lang };
        continue;
      }
      if (!lang) continue;
      node.properties = { ...node.properties, lang: node.properties?.lang ?? lang };
    }
  };
}
