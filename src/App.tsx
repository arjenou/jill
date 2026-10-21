/** @jsxImportSource ./i18n-jsx */
import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components"

const HomePage = lazy(() => import("./pages").then((module) => ({ default: module.HomePage })))
const AboutPage = lazy(() => import("./pages").then((module) => ({ default: module.AboutPage })))
const BusinessPage = lazy(() => import("./pages").then((module) => ({ default: module.BusinessPage })))
const ProductsPage = lazy(() => import("./pages").then((module) => ({ default: module.ProductsPage })))
const CapabilitiesPage = lazy(() => import("./pages").then((module) => ({ default: module.CapabilitiesPage })))
const HonorsPage = lazy(() => import("./pages").then((module) => ({ default: module.HonorsPage })))
const ContactPage = lazy(() => import("./pages").then((module) => ({ default: module.ContactPage })))
const NewsPage = lazy(() => import("./pages").then((module) => ({ default: module.NewsPage })))
const NewsDetailPage = lazy(() => import("./pages").then((module) => ({ default: module.NewsDetailPage })))
const NotFoundPage = lazy(() => import("./pages").then((module) => ({ default: module.NotFoundPage })))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-dvh bg-paper" aria-label="页面加载中" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="business" element={<BusinessPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="capabilities" element={<CapabilitiesPage />} />
            <Route path="honors" element={<HonorsPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="news/:slug" element={<NewsDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
