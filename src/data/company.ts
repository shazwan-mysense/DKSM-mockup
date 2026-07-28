/**
 * Central company data for the DKSM Group website.
 *
 * ── HONESTY RULES ────────────────────────────────────────────────────
 * Everything in this file is drawn from materials supplied by the client
 * (current Google Sites content, the shared Drive folder, and the
 * supplied 2017 Sin Chew feature on Dyno Klang Fire Protection
 * Engineering Sdn Bhd). Anything not confirmed carries a
 * `// TODO: Confirm with client before launch.` comment — replace those
 * values, do not delete the flags silently.
 */

// TODO: Replace with the final production domain before launch.
export const SITE_URL = 'https://www.dksm-group.example'

export const company = {
  name: 'DKSM Group',
  // TODO: Confirm registered legal entity name(s) with client before launch.
  legalName: 'DKSM Group',
  foundedYear: 1982,
  tagline: 'Trusted Engineering Partner for Industrial & Infrastructure Projects',
  /**
   * Client direction (14 July 2026): fire protection comes before MEP —
   * it is the core; MEP is the secondary focus. Keep that order in copy.
   */
  supportingLine:
    'One-stop solutions for fire-protection and Mechanical, Electrical & Plumbing requirements.',
  shortDescription:
    'DKSM Group delivers end-to-end fire-protection and MEP solutions — from design, supply and installation to maintenance, training and authority approvals.',
  introduction:
    'DKSM Group was founded in 1982 and has since grown into one of Malaysia’s most established engineering solution providers. Specialising in fire protection and Mechanical, Electrical and Plumbing (MEP) systems, we serve clients across the industrial, commercial and infrastructure sectors with a full suite of in-house capabilities — from concept design through to handover and long-term maintenance.',
  /*
   * Client decision (14 July 2026): Dyno MEP Services (DMS) is an associate
   * company, not a subsidiary, and is intentionally NOT referenced on this
   * website for marketing positioning reasons. Do not re-add it.
   */
}

/**
 * Homepage announcement / pop-up slot (client requested the option of
 * posting company news on the main page). Leave as null to hide; set to a
 * short message + optional link to show a dismissible banner on Home.
 */
export const announcement: { text: string; linkLabel?: string; linkTo?: string } | null = null

/**
 * Statistics from the client's current website.
 * TODO: Reconfirm all four figures with client before launch.
 */
export const stats = [
  { value: 40, suffix: '+', label: 'Years of industry experience' },
  { value: 500, suffix: '+', label: 'Projects completed' },
  { value: 300, suffix: '+', label: 'Clients served' },
  { value: 1982, suffix: '', label: 'Year established', static: true },
] as const

/**
 * Contact details — provided by the client on 14 July 2026
 * ("details can be corrected & adjusted before go-live").
 */
export const contact = {
  addressLines: [
    'No. 23, Jalan Tok Janggut H 35/H, Alam Impian',
    'Seksyen 35, 40470 Shah Alam, Selangor, Malaysia',
  ],
  /** International format, as instructed by the client. */
  phone: '+60 16-837 8459',
  email: null as string | null, // TODO: Confirm with client before launch.
  whatsapp: null as string | null, // TODO: Confirm with client before launch.
  businessHours: [
    { days: 'Monday – Friday', hours: '8:00 am – 5:00 pm' },
    { days: 'Saturday', hours: '8:00 am – 1:00 pm' },
  ],
  mapEmbedUrl:
    'https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sNo.23%20Jalan%20Tok%20Janggut%20H%2035%2FH%20Alam%20Impian%20Seksyen%2035%2040470%20Shah%20Alam%20Selangor',
}

/**
 * Social channels — client direction: Facebook and LinkedIn only for DKSM
 * (IG/YouTube considered better suited to the B2C side).
 * TODO: Add the actual page URLs — icons render only once these are set.
 */
export const socials = {
  facebook: null as string | null,
  linkedin: null as string | null,
}

export const serviceRegion = 'Klang Valley and beyond'

/** End-to-end engineering process, shown on Home and Services. */
export const processSteps = [
  {
    num: '01',
    title: 'Site assessment',
    text: 'We begin on the ground — reviewing your facility, existing systems and operating constraints before anything is proposed.',
  },
  {
    num: '02',
    title: 'Technical planning & design',
    text: 'Engineering requirements are translated into coordinated fire-protection and MEP designs with proper documentation.',
  },
  {
    num: '03',
    title: 'Product selection & procurement',
    text: 'Suitable systems and equipment are specified and sourced through our supply and distribution network.',
  },
  {
    num: '04',
    title: 'Installation & coordination',
    text: 'Our field teams manage installation alongside other trades, keeping workmanship and site programme under control.',
  },
  {
    num: '05',
    title: 'Testing & commissioning',
    text: 'Systems are tested, commissioned and documented — including preparation for the relevant authority inspections.',
  },
  {
    num: '06',
    title: 'Maintenance & support',
    text: 'Scheduled servicing and responsive support keep systems compliant and dependable long after handover.',
  },
] as const

/** Practical strengths for the "Why DKSM" section — no superlatives. */
export const strengths = [
  {
    title: 'More than four decades of experience',
    text: 'Established in 1982, DKSM has worked through generations of Malaysian building standards, technologies and site practices.',
  },
  {
    title: 'Integrated engineering capabilities',
    text: 'Fire protection, mechanical, electrical and plumbing handled under one roof — fewer interfaces, fewer gaps.',
  },
  {
    title: 'Support from design through maintenance',
    text: 'The team that designs and installs your systems is the same organisation that services them for the long term.',
  },
  {
    title: 'Trained field teams',
    text: 'Installation and servicing are carried out by experienced technicians under proper supervision — not subcontracted out of sight.',
  },
  {
    title: 'Familiarity with authority requirements',
    text: 'We prepare documentation and coordinate submissions and inspections with BOMBA and other relevant Malaysian authorities.',
  },
  {
    title: 'Long-term support after commissioning',
    text: 'Maintenance programmes, inspections and technical assistance continue well beyond project handover.',
  },
] as const

/** Mission / vision / values — kept factual and practical. */
export const missionVision = {
  mission:
    'To deliver fire-protection and MEP systems that work as designed, comply with Malaysian requirements, and stay dependable throughout their service life.',
  vision:
    'To remain the engineering partner Malaysian industries rely on — for new projects, existing facilities, and everything in between.',
  values: [
    {
      title: 'Technical reliability',
      text: 'Systems are engineered, installed and tested to perform — not just to pass handover.',
    },
    {
      title: 'Safety',
      text: 'Safe work practices on site and safe systems in operation are non-negotiable.',
    },
    {
      title: 'Compliance',
      text: 'Work is carried out to relevant Malaysian codes, standards and authority requirements.',
    },
    {
      title: 'Accountability',
      text: 'One responsible team from first site visit to final documentation.',
    },
    {
      title: 'Practical problem-solving',
      text: 'Recommendations are grounded in what a facility actually needs and can maintain.',
    },
    {
      title: 'Long-term client support',
      text: 'Relationships continue past commissioning — through servicing, training and advice.',
    },
  ],
}

/**
 * Company timeline for the About page.
 * Only 1982 and 2019 are confirmed by supplied materials; the award years
 * are drawn from the supplied award logos and the 2017 Sin Chew feature.
 * Entries marked `placeholder: true` render as clearly-labelled pending items.
 */
export const timeline = [
  {
    year: '1982',
    title: 'DKSM founded',
    text: 'The group begins serving Malaysian industries, building its base in engineering solutions.',
    placeholder: false,
  },
  {
    year: '—',
    title: 'Capability expansion',
    // TODO: Confirm with client before launch — add key milestones (major contracts, registrations, branch openings).
    text: 'Milestone details awaiting client confirmation.',
    placeholder: true,
  },
  {
    year: '2016',
    title: 'Power Brand recognition',
    // TODO: Confirm exact award title and recipient entity with client before launch.
    text: 'The group’s fire-protection business is recognised at the Malaysia Power Brand 2016/2017 awards.',
    placeholder: false,
  },
  {
    year: '2017',
    title: 'Sin Chew Business Excellence Award',
    // TODO: Confirm exact award title and recipient entity with client before launch.
    text: 'Recognised for service excellence at the Sin Chew Business Excellence Awards 2017.',
    placeholder: false,
  },
  {
    year: 'Today',
    title: 'Serving the Klang Valley and beyond',
    text: 'More than 500 projects completed for over 300 clients across industrial, commercial and infrastructure sectors.',
    placeholder: false,
  },
] as const

/** How DKSM works — About page approach section. */
export const approach = [
  {
    title: 'Understanding project requirements',
    text: 'Every engagement starts with the facility’s purpose, constraints and compliance obligations — not with a catalogue.',
  },
  {
    title: 'Coordinating technical disciplines',
    text: 'Fire protection, mechanical, electrical and plumbing are planned together so systems do not fight each other on site.',
  },
  {
    title: 'Selecting suitable systems and equipment',
    text: 'Specifications balance performance, availability of parts, and what the client’s team can realistically operate and maintain.',
  },
  {
    title: 'Managing installation quality',
    text: 'Supervised field teams, staged inspections and proper workmanship standards throughout the installation.',
  },
  {
    title: 'Testing and commissioning',
    text: 'Every system is verified against its design intent and documented before handover.',
  },
  {
    title: 'Supporting operations after completion',
    text: 'Maintenance programmes, spares support and technical guidance for the life of the installation.',
  },
] as const
