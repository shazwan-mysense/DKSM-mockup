# DKSM Group — Corporate Website (Mockup)

A six-page corporate website for **DKSM Group**, a Malaysian engineering company
specialising in Mechanical, Electrical & Plumbing (MEP) and fire-protection
systems — design & build, supply & distribution, installation & commissioning,
maintenance, technical training and authority approvals.

> **Status: design mockup for client review.** Company facts, leadership
> profiles, the project track record, client logos and contact channels are
> integrated from DKSM's published website (dksm.com.my) and client-supplied
> materials. A short list of items still needs confirmation
> (see [Information requiring confirmation](#information-still-requiring-client-confirmation))
> and the contact form has no backend connected yet.

**Live preview:** https://shazwan-mysense.github.io/DKSM-mockup/
(`main` = source code · `gh-pages` = deployed build; redeploy with
`npm run build:pages`, copy `dist/index.html` to `dist/404.html`, and push
`dist/` to the `gh-pages` branch)

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us (story, timeline, values, safety, credentials) |
| `/services` | Services & Products (6 service lines + product categories) |
| `/projects` | Projects & Industries (filterable cards, client logo wall, case-study shell, industry expertise, gallery + lightbox) |
| `/knowledge` | Knowledge Centre (guides & education, company news, general FAQs, awards & recognition) |
| `/contact` | Contact Us (enquiry form, contact details, opening hours, Google Maps embed) |

## Technology

- **React 18** + **TypeScript** on **Vite 6**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router 6** (`BrowserRouter`)
- No animation library — scroll reveals, count-ups and the workflow line are a
  small `IntersectionObserver`/`requestAnimationFrame` layer in
  [`src/lib/motion.ts`](src/lib/motion.ts) with full
  `prefers-reduced-motion` support in CSS.
- Self-hosted variable fonts (Manrope for headings, Inter for body) in
  `public/fonts/` with `font-display: swap`.

## Installation

Requires Node.js 18+ and npm.

```bash
cd "DKSM Website"
npm install
```

## Development server

```bash
npm run dev
```

Vite prints a local URL (default `http://localhost:5173`).

## Production build

```bash
npm run build        # type-checks then builds to dist/
npm run preview      # serve the production build locally
npm run build:pages  # build with base=/DKSM-mockup/ for GitHub Pages
```

## Project structure

```
DKSM Website/
├── index.html                  # meta defaults, Organization JSON-LD, font preloads
├── public/
│   ├── fonts/                  # self-hosted Manrope + Inter (woff2)
│   ├── icons/favicon.svg
│   ├── images/
│   │   ├── brand/              # supplied DKSM logo (cropped), OG cover
│   │   ├── credentials/        # supplied registration/membership/award logos
│   │   ├── backgrounds/        # page heroes + CTA texture (webp, + -sm variants)
│   │   ├── services/ industries/ projects/ people/
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── data/                   # ← ALL editable content lives here
    │   ├── company.ts          # identity, contact, stats, process, timeline, mission/vision
    │   ├── team.ts             # leadership profiles (from dksm.com.my)
    │   ├── services.ts         # 6 service lines + product categories
    │   ├── industries.ts       # 6 industries
    │   ├── credentials.ts      # registrations/memberships/awards + categories
    │   ├── projects.ts         # project cards, case study, gallery
    │   ├── faqs.ts             # FAQ categories
    │   ├── articles.ts         # Knowledge Centre guides
    │   └── news.ts             # company news (empty until supplied)
    ├── components/             # Header, Footer, form, lightbox, accordion, etc.
    ├── pages/                  # one file per route
    └── lib/                    # meta (SEO) + motion (animation) hooks
```

## How to update content

### Company details
Edit [`src/data/company.ts`](src/data/company.ts). Contact details, business
hours, email and the map embed URL are all fields there — each unconfirmed
value carries a `// TODO: Confirm with client before launch.` comment. Set
`contact.mapEmbedUrl` to a Google Maps embed URL to replace the map placeholder.

### Replace project images
Drop the new photo into `public/images/projects/` (WebP preferred, ~1400px
wide) and update the `image` path on the matching entry in
[`src/data/projects.ts`](src/data/projects.ts). Set `placeholder: false` once
the project details are confirmed — the amber "Awaiting confirmation" badge
disappears automatically.

### Add credentials
Add the logo file to `public/images/credentials/` and append an entry in
[`src/data/credentials.ts`](src/data/credentials.ts) with the correct
`category` (registration / membership / award / affiliation) and
`confirmed: true|false`. Both the homepage logo wall and the About-page
credentials section render from this one file.

### Update FAQs, articles and company news
[`src/data/faqs.ts`](src/data/faqs.ts), [`src/data/articles.ts`](src/data/articles.ts)
and [`src/data/news.ts`](src/data/news.ts). Search/filtering and the news grid
pick up new entries automatically; while `news` is empty the section shows an
honest empty state. A homepage announcement banner can be enabled by setting
`announcement` in [`src/data/company.ts`](src/data/company.ts).

### Add client logos
Drop official logo files into `public/images/clients/` and add entries to
`clientLogos` in [`src/data/projects.ts`](src/data/projects.ts) — the wall on
the Projects page switches from placeholder tiles to real logos automatically.

### Connect the contact form
The form currently runs client-side validation and then shows the success
state **with an explicit "demo mode — not transmitted" notice**. To make it
live, create a form at [Formspree](https://formspree.io) (or EmailJS etc.) and
set `FORM_ENDPOINT` at the top of
[`src/components/ContactForm.tsx`](src/components/ContactForm.tsx). The submit
handler already POSTs `FormData` and handles error states once an endpoint is
set; the demo notice disappears automatically.

## Supplied asset inventory

Assets supplied via the client's shared Drive folder. **A supplied logo is not
treated as proof of any relationship** — every credential is categorised and
flagged in `src/data/credentials.ts`.

| File | Organisation | Used in | Quality | Notes |
|---|---|---|---|---|
| `brand/dksm-logo.png` | DKSM Group | Header, footer | Good (1536px, transparent) | Auto-cropped from padded original; has a baked-in glow, so it sits on dark surfaces |
| `credentials/bomba.png` | BOMBA (Fire & Rescue Dept) | Credential walls | Good | Exact registration scope to confirm |
| `credentials/cidb.png` | CIDB Malaysia | Credential walls | Good | Logo carries Reg. No. 0120060613-SL109541 — confirm grade/validity |
| `credentials/suruhanjaya-tenaga.png` | Energy Commission | Credential walls | Good | Registration type to confirm |
| `credentials/span.png` | SPAN | Credential walls | Good | Registration type to confirm |
| `credentials/tnb.png` | Tenaga Nasional | Credential walls | Good | Relationship type to confirm |
| `credentials/mof.png` | Ministry of Finance | Credential walls | Adequate (200px) | Higher-res version recommended |
| `credentials/mfpa.png` | Malaysian Fire Protection Assoc. | Credential walls | Adequate (200px) | Higher-res version recommended |
| `credentials/fmm.png` | Federation of Malaysian Manufacturers | Credential walls | Good | |
| `credentials/fmm-youth.png` | FMM Youth | Credential walls | Good | Nature of affiliation to confirm |
| `credentials/kccci.png` | Klang Chinese Chamber of Commerce | Credential walls | Adequate (400×57) | Higher-res version recommended |
| `credentials/moshpa.png` | MOSHPA | Credential walls | Good | |
| `credentials/imdemm.png` | IMDEMM | Credential walls | Good | |
| `credentials/ife.jpeg` | Institution of Fire Engineers | Credential walls | **Poor — JPEG on solid black** | Request transparent/white official version |
| `credentials/sfpe.png` | SFPE (Member mark) | Credential walls | Good | |
| `credentials/nfpa.png` | NFPA | Credential walls | Good | Nature of affiliation to confirm |
| `credentials/power-brand-2016.png` | Malaysia Power Brand 2016/17 | Credential walls, timeline | Good | Recipient entity/title to confirm |
| `credentials/scbea-2017.png` | Sin Chew Business Excellence Awards 2017 | Credential walls, timeline | Adequate (454×118) | Recipient entity/title to confirm |
| (not used on site) Dyno Klang press ads ×4 | — | Reference only | — | Source for award context and the Klang contact details |

## External image sources

All supporting photography was downloaded (no hotlinking), visually checked,
converted to WebP and stored locally. Unsplash and Pexels images are free for
commercial use without attribution; sources are recorded here for provenance.

| Image file (public/images/) | Source |
|---|---|
| `backgrounds/hero-home.webp` | [Pexels](https://www.pexels.com/photo/man-wearing-orange-hard-hat-2760241/) |
| `backgrounds/hero-about.webp` | [Pexels](https://www.pexels.com/photo/industrial-hvac-system-in-modern-facility-37604386/) |
| `backgrounds/hero-projects.webp` | [Pexels](https://www.pexels.com/photo/high-rise-buildings-of-kuala-lumpur-3815533/) |
| `backgrounds/hero-knowledge.webp` | [Pexels](https://www.pexels.com/photo/close-up-on-drawing-accessories-on-deck-9617366/) |
| `backgrounds/hero-contact.webp` | [Pexels](https://www.pexels.com/photo/three-people-sitting-beside-table-416405/) |
| `backgrounds/cta-dark.webp` | [Pexels](https://www.pexels.com/photo/machinery-pipes-in-black-and-white-19730402/) |
| `people/team-drawings.webp` | [Pexels](https://www.pexels.com/photo/two-man-holding-white-paper-1216589/) |
| `people/site-briefing.webp` | [Unsplash](https://unsplash.com/photos/construction-workers-in-hard-hats-and-vests-huddle-together-nlXv_JCfSHc) |
| `people/technician.webp` | [Pexels](https://www.pexels.com/photo/a-man-is-working-on-an-electrical-panel-27928762/) |
| `services/design-build.webp` | [Pexels](https://www.pexels.com/photo/engineer-designing-vertical-farm-3912948/) |
| `services/supply-distribution.webp` | [Pexels](https://www.pexels.com/photo/green-metal-shelves-with-construction-materials-4170172/) |
| `services/installation.webp` | [Unsplash](https://unsplash.com/photos/a-man-standing-on-a-ladder-working-on-a-ceiling-fsa8AHFoJH8) |
| `services/maintenance.webp` | [Pexels](https://www.pexels.com/photo/close-up-photo-of-a-man-checking-a-power-voltage-10871929/) |
| `services/training.webp` | [Pexels](https://www.pexels.com/photo/man-extinguishing-fire-during-safety-training-outdoors-32486734/) |
| `services/authority.webp` | [Pexels](https://www.pexels.com/photo/electricians-inspecting-the-solar-panels-4254166/) |
| `industries/industrial.webp` (+ `projects/gallery-industrial.webp`) | [Pexels](https://www.pexels.com/photo/spacious-industrial-factory-interior-in-brazil-30990853/) |
| `industries/commercial.webp` (+ `projects/gallery-commercial.webp`) | [Pexels](https://www.pexels.com/photo/kuala-lumpur-skyline-with-iconic-skyscrapers-32644037/) |
| `industries/healthcare.webp` (+ `projects/gallery-healthcare.webp`) | [Pexels](https://www.pexels.com/photo/hospital-beds-in-the-hallway-11660582/) |
| `industries/education.webp` (+ `projects/gallery-education.webp`) | [Pexels](https://www.pexels.com/photo/aerial-view-of-brown-and-white-building-3613020/) |
| `industries/hospitality.webp` | [Pexels](https://www.pexels.com/photo/the-reception-area-of-a-hotel-14036253/) |
| `industries/transport.webp` (+ `projects/gallery-infra.webp`) | [Pexels](https://www.pexels.com/photo/indoor-train-station-with-few-people-waiting-for-the-train-880929/) |
| `industries/data-centres.webp` (+ `projects/gallery-data.webp`) | [Pexels](https://www.pexels.com/photo/server-racks-on-data-center-4508751/) |
| `industries/energy.webp` (+ `projects/gallery-energy.webp`) | [Pexels](https://www.pexels.com/photo/oil-refinery-plant-15970032/) |
| `projects/fp-sprinkler.webp` | [Unsplash](https://unsplash.com/photos/o6asPZdUjUs) |
| `projects/fp-pumproom.webp` | [Pexels](https://www.pexels.com/photo/water-protection-pros-poland-coat-aquaproof-vision-fabric-lightweight-waterproof-and-flexible-fitted-with-reflective-tapes-to-increase-worker-visibility-knee-length-visibility-class-3-16442684/) |
| `projects/fp-alarm.webp` | [Pexels](https://www.pexels.com/photo/red-fire-extinguisher-below-hose-reel-189474/) |
| `projects/fp-switchgear.webp` | [Pexels](https://www.pexels.com/photo/industrial-electrical-control-room-interior-33706880/) |
| `projects/fp-chiller.webp` (+ `projects/featured.webp`) | [Pexels](https://www.pexels.com/photo/industrial-air-compressor-system-in-plant-31257317/) |
| `projects/fp-ducting.webp` | [Pexels](https://www.pexels.com/photo/industrial-interior-with-exposed-hvac-ductwork-30749458/) |
| `systems/fire-alarm.webp` | [Pexels](https://www.pexels.com/photo/a-red-and-black-fire-alarm-control-13060860/) |
| `systems/hydrant.webp` | [Pexels](https://www.pexels.com/photo/red-fire-hydrant-on-city-street-in-sunlight-6481932/) |
| `systems/wet-riser.webp` | [Pexels](https://www.pexels.com/photo/industrial-pipes-with-colorful-valves-against-a-wall-29248902/) |
| `systems/extinguisher.webp` | [Pexels](https://www.pexels.com/photo/red-fire-extinguisher-against-wall-4805958/) |
| `systems/emergency-lighting.webp` | [Pexels](https://www.pexels.com/photo/emergency-exit-signage-1871343/) |
| `systems/keluar.webp` | [Pexels](https://www.pexels.com/photo/illuminated-green-exit-sign-23523335/) |

## Information still requiring client confirmation

Most facts now come from DKSM's own published website (dksm.com.my) and the
client's 14 July 2026 feedback. Still outstanding — search `TODO: Confirm`:

1. **Award years** — the published milestone timeline says Power Brand 2015
   and Sin Chew 2018, while the supplied logo files say 2016/17 and 2017.
   The site follows the published timeline; confirm which is correct.
2. **Registration credentials** — exact nature/validity of BOMBA, CIDB
   (grade), Energy Commission, SPAN, TNB and MOF registrations.
3. **Product brands** for Supply & Distribution, confirmed in writing, plus
   the certifying body behind "certified" training wording.
4. **Photography** — hero/service/industry imagery is still licensed stock;
   DKSM project and team photos to be supplied (project photos from the old
   site are already in use on project cards).
5. **Careers** — actual vacancies for the About-page careers slot.
6. **Company news** — first announcements for the Knowledge Centre.
7. **Privacy Policy and Terms** — footer placeholders need real pages.
8. **Domain** — the site assumes dksm.com.my will carry the new build;
   confirm at launch.
9. Better logo files: IFE (transparent), MOF, MFPA, KCCCI (higher res).

## Content sourced from dksm.com.my

The following were integrated from the group's published website:
company profile copy, slogan, mission/vision/core values, milestone
timeline (1982–2023), statistics (40+ years / 2500+ projects / 500+
clients), leadership names, roles, biographies and portraits
(originals in `raw-assets/people/`), the client logo wall
(`public/images/clients/`), ten named project references with photos
(`public/images/projects/real-*.webp`), the official DKSM Group logo
(`public/images/brand/dksm-logo-official.png`), email, WhatsApp,
Facebook and LinkedIn. Dyno MEP Services remains unreferenced per the
client's positioning decision.

## Asset quality flags

- `ife.jpeg` — black-background JPEG; request a transparent official version.
- `mof.png`, `mfpa.png` (200px) and `kccci.png` (400×57) — usable at wall size
  but higher-resolution files are recommended.
