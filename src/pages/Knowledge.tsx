import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../lib/asset'
import { useBreadcrumbSchema, usePageMeta } from '../lib/meta'
import { useInView } from '../lib/motion'
import { faqCategories } from '../data/faqs'
import { articles } from '../data/articles'
import { news } from '../data/news'
import { credentials } from '../data/credentials'
import FaqAccordion from '../components/FaqAccordion'
import { Breadcrumbs, CTABlock, PageHero, SectionHeading } from '../components/primitives'

const BREADCRUMB = [
  { name: 'Home', path: '/' },
  { name: 'Knowledge Centre', path: '/knowledge' },
]

/* ------------------------------------------------------------------ */
/* FAQ with search + category filter                                    */
/* ------------------------------------------------------------------ */
function FaqSection() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('all')
  const ref = useInView<HTMLDivElement>(0.02)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return faqCategories
      .filter((c) => category === 'all' || c.id === category)
      .map((c) => ({
        ...c,
        faqs: c.faqs.filter((f) => !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)),
      }))
      .filter((c) => c.faqs.length > 0)
  }, [query, category])

  const total = filtered.reduce((n, c) => n + c.faqs.length, 0)

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="General FAQs"
          title="Straight answers on fire protection and MEP"
          lead="Grouped by topic — or search across everything. If your question is not here, ask the engineering team directly."
        />

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <label htmlFor="faq-search" className="sr-only">
              Search frequently asked questions
            </label>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-steel"
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="m11 11 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions, e.g. “inspection”"
              className="min-h-11 w-full rounded-[3px] border border-line bg-white py-2.5 pl-10 pr-4 text-[15px] text-ink placeholder:text-steel/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
            <button
              type="button"
              onClick={() => setCategory('all')}
              aria-pressed={category === 'all'}
              className={`min-h-10 rounded-[3px] border px-3.5 py-2 text-[13px] font-medium transition-colors ${
                category === 'all' ? 'border-brand bg-brand text-white' : 'border-line bg-white text-graphite hover:border-steel'
              }`}
            >
              All topics
            </button>
            {faqCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                aria-pressed={category === c.id}
                className={`min-h-10 rounded-[3px] border px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  category === c.id ? 'border-brand bg-brand text-white' : 'border-line bg-white text-graphite hover:border-steel'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[12.5px] text-steel" role="status">
          {total} question{total === 1 ? '' : 's'} shown
        </p>

        <div className="mt-4 space-y-12">
          {filtered.map((c) => (
            <div key={c.id}>
              <h2 className="tech-label mb-4 text-brand">{c.title}</h2>
              <FaqAccordion faqs={c.faqs} />
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="rounded-[4px] border border-line bg-white p-8 text-center text-[14.5px] text-steel">
              No questions match “{query}”. Try a different term, or send the question through the contact page.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Educational articles                                                 */
/* ------------------------------------------------------------------ */
function Articles() {
  const [openId, setOpenId] = useState<string | null>(null)
  const ref = useInView<HTMLDivElement>(0.02)

  return (
    <section className="grid-lines bg-ink py-20 text-white md:py-28">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="Guides & education — fire protection and MEP"
          title="Short reads for facility owners and managers"
          lead="Practical notes from the field — each one expands in place, and each will grow into a full resource over time."
          dark
        />
        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => {
            const open = openId === a.id
            return (
              <article key={a.id} className={`reveal flex flex-col rounded-[4px] border border-white/10 bg-white/[0.03] p-7 ${open ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                <p className="tech-label text-white/60">{a.readMinutes} min read</p>
                <h3 className="mt-4 font-display text-[18px] font-bold leading-snug">{a.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">{a.summary}</p>
                {open && (
                  <div className="mt-6 max-w-3xl space-y-4 border-t border-white/10 pt-6 text-[14.5px] leading-relaxed text-white/75">
                    {a.body.map((p) => (
                      <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : a.id)}
                  aria-expanded={open}
                  className="tech-label mt-6 flex min-h-10 items-center gap-2 self-start text-brand-bright transition-colors hover:text-white"
                >
                  {open ? 'Close article' : 'Read article'}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                  >
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Company news — honest empty state until real announcements exist     */
/* ------------------------------------------------------------------ */
function CompanyNews() {
  const [openId, setOpenId] = useState<string | null>(null)
  const ref = useInView<HTMLDivElement>()
  return (
    <section className="rule-t bg-white py-20 md:py-24">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="Company news"
          title="News and announcements"
          lead="Updates from DKSM Group — announcements, project milestones and notices will be published here."
        />
        {news.length === 0 ? (
          <div className="reveal mt-10 rounded-[4px] border border-line bg-paper p-8">
            <p className="max-w-2xl text-[14.5px] leading-relaxed text-steel">
              No announcements published yet — DKSM’s first company news will appear here. Major updates can
              also be surfaced on the homepage when needed.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => {
              const open = openId === n.id
              return (
                <article key={n.id} className={`reveal flex flex-col rounded-[4px] border border-line bg-paper p-7 ${open ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                  <p className="tech-label text-steel">
                    {new Date(n.date).toLocaleDateString('en-MY', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                  <h3 className="mt-3 font-display text-[18px] font-bold leading-snug text-ink">{n.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-steel">{n.summary}</p>
                  {open && (
                    <div className="mt-6 max-w-3xl space-y-4 border-t border-line pt-6 text-[14.5px] leading-relaxed text-graphite/90">
                      {n.body.map((p) => (
                        <p key={p.slice(0, 32)}>{p}</p>
                      ))}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : n.id)}
                    aria-expanded={open}
                    className="tech-label mt-6 flex min-h-10 items-center gap-2 self-start text-brand transition-colors hover:text-brand-deep"
                  >
                    {open ? 'Close' : 'Read announcement'}
                  </button>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Awards & recognition                                                 */
/* ------------------------------------------------------------------ */
function Awards() {
  const awards = credentials.filter((c) => c.category === 'Award')
  const ref = useInView<HTMLDivElement>()
  return (
    <section className="rule-t bg-paper py-20 md:py-24">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="Awards, recognition & acknowledgement"
          title="Recognised along the way"
          lead="Recognition received by DKSM Group companies — award details are being confirmed for publication."
        />
        <ul className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {awards.map((a) => (
            <li key={a.id} className="reveal flex items-center gap-5 rounded-[4px] border border-line bg-white p-6">
              <span className="flex h-16 w-20 shrink-0 items-center justify-center rounded-[3px] border border-line bg-white p-2">
                <img src={asset(a.image)} alt="" loading="lazy" className="max-h-full max-w-full object-contain" />
              </span>
              <div>
                <p className="font-display text-[15px] font-bold leading-snug text-ink">{a.name}</p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-steel">{a.org}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="reveal mt-8 text-[14px] text-steel">
          Registrations and memberships are listed on the{' '}
          <Link to="/about#credentials" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
            About page
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

export default function Knowledge() {
  usePageMeta({
    title: 'Knowledge Centre — Fire Protection & MEP Guides | DKSM Group',
    description:
      'Guides, company news and FAQs on fire protection, MEP, maintenance and Malaysian authority processes — from DKSM Group’s engineering team.',
    path: '/knowledge',
  })
  useBreadcrumbSchema(BREADCRUMB)

  return (
    <>
      <PageHero
        image="/images/backgrounds/hero-knowledge.webp"
        imageAlt=""
        eyebrow="Knowledge Centre"
        title="Understand Your Systems Before You Buy Them"
        lead="Guides, company news and straight answers on fire protection and MEP — how maintenance and approvals actually run, and what to prepare."
      />
      <Breadcrumbs items={BREADCRUMB} />
      <Articles />
      <CompanyNews />
      <FaqSection />
      <Awards />
      <CTABlock
        heading="Question not answered here?"
        text="Send it to DKSM’s engineering team — practical questions get practical answers."
        buttonLabel="Ask the Team"
      />
    </>
  )
}
