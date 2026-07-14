import { useMemo, useRef, useState } from 'react'
import { useBreadcrumbSchema, usePageMeta } from '../lib/meta'
import { useInView } from '../lib/motion'
import { featuredCaseStudy, gallery, galleryDisclaimer, projects, sectors } from '../data/projects'
import type { Sector } from '../data/projects'
import { industries } from '../data/industries'
import Lightbox from '../components/Lightbox'
import { Breadcrumbs, CTABlock, PageHero, SectionHeading, SmartImage } from '../components/primitives'

const BREADCRUMB = [
  { name: 'Home', path: '/' },
  { name: 'Projects & Industries', path: '/projects' },
]

/* ------------------------------------------------------------------ */
/* Filterable project cards                                             */
/* ------------------------------------------------------------------ */
function ProjectGallery() {
  const [filter, setFilter] = useState<'All' | Sector>('All')
  const ref = useInView<HTMLDivElement>(0.02)
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.sector === filter)),
    [filter],
  )

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="Project portfolio"
          title="Recent and representative work"
          lead="Confirmed DKSM project references are being compiled — the cards below hold their place and will be populated with real scopes, locations and photography."
        />

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by sector">
          {(['All', ...sectors] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              aria-pressed={filter === s}
              className={`min-h-10 rounded-[3px] border px-4 py-2 text-[13px] font-medium transition-colors ${
                filter === s
                  ? 'border-brand bg-brand text-white'
                  : 'border-line bg-white text-graphite hover:border-steel'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <li key={p.id} className="reveal group overflow-hidden rounded-[4px] border border-line bg-white">
              <div className="relative overflow-hidden">
                <SmartImage
                  src={p.image}
                  alt={p.imageAlt}
                  ratio="16/10"
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="tech-label absolute left-3 top-3 bg-ink/85 px-2.5 py-1.5 text-white">{p.sector}</span>
                {p.placeholder && (
                  <span className="tech-label absolute right-3 top-3 rounded-[3px] bg-amber-100/95 px-2.5 py-1.5 text-[9px] text-amber-900">
                    Awaiting confirmation
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-[16px] font-bold leading-snug text-ink">{p.scope}</h3>
                <p className="mt-3 flex flex-wrap gap-1.5">
                  {p.services.map((s) => (
                    <span key={s} className="rounded-[3px] border border-line bg-paper px-2 py-1 text-[11.5px] text-graphite">
                      {s}
                    </span>
                  ))}
                </p>
                <p className="mt-3 text-[12.5px] leading-relaxed text-steel">
                  Client, location and project details to be published once confirmed by DKSM.
                </p>
              </div>
            </li>
          ))}
        </ul>
        {visible.length === 0 && (
          <p className="mt-10 rounded-[4px] border border-line bg-white p-8 text-center text-[14.5px] text-steel">
            No projects in this sector yet — confirmed references are being compiled.
          </p>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Featured case study                                                  */
/* ------------------------------------------------------------------ */
function CaseStudy() {
  const cs = featuredCaseStudy
  const ref = useInView<HTMLDivElement>(0.05)
  return (
    <section className="grid-lines bg-ink py-20 text-white md:py-28">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="Featured case study"
          title="The structure every DKSM reference will follow"
          lead="Challenge, scope, solution, systems and outcome — ready to carry a confirmed project the moment details are approved."
          dark
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-[4px] border border-white/10 bg-white/10 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative bg-ink">
            <SmartImage src={cs.image} alt={cs.imageAlt} className="h-full min-h-[280px]" imgClassName="opacity-80" />
            {cs.placeholder && (
              <p className="tech-label absolute left-4 top-4 rounded-[3px] bg-ink/90 px-3 py-2 text-amber-300">
                {cs.label}
              </p>
            )}
          </div>
          <div className="space-y-6 bg-ink p-7 sm:p-9">
            {[
              ['Challenge', cs.challenge],
              ['DKSM scope', cs.scope],
              ['Solution', cs.solution],
              ['Outcome', cs.outcome],
            ].map(([k, v]) => (
              <div key={k} className="reveal">
                <h3 className="tech-label text-brand-bright">{k}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/65">{v}</p>
              </div>
            ))}
            <div className="reveal">
              <h3 className="tech-label text-brand-bright">Systems involved</h3>
              <p className="mt-2 flex flex-wrap gap-2">
                {cs.systems.map((s) => (
                  <span key={s} className="rounded-[3px] border border-white/15 px-2.5 py-1 text-[12px] text-white/70">
                    {s}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Industry expertise                                                   */
/* ------------------------------------------------------------------ */
function IndustryExpertise() {
  const ref = useInView<HTMLDivElement>(0.02)
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="Industry expertise"
          title="What each sector actually demands"
          lead="Every environment has its own engineering pressures. These are the concerns DKSM designs and services around."
        />
        <div className="mt-12 space-y-3">
          {industries.map((ind) => (
            <article
              key={ind.id}
              id={ind.id}
              className="reveal grid scroll-mt-[90px] gap-0 overflow-hidden rounded-[4px] border border-line bg-white md:grid-cols-[260px_1fr]"
            >
              <SmartImage
                src={ind.image}
                alt={ind.imageAlt}
                className="h-full min-h-[160px]"
              />
              <div className="p-6 sm:p-7">
                <p className="tech-label text-brand">Sector</p>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{ind.title}</h3>
                <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-graphite/85">{ind.concerns}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Image gallery + lightbox                                             */
/* ------------------------------------------------------------------ */
function ImageGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)
  const ref = useInView<HTMLDivElement>(0.02)

  const close = () => {
    setLightbox(null)
    lastTrigger.current?.focus()
  }

  return (
    <section className="rule-t bg-white py-20 md:py-28">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="Gallery"
          title="The systems behind the ceilings"
          lead={galleryDisclaimer}
        />
        <ul className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <li key={g.id}>
              <button
                type="button"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget
                  setLightbox(i)
                }}
                className="reveal-scale group block w-full overflow-hidden rounded-[4px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
                aria-label={`Open image: ${g.caption}`}
              >
                <SmartImage
                  src={g.image}
                  alt={g.caption}
                  ratio="4/3"
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <span className="mt-2 block px-0.5 pb-2 text-[12.5px] leading-snug text-steel">{g.caption}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {lightbox !== null && (
        <Lightbox items={gallery} index={lightbox} onClose={close} onNavigate={setLightbox} />
      )}
    </section>
  )
}

export default function Projects() {
  usePageMeta({
    title: 'Projects & Industries | DKSM Group',
    description:
      'MEP and fire-protection engineering for industrial, commercial, healthcare, transport, data-centre and energy facilities across Malaysia.',
    path: '/projects',
  })
  useBreadcrumbSchema(BREADCRUMB)

  return (
    <>
      <PageHero
        image="/images/backgrounds/hero-projects.webp"
        imageAlt=""
        eyebrow="Projects & Industries"
        title="Engineering Solutions Across Critical Environments"
        lead="More than 500 projects delivered across the Klang Valley and beyond — in the sectors where systems must simply work."
      />
      <Breadcrumbs items={BREADCRUMB} />
      <ProjectGallery />
      <CaseStudy />
      <IndustryExpertise />
      <ImageGallery />
      <CTABlock
        heading="Planning work in one of these environments?"
        text="Tell DKSM’s engineers about your facility — they will assess the requirement and recommend the right approach."
        buttonLabel="Request a Site Assessment"
      />
    </>
  )
}
