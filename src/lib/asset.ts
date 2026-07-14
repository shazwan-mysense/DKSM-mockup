/**
 * Resolve a root-relative public asset path against Vite's base URL.
 *
 * Content files (src/data/*) store clean root paths like
 * "/images/services/maintenance.webp"; this helper makes them work when the
 * site is deployed under a sub-path (e.g. GitHub Pages at /DKSM-mockup/).
 * With the default base "/" it returns the path unchanged.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return base + path
}

/** Build a srcSet string for a background image and its -sm variant. */
export function assetSrcSet(path: string, largeWidth = 1920): string {
  return `${asset(path.replace('.webp', '-sm.webp'))} 960w, ${asset(path)} ${largeWidth}w`
}
