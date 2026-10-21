import { useEffect, useRef, type ReactNode } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import {
  ArrowRight,
  ArrowsHorizontal,
  Drop,
  EnvelopeSimple,
  Factory,
  FlowArrow,
  List,
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
  ["关于我们", "#about"], ["业务范围", "#business"], ["产品展示", "#products"],
  ["制造能力", "#capabilities"], ["荣誉资质", "#honors"], ["联系我们", "#contact"],
]

const products = [
  { code: "7628", type: "标准电子布", title: "稳定量产的基础型号", description: "用于覆铜板与印制电路板的基础增强材料，强调织造稳定性、布面均匀度与批次一致性。", applications: ["覆铜板", "多层 PCB", "工业电子"], image: "/assets/fabric-rolls.webp" },
  { code: "2116", type: "中薄型电子布", title: "兼顾薄型化与加工适配", description: "面向更薄的电子基材应用，通过整经、浆纱、并轴与精密织造控制经纬张力和布面质量。", applications: ["通信设备", "汽车电子", "消费电子"], image: "/assets/fabric-detail.webp" },
  { code: "1080", type: "薄型电子布", title: "服务轻薄化电子基材", description: "适用于对厚度和均匀性要求更高的电子基材场景，依托喷气织造与后处理能力持续完善产品体系。", applications: ["轻薄基板", "高密度 PCB", "数字设备"], image: "/assets/fabric-open.webp" },
  { code: "3732", type: "电子与工业用布", title: "覆盖多类绝缘与增强场景", description: "面向电子、电气绝缘与工业复合材料应用，提供稳定的玻纤织物基材。", applications: ["电气绝缘", "电子基材", "工业复材"], image: "/assets/fabric-inspection.webp" },
]

const businesses = [
  { name: "江西鸿锭", label: "矿物原料加工", description: "围绕叶腊石、石英砂、石灰石、白云石等玻纤矿物原料开展加工，为玻纤生产提供上游原料支持。", detail: "项目规划年产40万吨玻纤矿物原料", image: "/assets/hongding-facility.webp", icon: Mountains },
  { name: "元源新材料", label: "玻璃纤维纱制造", description: "采用池窑法拉丝生产工艺，具备玻璃配方与浸润剂研发能力，产品覆盖电子纱及多类玻纤纱。", detail: "一期5万吨生产线于2018年点火投产", image: "/assets/yuanyuan-factory.webp", icon: Factory },
  { name: "江西星科", label: "电子级玻纤布", description: "以丰田喷气织机、整浆、并轴与后处理设备为基础，生产7628、2116、1080、3732等电子级玻纤布。", detail: "200台丰田喷气织机", image: "/assets/xingke-line.webp", icon: Rows },
  { name: "赣州广建", label: "替代型玻纤布", description: "配置200台高速剑杆机，面向绝缘板材与电子基材等领域提供仿真电子级玻纤布。", detail: "月产玻纤布超过700万平方米", image: "/assets/guangjian-line.webp", icon: Stack },
]

const honors = [
  { title: "国家高新技术企业", meta: "证书编号 GR202336002583", image: "/assets/honor-hightech.webp" },
  { title: "江西省绿色工厂", meta: "2024年度江西省绿色制造名单", image: "/assets/honor-green.webp" },
  { title: "发明专利", meta: "围绕电子布工艺与设备持续创新", image: "/assets/honor-patent-invention.webp" },
  { title: "实用新型专利", meta: "形成十余项专利成果", image: "/assets/honor-patent-utility.webp" },
]

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()

  return <motion.div
    className={className}
    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.48, delay, ease: "easeOut" }}
  >{children}</motion.div>
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
      duration: 0.85,
      ease: "easeOut",
      onUpdate: (latest) => {
        element.textContent = String(Math.round(latest))
      },
    })

    return () => controls.stop()
  }, [isInView, reduceMotion, value])

  return <><span ref={elementRef}>{value}</span>{suffix}</>
}

function SectionTransition({ tone }: { tone: "paper" | "white" | "panel" }) {
  const reduceMotion = useReducedMotion()

  return <div
    className={cn(
      "flex h-12 items-center overflow-hidden px-5 sm:h-16 sm:px-8 lg:px-10",
      tone === "paper" && "bg-paper",
      tone === "white" && "bg-white",
      tone === "panel" && "bg-panel",
    )}
    aria-hidden="true"
  >
    <div className="mx-auto flex w-full max-w-7xl items-center">
      <motion.span
        className="h-px flex-1 origin-right bg-line"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />
      <motion.span
        className="mx-4 flex size-9 shrink-0 items-center justify-center border border-line bg-white text-accent"
        initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.96 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 0.38, delay: 0.12, ease: "easeOut" }}
      >
        <FlowArrow size={18} weight="regular" />
      </motion.span>
      <motion.span
        className="h-px flex-1 origin-left bg-line"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />
    </div>
  </div>
}

function SectionTitle({ title, description, className }: { title: string; description?: string; className?: string }) {
  return <Reveal className={cn("max-w-3xl", className)}>
    <h2 className="text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">{title}</h2>
    {description ? <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-steel">{description}</p> : null}
  </Reveal>
}

function Header() {
  return <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md">
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
      <a href="#top" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label="江西星科电子基材有限公司首页">
        <img src="/assets/xingke-mark.png" alt="" className="h-10 w-10 object-contain" />
        <span><span className="block text-sm font-semibold text-ink sm:text-base">江西星科电子基材有限公司</span><span className="hidden text-xs text-steel sm:block">Jiangxi Xingke Electronic Substrate</span></span>
      </a>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="主要导航">
        {navigation.map(([label, href]) => <a key={href} href={href} className="text-sm text-steel transition-colors duration-150 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{label}</a>)}
      </nav>
      <a href="#contact" className="hidden items-center gap-2 border border-ink px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-150 hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:flex">联系我们<ArrowRight size={16} aria-hidden="true" /></a>
      <details className="group relative lg:hidden">
        <summary aria-label="打开网站菜单" className="flex cursor-pointer list-none items-center justify-center p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><List size={28} aria-hidden="true" /></summary>
        <nav aria-label="移动端导航" className="absolute right-0 top-13 w-64 border border-line bg-white p-3 shadow-xl">
          {navigation.map(([label, href]) => <a key={href} href={href} className="block border-b border-line px-3 py-3 text-sm text-steel last:border-0 hover:bg-paper hover:text-ink">{label}</a>)}
        </nav>
      </details>
    </div>
  </header>
}

function App() {
  const reduceMotion = useReducedMotion()

  return <div id="top" className="min-h-dvh bg-paper text-ink">
    <a href="#main" className="sr-only z-50 bg-white px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">跳到主要内容</a>
    <Header />
    <main id="main">
      <section className="relative min-h-[72svh] overflow-hidden bg-[#d9d9d4]">
        <img src="/assets/hero-weaving.webp" alt="星科电子级玻纤布生产设备" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="relative mx-auto flex min-h-[72svh] max-w-7xl items-end px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
          <motion.div
            className="w-full max-w-2xl bg-white p-7 sm:p-10 lg:p-12"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-sm font-medium text-accent">电子级玻璃纤维布制造</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">以稳定制造服务电子基材产业</h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-steel">江西星科聚焦电子级玻纤布生产，持续完善整经、浆纱、并轴、喷气织造与后处理能力。</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink">查看产品<ArrowRight size={17} aria-hidden="true" /></a>
              <a href="#about" className="inline-flex items-center border border-line px-6 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">了解星科</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section aria-label="企业关键数据" className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
          {[
            { value: 2021, suffix: "", label: "公司成立" },
            { value: 200, suffix: " 台", label: "丰田喷气织机" },
            { value: 1, suffix: " 亿米", label: "项目规划年产能" },
            { value: 10, suffix: "+", label: "专利成果" },
          ].map((stat, index) => <div key={stat.label} className={cn("border-line py-8 sm:py-10", index % 2 === 0 ? "border-r pr-5" : "pl-5", index === 1 ? "lg:border-r lg:pr-8" : "", index === 2 ? "border-r pr-5 lg:pl-8" : "", index === 3 ? "lg:pl-8" : "")}><p className="text-3xl font-semibold tabular-nums text-ink sm:text-4xl"><CountUp value={stat.value} suffix={stat.suffix} /></p><p className="mt-2 text-sm text-steel">{stat.label}</p></div>)}
        </div>
      </section>

      <SectionTransition tone="paper" />

      <section id="about" className="scroll-mt-24 bg-paper py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <div>
            <SectionTitle title="扎根上犹玻纤产业集群" description="江西星科电子基材有限公司成立于2021年，位于江西省赣州市上犹县黄埠工业园南区。公司主要从事电子级玻纤布生产和销售，项目总投资5.05亿元，占地61亩，建筑面积3.2万平方米。" />
            <dl className="mt-10 grid gap-7 border-t border-line pt-8 sm:grid-cols-2">
              <div><dt className="text-base font-semibold text-ink">精密制造</dt><dd className="mt-2 text-sm leading-7 text-steel">整浆、并轴、喷气织造与后处理设备协同运行。</dd></div>
              <div><dt className="text-base font-semibold text-ink">材料协同</dt><dd className="mt-2 text-sm leading-7 text-steel">衔接矿物原料、玻纤纱与电子布制造环节。</dd></div>
            </dl>
          </div>
          <Reveal delay={0.08}><figure><img src="/assets/xingke-factory.webp" alt="江西星科电子基材有限公司厂区" className="aspect-[16/10] w-full object-cover" /><figcaption className="border-x border-b border-line bg-white px-5 py-4 text-sm text-steel">江西省赣州市上犹县黄埠工业园南区</figcaption></figure></Reveal>
        </div>
      </section>

      <SectionTransition tone="white" />

      <section id="business" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><SectionTitle title="从矿物原料到电子布" /><p className="max-w-xl text-pretty text-base leading-8 text-steel">四个经营主体覆盖矿物原料加工、池窑拉丝、玻纤纱制造、精密织造与后处理，形成相互衔接的产业协同。</p></div>
          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {businesses.map((item, index) => {
              const Icon = item.icon
              return <Reveal key={item.name} delay={index * 0.05}><article className="group border-t border-line pt-5"><img src={item.image} alt={`${item.name}${item.label}`} className="aspect-[16/9] w-full object-cover" loading="lazy" /><div className="pt-6"><div className="flex items-start justify-between gap-5"><div><p className="text-sm font-medium text-accent">{item.label}</p><h3 className="mt-2 text-2xl font-semibold text-ink">{item.name}</h3></div><span className="flex size-12 shrink-0 items-center justify-center border border-line bg-paper text-accent transition-transform duration-150 group-hover:-translate-y-0.5"><Icon size={24} weight="regular" aria-hidden="true" /></span></div><p className="mt-4 text-pretty text-sm leading-7 text-steel sm:text-base">{item.description}</p><p className="mt-5 border-l-2 border-accent pl-4 text-sm font-medium text-ink">{item.detail}</p></div></article></Reveal>
            })}
          </div>
        </div>
      </section>

      <SectionTransition tone="paper" />

      <section id="products" className="scroll-mt-24 bg-paper py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionTitle title="电子级玻纤布产品" description="围绕覆铜板与PCB应用，星科持续完善标准电子布与薄型电子布产品组合。" />
          <Reveal className="mt-12"><Tabs.Root defaultValue="7628">
            <Tabs.List aria-label="电子级玻纤布型号" className="grid grid-cols-2 border border-line bg-white sm:grid-cols-4">
              {products.map((product) => <Tabs.Trigger key={product.code} value={product.code} className="border-r border-line px-4 py-4 text-left text-sm font-semibold text-steel outline-none transition-colors duration-150 last:border-r-0 hover:bg-panel hover:text-ink focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent data-[state=active]:bg-ink data-[state=active]:text-white">{product.code}<span className="mt-1 block text-xs font-normal opacity-80">{product.type}</span></Tabs.Trigger>)}
            </Tabs.List>
            {products.map((product) => <Tabs.Content key={product.code} value={product.code} asChild><motion.div initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.18, ease: "easeOut" }} className="grid border-x border-b border-line bg-white outline-none lg:grid-cols-[0.88fr_1.12fr]"><div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14"><p className="text-sm font-medium text-accent">{product.type}</p><p className="mt-3 text-5xl font-semibold tabular-nums text-ink sm:text-6xl">{product.code}</p><h3 className="mt-6 text-2xl font-semibold text-ink">{product.title}</h3><p className="mt-4 max-w-xl text-pretty text-base leading-8 text-steel">{product.description}</p><ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3" aria-label="典型应用">{product.applications.map((application) => <li key={application} className="flex items-center gap-2 text-sm text-ink"><span className="size-1.5 bg-accent" />{application}</li>)}</ul></div><img src={product.image} alt={`${product.code}${product.type}生产实景`} className="h-full min-h-80 w-full object-cover" loading="lazy" /></motion.div></Tabs.Content>)}
          </Tabs.Root></Reveal>
        </div>
      </section>

      <SectionTransition tone="white" />

      <section id="capabilities" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:items-end"><SectionTitle title="设备与工艺能力" description="生产线由行业专业机构参与设计，围绕经纱准备、精密织造、后处理与质量控制建立制造能力。" /><Reveal delay={0.08}><img src="/assets/finishing-line.webp" alt="星科电子布生产线" className="aspect-[16/8] w-full object-cover" loading="lazy" /></Reveal></div>
          <div className="mt-12 grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
            {[[ArrowsHorizontal, "整经与浆纱", "配置2台处理速度超过200米/分钟的整浆设备。"], [Rows, "并轴控制", "配置6轴并轴设备，服务经纱张力与织造准备。"], [Wind, "喷气织造", "一期配置200台丰田喷气织机，支持标准电子布生产。"], [Drop, "后处理", "覆盖脱浆、开纤与表面处理等电子布后处理环节。"]].map(([Icon, title, copy], index) => <Reveal key={title as string} delay={index * 0.05} className={cn("py-7 sm:p-7 lg:p-8", index < 3 ? "lg:border-r lg:border-line" : "", index % 2 === 0 ? "sm:border-r sm:border-line" : "")}><Icon size={27} weight="regular" className="text-accent" aria-hidden="true" /><h3 className="mt-5 text-lg font-semibold text-ink">{title as string}</h3><p className="mt-3 text-sm leading-7 text-steel">{copy as string}</p></Reveal>)}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">{[["/assets/yarn-array.webp", "玻纤纱织造准备"], ["/assets/fabric-open.webp", "电子级玻纤布布面"], ["/assets/fabric-inspection.webp", "电子布在线检验"]].map(([src, alt], index) => <Reveal key={src} delay={index * 0.05}><img src={src} alt={alt} className="aspect-[4/3] w-full object-cover" loading="lazy" /></Reveal>)}</div>
        </div>
      </section>

      <SectionTransition tone="paper" />

      <section id="honors" className="scroll-mt-24 bg-paper py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionTitle title="资质与创新成果" description="星科持续推进技术创新、绿色制造与质量体系建设，已获国家高新技术企业、省级绿色工厂等资质，并入选2025年江西省专精特新中小企业名单。" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{honors.map((honor, index) => <Reveal key={honor.title} delay={index * 0.05}><figure className="border border-line bg-white p-5"><div className="flex aspect-[4/3] items-center justify-center bg-paper p-4"><img src={honor.image} alt={honor.title} className="max-h-full max-w-full object-contain" loading="lazy" /></div><figcaption className="pt-5"><p className="flex items-center gap-2 text-base font-semibold text-ink"><SealCheck size={19} weight="regular" className="text-accent" aria-hidden="true" />{honor.title}</p><p className="mt-2 text-sm leading-6 text-steel">{honor.meta}</p></figcaption></figure></Reveal>)}</div>
        </div>
      </section>

      <SectionTransition tone="panel" />

      <section id="contact" className="scroll-mt-24 bg-panel py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div><p className="text-sm font-medium text-accent">业务联系</p><h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">与星科讨论产品与合作需求</h2><p className="mt-5 max-w-xl text-pretty text-base leading-8 text-steel">欢迎就电子级玻纤布型号、交付需求与产业合作进行咨询。</p></div>
          <address className="not-italic">{[[Phone, "业务咨询", "18170499588", "tel:18170499588"], [Phone, "固定电话", "0797-8504888 / 8504999", "tel:07978504888"], [EnvelopeSimple, "电子邮箱", "xingkefabric@xingkefabric.com", "mailto:xingkefabric@xingkefabric.com"], [MapPin, "公司地址", "江西省赣州市上犹县黄埠工业园南区", "https://ditu.amap.com/search?query=江西星科电子基材有限公司"]].map(([Icon, label, value, href]) => <a key={label as string} href={href as string} target={(label as string) === "公司地址" ? "_blank" : undefined} rel={(label as string) === "公司地址" ? "noreferrer" : undefined} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-line py-5 text-ink transition-colors duration-150 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><Icon size={23} className="mt-1 text-accent" aria-hidden="true" /><span><span className="block text-xs text-steel">{label as string}</span><span className="mt-1 block text-sm leading-7 sm:text-base">{value as string}</span></span></a>)}</address>
        </div>
      </section>
    </main>
    <footer className="border-t border-line bg-[#e6e9eb]"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-steel sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10"><div className="flex items-center gap-3 text-ink"><img src="/assets/xingke-mark.png" alt="" className="h-8 w-8 object-contain" /><span>江西星科电子基材有限公司</span></div><p>电子级玻璃纤维布制造</p><p className="tabular-nums">© {new Date().getFullYear()} Xingke Fabric</p></div></footer>
  </div>
}

export default App
