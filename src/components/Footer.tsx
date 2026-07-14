import { Link } from 'react-router-dom'
import { asset } from '../lib/asset'
import { company, contact, serviceRegion } from '../data/company'
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
            <p>
              Tel: {contact.phone} / {contact.phoneAlt}
            </p>
            <p className="text-[12.5px] text-white/60">
              Contact details are being finalised and will be confirmed before launch.
            </p>
          </address>
          <Link to="/about#credentials" className="mt-5 inline-block text-[13.5px] text-white/65 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white">
            Registrations &amp; memberships
          </Link>
        </div>
      </div>

      <div className="dark-rule-t">
        <div className="shell flex flex-col items-start justify-between gap-3 py-6 text-[12.5px] text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
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
