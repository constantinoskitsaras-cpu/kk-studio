'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { dictionaries, type Locale } from './dictionary'

const STORAGE_KEY = 'kk-locale'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  // Read any saved preference once, after hydration — avoids an SSR/CSR
  // markup mismatch (the static export always ships English first).
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'el') setLocaleState(saved)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'el' : 'en')
  }, [locale, setLocale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

/** Dictionary-lookup hook — `t('nav.work')` walks the dot path in the
 *  current locale's dictionary and falls back to English, then the key
 *  itself, if a translation is missing. */
export function useT() {
  const { locale } = useLocale()
  return useCallback(
    // Generic so callers pulling arrays/objects out of the dictionary (e.g.
    // `t<{title:string; body:string}[]>('home.services.items')`) get a typed
    // result instead of casting through `unknown` at every call site.
    <T = string,>(path: string): T => {
      const walk = (dict: object): unknown =>
        path.split('.').reduce<unknown>((node, key) => {
          if (node && typeof node === 'object' && key in node) {
            return (node as Record<string, unknown>)[key]
          }
          return undefined
        }, dict)

      return (walk(dictionaries[locale]) ?? walk(dictionaries.en) ?? path) as T
    },
    [locale],
  )
}
