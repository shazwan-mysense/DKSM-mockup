import { Link } from 'react-router-dom'
import { useBreadcrumbSchema, usePageMeta } from '../lib/meta'
import { useInView } from '../lib/motion'
import { productCategories, services } from '../data/services'
import type { Service } from '../data/services'
import ProcessFlow from '../components/ProcessFlow'
import { Breadcrumbs, CTABlock, PageHero, SectionHeading, SmartImage } from '../components/primitives'

const BREADCRUMB = [
  { name: 'Home', path: '/' },
  { name: 'Services & Products', path: '/services' },
]

/** Sticky in-page navigation across the six service sections. */
function ServiceNav() {
  return (
    <nav aria-label="Services on this page" className="sticky top-[68px] z-30 border-b border-line bg-paper/95 backdrop-blur">
      <div className="shell flex gap-1 overflow-x-auto py-2.5">
        {services.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="tech-label shrink-0 whitespace-nowrap rounded-[3px] px-3 py-2 text-steel transition-colors hover:bg-mist hover:text-ink"
          >
            {s.title}
          </a>
        ))}
      </div>
    </nav>
  )
}

function ServiceSection({ service, flip }: { service: Service; flip: boolean }) {
  const ref = useInView<HTMLDivElement>(0.08)
  return (
    <section id={service.id} className="rule-t scroll-mt-[120px] py-16 md:py-24">
      <div
        ref={ref}
        className={`shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${flip ? '' : ''}`}
      >
        <div className={`reveal-scale relative ${flip ? 'lg:order-2' : ''}`}>
          <SmartImage
            src={service.image}
            alt={service.imageAlt}
            ratio="16/11"
            className="rounded-[4px]"
            imgClassName="transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
        <div className={flip ? 'lg:order-1' : ''}>
          <p className="tech-label text-brand">Service line</p>
          <h2 className="reveal mt-3 font-bold text-ink" style={{ fontSize: 'var(--text-h2)' }}>
            {service.title}
          </h2>
          <div className="draw-line mt-4 h-[2px] w-14 bg-brand" />
          <p className="reveal mt-5 text-[15.5px] leading-relaxed text-graphite/90">{service.intro}</p>
          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {service.coverage.map((item) => (
              <li key={item} className="reveal flex items-start gap-3 text-[14px] leading-snug text-graphite">
                <span aria-hidden="true" className="mt-[6px] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                {item}
              </li>
            ))}
          </ul>
          {service.id === 'supply-distribution' && (
            <p className="reveal mt-6 rounded-[3px] border border-line bg-white px-4 py-3 text-[13px] leading-relaxed text-steel">
              Official product brands will be listed here once distributorships are confirmed with DKSM.
            </p>
          )}
          {service.id === 'authority-approvals' && (
            <p className="reveal mt-6 rounded-[3px] border border-line bg-white px-4 py-3 text-[13px] leading-relaxed text-steel">
              Final approval always rests with the relevant authority; DKSM’s role is to make sure the
              submission and the installation are properly prepared.
            </p>
          )}
          <Link to="/contact" className="btn-outline-dark reveal mt-8">
            Discuss this service
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCategories() {
  const ref = useInView<HTMLDivElement>(0.05)
  return (
    <section className="grid-lines bg-ink py-20 text-white md:py-28">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="Systems & product categories"
          title="The systems DKSM designs, supplies and services"
          lead="Editable categories — specific brands and models are added as distributorships are confirmed."
          dark
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-[4px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((p) => (
            <li key={p.title} className="reveal bg-ink p-6">
              <h3 className="font-display text-[15.5px] font-bold">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Services() {
  usePageMeta({
    title: 'Services & Products — MEP & Fire Protection | DKSM Group',
    description:
      'Six service lines from design to long-term support — MEP design and build, supply, installation and commissioning, maintenance, training and approvals.',
    path: '/services',
  })
  useBreadcrumbSchema(BREADCRUMB)
  const ref = useInView<HTMLDivElement>(0.06)

  return (
    <>
      <PageHero
        image="/images/backgrounds/hero-home.webp"
        imageAlt=""
        eyebrow="Services & Products"
        title="Integrated Engineering Services from Design to Long-Term Support"
        lead="DKSM manages every stage of the project lifecycle — engage the group for a single discipline or hand over the whole system, from first assessment to years of maintenance."
      />
      <Breadcrumbs items={BREADCRUMB} />
      <ServiceNav />

      <div className="bg-paper">
        {services.map((s, i) => (
          <ServiceSection key={s.id} service={s} flip={i % 2 === 1} />
        ))}
      </div>

      <ProductCategories />

      {/* Delivery workflow */}
      <section className="bg-paper py-20 md:py-28">
        <div className="shell" ref={ref}>
          <SectionHeading
            eyebrow="Project delivery workflow"
            title="How a DKSM project moves"
            lead="The same connected workflow governs every engagement, whichever service line it starts from."
          />
          <div className="mt-14">
            <ProcessFlow />
          </div>
        </div>
      </section>

      <CTABlock
        heading="Not sure which service you need?"
        text="Describe the facility and the problem — DKSM’s engineers will recommend the right starting point. No pricing surprises, no obligation."
        buttonLabel="Request a Technical Discussion"
      />
    </>
  )
}
