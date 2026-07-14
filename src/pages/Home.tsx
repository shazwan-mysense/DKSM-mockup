import { Link } from 'react-router-dom'
import { asset, assetSrcSet } from '../lib/asset'
import { usePageMeta } from '../lib/meta'
import { useInView } from '../lib/motion'
import { company, serviceRegion, strengths } from '../data/company'
import { services } from '../data/services'
import { industries } from '../data/industries'
import { featuredCaseStudy } from '../data/projects'
import StatBand from '../components/StatBand'
import ProcessFlow from '../components/ProcessFlow'
import CredentialWall from '../components/CredentialWall'
import { CTABlock, SectionHeading, SmartImage } from '../components/primitives'

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative flex min-h-[92svh] flex-col bg-ink pt-[68px] text-white">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src={asset('/images/backgrounds/hero-home.webp')}
          srcSet={assetSrcSet('/images/backgrounds/hero-home.webp')}
          sizes="100vw"
          alt=""
          className="hero-pan h-full w-full object-cover opacity-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/72 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      <div className="shell relative flex flex-1 flex-col justify-center py-20">
        <p className="tech-label hero-rise text-brand-bright">
          MEP &amp; Fire Protection Engineering
        </p>
        <h1
          className="hero-rise mt-6 max-w-[17ch] font-extrabold"
          style={{ fontSize: 'var(--text-h1)', animationDelay: '110ms' }}
        >
          Trusted Engineering Partner for Industrial &amp; Infrastructure Projects
        </h1>
        <p
          className="hero-rise mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/72"
          style={{ animationDelay: '220ms' }}
        >
          {company.shortDescription}
        </p>
        <div className="hero-rise mt-9 flex flex-wrap gap-4" style={{ animationDelay: '330ms' }}>
          <Link to="/contact" className="btn-primary px-8 py-3.5">
            Discuss Your Project
          </Link>
          <Link to="/services" className="btn-outline-light px-8 py-3.5">
            Explore Our Services
          </Link>
        </div>
        <p className="hero-rise mt-9 text-[13.5px] text-white/55" style={{ animationDelay: '430ms' }}>
          Serving Malaysian industries since 1982
        </p>
      </div>

      {/* technical data strip */}
      <div className="dark-rule-t relative">
        <div className="shell grid grid-cols-2 gap-x-6 py-4 sm:grid-cols-4">
          {[
            ['Est.', '1982'],
            ['Region', serviceRegion],
            ['Disciplines', 'M · E · P · Fire'],
            ['Scope', 'Design → Maintenance'],
          ].map(([k, v]) => (
            <p key={k} className="flex flex-col gap-0.5 py-1 sm:flex-row sm:items-baseline sm:gap-2">
              <span className="tech-label text-white/60">{k}</span>
              <span className="font-display text-[13.5px] font-semibold text-white/85">{v}</span>
            </p>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="scroll-cue absolute -top-12 left-1/2 hidden -translate-x-1/2 text-white/60 md:block"
        >
          <svg width="18" height="26" viewBox="0 0 18 26" fill="none">
            <rect x="1" y="1" width="16" height="24" rx="8" stroke="currentColor" strokeOpacity="0.5" />
            <circle cx="9" cy="8" r="2.5" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Who we are                                                           */
/* ------------------------------------------------------------------ */
function WhoWeAre() {
  const ref = useInView<HTMLDivElement>()
  return (
    <section className="rule-t bg-paper py-20 md:py-28">
      <div ref={ref} className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="reveal-scale relative order-2 lg:order-1">
          <SmartImage
            src="/images/people/team-drawings.webp"
            alt="Engineers reviewing technical drawings on site"
            ratio="4/3"
            className="rounded-[4px]"
          />
          <div className="absolute -bottom-5 -right-3 hidden rounded-[4px] border border-line bg-white px-5 py-4 shadow-sm sm:block md:-right-6">
            <p className="tech-label text-brand">Since 1982</p>
            <p className="mt-1 font-display text-[15px] font-bold text-ink">Four decades on Malaysian sites</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Who we are"
            title="Over four decades of engineering expertise"
            lead={company.introduction}
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {['In-house engineering & design', 'Supervised installation teams', 'Authority submission experience', 'Long-term maintenance support'].map((item) => (
              <li key={item} className="reveal flex items-start gap-3 text-[14.5px] text-graphite">
                <span aria-hidden="true" className="mt-[7px] h-2 w-2 shrink-0 rotate-45 bg-brand" />
                {item}
              </li>
            ))}
          </ul>
          <p className="reveal mt-6 max-w-xl text-[14.5px] leading-relaxed text-steel">
            {company.subsidiary.description}
          </p>
          <Link to="/about" className="btn-outline-dark reveal mt-8">
            More About DKSM
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Services — editorial layout: two featured + four panels              */
/* ------------------------------------------------------------------ */
function ServicesOverview() {
  const featured = services.slice(0, 2)
  const rest = services.slice(2)
  const ref = useInView<HTMLDivElement>(0.05)

  return (
    <section className="rule-t bg-white py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we do"
            title="One-stop solution for MEP and fire protection"
            lead="Six service lines covering the full life of an engineering system — specify one, or let DKSM carry the project end to end."
          />
          <Link to="/services" className="btn-outline-dark hidden md:inline-flex">
            Explore Our Services
          </Link>
        </div>

        <div ref={ref} className="mt-12">
          {/* two featured services */}
          <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line md:grid-cols-2">
            {featured.map((s) => (
              <Link key={s.id} to={`/services#${s.id}`} className="group reveal bg-white">
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={s.image}
                    alt={s.imageAlt}
                    ratio="16/9"
                    imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-brand">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-steel">{s.short}</p>
                  <p className="tech-label mt-5 flex items-center gap-2 text-brand">
                    View service
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* four supporting services */}
          <div className="mt-px grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((s) => (
              <Link key={s.id} to={`/services#${s.id}`} className="group reveal flex flex-col bg-white p-6">
                <SmartImage src={s.image} alt="" className="h-14 w-full rounded-[3px]" imgClassName="transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mt-4 font-display text-[17px] font-bold text-ink transition-colors group-hover:text-brand">
                  {s.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-steel">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>

        <Link to="/services" className="btn-primary mt-10 md:hidden">
          Explore Our Services
        </Link>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Industries mosaic                                                    */
/* ------------------------------------------------------------------ */
function Industries() {
  const ref = useInView<HTMLDivElement>(0.04)
  const spanClass = (span: string) =>
    span === 'wide' ? 'sm:col-span-2' : span === 'tall' ? 'sm:row-span-2' : ''

  return (
    <section className="rule-t bg-paper py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Engineering for environments that cannot fail"
          lead="From production floors to data halls, DKSM works where system reliability, compliance and uptime are non-negotiable."
        />
        <div ref={ref} className="mt-12 grid auto-rows-[190px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <Link
              key={ind.id}
              to={`/projects#${ind.id}`}
              className={`group reveal-scale relative overflow-hidden rounded-[4px] ${spanClass(ind.span)}`}
            >
              <img
                src={asset(ind.image)}
                alt={ind.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent transition-colors duration-300 group-hover:from-ink/95" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-[17px] font-bold text-white">{ind.title}</h3>
                <p className="mt-1.5 line-clamp-2 max-w-md text-[12.5px] leading-relaxed text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {ind.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Featured project (placeholder-honest)                                */
/* ------------------------------------------------------------------ */
function FeaturedProject() {
  const ref = useInView<HTMLDivElement>()
  const cs = featuredCaseStudy
  return (
    <section className="rule-t bg-white py-20 md:py-28">
      <div ref={ref} className="shell grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        <div className="reveal-scale relative overflow-hidden rounded-[4px]">
          <SmartImage src={cs.image} alt={cs.imageAlt} ratio="16/11" />
          {cs.placeholder && (
            <p className="tech-label absolute left-4 top-4 rounded-[3px] bg-ink/85 px-3 py-2 text-amber-300">
              {cs.label}
            </p>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <SectionHeading eyebrow="Featured project" title="A closer look at how DKSM delivers" />
          <dl className="mt-8 space-y-5">
            <div className="reveal">
              <dt className="tech-label text-steel">Sector</dt>
              <dd className="mt-1 font-display text-[15px] font-semibold text-ink">{cs.sector}</dd>
            </div>
            <div className="reveal">
              <dt className="tech-label text-steel">Scope of work</dt>
              <dd className="mt-1 text-[14.5px] leading-relaxed text-graphite/85">{cs.scope}</dd>
            </div>
            <div className="reveal">
              <dt className="tech-label text-steel">Services provided</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {['Design & Build', 'Installation & Commissioning', 'Maintenance'].map((s) => (
                  <span key={s} className="rounded-[3px] border border-line bg-paper px-2.5 py-1 text-[12.5px] text-graphite">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <p className="reveal mt-6 text-[13px] leading-relaxed text-steel">
            Confirmed project details and photography will be published here once provided by DKSM.
          </p>
          <Link to="/projects" className="btn-outline-dark reveal mt-7 self-start">
            Projects &amp; Industries
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Why DKSM                                                             */
/* ------------------------------------------------------------------ */
function WhyDksm() {
  const ref = useInView<HTMLDivElement>(0.05)
  return (
    <section className="grid-lines bg-ink py-20 text-white md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Why DKSM"
          title="Chosen for the work, kept for the follow-through"
          lead="DKSM is built for the follow-through — work done properly, to specification, by a team that stays available long after handover."
          dark
        />
        <div ref={ref} className="mt-12 grid gap-px overflow-hidden rounded-[4px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s) => (
            <div key={s.title} className="reveal bg-ink p-7">
              <h3 className="font-display text-[17px] font-bold">{s.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/60">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function Home() {
  usePageMeta({
    title: 'DKSM Group — MEP & Fire Protection Engineering, Malaysia',
    description:
      'End-to-end MEP and fire-protection solutions in Malaysia — design, supply, installation, maintenance, training and authority approvals, since 1982.',
    path: '/',
  })

  const processRef = useInView<HTMLDivElement>(0.06)

  return (
    <>
      <Hero />
      <StatBand />
      <WhoWeAre />
      <ServicesOverview />

      {/* Engineering process */}
      <section className="rule-t bg-paper py-20 md:py-28">
        <div className="shell" ref={processRef}>
          <SectionHeading
            eyebrow="How we deliver"
            title="One team from first site visit to final handover"
            lead="A connected workflow — each stage feeds the next, and nothing is passed over a fence."
          />
          <div className="mt-14">
            <ProcessFlow />
          </div>
        </div>
      </section>

      <Industries />
      <FeaturedProject />
      <WhyDksm />

      {/* Credentials */}
      <section className="rule-t bg-white py-20 md:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Credentials"
            title="Registrations, memberships and recognition"
            lead="DKSM Group maintains the registrations and industry memberships its work requires — and has been recognised along the way."
          />
          <div className="mt-10">
            <CredentialWall />
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
