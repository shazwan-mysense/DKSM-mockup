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
      'End-to-end fire-protection and MEP design and build solutions, tailored to the specifications of each project — engineering, procurement, construction and commissioning handled in-house.',
    intro:
      'For clients who want one responsible party from concept to handover, DKSM delivers full EPCC — engineering, procurement, construction and commissioning — taking a project from requirement assessment to a tested, handed-over system.',
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
      'Preventive maintenance programmes and maintenance plans',
      'Building maintenance',
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
      'Fire-extinguisher training',
      'Fire-safety awareness programmes',
      'Emergency response planning',
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
      'BOMBA inspection preparation and attendance',
      'Insurance audit support',
      'Compliance coordination across disciplines',
      'Guidance through the applicable approval procedures',
    ],
    image: '/images/services/authority.webp',
    imageAlt: 'Compliance documentation being reviewed at an industrial site',
  },
]

/**
 * Fire-protection systems in DKSM's scope — supplied, installed, serviced
 * and maintained, as listed in the company profile provided by the client
 * (28 July 2026).
 */
export const fireSystems = [
  { title: 'Fire alarm systems', text: 'Detection, alarm panels and notification devices.', image: '/images/systems/fire-alarm.webp', imageAlt: 'Break-glass fire alarm call point on a wall' },
  { title: 'Sprinkler systems', text: 'Automatic sprinkler protection for buildings and plants.', image: '/images/projects/fp-sprinkler.webp', imageAlt: 'Fire sprinkler head at ceiling level' },
  { title: 'Hydrant systems', text: 'External and internal hydrant coverage.', image: '/images/systems/hydrant.webp', imageAlt: 'Red pillar fire hydrant' },
  { title: 'Pressurized hydrant systems', text: 'Pumped hydrant systems for demanding sites.', image: '/images/projects/fp-pumproom.webp', imageAlt: 'Fire pump set and main pipework' },
  { title: 'Hose reel systems', text: 'First-response hose reels at riser points.', image: '/images/projects/fp-alarm.webp', imageAlt: 'Hose reel and fire extinguisher station' },
  { title: 'Wet riser systems', text: 'Riser mains serving upper floors.', image: '/images/systems/wet-riser.webp', imageAlt: 'Fire main pipework with control valves' },
  { title: 'Clean agent systems', text: 'Gas-based suppression for sensitive spaces.', image: '/images/projects/gallery-data.webp', imageAlt: 'Data-centre white space protected by clean-agent suppression' },
  { title: 'SPKA / iSCADA systems', text: 'Automated fire-alarm monitoring and supervision.', image: '/images/projects/fp-switchgear.webp', imageAlt: 'Control-room panels for system monitoring' },
  { title: 'Fire extinguishers', text: 'Portable extinguishers, supplied and serviced.', image: '/images/systems/extinguisher.webp', imageAlt: 'Serviced fire extinguisher with inspection record' },
  { title: 'Emergency lighting', text: 'Emergency luminaires for evacuation routes.', image: '/images/systems/emergency-lighting.webp', imageAlt: 'Caged emergency exit luminaire' },
  { title: 'KELUAR signage', text: 'Exit signage to Malaysian requirements.', image: '/images/systems/keluar.webp', imageAlt: 'Illuminated running-man exit sign' },
] as const

/** Supporting MEP system categories. */
export const mepSystems = [
  { title: 'Mechanical systems', text: 'Ventilation, air-conditioning and mechanical plant.' },
  { title: 'Electrical systems', text: 'Distribution, wiring and power for building services.' },
  { title: 'Plumbing systems', text: 'Water supply, sanitary and drainage services.' },
  { title: 'Monitoring & control equipment', text: 'Panels, sensors and supervision equipment.' },
] as const
