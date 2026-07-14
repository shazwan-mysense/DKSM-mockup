/**
 * Industries served, from the client's current website.
 * `concerns` describes typical engineering considerations per sector —
 * it does NOT claim DKSM completed specific projects in that sector
 * unless confirmed project references are added later.
 */

export interface Industry {
  id: string
  title: string
  short: string
  concerns: string
  image: string
  imageAlt: string
  /** Visual weight in the homepage mosaic. */
  span: 'wide' | 'tall' | 'std'
}

export const industries: Industry[] = [
  {
    id: 'industrial',
    title: 'Industrial Facilities',
    short: 'Manufacturing plants, warehouses and factories requiring robust MEP infrastructure and specialist fire protection.',
    concerns:
      'Production facilities carry high electrical loads, process ventilation needs and fire risks that change with what is being made and stored. Systems here must be engineered around production uptime — installation and servicing planned so lines keep running.',
    image: '/images/industries/industrial.webp',
    imageAlt: 'Manufacturing plant floor with industrial machinery',
    span: 'wide',
  },
  {
    id: 'commercial',
    title: 'Commercial Buildings',
    short: 'Offices, retail spaces and shopping complexes where safety, compliance and system reliability are paramount.',
    concerns:
      'Occupied commercial buildings need dependable air-conditioning, vertical services and life-safety systems that pass inspection year after year. Work is often carried out in live buildings, demanding careful phasing and housekeeping.',
    image: '/images/industries/commercial.webp',
    imageAlt: 'Modern commercial office towers',
    span: 'std',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Facilities',
    short: 'Hospitals and clinics with stringent regulatory requirements for both MEP systems and fire safety.',
    concerns:
      'Healthcare premises combine continuous operation, medical gases, critical power and vulnerable occupants. Redundancy, documentation and strict compliance are basic requirements, not extras.',
    image: '/images/industries/healthcare.webp',
    imageAlt: 'Modern hospital corridor',
    span: 'std',
  },
  {
    id: 'education',
    title: 'Educational Institutions',
    short: 'Schools and universities where dependable engineering systems underpin daily operations.',
    concerns:
      'Campuses spread systems across many buildings and age brackets. Maintenance access, phased upgrading during term breaks and straightforward operation for facility staff are the practical priorities.',
    image: '/images/industries/education.webp',
    imageAlt: 'University campus building',
    span: 'std',
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Retail',
    short: 'Hotels, resorts and retail environments requiring systems that are reliable, unobtrusive and compliant.',
    concerns:
      'Guest experience depends on services nobody notices — quiet air-conditioning, steady hot water, discreet fire protection. Servicing has to work around occupancy and front-of-house standards.',
    image: '/images/industries/hospitality.webp',
    imageAlt: 'Hotel lobby interior',
    span: 'std',
  },
  {
    id: 'transport',
    title: 'Transportation Infrastructure',
    short: 'Airports, terminals and transit facilities where engineering standards are exacting.',
    concerns:
      'Transit facilities run long hours with high occupancy and strict authority oversight. Systems must be engineered for durability, clear evacuation strategies and maintainability without disrupting operations.',
    image: '/images/industries/transport.webp',
    imageAlt: 'Airport terminal interior',
    span: 'tall',
  },
  {
    id: 'data-centres',
    title: 'Data Centres',
    short: 'Critical facilities requiring advanced suppression systems to protect sensitive infrastructure.',
    concerns:
      'Data halls demand precision cooling, clean-agent or specialised suppression and absolute discipline around uptime. Every intervention is planned, documented and tested against failover procedures.',
    image: '/images/industries/data-centres.webp',
    imageAlt: 'Data centre server racks',
    span: 'std',
  },
  {
    id: 'energy',
    title: 'Oil, Gas & Energy',
    short: 'High-risk environments demanding specialist fire-protection design and engineering expertise.',
    concerns:
      'Energy facilities carry process hazards that ordinary building systems are not designed for. Fire-protection design, equipment selection and documentation must meet the sector’s far stricter regimes.',
    image: '/images/industries/energy.webp',
    imageAlt: 'Oil and gas facility piping',
    span: 'wide',
  },
]
