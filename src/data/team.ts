/**
 * DKSM Group leadership — names, roles, portraits and biographies as
 * published on the company's existing website (dksm.com.my), with the
 * biographical notes supplied by the client. Portrait files were saved
 * from the same site (originals in raw-assets/people/).
 */

export interface TeamMember {
  id: string
  name: string
  role: string
  tier: 'Top management' | 'Key management'
  image: string
  /** One-line introduction shown on the card. */
  summary: string
  /** Full biography shown when the card is expanded. */
  bio: string[]
  /** Association and committee roles, where held. */
  appointments?: string[]
}

export const team: TeamMember[] = [
  {
    id: 'jessica-wong',
    name: 'Jessica Wong',
    role: 'Managing Director',
    tier: 'Top management',
    image: '/images/people/jessica-wong.webp',
    summary:
      'Founding member of the group, with over 30 years in fire protection.',
    bio: [
      'A founding member of the group, Jessica has spent more than three decades in the fire-protection industry. She guides and supervises DKSM’s business, financial and investment strategies, and stays closely involved in how the group grows.',
      'Outside the company she participates actively in voluntary initiatives and holds several community portfolios.',
    ],
    appointments: [
      'Key Committee & Deputy Honorary Treasurer — Klang Chinese Chamber of Commerce and Industry (KCCCI)',
      'Committee member — RCPK',
    ],
  },
  {
    id: 'stanley-siew',
    name: 'Stanley Siew',
    role: 'Executive Director',
    tier: 'Top management',
    image: '/images/people/stanley-siew.webp',
    summary:
      'Directs the group’s business operations; joined in 2010 from multinational industry.',
    bio: [
      'Stanley joined the group in 2010, bringing team-leadership experience from multinational companies. He plays a pivotal role in directing DKSM’s day-to-day business operations, and is active in industry associations and voluntary work.',
    ],
    appointments: [
      'Honorary Treasurer — IMDEMM',
      'National Vice-Chairman, Youth Committee — FMM',
      'National Committee, SMI Youth Entrepreneur (SYEC) — FMM',
      'Youth Committee — NCCIM',
      'Chairman of Agriculture — KCCCI',
      'Agriculture & Industry Committee (AIC) — KCCCI',
    ],
  },
  {
    id: 'gnoh-siew-woo',
    name: 'Gnoh Siew Woo',
    role: 'Advisor',
    tier: 'Top management',
    image: '/images/people/gnoh-siew-woo.webp',
    summary:
      'Advisor to the group since 2013, with three decades in the construction industry.',
    bio: [
      'Mr Gnoh began his career in the early 1970s as a mathematics and electronics lecturer, then spent more than three decades in the construction industry. He founded Perniagaan Elektronik Merdeka in 1990, Selatan Johor Electrical Engineering (Ipoh) Sdn Bhd in 1993 and Dataran Dinamik in 2000, and has provided advisory services to the group since 2013.',
      'His work spans factory, residential and commercial projects, and his expertise in systems and modules continues to guide the group’s engineers.',
    ],
  },
  {
    id: 'chandramogan',
    name: 'Chandramogan',
    role: 'Operation Manager',
    tier: 'Key management',
    image: '/images/people/chandramogan.webp',
    summary:
      'Three decades of experience across operations, strategic planning and crisis management.',
    bio: [
      'Chandra leads operational management across the group, with more than three decades of industry experience in strategic planning and organisational management. His focus areas include management transformation, crisis management, technology transfer and change management.',
      'He is a certified trainer, an OSHAS and QMS auditor, and a licensed Radiation Protection Officer (RPO).',
    ],
  },
  {
    id: 'ajith-kumar',
    name: 'Ajith Kumar',
    role: 'Service Manager',
    tier: 'Key management',
    image: '/images/people/ajith-kumar.webp',
    summary:
      'Over 25 years in the fire service sector, leading a team of 20+ engineers and technicians.',
    bio: [
      'Ajith has spent more than 25 years in the fire service sector and leads DKSM’s servicing team of over 20 engineers and technicians. His expertise covers service budgeting, service life-cycle planning, contingency and risk management, safety, health and environment, and quality standards.',
    ],
  },
]
