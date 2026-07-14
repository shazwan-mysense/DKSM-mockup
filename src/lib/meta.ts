import { useEffect } from 'react'
import { SITE_URL } from '../data/company'

interface PageMeta {
  title: string
  description: string
  /** Path for the canonical URL placeholder, e.g. "/about" */
  path: string
  /** Set for pages that must stay out of search indexes (e.g. the 404). */
  noindex?: boolean
}

/**
 * Client-side SEO metadata for the SPA mockup.
 * On the production build (WordPress or prerendered), these tags should be
 * emitted server-side; this hook keeps every route's metadata unique and
 * inspectable in the meantime.
 */
export function usePageMeta({ title, description, path, noindex = false }: PageMeta) {
  useEffect(() => {
    document.title = title

    const ensure = (selector: string, create: () => HTMLElement) => {
      let el = document.head.querySelector(selector) as HTMLElement | null
      if (!el) {
        el = create()
        document.head.appendChild(el)
      }
      return el
    }

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      const el = ensure(`meta[${attr}="${key}"]`, () => {
        const m = document.createElement('meta')
        m.setAttribute(attr, key)
        return m
      })
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', SITE_URL + path)

    const canonical = ensure('link[rel="canonical"]', () => {
      const l = document.createElement('link')
      l.setAttribute('rel', 'canonical')
      return l
    })
    canonical.setAttribute('href', SITE_URL + path)

    const existingRobots = document.head.querySelector('meta[name="robots"]')
    if (noindex) {
      setMeta('name', 'robots', 'noindex')
    } else if (existingRobots) {
      existingRobots.remove()
    }
  }, [title, description, path, noindex])
}

/** Inject a BreadcrumbList JSON-LD block for inner pages. */
export function useBreadcrumbSchema(items: { name: string; path: string }[]) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.breadcrumb = 'true'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: SITE_URL + item.path,
      })),
    })
    document.head.querySelectorAll('script[data-breadcrumb]').forEach((s) => s.remove())
    document.head.appendChild(script)
    return () => script.remove()
  }, [items])
}
