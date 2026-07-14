import { useId, useState } from 'react'
import type { Faq } from '../data/faqs'

/**
 * Accessible accordion: real buttons, aria-expanded, smooth grid-template
 * height animation (degrades cleanly under reduced motion).
 */
export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  /* keyed by question text, not index — the list shifts when filtered */
  const [openKey, setOpenKey] = useState<string | null>(null)
  const baseId = useId()

  return (
    <ul className="divide-y divide-line border-y border-line">
      {faqs.map((faq, i) => {
        const open = openKey === faq.q
        return (
          <li key={faq.q}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`${baseId}-panel-${i}`}
                onClick={() => setOpenKey(open ? null : faq.q)}
                className="flex min-h-[56px] w-full items-center justify-between gap-6 py-4 text-left font-display text-[16px] font-semibold text-ink transition-colors hover:text-brand"
              >
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className={`relative h-4 w-4 shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                >
                  <span className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-brand" />
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-brand" />
                </span>
              </button>
            </h3>
            <div
              id={`${baseId}-panel-${i}`}
              role="region"
              aria-label={faq.q}
              aria-hidden={!open}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-5 pr-10 text-[14.5px] leading-relaxed text-graphite/85">{faq.a}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
