'use client'

import { useSyncExternalStore } from 'react'

// Matches the Tailwind `md` breakpoint used across the design system
// (md: applies at ≥768px, so "mobile" is ≤767px / innerWidth < 768).
const MOBILE_QUERY = '(max-width: 767px)'

let mediaQuery: MediaQueryList | null = null
function getMediaQuery(): MediaQueryList {
  if (mediaQuery === null) mediaQuery = window.matchMedia(MOBILE_QUERY)
  return mediaQuery
}

function subscribe(onChange: () => void): () => void {
  const mql = getMediaQuery()
  mql.addEventListener('change', onChange)
  return () => mql.removeEventListener('change', onChange)
}

// Client truth — read from matchMedia (a primitive boolean, so it's a stable
// snapshot for useSyncExternalStore without extra caching).
function getSnapshot(): boolean {
  return getMediaQuery().matches
}

// SSR + first hydration render: always desktop. React uses this value for the
// server HTML *and* the initial client render, so the two match exactly and no
// hydration mismatch can occur; the real client value is applied right after.
function getServerSnapshot(): boolean {
  return false
}

/**
 * SSR-safe viewport flag. `false` on the server and on the first client render,
 * then the real `(max-width: 767px)` match after hydration (and on resize).
 */
export function useIsMobile(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
