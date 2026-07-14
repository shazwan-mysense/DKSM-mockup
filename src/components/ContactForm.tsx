import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { services } from '../data/services'

/**
 * Project enquiry form.
 *
 * CURRENT BEHAVIOUR — IMPORTANT:
 * No backend is connected yet. Submissions are validated client-side and
 * then shown a success-state design with an explicit "demo mode" notice;
 * nothing is transmitted anywhere.
 *
 * TO CONNECT A BACKEND (e.g. Formspree):
 *   1. Create a form at formspree.io and copy its endpoint URL.
 *   2. Set FORM_ENDPOINT below to that URL.
 *   3. The submit handler will POST the FormData and surface errors.
 */
const FORM_ENDPOINT: string | null = null // TODO: e.g. 'https://formspree.io/f/xxxxxxx'

const PROJECT_TYPES = ['New development', 'Existing facility — upgrade', 'Existing facility — maintenance', 'Product / supply enquiry', 'Training enquiry', 'Other']
const TIMELINES = ['Immediate', 'Within 3 months', '3–6 months', '6–12 months', 'Exploratory']

interface Errors {
  [key: string]: string
}

/** Field ids in display order — used to focus the first invalid field. */
const FIELD_ORDER = ['name', 'email', 'phone', 'service', 'message', 'consent']

const inputClass =
  'w-full rounded-[3px] border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-steel/80 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand min-h-11'
const labelClass = 'mb-1.5 block text-[13.5px] font-medium text-graphite'

function Field({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span aria-hidden="true" className="ml-0.5 text-brand">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[12.5px] font-medium text-brand-deep">
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm({ preselectService }: { preselectService?: string }) {
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const successRef = useRef<HTMLDivElement>(null)

  /* the form unmounts on success — move focus to the confirmation panel */
  useEffect(() => {
    if (sent) successRef.current?.focus()
  }, [sent])

  const validate = (data: FormData): Errors => {
    const e: Errors = {}
    const get = (k: string) => String(data.get(k) ?? '').trim()
    if (!get('name')) e.name = 'Please enter your full name.'
    if (!get('email')) e.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get('email'))) e.email = 'Please enter a valid email address, e.g. name@company.com.'
    if (!get('phone')) e.phone = 'Please enter a contact number.'
    else if (!/^[+\d\s()-]{7,}$/.test(get('phone'))) e.phone = 'Please enter a valid phone number.'
    if (!get('service')) e.service = 'Please select the service you need.'
    if (!get('message')) e.message = 'Please describe your requirement briefly.'
    if (!data.get('consent')) e.consent = 'Please agree so we can respond to your enquiry.'
    return e
  }

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const form = ev.currentTarget
    const data = new FormData(form)
    const eMap = validate(data)
    setErrors(eMap)
    setSubmitError(null)
    if (Object.keys(eMap).length > 0) {
      // Focus after React has re-rendered the error state.
      const firstInvalid = FIELD_ORDER.find((k) => eMap[k])
      if (firstInvalid) {
        window.setTimeout(() => document.getElementById(firstInvalid)?.focus(), 0)
      }
      return
    }
    if (FORM_ENDPOINT) {
      try {
        setSending(true)
        const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        if (!res.ok) throw new Error(`Form service responded ${res.status}`)
        setSent(true)
      } catch {
        setSubmitError('Your enquiry could not be sent. Please try again, or contact us directly by telephone.')
      } finally {
        setSending(false)
      }
    } else {
      // No backend connected — show the success-state design with an honest notice.
      setSent(true)
    }
  }

  if (sent) {
    return (
      <div ref={successRef} tabIndex={-1} className="rounded-[4px] border border-line bg-white p-8 outline-none sm:p-10" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M4 11.5 9 16.5 18 6" stroke="#D71920" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">Enquiry received</h3>
        <p className="mt-3 max-w-md text-[15px] text-graphite/85">
          Thank you. DKSM’s engineering team will review your requirement and come back to you to arrange the next step.
        </p>
        {!FORM_ENDPOINT && (
          <p className="mt-5 rounded-[3px] border border-amber-500/40 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
            <strong>Preview note:</strong> this website is a design mockup — the form backend is not yet
            connected, so this enquiry was <em>not</em> transmitted. The integration point is documented in the
            project README.
          </p>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field id="name" label="Full name" required error={errors.name}>
        <input id="name" name="name" type="text" autoComplete="name" className={inputClass} aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
      </Field>
      <Field id="companyName" label="Company" error={errors.companyName}>
        <input id="companyName" name="companyName" type="text" autoComplete="organization" className={inputClass} />
      </Field>
      <Field id="email" label="Email" required error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" className={inputClass} aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
      </Field>
      <Field id="phone" label="Phone number" required error={errors.phone}>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} aria-required="true" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} />
      </Field>
      <Field id="projectType" label="Project type">
        <select id="projectType" name="projectType" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select project type
          </option>
          {PROJECT_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>
      <Field id="service" label="Required service" required error={errors.service}>
        <select id="service" name="service" className={inputClass} defaultValue={preselectService ?? ''} aria-required="true" aria-invalid={!!errors.service} aria-describedby={errors.service ? 'service-error' : undefined}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </Field>
      <Field id="location" label="Project location">
        <input id="location" name="location" type="text" placeholder="e.g. Klang, Selangor" className={inputClass} />
      </Field>
      <Field id="timeline" label="Estimated project timeline">
        <select id="timeline" name="timeline" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select timeline
          </option>
          {TIMELINES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field id="message" label="Message" required error={errors.message}>
          <textarea id="message" name="message" rows={5} className={inputClass} placeholder="Tell us about your facility, systems involved, and what you need." aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field id="attachment" label="Drawings or specifications (optional)">
          <input
            id="attachment"
            name="attachment"
            type="file"
            accept=".pdf,.dwg,.jpg,.png,.zip"
            className="block w-full cursor-pointer rounded-[3px] border border-dashed border-steel/50 bg-white px-3.5 py-3 text-[13.5px] text-steel file:mr-3 file:cursor-pointer file:rounded-[3px] file:border-0 file:bg-mist file:px-3 file:py-1.5 file:text-[13px] file:font-medium file:text-graphite"
          />
          <p className="mt-1.5 text-[12px] text-steel">
            File upload is a placeholder for now — attachments are enabled once the form backend is connected.
          </p>
        </Field>
      </div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-[13.5px] leading-relaxed text-graphite">
          <input
            id="consent"
            type="checkbox"
            name="consent"
            className="mt-0.5 h-4.5 w-4.5 accent-brand"
            aria-required="true"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span>
            I agree that DKSM Group may contact me about this enquiry.
            <span aria-hidden="true" className="ml-0.5 text-brand">*</span>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" role="alert" className="mt-1.5 text-[12.5px] font-medium text-brand-deep">
            {errors.consent}
          </p>
        )}
      </div>
      {submitError && (
        <p role="alert" className="rounded-[3px] border border-brand/40 bg-brand/5 px-4 py-3 text-[13.5px] text-brand-deep sm:col-span-2">
          {submitError}
        </p>
      )}
      <div className="sm:col-span-2">
        <button type="submit" disabled={sending} className="btn-primary w-full py-3.5 disabled:opacity-60 sm:w-auto sm:px-10">
          {sending ? 'Sending…' : 'Submit Enquiry'}
        </button>
      </div>
    </form>
  )
}
