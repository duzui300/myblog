export type TaxonomyLabels = {
  zh: string;
  ja: string;
  en: string;
};

export type TaxonomyEntry = {
  id: string;
  labels: TaxonomyLabels;
  aliases: string[];
  description: string;
};

export const topics: TaxonomyEntry[] = [
  {
    id: "mindset",
    labels: { zh: "心境", ja: "心境", en: "Mindset" },
    aliases: ["心境", "随想", "情绪", "内省", "reflections", "mindset"],
    description: "Personal reflections on inner states, self-identity, the passage of time, and existential questions.",
  },
  {
    id: "music",
    labels: { zh: "音乐", ja: "音楽", en: "Music" },
    aliases: ["音乐", "音楽", "music", "现场音乐", "独立音乐"],
    description: "Live performances, bands, musical genres, instrumental practice, and independent music culture.",
  },
  {
    id: "travel",
    labels: { zh: "行旅", ja: "旅・行旅", en: "Travel" },
    aliases: ["行旅", "出行", "旅", "旅行", "travel", "journey"],
    description: "Urban wandering, natural landscapes, shifting campuses, and the experience of departure and return.",
  },
  {
    id: "society",
    labels: { zh: "社会", ja: "社会", en: "Society" },
    aliases: ["社会", "社会与法", "society", "社会思考"],
    description: "Reflections on historical events, modern civilization, legal systems, social order, and institutional structures.",
  },
  {
    id: "games",
    labels: { zh: "游戏", ja: "ゲーム", en: "Games" },
    aliases: ["游戏", "ゲーム", "games", "gaming", "ACG"],
    description: "Criticism of video games, level mechanics, interactive narrative, virtual spaces, and gaming hardware.",
  },
  {
    id: "reading",
    labels: { zh: "阅读", ja: "読書", en: "Reading" },
    aliases: ["阅读", "读书", "読書", "reading", "书籍"],
    description: "Close reading of books, independent and secondhand bookshops, publishing, and personal library workflows.",
  },
  {
    id: "physics",
    labels: { zh: "物理", ja: "物理学", en: "Physics" },
    aliases: ["物理", "物理学", "physics", "理论物理"],
    description: "Theoretical physics, quantum field theory, spacetime geometry, gravity, and black hole thermodynamics.",
  },
  {
    id: "humanities",
    labels: { zh: "人文", ja: "人文学", en: "Humanities" },
    aliases: ["人文", "人文学", "humanities", "古典人文"],
    description: "Classical literature, oral traditions, Latin philology, religious studies, and anthropological inquiry.",
  },
  {
    id: "tools",
    labels: { zh: "工具", ja: "ツール", en: "Tools" },
    aliases: ["工具", "软件与工具", "tools", "生产力工具", "效率工具"],
    description: "Local-first desktop software, personal knowledge systems, scripting utilities, and generative interface experiments.",
  },
  {
    id: "language",
    labels: { zh: "语言", ja: "言語", en: "Language" },
    aliases: ["语言", "言語", "language", "多语言"],
    description: "Second-language acquisition, multilingual study, diglot reading theory, and questions in cognitive linguistics.",
  },
  {
    id: "moving-image",
    labels: { zh: "影像", ja: "映像", en: "Moving Image" },
    aliases: ["影像", "映像", "moving image", "影视", "视听艺术"],
    description: "Feature films, animation, filmed stage works, and the audiovisual language of screen narrative.",
  },
];

export const tags: TaxonomyEntry[] = [
  {
    id: "ai",
    labels: { zh: "AI", ja: "人工知能", en: "AI" },
    aliases: ["AI", "人工智能", "LLM", "大语言模型"],
    description: "大语言模型人机交互、情感链接与生成式辅助思考。",
  },
  {
    id: "alan-wake-2",
    labels: { zh: "心灵杀手2", ja: "Alan Wake 2", en: "Alan Wake 2" },
    aliases: ["心灵杀手2", "Alan Wake 2", "心灵杀手 2"],
    description: "Remedy 出品的超自然悬疑心理恐怖游戏《心灵杀手 2》。",
  },
  {
    id: "anthropology",
    labels: { zh: "人类学", ja: "人類学", en: "Anthropology" },
    aliases: ["人类学", "anthropology", "文化人类学"],
    description: "时间人类学视角、《その日暮らしの人類学》生活哲学研读。",
  },
  {
    id: "armored-core-6",
    labels: { zh: "装甲核心6", ja: "アーマード・コア6", en: "Armored Core 6" },
    aliases: ["装甲核心6", "AC6", "Armored Core VI", "装甲核心 6"],
    description: "FromSoftware 开发的机甲动作硬核游戏《装甲核心 6》。",
  },
  {
    id: "article-20",
    labels: { zh: "第二十条", ja: "第二十条", en: "Article 20" },
    aliases: ["第二十条", "Article 20", "电影第二十条"],
    description: "现实主义院线电影《第二十条》观后随笔与司法正当防卫反思。",
  },
  {
    id: "atlus",
    labels: { zh: "Atlus", ja: "アトラス", en: "Atlus" },
    aliases: ["Atlus", "阿特拉斯", "アトラス"],
    description: "日本知名 RPG 游戏开发商 Atlus。",
  },
  {
    id: "audiovisual-language",
    labels: { zh: "视听语言", ja: "映像言語", en: "Audiovisual Language" },
    aliases: ["视听语言", "视听美学", "视听叙事", "影像改编", "映像言語", "audiovisual language"],
    description: "电影镜头、分镜叙事、声音设计与动态画面美学剖析。",
  },
  {
    id: "bakumatsu",
    labels: { zh: "幕末", ja: "幕末", en: "Bakumatsu" },
    aliases: ["幕末", "Bakumatsu", "幕府末期"],
    description: "日本幕末维新时期的历史风云、浪漫激荡与现实残酷。",
  },
  {
    id: "bandai-namco",
    labels: { zh: "万代南梦宫", ja: "バンダイナムコ", en: "Bandai Namco" },
    aliases: ["万代南梦宫", "Bandai Namco", "万代", "バンダイナムコエンターテインメント"],
    description: "日本综合性娱乐与游戏开发发行巨头万代南梦宫。",
  },
  {
    id: "beijing",
    labels: { zh: "北京", ja: "北京", en: "Beijing" },
    aliases: ["北京", "Beijing", "胡同漫步"],
    description: "北京初至胡同漫步、独立唱片店探索与北方地景记忆。",
  },
  {
    id: "black-hole-thermodynamics",
    labels: { zh: "黑洞热力学", ja: "ブラックホール熱力学", en: "Black Hole Thermodynamics" },
    aliases: ["黑洞热力学", "black hole thermodynamics", "霍金辐射"],
    description: "弯曲时空背景下的黑洞表面引力、视界熵与热平衡性质。",
  },
  {
    id: "bookoff",
    labels: { zh: "BOOKOFF", ja: "ブックオフ", en: "BOOKOFF" },
    aliases: ["BOOKOFF", "ブックオフ", "Book Off"],
    description: "日本大型连锁二手书与中古音像文化空间 BOOKOFF。",
  },
  {
    id: "calibre",
    labels: { zh: "Calibre", ja: "Calibre", en: "Calibre" },
    aliases: ["Calibre", "calibre-ebook", "电子书库"],
    description: "开源电子书管理系统与自建线上私人书房实践。",
  },
  {
    id: "campus-life",
    labels: { zh: "校园生活", ja: "キャンパスライフ", en: "Campus Life" },
    aliases: ["校园生活", "大学生活", "校园", "校园记忆", "学生身份", "campus life"],
    description: "大学校园物理空间（如华科森林大学风貌）、四年生活轨迹与毕业离别。",
  },
  {
    id: "childhood",
    labels: { zh: "童年", ja: "幼少期", en: "Childhood" },
    aliases: ["童年", "童话", "幼年记忆", "childhood"],
    description: "童年梦境、童话故事破灭与纯真远去的伤感沉思。",
  },
  {
    id: "classical-studies",
    labels: { zh: "古典学", ja: "古典学", en: "Classical Studies" },
    aliases: ["古典学", "classics", "classical studies", "西洋古典学"],
    description: "古希腊罗马文学史诗、手抄本传统与古典文献学研读。",
  },
  {
    id: "conformal-field-theory",
    labels: { zh: "共形场论", ja: "共形場理論", en: "Conformal Field Theory" },
    aliases: ["CFT", "共形场论", "共形場理論", "conformal field theory"],
    description: "理论物理中具备共形对称性的量子场论前沿研究与文献。",
  },
  {
    id: "daily-life",
    labels: { zh: "日常", ja: "日常", en: "Daily Life" },
    aliases: ["日常", "生活切片", "日常生活", "日常琐事", "daily life"],
    description: "书桌、调酒、阅读猫咪与细碎平淡的生活切片记录。",
  },
  {
    id: "deep-sea",
    labels: { zh: "深海", ja: "深海", en: "Deep Sea" },
    aliases: ["深海", "Deep Sea", "电影深海"],
    description: "田晓鹏执导水墨粒子动画电影《深海》视听美学赏析。",
  },
  {
    id: "emily-wilson",
    labels: { zh: "Emily Wilson", ja: "エミリー・ウィルソン", en: "Emily Wilson" },
    aliases: ["Emily Wilson", "埃米莉·威尔逊", "Emily Wilson Odyssey"],
    description: "当代首位将荷马史诗《奥德赛》译为英语五步抑扬格的女性古典学者。",
  },
  {
    id: "film",
    labels: { zh: "电影", ja: "映画", en: "Film" },
    aliases: ["电影", "映画", "movie", "cinema", "film"],
    description: "院线长片、水墨动画电影及历史舞台摄制作品赏析。",
  },
  {
    id: "final-fantasy",
    labels: { zh: "最终幻想", ja: "ファイナルファンタジー", en: "Final Fantasy" },
    aliases: ["最终幻想", "Final Fantasy", "FF16", "ファイナルファンタジー"],
    description: "Square Enix 经典 RPG 系列《最终幻想》（含 FF16 评析）。",
  },
  {
    id: "free-will",
    labels: { zh: "自由意志", ja: "自由意志", en: "Free Will" },
    aliases: ["自由意志", "束缚感", "free will", "哲学反思"],
    description: "关于因果决定论、枷锁与人类自由意志的存在主义审视。",
  },
  {
    id: "frieren",
    labels: { zh: "芙莉莲", ja: "葬送のフリーレン", en: "Frieren" },
    aliases: ["芙莉莲", "葬送的芙莉莲", "Frieren", "フリーレン"],
    description: "奇幻漫画《葬送的芙莉莲》关于长生种时间尺度与回忆的共鸣。",
  },
  {
    id: "fromsoftware",
    labels: { zh: "FromSoftware", ja: "フロム・ソフトウェア", en: "FromSoftware" },
    aliases: ["FromSoftware", "From Software", "FS社", "フロム"],
    description: "日本知名硬核动作游戏开发商 FromSoftware。",
  },
  {
    id: "gaming-history",
    labels: { zh: "游戏史", ja: "ゲーム史", en: "Gaming History" },
    aliases: ["游戏史", "游戏历史", "gaming history"],
    description: "主机战争演进、个人游戏生涯九宫格沉淀与媒介历史反思。",
  },
  {
    id: "general-relativity",
    labels: { zh: "广义相对论", ja: "一般相対性理論", en: "General Relativity" },
    aliases: ["广义相对论", "general relativity", "爱因斯坦引力", "引力理论"],
    description: "爱因斯坦时空几何与引力场理论，师承学术研究根基。",
  },
  {
    id: "girls-band-cry",
    labels: { zh: "GBC", ja: "ガールズバンドクライ", en: "Girls Band Cry" },
    aliases: ["GBC", "Girls Band Cry", "ガールズバンドクライ", "トゲナシトゲアリ"],
    description: "东映动画原创企划《Girls Band Cry》及刺猬乐队（Togenashi Togeari）。",
  },
  {
    id: "growth",
    labels: { zh: "成长", ja: "成長", en: "Growth" },
    aliases: ["成长", "成人生日", "自我蜕变", "growth", "growing up"],
    description: "跨越二十岁门槛的困顿、自我打破与心智成熟历程。",
  },
  {
    id: "heavenstamp",
    labels: { zh: "Heavenstamp", ja: "ヘブンスタンプ", en: "Heavenstamp" },
    aliases: ["Heavenstamp", "ヘブンスタンプ"],
    description: "日本独立摇滚二人乐队 Heavenstamp 郑州站现场观演。",
  },
  {
    id: "hellblade-2",
    labels: { zh: "地狱之刃2", ja: "Hellblade 2", en: "Hellblade 2" },
    aliases: ["地狱之刃2", "Hellblade 2", "塞娜的传说", "地狱之刃 2"],
    description: "Ninja Theory 制作的电影化心理叙事冒险作《地狱之刃 2》。",
  },
  {
    id: "himehina",
    labels: { zh: "HIMEHINA", ja: "ヒメヒナ", en: "HIMEHINA" },
    aliases: ["HIMEHINA", "ヒメヒナ", "田中ヒメ", "鈴木ヒナ"],
    description: "VTuber 双人音乐组合 HIMEHINA 现场演出与生伴奏品评。",
  },
  {
    id: "history",
    labels: { zh: "历史", ja: "歴史", en: "History" },
    aliases: ["历史", "历史叙事", "history", "歴史", "近代史"],
    description: "近代华工流散、二战与近现代文明的历史反思与叙事。",
  },
  {
    id: "hitorie",
    labels: { zh: "Hitorie", ja: "ヒトリエ", en: "Hitorie" },
    aliases: ["Hitorie", "ヒトリエ", "wowaka"],
    description: "日本知名摇滚乐队 Hitorie（ヒトリエ）现场实录与声学体验。",
  },
  {
    id: "internet",
    labels: { zh: "互联网", ja: "インターネット", en: "Internet" },
    aliases: ["互联网", "数字断连", "internet"],
    description: "主动断网体验、反数字过载与仰望星空生活方式。",
  },
  {
    id: "japanese",
    labels: { zh: "日语", ja: "日本語", en: "Japanese" },
    aliases: ["日语", "日语学习", "Japanese language", "にほんご"],
    description: "日语自学历程、语法词汇研习与原版小说读解实践。",
  },
  {
    id: "jimbocho",
    labels: { zh: "神保町", ja: "神保町", en: "Jimbocho" },
    aliases: ["神保町", "Jimbocho", "神田神保町"],
    description: "东京世界著名的古书街神保町漫游与专业书店巡礼。",
  },
  {
    id: "jlpt",
    labels: { zh: "JLPT", ja: "JLPT", en: "JLPT" },
    aliases: ["JLPT", "日本语能力测试", "JLPT N1", "日本語能力試験"],
    description: "日本语能力测试（JLPT N1）备考经验与合格心路历程。",
  },
  {
    id: "jrpg",
    labels: { zh: "JRPG", ja: "JRPG", en: "JRPG" },
    aliases: ["JRPG", "日式角色扮演", "Japanese RPG"],
    description: "日式角色扮演游戏机制、叙事演出与数值成长体验。",
  },
  {
    id: "jusant",
    labels: { zh: "Jusant", ja: "Jusant", en: "Jusant" },
    aliases: ["Jusant", "退潮", "Jusant Climbing"],
    description: "DON'T NOD 开发的静谧冥想式攀爬解谜独立游戏《Jusant》。",
  },
  {
    id: "language-learning",
    labels: { zh: "语言学习", ja: "言語学習", en: "Language Learning" },
    aliases: ["语言学习", "language learning", "外语学习", "二语习得"],
    description: "第二语言习得机制、双语阅读理论与外语学习认知心得。",
  },
  {
    id: "latin",
    labels: { zh: "拉丁语", ja: "ラテン語", en: "Latin" },
    aliases: ["拉丁语", "Latin", "lingua latina", "ラテン語"],
    description: "古典拉丁语语法、文献阅读与古罗马文献工作台开发。",
  },
  {
    id: "liang-canbin",
    labels: { zh: "梁灿彬", ja: "梁燦彬", en: "Liang Canbin" },
    aliases: ["梁灿彬", "梁灿彬先生", "Liang Canbin"],
    description: "中国著名理论物理学家、微分几何与广义相对论教育家梁灿彬先生。",
  },
  {
    id: "live-performance",
    labels: { zh: "Live", ja: "ライブ", en: "Live" },
    aliases: ["Live", "现场", "现场体验", "ライブ", "live performance", "concert"],
    description: "现场演出、Livehouse、音乐节专场实录与声场体验。",
  },
  {
    id: "local-first",
    labels: { zh: "本地优先", ja: "ローカルファースト", en: "Local-First" },
    aliases: ["local-first", "本地优先", "离线优先", "local first"],
    description: "数据归用户自主掌控的 Local-first 软件架构设计与实践。",
  },
  {
    id: "love-letters-to-grandma",
    labels: { zh: "给阿嬷的情书", ja: "祖母へのラブレター", en: "Love Letters to Grandma" },
    aliases: ["给阿嬷的情书", "Love Letters to Grandma", "华工历史剧"],
    description: "华工漂泊流散题材舞台剧摄影作品《给阿嬷的情书》观后记。",
  },
  {
    id: "memory",
    labels: { zh: "回忆", ja: "追憶", en: "Memory" },
    aliases: ["回忆", "记忆", "追忆", "memory", "nostalgia"],
    description: "旧日留学计划、离校风景、时间刻度与故人回忆。",
  },
  {
    id: "metal",
    labels: { zh: "金属乐", ja: "メタル", en: "Metal" },
    aliases: ["金属乐", "重金属", "metal", "heavy metal", "メタル", "后黑金属"],
    description: "重金属、末日金属（Doom Metal）、后黑金属现场与听觉物理学。",
  },
  {
    id: "minority-rights",
    labels: { zh: "少数群体", ja: "マイノリティ", en: "Minority Rights" },
    aliases: ["少数群体", "平权", "社会偏见", "性少数", "人际", "人际交往", "友谊", "minority rights", "LGBTQ+"],
    description: "少数群体生存处境、性少数权益、阳光下的身份认同与社会反偏见思考。",
  },
  {
    id: "museum",
    labels: { zh: "博物馆", ja: "博物館", en: "Museum" },
    aliases: ["博物馆", "航海博物馆", "museum", "展馆"],
    description: "航海历史博物馆展品、古老地图与海滨离岛行旅探访。",
  },
  {
    id: "nihilism",
    labels: { zh: "虚无", ja: "虚無", en: "Nihilism" },
    aliases: ["虚无", "虚无感", "空虚", "nihilism"],
    description: "突然清醒后的空虚、虚拟烟花易逝与宇宙维度的荒诞体验。",
  },
  {
    id: "obsidian",
    labels: { zh: "Obsidian", ja: "Obsidian", en: "Obsidian" },
    aliases: ["Obsidian", "黑曜石笔记", "obsidian app"],
    description: "基于 Markdown 本地文件的知识库工具与插件脚本开发。",
  },
  {
    id: "odin-sphere",
    labels: { zh: "奥丁领域", ja: "オーディンスフィア", en: "Odin Sphere" },
    aliases: ["奥丁领域", "Odin Sphere", "オーディンスフィア"],
    description: "香草社经典手绘 2D 动作 RPG 诗意史诗《奥丁领域》。",
  },
  {
    id: "odyssey",
    labels: { zh: "奥德赛", ja: "オデュッセイア", en: "Odyssey" },
    aliases: ["奥德赛", "荷马史诗", "Odyssey", "オデュッセイア"],
    description: "荷马史诗《奥德赛》导言精读、文本细读及当代影视改编评析。",
  },
  {
    id: "p3r",
    labels: { zh: "P3R", ja: "P3R", en: "P3R" },
    aliases: ["P3R", "Persona 3 Reload", "女神异闻录3 Reload", "女神异闻录"],
    description: "Atlus 开发的 JRPG《女神异闻录 3 Reload》通关随感与羁绊叙事。",
  },
  {
    id: "path-integral",
    labels: { zh: "路径积分", ja: "経路積分", en: "Path Integral" },
    aliases: ["路径积分", "path integral", "欧几里得路径积分"],
    description: "量子力学与量子场论中的路径积分表述与几何求和方法。",
  },
  {
    id: "periodic-review",
    labels: { zh: "阶段性总结", ja: "段階的振り返り", en: "Periodic Review" },
    aliases: ["阶段性总结", "年度总结", "年终总结", "periodic review", "milestone review", "annual review"],
    description: "个人博客阶段性生活、学业与精神状态的里程碑式复盘与总结。",
  },
  {
    id: "philosophy-of-science",
    labels: { zh: "科学哲学", ja: "科学哲学", en: "Philosophy of Science" },
    aliases: ["科学哲学", "philosophy of science", "科学认识论"],
    description: "罗素物质观消解、微观实体与物理学本体论哲学探究。",
  },
  {
    id: "photo-studio-nanjing",
    labels: { zh: "南京照相馆", ja: "南京写真館", en: "Photo Studio Nanjing" },
    aliases: ["南京照相馆", "Photo Studio Nanjing"],
    description: "近现代抗战历史光影叙事记录《南京照相馆》短片随感。",
  },
  {
    id: "physical-bookstore",
    labels: { zh: "实体书店", ja: "リアル書店", en: "Physical Bookstore" },
    aliases: ["实体书店", "书店", "旧书店", "bookstore"],
    description: "中日线下实体书店生态、二手书文化空间与街道书房漫步。",
  },
  {
    id: "poetry",
    labels: { zh: "诗歌", ja: "詩", en: "Poetry" },
    aliases: ["诗歌", "诗", "詩", "poetry", "poem"],
    description: "中日英文现代诗、散文诗与意象抒情创作。",
  },
  {
    id: "quantum-field-theory",
    labels: { zh: "量子场论", ja: "場の量子論", en: "Quantum Field Theory" },
    aliases: ["量子场论", "QFT", "quantum field theory", "場の量子論"],
    description: "理论物理现代前沿支柱，时空、对称性与微观相互作用机制。",
  },
  {
    id: "religious-studies",
    labels: { zh: "宗教学", ja: "宗教学", en: "Religious Studies" },
    aliases: ["宗教学", "religious studies", "宗教文化"],
    description: "作为现代教养的宗教学入门、信仰结构与社会文化反思。",
  },
  {
    id: "remedy",
    labels: { zh: "Remedy", ja: "Remedy", en: "Remedy" },
    aliases: ["Remedy", "绿美迪", "Remedy Entertainment"],
    description: "芬兰知名游戏开发工作室 Remedy Entertainment。",
  },
  {
    id: "rock",
    labels: { zh: "摇滚", ja: "ロック", en: "Rock" },
    aliases: ["摇滚", "rock", "ロック", "独立摇滚", "迷幻摇滚", "Emo", "情绪摇滚", "emotional hardcore"],
    description: "独立摇滚、迷幻现场、Emo 与吉他驱动的另类音乐审美。",
  },
  {
    id: "russell",
    labels: { zh: "罗素", ja: "ラッセル", en: "Bertrand Russell" },
    aliases: ["罗素", "Bertrand Russell", "Russell"],
    description: "二十世纪著名哲学家、数理逻辑学家伯特兰·罗素。",
  },
  {
    id: "sea",
    labels: { zh: "海", ja: "海", en: "Sea" },
    aliases: ["海", "海洋", "港口", "sea", "ocean"],
    description: "冬夜海景、港口潮汐、孤岛与波浪空间沉思。",
  },
  {
    id: "sega",
    labels: { zh: "世嘉", ja: "セガ", en: "Sega" },
    aliases: ["世嘉", "SEGA", "セガ"],
    description: "经典游戏老牌名厂世嘉及其历代硬件主机战争史。",
  },
  {
    id: "self-identity",
    labels: { zh: "自我认同", ja: "アイデンティティ", en: "Self-Identity" },
    aliases: ["自我认同", "身份认同", "自我", "自己", "自我反省", "自省", "自卑", "劣等感", "identity", "self identity", "self", "self reflection", "introspection", "inferiority"],
    description: "个体认同建构、自我审视、自省反思与面对脆弱的心理蜕变历程。",
  },
  {
    id: "sense-of-place",
    labels: { zh: "地方感", ja: "場所の感覚", en: "Sense of Place" },
    aliases: ["地方感", "城市与土地", "故土记忆", "城市变迁", "城市化", "土地", "sense of place"],
    description: "地理空间、土地记忆、城市化变迁与个人心绪的共鸣。",
  },
  {
    id: "sociology-of-law",
    labels: { zh: "法社会学", ja: "法社会学", en: "Sociology of Law" },
    aliases: ["法社会学", "社会统制", "sociology of law", "法与社会"],
    description: "法学入门文献研读、社会规训与法律制度社会学观察。",
  },
  {
    id: "sogo-nihongo",
    labels: { zh: "综合日语", ja: "総合日本語", en: "Integrated Japanese" },
    aliases: ["综合日语", "総合日本語", "Integrated Japanese"],
    description: "权威自学教材《综合日语》第二册完结复盘与自习沉淀。",
  },
  {
    id: "spanish",
    labels: { zh: "西语", ja: "スペイン語", en: "Spanish" },
    aliases: ["西语", "西班牙语", "Spanish", "español"],
    description: "西班牙语自学、语法整理与专业西语书籍阅读。",
  },
  {
    id: "spring-come",
    labels: { zh: "春よ来い", ja: "春よ、来い", en: "Haru yo, Koi" },
    aliases: ["春よ来い", "春よ、来い", "Haru yo Koi"],
    description: "松任谷由实经典名曲《春よ、来い》键盘/器乐习练实录。",
  },
  {
    id: "strolling",
    labels: { zh: "漫步", ja: "散歩", en: "Strolling" },
    aliases: ["漫步", "夜游", "散步", "strolling", "city walk"],
    description: "黑夜漫步、街区探索与随风位移的城市游荡。",
  },
  {
    id: "tales-series",
    labels: { zh: "传说系列", ja: "テイルズ オブ シリーズ", en: "Tales Series" },
    aliases: ["传说系列", "Tales of", "破晓传说", "Tales Series"],
    description: "万代南梦宫经典日式 RPG《传说系列》（含《破晓传说》）。",
  },
  {
    id: "thermofield-double-state",
    labels: { zh: "热场双重态", ja: "熱場の二重状態", en: "Thermofield Double State" },
    aliases: ["热场双重态", "TFD", "thermofield double", "热场双态"],
    description: "黑洞热力学与弯曲时空量子场论中的热场双重态理论研读。",
  },
  {
    id: "time-perception",
    labels: { zh: "时间感知", ja: "時間知覚", en: "Time Perception" },
    aliases: ["时间感知", "时间哲学", "季节感知", "时间流逝", "time perception", "時間感覚"],
    description: "对时间流逝、季节交替、瞬刻与永恒的哲学沉思。",
  },
  {
    id: "tokyo",
    labels: { zh: "东京", ja: "東京", en: "Tokyo" },
    aliases: ["东京", "Tokyo", "東京"],
    description: "日本东京地下 Livehouse、秋叶原、神保町与城市漫游实录。",
  },
  {
    id: "vanillaware",
    labels: { zh: "香草社", ja: "ヴァニラウェア", en: "Vanillaware" },
    aliases: ["香草社", "Vanillaware", "ヴァニラウェア"],
    description: "以绝美手绘美术与美食演出著称的日本工作室香草社。",
  },
  {
    id: "vrchat",
    labels: { zh: "VRChat", ja: "VRChat", en: "VRChat" },
    aliases: ["VRChat", "VRC", "虚拟世界摄影"],
    description: "大型虚拟社交平台 VRChat 中的虚拟摄影、跨文化交流与空间探索。",
  },
  {
    id: "workflow",
    labels: { zh: "工作流", ja: "ワークフロー", en: "Workflow" },
    aliases: ["工作流", "数字书房", "workflow", "知识管理工作流"],
    description: "数字书房、文献管理、双向链接与个人效率系统构建。",
  },
  {
    id: "wuhan",
    labels: { zh: "武汉", ja: "武漢", en: "Wuhan" },
    aliases: ["武汉", "Wuhan", "江城武汉"],
    description: "武汉现场演出观演、同传翻译体验与长江城市风貌。",
  },
  {
    id: "xian",
    labels: { zh: "西安", ja: "西安", en: "Xi'an" },
    aliases: ["西安", "Xi'an", "古都西安"],
    description: "闪击古都西安观看重金属现场的行旅与演出记忆。",
  },
  {
    id: "yuval-noah-harari",
    labels: { zh: "尤瓦尔·赫拉利", ja: "ユヴァル・ノア・ハラリ", en: "Yuval Noah Harari" },
    aliases: ["尤瓦尔·赫拉利", "Yuval Noah Harari", "赫拉利", "Harari"],
    description: "历史学家尤瓦尔·赫拉利及其著作《Nexus》与信息网络反思。",
  },
];

const topicMap = new Map(topics.map((entry) => [entry.id, entry]));
const tagMap = new Map(tags.map((entry) => [entry.id, entry]));

export const topicIds = topics.map((entry) => entry.id);
export const tagIds = tags.map((entry) => entry.id);
export const topicIdSet = new Set(topicIds);
export const tagIdSet = new Set(tagIds);

export function labelKey(lang: string): keyof TaxonomyLabels {
  if (lang === '日本語' || lang === 'ja') return 'ja';
  if (lang === 'English' || lang === 'en') return 'en';
  return 'zh';
}

export function getTopic(id: string): TaxonomyEntry | undefined {
  return topicMap.get(id);
}

export function getTag(id: string): TaxonomyEntry | undefined {
  return tagMap.get(id);
}

function labelFor(entry: TaxonomyEntry | undefined, id: string, lang: string): string {
  if (!entry) return id;
  return entry.labels[labelKey(lang)] || entry.labels.zh || id;
}

export function getTopicLabel(id: string, lang = '中文'): string {
  return labelFor(topicMap.get(id), id, lang);
}

export function getTagLabel(id: string, lang = '中文'): string {
  return labelFor(tagMap.get(id), id, lang);
}

export function getTopicPrimaryLabel(id: string): string {
  return topicMap.get(id)?.labels.zh ?? id;
}

export function getTagPrimaryLabel(id: string): string {
  return tagMap.get(id)?.labels.zh ?? id;
}

function searchTerms(entry: TaxonomyEntry | undefined, id: string): string[] {
  if (!entry) return [id];
  return [entry.labels.zh, entry.labels.ja, entry.labels.en, ...entry.aliases].filter(
    (term, index, list) => Boolean(term) && list.indexOf(term) === index,
  );
}

export function getTopicSearchTerms(id: string): string[] {
  return searchTerms(topicMap.get(id), id);
}

export function getTagSearchTerms(id: string): string[] {
  return searchTerms(tagMap.get(id), id);
}
