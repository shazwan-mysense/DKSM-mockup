/**
 * The six DKSM service lines, as listed on the client's current website.
 * `coverage` items describe scope in practical terms — no guarantees.
 */

export interface Service {
  id: string
  num: string
  title: string
  short: string
  intro: string
  coverage: string[]
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'design-build',
    num: '01',
    title: 'Design & Build',
    short:
      'End-to-end MEP and fire-protection design and build solutions, tailored to the specifications of each project — engineering, procurement, construction and commissioning handled in-house.',
    intro:
      'For clients who want one responsible party from concept to handover, DKSM takes a project from requirement assessment through engineering design, procurement and construction to a tested, commissioned system.',
    coverage: [
      'Requirement assessment and site studies',
      'Engineering coordination across MEP disciplines',
      'System planning and layout design',
      'Technical documentation and drawings',
      'Equipment selection and specification',
      'Project execution through to commissioning',
    ],
    image: '/images/services/design-build.webp',
    imageAlt: 'Engineer preparing technical drawings for a building services design',
  },
  {
    id: 'supply-distribution',
    num: '02',
    title: 'Supply & Distribution',
    // TODO: Confirm with client before launch — the current DKSM site describes the
    // company as an "authorised distributor"; restore that wording once the
    // distributorship agreements are confirmed in writing.
    short:
      'Distributor for selected engineering and fire-protection brands — quality-assured equipment supplied directly to contractors, developers and end users.',
    intro:
      'DKSM distributes selected engineering and fire-protection products, backed by technical guidance on selection and application rather than a catalogue-only relationship.',
    coverage: [
      'Distribution of selected brands and products',
      'Product selection support against project specifications',
      'Equipment and system components supply',
      'Delivery coordination to site or store',
      'Technical product guidance and after-sales support',
    ],
    image: '/images/services/supply-distribution.webp',
    imageAlt: 'Industrial warehouse stock of engineering equipment and components',
  },
  {
    id: 'installation-commissioning',
    num: '03',
    title: 'Installation & Commissioning',
    short:
      'Precision installation and system commissioning across industrial and commercial sites, carried out by experienced field engineers and technicians.',
    intro:
      'Installation is where designs succeed or fail. DKSM’s field teams manage site coordination, workmanship and integration, then prove every system through structured testing and commissioning.',
    coverage: [
      'Site coordination with other trades and the main contractor',
      'Installation by supervised, experienced technicians',
      'System integration across disciplines',
      'Structured testing against design intent',
      'Commissioning and performance verification',
      'Handover documentation and as-built records',
    ],
    image: '/images/services/installation.webp',
    imageAlt: 'Technician installing overhead building services on site',
  },
  {
    id: 'maintenance',
    num: '04',
    title: 'Maintenance',
    short:
      'Scheduled and reactive maintenance programmes designed to keep systems operational, safe and compliant over the long term.',
    intro:
      'Fire-protection and MEP systems only earn their keep if they work on the day they are needed. DKSM builds maintenance programmes around each facility’s systems, usage and compliance obligations.',
    coverage: [
      'Preventive maintenance programmes',
      'Scheduled inspections and servicing',
      'Troubleshooting and fault diagnosis',
      'Corrective maintenance and repairs',
      'System performance checks and reporting',
      'Long-term support programmes with proper records',
    ],
    image: '/images/services/maintenance.webp',
    imageAlt: 'Technician checking a pressure gauge during scheduled maintenance',
  },
  {
    id: 'training',
    num: '05',
    title: 'Technical Training',
    // TODO: Confirm with client before launch — the current DKSM site says
    // "certified training programmes"; restore "certified" once the certifying
    // body / accreditation is confirmed.
    short:
      'Practical training programmes covering fire-safety procedures, equipment operation and regulatory compliance — for both technical staff and end users.',
    intro:
      'Systems are only as dependable as the people operating them. DKSM delivers practical training so building teams know their systems, their duties and their emergency procedures.',
    coverage: [
      'System operation training for facility teams',
      'Fire-safety awareness programmes',
      'Equipment familiarisation sessions',
      'Maintenance guidance for in-house technicians',
      'Practical, hands-on technical instruction',
    ],
    image: '/images/services/training.webp',
    imageAlt: 'Fire-safety training session in progress',
  },
  {
    id: 'authority-approvals',
    num: '06',
    title: 'Authority Approvals',
    short:
      'Management of the approval and submission process with BOMBA and other relevant Malaysian authorities — reducing administrative burden and supporting compliance.',
    intro:
      'Approvals are a process, not a formality. DKSM prepares documentation, coordinates submissions and readies installations for inspection — on your behalf and alongside your consultants.',
    coverage: [
      'Documentation coordination and preparation',
      'Submission support to the relevant authorities',
      'Inspection preparation and attendance',
      'Compliance coordination across disciplines',
      'Guidance through the applicable approval procedures',
    ],
    image: '/images/services/authority.webp',
    imageAlt: 'Compliance documentation being reviewed at an industrial site',
  },
]

/**
 * System and product categories relevant to DKSM's scope.
 * TODO: Confirm final category list and add official product brands with
 * client before launch — brand names are intentionally left out until
 * distributorships are confirmed in writing.
 */
export const productCategories = [
  { title: 'Fire-detection systems', text: 'Alarm panels, detectors and notification devices.' },
  { title: 'Fire-suppression systems', text: 'Sprinkler, hose reel, hydrant and suppression equipment.' },
  { title: 'Pumps & water-based fire systems', text: 'Fire pumps, risers and water storage arrangements.' },
  { title: 'Mechanical systems', text: 'Ventilation, air-conditioning and mechanical plant.' },
  { title: 'Electrical systems', text: 'Distribution, wiring and power for building services.' },
  { title: 'Plumbing systems', text: 'Water supply, sanitary and drainage services.' },
  { title: 'Monitoring & control equipment', text: 'Panels, sensors and supervision equipment.' },
  { title: 'Safety-related engineering products', text: 'Extinguishers, signage and safety equipment.' },
] as const
