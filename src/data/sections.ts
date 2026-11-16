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
  {
    key: 'about',
    no: '03',
    groupLabel: '03 About',
    title: 'About',
    mode: 'The Colophon',
    modeKey: 'about',
    description: 'The author, the method, and the modes of this publication.',
    panelDesc:
      'The author, the working method, the three modes of this publication, and the colophon that closes the volume.',
    href: '/about/',
    panelLabel: 'Enter the About',
    constellation: {
      paths: [
        'M 264 518 C 304 518, 330 544, 330 574 C 330 604, 304 630, 264 630 C 224 630, 198 604, 198 574 C 198 544, 224 518, 264 518 Z',
        'M 264 518 L 264 630',
        'M 198 574 L 330 574',
      ],
      stars: [
        { x: 264, y: 518, major: true },
        { x: 330, y: 574 },
        { x: 264, y: 630 },
        { x: 198, y: 574 },
        { x: 264, y: 574 },
      ],
      button: { left: '36.7%', top: '79.7%' },
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
    'Search notes, thoughts, research, and projects in one full-text index, or browse the chronological archive below.',
  href: '/search/',
  panelLabel: 'Open the archive search',
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
    label: '03 / ABOUT',
    x: 198,
    y: 492,
    line: { x1: 198, y1: 500, x2: 330, y2: 500 },
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
  button: { left: '72.2%', top: '81.9%' },
  sight: { x1: 552, y1: 556, x2: 640, y2: 512 },
  star: { x: 640, y: 512 },
} as const;

export type Section = (typeof sections)[number];
export type SectionKey = Section['key'];
