import * as Tabs from "@radix-ui/react-tabs"
import {
  ArrowRight,
  Buildings,
  Check,
  EnvelopeSimple,
  MapPin,
  Phone,
  SealCheck,
} from "@phosphor-icons/react"
import { motion, useReducedMotion } from "motion/react"
import { Link, useParams } from "react-router-dom"
import { CountUp, PageHero, PageLink, PageMeta, Reveal, SectionTitle } from "./components"
import {
  businesses,
  capabilities,
  compositeProcesses,
  contacts,
  fieldStories,
  honors,
  manufacturingProcess,
  milestones,
  newsItems,
  productFamilies,
  productPrinciples,
  products,
  qualityControls,
  stats,
  upstreamProductGroups,
  upstreamTestReports,
} from "./site-data"

function StatsBand() {
  return (
    <section aria-label="企业关键数据" className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
        {stats.map((stat, index) => (
          <div key={stat.label} className={`py-8 sm:py-10 lg:py-12 ${index % 2 === 0 ? "border-r border-line pr-5" : "pl-5"} ${index === 1 ? "lg:border-r lg:pr-8" : ""} ${index === 2 ? "border-r border-line pr-5 lg:pl-8" : ""} ${index === 3 ? "lg:pl-8" : ""}`}>
            <p className="text-3xl font-semibold tracking-[-0.035em] text-navy sm:text-4xl lg:text-5xl"><CountUp value={stat.value} suffix={stat.suffix} /></p>
            <p className="mt-3 text-sm font-medium text-steel">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ContactCta() {
  return (
    <section className="border-t border-line bg-blue-pale py-16 sm:py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.025em] text-navy sm:text-4xl">讨论产品与合作需求</h2>
          <p className="mt-4 text-base leading-8 text-steel">欢迎就电子级玻纤布型号、交付要求和产业合作联系我们。</p>
        </div>
        <PageLink to="/contact" label="联系星科" />
      </div>
    </section>
  )
}

function ProductTabs() {
  const reduceMotion = useReducedMotion()

  return (
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
            initial={reduceMotion ? false : { opacity: 0, x: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="grid min-h-[520px] outline-none lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="text-sm font-semibold text-accent">{product.type}</p>
              <p className="mt-3 text-6xl font-semibold tracking-[-0.04em] text-navy sm:text-7xl">{product.code}</p>
              <h2 className="mt-7 text-2xl font-semibold leading-snug text-ink">{product.title}</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-steel">{product.description}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-3" aria-label="典型应用">
                {product.applications.map((application) => (
                  <li key={application} className="flex items-center gap-2 text-sm font-medium text-ink"><Check size={17} className="text-accent" aria-hidden="true" /> {application}</li>
                ))}
              </ul>
              {product.specs.length > 0 && (
                <dl className="mt-8 grid grid-cols-2 gap-px bg-line" aria-label={`${product.code}画册参考参数`}>
                  {product.specs.map(([label, value]) => (
                    <div key={label} className="bg-paper p-4">
                      <dt className="text-xs text-steel">{label}</dt>
                      <dd className="mt-1 text-sm font-semibold text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
            <img src={product.image} alt={`${product.code}${product.type}生产实景`} className="h-full min-h-80 w-full object-cover" loading="lazy" />
          </motion.div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}

export function HomePage() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <PageMeta title="电子级玻璃纤维布" description="江西星科专注电子级玻璃纤维布制造，以规范工艺与持续改进服务电子基材产业。" />
      <section className="hero-grid bg-navy text-white">
        <motion.div className="relative z-10 flex items-center px-5 py-12 sm:px-8 sm:py-14 lg:min-h-[calc(100dvh-5rem)] lg:px-12" initial={reduceMotion ? false : { opacity: 0, x: -24 }} animate={reduceMotion ? undefined : { opacity: 1, x: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}>
          <div className="mx-auto w-full max-w-[600px] lg:mx-0 lg:ml-auto lg:pr-14 xl:pr-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-soft">Electronic Glass Fiber Fabric</p>
            <h1 className="mt-5 text-balance text-[clamp(2.75rem,6vw,5.75rem)] font-semibold leading-[1.04] tracking-[-0.045em]">精密织造<br />稳定交付</h1>
            <p className="mt-7 max-w-lg text-pretty text-base leading-8 text-white/76 sm:text-lg">聚焦电子级玻璃纤维布，以规范工艺与持续改进服务电子基材产业。</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <PageLink to="/capabilities" label="了解制造能力" inverse />
              <Link to="/products" className="inline-flex h-12 items-center border-b border-white/60 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:text-blue-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">查看产品体系</Link>
            </div>
          </div>
        </motion.div>
        <div className="relative min-h-[38svh] overflow-hidden sm:min-h-[46svh] lg:min-h-[calc(100dvh-5rem)]">
          <motion.img src="/assets/automated-yarn-handling.webp" alt="玻璃纤维纱筒自动化搬运设备" className="absolute inset-0 h-full w-full object-cover object-center" initial={reduceMotion ? false : { opacity: 0.65, scale: 1.035 }} animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }} transition={{ duration: 0.75, ease: "easeOut" }} fetchPriority="high" />
          <div className="absolute inset-x-0 bottom-0 border-t border-white/30 bg-navy/86 px-5 py-4 text-xs font-medium tracking-[0.12em] text-white/80 backdrop-blur-sm sm:px-8 lg:px-10">AUTOMATION · PROCESS CONTROL</div>
        </div>
      </section>

      <StatsBand />

      <section className="bg-paper py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-20 lg:px-12">
          <div>
            <SectionTitle title="扎根上犹，服务电子基材产业" description="江西星科电子基材有限公司成立于 2021 年，主要从事电子级玻璃纤维布生产和销售。" />
            <div className="mt-9"><PageLink to="/about" label="了解公司" /></div>
          </div>
          <Reveal delay={0.08} className="overflow-hidden"><img src="/assets/xingke-campus-front.webp" alt="江西星科电子基材有限公司制造基地" className="aspect-[16/10] w-full object-cover transition-transform duration-150 hover:scale-[1.015]" /></Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle title="最新动态" description="关注企业制造现场、产业发展与公开媒体报道。" />
            <Link to="/news" className="inline-flex items-center gap-3 self-start text-sm font-semibold text-accent hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">进入新闻中心 <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <Link to={`/news/${newsItems[0].slug}`} className="group mt-12 grid border border-line bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:grid-cols-[1.12fr_0.88fr]">
            <div className="overflow-hidden"><img src={newsItems[0].image} alt={newsItems[0].imageAlt} className="h-full min-h-72 w-full object-cover transition-transform duration-150 group-hover:scale-[1.015]" loading="lazy" /></div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"><div className="flex items-center gap-4 text-xs font-semibold text-accent"><span>{newsItems[0].category}</span><time dateTime={newsItems[0].date} className="text-steel">{newsItems[0].displayDate}</time></div><h3 className="mt-5 text-balance text-2xl font-semibold leading-snug text-ink sm:text-3xl">{newsItems[0].title}</h3><p className="mt-5 text-pretty text-sm leading-7 text-steel sm:text-base">{newsItems[0].summary}</p><span className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-accent">阅读全文 <ArrowRight size={18} aria-hidden="true" /></span></div>
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-white py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionTitle title="产品与制造能力" description="以真实设备、规范流程和产品组合，为客户快速呈现星科的制造基础。" />
          <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-2">
            <Link to="/products" className="group relative min-h-[460px] overflow-hidden bg-navy text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white">
              <img src="/assets/glass-fabric-drape.webp" alt="玻璃纤维布产品织纹" className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-150 group-hover:scale-[1.015]" loading="lazy" />
              <div className="absolute inset-0 bg-navy/38" />
              <div className="relative flex min-h-[460px] flex-col justify-end p-7 sm:p-10">
                <p className="text-sm font-semibold text-blue-soft">产品中心</p>
                <h3 className="mt-3 text-balance text-3xl font-semibold leading-tight">薄型电子布、中薄型电子布、标准电子布</h3>
                <span className="mt-7 inline-flex items-center gap-3 text-sm font-semibold">查看产品体系 <ArrowRight size={18} aria-hidden="true" /></span>
              </div>
            </Link>
            <div className="bg-paper">
              <figure>
                <img src="/assets/yarn-logistics-line.webp" alt="玻璃纤维纱筒自动化周转与输送区域" className="aspect-[16/7] w-full object-cover" loading="lazy" />
                <figcaption className="border-b border-line bg-white px-7 py-4 text-sm font-medium text-ink sm:px-10 lg:px-12">玻璃纤维纱筒自动化周转与输送</figcaption>
              </figure>
              <div className="p-7 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold text-accent">制造能力</p>
                <h3 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.025em] text-ink">从经纱准备到后处理</h3>
                <div className="mt-8 grid gap-px bg-line sm:grid-cols-2">
                  {capabilities.map(({ icon: Icon, title }) => (
                    <div key={title} className="flex min-h-28 items-center gap-4 bg-white p-5"><Icon size={25} className="text-accent" aria-hidden="true" /><span className="text-sm font-semibold text-ink">{title}</span></div>
                  ))}
                </div>
                <Link to="/capabilities" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-accent hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">查看完整能力 <ArrowRight size={18} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20 lg:px-12">
          <SectionTitle title="以资质与创新积累支撑长期发展" description="国家高新技术企业、江西省绿色工厂及持续形成的专利成果，构成星科规范制造的重要基础。" />
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {honors.slice(0, 2).map((honor) => (
              <figure key={honor.title} className="bg-white p-6"><div className="flex aspect-[4/3] items-center justify-center bg-mist p-5"><img src={honor.image} alt={honor.title} className="max-h-full max-w-full object-contain" loading="lazy" /></div><figcaption className="pt-5 text-base font-semibold text-ink">{honor.title}</figcaption></figure>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1440px] px-5 sm:px-8 lg:px-12"><PageLink to="/honors" label="查看荣誉资质" /></div>
      </section>

      <ContactCta />
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <PageMeta title="关于我们" description="了解江西星科的公司概况、制造基地和发展基础。" />
      <PageHero title="专注电子级玻纤布制造" description="扎根江西上犹玻纤产业集群，以长期主义建设稳定、规范、可持续的制造能力。" eyebrow="About Xingke" image="/assets/xingke-campus-front.webp" imageAlt="江西星科电子基材有限公司制造基地" />
      <section className="bg-paper py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-12">
          <div>
            <SectionTitle title="公司概况" description="江西星科电子基材有限公司成立于 2021 年 5 月，位于江西省赣州市上犹县黄埠工业园南区，主要从事电子级玻璃纤维布生产和销售。" />
            <dl className="mt-9 border-y border-line" aria-label="企业登记信息">
              <div className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:items-baseline">
                <dt className="text-sm font-medium text-steel">法定代表人 / 代表者</dt>
                <dd className="text-lg font-semibold text-navy">田云</dd>
              </div>
            </dl>
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {["项目总投资|5.05 亿元", "项目占地|61 亩", "建筑面积|3.2 万平方米", "注册资本|5000 万元"].map((item) => {
              const [label, value] = item.split("|")
              return <div key={label} className="bg-white p-7 sm:p-8"><p className="text-sm text-steel">{label}</p><p className="mt-3 text-2xl font-semibold text-navy">{value}</p></div>
            })}
          </div>
        </div>
      </section>
      <section className="border-y border-line bg-white py-20 sm:py-28 lg:py-36" aria-label="园区与制造基地">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionTitle title="园区与制造基地" description="厂房、办公和配套设施集中布局于黄埠工业园南区，为连续生产、仓储周转和现场管理提供空间基础。" />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <Reveal>
              <figure>
                <img src="/assets/xingke-campus-aerial.webp" alt="江西星科制造基地及周边产业园区航拍" className="aspect-[3/2] w-full object-cover" loading="lazy" />
                <figcaption className="mt-4 text-sm font-medium text-ink">制造基地与园区产业配套</figcaption>
              </figure>
            </Reveal>
            <div className="grid gap-7">
              <Reveal delay={0.05}>
                <figure>
                  <img src="/assets/xingke-campus-east.webp" alt="江西星科厂房及园区道路" className="aspect-[3/2] w-full object-cover" loading="lazy" />
                  <figcaption className="mt-4 text-sm font-medium text-ink">厂房与园区道路</figcaption>
                </figure>
              </Reveal>
              <Reveal delay={0.1}>
                <figure>
                  <img src="/assets/xingke-office-building.webp" alt="江西星科办公楼及配套区域" className="aspect-[3/2] w-full object-cover" loading="lazy" />
                  <figcaption className="mt-4 text-sm font-medium text-ink">办公与现场管理配套</figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-line bg-blue-pale py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-20 lg:px-12">
          <Reveal><figure className="bg-white"><img src="/assets/xingke-finishing-line-team.webp" alt="江西星科电子级玻纤布后处理生产线" className="aspect-[16/10] w-full object-cover" loading="lazy" /><figcaption className="flex items-center gap-3 border-t border-line px-5 py-4 text-sm font-semibold text-ink"><Buildings size={22} className="text-accent" aria-hidden="true" />电子级玻纤布后处理生产区域</figcaption></figure></Reveal>
          <SectionTitle title="以制造现场为基础" description="围绕电子布生产建立整经、浆纱、并轴、喷气织造及后处理能力，以设备基础和过程控制支持产品稳定性。" />
        </div>
      </section>
      <section className="bg-navy py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-soft">Development</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">从项目落地到规范制造</h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-white/70">以企业正式资料和公开资质为依据，呈现星科已发生、可核验的发展节点。</p>
          </div>
          <ol className="border-t border-white/20">
            {milestones.map(([date, event], index) => (
              <li key={`${date}-${event}`} className="grid gap-3 border-b border-white/20 py-6 sm:grid-cols-[150px_1fr] sm:gap-8">
                <span className="text-sm font-semibold tabular-nums text-blue-soft">{String(index + 1).padStart(2, "0")} · {date}</span>
                <span className="text-base leading-8 text-white/88">{event}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionTitle title="经营理念" description="以务实的制造态度面对每一道工序，以持续改进回应客户对质量、交付和协同的长期要求。" />
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {["稳定制造|关注工艺稳定与批次一致性", "持续改进|从设备、流程和检验中不断积累", "协同服务|与区域产业伙伴高效衔接"].map((item) => {
              const [title, copy] = item.split("|")
              return <div key={title} className="bg-white p-8"><h3 className="text-xl font-semibold text-ink">{title}</h3><p className="mt-4 text-sm leading-7 text-steel">{copy}</p></div>
            })}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  )
}

export function BusinessPage() {
  return (
    <>
      <PageMeta title="业务范围" description="了解上犹玻纤产业集群中的矿物原料、玻璃纤维纱、电子级玻纤布和工业级玻纤布制造协同。" />
      <PageHero title="区域产业协同" description="依托上犹玻纤产业集群，原料、玻纤纱与精密织造环节高效衔接。" eyebrow="Business Scope" image="/assets/yuanyuan-factory.webp" imageAlt="玻璃纤维制造基地" />
      <section className="bg-paper py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionTitle title="从矿物原料到玻纤织物" description="区域内不同经营主体分别承担矿物原料加工、池窑拉丝、玻纤纱制造与织物成型等产业环节。" />
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-4" aria-label="区域玻纤产业环节">
            {["矿物原料加工", "池窑拉丝制纱", "电子级玻纤布织造", "工业级玻纤布制造"].map((label, index) => (
              <div key={label} className="relative bg-white p-5">
                <span className="text-xs font-semibold tabular-nums text-accent">0{index + 1}</span>
                <p className="mt-3 text-sm font-semibold text-ink">{label}</p>
                {index < 3 && <ArrowRight size={18} className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 bg-white text-accent sm:block" aria-hidden="true" />}
              </div>
            ))}
          </div>
          <div className="mt-14 grid border-t border-line md:grid-cols-2">
            {businesses.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.name} delay={index * 0.05} className={`group border-b border-line py-9 md:p-9 ${index % 2 === 0 ? "md:border-r" : ""}`}>
                  <div className="overflow-hidden bg-mist"><img src={item.image} alt={`${item.name}${item.label}`} className="aspect-[16/9] w-full object-cover transition-transform duration-150 group-hover:scale-[1.015]" loading="lazy" /></div>
                  <div className="mt-7 flex items-start justify-between gap-6"><div><p className="text-xs font-semibold tracking-[0.12em] text-accent">{item.label}</p><h2 className="mt-2 text-2xl font-semibold text-ink">{item.name}</h2></div><Icon size={29} className="shrink-0 text-accent" aria-hidden="true" /></div>
                  <p className="mt-4 text-base leading-8 text-steel">{item.description}</p>
                  <p className="mt-6 border-l-2 border-accent pl-4 text-sm font-semibold text-ink">{item.detail}</p>
                </Reveal>
              )
            })}
          </div>
          <p className="mt-8 border-l-2 border-accent pl-4 text-sm leading-7 text-steel">以上主体为产业链上下游协同企业，均以各自公开经营范围开展业务；本页面不对股权或控制关系作推定。</p>
        </div>
      </section>
      <section className="border-y border-line bg-blue-pale py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12">
          <div>
            <SectionTitle title="元源玻纤产品与成型工艺" description="产品画册覆盖玻纤纱、织物与毡材，并按下游复合材料成型方式建立适配产品系列。" />
            <div className="mt-9 border-l-2 border-accent pl-5">
              <p className="text-xs font-semibold tracking-[0.12em] text-accent">典型复材工艺</p>
              <p className="mt-3 text-sm leading-7 text-steel">{compositeProcesses.join(" / ")}</p>
            </div>
          </div>
          <dl className="border-t border-line">
            {upstreamProductGroups.map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.04} className="grid gap-3 border-b border-line py-6 sm:grid-cols-[190px_1fr] sm:gap-8">
                <dt className="text-sm font-semibold text-ink">{title}</dt>
                <dd className="text-sm leading-7 text-steel">{copy}</dd>
              </Reveal>
            ))}
          </dl>
          <div className="border-t border-line pt-12 lg:col-span-2 lg:mt-4">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <SectionTitle title="上游纱线检测" description="元源新材料有限公司对玻璃纤维纱样品开展第三方检测，覆盖欧盟限用物质、高关注物质筛查及理化性能。以下结论均对应报告所述送检样品。" />
              <ol className="border-t border-line" aria-label="元源玻璃纤维纱第三方检测报告">
                {upstreamTestReports.map((item, index) => (
                  <Reveal key={item.report} delay={index * 0.04} className="grid gap-4 border-b border-line py-7 sm:grid-cols-[190px_1fr] sm:gap-8">
                    <div>
                      <p className="text-xs font-semibold text-accent">{item.category}</p>
                      <h3 className="mt-2 text-base font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-xs tabular-nums text-steel">{item.report} · {item.date}</p>
                    </div>
                    <p className="self-center text-sm leading-7 text-steel">{item.summary}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-line bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-12"><SectionTitle title="星科聚焦精密织造" description="产业协同为生产提供原料与玻纤纱基础，星科则集中建设电子级玻纤布织造与后处理能力。" /><Reveal><img src="/assets/fabric-detail.webp" alt="电子级玻纤布细节" className="aspect-[16/8] w-full object-cover" loading="lazy" /></Reveal></div>
      </section>
      <ContactCta />
    </>
  )
}

export function ProductsPage() {
  return (
    <>
      <PageMeta title="产品中心" description="查看江西星科 7628、2116、1080、3732 等电子级玻纤布产品。" />
      <PageHero title="电子级玻璃纤维布" description="围绕覆铜板与印制电路板应用，形成标准、中薄型、薄型及功能型玻纤布产品系列。" eyebrow="Products" image="/assets/glass-fabric-drape.webp" imageAlt="玻璃纤维布产品织纹与卷展状态" />
      <section className="bg-mist py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <ProductTabs />
        </div>
      </section>
      <section className="border-y border-line bg-white py-20 sm:py-28" aria-label="玻璃纤维布产品外观">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionTitle title="产品外观与织纹" description="通过近景呈现玻纤布的平纹组织、布面状态与铺展形态。图片用于产品外观展示，不对应单一型号。" />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <Reveal>
              <figure>
                <img src="/assets/glass-fabric-fold.webp" alt="玻璃纤维布平纹组织和折叠形态" className="aspect-[3/2] w-full object-cover" loading="lazy" />
                <figcaption className="mt-4 text-sm font-medium text-ink">平纹组织与布面均匀性</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.06}>
              <figure>
                <img src="/assets/glass-fabric-texture.webp" alt="玻璃纤维布织纹和铺展状态近景" className="aspect-[3/2] w-full object-cover" loading="lazy" />
                <figcaption className="mt-4 text-sm font-medium text-ink">织纹细节与铺展状态</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="border-y border-line bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <SectionTitle title="画册产品系列" description="按玻璃成分、增强性能与用途划分产品系列，帮助采购和技术团队快速定位规格范围。" />
            <div>
              <ol className="border-t border-line">
                {productFamilies.map((family, index) => (
                  <li key={family.name} className="grid gap-4 border-b border-line py-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                    <div>
                      <p className="text-xs font-semibold tabular-nums text-accent">0{index + 1}</p>
                      <h3 className="mt-2 text-base font-semibold text-ink">{family.name}</h3>
                      <p className="mt-2 text-xs leading-6 text-steel">{family.note}</p>
                    </div>
                    <p className="self-center text-sm leading-8 text-steel">{family.models}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-navy py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-soft">Product Value</p><h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">从基材性能理解产品</h2><p className="mt-5 text-pretty text-base leading-8 text-white/70">电子级玻纤布既承担结构增强，也关系到电气绝缘、尺寸稳定性和树脂含浸表现。</p></div>
            <div className="grid gap-px bg-white/20 sm:grid-cols-2">
              {productPrinciples.map(([title, copy]) => (
                <div key={title} className="bg-navy p-7 sm:p-8"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/68">{copy}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-line bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20 lg:px-12"><Reveal><img src="/assets/fabric-inspection.webp" alt="电子级玻纤布检验" className="aspect-[16/9] w-full object-cover" loading="lazy" /></Reveal><SectionTitle title="面向实际应用的稳定制造" description="产品信息以实际生产与交付为基础。具体型号、技术指标及适配需求，请与星科业务团队进一步沟通确认。" /></div>
      </section>
      <ContactCta />
    </>
  )
}

export function CapabilitiesPage() {
  return (
    <>
      <PageMeta title="制造能力" description="了解江西星科的整浆准备、并轴、喷气织造、电子布后处理、验布与分切复卷能力。" />
      <PageHero title="稳定工艺，稳定品质" description="从经纱准备到成品放行，围绕关键工序建立规范的电子级玻纤布制造流程。" eyebrow="Manufacturing" image="/assets/xingke-finishing-line-team.webp" imageAlt="江西星科电子级玻纤布后处理生产线与现场团队" />
      <section className="bg-paper py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionTitle title="设备与工艺能力" description="生产线围绕经纱准备、精密织造、后处理与质量控制建立制造能力。" />
          <div className="mt-14 grid border-y border-line md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, copy }, index) => (
              <Reveal key={title} delay={index * 0.05} className={`py-8 md:p-8 ${index % 2 === 0 ? "md:border-r" : ""} ${index < 3 ? "xl:border-r" : ""}`}><Icon size={30} className="text-accent" aria-hidden="true" /><h2 className="mt-7 text-lg font-semibold text-ink">{title}</h2><p className="mt-3 text-sm leading-7 text-steel">{copy}</p></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blue-pale py-20 sm:py-28 lg:py-36" aria-label="电子级玻纤布后处理现场">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-end lg:gap-20">
            <SectionTitle title="后处理与验布现场" description="电子级玻纤布织造后进入脱浆、开纤、表面处理、烘干定型、验布和卷装等环节，现场设备与物料周转按工序组织。" />
            <p className="max-w-xl border-l-2 border-accent pl-5 text-sm leading-7 text-steel">后处理直接影响布面洁净度、开纤状态与树脂含浸性；验布及分切复卷则用于确认外观、幅宽、卷长和批次标识。</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
            <Reveal>
              <figure className="bg-white">
                <img src="/assets/electronic-fabric-finishing.webp" alt="江西星科电子级玻纤布后处理生产区域" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <figcaption className="flex items-center justify-between gap-6 border-t border-line px-5 py-4 text-sm font-medium text-ink"><span>电子级玻纤布后处理生产区域</span><span className="text-xs font-semibold text-accent">FINISHING</span></figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.06}>
              <figure className="bg-white lg:mt-16">
                <img src="/assets/fabric-inspection-winding.webp" alt="江西星科玻纤布验布及卷装周转区域" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <figcaption className="flex items-center justify-between gap-6 border-t border-line px-5 py-4 text-sm font-medium text-ink"><span>玻纤布验布及卷装周转区域</span><span className="text-xs font-semibold text-accent">INSPECTION</span></figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="border-y border-line bg-white py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionTitle title="六道关键制造环节" description="把电子级玻纤布制造拆解到每一道工序，明确控制项目与前后衔接。" />
          <ol className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
            {manufacturingProcess.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.04} className="bg-paper p-7 sm:p-8">
                <span className="text-xs font-semibold tabular-nums text-accent">PROCESS {item.step}</span>
                <h2 className="mt-5 text-xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{item.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-y border-line bg-white py-20 sm:py-28 lg:py-36" aria-label="质量管理">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20 lg:px-12">
          <Reveal className="grid grid-cols-[1.18fr_0.82fr] gap-3 sm:gap-5"><img src="/assets/fabric-inspection.webp" alt="电子级玻纤布在线检验" className="h-full min-h-[420px] w-full object-cover" loading="lazy" /><div className="grid gap-3 sm:gap-5"><img src="/assets/yarn-array.webp" alt="玻纤纱织造准备" className="h-full min-h-48 w-full object-cover" loading="lazy" /><img src="/assets/fabric-open.webp" alt="电子级玻纤布布面" className="h-full min-h-48 w-full object-cover" loading="lazy" /></div></Reveal>
          <div><SectionTitle title="质量来自每一道工序" description="对张力、织造状态、后处理和布面质量的持续关注，是一致性交付的基础。" /><dl className="mt-9 border-t border-line">{qualityControls.map(([title, copy]) => <div key={title} className="grid gap-2 border-b border-line py-5 sm:grid-cols-[110px_1fr] sm:gap-5"><dt className="flex items-center gap-3 text-sm font-semibold text-ink"><Check size={17} className="text-accent" aria-hidden="true" />{title}</dt><dd className="text-sm leading-7 text-steel">{copy}</dd></div>)}</dl></div>
        </div>
      </section>
      <ContactCta />
    </>
  )
}

export function HonorsPage() {
  return (
    <>
      <PageMeta title="荣誉资质" description="查看江西星科的高新技术企业、绿色工厂与专利成果。" />
      <PageHero title="资质与创新成果" description="持续推进技术创新、绿色制造与规范经营，以积累支撑长期发展。" eyebrow="Honors" image="/assets/xingke-line.webp" imageAlt="江西星科制造现场" />
      <section className="bg-paper py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionTitle title="企业资质" description="以公开证书与专利材料为依据，集中呈现星科在技术创新和绿色制造方面的积累。" />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {honors.map((honor, index) => (
              <Reveal key={honor.title} delay={index * 0.05}><figure className="h-full bg-white p-5 sm:p-6"><div className="flex aspect-[4/3] items-center justify-center bg-mist p-5"><img src={honor.image} alt={honor.title} className="max-h-full max-w-full object-contain" loading="lazy" /></div><figcaption className="pt-6"><p className="flex items-center gap-2 text-base font-semibold text-ink"><SealCheck size={20} className="text-accent" aria-hidden="true" /> {honor.title}</p><p className="mt-2 text-sm leading-6 text-steel">{honor.meta}</p></figcaption></figure></Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
            <div className="bg-white p-6"><p className="text-xs font-semibold text-accent">高企认定</p><p className="mt-3 text-sm leading-7 text-steel">江西省 2023 年第四批高新技术企业，证书编号与正式名单顺序相互对应。</p></div>
            <div className="bg-white p-6"><p className="text-xs font-semibold text-accent">绿色制造</p><p className="mt-3 text-sm leading-7 text-steel">以江西省绿色制造名单及企业牌匾为公开展示依据。</p></div>
            <div className="bg-white p-6"><p className="text-xs font-semibold text-accent">专利成果</p><p className="mt-3 text-sm leading-7 text-steel">围绕电子布生产工艺与设备形成发明专利和实用新型专利积累。</p></div>
          </div>
        </div>
      </section>
      <section className="border-y border-line bg-white py-20 sm:py-28"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20 lg:px-12"><SectionTitle title="创新来自制造现场" description="围绕电子布工艺、生产设备和质量控制持续积累技术成果，让改进服务于实际生产。" /><Reveal><img src="/assets/fabric-detail.webp" alt="电子级玻纤布细节" className="aspect-[16/8] w-full object-cover" loading="lazy" /></Reveal></div></section>
      <ContactCta />
    </>
  )
}

export function ContactPage() {
  const iconMap = { phone: Phone, email: EnvelopeSimple, map: MapPin }

  return (
    <>
      <PageMeta title="联系我们" description="联系江西星科，咨询电子级玻纤布产品、交付和产业合作。" />
      <PageHero title="与星科建立联系" description="欢迎就产品型号、交付需求和产业合作与我们沟通。" eyebrow="Contact" image="/assets/xingke-campus-east.webp" imageAlt="江西星科电子基材有限公司制造基地" />
      <section className="bg-blue-pale py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12">
          <div>
            <SectionTitle title="业务联系" description="如需进一步了解产品参数、交付安排或合作方式，请通过以下渠道联系。" />
            <ul className="mt-8 grid gap-3 text-sm text-steel" aria-label="可咨询事项">
              {["产品型号与规格确认", "样品与技术资料沟通", "生产现场与质量能力交流", "交付需求与产业合作"].map((item) => <li key={item} className="flex items-center gap-3"><Check size={16} className="text-accent" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
          <address className="grid gap-px bg-line not-italic sm:grid-cols-2">
            {contacts.map((contact) => {
              const Icon = iconMap[contact.type as keyof typeof iconMap]
              const external = contact.type === "map"
              return <a key={contact.label} href={contact.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group flex min-h-48 flex-col justify-between bg-white p-7 text-ink transition-colors duration-150 hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"><Icon size={27} className="text-accent" aria-hidden="true" /><span className="mt-9"><span className="block text-xs font-semibold tracking-wide text-steel">{contact.label}</span><span className="mt-2 flex items-end justify-between gap-4 text-sm font-medium leading-7 sm:text-base">{contact.value}<ArrowRight size={17} className="shrink-0 text-accent transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" /></span></span></a>
            })}
          </address>
        </div>
      </section>
      <section className="border-y border-line bg-white py-20 sm:py-28"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-12"><div><p className="text-sm font-semibold text-accent">公司地址</p><h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl">江西省赣州市上犹县<br />黄埠工业园南区</h2><a href="https://ditu.amap.com/search?query=江西星科电子基材有限公司" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-accent hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">在地图中查看 <ArrowRight size={18} aria-hidden="true" /></a></div><img src="/assets/xingke-campus-front.webp" alt="江西星科制造基地全景" className="aspect-[16/8] w-full object-cover" loading="lazy" /></div></section>
    </>
  )
}

export function NewsPage() {
  const featured = newsItems[0]
  const categoryCounts = ["媒体聚焦", "项目进展", "产业资讯", "企业动态"].map((category) => ({
    category,
    count: newsItems.filter((item) => item.category === category).length,
  }))

  return (
    <>
      <PageMeta title="新闻中心" description="查看江西星科企业动态、产业发展信息与公开媒体报道。" />
      <PageHero title="新闻中心" description="记录制造现场、产业协同与公开媒体关注，以可核实的信息呈现星科发展。" eyebrow="News" image="/assets/news-xingke-workshop-2026.jpg" imageAlt="江西星科电子玻纤布生产现场" />
      <section className="bg-paper py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
            <SectionTitle title="重点报道" description="从公开媒体、政府平台和行业机构中整理与星科制造、区域产业协同直接相关的信息。" />
            <dl className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
              {categoryCounts.map(({ category, count }) => (
                <div key={category} className="bg-white p-5">
                  <dt className="text-xs font-medium text-steel">{category}</dt>
                  <dd className="mt-2 text-2xl font-semibold tabular-nums text-navy">{count}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Link to={`/news/${featured.slug}`} className="group mt-12 grid overflow-hidden border border-line bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden bg-mist"><img src={featured.image} alt={featured.imageAlt} className="h-full min-h-80 w-full object-cover transition-transform duration-150 group-hover:scale-[1.015]" /></div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold"><span className="text-accent">{featured.category}</span><time dateTime={featured.date} className="text-steel">{featured.displayDate}</time></div>
              <h2 className="mt-5 text-balance text-2xl font-semibold leading-snug text-ink sm:text-3xl">{featured.title}</h2>
              <p className="mt-5 text-pretty text-sm leading-7 text-steel sm:text-base sm:leading-8">{featured.summary}</p>
              <p className="mt-6 text-xs text-steel">来源：{featured.source}</p>
              <span className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-accent">阅读全文 <ArrowRight size={18} aria-hidden="true" /></span>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-white py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionTitle title="全部报道" description="按发布时间排列。正文为企业官网摘要，事实与数据均标注原始来源。" />
          <div className="mt-12 border-t border-line">
            {newsItems.slice(1).map((item) => (
              <Link key={item.slug} to={`/news/${item.slug}`} className="group grid gap-6 border-b border-line py-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:grid-cols-[120px_220px_1fr_auto] md:items-center lg:grid-cols-[150px_260px_1fr_auto]">
                <div>
                  <time dateTime={item.date} className="text-sm font-semibold tabular-nums text-navy">{item.displayDate}</time>
                  <p className="mt-2 text-xs font-semibold text-accent">{item.category}</p>
                </div>
                <div className="overflow-hidden bg-mist"><img src={item.image} alt={item.imageAlt} className="aspect-[3/2] w-full object-cover transition-transform duration-150 group-hover:scale-[1.015]" loading="lazy" /></div>
                <div><h2 className="text-balance text-xl font-semibold leading-snug text-ink sm:text-2xl">{item.title}</h2><p className="mt-3 max-w-3xl text-pretty text-sm leading-7 text-steel">{item.summary}</p><p className="mt-4 text-xs text-steel">来源：{item.source}</p></div>
                <span className="flex size-11 items-center justify-center border border-line bg-white text-accent transition-colors duration-150 group-hover:border-accent group-hover:bg-accent group-hover:text-white"><ArrowRight size={19} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionTitle title="企业影像" description="从生产班组到行业交流，用真实场景记录制造企业的日常。" />
          <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-2">
            {fieldStories.map((story) => (
              <article key={story.title} className="bg-paper">
                <div className="overflow-hidden"><img src={story.image} alt={story.alt} className="aspect-[16/9] w-full object-cover transition-transform duration-150 hover:scale-[1.015]" loading="lazy" /></div>
                <div className="p-7 sm:p-8"><p className="text-xs font-semibold tracking-[0.12em] text-accent">{story.label}</p><h2 className="mt-3 text-xl font-semibold text-ink sm:text-2xl">{story.title}</h2><p className="mt-4 text-sm leading-7 text-steel">{story.copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  )
}

export function NewsDetailPage() {
  const { slug } = useParams()
  const article = newsItems.find((item) => item.slug === slug)

  if (!article) return <NotFoundPage />

  return (
    <article className="bg-paper">
      <PageMeta title={article.title} description={article.summary} />
      <header className="border-b border-line bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Link to="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><ArrowRight className="rotate-180" size={17} aria-hidden="true" /> 返回新闻中心</Link>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-xs font-semibold"><span className="text-accent">{article.category}</span><time dateTime={article.date} className="text-steel">{article.displayDate}</time></div>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.18] tracking-[-0.035em] text-ink sm:text-5xl lg:text-6xl">{article.title}</h1>
          <p className="mt-7 text-sm leading-7 text-steel">来源：{article.source}{article.author ? `　作者：${article.author}` : ""}</p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <figure>
          <img src={article.image} alt={article.imageAlt} className="aspect-[3/2] w-full object-cover" />
          <figcaption className="border-x border-b border-line bg-white px-5 py-4 text-xs leading-6 text-steel">{article.imageCaption}</figcaption>
        </figure>

        <div className="mx-auto mt-12 max-w-3xl border-l-2 border-accent bg-blue-pale px-6 py-7 sm:px-8">
          <p className="text-pretty text-lg font-semibold leading-8 text-navy sm:text-xl">{article.lead}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-pretty text-base leading-9 text-ink sm:text-lg">
          {article.body.map((paragraph) => <p key={paragraph} className="mt-7 first:mt-0">{paragraph}</p>)}
        </div>

        {article.highlights && (
          <section className="mx-auto mt-14 max-w-3xl border-y border-line py-9" aria-label="报道要点">
            <h2 className="text-2xl font-semibold text-ink">报道要点</h2>
            <dl className="mt-7 grid gap-7 sm:grid-cols-3">
              {article.highlights.map((highlight) => <div key={highlight.label}><dt className="text-2xl font-semibold text-navy sm:text-3xl">{highlight.value}</dt><dd className="mt-2 text-sm leading-6 text-steel">{highlight.label}</dd></div>)}
            </dl>
          </section>
        )}

        {article.secondaryImage && (
          <figure className="mx-auto mt-14 max-w-3xl">
            <img src={article.secondaryImage.src} alt={article.secondaryImage.alt} className="w-full border border-line" loading="lazy" />
            <figcaption className="mt-3 text-xs leading-6 text-steel">{article.secondaryImage.caption}</figcaption>
          </figure>
        )}

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-7 text-steel">本文为企业官网摘要，完整内容与版权归原发布媒体所有。</p>
          <a href={article.originalUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-accent hover:text-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">查看报道原文 <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </article>
  )
}

export function NotFoundPage() {
  return (
    <section className="flex min-h-[65svh] items-center bg-paper py-20">
      <PageMeta title="页面未找到" description="当前页面不存在，请返回江西星科官网首页。" />
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12"><p className="text-sm font-semibold text-accent">404</p><h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">页面未找到</h1><p className="mt-5 text-base leading-8 text-steel">该页面可能已移动或地址输入有误。</p><div className="mt-8"><PageLink to="/" label="返回首页" /></div></div>
    </section>
  )
}
