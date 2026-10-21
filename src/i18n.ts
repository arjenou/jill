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
    "5.05 亿元": "5.05億元（約116.15億円）",
    "项目占地": "敷地面積",
    "61 亩": "約40,667㎡",
    "建筑面积": "延床面積",
    "3.2 万平方米": "32,000㎡",
    "注册资本": "登録資本金",
    "5000 万元": "5,000万元（約11.5億円）",
    "日元参考金额按人民币金额 × 23 估算（1 元人民币 = 23 日元；换算基准：2026 年 10 月 21 日）。": "参考円換算は人民元金額 × 23 で算出（1人民元＝23円、換算基準日：2026年10月21日）",
    "7 亿余元": "161億円超",
    "稳定制造": "安定した生産",
    "关注工艺稳定与批次一致性": "工程の安定性とロット間の均一性を重視",
    "持续改进": "継続的改善",
    "从设备、流程和检验中不断积累": "設備・工程・検査の各面で改善を蓄積",
    "协同服务": "連携対応",
    "与区域产业伙伴高效衔接": "地域の産業パートナーと効率的に連携",
    "法定代表人": "法定代表者",
    "董事长 / 实际控制人": "董事長 / 実質的支配者",
    "田云": "田云",
    "张全雷": "張全雷",
    "公司成立": "設立",
    "现有年产能": "現在の年間生産能力",
    "授权专利": "登録済み特許",
    "企业关键数据": "主要データ",
    "首页": "ホーム",
    "关于我们": "会社情報",
    "业务范围": "事業領域",
    "产品中心": "製品情報",
    "制造能力": "生産体制",
    "荣誉资质": "認証・受賞",
    "新闻中心": "ニュース",
    "联系我们": "お問い合わせ",
    "整经与浆纱": "整経・サイジング",
    "整经": "整経",
    "浆纱": "サイジング（糊付け）",
    "并轴控制": "ビーミング管理",
    "并轴": "ビーム組立",
    "喷气织造": "エアジェット織布",
    "后处理与验布": "後処理・検反",
    "丰田喷气织机": "豊田エアジェット織機",
    " 台": "台",
    " 亿米": "億メートル+",
    "业务联系": "お問い合わせ",
    "业务咨询": "営業窓口",
    "来源：": "出典：",
    "作者：": "著者：",
    "生产实景": "生産現場",
    "画册参考参数": "カタログ参考仕様",
    "选择网站语言": "言語を選択",
    "厚型电子级玻纤布": "厚型電子級ガラス繊維クロス",
    "电子级玻璃纤维布": "電子級ガラス繊維クロス",
    "集团产品系列": "製品ラインアップ",
    "工业级玻璃纤维布": "産業用ガラス繊維クロス",
    "面向电气绝缘与复合材料增强应用": "電気絶縁および複合材料の補強用途向け",
    "产品外观与织纹": "製品外観と織組織",
    "通过近景呈现玻纤布的平纹组织、布面状态与铺展形态。图片用于产品外观展示，不对应单一型号。": "ガラス繊維クロスの平織組織、生地表面、展開状態をクローズアップで紹介します。写真は製品外観の紹介を目的としており、特定の品番を示すものではありません。",
    "采用 G75 玻璃纤维纱平纹织造，对经纬密、基重、布面均匀性与批次一致性实施过程控制。": "G75ガラス繊維糸を使用した平織で、経緯密度、坪量、生地の均一性、ロット間の安定性を工程内で管理しています。",
    "面向电子、电气绝缘与工业复合材料应用。具体技术参数及表面处理要求，请联系业务团队确认。": "電子材料、電気絶縁、産業用複合材料向けです。技術仕様および表面処理の要件は営業担当までお問い合わせください。",
    "江西星科与江西鸿锭、元源新材料、赣州广建为同一实际控制人旗下的关联企业，业务覆盖矿物原料加工、玻纤纱制造及电子级与工业级玻纤布织造。": "江西星科、江西鴻錠、元源新材料、贛州広建は、同一の実質的支配者の傘下にある関連企業です。鉱物原料加工、ガラス繊維糸製造、電子級および産業用ガラス繊維クロスの製織を手がけています。",
    "配置可并合 6 个经轴的并轴设备，将纱片合并并卷绕成 1 个织轴。": "6本の整経ビームの経糸をまとめ、1本の織機用ビームに巻き取るビーム組立設備を備えています。",
    "将 6 个经轴的纱片并合并卷绕成 1 个织轴，控制经密与各片经纱之间的张力一致性。": "6本の整経ビームの経糸をまとめて1本の織機用ビームに巻き取り、経糸密度と各シートの張力を管理します。",
    "以制造能力为基础": "確かな生産技術を基盤に",
    "园区与制造基地": "工業団地と生産拠点",
    "厂房与园区道路": "工場棟と工業団地内道路",
    "江西星科厂房及园区道路": "江西星科の工場棟および工業団地内の道路",
    "办公与现场管理配套": "オフィス・付帯設備",
    "更多报道": "その他の記事",
    "样品与技术资料申请": "サンプル・技術資料のご依頼",
    "欢迎联系我们，沟通产品规格、交付要求与合作机会。": "製品仕様、納期条件、協業についてお気軽にお問い合わせください。",
    "织造环节关注经纬纱张力、布面状态与连续运行；后处理包括脱浆、开纤、表面处理、烘干定型及卷绕成卷。": "製織工程では経糸・緯糸の張力、生地の状態、連続運転を管理します。糊抜き、開繊、表面処理、乾燥・熱セット、検反などの主要工程に対応します。",
    "覆盖脱浆、开纤、表面处理、烘干定型及成品验布等关键环节。": "糊抜き、開繊、表面処理、乾燥・熱セット、検反などの主要工程に対応します。",
    "从丰田喷气织机连续织造，到布面卷绕、后处理和成品周转，以真实生产现场呈现电子级玻纤布的制造过程。": "豊田エアジェット織機による連続製織から、生地の巻取り、後処理、製品の搬送まで、電子級ガラス繊維クロスの製造工程を実際の生産現場で紹介します。",
    "玻璃纤维纱筒自动化周转与输送": "ガラス繊維糸ボビンの自動搬送",
    "玻璃纤维纱筒自动化周转与输送区域": "ガラス繊維糸ボビンの自動搬送エリア",
    "薄型、中薄型及厚型电子级玻纤布": "薄手・中薄手・厚手の電子級ガラス繊維クロス",
    "产品覆盖薄型、中薄型及厚型电子级玻纤布，并提供低介电、高强度及工业用途玻纤布系列。": "薄手・中薄手・厚手の電子級ガラス繊維クロスに加え、低誘電、高強度および産業用のガラス繊維クロスを取り揃えています。",
    "集团产业链协同": "グループ・サプライチェーン連携",
    "集团内关联企业覆盖矿物原料加工、玻纤纱制造及电子级与工业级玻纤布织造，形成上下游协同的生产体系。": "グループ関連企業が鉱物原料加工、ガラス繊維糸製造、電子級・産業用ガラス繊維クロスの製織を担い、川上から川下まで連携した生産体制を構築しています。",
    "江西星科与江西鸿锭、元源新材料、赣州广建为同一实际控制人旗下的关联企业，分别承担矿物原料加工、池窑拉丝制纱及玻纤织物制造等产业环节。": "江西星科、江西鴻錠、元源新材料、贛州広建は、同一の実質的支配者の傘下にある関連企業です。各社が鉱物原料加工、池窯によるガラス繊維糸製造、ガラス繊維クロス製造などの工程を担っています。",
    "六道关键制造环节": "6つの主要製造工程",
    "明确各阶段的关键控制点，确保工序之间顺畅衔接。": "各工程の重要管理点を明確にし、工程間を円滑につなぎます。",
    "依托生产设备与规范工艺，提供稳定的产品与交付支持。": "生産設備と標準化された工程により、安定した製品供給を支えています。",
    "国家高新技术企业、江西省绿色工厂及已获授权专利，共同构成星科规范制造的重要基础。": "国家ハイテク企業、江西省グリーン工場、登録済み特許を基盤に、標準化された生産を推進しています。",
    "江西星科电子基材有限公司成立于 2021 年 5 月，位于江西省赣州市上犹县黄埠工业园南区，主要从事电子级玻璃纤维布生产和销售。": "江西星科電子基材有限公司は2021年5月に設立され、江西省贛州市上猶県黄埠工業団地南区で電子級ガラス繊維クロスの製造・販売を行っています。",
    "江西星科电子基材有限公司成立于 2021 年 5 月，位于江西省赣州市上犹县黄埠工业园南区，主要从事电子级玻璃纤维布生产和销售，现已具备年产 1 亿米玻璃纤维布的生产能力。": "江西星科電子基材有限公司は2021年5月に設立され、江西省贛州市上猶県黄埠工業団地南区で電子級ガラス繊維クロスの製造・販売を行っています。現在、年間1億メートルのガラス繊維クロス生産能力を備えています。",
    "围绕电子布生产建立整经、浆纱、并轴、喷气织造及后处理能力，以设备基础和过程控制支持产品稳定性。": "電子クロスの生産に必要な整経、サイジング、ビーム組立、エアジェット製織、後処理の体制を整え、設備と工程管理によって製品の安定性を支えています。",
    "公司持续完善生产配置、资质建设与制造管理，稳步推进电子级玻纤布业务发展。": "生産設備、認証、製造管理を継続的に整備し、電子級ガラス繊維クロス事業を着実に発展させています。",
    "生产建设": "生産体制",
    "已配置并投入使用 200 台丰田喷气织机，形成电子级玻纤布织造与后处理能力。": "豊田エアジェット織機200台を導入・稼働し、電子級ガラス繊維クロスの製織・後処理体制を構築しています。",
    "集团内企业生产玻璃纤维纱、电子级玻璃纤维布、低介电玻璃纤维布、高强度玻璃纤维布及工业级玻璃纤维布，覆盖多类基材与复合材料应用。": "グループ各社は、ガラス繊維糸、電子級・低誘電・高強度・産業用のガラス繊維クロスを生産し、各種基材および複合材料用途に対応しています。",
    "关注经纬密、基重、实际厚度与后处理的一致性，为后续层压和加工提供稳定基材。": "経緯密度、坪量、実測厚さ、後処理の一貫性を管理し、積層・加工工程に安定した基材を提供します。",
    "以整经、浆纱、并轴、喷气织造及后处理设备为基础，生产多型号电子级玻璃纤维布。": "整経、サイジング、ビーム組立、エアジェット製織、後処理設備を基盤に、各種電子級ガラス繊維クロスを生産しています。",
    "2 台高速整浆设备完成整经与浆纱，为经纱排列和张力一致性建立基础。": "高速整経・サイジング設備2台で経糸を準備し、配列と張力の均一性を整えます。",
    "检查外观、幅宽和基重，检测实际厚度并核对规格要求，再按交付要求完成分切复卷、包装与批次标识。": "外観、幅、坪量を確認し、実測厚さを仕様と照合したうえで、スリット、巻き直し、梱包、ロット表示を行います。",
    "外观、幅宽、基重、实际厚度、卷长和批次追溯记录": "外観、幅、坪量、実測厚さ、巻長、ロット追跡記録",
    "围绕电子布生产工艺与设备，已获授权专利十余项。": "電子クロスの製造工程・設備に関して、10件を超える登録済み特許を保有しています。",
    "已获授权专利十余项": "登録済み特許10件以上",
    "产品型号与规格确认": "品番・仕様の確認",
    "生产现场与质量能力交流": "生産現場・品質体制のご相談",
    "交付需求与产业合作": "納期条件・事業連携",
    "元源新材与江西星科将联合亮相 2024 中国国际复材展": "元源新材料と江西星科、2024中国国際複合材料展に共同出展予定",
    "两家企业将联合展示高品质玻璃纤维纱、工业级玻纤布和电子级玻纤布，与行业伙伴交流产品与应用需求。": "両社は高品質なガラス繊維糸、産業用ガラス繊維クロス、電子級ガラス繊維クロスを共同展示し、製品と用途について業界関係者と交流する予定です。",
    "两家企业将以联合展台集中呈现玻纤纱、工业布和电子布产品，展示区域上下游协同能力。": "共同ブースでガラス繊維糸、産業用クロス、電子クロスを紹介し、地域のサプライチェーン連携を発信する予定です。",
    "2024 中国国际复合材料工业技术展览会将于 9 月 2 日至 4 日举行，元源新材料与江西星科将联合参展，重点展示玻璃纤维纱、工业级玻纤布及高性能电子级玻纤布。": "2024中国国際複合材料工業技術展は9月2日から4日まで開催されます。元源新材料と江西星科は共同出展し、ガラス繊維糸、産業用ガラス繊維クロス、高性能電子級ガラス繊維クロスを中心に展示します。",
    "江西星科将重点介绍围绕电子级玻纤布建设的整经、浆纱、并轴、喷气织造与后处理能力，产品面向电子基材等应用。": "江西星科は、電子級ガラス繊維クロスの整経、サイジング、ビーム組立、エアジェット製織、後処理の生産体制を紹介します。製品は電子基材などの用途に対応します。",
    "联合参展将使产业链上下游产品在同一场景中集中呈现，并为企业与客户、设备及材料伙伴开展技术交流提供窗口。": "共同出展により、サプライチェーン上の各製品を一堂に紹介し、お客様や設備・材料パートナーとの技術交流の機会を設けます。",
    "面向多类绝缘与工业增强应用": "各種電気絶縁・産業用補強用途向け",
  },
  en: {
    "江西星科电子基材有限公司": "Jiangxi Xingke Electronic Substrate Co., Ltd.",
    "电子级玻璃纤维布": "Electronic-Grade Glass Fiber Fabric",
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
    "法定代表人": "Legal Representative",
    "董事长 / 实际控制人": "Chairman / actual controller",
    "田云": "Tian Yun",
    "张全雷": "Zhang Quanlei",
    "公司成立": "Established",
    "现有年产能": "Current Annual Capacity",
    "授权专利": "Granted Patents",
    "企业关键数据": "Key facts",
    "首页": "Home",
    "关于我们": "About",
    "业务范围": "Business",
    "产品中心": "Products",
    "制造能力": "Manufacturing",
    "荣誉资质": "Credentials",
    "新闻中心": "News",
    "联系我们": "Contact",
    "整经与浆纱": "Warping and Sizing",
    "浆纱": "Sizing",
    "并轴控制": "Beam Assembly",
    "并轴": "Beam Assembly",
    "喷气织造": "Air-Jet Weaving",
    "后处理与验布": "Finishing and Inspection",
    "丰田喷气织机": "Toyota Air-Jet Looms",
    " 台": "",
    " 亿米": "00\u00a0million\u00a0Meter+",
    "业务联系": "Sales Enquiries",
    "业务咨询": "Sales Enquiries",
    "来源：": "Source: ",
    "作者：": "Author: ",
    "生产实景": " production floor",
    "画册参考参数": " catalog reference specifications",
    "选择网站语言": "Select language",
    "厚型电子级玻纤布": "Heavy Electronic-Grade Glass Fiber Fabric",
    "集团产品系列": "Product Portfolio",
    "采用 G75 玻璃纤维纱平纹织造，对经纬密、基重、布面均匀性与批次一致性实施过程控制。": "Woven from G75 glass fiber yarn in a plain weave, this fabric is manufactured with controlled yarn density, basis weight and batch consistency.",
    "面向电子、电气绝缘与工业复合材料应用。具体技术参数及表面处理要求，请联系业务团队确认。": "Designed for electronics, electrical insulation and industrial composite applications. Please contact our sales team to confirm specific technical parameters and surface treatment requirements.",
    "日元参考金额按人民币金额 × 23 估算（1 元人民币 = 23 日元；换算基准：2026 年 10 月 21 日）。": "Japanese yen reference amounts are estimated at RMB × 23 (RMB 1 = JPY 23; conversion reference date: October 21, 2026).",
    "了解江西星科的整经、浆纱、并轴、喷气织造、电子布后处理、验布与分切复卷能力。": "Explore Jiangxi Xingke's capabilities in warping, sizing, beam assembly, air-jet weaving, electronic glass fabric finishing, inspection, slitting and rewinding.",
    "查看江西星科的高新技术企业、绿色工厂与授权专利。": "View Jiangxi Xingke's National High-Tech Enterprise status, Green Factory recognition and granted patents.",
    "以制造能力为基础": "Built on Manufacturing Expertise",
    "办公与现场管理配套": "Office and Supporting Facilities",
    "六道关键制造环节": "Six Key Manufacturing Stages",
    "明确各阶段的关键控制点，确保工序之间顺畅衔接。": "Define the key control points and ensure smooth transitions between stages.",
    "织造环节关注经纬纱张力、布面状态与连续运行；后处理包括脱浆、开纤、表面处理、烘干定型及卷绕成卷。": "The weaving stage focuses on warp and weft tension, fabric condition and continuous operation. Finishing operations include desizing, fiber opening, surface treatment, drying, setting and winding into rolls.",
    "经纱、纬纱在喷气织机上完成布面成形与连续卷绕。": "Warp and weft yarns are interlaced on air-jet looms to form fabric, which is continuously wound into rolls.",
    "对经纱进行上浆保护，降低毛羽与断经，为连续织造建立稳定基础。": "The warp yarns are sized to protect them, reduce fuzz and warp breaks, and support continuous weaving.",
    "薄型、中薄型及厚型电子级玻纤布": "Thin, Medium-Thin and Thick Electronic-Grade Glass Fiber Fabrics",
    "产品覆盖薄型、中薄型及厚型电子级玻纤布，并提供低介电、高强度及工业用途玻纤布系列。": "Our product range includes thin, medium-thin and thick electronic-grade glass fiber fabrics, as well as low-dielectric, high-strength and industrial glass fiber fabrics.",
    "集团产业链协同": "Group Supply-Chain Collaboration",
    "集团内关联企业覆盖矿物原料加工、玻纤纱制造及电子级与工业级玻纤布织造，形成上下游协同的生产体系。": "Affiliated group companies cover mineral processing, glass fiber yarn manufacturing, and electronic-grade and industrial glass fiber fabric weaving, forming a coordinated upstream-to-downstream production system.",
    "江西星科与江西鸿锭、元源新材料、赣州广建为同一实际控制人旗下的关联企业，分别承担矿物原料加工、池窑拉丝制纱及玻纤织物制造等产业环节。": "Jiangxi Xingke, Jiangxi Hongding, Yuanyuan New Materials and Ganzhou Guangjian are affiliated companies under the same actual controller. They respectively undertake mineral processing, tank-furnace glass fiber yarn production and glass fiber fabric manufacturing.",
    "编织工艺": "Weaving Process",
    "织造过程": "Weaving Process",
    "缠绕成型": "Filament Winding",
    "拉挤成型": "Pultrusion",
    "挤出与注塑": "Extrusion and Injection Molding",
    "喷射成型": "Spray Molding",
    "手糊成型": "Hand Lay-Up",
    "配置可并合 6 个经轴的并轴设备，将纱片合并并卷绕成 1 个织轴。": "The beam assembling machine combines warp sheets from six warp beams onto one loom beam.",
    "将 6 个经轴的纱片并合并卷绕成 1 个织轴，控制经密与各片经纱之间的张力一致性。": "Warp sheets from six warp beams are assembled onto one loom beam while yarn density and sheet tension are controlled.",
    "样品与技术资料申请": "Sample and Technical Data Requests",
    "欢迎联系我们，沟通产品规格、交付要求与合作机会。": "Contact us to discuss product specifications, delivery requirements and partnership opportunities.",
    "江西星科与江西鸿锭、元源新材料、赣州广建为同一实际控制人旗下的关联企业，业务覆盖矿物原料加工、玻纤纱制造及电子级与工业级玻纤布织造。": "Jiangxi Xingke, Jiangxi Hongding, Yuanyuan New Materials and Ganzhou Guangjian are affiliated companies under the same actual controller. Their operations cover mineral processing, glass fiber yarn production, and the weaving of electronic-grade and industrial glass fiber fabrics.",
    "工业级玻璃纤维布": "Industrial Glass Fiber Fabric",
    "面向电气绝缘与复合材料增强应用": "For electrical insulation and composite reinforcement applications.",
    "更多报道": "More Reports",
    "依托生产设备与规范工艺，提供稳定的产品与交付支持。": "Production equipment and standardized processes support consistent products and reliable delivery.",
    "国家高新技术企业、江西省绿色工厂及已获授权专利，共同构成星科规范制造的重要基础。": "National High-Tech Enterprise status, Jiangxi Green Factory recognition and granted patents support Xingke's standardized manufacturing.",
    "江西星科电子基材有限公司成立于 2021 年 5 月，位于江西省赣州市上犹县黄埠工业园南区，主要从事电子级玻璃纤维布生产和销售。": "Founded in May 2021, Jiangxi Xingke Electronic Substrate Co., Ltd. manufactures and sells electronic-grade glass fiber fabric in the southern area of Huangbu Industrial Park, Shangyou County, Ganzhou, Jiangxi.",
    "江西星科电子基材有限公司成立于 2021 年 5 月，位于江西省赣州市上犹县黄埠工业园南区，主要从事电子级玻璃纤维布生产和销售，现已具备年产 1 亿米玻璃纤维布的生产能力。": "Founded in May 2021, Jiangxi Xingke Electronic Substrate Co., Ltd. manufactures and sells electronic-grade glass fiber fabric in the southern area of Huangbu Industrial Park, Shangyou County, Ganzhou, Jiangxi. The company now has an annual production capacity of 100 million meters of glass fiber fabric.",
    "围绕电子布生产建立整经、浆纱、并轴、喷气织造及后处理能力，以设备基础和过程控制支持产品稳定性。": "Xingke combines warping, sizing, beam assembly, air-jet weaving and finishing capabilities, supported by production equipment and process control.",
    "公司持续完善生产配置、资质建设与制造管理，稳步推进电子级玻纤布业务发展。": "Xingke continues to strengthen production capacity, credentials and manufacturing management as its electronic-grade glass fiber fabric business develops.",
    "生产建设": "Production Capacity",
    "已配置并投入使用 200 台丰田喷气织机，形成电子级玻纤布织造与后处理能力。": "Two hundred Toyota air-jet looms are installed and in operation, supporting electronic-grade glass fiber fabric weaving and finishing.",
    "集团内企业生产玻璃纤维纱、电子级玻璃纤维布、低介电玻璃纤维布、高强度玻璃纤维布及工业级玻璃纤维布，覆盖多类基材与复合材料应用。": "Group companies manufacture glass fiber yarn, electronic-grade, low-dielectric, high-strength and industrial glass fiber fabrics for a range of substrate and composite applications.",
    "关注经纬密、基重、实际厚度与后处理的一致性，为后续层压和加工提供稳定基材。": "Warp and weft density, basis weight, actual thickness and finishing consistency are controlled to support downstream lamination and processing.",
    "以整经、浆纱、并轴、喷气织造及后处理设备为基础，生产多型号电子级玻璃纤维布。": "Warping, sizing, beam assembly, air-jet weaving and finishing equipment support the production of multiple electronic-grade glass fiber fabric styles.",
    "2 台高速整浆设备完成整经与浆纱，为经纱排列和张力一致性建立基础。": "Two high-speed warping and sizing lines prepare the warp for consistent yarn alignment and tension.",
    "检查外观、幅宽和基重，检测实际厚度并核对规格要求，再按交付要求完成分切复卷、包装与批次标识。": "Inspect appearance, width and basis weight, measure actual thickness against specification requirements, then complete slitting, rewinding, packaging and batch identification.",
    "外观、幅宽、基重、实际厚度、卷长和批次追溯记录": "Appearance, width, basis weight, actual thickness, roll length and batch traceability records",
    "围绕电子布生产工艺与设备，已获授权专利十余项。": "More than ten patents have been granted for electronic glass fabric production processes and equipment.",
    "已获授权专利十余项": "More Than Ten Granted Patents",
    "产品型号与规格确认": "Product Style and Specification Confirmation",
    "生产现场与质量能力交流": "Production and Quality Capability Discussions",
    "交付需求与产业合作": "Delivery Requirements and Industry Partnerships",
    "元源新材与江西星科将联合亮相 2024 中国国际复材展": "Yuanyuan New Materials and Jiangxi Xingke to Exhibit Together at China Composites Expo 2024",
    "两家企业将联合展示高品质玻璃纤维纱、工业级玻纤布和电子级玻纤布，与行业伙伴交流产品与应用需求。": "The two companies will jointly present high-quality glass fiber yarn, industrial glass fiber fabric and electronic-grade glass fiber fabric, and discuss product and application requirements with industry partners.",
    "两家企业将以联合展台集中呈现玻纤纱、工业布和电子布产品，展示区域上下游协同能力。": "A joint booth will bring together glass fiber yarn, industrial fabric and electronic glass fabric, highlighting regional supply-chain collaboration.",
    "2024 中国国际复合材料工业技术展览会将于 9 月 2 日至 4 日举行，元源新材料与江西星科将联合参展，重点展示玻璃纤维纱、工业级玻纤布及高性能电子级玻纤布。": "China Composites Expo 2024 will take place from September 2 to 4. Yuanyuan New Materials and Jiangxi Xingke will exhibit together, featuring glass fiber yarn, industrial glass fiber fabric and high-performance electronic-grade glass fiber fabric.",
    "江西星科将重点介绍围绕电子级玻纤布建设的整经、浆纱、并轴、喷气织造与后处理能力，产品面向电子基材等应用。": "Jiangxi Xingke will present its warping, sizing, beam assembly, air-jet weaving and finishing capabilities for electronic-grade glass fiber fabric used in electronic substrate applications.",
    "联合参展将使产业链上下游产品在同一场景中集中呈现，并为企业与客户、设备及材料伙伴开展技术交流提供窗口。": "The joint exhibition will bring upstream and downstream products together and create opportunities for technical discussions with customers, equipment suppliers and material partners.",
    "面向多类绝缘与工业增强应用": "For a Range of Electrical Insulation and Industrial Reinforcement Applications",
    "整经": "Warping",
    "电气绝缘": "Electrical Insulation",
    "基重": "Basis Weight",
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
    ["グラスファイバークロス", "ガラス繊維クロス"],
    ["グラスファイバー生地", "ガラス繊維クロス"],
    ["グラスファイバー糸", "ガラス繊維糸"],
    ["グラスファイバー", "ガラス繊維"],
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
  if (language === "ja") {
    if (isJapaneseArticlePage()) normalized = toPoliteJapanese(normalized)
    else normalized = normalized.replaceAll("。", " ").replace(/\s{2,}/gu, " ").trim()
  }
  return normalized
}

function isJapaneseArticlePage(): boolean {
  return typeof window !== "undefined" && /^\/news\/[^/]+\/?$/u.test(window.location.pathname)
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
