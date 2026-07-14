import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { asset, assetSrcSet } from '../lib/asset'
import { useInView } from '../lib/motion'

/* ------------------------------------------------------------------ */
/* SmartImage — lazy, CLS-safe image                                    */
/* ------------------------------------------------------------------ */
export function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  ratio,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  priority?: boolean
  /** CSS aspect-ratio, e.g. "16/10". Omit when the wrapper sizes itself. */
  ratio?: string
}) {
  return (
    <div className={`overflow-hidden ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img
        src={asset(src)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Section heading with mono technical label + drawn red rule          */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
  align = 'left',
}: {
  eyebrow: string
  title: string
  lead?: string
  dark?: boolean
  align?: 'left' | 'center'
}) {
  const ref = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className={`tech-label ${align === 'center' ? 'text-center' : ''} ${dark ? 'text-brand-bright' : 'text-brand'}`}>
        {eyebrow}
      </p>
      <h2
        className={`reveal mt-4 font-bold ${dark ? 'text-white' : 'text-ink'}`}
        style={{ fontSize: 'var(--text-h2)' }}
      >
        {title}
      </h2>
      <div className={`draw-line mt-5 h-[2px] w-14 ${dark ? 'bg-brand-bright' : 'bg-brand'} ${align === 'center' ? 'mx-auto' : ''}`} />
      {lead && (
        <p className={`reveal mt-5 text-[16.5px] leading-relaxed ${dark ? 'text-white/65' : 'text-graphite/85'}`}>
          {lead}
        </p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Inner-page hero                                                      */
/* ------------------------------------------------------------------ */
export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  lead,
  children,
}: {
  image: string
  imageAlt: string
  eyebrow: string
  title: string
  lead?: string
  children?: ReactNode
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end bg-ink pt-[68px] text-white">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src={asset(image)}
          srcSet={assetSrcSet(image)}
          sizes="100vw"
          alt={imageAlt}
          className="h-full w-full object-cover opacity-45"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      </div>
      <div className="shell relative w-full pb-14 pt-24">
        <p className="tech-label hero-rise text-brand-bright">{eyebrow}</p>
        <h1
          className="hero-rise mt-4 max-w-3xl font-extrabold"
          style={{ fontSize: 'var(--text-h1)', animationDelay: '90ms' }}
        >
          {title}
        </h1>
        {lead && (
          <p className="hero-rise mt-5 max-w-2xl text-[16.5px] leading-relaxed text-white/70" style={{ animationDelay: '180ms' }}>
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Breadcrumbs                                                          */
/* ------------------------------------------------------------------ */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="rule-t bg-paper">
      <ol className="shell flex flex-wrap items-center gap-2 py-3 text-[12.5px] text-steel">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {last ? (
                <span aria-current="page" className="text-graphite">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="transition-colors hover:text-brand">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/* Closing CTA band                                                     */
/* ------------------------------------------------------------------ */
export function CTABlock({
  heading = 'Have a project in mind?',
  text = 'Speak with DKSM’s engineering team about your requirements, project scope and next steps.',
  buttonLabel = 'Get in Touch',
  buttonTo = '/contact',
}: {
  heading?: string
  text?: string
  buttonLabel?: string
  buttonTo?: string
}) {
  const ref = useInView<HTMLDivElement>()
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={asset('/images/backgrounds/cta-dark.webp')}
          srcSet={assetSrcSet('/images/backgrounds/cta-dark.webp', 1600)}
          sizes="100vw"
          alt=""
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
      </div>
      <div ref={ref} className="shell relative flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-24">
        <div className="max-w-xl">
          <p className="tech-label text-brand-bright">Next step</p>
          <h2 className="reveal mt-3 font-bold" style={{ fontSize: 'var(--text-h2)' }}>
            {heading}
          </h2>
          <p className="reveal mt-4 text-white/65">{text}</p>
        </div>
        <Link to={buttonTo} className="btn-primary reveal shrink-0 px-8 py-3.5">
          {buttonLabel}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
