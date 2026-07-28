import { Link } from 'react-router-dom'
import { useBreadcrumbSchema, usePageMeta } from '../lib/meta'
import { useInView } from '../lib/motion'
import { contact, serviceRegion, socials } from '../data/company'
import ContactForm from '../components/ContactForm'
import { Breadcrumbs, PageHero, SectionHeading } from '../components/primitives'

const BREADCRUMB = [
  { name: 'Home', path: '/' },
  { name: 'Contact Us', path: '/contact' },
]

const ENQUIRY_OPTIONS = [
  {
    title: 'Request a site assessment',
    text: 'Have an engineer review your facility and existing systems before anything is proposed.',
  },
  {
    title: 'Discuss maintenance requirements',
    text: 'Put existing fire-protection or MEP systems onto a proper, documented servicing programme.',
  },
  {
    title: 'Ask about product distribution',
    text: 'Source equipment and components through DKSM’s supply and distribution line.',
  },
  {
    title: 'Enquire about technical training',
    text: 'Arrange fire-safety or system-operation training for your team.',
  },
]

function ContactDetails() {
  const ref = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className="flex flex-col gap-8">
      <div className="reveal">
        <h2 className="tech-label text-brand">Office</h2>
        <address className="mt-3 text-[15px] not-italic leading-relaxed text-graphite">
          {contact.addressLines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </address>
      </div>
      <div className="reveal">
        <h2 className="tech-label text-brand">Telephone</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-graphite">
          <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`} className="underline decoration-line underline-offset-4 hover:text-brand">
            {contact.phone}
          </a>
        </p>
      </div>
      <div className="reveal">
        <h2 className="tech-label text-brand">Opening hours</h2>
        <dl className="mt-3 space-y-1 text-[15px] leading-relaxed text-graphite">
          {contact.businessHours.map((h) => (
            <div key={h.days} className="flex justify-between gap-6">
              <dt>{h.days}</dt>
              <dd>{h.hours}</dd>
            </div>
          ))}
          <div className="flex justify-between gap-6 text-steel">
            <dt>Sunday &amp; public holidays</dt>
            <dd>Closed</dd>
          </div>
        </dl>
      </div>
      <div className="reveal">
        <h2 className="tech-label text-brand">Email &amp; WhatsApp</h2>
        <p className="mt-3 space-y-1 text-[15px] leading-relaxed text-graphite">
          <a href={`mailto:${contact.email}`} className="block underline decoration-line underline-offset-4 hover:text-brand">
            {contact.email}
          </a>
          <a href={contact.whatsapp ?? '#'} className="block underline decoration-line underline-offset-4 hover:text-brand">
            WhatsApp us
          </a>
        </p>
      </div>
      <div className="reveal">
        <h2 className="tech-label text-brand">Social media</h2>
        <p className="mt-3 text-[14px] leading-relaxed text-steel">
          {socials.facebook || socials.linkedin ? (
            <>
              {socials.facebook && (
                <a href={socials.facebook} className="underline decoration-line underline-offset-4 hover:text-brand">
                  Facebook
                </a>
              )}
              {socials.facebook && socials.linkedin && ' · '}
              {socials.linkedin && (
                <a href={socials.linkedin} className="underline decoration-line underline-offset-4 hover:text-brand">
                  LinkedIn
                </a>
              )}
            </>
          ) : (
            'Facebook and LinkedIn — page links being added.'
          )}
        </p>
      </div>
      <div className="reveal">
        <h2 className="tech-label text-brand">Service region</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-graphite">{serviceRegion}</p>
      </div>
      <p className="reveal rounded-[3px] border border-line bg-white px-4 py-3 text-[12.5px] leading-relaxed text-steel">
        Details provided by DKSM on 14 July 2026 — to be given a final check before the site goes live.
      </p>
    </div>
  )
}

function MapPanel() {
  const ref = useInView<HTMLDivElement>()
  if (contact.mapEmbedUrl) {
    return (
      <div className="overflow-hidden rounded-[4px] border border-line">
        <iframe
          src={contact.mapEmbedUrl}
          title="DKSM Group office location"
          className="h-[320px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    )
  }
  return (
    <div
      ref={ref}
      className="reveal grid-lines-light flex h-[280px] flex-col items-center justify-center rounded-[4px] border border-line bg-mist/50 text-center"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-steel">
        <path
          d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <p className="tech-label mt-4 text-steel">Map placeholder</p>
      <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-steel">
        An interactive map will be embedded here once the office location is confirmed with DKSM.
      </p>
    </div>
  )
}

export default function Contact() {
  usePageMeta({
    title: 'Contact DKSM Group — Discuss Your Engineering Requirements',
    description:
      'Speak to DKSM about fire-protection and MEP requirements — site assessments, maintenance, product supply and technical training in Shah Alam, Selangor.',
    path: '/contact',
  })
  useBreadcrumbSchema(BREADCRUMB)
  const ref = useInView<HTMLDivElement>(0.05)

  return (
    <>
      <PageHero
        image="/images/backgrounds/hero-contact.webp"
        imageAlt=""
        eyebrow="Contact Us"
        title="Let’s Discuss Your Engineering Requirements"
        lead="Describe the facility, the systems involved and what you need — DKSM’s engineering team will assess the requirement and recommend the right next step."
      />
      <Breadcrumbs items={BREADCRUMB} />

      {/* Enquiry form + details */}
      <section className="bg-paper py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Project enquiry"
              title="Tell us about the project"
              lead="No pricing lists, no obligation — a factual look at your requirement and a clear recommendation."
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
          <aside className="lg:border-l lg:border-line lg:pl-10">
            <ContactDetails />
            <div className="mt-10">
              <MapPanel />
            </div>
          </aside>
        </div>
      </section>

      {/* Alternative enquiry angles */}
      <section className="rule-t bg-white py-20 md:py-24">
        <div className="shell" ref={ref}>
          <SectionHeading
            eyebrow="Not a full project yet?"
            title="Other ways to start"
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {ENQUIRY_OPTIONS.map((o) => (
              <div key={o.title} className="reveal flex flex-col bg-white p-6">
                <h3 className="font-display text-[16px] font-bold text-ink">{o.title}</h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-steel">{o.text}</p>
                <a href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('name')?.focus(); document.getElementById('name')?.scrollIntoView({ block: 'center' }) }} className="tech-label mt-5 flex items-center gap-2 text-brand hover:text-brand-deep">
                  Use the enquiry form
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[14px] text-steel">
            Prefer to browse first? Start with the{' '}
            <Link to="/knowledge" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
              Knowledge Centre
            </Link>{' '}
            or the{' '}
            <Link to="/services" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
              services overview
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
