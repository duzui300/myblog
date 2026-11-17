export const sections = [
  {
    key: 'notes',
    no: '01.1',
    groupLabel: '01 Writing',
    title: 'Notes',
    mode: 'The Library',
    modeKey: 'library',
    description:
      'Reading reflections, study notes, book summaries, and personal marginalia, kept close to the texts that prompted them.',
    panelDesc:
      'Reading reflections, study notes, book summaries, and personal marginalia, kept close to the texts that prompted them.',
    href: '/notes/',
    panelLabel: 'Enter the Notes',
    constellation: {
      paths: [
        'M 96 188 L 172 158 L 172 258 L 96 288 Z',
        'M 172 158 L 248 188 L 248 288 L 172 258 Z',
        'M 96 188 L 172 218 L 248 188',
        'M 172 218 L 172 258',
      ],
      stars: [
        { x: 96, y: 188, major: true },
        { x: 172, y: 158 },
        { x: 248, y: 188 },
        { x: 248, y: 288 },
        { x: 172, y: 258 },
        { x: 96, y: 288 },
        { x: 172, y: 218 },
      ],
      button: { left: '23.9%', top: '30.6%' },
      labelSide: 'right',
    },
  },
  {
    key: 'thoughts',
    no: '01.2',
    groupLabel: '01 Writing',
    title: 'Thoughts',
    mode: 'The Library',
    modeKey: 'library',
    description:
      'Reflections and personal essays on society, alienation, and culture, left open without forced conclusions.',
    panelDesc:
      'Reflections and personal essays on society, alienation, and culture, left open without forced conclusions.',
    href: '/thoughts/',
    panelLabel: 'Enter the Thoughts',
    constellation: {
      paths: [
        'M 430 214 C 438 164, 492 134, 546 150 C 606 168, 628 226, 596 268 C 564 308, 506 306, 484 268 C 462 230, 486 196, 520 196 C 548 196, 562 216, 552 236',
      ],
      stars: [
        { x: 430, y: 214, major: true },
        { x: 546, y: 150 },
        { x: 596, y: 268 },
        { x: 484, y: 268 },
        { x: 520, y: 196 },
        { x: 552, y: 236 },
      ],
      button: { left: '74.7%', top: '30.6%' },
      labelSide: 'left',
    },
  },
  {
    key: 'research',
    no: '02.1',
    groupLabel: '02 Work',
    title: 'Research',
    mode: 'The Observatory',
    modeKey: 'observatory',
    description:
      'Formal investigations, theoretical inquiries, academic abstracts, and working research notes across physics and computational fields.',
    panelDesc:
      'Formal investigations, theoretical inquiries, abstracts, and working notes across physics and computation.',
    href: '/research/',
    panelLabel: 'Enter the Research',
    constellation: {
      paths: [
        'M 108 412 C 108 366, 176 344, 240 364 C 308 386, 320 430, 258 454 C 196 476, 108 458, 108 412 Z',
        'M 224 410 L 292 382',
      ],
      stars: [
        { x: 224, y: 410, major: true },
        { x: 240, y: 364 },
        { x: 258, y: 454 },
        { x: 292, y: 382 },
        { x: 108, y: 412 },
      ],
      button: { left: '30.6%', top: '56.9%' },
      labelSide: 'right',
    },
  },
  {
    key: 'projects',
    no: '02.2',
    groupLabel: '02 Work',
    title: 'Projects',
    mode: 'The Frontier',
    modeKey: 'frontier',
    description:
      'Independent software, experimental tools, prototypes, and practical workstations built for learning and personal workflows.',
    panelDesc:
      'Independent software, experimental tools, prototypes, and workstations built for learning and personal workflows.',
    href: '/projects/',
    panelLabel: 'Enter the Projects',
    constellation: {
      paths: [
        'M 432 414 L 484 366 L 548 384 L 600 438 L 560 466 L 500 448 L 432 468 Z',
        'M 432 414 L 500 448 L 548 384',
        'M 484 366 L 500 448',
      ],
      stars: [
        { x: 432, y: 414, major: true },
        { x: 484, y: 366 },
        { x: 548, y: 384 },
        { x: 600, y: 438 },
        { x: 560, y: 466 },
        { x: 500, y: 448 },
        { x: 432, y: 468 },
      ],
      button: { left: '71.7%', top: '58.9%' },
      labelSide: 'left',
    },
  },
] as const;

export const minorNodes = [
  {
    key: 'about',
    no: '03.1',
    groupLabel: '03 Collection',
    title: 'About',
    mode: 'The Colophon',
    panelDesc:
      'The author, the working method, the three modes of this publication, and the colophon that closes the volume.',
    href: '/about/',
    panelLabel: 'Enter the About',
    constellation: {
      paths: [
        'M 128 548 C 128 538, 138 530, 150 530 C 162 530, 172 538, 172 548 C 172 558, 162 566, 150 566 C 138 566, 128 558, 128 548 Z',
        'M 128 548 L 172 548',
      ],
      stars: [
        { x: 150, y: 530 },
        { x: 172, y: 548 },
        { x: 150, y: 566 },
        { x: 128, y: 548 },
      ],
      core: { x: 128, y: 548 },
      button: { left: '20.8%', top: '76.1%' },
      labelSide: 'right',
    },
  },
  {
    key: 'selected',
    no: '03.2',
    groupLabel: '03 Collection',
    title: 'Selected',
    mode: 'The Selection',
    panelDesc:
      'A short shelf of entries chosen by hand, kept apart from the chronological record and the full archive.',
    href: '/selected/',
    panelLabel: 'Open the selection',
    constellation: {
      paths: [
        'M 270 616 L 290 600 L 310 616 L 290 632 Z',
        'M 270 616 L 310 616',
        'M 290 600 L 290 632',
      ],
      stars: [
        { x: 270, y: 616 },
        { x: 290, y: 600 },
        { x: 310, y: 616 },
        { x: 290, y: 632 },
      ],
      core: { x: 270, y: 616 },
      button: { left: '41.97%', top: '85.6%' },
      labelSide: 'right',
    },
  },
  {
    key: 'series',
    no: '03.3',
    groupLabel: '03 Collection',
    title: 'Series',
    mode: 'The Sequence',
    panelDesc:
      'Ordered sequences that carry a question across several entries, sometimes across more than one section.',
    href: '/series/',
    panelLabel: 'Open the series',
    constellation: {
      paths: [
        'M 376 527 C 386 511, 400 505, 416 511 C 432 517, 436 533, 424 541',
        'M 416 511 L 424 541',
      ],
      stars: [
        { x: 376, y: 527 },
        { x: 400, y: 507 },
        { x: 416, y: 511 },
        { x: 424, y: 541 },
      ],
      core: { x: 376, y: 527 },
      button: { left: '55.8%', top: '72.9%' },
      labelSide: 'right',
    },
  },
] as const;

export const searchEntry = {
  key: 'search',
  no: '—',
  groupLabel: '',
  title: 'Search',
  mode: 'The Archive',
  panelDesc:
    'Search the full text, or combine section, language, topic, tag, year, and series filters across the whole archive.',
  href: '/search/',
  panelLabel: 'Open the archive',
} as const;

export const mapGroups = [
  {
    label: '01 / WRITING',
    x: 72,
    y: 112,
    line: { x1: 72, y1: 120, x2: 648, y2: 120 },
  },
  {
    label: '02 / WORK',
    x: 72,
    y: 312,
    line: { x1: 72, y1: 320, x2: 648, y2: 320 },
  },
  {
    label: '03 / COLLECTION',
    x: 72,
    y: 492,
    line: { x1: 72, y1: 500, x2: 444, y2: 500 },
  },
  {
    label: 'THE ARCHIVE',
    x: 480,
    y: 492,
    line: { x1: 480, y1: 500, x2: 648, y2: 500 },
  },
] as const;

export const navGroups = [
  { no: '01', title: 'Writing', href: '/writing/', keys: ['notes', 'thoughts'] },
  { no: '02', title: 'Work', href: '/work/', keys: ['research', 'projects'] },
] as const;

export const telescope = {
  button: { left: '72.2%', top: '86.1%' },
  sight: { x1: 552, y1: 612, x2: 640, y2: 512 },
  star: { x: 640, y: 512 },
} as const;

export type Section = (typeof sections)[number];
export type SectionKey = Section['key'];
export type MinorNode = (typeof minorNodes)[number];
