import {
  ArrowsHorizontal,
  Drop,
  Factory,
  Mountains,
  Rows,
  Stack,
  Wind,
} from "@phosphor-icons/react"

export const navigation = [
  ["首页", "/"],
  ["关于我们", "/about"],
  ["业务范围", "/business"],
  ["产品中心", "/products"],
  ["制造能力", "/capabilities"],
  ["荣誉资质", "/honors"],
  ["新闻中心", "/news"],
  ["联系我们", "/contact"],
] as const

export type NewsItem = {
  slug: string
  category: "媒体聚焦" | "产业资讯" | "项目进展" | "企业动态"
  date: string
  displayDate: string
  title: string
  summary: string
  image: string
  imageAlt: string
  imageCaption: string
  source: string
  author?: string
  photographer?: string
  originalUrl: string
  lead: string
  body: string[]
  highlights?: Array<{ value: string; label: string }>
  secondaryImage?: {
    src: string
    alt: string
    caption: string
  }
}

export const newsItems: NewsItem[] = [
  {
    slug: "jiangxi-daily-shangyou-industry-2026",
    category: "媒体聚焦",
    date: "2026-08-30",
    displayDate: "2026.08.30",
    title: "江西日报头版关注上犹产业发展，星科生产现场亮相",
    summary: "江西日报头版报道上犹以工业强基、文旅赋能与融湾创新推动县域发展，星科电子玻纤布生产现场作为上犹玻纤新型复材产业代表场景亮相。",
    image: "/assets/news-xingke-workshop-2026.jpg",
    imageAlt: "江西星科生产车间内电子玻纤布成品装运现场",
    source: "大江新闻 · 江西日报",
    author: "刘新权",
    photographer: "朱海鹏",
    originalUrl: "https://dj.jxnews.com.cn/webDetails/newsPc?id=14772452&tenantId=312&uid=6846a9b003bcf90019b9c9c0&sign=1",
    imageCaption: "江西星科生产车间内，工作人员装运电子玻纤布成品。图片来源：江西日报，朱海鹏 摄。",
    lead: "报道以工业强基、文旅赋能和融湾创新为主线，呈现上犹县围绕特色产业构建发展动能的实践。",
    body: [
      "2026 年 8 月 30 日，江西日报在头版刊发上犹县产业与县域发展报道。报道介绍，上犹持续聚焦玻纤新型复材、稀土钨新材料和锂电新能源等特色优势产业，以产业链思维推动企业集聚和上下游协同。",
      "江西星科电子玻纤布生产现场作为上犹玻纤新型复材产业的代表场景在报道中亮相，呈现企业电子玻纤布成品装运及规范化制造现场。",
      "报道显示，上犹玻纤产品已从安全防护、绿色建材延伸至电子基材等应用领域，产业链覆盖原料、玻纤纱、玻纤布和复合材料制品。",
    ],
    highlights: [
      { value: "202 家", label: "报道所述上犹玻纤关联企业" },
      { value: "161.4 亿元", label: "2025 年产业营收" },
      { value: "100+", label: "产业集群产品种类" },
    ],
    secondaryImage: {
      src: "/assets/news-jiangxi-daily-2026.webp",
      alt: "2026年8月30日江西日报相关头版版面",
      caption: "2026 年 8 月 30 日《江西日报》相关版面。图片来源：大江新闻 · 江西日报。",
    },
  },
  {
    slug: "shangyou-fiberglass-cluster-2026",
    category: "媒体聚焦",
    date: "2026-06-26",
    displayDate: "2026.06.26",
    title: "从一条丝到百亿链，上犹玻纤产业聚链成势",
    summary: "媒体走进上犹玻纤产业链，星科电子的电子级玻纤布生产、元源新材的玻纤纱制造及区域协同成为报道重点。",
    image: "/assets/xingke-line.webp",
    imageAlt: "江西星科电子级玻纤布生产线",
    imageCaption: "江西星科电子级玻纤布生产线。企业资料图。",
    source: "新浪财经 · 转载报道",
    originalUrl: "https://finance.sina.com.cn/jjxw/2026-06-26/doc-iniesvke2052405.shtml",
    lead: "从原料和玻纤纱，到电子布与复合材料终端，上犹正把单个制造环节连接为完整产业链。",
    body: [
      "报道回顾了上犹近四十年的玻纤产业积累，以及从坩埚拉丝向池窑拉丝、高性能纱线和精密织造持续升级的过程。元源新材与星科电子等企业构成产业链中的关键环节。",
      "在星科电子生产现场，玻纤纱经精密织造形成电子级玻纤布，产品服务覆铜板与印制电路板产业链。报道将这一场景作为上犹玻纤产业向电子材料延伸的代表。",
      "区域产业集群通过本地配套、创新平台和共享智造继续提高协同效率，推动产品由基础原料向电子材料、安全防护和绿色建材等方向拓展。",
    ],
    highlights: [
      { value: "200+", label: "产业集群企业" },
      { value: "63 家", label: "规模以上企业" },
      { value: "161.4 亿元", label: "报道所述集群年营收" },
    ],
  },
  {
    slug: "ganzhou-rongshu-action-2026",
    category: "媒体聚焦",
    date: "2026-04-12",
    displayDate: "2026.04.12",
    title: "经济日报关注赣州企业梯度培育，元源新材产业带动效应获报道",
    summary: "经济日报报道赣州支持企业成长的“榕树行动”，元源新材在技术突破和带动下游企业集聚方面的实践被列为案例。",
    image: "/assets/yuanyuan-factory.webp",
    imageAlt: "元源新材料制造基地",
    imageCaption: "元源新材料制造基地。企业资料图。",
    source: "经济日报",
    author: "刘兴",
    originalUrl: "https://proapi.jingjiribao.cn/readnews.html?id=341414",
    lead: "赣州围绕企业全生命周期建立梯度培育路径，并以链主企业带动产业集群协同发展。",
    body: [
      "2026 年 4 月 12 日，经济日报刊发《聚焦全生命周期需求 江西赣州加快企业梯度培育》，介绍赣州支持企业成长“榕树行动”的具体实践。",
      "报道提到，赣州通过深化产业链上下游协作、支持产业集群发展等措施，推动政策、资金和人才等要素向优质企业集聚。",
      "元源新材料作为报道案例之一，其高性能玻纤材料技术突破以及对下游企业落户的带动作用，体现了龙头企业在区域产业生态中的协同价值。",
    ],
    highlights: [
      { value: "16 条", label: "“榕树行动”具体措施" },
      { value: "40+", label: "报道所述带动落户下游企业" },
      { value: "全生命周期", label: "企业梯度培育视角" },
    ],
  },
  {
    slug: "jiangxi-private-investment-2026",
    category: "产业资讯",
    date: "2026-03-04",
    displayDate: "2026.03.04",
    title: "江西日报关注民间投资信心，元源新材向电子信息材料延伸",
    summary: "报道以元源新材为案例，呈现企业依托既有玻纤制造基础，向电子级玻纤纱等更高附加值产品延伸的路径。",
    image: "/assets/yuanyuan-yarn.webp",
    imageAlt: "玻璃纤维纱产品",
    imageCaption: "玻璃纤维纱产品。企业资料图。",
    source: "江西日报 · 人民网江西频道",
    originalUrl: "https://jx.people.com.cn/n2/2026/0304/c186330-41514374.html",
    lead: "面向电子信息产业的本地配套需求，玻纤企业正在通过产品升级打开新的发展空间。",
    body: [
      "江西日报报道从企业投资选择出发，观察江西民间投资信心。元源新材结合上犹玻纤产业基础，将电子信息产业对更细玻纤纱的需求作为产品升级方向。",
      "报道介绍，相关项目面向电子玻纤纱等产品，旨在提高区域电子信息产业的本地配套能力，并带动产业链上下游企业协同升级。",
      "文中涉及的投资额、投产时间和附加值提升均为媒体在 2026 年 3 月报道时披露的项目口径，实际进度以项目后续公开信息为准。",
    ],
    highlights: [
      { value: "15 万吨", label: "报道所述项目设计年产能" },
      { value: "7 亿余元", label: "报道所述项目投资" },
      { value: "电子级", label: "产品升级方向" },
    ],
  },
  {
    slug: "yuanyuan-phase-two-progress-2025",
    category: "项目进展",
    date: "2025-10-09",
    displayDate: "2025.10.09",
    title: "上犹“二期现象”激活产业新动能，元源新材项目推进建设",
    summary: "赣南日报报道上犹优质企业持续增资扩产，元源新材二期项目作为玻纤新材料产业扩容提质案例受到关注。",
    image: "/assets/yuanyuan-factory.webp",
    imageAlt: "元源新材料厂区",
    imageCaption: "元源新材料厂区。企业资料图。",
    source: "赣南日报 · 赣州市人民政府",
    originalUrl: "https://www.ganzhou.gov.cn/gzszf/c100022/202510/e207e558f0094aaba6687556347476a9.shtml",
    lead: "优质存量企业持续扩产，为上犹玻纤新材料产业延链、补链和强链注入新的制造能力。",
    body: [
      "报道介绍，上犹县通过“一企一策”和项目服务专班等方式，推动优质存量企业实施增量项目，形成扎根发展、持续壮大的“二期现象”。",
      "元源新材二期年产 15 万吨池窑拉丝生产线项目被列为玻纤新材料领域的重点案例。报道发布时，项目正在推进土建工程、设计优化和施工图编制。",
      "随着相关项目建设，上犹玻纤产业链将进一步完善原材料、中间品与终端产品之间的本地协同。项目后续节点以政府及企业最新公开信息为准。",
    ],
    highlights: [
      { value: "15 万吨", label: "二期项目设计年产能" },
      { value: "36 家", label: "报道所述延链补链强链企业" },
      { value: "200+", label: "上犹新材料新能源企业" },
    ],
  },
  {
    slug: "xinhua-shangyou-fiberglass-2025",
    category: "媒体聚焦",
    date: "2025-06-26",
    displayDate: "2025.06.26",
    title: "新华社走进上犹，记录一根“细丝”串起的百亿产业",
    summary: "新华社以图文报道呈现上犹玻纤产业链，星科电子生产车间与元源新材制造、研发场景共同亮相。",
    image: "/assets/news-xingke-workshop-2026.jpg",
    imageAlt: "江西星科电子级玻纤布生产现场",
    imageCaption: "江西星科电子级玻纤布生产现场。企业资料图。",
    source: "新华社",
    originalUrl: "https://www.news.cn/fortune/20250626/b78bba28479244e8a5daf4b17f841c08/c.html",
    lead: "从山区县的产业基础出发，上犹逐步形成覆盖原料、玻纤纱、织物和复合材料制品的五级产业链。",
    body: [
      "新华社报道走访上犹工业园区，用生产现场、产品应用和产业数据呈现当地玻纤产业从单一环节向完整链条发展的过程。",
      "报道图片与文字记录了元源新材生产车间、实验室和玻纤纱产品，也呈现江西星科电子基材有限公司的生产现场，反映玻纤纱向电子级玻纤布延伸的产业协同。",
      "报道还关注当地以技术创新、人才合作和共享智造提升集群竞争力的做法，为理解星科所处的区域产业环境提供了完整背景。",
    ],
    highlights: [
      { value: "五级", label: "本地玻纤产业链" },
      { value: "195 家", label: "报道所述玻纤企业" },
      { value: "150 亿元+", label: "报道所述集群年销售收入" },
    ],
  },
  {
    slug: "yuanyuan-15t-project-start-2025",
    category: "项目进展",
    date: "2025-05-15",
    displayDate: "2025.05.15",
    title: "元源新材料年产 15 万吨玻纤项目正式开工",
    summary: "项目面向电子级玻纤纱等高性能产品，进一步完善上犹从矿物原料、玻纤纱到高端织布的产业链配套。",
    image: "/assets/yuanyuan-project-groundbreaking.webp",
    imageAlt: "元源新材料年产15万吨玻璃纤维池窑拉丝及制品生产线项目开工现场",
    imageCaption: "元源新材料年产 15 万吨玻璃纤维池窑拉丝及制品生产线项目开工现场。企业资料图。",
    source: "上犹县融媒体中心 · 中国建材信息总网",
    originalUrl: "https://www.cbminfo.com/mobile/_470515/1639283/7383816/index.html",
    lead: "新增池窑拉丝能力将更好衔接区域电子布等下游制造环节，强化本地产业链配套。",
    body: [
      "2025 年 5 月 13 日，元源新材料年产 15 万吨玻璃纤维池窑拉丝及制品生产线项目开工。公开报道将其视为上犹玻纤产业向高端新材料制造升级的重要节点。",
      "项目报道提出，生产线将面向 7 至 9 微米直径电子玻纤纱等产品，服务电子信息与玻纤安防制品等下游应用。",
      "报道发布时称项目预计于 2026 年建成投产。网站仅记录该次开工信息，实际建设和投产进度以项目最新公开信息为准。",
    ],
    highlights: [
      { value: "15 万吨", label: "项目设计年产能" },
      { value: "7-9 μm", label: "报道所述电子纱直径方向" },
      { value: "2025.05", label: "项目开工时间" },
    ],
    secondaryImage: {
      src: "/assets/yuanyuan-project-ceremony.webp",
      alt: "元源新材料年产15万吨玻纤项目开工仪式",
      caption: "项目开工仪式现场。企业资料图。",
    },
  },
  {
    slug: "shangyou-industry-opening-2025",
    category: "产业资讯",
    date: "2025-04-08",
    displayDate: "2025.04.08",
    title: "上犹工业经济实现“开门红”，玻纤产业数字化提速",
    summary: "江西日报报道上犹工业运行与数字化转型，元源新材通过 ERP 系统和智能设备推进订单、生产、质检协同管理。",
    image: "/assets/workshop-briefing.webp",
    imageAlt: "玻纤制造现场班前沟通",
    imageCaption: "玻纤制造现场。企业资料图。",
    source: "江西日报 · 江西新闻网",
    originalUrl: "https://jiangxi.jxnews.com.cn/system/2025/04/07/020834819.shtml",
    lead: "数字化不只服务单台设备效率，也在连接订单、生产、质量和产业集群协同。",
    body: [
      "江西日报报道显示，2025 年一季度上犹新材料、新能源和电子信息三大产业链协同发力，工业运行实现良好开局。",
      "报道以元源新材为例，介绍企业通过 ERP 系统和智能工业设备推进订单、生产与质检全流程数字化管理。",
      "对星科而言，区域上游制造的数字化与稳定供给，为电子级玻纤布的过程管理和产业协同提供了更扎实的基础。",
    ],
    highlights: [
      { value: "15%", label: "报道所述一季度工业增加值增速" },
      { value: "39.1 亿元", label: "预计规上工业企业营业收入" },
      { value: "全流程", label: "订单、生产与质检数字化" },
    ],
  },
  {
    slug: "china-composites-expo-2024",
    category: "企业动态",
    date: "2024-08-08",
    displayDate: "2024.08.08",
    title: "元源新材与江西星科联合亮相 2024 中国国际复材展",
    summary: "两家企业联合展示高品质玻璃纤维纱、工业级玻纤布和电子级玻纤布，与行业伙伴交流产品与应用需求。",
    image: "/assets/exhibition-booth.webp",
    imageAlt: "元源新材料与江西星科联合展台",
    imageCaption: "元源新材料与江西星科联合展台。企业资料图。",
    source: "中国国际复材展 · 元源新材",
    originalUrl: "https://www.chinacompositesexpo.com/m_cn/news.php?news_id=14761&show=news_detail",
    lead: "以联合展台集中呈现玻纤纱、工业布和电子布产品，向行业展示区域上下游协同能力。",
    body: [
      "2024 中国国际复合材料工业技术展览会期间，元源新材与江西星科联合参展，重点展示玻璃纤维纱、工业级玻纤布及高性能电子级玻纤布。",
      "展会报道介绍，江西星科围绕电子级玻纤布建设整浆、并轴、喷气织造与后处理能力，产品面向电子基材等应用。",
      "联合参展让产业链上下游产品在同一场景中集中呈现，也为企业与客户、设备及材料伙伴开展技术交流提供了窗口。",
    ],
    highlights: [
      { value: "3 类", label: "联合展示的主要产品类别" },
      { value: "5D01", label: "2024 年展会展位" },
      { value: "产业协同", label: "玻纤纱与织物联合展示" },
    ],
  },
]

export const stats = [
  { value: 2021, suffix: "", label: "公司成立" },
  { value: 200, suffix: " 台", label: "丰田喷气织机" },
  { value: 1, suffix: " 亿米", label: "项目规划年产能" },
  { value: 10, suffix: "+", label: "专利成果" },
]

export const products = [
  {
    code: "7628",
    type: "标准电子级玻纤布",
    title: "覆铜板常用厚型基布",
    description: "采用 G75 玻璃纤维纱平纹织造，关注经纬密、基重、布面均匀性与批次一致性。",
    applications: ["覆铜板", "多层 PCB", "工业电子"],
    image: "/assets/fabric-rolls.webp",
    specs: [
      ["织物组织", "平纹"],
      ["经纱 / 纬纱", "G75 / G75"],
      ["经密 / 纬密", "44 / 32 根/英寸"],
      ["基重", "203 g/m²"],
      ["公称厚度", "168 μm"],
      ["表面处理", "氨基硅烷"],
    ],
  },
  {
    code: "2116",
    type: "中薄型电子级玻纤布",
    title: "兼顾薄型化与含浸适配",
    description: "采用 E225 玻璃纤维纱平纹织造，通过经纱准备与精密织造控制经纬密和布面质量。",
    applications: ["通信设备", "汽车电子", "消费电子"],
    image: "/assets/fabric-detail.webp",
    specs: [
      ["织物组织", "平纹"],
      ["经纱 / 纬纱", "E225 / E225"],
      ["经密 / 纬密", "60 / 59 根/英寸"],
      ["基重", "104 g/m²"],
      ["公称厚度", "88 μm"],
      ["表面处理", "氨基硅烷"],
    ],
  },
  {
    code: "1080",
    type: "薄型电子级玻纤布",
    title: "面向薄型化电子基材",
    description: "采用 D450 玻璃纤维纱平纹织造，重点控制薄型布的经纬密、基重、公称厚度与布面均匀性。",
    applications: ["轻薄基板", "高密度 PCB", "数字设备"],
    image: "/assets/fabric-open.webp",
    specs: [
      ["织物组织", "平纹"],
      ["经纱 / 纬纱", "D450 / D450"],
      ["经密 / 纬密", "60 / 48 根/英寸"],
      ["基重", "48 g/m²"],
      ["公称厚度", "46 μm"],
      ["表面处理", "氨基硅烷"],
    ],
  },
  {
    code: "3732",
    type: "电子与工业用玻纤布",
    title: "覆盖绝缘与增强场景",
    description: "面向电子、电气绝缘与工业复合材料应用，提供稳定的玻纤织物基材。",
    applications: ["电气绝缘", "电子基材", "工业复材"],
    image: "/assets/fabric-inspection.webp",
    specs: [],
  },
]

export const productFamilies = [
  {
    name: "标准电子级玻纤布",
    note: "覆盖薄型、中薄型与厚型电子基布",
    models: "1017 / 1015 / 1027 / 1037 / 104 / 101 / 1035 / 106 / 1067 / 1065 / 1081 / 1086 / 1078 / 1080 / 3313 / 2165 / 2112 / 2313 / 2113 / 2117 / 2116 / 1652 / 1504 / 1506 / 7627 / 7628 / 7630 / 7638 / 7667",
  },
  {
    name: "低介电玻璃纤维布",
    note: "采用低介电玻璃纤维纱的产品系列",
    models: "106 / 1067 / 1078 / 1080 / 1086 / 2113 / 2313 / 3313 / 2116",
  },
  {
    name: "高强度玻璃纤维布",
    note: "面向增强性能要求的产品系列",
    models: "1017 / 1027 / 1037 / 1078",
  },
  {
    name: "工业级玻璃纤维布",
    note: "面向绝缘与复合材料增强应用",
    models: "985 / 1528 / 116 / 792 / S125 / 3911",
  },
]

export const productPrinciples = [
  ["尺寸稳定性", "关注经纬密、基重、公称厚度与后处理的一致性，为后续层压和加工提供稳定基材。"],
  ["电气绝缘", "玻纤布兼具增强与绝缘作用，是覆铜板及印制电路板的重要基础材料。"],
  ["树脂含浸性", "通过脱浆、开纤与表面处理改善布面孔隙和树脂含浸表现。"],
  ["批次管理", "从经纱准备到成品检验持续记录关键过程，支持批次质量追溯。"],
]

export const businesses = [
  {
    name: "江西鸿锭",
    label: "矿物原料加工",
    description: "围绕叶腊石、石英砂、石灰石、白云石等玻纤矿物原料开展加工，为区域玻纤制造提供上游原料支持。",
    detail: "项目规划年产 40 万吨玻纤矿物原料",
    image: "/assets/hongding-materials.webp",
    icon: Mountains,
  },
  {
    name: "元源新材料",
    label: "玻璃纤维纱制造",
    description: "采用池窑拉丝工艺，具备玻璃配方与浸润剂研发能力，产品覆盖直接无捻粗纱、合股无捻粗纱、玻璃纤维加捻纱及多类玻纤制品。",
    detail: "一期 5 万吨生产线于 2018 年点火投产",
    image: "/assets/yuanyuan-yarn.webp",
    icon: Factory,
  },
  {
    name: "江西星科",
    label: "电子级玻纤布",
    description: "以整浆、并轴、喷气织造及后处理设备为基础，生产多型号电子级玻璃纤维布。",
    detail: "一期配置 200 台丰田喷气织机",
    image: "/assets/xingke-finishing-line-team.webp",
    icon: Rows,
  },
  {
    name: "赣州广建",
    label: "工业玻纤布",
    description: "配置高速剑杆设备，面向绝缘板材与工业基材等领域提供玻璃纤维布产品。",
    detail: "面向多类绝缘与工业增强应用",
    image: "/assets/guangjian-weaving-hall.webp",
    icon: Stack,
  },
]

export const upstreamProductGroups = [
  ["直接无捻粗纱 A011", "适用于缠绕、拉挤与编织工艺，可匹配不饱和聚酯、乙烯基酯和环氧树脂体系。"],
  ["合股无捻粗纱", "包括采光板用 A318、喷射成型用 A414 和热塑性塑料用 B011 等产品系列。"],
  ["玻纤织物与毡材", "方格布 EW 采用平纹或斜纹组织，短切原丝毡 EX 面向复合材料成型应用。"],
  ["玻璃纤维加捻纱 EC", "采用硅烷型浸润剂，面向电子布、玻纤网格布等织造应用。"],
]

export const upstreamTestReports = [
  {
    category: "限用物质",
    title: "欧盟 RoHS 检测",
    report: "SHAEC26008778802",
    date: "2026.04.10",
    summary: "送检白色玻璃纤维纱符合欧盟 RoHS 指令 2011/65/EU 及修正指令（EU）2015/863 对十项限用物质的要求。",
  },
  {
    category: "高关注物质",
    title: "REACH SVHC 筛查",
    report: "SHAEC26008779902",
    date: "2026.04.14",
    summary: "送检玻璃纤维纱的 253 项候选清单 SVHC 与 1 项潜在 SVHC 筛查结果均不高于 0.1%（w/w），报告总结判定通过。",
  },
  {
    category: "理化性能",
    title: "EC9 玻璃纤维纱检测",
    report: "F26050018",
    date: "2026.05.25",
    summary: "型号 EC9-87.6*1Z/45-C061K-6.4K 的碱金属氧化物含量 0.82%、平均纤维直径 10.0 μm、线密度 87.9 tex、拉伸断裂强度 0.6 N/tex、含水率 0.031%、可燃物含量 0.919%，所检项目符合委托方判定要求。",
  },
]

export const compositeProcesses = ["缠绕成型", "拉挤成型", "编织工艺", "挤出与注塑", "喷射成型", "手糊成型"]

export const capabilities = [
  { icon: ArrowsHorizontal, title: "整浆准备", copy: "2 台高速整浆设备，完成整经与浆纱，为经纱排列和张力一致性建立基础。" },
  { icon: Rows, title: "并轴控制", copy: "配置 6 轴并轴设备，控制织轴经密及各片经纱张力一致性。" },
  { icon: Wind, title: "喷气织造", copy: "一期配置 200 台丰田喷气织机，支持多型号电子级玻纤布生产。" },
  { icon: Drop, title: "后处理与验布", copy: "覆盖脱浆、开纤、表面处理、烘干定型及成品验布等关键环节。" },
]

export const manufacturingProcess = [
  { step: "01", title: "整经", copy: "将玻纤经纱平行排列并均匀卷绕，关注排列、张力与卷绕状态。" },
  { step: "02", title: "浆纱", copy: "对经纱进行上浆保护，降低毛羽与断经，为连续织造建立稳定基础。" },
  { step: "03", title: "并轴", copy: "通过多轴并合形成织轴，控制经密与各片经纱之间的张力一致性。" },
  { step: "04", title: "喷气织造", copy: "围绕经密、纬密、张力与设备运行状态进行精密织造，控制断经、断纬及布面疵点。" },
  { step: "05", title: "后处理", copy: "按产品要求完成脱浆、开纤、表面处理与烘干定型，改善布面孔隙和树脂含浸性。" },
  { step: "06", title: "验布与分切复卷", copy: "检查外观、幅宽、基重和公称厚度，并按交付要求完成分切复卷、包装与批次标识。" },
]

export const qualityControls = [
  ["原纱与经纱", "原纱品种与批次、经纱排列、张力、上浆和织轴状态"],
  ["织造过程", "经密、纬密、设备运行状态与布面疵点"],
  ["后处理", "脱浆、开纤、处理剂施加与烘干定型状态"],
  ["成品放行", "外观、幅宽、基重、公称厚度、卷长和批次追溯记录"],
]

export const milestones = [
  ["2021.05", "江西星科电子基材有限公司成立"],
  ["一期建设", "建设电子级玻璃纤维布生产线，完善整浆、并轴、织造与后处理配置"],
  ["2023.12", "通过国家高新技术企业认定"],
  ["2024", "入选江西省绿色制造名单，获评江西省绿色工厂"],
  ["2025.09", "获评江西省专精特新中小企业，有效期至 2028 年 9 月"],
]

export const honors = [
  { title: "国家高新技术企业", meta: "证书编号 GR202336002583 · 有效期至 2026 年 12 月", image: "/assets/honor-hightech.webp" },
  { title: "江西省绿色工厂", meta: "2024 年度江西省绿色制造名单", image: "/assets/honor-green.webp" },
  { title: "江西省专精特新中小企业", meta: "有效期 2025.09.26 - 2028.09.25", image: "/assets/honor-specialized-sme.webp" },
  { title: "发明专利", meta: "围绕电子布工艺与设备持续创新", image: "/assets/honor-patent-invention.webp" },
  { title: "实用新型专利", meta: "形成十余项专利成果", image: "/assets/honor-patent-utility.webp" },
]

export const fieldStories = [
  {
    label: "制造现场",
    title: "班前沟通，把质量要求落实到当班生产",
    copy: "现场团队围绕安全、设备状态、生产安排与质量重点进行班前沟通，让标准进入每一班次。",
    image: "/assets/workshop-briefing.webp",
    alt: "江西星科车间班前沟通现场",
  },
  {
    label: "行业交流",
    title: "以产品与现场能力面对面沟通",
    copy: "通过行业展会展示电子布产品、制造现场与区域产业协同，与合作伙伴开展技术和需求交流。",
    image: "/assets/exhibition-booth.webp",
    alt: "江西星科与元源新材料联合展会展台",
  },
]

export const contacts = [
  { type: "phone", label: "业务咨询", value: "18170499588", href: "tel:18170499588" },
  { type: "phone", label: "固定电话", value: "0797-8504888 / 8504999", href: "tel:07978504888" },
  { type: "email", label: "电子邮箱", value: "xingkefabric@xingkefabric.com", href: "mailto:xingkefabric@xingkefabric.com" },
  { type: "map", label: "公司地址", value: "江西省赣州市上犹县黄埠工业园南区", href: "https://ditu.amap.com/search?query=江西星科电子基材有限公司" },
]
