/**
 * Projects & gallery data.
 *
 * IMPORTANT: No confirmed DKSM project references were supplied yet
 * (client checklist: photos "need to retake", projects "OK" but details
 * pending). Every project card is therefore a clearly-labelled
 * placeholder, and gallery photography is representative stock imagery —
 * flagged as such in the UI.
 *
 * TODO: Replace placeholder projects and representative imagery with
 * confirmed DKSM project information and photography before launch.
 */

export type Sector =
  | 'Industrial'
  | 'Commercial'
  | 'Healthcare'
  | 'Education'
  | 'Infrastructure'
  | 'Data centres'
  | 'Energy'

export const sectors: Sector[] = [
  'Industrial',
  'Commercial',
  'Healthcare',
  'Education',
  'Infrastructure',
  'Data centres',
  'Energy',
]

export interface ProjectCard {
  id: string
  sector: Sector
  scope: string
  services: string[]
  image: string
  imageAlt: string
  /** All placeholder cards render with a visible "awaiting confirmation" badge. */
  placeholder: boolean
}

export const projects: ProjectCard[] = [
  {
    id: 'proj-industrial',
    sector: 'Industrial',
    scope: 'Fire-protection and MEP works for a manufacturing facility',
    services: ['Design & Build', 'Installation & Commissioning', 'Maintenance'],
    image: '/images/projects/gallery-industrial.webp',
    imageAlt: 'Representative image — manufacturing facility',
    placeholder: true,
  },
  {
    id: 'proj-commercial',
    sector: 'Commercial',
    scope: 'Building services for a commercial development',
    services: ['Installation & Commissioning', 'Authority Approvals'],
    image: '/images/projects/gallery-commercial.webp',
    imageAlt: 'Representative image — commercial building',
    placeholder: true,
  },
  {
    id: 'proj-healthcare',
    sector: 'Healthcare',
    scope: 'Fire-protection systems for a healthcare facility',
    services: ['Supply & Distribution', 'Installation & Commissioning', 'Maintenance'],
    image: '/images/projects/gallery-healthcare.webp',
    imageAlt: 'Representative image — healthcare facility',
    placeholder: true,
  },
  {
    id: 'proj-education',
    sector: 'Education',
    scope: 'System upgrading works for an educational campus',
    services: ['Maintenance', 'Authority Approvals'],
    image: '/images/projects/gallery-education.webp',
    imageAlt: 'Representative image — educational institution',
    placeholder: true,
  },
  {
    id: 'proj-infra',
    sector: 'Infrastructure',
    scope: 'Engineering services for a transportation facility',
    services: ['Design & Build', 'Installation & Commissioning'],
    image: '/images/projects/gallery-infra.webp',
    imageAlt: 'Representative image — transport infrastructure',
    placeholder: true,
  },
  {
    id: 'proj-data',
    sector: 'Data centres',
    scope: 'Suppression system works for a critical facility',
    services: ['Design & Build', 'Maintenance'],
    image: '/images/projects/gallery-data.webp',
    imageAlt: 'Representative image — data centre',
    placeholder: true,
  },
  {
    id: 'proj-energy',
    sector: 'Energy',
    scope: 'Specialist fire-protection works for an energy-sector site',
    services: ['Design & Build', 'Authority Approvals'],
    image: '/images/projects/gallery-energy.webp',
    imageAlt: 'Representative image — energy facility',
    placeholder: true,
  },
]

/** Featured case study — structure ready, content pending confirmation. */
export const featuredCaseStudy = {
  placeholder: true,
  label: 'Project details awaiting client confirmation',
  sector: 'Industrial' as Sector,
  title: 'Featured project',
  challenge:
    'The challenge summary for a confirmed DKSM project will appear here — the operating constraints, compliance requirements and site conditions the team had to work within.',
  scope:
    'DKSM’s appointed scope — disciplines covered, systems delivered and the project stages handled by the team.',
  solution:
    'How the works were engineered, coordinated and delivered, including testing, commissioning and authority inspection.',
  systems: ['To be confirmed'],
  outcome: 'Measured outcome and handover result, as confirmed by the client.',
  image: '/images/projects/featured.webp',
  imageAlt: 'Representative image — industrial facility interior',
}

/** Gallery of representative imagery (stock), clearly labelled in the UI. */
export interface GalleryItem {
  id: string
  image: string
  caption: string
  category: 'Fire protection' | 'Mechanical & electrical' | 'Facilities'
}

export const gallery: GalleryItem[] = [
  { id: 'g1', image: '/images/projects/fp-pumproom.webp', caption: 'Fire-main and pump-room pipework', category: 'Fire protection' },
  { id: 'g2', image: '/images/projects/fp-sprinkler.webp', caption: 'Sprinkler protection at ceiling level', category: 'Fire protection' },
  { id: 'g3', image: '/images/projects/fp-alarm.webp', caption: 'Fire-alarm and control equipment', category: 'Fire protection' },
  { id: 'g4', image: '/images/projects/fp-switchgear.webp', caption: 'Electrical switchgear and distribution', category: 'Mechanical & electrical' },
  { id: 'g5', image: '/images/projects/fp-chiller.webp', caption: 'Mechanical plant room', category: 'Mechanical & electrical' },
  { id: 'g6', image: '/images/projects/fp-ducting.webp', caption: 'Coordinated overhead MEP services', category: 'Mechanical & electrical' },
  { id: 'g7', image: '/images/projects/gallery-industrial.webp', caption: 'Industrial production environment', category: 'Facilities' },
  { id: 'g8', image: '/images/projects/gallery-data.webp', caption: 'Data-centre white space', category: 'Facilities' },
]

export const galleryDisclaimer =
  'Representative imagery shown. Actual DKSM project photography will replace these images once supplied.'
