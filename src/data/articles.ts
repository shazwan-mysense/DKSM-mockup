/**
 * Knowledge Centre educational articles. Deliberately short for launch,
 * structured so each can grow into a full page later.
 */

export interface Article {
  id: string
  title: string
  summary: string
  readMinutes: number
  body: string[]
}

export const articles: Article[] = [
  {
    id: 'preventive-fire-maintenance',
    title: 'Understanding preventive fire-system maintenance',
    summary:
      'Why fire systems that “look fine” still fail — and what a proper preventive programme actually covers.',
    readMinutes: 3,
    body: [
      'A fire-protection system spends almost its entire life doing nothing. That is exactly why preventive maintenance matters: the only way to know a pump will start, a valve will open, or a detector will respond is to test and service them on schedule — long before an emergency asks the question for real.',
      'A proper programme covers more than a visual walk-past. It combines scheduled inspections at the intervals appropriate to each system, functional testing of components, servicing of consumables and wear items, and written records of every visit and every reading.',
      'The records are not paperwork for its own sake. They are what an authority inspector, an insurer, or an incoming facility manager will ask for first — and they are how deterioration gets spotted as a trend rather than discovered as a failure.',
    ],
  },
  {
    id: 'site-assessment-prep',
    title: 'Preparing for a technical site assessment',
    summary: 'What to have ready before an engineer walks your facility, and what to expect on the day.',
    readMinutes: 3,
    body: [
      'A site assessment goes faster and produces better recommendations when the groundwork is done. Before the visit, gather what documentation you have: floor plans, as-built drawings, previous service records, and any notices or correspondence from authorities.',
      'Arrange access to the areas that matter — plant rooms, risers, roof plant, switch rooms — and have someone available who knows the building’s daily operation. Operational knowledge often explains conditions that drawings cannot.',
      'Expect the engineer to look at system condition and capacity, how the building is actually used versus what the systems were designed for, and any obvious compliance gaps. The outcome should be a factual account of what you have, not a sales pitch.',
    ],
  },
  {
    id: 'delayed-commissioning',
    title: 'Common causes of delayed commissioning',
    summary: 'The usual reasons testing and commissioning slip at the end of a project — and how to avoid them.',
    readMinutes: 3,
    body: [
      'Commissioning sits at the end of the programme, so it inherits every earlier delay — but many commissioning delays are self-inflicted. The most common: incomplete installation being presented as complete, missing documentation, and utilities (power, water) not yet available at the levels systems need.',
      'Coordination gaps are the next culprit. Fire, mechanical and electrical systems interact during commissioning — a smoke-control test needs the fire alarm, the mechanical ventilation and the electrical supply all ready at once. If one discipline lags, all three wait.',
      'The fix is unglamorous: a realistic commissioning programme agreed early, pre-commissioning checks done honestly, documentation assembled as work proceeds rather than at the end, and one party clearly responsible for coordinating the sequence.',
    ],
  },
  {
    id: 'mep-coordination',
    title: 'Why MEP coordination matters',
    summary: 'Ceiling voids are a battlefield. Early coordination is how projects avoid fighting in them.',
    readMinutes: 2,
    body: [
      'Mechanical ducts, electrical containment, sprinkler mains and drainage all want the same routes through a building. Without early coordination, they collide — first on drawings if you are lucky, otherwise on site, where the resolution is cutting, re-routing and delay.',
      'Coordinated design settles the hierarchy before installation: what runs where, at what level, with what access for maintenance. The result is fewer clashes, less abortive work, and systems that can actually be serviced once ceilings close.',
      'The cheapest time to move a duct is before it exists. That is the entire argument for MEP coordination, and it is why integrated teams — where one organisation sees all three disciplines — tend to deliver smoother sites.',
    ],
  },
  {
    id: 'facility-documentation',
    title: 'What facility managers should document',
    summary: 'The records that make inspections, insurance and handovers painless.',
    readMinutes: 2,
    body: [
      'Every facility should be able to produce five things on request: as-built drawings of its engineering systems, commissioning records, current inspection and service reports, test certificates for life-safety equipment, and a log of modifications made since handover.',
      'Modifications are the record most often missing. Systems drift from their as-built state — a partition here, a new machine there — and each change can quietly affect fire protection and services capacity. An up-to-date modification log is how the drift stays visible.',
      'Good documentation is also an asset at handover: to a new facilities team, a new owner, or a contractor pricing work. Facilities with complete records consistently get faster, cheaper, better-targeted engineering work.',
    ],
  },
]
