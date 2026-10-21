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
  ["联系我们", "/contact"],
] as const

export const stats = [
  { value: 2021, suffix: "", label: "公司成立" },
  { value: 200, suffix: " 台", label: "丰田喷气织机" },
  { value: 1, suffix: " 亿米", label: "项目规划年产能" },
  { value: 10, suffix: "+", label: "专利成果" },
]

export const products = [
  {
    code: "7628",
    type: "标准电子布",
    title: "面向规模化应用的基础型号",
    description: "用于覆铜板与印制电路板的基础增强材料，重视织造稳定性、布面均匀度与批次一致性。",
    applications: ["覆铜板", "多层 PCB", "工业电子"],
    image: "/assets/fabric-rolls.webp",
  },
  {
    code: "2116",
    type: "中薄型电子布",
    title: "兼顾薄型化与加工适配",
    description: "通过整经、浆纱、并轴与精密织造控制经纬张力和布面质量，服务中薄型电子基材应用。",
    applications: ["通信设备", "汽车电子", "消费电子"],
    image: "/assets/fabric-detail.webp",
  },
  {
    code: "1080",
    type: "薄型电子布",
    title: "服务轻薄化电子基材",
    description: "面向对厚度和均匀性要求更高的电子基材场景，依托喷气织造与后处理能力持续完善产品体系。",
    applications: ["轻薄基板", "高密度 PCB", "数字设备"],
    image: "/assets/fabric-open.webp",
  },
  {
    code: "3732",
    type: "电子与工业用布",
    title: "覆盖绝缘与增强场景",
    description: "面向电子、电气绝缘与工业复合材料应用，提供稳定的玻纤织物基材。",
    applications: ["电气绝缘", "电子基材", "工业复材"],
    image: "/assets/fabric-inspection.webp",
  },
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
    description: "采用池窑法拉丝生产工艺，具备玻璃配方与浸润剂研发能力，产品覆盖电子纱及多类玻璃纤维纱。",
    detail: "一期 5 万吨生产线于 2018 年点火投产",
    image: "/assets/yuanyuan-yarn.webp",
    icon: Factory,
  },
  {
    name: "江西星科",
    label: "电子级玻纤布",
    description: "以整浆、并轴、喷气织造及后处理设备为基础，生产多型号电子级玻璃纤维布。",
    detail: "一期配置 200 台丰田喷气织机",
    image: "/assets/xingke-line.webp",
    icon: Rows,
  },
  {
    name: "赣州广建",
    label: "工业玻纤布",
    description: "配置高速剑杆设备，面向绝缘板材与工业基材等领域提供玻璃纤维布产品。",
    detail: "面向多类绝缘与工业增强应用",
    image: "/assets/guangjian-line.webp",
    icon: Stack,
  },
]

export const capabilities = [
  { icon: ArrowsHorizontal, title: "整经与浆纱", copy: "2 台高速整浆设备，处理速度超过 200 米/分钟。" },
  { icon: Rows, title: "并轴控制", copy: "配置 6 轴并轴设备，服务经纱张力与织造准备。" },
  { icon: Wind, title: "喷气织造", copy: "一期配置 200 台丰田喷气织机，支持标准电子布生产。" },
  { icon: Drop, title: "后处理", copy: "覆盖脱浆、开纤与表面处理等电子布后处理环节。" },
]

export const honors = [
  { title: "国家高新技术企业", meta: "证书编号 GR202336002583", image: "/assets/honor-hightech.webp" },
  { title: "江西省绿色工厂", meta: "2024 年度江西省绿色制造名单", image: "/assets/honor-green.webp" },
  { title: "发明专利", meta: "围绕电子布工艺与设备持续创新", image: "/assets/honor-patent-invention.webp" },
  { title: "实用新型专利", meta: "形成十余项专利成果", image: "/assets/honor-patent-utility.webp" },
]

export const contacts = [
  { type: "phone", label: "业务咨询", value: "18170499588", href: "tel:18170499588" },
  { type: "phone", label: "固定电话", value: "0797-8504888 / 8504999", href: "tel:07978504888" },
  { type: "email", label: "电子邮箱", value: "xingkefabric@xingkefabric.com", href: "mailto:xingkefabric@xingkefabric.com" },
  { type: "map", label: "公司地址", value: "江西省赣州市上犹县黄埠工业园南区", href: "https://ditu.amap.com/search?query=江西星科电子基材有限公司" },
]
