import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { asset } from '../lib/asset'
import { trapTabKey } from '../lib/focus'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects & Industries' },
  { to: '/knowledge', label: 'Knowledge Centre' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const closeBtn = useRef<HTMLButtonElement>(null)
  const menuBtn = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* close the mobile menu on navigation */
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  /* lock body scroll, Escape to close, and hand focus in/out of the menu */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) {
      wasOpen.current = true
      closeBtn.current?.focus()
    } else if (wasOpen.current) {
      wasOpen.current = false
      menuBtn.current?.focus()
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative whitespace-nowrap px-3 py-2 text-[13.5px] font-medium transition-colors duration-200 ${
      isActive ? 'text-white' : 'text-white/65 hover:text-white'
    } ${isActive ? 'after:absolute after:inset-x-3 after:-bottom-[13px] after:h-[2px] after:bg-brand-bright' : ''}`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-white/10 bg-ink/95 shadow-lg shadow-black/20 backdrop-blur' : 'border-transparent bg-ink'
      }`}
    >
      <div className="shell flex h-[68px] items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="DKSM Group — home">
          <img src={asset('/images/brand/dksm-logo.png')} alt="DKSM Group" className="h-12 w-auto sm:h-14" />
          <span className="tech-label mt-1 hidden text-white/60 min-[1160px]:block">
            MEP &amp; Fire Protection
          </span>
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Main navigation">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary ml-4 min-h-10 whitespace-nowrap px-5 py-2 text-sm">
            Discuss a Project
          </Link>
        </nav>

        <button
          ref={menuBtn}
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6.5h18M3 12h18M3 17.5h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu — `invisible` removes it from the tab order and the
          accessibility tree while closed */}
      <div
        className={`fixed inset-0 z-50 bg-ink transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        onKeyDown={(e) => trapTabKey(e, e.currentTarget)}
      >
        <div className="shell flex h-[68px] items-center justify-between">
          <img src={asset('/images/brand/dksm-logo.png')} alt="DKSM Group" className="h-12 w-auto" />
          <button
            ref={closeBtn}
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center text-white"
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="shell mt-6 flex flex-col" aria-label="Mobile navigation">
          {NAV.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
              className={({ isActive }) =>
                `dark-rule-t flex min-h-[56px] items-center justify-between py-4 font-display text-xl font-semibold transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                } ${isActive ? 'text-brand-bright' : 'text-white'}`
              }
            >
              <span>{item.label}</span>
            </NavLink>
          ))}
          <Link
            to="/contact"
            className={`btn-primary mt-8 w-full transition-all duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: open ? '380ms' : '0ms' }}
          >
            Discuss a Project
          </Link>
          <p className="tech-label mt-6 text-center text-white/60">Serving Malaysian industries since 1982</p>
        </nav>
      </div>
    </header>
  )
}
