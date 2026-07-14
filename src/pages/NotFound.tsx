import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/meta'

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found — DKSM Group',
    description: 'The page you are looking for does not exist.',
    path: '/404',
    noindex: true,
  })
  return (
    <section className="grid-lines-light flex min-h-[70vh] items-center bg-paper pt-[68px]">
      <div className="shell py-24 text-center">
        <p className="tech-label text-brand">Error 404</p>
        <h1 className="mt-4 font-extrabold text-ink" style={{ fontSize: 'var(--text-h1)' }}>
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[15.5px] text-steel">
          The page you are looking for has moved or does not exist. Head back to the homepage or get in
          touch with the team.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
          <Link to="/contact" className="btn-outline-dark">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
