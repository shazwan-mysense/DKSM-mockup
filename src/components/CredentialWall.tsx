import { credentials, credentialsDisclaimer } from '../data/credentials'
import { asset } from '../lib/asset'

/**
 * Restrained logo wall: consistent tile sizing, quiet borders, no
 * recolouring or cropping of the supplied organisation logos.
 */
export default function CredentialWall({ limit }: { limit?: number }) {
  const items = limit ? credentials.slice(0, limit) : credentials
  return (
    <div>
      <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
        {items.map((c) => (
          <li
            key={c.id}
            className={`group relative flex h-28 items-center justify-center p-5 ${c.darkAsset ? 'bg-[#0b0b0c]' : 'bg-white'}`}
          >
            <img
              src={asset(c.image)}
              alt={`${c.org} — ${c.category.toLowerCase()}`}
              loading="lazy"
              className="max-h-full max-w-full object-contain grayscale-[35%] transition-all duration-300 group-hover:grayscale-0"
            />
            <span className="tech-label pointer-events-none absolute inset-x-0 bottom-1.5 text-center text-[9px] text-steel/0 transition-colors duration-300 group-hover:text-steel/90">
              {c.category}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 max-w-3xl text-[12.5px] leading-relaxed text-steel">{credentialsDisclaimer}</p>
    </div>
  )
}
