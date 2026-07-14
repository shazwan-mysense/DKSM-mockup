import { useCountUp, useInView } from '../lib/motion'
import { stats } from '../data/company'

function Stat({ value, suffix, label, isStatic }: { value: number; suffix: string; label: string; isStatic?: boolean }) {
  const { ref, value: n } = useCountUp(value)
  return (
    <div className="border-l-2 border-brand/70 py-1 pl-5">
      <p className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        {isStatic ? (
          <span>Est. {value}</span>
        ) : (
          <>
            <span ref={ref}>{n}</span>
            {suffix}
          </>
        )}
      </p>
      <p className="mt-2 text-[13.5px] text-steel">{label}</p>
    </div>
  )
}

/**
 * Experience statistics band.
 * Figures come from the client's current site — flagged for reconfirmation
 * in src/data/company.ts.
 */
export default function StatBand() {
  const ref = useInView<HTMLDivElement>()
  return (
    <section className="rule-t grid-lines-light bg-mist/40" aria-label="Company statistics">
      <div ref={ref} className="shell grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-4 md:py-16">
        {stats.map((s) => (
          <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} isStatic={'static' in s && s.static} />
        ))}
      </div>
    </section>
  )
}
