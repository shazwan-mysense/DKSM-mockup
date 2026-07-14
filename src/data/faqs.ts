/**
 * Knowledge Centre FAQs — written to educate potential customers about
 * MEP systems, fire protection, maintenance, training and authority
 * processes. Answers are general guidance, not legal advice, and avoid
 * guaranteeing approval outcomes.
 */

export interface Faq {
  q: string
  a: string
}

export interface FaqCategory {
  id: string
  title: string
  faqs: Faq[]
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'general',
    title: 'General',
    faqs: [
      {
        q: 'What services does DKSM provide?',
        a: 'DKSM Group provides mechanical, electrical and plumbing (MEP) and fire-protection services across six areas: design and build, supply and distribution of selected engineering products, installation and commissioning, maintenance, technical training, and authority approvals support.',
      },
      {
        q: 'Does DKSM handle projects from design to maintenance?',
        a: 'Yes. DKSM can act as a single responsible party across the project lifecycle — from site assessment and design, through procurement and installation, to testing, commissioning and long-term maintenance. Clients may also engage us for individual stages only.',
      },
      {
        q: 'Which industries does DKSM serve?',
        a: 'DKSM serves industrial facilities, commercial buildings, healthcare, educational institutions, hospitality and retail, transportation infrastructure, data centres, and the oil, gas and energy sector — primarily across the Klang Valley and beyond.',
      },
      {
        q: 'Does DKSM provide products as well as services?',
        a: 'Yes. DKSM distributes selected engineering and fire-protection brands and products, supplying quality-assured equipment to contractors, developers and end users, with technical guidance on selection and application.',
      },
    ],
  },
  {
    id: 'fire-protection',
    title: 'Fire protection',
    faqs: [
      {
        q: 'What is included in a fire-protection system?',
        a: 'A building’s fire protection typically combines detection (detectors, alarm panels, notification devices), suppression (sprinklers, hose reels, hydrants, extinguishers or special suppression systems), and passive measures such as compartmentation. The exact combination depends on the building’s use, size and the requirements applied to it.',
      },
      {
        q: 'How often should fire-protection systems be inspected?',
        a: 'Inspection frequency depends on the system type and the requirements applicable to your premises — some checks are monthly, others quarterly or annual. As a rule, every system should be on a documented inspection schedule; a system that has not been inspected in over a year should be reviewed as a priority.',
      },
      {
        q: 'What is the difference between testing, servicing and maintenance?',
        a: 'Testing verifies that a system or component actually works — for example, flowing water through a pump or activating a detector. Servicing is the routine upkeep of components (cleaning, adjustment, replacement of consumables). Maintenance is the overall programme that combines both, plus repairs and record-keeping, to keep the system dependable and compliant over time.',
      },
      {
        q: 'Why is system commissioning important?',
        a: 'Commissioning proves that an installed system performs as designed — under real conditions, not just on paper. Skipping or rushing commissioning is a common cause of systems that pass visual inspection but fail when actually needed. It also produces the baseline documentation that future inspections and maintenance rely on.',
      },
      {
        q: 'What information is normally required before proposing a system?',
        a: 'Typically: the building’s use and occupancy, floor plans or drawings if available, details of existing systems, any known authority requirements or notices, and access constraints. A site assessment then verifies conditions before a system is proposed.',
      },
    ],
  },
  {
    id: 'mep',
    title: 'MEP',
    faqs: [
      {
        q: 'What does MEP stand for?',
        a: 'Mechanical, Electrical and Plumbing — the three engineering disciplines behind a building’s essential services: ventilation and air-conditioning, power and lighting, water supply and drainage, among others.',
      },
      {
        q: 'Why should mechanical, electrical and plumbing systems be coordinated early?',
        a: 'The three disciplines compete for the same ceiling voids, risers and plant space. Coordinating them early prevents clashes on site, reduces rework and abortive cost, and produces systems that can actually be maintained once the building is occupied.',
      },
      {
        q: 'Can DKSM support existing facilities as well as new developments?',
        a: 'Yes. Alongside new projects, DKSM upgrades, retrofits and maintains systems in operating facilities — with works planned around your operations to minimise disruption.',
      },
      {
        q: 'What is involved in an MEP site assessment?',
        a: 'An engineer reviews your facility’s existing systems, their condition and capacity, the way the building is used, and any compliance obligations. The outcome is a factual picture of what you have and a practical recommendation of what, if anything, needs attention.',
      },
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    faqs: [
      {
        q: 'Why is preventive maintenance important?',
        a: 'Preventive maintenance finds deterioration before it becomes failure. For life-safety systems it is the difference between a system that works during an emergency and one that only looks ready. It also tends to cost less than reactive repair, and keeps compliance records current.',
      },
      {
        q: 'Can maintenance programmes be customised?',
        a: 'Yes. A sensible programme reflects the systems installed, their age and duty, the site’s operating hours and the applicable inspection requirements — not a one-size-fits-all checklist. DKSM structures programmes around each facility.',
      },
      {
        q: 'What happens during a system inspection?',
        a: 'The technician checks each covered component against its checklist — condition, settings, operation — carries out the tests due at that interval, records readings and results, and flags any defects with a recommendation. You should receive a written record after every visit.',
      },
      {
        q: 'What records should a facility retain?',
        a: 'Keep as-built drawings, commissioning reports, inspection and service records, test certificates, and any correspondence with authorities. Complete records make inspections smoother, support insurance requirements, and preserve knowledge when personnel change.',
      },
    ],
  },
  {
    id: 'authority',
    title: 'Authority & compliance',
    faqs: [
      {
        q: 'Can DKSM assist with authority submissions?',
        a: 'Yes. DKSM prepares and coordinates documentation, supports submissions to BOMBA and other relevant Malaysian authorities, and helps ready installations for inspection.',
      },
      {
        q: 'What documentation may be required?',
        a: 'Depending on the works: system drawings and specifications, calculations, equipment certificates, test and commissioning records, and completed application forms. Requirements vary by authority and by the nature of the installation.',
      },
      {
        q: 'How should a building prepare for an inspection?',
        a: 'Ensure systems are tested and any known defects rectified beforehand, documentation is complete and accessible, equipment rooms and access routes are clear, and the right personnel are present on the day. A pre-inspection walkthrough against the checklist is time well spent.',
      },
      {
        q: 'Does technical support guarantee approval?',
        a: 'No. Final approval always rests with the relevant authority and depends on the installation complying with the applicable requirements. What proper technical support does is ensure the submission is complete, the installation is ready, and issues are addressed before — not after — the inspection.',
      },
    ],
  },
]
