import { processSteps } from '../data/company'
import { useInView } from '../lib/motion'

/**
 * The end-to-end engineering process, drawn as a connected workflow:
 * a horizontal measured line on desktop, a vertical rail on mobile.
 */
export default function ProcessFlow({ dark = false }: { dark?: boolean }) {
  const ref = useInView<HTMLOListElement>(0.08)
  const line = dark ? 'bg-white/15' : 'bg-line'
  const numColor = dark ? 'text-brand-bright' : 'text-brand'
  const titleColor = dark ? 'text-white' : 'text-ink'
  const textColor = dark ? 'text-white/60' : 'text-steel'

  return (
    <ol ref={ref} className="relative grid gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-14 lg:grid-cols-6 lg:gap-x-6">
      {/* connecting rail */}
      <div
        aria-hidden="true"
        className={`absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px md:hidden ${line}`}
      />
      {processSteps.map((step, i) => (
        <li key={step.num} className="relative pl-8 md:pl-0">
          {/* desktop connector */}
          <div aria-hidden="true" className="relative mb-5 hidden items-center md:flex">
            <span className={`h-3.5 w-3.5 shrink-0 rotate-45 border-2 ${dark ? 'border-brand-bright bg-ink' : 'border-brand bg-paper'}`} />
            {i < processSteps.length - 1 && <span className={`draw-line ml-2 h-px flex-1 ${line}`} style={{ transitionDelay: `${i * 120}ms` }} />}
          </div>
          {/* mobile node */}
          <span
            aria-hidden="true"
            className={`absolute left-0 top-1.5 h-3.5 w-3.5 rotate-45 border-2 md:hidden ${dark ? 'border-brand-bright bg-ink' : 'border-brand bg-paper'}`}
          />
          <p className={`tech-label ${numColor}`}>Step {i + 1}</p>
          <h3 className={`mt-2 font-display text-[17px] font-bold ${titleColor}`}>{step.title}</h3>
          <p className={`mt-2 text-[13.5px] leading-relaxed ${textColor}`}>{step.text}</p>
        </li>
      ))}
    </ol>
  )
}
