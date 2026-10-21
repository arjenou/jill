import { useEffect, useRef, useState, type ReactNode } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import {
  ArrowRight,
  ArrowsHorizontal,
  Buildings,
  Check,
  Drop,
  EnvelopeSimple,
  Factory,
  MapPin,
  Mountains,
  Phone,
  Rows,
  SealCheck,
  Stack,
  Wind,
} from "@phosphor-icons/react"
import { animate, motion, useInView, useReducedMotion } from "motion/react"
import { cn } from "./lib"

const navigation = [
  ["关于我们", "#about"],
  ["业务范围", "#business"],
  ["产品展示", "#products"],
  ["制造能力", "#capabilities"],
  ["荣誉资质", "#honors"],
  ["联系我们", "#contact"],
]

const products = [
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

const businesses = [
  {
    name: "江西鸿锭",
    label: "矿物原料加工",
    description: "围绕叶腊石、石英砂、石灰石、白云石等玻纤矿物原料开展加工。",
    image: "/assets/hongding-materials.webp",
    icon: Mountains,
  },
  {
    name: "元源新材料",
    label: "玻璃纤维纱制造",
    description: "采用池窑法拉丝生产工艺，产品覆盖电子纱及多类玻璃纤维纱。",
    image: "/assets/yuanyuan-yarn.webp",
    icon: Factory,
  },
  {
    name: "江西星科",
    label: "电子级玻纤布",
    description: "以整浆、并轴、喷气织造及后处理设备为基础，生产多型号电子级玻纤布。",
    image: "/assets/xingke-line.webp",
    icon: Rows,
  },
  {
    name: "赣州广建",
    label: "工业玻纤布",
    description: "配置高速剑杆设备，面向绝缘板材与工业基材等领域提供玻纤布产品。",
    image: "/assets/guangjian-line.webp",
    icon: Stack,
  },
]

const capabilities = [
  [ArrowsHorizontal, "整经与浆纱", "2 台高速整浆设备，处理速度超过 200 米/分钟。"],
  [Rows, "并轴控制", "配置 6 轴并轴设备，服务经纱张力与织造准备。"],
  [Wind, "喷气织造", "一期配置 200 台丰田喷气织机，支持标准电子布生产。"],
  [Drop, "后处理", "覆盖脱浆、开纤与表面处理等电子布后处理环节。"],
]

const honors = [
  { title: "国家高新技术企业", meta: "证书编号 GR202336002583", image: "/assets/honor-hightech.webp" },
  { title: "江西省绿色工厂", meta: "2024 年度江西省绿色制造名单", image: "/assets/honor-green.webp" },
  { title: "发明专利", meta: "围绕电子布工艺与设备持续创新", image: "/assets/honor-patent-invention.webp" },
  { title: "实用新型专利", meta: "形成十余项专利成果", image: "/assets/honor-patent-utility.webp" },
]

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.52, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

function SectionLine() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.span
      aria-hidden="true"
      className="mb-7 block h-1 w-16 origin-left bg-accent"
      initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.44, ease: "easeOut" }}
    />
  )
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(elementRef, { once: true, amount: 0.8 })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const element = elementRef.current
    if (!element || !isInView) return

    if (reduceMotion) {
      element.textContent = String(value)
      return
    }

    const controls = animate(0, value, {
      duration: 0.9,
      ease: "easeOut",
      onUpdate: (latest) => {
        element.textContent = String(Math.round(latest))
      },
    })

    return () => controls.stop()
  }, [isInView, reduceMotion, value])

  return <><span ref={elementRef}>{value}</span>{suffix}</>
}

function SectionTitle({ title, description, className }: { title: string; description?: string; className?: string }) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <SectionLine />
      <h2 className="text-balance text-3xl font-semibold leading-[1.25] tracking-[-0.025em] text-ink sm:text-4xl lg:text-[3.25rem]">
        {title}
      </h2>
      {description ? <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-steel sm:text-lg">{description}</p> : null}
    </Reveal>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label="江西星科电子基材有限公司首页">
          <img src="/assets/xingke-mark.png" alt="" className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11" />
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-wide text-ink sm:text-base">江西星科电子基材有限公司</span>
            <span className="hidden text-[10px] font-medium tracking-[0.08em] text-steel sm:block">JIANGXI XINGKE ELECTRONIC SUBSTRATE</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="主要导航">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} className="relative py-2 text-[13px] font-medium text-ink transition-colors duration-150 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-150 hover:text-accent hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden h-11 shrink-0 items-center gap-3 bg-accent px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 xl:flex">
          业务联系 <ArrowRight size={17} aria-hidden="true" />
        </a>

        <div className="absolute right-5 shrink-0 sm:right-8 xl:hidden">
          <button type="button" aria-label={menuOpen ? "关闭网站菜单" : "打开网站菜单"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="flex size-11 items-center justify-center text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <span className="text-xs font-semibold tracking-[0.12em]">{menuOpen ? "关闭" : "菜单"}</span>
          </button>
          {menuOpen ? <nav aria-label="移动端导航" className="absolute right-0 top-[59px] w-[min(21rem,calc(100vw-2.5rem))] border border-line bg-white p-3 shadow-[0_24px_60px_rgba(10,35,65,0.16)]">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-line px-3 py-3.5 text-sm font-medium text-ink last:border-0 hover:bg-mist hover:text-accent">
                {label} <ArrowRight size={16} aria-hidden="true" />
              </a>
            ))}
          </nav> : null}
        </div>
      </div>
    </header>
  )
}

function App() {
  const reduceMotion = useReducedMotion()

  return (
    <div id="top" className="min-h-dvh bg-paper text-ink">
      <a href="#main" className="sr-only z-50 bg-white px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">跳到主要内容</a>
      <Header />

      <main id="main">
        <section className="hero-grid bg-navy text-white">
          <motion.div
            className="relative z-10 flex items-center px-5 py-12 sm:px-8 sm:py-14 lg:min-h-[calc(100dvh-5rem)] lg:px-12"
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.58, ease: "easeOut" }}
          >
            <div className="mx-auto w-full max-w-[600px] lg:mx-0 lg:ml-auto lg:pr-14 xl:pr-20">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-soft">Electronic Glass Fiber Fabric</p>
              <h1 className="mt-5 text-balance text-[clamp(2.75rem,6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.045em]">
                精密织造<br />稳定交付
              </h1>
              <p className="mt-7 max-w-lg text-pretty text-base leading-8 text-white/76 sm:text-lg">
                聚焦电子级玻璃纤维布，以规范工艺与持续改进服务电子基材产业。
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a href="#capabilities" className="inline-flex h-12 items-center gap-3 bg-white px-6 text-sm font-semibold text-navy transition-colors duration-150 hover:bg-blue-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  了解制造能力 <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a href="#products" className="inline-flex h-12 items-center gap-2 border-b border-white/60 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:text-blue-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  查看产品体系
                </a>
              </div>
            </div>
          </motion.div>

          <div className="relative min-h-[38svh] overflow-hidden sm:min-h-[46svh] lg:min-h-[calc(100dvh-5rem)]">
            <motion.img
              src="/assets/hero-weaving.webp"
              alt="江西星科电子级玻纤布织造现场"
              className="absolute inset-0 h-full w-full object-cover object-center"
              initial={reduceMotion ? false : { opacity: 0.65, scale: 1.035 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/30 bg-navy/86 px-5 py-4 text-xs font-medium tracking-[0.12em] text-white/80 backdrop-blur-sm sm:px-8 lg:px-10">
              ELECTRONIC MATERIALS · PRECISION WEAVING
            </div>
          </div>
        </section>

        <section aria-label="企业关键数据" className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
            {[
              { value: 2021, suffix: "", label: "公司成立" },
              { value: 200, suffix: " 台", label: "丰田喷气织机" },
              { value: 1, suffix: " 亿米", label: "项目规划年产能" },
              { value: 10, suffix: "+", label: "专利成果" },
            ].map((stat, index) => (
              <div key={stat.label} className={cn("relative py-8 sm:py-10 lg:py-12", index % 2 === 0 ? "border-r border-line pr-5" : "pl-5", index === 1 && "lg:border-r lg:pr-8", index === 2 && "border-r border-line pr-5 lg:pl-8", index === 3 && "lg:pl-8")}>
                <p className="text-3xl font-semibold tracking-[-0.035em] text-navy sm:text-4xl lg:text-5xl"><CountUp value={stat.value} suffix={stat.suffix} /></p>
                <p className="mt-3 text-sm font-medium text-steel">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-paper py-20 sm:py-28 lg:py-36">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-20 lg:px-12">
            <div>
              <SectionTitle title="扎根上犹，专注电子级玻纤布制造" description="江西星科电子基材有限公司成立于 2021 年，位于江西省赣州市上犹县黄埠工业园南区。公司主要从事电子级玻纤布生产和销售。" />
              <dl className="mt-10 grid gap-7 border-t border-line pt-8 sm:grid-cols-2">
                <div>
                  <dt className="text-2xl font-semibold text-navy">5.05 亿元</dt>
                  <dd className="mt-2 text-sm leading-7 text-steel">项目总投资</dd>
                </div>
                <div>
                  <dt className="text-2xl font-semibold text-navy">3.2 万平方米</dt>
                  <dd className="mt-2 text-sm leading-7 text-steel">项目建筑面积</dd>
                </div>
              </dl>
              <a href="#business" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-accent transition-colors duration-150 hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                了解产业协同 <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <Reveal delay={0.08} className="relative">
              <img src="/assets/xingke-factory.webp" alt="江西星科电子基材有限公司厂区" className="aspect-[16/10] w-full object-cover" />
              <div className="absolute bottom-0 left-0 max-w-xs bg-white p-5 sm:p-6">
                <Buildings size={25} className="text-accent" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-ink">赣州 · 上犹</p>
                <p className="mt-1 text-xs leading-6 text-steel">黄埠工业园南区制造基地</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="business" className="scroll-mt-24 border-y border-line bg-white py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <SectionTitle title="从原料、玻纤纱到精密织造的区域协同" description="依托上犹玻纤产业集群，矿物原料加工、玻纤纱制造、电子布织造与工业玻纤布生产高效衔接。" />

            <div className="mt-14 grid border-t border-line md:grid-cols-2 xl:grid-cols-4">
              {businesses.map((item, index) => {
                const Icon = item.icon
                return (
                  <Reveal key={item.name} delay={index * 0.05} className={cn("group relative border-b border-line py-8 md:px-7 xl:border-b-0", index % 2 === 0 && "md:border-r", index < 3 && "xl:border-r")}>
                    <div className="overflow-hidden bg-mist">
                      <img src={item.image} alt={`${item.name}${item.label}`} className="aspect-[4/3] w-full object-cover transition-transform duration-150 group-hover:scale-[1.015]" loading="lazy" />
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.12em] text-accent">{item.label}</p>
                        <h3 className="mt-2 text-xl font-semibold text-ink">{item.name}</h3>
                      </div>
                      <Icon size={27} weight="regular" className="shrink-0 text-accent" aria-hidden="true" />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-steel">{item.description}</p>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section id="products" className="scroll-mt-24 bg-mist py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <SectionTitle title="电子级玻纤布产品体系" description="围绕覆铜板与 PCB 应用，持续完善标准电子布、中薄型电子布和薄型电子布产品组合。" />

            <Reveal className="mt-12">
              <Tabs.Root defaultValue="7628" orientation="vertical" className="grid border border-line bg-white lg:grid-cols-[220px_1fr]">
                <Tabs.List aria-label="电子级玻纤布型号" className="grid grid-cols-2 border-b border-line lg:grid-cols-1 lg:border-b-0 lg:border-r">
                  {products.map((product) => (
                    <Tabs.Trigger key={product.code} value={product.code} className="group flex min-h-20 items-center justify-between border-b border-r border-line px-5 text-left outline-none transition-colors duration-150 even:border-r-0 hover:bg-mist focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent data-[state=active]:bg-accent data-[state=active]:text-white lg:border-r-0 lg:last:border-b-0">
                      <span>
                        <span className="block text-xl font-semibold tabular-nums">{product.code}</span>
                        <span className="mt-1 block text-xs text-steel group-data-[state=active]:text-white/72">{product.type}</span>
                      </span>
                      <ArrowRight size={18} className="text-accent group-data-[state=active]:text-white" aria-hidden="true" />
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>

                {products.map((product) => (
                  <Tabs.Content key={product.code} value={product.code} asChild>
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="grid min-h-[520px] outline-none lg:grid-cols-[0.9fr_1.1fr]"
                    >
                      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                        <p className="text-sm font-semibold text-accent">{product.type}</p>
                        <p className="mt-3 text-6xl font-semibold tracking-[-0.04em] text-navy sm:text-7xl">{product.code}</p>
                        <h3 className="mt-7 text-2xl font-semibold leading-snug text-ink">{product.title}</h3>
                        <p className="mt-4 max-w-xl text-base leading-8 text-steel">{product.description}</p>
                        <ul className="mt-7 grid gap-3 sm:grid-cols-3" aria-label="典型应用">
                          {product.applications.map((application) => (
                            <li key={application} className="flex items-center gap-2 text-sm font-medium text-ink">
                              <Check size={17} className="text-accent" aria-hidden="true" /> {application}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <img src={product.image} alt={`${product.code}${product.type}生产实景`} className="h-full min-h-80 w-full object-cover" loading="lazy" />
                    </motion.div>
                  </Tabs.Content>
                ))}
              </Tabs.Root>
            </Reveal>
          </div>
        </section>

        <section id="capabilities" className="scroll-mt-24 bg-paper py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
              <SectionTitle title="以稳定工艺支撑稳定品质" description="生产线围绕经纱准备、精密织造、后处理与质量控制建立制造能力，并通过过程管理持续提升一致性。" />
              <Reveal delay={0.08} className="overflow-hidden">
                <img src="/assets/finishing-line.webp" alt="星科电子布后处理生产线" className="aspect-[16/8] w-full object-cover transition-transform duration-150 hover:scale-[1.015]" loading="lazy" />
              </Reveal>
            </div>

            <div className="mt-14 grid border-y border-line md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map(([Icon, title, copy], index) => (
                <Reveal key={title as string} delay={index * 0.05} className={cn("py-8 md:p-8", index % 2 === 0 && "md:border-r", index < 3 && "xl:border-r")}>
                  <Icon size={30} weight="regular" className="text-accent" aria-hidden="true" />
                  <h3 className="mt-7 text-lg font-semibold text-ink">{title as string}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{copy as string}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white py-20 sm:py-28 lg:py-36" aria-label="质量管理">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20 lg:px-12">
            <Reveal className="grid grid-cols-[1.18fr_0.82fr] gap-3 sm:gap-5">
              <img src="/assets/fabric-inspection.webp" alt="电子级玻纤布在线检验" className="h-full min-h-[420px] w-full object-cover" loading="lazy" />
              <div className="grid gap-3 sm:gap-5">
                <img src="/assets/yarn-array.webp" alt="玻纤纱织造准备" className="h-full min-h-48 w-full object-cover" loading="lazy" />
                <img src="/assets/fabric-open.webp" alt="电子级玻纤布布面" className="h-full min-h-48 w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <div>
              <SectionTitle title="质量，来自每一道工序" description="从经纱准备到布面检验，关键工序被纳入稳定的生产节奏。对张力、织造状态与布面质量的持续关注，是一致性交付的基础。" />
              <ul className="mt-9 space-y-5">
                {["标准化生产流程", "过程质量控制", "持续改进机制"].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-base font-semibold text-ink">
                    <span className="flex size-8 items-center justify-center bg-blue-pale text-accent"><Check size={17} aria-hidden="true" /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="honors" className="scroll-mt-24 bg-paper py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <SectionTitle title="资质与创新成果" description="持续推进技术创新、绿色制造与质量体系建设，以规范经营和制造积累支持长期发展。" />

            <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {honors.map((honor, index) => (
                <Reveal key={honor.title} delay={index * 0.05}>
                  <figure className="h-full bg-white p-5 sm:p-6">
                    <div className="flex aspect-[4/3] items-center justify-center bg-mist p-5">
                      <img src={honor.image} alt={honor.title} className="max-h-full max-w-full object-contain" loading="lazy" />
                    </div>
                    <figcaption className="pt-6">
                      <p className="flex items-center gap-2 text-base font-semibold text-ink"><SealCheck size={20} className="text-accent" aria-hidden="true" /> {honor.title}</p>
                      <p className="mt-2 text-sm leading-6 text-steel">{honor.meta}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-line bg-blue-pale py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Business Contact</p>
              <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-[1.2] tracking-[-0.03em] text-navy sm:text-4xl lg:text-5xl">与星科讨论产品与合作需求</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-steel">欢迎就电子级玻纤布型号、交付需求与产业合作进行咨询。</p>
            </div>

            <address className="grid gap-px bg-line not-italic sm:grid-cols-2">
              {[
                [Phone, "业务咨询", "18170499588", "tel:18170499588"],
                [Phone, "固定电话", "0797-8504888 / 8504999", "tel:07978504888"],
                [EnvelopeSimple, "电子邮箱", "xingkefabric@xingkefabric.com", "mailto:xingkefabric@xingkefabric.com"],
                [MapPin, "公司地址", "江西省赣州市上犹县黄埠工业园南区", "https://ditu.amap.com/search?query=江西星科电子基材有限公司"],
              ].map(([Icon, label, value, href]) => (
                <a key={label as string} href={href as string} target={(label as string) === "公司地址" ? "_blank" : undefined} rel={(label as string) === "公司地址" ? "noreferrer" : undefined} className="group flex min-h-40 flex-col justify-between bg-white p-6 text-ink transition-colors duration-150 hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent">
                  <Icon size={26} className="text-accent" aria-hidden="true" />
                  <span className="mt-8">
                    <span className="block text-xs font-semibold tracking-wide text-steel">{label as string}</span>
                    <span className="mt-2 flex items-end justify-between gap-4 text-sm font-medium leading-7 sm:text-base">{value as string}<ArrowRight size={17} className="shrink-0 text-accent transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" /></span>
                  </span>
                </a>
              ))}
            </address>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-10 border-b border-white/18 pb-10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center bg-white"><img src="/assets/xingke-mark.png" alt="" className="h-9 w-9 object-contain" /></span>
              <span>
                <span className="block text-base font-semibold">江西星科电子基材有限公司</span>
                <span className="mt-1 block text-[10px] tracking-[0.08em] text-white/58">JIANGXI XINGKE ELECTRONIC SUBSTRATE</span>
              </span>
            </div>
            <a href="#top" className="inline-flex items-center gap-3 self-start text-sm font-semibold text-white transition-colors duration-150 hover:text-blue-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">返回顶部 <ArrowRight className="-rotate-90" size={18} aria-hidden="true" /></a>
          </div>
          <div className="flex flex-col gap-4 pt-7 text-xs text-white/58 md:flex-row md:items-center md:justify-between">
            <p>电子级玻璃纤维布制造</p>
            <p className="tabular-nums">© {new Date().getFullYear()} Jiangxi Xingke Electronic Substrate Co., Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
