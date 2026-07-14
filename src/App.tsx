import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Projects = lazy(() => import('./pages/Projects'))
const Knowledge = lazy(() => import('./pages/Knowledge'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

/**
 * Scroll to top on route change; honour in-page #anchors.
 * Anchor targets on lazy-loaded routes may not exist yet when the location
 * changes, so we retry briefly until the chunk has rendered.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      let tries = 0
      const timer = window.setInterval(() => {
        const el = document.querySelector(hash)
        if (el) {
          // instant: a route change should land like a page load, not animate
          el.scrollIntoView({ block: 'start', behavior: 'instant' })
          window.clearInterval(timer)
        } else if (++tries > 40) {
          window.clearInterval(timer)
        }
      }, 50)
      return () => window.clearInterval(timer)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
    // Move focus to the main landmark so screen readers announce the new page.
    document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Suspense
          fallback={
            <div className="shell py-32 text-center">
              <p className="tech-label text-steel">Loading…</p>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
