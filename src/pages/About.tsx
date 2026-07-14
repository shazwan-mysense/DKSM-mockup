import { asset } from '../lib/asset'
import { useBreadcrumbSchema, usePageMeta } from '../lib/meta'
import { useInView } from '../lib/motion'
import { approach, company, missionVision, timeline } from '../data/company'
import { credentialCategories, credentials, credentialsDisclaimer } from '../data/credentials'
import { Breadcrumbs, CTABlock, PageHero, SectionHeading, SmartImage } from '../components/primitives'

const BREADCRUMB = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
]

function Story() {
  const ref = useInView<HTMLDivElement>()
  return (
    <section className="bg-paper py-20 md:py-28">
      <div ref={ref} className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Our story"
            title="Built project by project since 1982"
          />
          <div className="reveal mt-7 space-y-5 text-[15.5px] leading-relaxed text-graphite/90">
            <p>{company.introduction}</p>
            <p>
              The group’s capabilities have grown the way sound engineering firms grow — through delivered
              work. What began in engineering solutions has extended across MEP contracting, fire protection,
              the supply and distribution of selected engineering products, project execution, and the
              long-term servicing that keeps those systems dependable.
            </p>
            <p>{company.subsidiary.description}</p>
          </div>
        </div>
        <div className="reveal-scale flex flex-col gap-3">
          <SmartImage
            src="/images/backgrounds/hero-projects.webp"
            alt="Large-scale infrastructure served by engineering contractors"
            ratio="16/10"
            className="rounded-[4px]"
          />
          <div className="grid grid-cols-2 gap-3">
            <SmartImage
              src="/images/people/site-briefing.webp"
              alt="Site team during a safety briefing"
              ratio="4/3"
              className="rounded-[4px]"
            />
            <SmartImage
              src="/images/projects/fp-pumproom.webp"
              alt="Fire-protection pump room pipework"
              ratio="4/3"
              className="rounded-[4px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Timeline() {
  const ref = useInView<HTMLOListElement>(0.05)
  return (
    <section className="rule-t bg-white py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Milestones"
          title="A timeline still being written"
          lead="Confirmed milestones from the group’s history — further entries will be added as DKSM confirms them."
        />
        <ol ref={ref} className="relative mt-14 space-y-10 border-l border-line pl-8 md:space-y-12">
          {timeline.map((t) => (
            <li key={t.year + t.title} className="reveal relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[37px] top-1.5 h-3.5 w-3.5 rotate-45 border-2 ${
                  t.placeholder ? 'border-steel/50 bg-white' : 'border-brand bg-white'
                }`}
              />
              <p className={`tech-label ${t.placeholder ? 'text-steel' : 'text-brand'}`}>{t.year}</p>
              <h3 className={`mt-1.5 font-display text-lg font-bold ${t.placeholder ? 'text-steel' : 'text-ink'}`}>
                {t.title}
                {t.placeholder && (
                  <span className="tech-label ml-3 rounded-[3px] bg-mist px-2 py-1 align-middle text-[9.5px] text-steel">
                    Pending confirmation
                  </span>
                )}
              </h3>
              <p className={`mt-1.5 max-w-2xl text-[14.5px] leading-relaxed ${t.placeholder ? 'text-steel' : 'text-graphite/85'}`}>
                {t.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function MissionValues() {
  const ref = useInView<HTMLDivElement>(0.05)
  return (
    <section className="grid-lines bg-ink py-20 text-white md:py-28">
      <div className="shell" ref={ref}>
        <SectionHeading eyebrow="Mission, vision & values" title="What the work is held to" dark />
        <div className="mt-12 grid gap-px overflow-hidden rounded-[4px] border border-white/10 bg-white/10 md:grid-cols-2">
          <div className="reveal bg-ink p-8">
            <p className="tech-label text-brand-bright">Mission</p>
            <p className="mt-3 text-[16px] leading-relaxed text-white/85">{missionVision.mission}</p>
          </div>
          <div className="reveal bg-ink p-8">
            <p className="tech-label text-brand-bright">Vision</p>
            <p className="mt-3 text-[16px] leading-relaxed text-white/85">{missionVision.vision}</p>
          </div>
        </div>
        <div className="mt-3 grid gap-px overflow-hidden rounded-[4px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {missionVision.values.map((v) => (
            <div key={v.title} className="reveal bg-ink p-7">
              <h3 className="font-display text-[16px] font-bold">{v.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowWeWork() {
  const ref = useInView<HTMLDivElement>(0.05)
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="How DKSM works"
          title="A practical approach, applied consistently"
          lead="The same discipline applies whether the engagement is a single system upgrade or a full design-and-build appointment."
        />
        <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {approach.map((a) => (
            <div key={a.title} className="reveal border-t border-line pt-6">
              <h3 className="font-display text-[16.5px] font-bold text-ink">{a.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-steel">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SafetyQuality() {
  const ref = useInView<HTMLDivElement>()
  const items = [
    ['Safe work practices', 'Method statements, supervision and proper PPE on every site — safety is planned, not assumed.'],
    ['Quality assurance', 'Staged inspections and workmanship standards applied through installation, not just at handover.'],
    ['Malaysian requirements', 'Work carried out to the codes, standards and authority requirements relevant to each installation.'],
    ['Proper documentation', 'As-builts, test records and commissioning reports assembled as the work proceeds.'],
    ['Testing & commissioning', 'Every system proven against design intent through structured testing before handover.'],
    ['Authority submissions', 'Documentation prepared and submissions coordinated with BOMBA and other relevant authorities.'],
  ]
  return (
    <section className="rule-t bg-white py-20 md:py-28">
      <div ref={ref} className="shell grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="reveal-scale order-2 lg:order-1">
          <SmartImage
            src="/images/people/technician.webp"
            alt="Technician carrying out equipment checks"
            ratio="4/5"
            className="h-full rounded-[4px]"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Safety, quality & compliance"
            title="Standards that hold when nobody is watching"
          />
          <dl className="mt-9 space-y-6">
            {items.map(([title, text]) => (
              <div key={title} className="reveal flex gap-4">
                <span aria-hidden="true" className="mt-[9px] h-2 w-2 shrink-0 rotate-45 bg-brand" />
                <div>
                  <dt className="font-display text-[15.5px] font-bold text-ink">{title}</dt>
                  <dd className="mt-1 text-[14px] leading-relaxed text-steel">{text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const ref = useInView<HTMLDivElement>()
  return (
    <section className="rule-t bg-paper py-20 md:py-28">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="The people"
          title="Engineers, supervisors and technicians — on site"
          lead="DKSM’s work is carried by its field teams: the engineers who plan it, the supervisors who run it, and the technicians who keep systems serviced years after commissioning."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {[
            ['/images/people/team-drawings.webp', 'Engineers coordinating against the drawings before work begins'],
            ['/images/people/site-briefing.webp', 'Toolbox briefings keep every trade aligned on the day’s works'],
            ['/images/people/technician.webp', 'Scheduled servicing keeps systems compliant and dependable'],
          ].map(([src, caption]) => (
            <figure key={src} className="reveal-scale">
              <SmartImage src={src} alt={caption} ratio="4/3" className="rounded-[4px]" />
              <figcaption className="mt-3 text-[13px] leading-relaxed text-steel">{caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-[12.5px] text-steel">
          Representative imagery — photography of DKSM’s own teams will be added once supplied.
        </p>
      </div>
    </section>
  )
}

function Credentials() {
  const grouped = credentialCategories
    .map((cat) => ({ cat, items: credentials.filter((c) => c.category === cat) }))
    .filter((g) => g.items.length > 0)
  const ref = useInView<HTMLDivElement>(0.03)

  return (
    <section id="credentials" className="rule-t bg-white py-20 md:py-28">
      <div className="shell" ref={ref}>
        <SectionHeading
          eyebrow="Credentials"
          title="Registrations, memberships and recognition"
          lead="Organised by what each credential actually is — registration, membership, award or affiliation."
        />
        <div className="mt-12 space-y-10">
          {grouped.map(({ cat, items }) => (
            <div key={cat} className="reveal">
              <h3 className="tech-label text-brand">{cat}</h3>
              <ul className="mt-4 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                {items.map((c) => (
                  <li key={c.id} className="flex items-center gap-5 bg-white p-5">
                    <span className={`flex h-16 w-20 shrink-0 items-center justify-center rounded-[3px] border border-line p-2 ${c.darkAsset ? 'bg-[#0b0b0c]' : 'bg-white'}`}>
                      <img src={asset(c.image)} alt="" loading="lazy" className="max-h-full max-w-full object-contain" />
                    </span>
                    <div>
                      <p className="font-display text-[14.5px] font-bold leading-snug text-ink">{c.name}</p>
                      <p className="mt-0.5 text-[12.5px] leading-snug text-steel">{c.org}</p>
                      {!c.confirmed && (
                        <p className="tech-label mt-1.5 text-[9px] text-amber-700">To be confirmed</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-[12.5px] leading-relaxed text-steel">{credentialsDisclaimer}</p>
      </div>
    </section>
  )
}

export default function About() {
  usePageMeta({
    title: 'About DKSM Group — Engineering in Malaysia Since 1982',
    description:
      'DKSM Group has served Malaysian industries since 1982, with in-house MEP and fire-protection capabilities from design through long-term maintenance.',
    path: '/about',
  })
  useBreadcrumbSchema(BREADCRUMB)

  return (
    <>
      <PageHero
        image="/images/backgrounds/hero-about.webp"
        imageAlt=""
        eyebrow="About DKSM Group"
        title="Four Decades of Engineering Experience"
        lead="DKSM has served Malaysian industries since 1982 — designing, building, supplying and maintaining the systems facilities depend on."
      />
      <Breadcrumbs items={BREADCRUMB} />
      <Story />
      <Timeline />
      <MissionValues />
      <HowWeWork />
      <SafetyQuality />
      <Team />
      <Credentials />
      <CTABlock
        heading="Get to know DKSM on your own project"
        text="The clearest introduction is a conversation about a real requirement. Tell us what you are planning."
        buttonLabel="Discuss a Project"
      />
    </>
  )
}
