import { useEffect, useRef, useState, type ReactNode } from "react"
import { ArrowRight } from "@phosphor-icons/react"
import { AnimatePresence, animate, motion, useInView, useReducedMotion } from "motion/react"
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { cn } from "./lib"
import { navigation } from "./site-data"

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.48, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function SectionLine() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.span
      aria-hidden="true"
      className="mb-7 block h-1 w-16 origin-left bg-accent"
      initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    />
  )
}

export function SectionTitle({ title, description, className }: { title: string; description?: string; className?: string }) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <SectionLine />
      <h2 className="text-balance text-3xl font-semibold leading-[1.25] tracking-[-0.025em] text-ink sm:text-4xl lg:text-[3.25rem]">{title}</h2>
      {description ? <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-steel sm:text-lg">{description}</p> : null}
    </Reveal>
  )
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
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

export function PageMeta({ title, description }: { title: string; description: string }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = `${title}｜江西星科电子基材有限公司`
    const pageUrl = new URL(pathname, "https://www.xingkefabric.com").toString()
    document.title = fullTitle
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = description
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", pageUrl)
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute("content", fullTitle)
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute("content", description)
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute("content", pageUrl)
  }, [description, pathname, title])

  return null
}

export function PageHero({ title, description, image, imageAlt, eyebrow }: { title: string; description: string; image: string; imageAlt: string; eyebrow: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="page-hero-grid border-b border-line bg-navy text-white">
      <motion.div
        className="flex min-h-[420px] items-center px-5 py-16 sm:px-8 lg:min-h-[520px] lg:px-12"
        initial={reduceMotion ? false : { opacity: 0, x: -18 }}
        animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 0.48, ease: "easeOut" }}
      >
        <div className="mx-auto w-full max-w-[620px] lg:mx-0 lg:ml-auto lg:pr-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-soft">{eyebrow}</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.12] tracking-[-0.035em] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-white/74 sm:text-lg">{description}</p>
        </div>
      </motion.div>
      <div className="relative min-h-[320px] overflow-hidden lg:min-h-[520px]">
        <motion.img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          initial={reduceMotion ? false : { opacity: 0.7, scale: 1.025 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.62, ease: "easeOut" }}
        />
      </div>
    </section>
  )
}

export function PageLink({ to, label, inverse = false }: { to: string; label: string; inverse?: boolean }) {
  return (
    <Link to={to} className={cn("inline-flex h-12 items-center gap-3 px-6 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", inverse ? "bg-white text-navy hover:bg-blue-soft focus-visible:ring-white" : "bg-accent text-white hover:bg-accent-strong focus-visible:ring-accent")}>
      {label} <ArrowRight size={18} aria-hidden="true" />
    </Link>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" aria-label="江西星科电子基材有限公司首页">
          <img src="/assets/xingke-mark.png" alt="" className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11" />
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-wide text-ink sm:text-base">江西星科电子基材有限公司</span>
            <span className="hidden text-[10px] font-medium tracking-[0.08em] text-steel sm:block">JIANGXI XINGKE ELECTRONIC SUBSTRATE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="主要导航">
          {navigation.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => cn("relative py-2 text-[13px] font-medium transition-colors duration-150 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent", isActive ? "text-accent after:scale-x-100" : "text-ink after:scale-x-0 hover:text-accent hover:after:scale-x-100")}>
              {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="hidden h-11 shrink-0 items-center gap-3 bg-accent px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 xl:flex">
          业务联系 <ArrowRight size={17} aria-hidden="true" />
        </Link>

        <div className="absolute right-5 shrink-0 sm:right-8 xl:hidden">
          <button type="button" aria-label={menuOpen ? "关闭网站菜单" : "打开网站菜单"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="flex size-11 items-center justify-center text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <span className="text-xs font-semibold tracking-[0.12em]">{menuOpen ? "关闭" : "菜单"}</span>
          </button>
          {menuOpen ? (
            <nav aria-label="移动端导航" className="absolute right-0 top-[59px] w-[min(21rem,calc(100vw-2.5rem))] border border-line bg-white p-3 shadow-[0_24px_60px_rgba(10,35,65,0.16)]">
              {navigation.map(([label, to]) => (
                <NavLink key={to} to={to} end={to === "/"} onClick={() => setMenuOpen(false)} className={({ isActive }) => cn("flex items-center justify-between border-b border-line px-3 py-3.5 text-sm font-medium last:border-0 hover:bg-mist hover:text-accent", isActive ? "text-accent" : "text-ink")}>
                  {label} <ArrowRight size={16} aria-hidden="true" />
                </NavLink>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-white/18 pb-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-center gap-4">
            <span className="flex size-12 items-center justify-center bg-white"><img src="/assets/xingke-mark.png" alt="" className="h-9 w-9 object-contain" /></span>
            <span>
              <span className="block text-base font-semibold">江西星科电子基材有限公司</span>
              <span className="mt-1 block text-[10px] tracking-[0.08em] text-white/58">JIANGXI XINGKE ELECTRONIC SUBSTRATE</span>
            </span>
          </div>
          <nav aria-label="页脚导航" className="flex flex-wrap gap-x-6 gap-y-3">
            {navigation.slice(1).map(([label, to]) => <Link key={to} to={to} className="text-xs text-white/68 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">{label}</Link>)}
          </nav>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/58 md:flex-row md:items-center md:justify-between">
          <p>电子级玻璃纤维布制造</p>
          <p className="tabular-nums">© {new Date().getFullYear()} Jiangxi Xingke Electronic Substrate Co., Ltd.</p>
        </div>
      </div>
    </footer>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return null
}

export function Layout() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <a href="#main" className="sr-only z-50 bg-white px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">跳到主要内容</a>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main"
          key={location.pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
