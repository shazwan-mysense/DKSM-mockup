import { Link } from 'react-router-dom'
import { asset } from '../lib/asset'
import { company, contact, serviceRegion, socials } from '../data/company'
import { services } from '../data/services'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <img src={asset('/images/brand/dksm-logo.png')} alt="DKSM Group" className="h-14 w-auto" />
          <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-white/60">
            {company.shortDescription}
          </p>
          <p className="tech-label mt-6 text-white/60">Est. 1982 · {serviceRegion}</p>
          <p className="mt-2 text-[12.5px] italic text-white/45">“{company.slogan}”</p>
        </div>

        <nav aria-label="Footer — pages">
          <h2 className="tech-label text-brand-bright">Pages</h2>
          <ul className="mt-4 space-y-2.5 text-[14.5px]">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Services & Products', '/services'],
              ['Projects & Industries', '/projects'],
              ['Knowledge Centre', '/knowledge'],
              ['Contact Us', '/contact'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-white/65 transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer — services">
          <h2 className="tech-label text-brand-bright">Services</h2>
          <ul className="mt-4 space-y-2.5 text-[14.5px]">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className="text-white/65 transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="tech-label text-brand-bright">Contact</h2>
          <address className="mt-4 space-y-2.5 text-[14.5px] not-italic text-white/65">
            <p>
              {contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p>Tel: {contact.phone}</p>
            <p>
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                {contact.email}
              </a>
            </p>
            <p>
              {contact.businessHours.map((h) => (
                <span key={h.days} className="block">
                  {h.days}: {h.hours}
                </span>
              ))}
            </p>
          </address>
          <Link to="/about#credentials" className="mt-5 inline-block text-[13.5px] text-white/65 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white">
            Registrations &amp; memberships
          </Link>
          {(socials.facebook || socials.linkedin) && (
            <p className="mt-5 flex gap-4">
              {socials.facebook && (
                <a href={socials.facebook} aria-label="DKSM Group on Facebook" className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.6H7.6V14h2.7v8h3.2z"/></svg>
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} aria-label="DKSM Group on LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.9 20.5H3.6V9.6h3.3v10.9zM5.2 8.1a1.9 1.9 0 1 1 0-3.9 1.9 1.9 0 0 1 0 3.9zM20.5 20.5h-3.3v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8v5.4H10V9.6h3.1v1.5h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v6.1z"/></svg>
                </a>
              )}
            </p>
          )}
        </div>
      </div>

      <div className="dark-rule-t">
        <div className="shell flex flex-col items-start justify-between gap-3 py-6 text-[12.5px] text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p className="flex gap-5">
            {/* TODO: Replace with real policy pages before launch. */}
            <span>Privacy Policy (placeholder)</span>
            <span>Terms (placeholder)</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
