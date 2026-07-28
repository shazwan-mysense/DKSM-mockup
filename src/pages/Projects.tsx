import { useMemo, useRef, useState } from 'react'
import { asset } from '../lib/asset'
import { useBreadcrumbSchema, usePageMeta } from '../lib/meta'
import { useInView } from '../lib/motion'
import { clientLogos, featuredProject, gallery, galleryDisclaimer, projects, sectors } from '../data/projects'
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
          title="Track record across critical facilities"
          lead="Real projects from the group’s published track record — grouped by sector, from aluminium smelting lines to university campuses."
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
              </div>
              <div className="p-5">
                <h3 className="font-display text-[16px] font-bold leading-snug text-ink">{p.name}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-steel">
                  {p.facility} · {p.location}
                </p>
                <p className="mt-3">
                  <span className="rounded-[3px] border border-line bg-paper px-2 py-1 text-[11.5px] text-graphite">
                    {p.scope}
                  </span>
                </p>
                <p className="mt-3 text-[12.5px] leading-relaxed text-steel">Owner: {p.owner}</p>
              </div>
            </li>
          ))}
        </ul>
        {visible.length === 0 && (
          <p className="mt-10 rounded-[4px] border border-line bg-white p-8 text-center text-[14.5px] text-steel">
            No published references in this sector yet — ask the team about recent work here.
          </p>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Client logo wall — logos only, per client direction (14 July 2026)   */
/* ------------------------------------------------------------------ */
function Clients() {
  const ref = useInView<HTMLDivElement>()
  return (
    <section className="rule-t bg-white py-20 md:py-24">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="Clients"
          title="Organisations we work with"
          lead="A selection of the organisations the group has worked with, as published by DKSM — logos only, with the work shown under the projects above."
        />
        <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {clientLogos.length > 0
            ? clientLogos.map((c) => (
                <li key={c.name} className="flex h-28 items-center justify-center bg-white p-5">
                  <img src={asset(c.image)} alt={c.name} loading="lazy" className="max-h-full max-w-full object-contain" />
                </li>
              ))
            : Array.from({ length: 6 }).map((_, i) => (
                <li key={i} className="reveal flex h-28 items-center justify-center bg-white p-5">
                  <span className="tech-label text-center text-[11px] leading-snug text-steel/80">
                    Client logo
                    <br />
                    pending
                  </span>
                </li>
              ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Featured project — real, from the published track record             */
/* ------------------------------------------------------------------ */
function FeaturedWork() {
  const fp = featuredProject
  const ref = useInView<HTMLDivElement>(0.05)
  return (
    <section className="grid-lines bg-ink py-20 text-white md:py-28">
      <div className="shell" ref={ref}>
        <SectionHeading eyebrow="Featured project" title={fp.name} lead={fp.text} dark />
        <div className="mt-12 grid gap-px overflow-hidden rounded-[4px] border border-white/10 bg-white/10 lg:grid-cols-[1.25fr_1fr]">
          <div className="bg-ink">
            <SmartImage src={fp.image} alt={fp.imageAlt} className="h-full min-h-[280px]" imgClassName="opacity-90" />
          </div>
          <dl className="space-y-6 bg-ink p-7 sm:p-9">
            {[
              ['Owner', fp.owner],
              ['Location', fp.location],
              ['Facility', fp.facility],
              ['Work scope', fp.scope],
              ['Sector', fp.sector],
            ].map(([k, v]) => (
              <div key={k} className="reveal">
                <dt className="tech-label text-brand-bright">{k}</dt>
                <dd className="mt-1.5 text-[14.5px] leading-relaxed text-white/75">{v}</dd>
              </div>
            ))}
          </dl>
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
      'Fire-protection and MEP engineering for industrial, commercial, education, transport and data-centre facilities across Malaysia.',
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
      <Clients />
      <FeaturedWork />
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
