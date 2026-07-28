/**
 * Projects, clients and gallery data.
 *
 * Project references, photos and the client list below are drawn from
 * DKSM's existing published website (dksm.com.my) — real, client-published
 * track record. Per client direction (14 July 2026): projects are grouped
 * by sector with no year separation, and clients are shown as logos only.
 */

export type Sector =
  | 'Industrial'
  | 'Commercial'
  | 'Education'
  | 'Infrastructure'
  | 'Data centres'

export const sectors: Sector[] = [
  'Industrial',
  'Commercial',
  'Education',
  'Infrastructure',
  'Data centres',
]

export interface ProjectCard {
  id: string
  name: string
  sector: Sector
  location: string
  owner: string
  facility: string
  scope: string
  image: string
  imageAlt: string
}

/** Track record published by DKSM — most recent and notable first. */
export const projects: ProjectCard[] = [
  {
    id: 'press-metal',
    name: 'Press Metal Manufacturing Plant',
    sector: 'Industrial',
    location: 'Klang, Selangor',
    owner: 'Press Metal Bhd',
    facility: 'Aluminium manufacturing facility',
    scope: 'Fire and electrical engineering',
    image: '/images/projects/real-press-metal.webp',
    imageAlt: 'Press Metal manufacturing plant in Klang',
  },
  {
    id: 'volvo',
    name: 'Volvo Manufacturing Plant',
    sector: 'Industrial',
    location: 'Shah Alam, Selangor',
    owner: 'Volvo Car Manufacturing Malaysia Sdn Bhd',
    facility: 'Car manufacturing plant',
    scope: 'Fire and electrical engineering',
    image: '/images/projects/real-volvo.webp',
    imageAlt: 'Volvo car manufacturing plant in Shah Alam',
  },
  {
    id: 'decathlon',
    name: 'Decathlon Shah Alam',
    sector: 'Commercial',
    location: 'Shah Alam, Selangor',
    owner: 'Bulan Anggun Sdn Bhd & Decathlon (M) Sdn Bhd',
    facility: 'Sports retail store',
    scope: 'Fire engineering',
    image: '/images/projects/real-decathlon.webp',
    imageAlt: 'Decathlon retail store in Shah Alam',
  },
  {
    id: 'ukm-bangi',
    name: 'UKM Bangi',
    sector: 'Education',
    location: 'Bangi, Selangor',
    owner: 'Universiti Kebangsaan Malaysia',
    facility: 'Higher-education campus',
    scope: 'Fire engineering',
    image: '/images/projects/real-ukm-bangi.webp',
    imageAlt: 'Universiti Kebangsaan Malaysia campus in Bangi',
  },
  {
    id: 'cenviro',
    name: 'Cenviro Waste Management Plant',
    sector: 'Infrastructure',
    location: 'Port Dickson, Negeri Sembilan',
    owner: 'Kualiti Alam Sdn Bhd',
    facility: 'Waste-management centre',
    scope: 'Fire engineering',
    image: '/images/projects/real-cenviro.webp',
    imageAlt: 'Cenviro waste management plant in Port Dickson',
  },
  {
    id: 'khind',
    name: 'Khind Manufacturing Plant',
    sector: 'Industrial',
    location: 'Sekinchan, Selangor',
    owner: 'Khind-Mistral Industries Sdn Bhd',
    facility: 'Electrical & electronics manufacturing plant',
    scope: 'Fire engineering',
    image: '/images/projects/real-khind.webp',
    imageAlt: 'Khind manufacturing plant in Sekinchan',
  },
  {
    id: 'ajinomoto',
    name: 'Ajinomoto Manufacturing Plant',
    sector: 'Industrial',
    location: 'Kuchai Lama, Kuala Lumpur',
    owner: 'Ajinomoto Sdn Bhd',
    facility: 'Food-seasoning production facility',
    scope: 'Fire engineering',
    image: '/images/projects/real-ajinomoto.webp',
    imageAlt: 'Ajinomoto manufacturing plant in Kuala Lumpur',
  },
  {
    id: 'yara',
    name: 'Yara Port Klang',
    sector: 'Industrial',
    location: 'Port Klang, Selangor',
    owner: 'Yara International (M) Sdn Bhd',
    facility: 'Mineral fertiliser facility',
    scope: 'Fire engineering',
    image: '/images/projects/real-yara.webp',
    imageAlt: 'Yara facility at Port Klang',
  },
  {
    id: 'airfoil',
    name: 'Airfoil Service Centre',
    sector: 'Industrial',
    location: 'Kota Damansara, Selangor',
    owner: 'Airfoil Services Sdn Bhd',
    facility: 'Aircraft engine centre',
    scope: 'Fire engineering',
    image: '/images/projects/real-airfoil.webp',
    imageAlt: 'Airfoil Services aircraft engine centre',
  },
  {
    id: 'wei-tat',
    name: 'Wei Tat Feedmill',
    sector: 'Industrial',
    location: 'Port Klang, Selangor',
    owner: 'Wei Tat Poultry Farm Sdn Bhd',
    facility: 'Animal feedmill plant',
    scope: 'Fire engineering',
    image: '/images/projects/real-wei-tat.webp',
    imageAlt: 'Wei Tat feedmill plant at Port Klang',
  },
]

/** Featured project shown on the homepage and the Projects page. */
export const featuredProject = {
  ...projects[0],
  text: 'One of the group’s most recent major deliveries — fire and electrical engineering for Press Metal’s aluminium manufacturing plant in Klang, taken through design coordination, installation and commissioning.',
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
  'Representative imagery shown in this gallery. Project photographs above are from DKSM’s published track record.'

/**
 * Client logo wall — logos only, per client direction. Sourced from the
 * client list published on DKSM's existing website.
 */
export interface ClientLogo {
  name: string
  image: string
}

export const clientLogos: ClientLogo[] = [
  { name: 'PETRONAS', image: '/images/clients/petronas.png' },
  { name: 'Genting Malaysia', image: '/images/clients/genting.png' },
  { name: 'Toyota', image: '/images/clients/toyota.png' },
  { name: 'Volvo', image: '/images/clients/volvo.png' },
  { name: 'Nissan', image: '/images/clients/nissan.png' },
  { name: 'Yamaha', image: '/images/clients/yamaha.png' },
  { name: 'MRT Corp', image: '/images/clients/mrt-corp.png' },
  { name: 'Press Metal', image: '/images/clients/press-metal.png' },
  { name: 'Kossan', image: '/images/clients/kossan.png' },
  { name: 'DRB-HICOM', image: '/images/clients/drb-hicom.png' },
  { name: 'HICOM', image: '/images/clients/hicom.png' },
  { name: 'Decathlon', image: '/images/clients/decathlon.png' },
  { name: 'Louis Vuitton', image: '/images/clients/louis-vuitton.png' },
  { name: 'British American Tobacco', image: '/images/clients/british-american.png' },
  { name: 'Al Rajhi Bank', image: '/images/clients/al-rajhi.png' },
  { name: 'Linde', image: '/images/clients/linde.png' },
  { name: 'Yara', image: '/images/clients/yara.png' },
  { name: 'Autoliv', image: '/images/clients/autoliv.png' },
  { name: 'AIROD', image: '/images/clients/airod.png' },
  { name: 'Universiti Kebangsaan Malaysia', image: '/images/clients/ukm.png' },
  { name: 'Eu Yan Sang', image: '/images/clients/eu-yan-sang.png' },
  { name: 'Khind', image: '/images/clients/khind.png' },
  { name: 'Joven', image: '/images/clients/joven.png' },
  { name: 'Bata', image: '/images/clients/bata.png' },
  { name: 'Eco-Shop', image: '/images/clients/eco-shop.png' },
  { name: 'Cenviro', image: '/images/clients/cenviro.png' },
  { name: 'Mycron Steel', image: '/images/clients/mycron.png' },
  { name: 'Leon Fuat', image: '/images/clients/leon-fuat.png' },
  { name: 'Synergy Pipes & Parts', image: '/images/clients/synergy.png' },
  { name: 'Kolej WIT', image: '/images/clients/kolej-wit.png' },
  { name: 'Freight Management', image: '/images/clients/freight-management.png' },
  { name: 'SKK', image: '/images/clients/skk.png' },
  { name: 'Seamaster', image: '/images/clients/seamaster.png' },
  { name: 'Ukai', image: '/images/clients/ukai.png' },
]
