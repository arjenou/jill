import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const dist = join(root, "dist")
const origin = "https://www.xingkefabric.com"
const languages = {
  zh: { prefix: "", htmlLang: "zh-CN", hreflang: "zh-CN", locale: "zh_CN", company: "江西星科电子基材有限公司" },
  en: { prefix: "/en", htmlLang: "en", hreflang: "en", locale: "en_US", company: "Jiangxi Xingke Electronic Substrate Co., Ltd." },
  ja: { prefix: "/ja", htmlLang: "ja", hreflang: "ja", locale: "ja_JP", company: "江西星科電子基材有限公司" },
}

const coreRoutes = [
  ["/", "电子级玻璃纤维布", "江西星科专注电子级玻璃纤维布制造，以规范工艺与持续改进服务电子基材产业。"],
  ["/about", "关于我们", "了解江西星科的公司概况、制造基地和发展基础。"],
  ["/business", "业务范围", "了解上犹玻纤产业集群中的矿物原料、玻璃纤维纱、电子级玻纤布和工业级玻纤布制造协同。"],
  ["/products", "产品中心", "查看江西星科 7628、2116、1080、3732 等电子级玻纤布产品。"],
  ["/capabilities", "制造能力", "了解江西星科的整经、浆纱、并轴、喷气织造、电子布后处理、验布与分切复卷能力。"],
  ["/honors", "荣誉资质", "查看江西星科的高新技术企业、绿色工厂、专精特新中小企业资质与授权专利。"],
  ["/news", "新闻中心", "查看江西星科企业动态、产业发展信息与公开媒体报道。"],
  ["/contact", "联系我们", "联系江西星科，咨询电子级玻纤布产品、交付和产业合作。"],
]

const overrides = {
  en: {
    "电子级玻璃纤维布": "Electronic-Grade Glass Fiber Fabric",
    "关于我们": "About Us",
    "业务范围": "Business Scope",
    "产品中心": "Products",
    "制造能力": "Manufacturing Capabilities",
    "荣誉资质": "Credentials",
    "新闻中心": "News",
    "联系我们": "Contact",
    "江西星科专注电子级玻璃纤维布制造，以规范工艺与持续改进服务电子基材产业。": "Jiangxi Xingke manufactures electronic-grade glass fiber fabric for the electronic substrate industry, backed by standardized processes and continuous improvement.",
    "了解江西星科的公司概况、制造基地和发展基础。": "Learn about Jiangxi Xingke, its manufacturing base and business foundation.",
    "了解上犹玻纤产业集群中的矿物原料、玻璃纤维纱、电子级玻纤布和工业级玻纤布制造协同。": "Explore collaboration across mineral processing, glass fiber yarn and electronic-grade and industrial glass fiber fabric manufacturing in Shangyou.",
    "查看江西星科 7628、2116、1080、3732 等电子级玻纤布产品。": "Explore Jiangxi Xingke electronic-grade glass fiber fabrics, including styles 7628, 2116, 1080 and 3732.",
    "了解江西星科的整经、浆纱、并轴、喷气织造、电子布后处理、验布与分切复卷能力。": "Explore Jiangxi Xingke’s warping, sizing, beam assembly, air-jet weaving, finishing, inspection, slitting and rewinding capabilities.",
    "查看江西星科的高新技术企业、绿色工厂、专精特新中小企业资质与授权专利。": "View Jiangxi Xingke’s National High-Tech Enterprise status, Green Factory and SRDI SME recognitions, and granted patents.",
    "查看江西星科企业动态、产业发展信息与公开媒体报道。": "Read company updates, industry developments and media coverage related to Jiangxi Xingke.",
    "联系江西星科，咨询电子级玻纤布产品、交付和产业合作。": "Contact Jiangxi Xingke about electronic-grade glass fiber fabric, delivery requirements and industry partnerships.",
    "江西日报头版关注上犹产业发展，星科生产现场亮相": "Jiangxi Daily Features Xingke Production Site in Front-Page Report",
    "江西日报头版报道上犹以工业强基、文旅赋能与融湾创新推动县域发展，星科电子玻纤布生产现场作为上犹玻纤新型复材产业代表场景亮相。": "Jiangxi Daily reported on Shangyou’s industrial development on its front page. Xingke Electronics’ production site was featured as a representative part of the county’s advanced glass fiber composites industry.",
    "新华社走进上犹，记录一根“细丝”串起的百亿产业": "Xinhua Reports on Shangyou’s Expanding Glass Fiber Industry",
    "新华社以图文报道呈现上犹玻纤产业链，星科电子生产车间与元源新材料制造、研发场景共同亮相。": "The report featured Xingke Electronics’ production workshop and Yuanyuan New Materials’ manufacturing and R&D facilities.",
    "元源新材料与江西星科将联合亮相 2024 中国国际复材展": "Yuanyuan New Materials and Jiangxi Xingke to Exhibit Together at China Composites Expo 2024",
    "两家企业将联合展示高品质玻璃纤维纱、工业级玻纤布和电子级玻纤布，与行业伙伴交流产品与应用需求。": "The two companies will jointly present high-quality glass fiber yarn, industrial glass fiber fabric and electronic-grade glass fiber fabric while connecting with industry partners on product and application needs.",
  },
  ja: {
    "电子级玻璃纤维布": "電子級ガラス繊維クロス",
    "关于我们": "会社情報",
    "业务范围": "事業領域",
    "产品中心": "製品情報",
    "制造能力": "生産体制",
    "荣誉资质": "認証・受賞",
    "新闻中心": "ニュース",
    "联系我们": "お問い合わせ",
    "江西星科专注电子级玻璃纤维布制造，以规范工艺与持续改进服务电子基材产业。": "江西星科は電子級ガラス繊維クロスを専門に、標準化された工程と継続的な改善で電子基板業界に貢献しています。",
    "了解江西星科的公司概况、制造基地和发展基础。": "江西星科の会社概要、製造拠点、事業基盤をご紹介します。",
    "了解上犹玻纤产业集群中的矿物原料、玻璃纤维纱、电子级玻纤布和工业级玻纤布制造协同。": "上猶のガラス繊維産業集積における鉱物原料、ガラス繊維糸、電子級・工業用ガラス繊維クロスの製造連携をご紹介します。",
    "查看江西星科 7628、2116、1080、3732 等电子级玻纤布产品。": "江西星科の7628、2116、1080、3732などの電子級ガラス繊維クロスをご紹介します。",
    "了解江西星科的整经、浆纱、并轴、喷气织造、电子布后处理、验布与分切复卷能力。": "江西星科の整経、サイジング、ビーミング、エアジェット製織、後処理、検反・スリット・巻き直しの体制をご紹介します。",
    "查看江西星科的高新技术企业、绿色工厂、专精特新中小企业资质与授权专利。": "江西星科の国家ハイテク企業認定、江西省グリーン工場、「専精特新」中小企業認定および登録特許をご紹介します。",
    "查看江西星科企业动态、产业发展信息与公开媒体报道。": "江西星科の企業情報、産業動向、メディア掲載情報をご紹介します。",
    "联系江西星科，咨询电子级玻纤布产品、交付和产业合作。": "電子級ガラス繊維クロス、納期、事業連携について江西星科へお問い合わせください。",
    "江西日报头版关注上犹产业发展，星科生产现场亮相": "江西日報一面、上猶の産業発展と星科の生産現場を紹介",
    "江西日报头版报道上犹以工业强基、文旅赋能与融湾创新推动县域发展，星科电子玻纤布生产现场作为上犹玻纤新型复材产业代表场景亮相。": "江西日報は一面で上猶県の産業発展を報じ、星科電子の生産現場を同県の先進ガラス繊維複合材料産業を代表する事例として紹介しました。",
    "新华社走进上犹，记录一根“细丝”串起的百亿产业": "新華社、上猶のガラス繊維産業を取材",
    "新华社以图文报道呈现上犹玻纤产业链，星科电子生产车间与元源新材料制造、研发场景共同亮相。": "新華社は上猶県のガラス繊維産業チェーンを写真と記事で紹介し、星科電子の生産現場と元源新材料の製造・研究開発拠点を取り上げました。",
    "元源新材料与江西星科将联合亮相 2024 中国国际复材展": "元源新材料と江西星科、2024中国国際複合材料展に共同出展予定",
    "两家企业将联合展示高品质玻璃纤维纱、工业级玻纤布和电子级玻纤布，与行业伙伴交流产品与应用需求。": "両社は高品質ガラス繊維糸、工業用ガラス繊維クロス、電子級ガラス繊維クロスを共同展示し、製品と用途について業界関係者と意見交換を行います。",
  },
}

const generatedSource = await readFile(join(root, "src/translations.generated.ts"), "utf8")
const generatedExpression = generatedSource
  .replace(/^\/\/[^\n]*\n/u, "")
  .replace(/^export const generatedTranslations[^=]*=\s*/u, "")
  .replace(/\s+as const\s*$/u, "")
const generated = Function(`"use strict"; return (${generatedExpression})`)()

const siteDataSource = await readFile(join(root, "src/site-data.ts"), "utf8")
const newsMatch = siteDataSource.match(/export const newsItems: NewsItem\[\] = (\[[\s\S]*?\n\])\n\nexport const stats/u)
if (!newsMatch) throw new Error("Unable to read news metadata from src/site-data.ts")
const newsItems = Function(`"use strict"; return (${newsMatch[1]})`)()

const normalize = (value, language) => {
  if (language === "ja") {
    return value
      .replaceAll("Yuanyuan New Materials", "元源新材料")
      .replaceAll("Xingke Electronics", "星科電子")
      .replaceAll("江西興科", "江西星科")
      .replaceAll("電子グレード", "電子級")
      .replaceAll("産業用ガラス繊維クロス", "工業用ガラス繊維クロス")
  }
  return value
}

function translate(value, language) {
  if (language === "zh") return value
  const legacy = value.replaceAll("元源新材料", "元源新材")
  const direct = overrides[language]?.[value]
    ?? overrides[language]?.[legacy]
    ?? generated[language]?.[value]
    ?? generated[language]?.[legacy]
  return normalize(direct ?? value, language)
}

const routes = [
  ...coreRoutes,
  ...newsItems.map((item) => [`/news/${item.slug}`, item.title, item.summary]),
]

const sourceHtml = await readFile(join(dist, "index.html"), "utf8")
const escapeAttribute = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;")
const absolute = (path) => `${origin}${path === "/" ? "/" : path}`

function replaceMeta(html, selector, value) {
  const escaped = escapeAttribute(value)
  const pattern = new RegExp(`(<meta\\s+[^>]*${selector}[^>]*content=["'])[^"']*(["']\\s*/?>)`, "iu")
  return html.replace(pattern, `$1${escaped}$2`)
}

function localizedPath(route, language) {
  const prefix = languages[language].prefix
  return `${prefix}${route === "/" ? "/" : `${route}/`}`
}

for (const [route, sourceTitle, sourceDescription] of routes) {
  for (const [language, config] of Object.entries(languages)) {
    const path = localizedPath(route, language)
    const url = absolute(path)
    const title = `${translate(sourceTitle, language)}｜${config.company}`
    const description = translate(sourceDescription, language)
    const alternates = Object.entries(languages)
      .map(([alternateLanguage, alternate]) => `    <link rel="alternate" hreflang="${alternate.hreflang}" href="${absolute(localizedPath(route, alternateLanguage))}" />`)
      .concat(`    <link rel="alternate" hreflang="x-default" href="${absolute(localizedPath(route, "zh"))}" />`)
      .join("\n")

    let html = sourceHtml
      .replace(/<html\s+lang=["'][^"']+["']/iu, `<html lang="${config.htmlLang}"`)
      .replace(/<title>[\s\S]*?<\/title>/iu, `<title>${escapeAttribute(title)}</title>`)
      .replace(/\s*<link\s+rel=["']alternate["'][^>]*>/giu, "")
      .replace(/<link\s+rel=["']canonical["'][^>]*>/iu, `<link rel="canonical" href="${url}" />\n${alternates}`)

    html = replaceMeta(html, 'name="description"', description)
    html = replaceMeta(html, 'name="keywords"', language === "zh"
      ? "江西星科,电子级玻纤布,电子布,玻璃纤维布,7628,2116,1080,3732,上犹玻纤"
      : language === "en"
        ? "Jiangxi Xingke,electronic-grade glass fiber fabric,electronic glass fabric,7628,2116,1080,3732,Shangyou glass fiber"
        : "江西星科,電子級ガラス繊維クロス,電子クロス,ガラス繊維クロス,7628,2116,1080,3732,上猶ガラス繊維")
    html = replaceMeta(html, 'property="og:locale"', config.locale)
    html = replaceMeta(html, 'property="og:title"', title)
    html = replaceMeta(html, 'property="og:description"', description)
    html = replaceMeta(html, 'property="og:site_name"', config.company)
    html = replaceMeta(html, 'property="og:url"', url)
    html = replaceMeta(html, 'name="twitter:title"', title)
    html = replaceMeta(html, 'name="twitter:description"', description)

    if (language === "en") {
      html = html
        .replace('"name": "江西星科电子基材有限公司"', '"name": "Jiangxi Xingke Electronic Substrate Co., Ltd."')
        .replace('"addressRegion": "江西省"', '"addressRegion": "Jiangxi"')
        .replace('"addressLocality": "赣州市上犹县"', '"addressLocality": "Shangyou County, Ganzhou"')
        .replace('"streetAddress": "黄埠工业园南区"', '"streetAddress": "South Zone, Huangbu Industrial Park"')
    } else if (language === "ja") {
      html = html
        .replace('"name": "江西星科电子基材有限公司"', '"name": "江西星科電子基材有限公司"')
        .replace('"addressRegion": "江西省"', '"addressRegion": "江西省"')
        .replace('"addressLocality": "赣州市上犹县"', '"addressLocality": "贛州市上猶県"')
        .replace('"streetAddress": "黄埠工业园南区"', '"streetAddress": "黄埠工業団地南区"')
    }

    const outputPath = path === "/" ? join(dist, "index.html") : join(dist, path.slice(1), "index.html")
    await mkdir(dirname(outputPath), { recursive: true })
    await writeFile(outputPath, html)
  }
}

const sitemapEntries = routes.map(([route]) => {
  const links = Object.entries(languages)
    .map(([language, config]) => `    <xhtml:link rel="alternate" hreflang="${config.hreflang}" href="${absolute(localizedPath(route, language))}" />`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(localizedPath(route, "zh"))}" />`)
    .join("\n")
  return `  <url>\n    <loc>${absolute(localizedPath(route, "zh"))}</loc>\n${links}\n  </url>`
}).join("\n")

await writeFile(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapEntries}\n</urlset>\n`)

console.log(`Generated localized metadata for ${routes.length * Object.keys(languages).length} routes.`)
