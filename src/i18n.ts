import { generatedTranslations } from "./translations.generated"

export type Language = "zh" | "ja" | "en"

const STORAGE_KEY = "xingke-language"
const languageCodes: Record<Language, string> = {
  zh: "zh-CN",
  ja: "ja",
  en: "en",
}

const openGraphLocales: Record<Language, string> = {
  zh: "zh_CN",
  ja: "ja_JP",
  en: "en_US",
}

const manualTranslations: Record<Exclude<Language, "zh">, Record<string, string>> = {
  ja: {
    "江西星科电子基材有限公司": "江西星科電子基材有限公司",
    "江西星科": "江西星科",
    "星科": "星科",
    "电子级玻璃纤维布": "電子級ガラス繊維クロス",
    "电子级玻纤布": "電子級ガラス繊維クロス",
    "电子布": "電子クロス",
    "玻璃纤维": "ガラス繊維",
    "玻纤": "ガラス繊維",
    "玻纤纱": "ガラス繊維糸",
    "元源新材料": "元源新材料",
    "元源新材": "元源新材料",
    "赣州广建": "贛州広建",
    "江西鸿锭": "江西鴻錠",
    "上犹": "上猶",
    "中厚型电子布": "中厚型電子クロス",
    "中薄型电子布": "中薄型電子クロス",
    "薄型电子布": "薄型電子クロス",
    "标准型电子布": "標準型電子クロス",
    "精密织造": "確かな製織",
    "稳定交付": "安定供給を実現",
    "联系星科": "星科へのお問い合わせ",
    "了解制造能力": "生産体制を見る",
    "查看产品体系": "製品情報を見る",
    "项目总投资": "プロジェクト総投資額",
    "5.05 亿元": "約116.15億円",
    "项目占地": "敷地面積",
    "61 亩": "約40,667㎡",
    "建筑面积": "延床面積",
    "3.2 万平方米": "32,000㎡",
    "注册资本": "登録資本金",
    "5000 万元": "約11.5億円",
    "7 亿余元": "161億円超",
    "稳定制造": "安定した生産",
    "关注工艺稳定与批次一致性": "工程の安定性とロット間の均一性を重視",
    "持续改进": "継続的改善",
    "从设备、流程和检验中不断积累": "設備・工程・検査の各面で改善を蓄積",
    "协同服务": "連携対応",
    "与区域产业伙伴高效衔接": "地域の産業パートナーと効率的に連携",
    "法定代表人 / 代表者": "法定代表者",
    "公司成立": "設立",
    "项目规划年产能": "計画年間生産能力",
    "专利成果": "特許実績",
    "企业关键数据": "主要データ",
    "首页": "ホーム",
    "关于我们": "会社情報",
    "业务范围": "事業領域",
    "产品中心": "製品情報",
    "制造能力": "生産体制",
    "荣誉资质": "認証・受賞",
    "新闻中心": "ニュース",
    "联系我们": "お問い合わせ",
    "整浆准备": "経糸準備・サイジング",
    "并轴控制": "ビーミング管理",
    "喷气织造": "エアジェット織布",
    "后处理与验布": "後処理・検反",
    "丰田喷气织机": "豊田エアジェット織機",
    " 台": "台",
    " 亿米": "億Meter+",
    "业务联系": "お問い合わせ",
    "来源：": "出典：",
    "作者：": "著者：",
    "生产实景": "生産現場",
    "画册参考参数": "カタログ参考仕様",
  },
  en: {
    "江西星科电子基材有限公司": "Jiangxi Xingke Electronic Substrate Co., Ltd.",
    "电子级玻璃纤维布": "Electronic-grade glass fiber fabric",
    "电子级玻纤布": "Electronic-grade glass fiber fabric",
    "电子布": "Electronic glass fabric",
    "玻璃纤维": "Glass fiber",
    "玻纤": "Glass fiber",
    "玻纤纱": "Glass fiber yarn",
    "元源新材料": "Yuanyuan New Materials",
    "赣州广建": "Ganzhou Guangjian",
    "江西鸿锭": "Jiangxi Hongding",
    "上犹": "Shangyou",
    "中厚型电子布": "Medium-weight electronic glass fabric",
    "中薄型电子布": "Medium-thin electronic glass fabric",
    "薄型电子布": "Thin electronic glass fabric",
    "标准型电子布": "Standard electronic glass fabric",
    "精密织造": "Precision weaving",
    "稳定交付": "Reliable delivery",
    "联系星科": "Contact Xingke",
    "了解制造能力": "View manufacturing",
    "查看产品体系": "View products",
    "项目总投资": "Project investment",
    "5.05 亿元": "RMB 505 million",
    "项目占地": "Site area",
    "61 亩": "Approx. 40,667 m²",
    "建筑面积": "Building area",
    "3.2 万平方米": "32,000 m²",
    "注册资本": "Registered capital",
    "5000 万元": "RMB 50 million",
    "稳定制造": "Stable manufacturing",
    "关注工艺稳定与批次一致性": "Focus on process stability and batch consistency",
    "持续改进": "Continuous improvement",
    "从设备、流程和检验中不断积累": "Continuous gains across equipment, processes and inspection",
    "协同服务": "Coordinated service",
    "与区域产业伙伴高效衔接": "Efficient coordination with regional industry partners",
    "法定代表人 / 代表者": "Legal representative",
    "公司成立": "Established",
    "项目规划年产能": "Planned annual capacity",
    "专利成果": "Patents",
    "企业关键数据": "Key facts",
    "首页": "Home",
    "关于我们": "About",
    "业务范围": "Business",
    "产品中心": "Products",
    "制造能力": "Manufacturing",
    "荣誉资质": "Credentials",
    "新闻中心": "News",
    "联系我们": "Contact",
    "整浆准备": "Warp preparation & sizing",
    "并轴控制": "Beaming control",
    "喷气织造": "Air-jet weaving",
    "后处理与验布": "Finishing & inspection",
    "丰田喷气织机": "Toyota air-jet looms",
    " 台": "",
    " 亿米": "00\u00a0million\u00a0Meter+",
    "业务联系": "Contact Us",
    "来源：": "Source: ",
    "作者：": "Author: ",
    "生产实景": " production floor",
    "画册参考参数": " catalog reference specifications",
  },
}

const targetNormalizations: Record<Exclude<Language, "zh">, Array<[string, string]>> = {
  ja: [
    ["江西省興科", "江西星科"],
    ["江西興科", "江西星科"],
    ["興科", "星科"],
    ["電子基板有限公司", "電子基材有限公司"],
    ["電子グレードのグラスファイバークロス", "電子級ガラス繊維クロス"],
    ["電子グレードのガラス繊維クロス", "電子級ガラス繊維クロス"],
    ["電子グレードのガラス繊維布", "電子級ガラス繊維クロス"],
    ["電子ガラス繊維布", "電子級ガラス繊維クロス"],
    ["上友", "上猶"],
    ["上祐", "上猶"],
    ["上裕", "上猶"],
    ["上油", "上猶"],
    ["上陽", "上猶"],
    ["上犹", "上猶"],
    ["黄埔工業団地", "黄埠工業団地"],
    ["上海の新しいガラス繊維", "上猶の新しいガラス繊維"],
    ["江西省紅定", "江西鴻錠"],
  ],
  en: [
    ["electronic grade fiberglass cloth", "electronic-grade glass fiber fabric"],
    ["Electronic grade fiberglass cloth", "Electronic-grade glass fiber fabric"],
    ["electronic grade glass fiber cloth", "electronic-grade glass fiber fabric"],
    ["Electronic grade glass fiber cloth", "Electronic-grade glass fiber fabric"],
    ["electronic fiberglass cloth", "electronic glass fiber fabric"],
    ["Electronic fiberglass cloth", "Electronic glass fiber fabric"],
    ["electronic cloth", "electronic glass fabric"],
    ["Electronic cloth", "Electronic glass fabric"],
    ["Shanghai's new fiberglass", "Shangyou's new glass fiber"],
  ],
}

export const languageOptions: Array<{ code: Language; short: string; label: string }> = [
  { code: "zh", short: "中", label: "中文" },
  { code: "ja", short: "日", label: "日本語" },
  { code: "en", short: "EN", label: "English" },
]

export function getLanguage(): Language {
  if (typeof window === "undefined") return "zh"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === "ja" || stored === "en" ? stored : "zh"
}

export function setLanguage(language: Language) {
  if (typeof window === "undefined" || language === getLanguage()) return
  window.localStorage.setItem(STORAGE_KEY, language)
  window.location.reload()
}

export function applyDocumentLanguage() {
  if (typeof document === "undefined") return
  const language = getLanguage()
  document.documentElement.lang = languageCodes[language]
  document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')?.setAttribute("content", openGraphLocales[language])
}

export function t(value: string): string {
  const language = getLanguage()
  if (language === "zh" || !/[\u3400-\u9fff]/u.test(value) || value.startsWith("http")) return value

  const dictionary = generatedTranslations[language] as Record<string, string>
  const manual = manualTranslations[language]
  const exact = manual[value] ?? dictionary[value]
  if (exact !== undefined) return normalizeTarget(exact, language)

  let translated = value
  const phrases = { ...dictionary, ...manual }
  for (const [source, target] of Object.entries(phrases).sort(([a], [b]) => b.length - a.length)) {
    if (source.length > 36) continue
    translated = translated.replaceAll(source, target)
  }
  return normalizeTarget(translated, language)
}

function normalizeTarget(value: string, language: Exclude<Language, "zh">): string {
  let normalized = value
  for (const [source, target] of targetNormalizations[language]) normalized = normalized.replaceAll(source, target)
  if (language === "ja") normalized = isJapaneseArticlePage() ? toPoliteJapanese(normalized) : toPlainJapanese(normalized)
  return normalized
}

function isJapaneseArticlePage(): boolean {
  return typeof window !== "undefined" && /^\/news\/[^/]+\/?$/u.test(window.location.pathname)
}

function toPlainJapanese(value: string): string {
  const replacements: Array<[string, string]> = [
    ["ではありません", "ではない"],
    ["ではございません", "ではない"],
    ["となっております", "となっている"],
    ["されております", "されている"],
    ["しております", "している"],
    ["ております", "ている"],
    ["となっています", "となっている"],
    ["されています", "されている"],
    ["しています", "している"],
    ["していました", "していた"],
    ["されました", "された"],
    ["となりました", "となった"],
    ["ありました", "あった"],
    ["いました", "いた"],
    ["でした", "だった"],
    ["となります", "となる"],
    ["になります", "になる"],
    ["できます", "できる"],
    ["含まれます", "含まれる"],
    ["求められます", "求められる"],
    ["使用されます", "使用される"],
    ["評価されます", "評価される"],
    ["されます", "される"],
    ["あります", "ある"],
    ["います", "いる"],
    ["行います", "行う"],
    ["目指します", "目指す"],
    ["示します", "示す"],
    ["進めます", "進める"],
    ["高めます", "高める"],
    ["支えます", "支える"],
    ["応えます", "応える"],
    ["つなげます", "つなげる"],
    ["取り組みます", "取り組む"],
    ["向上させます", "向上"],
    ["築きます", "築く"],
    ["巻き取られます", "巻き取られる"],
    ["巻き付けます", "巻き付ける"],
    ["生まれます", "生まれる"],
    ["役立てます", "役立てる"],
    ["組み込まれるようにします", "組み込む"],
    ["です", ""],
  ]

  let plain = value
  for (const [source, target] of replacements) plain = plain.replaceAll(source, target)
  plain = plain.replace(/([\p{Script=Han}\p{Script=Katakana}ー]+)します/gu, "$1")
  return plain.replaceAll("。", " ").replace(/\s{2,}/gu, " ").trim()
}

function toPoliteJapanese(value: string): string {
  const replacements: Array<[RegExp, string]> = [
    [/である(?=。|$)/gu, "です"],
    [/だった(?=。|$)/gu, "でした"],
    [/となった(?=。|$)/gu, "となりました"],
    [/されている(?=。|$)/gu, "されています"],
    [/している(?=。|$)/gu, "しています"],
    [/していた(?=。|$)/gu, "していました"],
    [/された(?=。|$)/gu, "されました"],
    [/となる(?=。|$)/gu, "となります"],
    [/できる(?=。|$)/gu, "できます"],
    [/ある(?=。|$)/gu, "あります"],
    [/いる(?=。|$)/gu, "います"],
    [/示す(?=。|$)/gu, "示します"],
    [/進める(?=。|$)/gu, "進めます"],
    [/高める(?=。|$)/gu, "高めます"],
    [/支える(?=。|$)/gu, "支えます"],
    [/つなぐ(?=。|$)/gu, "つなぎます"],
    [/報じた(?=。|$)/gu, "報じました"],
    [/述べた(?=。|$)/gu, "述べました"],
    [/進めていた(?=。|$)/gu, "進めていました"],
    [/重点を置いた(?=。|$)/gu, "重点を置きました"],
    [/(?<![でま])した(?=。|$)/gu, "しました"],
    [/する(?=。|$)/gu, "します"],
    [/なる(?=。|$)/gu, "なります"],
  ]

  let polite = value
  for (const [pattern, replacement] of replacements) polite = polite.replace(pattern, replacement)
  return polite
}

export function localizeDeep<T>(value: T): T {
  if (typeof value === "string") return t(value) as T
  if (Array.isArray(value)) return value.map((item) => localizeDeep(item)) as T
  if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      ;(value as Record<string, unknown>)[key] = localizeDeep(item)
    }
  }
  return value
}
