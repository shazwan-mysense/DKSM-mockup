/**
 * Registrations, memberships, awards and affiliations.
 *
 * Logo files were supplied by the client (Drive: Company Logo /
 * Registrations & Memberships + Company Credentials & Awards).
 * A supplied logo is NOT treated as proof of any particular relationship:
 * every item carries a `category` and a `confirmed` flag.
 *
 * TODO: Confirm the exact nature (registration / licence / membership /
 * award) and current validity of every item marked `confirmed: false`
 * with the client before launch.
 */

export type CredentialCategory =
  | 'Authority registration'
  | 'Contractor registration'
  | 'Government registration'
  | 'Professional membership'
  | 'Industry association'
  | 'Award'
  | 'Affiliation'

export interface Credential {
  id: string
  name: string
  org: string
  category: CredentialCategory
  image: string
  confirmed: boolean
  note?: string
  /** True when the logo needs special background handling (non-transparent). */
  darkAsset?: boolean
}

export const credentials: Credential[] = [
  {
    id: 'bomba',
    name: 'BOMBA',
    org: 'Jabatan Bomba dan Penyelamat Malaysia (Fire & Rescue Department)',
    category: 'Authority registration',
    image: '/images/credentials/bomba.png',
    confirmed: false,
    note: 'Supplied press feature reports fire-protection approval by the Fire & Rescue Department; exact registration scope to be confirmed.',
  },
  {
    id: 'cidb',
    name: 'CIDB Malaysia',
    org: 'Construction Industry Development Board',
    category: 'Contractor registration',
    image: '/images/credentials/cidb.png',
    confirmed: false,
    note: 'Supplied logo carries Reg. No. 0120060613-SL109541 — grade and validity to be confirmed.',
  },
  {
    id: 'st',
    name: 'Suruhanjaya Tenaga',
    org: 'Energy Commission of Malaysia',
    category: 'Authority registration',
    image: '/images/credentials/suruhanjaya-tenaga.png',
    confirmed: false,
  },
  {
    id: 'span',
    name: 'SPAN',
    org: 'Suruhanjaya Perkhidmatan Air Negara (National Water Services Commission)',
    category: 'Authority registration',
    image: '/images/credentials/span.png',
    confirmed: false,
  },
  {
    id: 'tnb',
    name: 'Tenaga Nasional',
    org: 'Tenaga Nasional Berhad',
    category: 'Affiliation',
    image: '/images/credentials/tnb.png',
    confirmed: false,
    note: 'Nature of registration/vendor relationship to be confirmed.',
  },
  {
    id: 'mof',
    name: 'Ministry of Finance',
    org: 'Kementerian Kewangan Malaysia',
    category: 'Government registration',
    image: '/images/credentials/mof.png',
    confirmed: false,
  },
  {
    id: 'fmm',
    name: 'FMM',
    org: 'Federation of Malaysian Manufacturers',
    category: 'Industry association',
    image: '/images/credentials/fmm.png',
    confirmed: false,
  },
  {
    id: 'fmm-youth',
    name: 'FMM Youth',
    org: 'Federation of Malaysian Manufacturers — Youth',
    category: 'Affiliation',
    image: '/images/credentials/fmm-youth.png',
    confirmed: false,
  },
  {
    id: 'kccci',
    name: 'KCCCI',
    org: 'Klang Chinese Chamber of Commerce and Industry',
    category: 'Industry association',
    image: '/images/credentials/kccci.png',
    confirmed: false,
  },
  {
    id: 'mfpa',
    name: 'MFPA',
    org: 'Malaysian Fire Protection Association',
    category: 'Industry association',
    image: '/images/credentials/mfpa.png',
    confirmed: false,
  },
  {
    id: 'moshpa',
    name: 'MOSHPA',
    org: 'Malaysian Occupational Safety and Health Practitioners’ Association',
    category: 'Professional membership',
    image: '/images/credentials/moshpa.png',
    confirmed: false,
  },
  {
    id: 'imdemm',
    name: 'IMDEMM',
    org: 'Institution of Masters in Disaster and Emergency Management Malaysia',
    category: 'Professional membership',
    image: '/images/credentials/imdemm.png',
    confirmed: false,
  },
  {
    id: 'ife',
    name: 'IFE',
    org: 'Institution of Fire Engineers',
    category: 'Professional membership',
    image: '/images/credentials/ife.jpeg',
    confirmed: false,
    darkAsset: true,
    note: 'Supplied file is a JPEG on black — a transparent/white version is recommended.',
  },
  {
    id: 'sfpe',
    name: 'SFPE',
    org: 'Society of Fire Protection Engineers',
    category: 'Professional membership',
    image: '/images/credentials/sfpe.png',
    confirmed: false,
    note: 'Supplied logo is the SFPE “Member” mark.',
  },
  {
    id: 'nfpa',
    name: 'NFPA',
    org: 'National Fire Protection Association',
    category: 'Affiliation',
    image: '/images/credentials/nfpa.png',
    confirmed: false,
  },
  {
    id: 'power-brand',
    name: 'Malaysia Power Brand 2016/2017',
    org: 'Asia Entrepreneur Alliance',
    category: 'Award',
    image: '/images/credentials/power-brand-2016.png',
    confirmed: false,
    note: 'Award logo supplied in the client’s credentials folder; recipient entity and award title to be confirmed.',
  },
  {
    id: 'scbea',
    name: 'Sin Chew Business Excellence Awards 2017',
    org: 'Sin Chew Daily',
    category: 'Award',
    image: '/images/credentials/scbea-2017.png',
    confirmed: false,
    note: 'Supplied 2017 Sin Chew feature reports a Service Excellence award to the group’s fire-protection business; wording to be confirmed.',
  },
]

export const credentialCategories: CredentialCategory[] = [
  'Contractor registration',
  'Authority registration',
  'Government registration',
  'Professional membership',
  'Industry association',
  'Award',
  'Affiliation',
]

export const credentialsDisclaimer =
  'Logos shown reflect registrations, memberships, awards and industry affiliations held by DKSM Group companies, as supplied by the company. They do not imply endorsement by the organisations shown. Classifications are being finalised and will be confirmed before launch.'
