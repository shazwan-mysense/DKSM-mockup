import { useCallback, useEffect, useRef } from 'react'
import type { GalleryItem } from '../data/projects'
import { asset } from '../lib/asset'
import { trapTabKey } from '../lib/focus'

/**
 * Keyboard-accessible image lightbox: Escape closes, arrow keys navigate,
 * focus is moved in on open and restored by the caller on close.
 */
export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onNavigate: (next: number) => void
}) {
  const item = items[index]
  const closeRef = useRef<HTMLButtonElement>(null)

  const prev = useCallback(() => onNavigate((index - 1 + items.length) % items.length), [index, items.length, onNavigate])
  const next = useCallback(() => onNavigate((index + 1) % items.length), [index, items.length, onNavigate])

  /* mount-only: take focus and lock scroll (kept separate from the key
     handler so navigating images does not yank focus back to Close) */
  useEffect(() => {
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${items.length}: ${item.caption}`}
      className="fixed inset-0 z-[80] flex flex-col bg-ink/97 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={(e) => trapTabKey(e, e.currentTarget)}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <p className="tech-label text-white/65" aria-live="polite">
          {index + 1} of {items.length} · {item.category}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="flex h-11 w-11 items-center justify-center rounded-[3px] text-white hover:bg-white/10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-16" onClick={(e) => e.stopPropagation()}>
        <img src={asset(item.image)} alt={item.caption} className="max-h-full max-w-full rounded-[3px] object-contain" />
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[3px] text-white hover:bg-white/10 sm:left-4"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M14.5 5 8 12l6.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[3px] text-white hover:bg-white/10 sm:right-4"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9.5 5 16 12l-6.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <p className="px-5 pb-6 text-center text-[13.5px] text-white/70">{item.caption}</p>
    </div>
  )
}
