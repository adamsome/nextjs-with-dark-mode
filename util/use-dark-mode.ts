import { useCallback, useEffect, useState } from 'react'
import { isBrowser } from '../util/dom'

type Mode = 'dark' | 'light'

const STORAGE_KEY = 'theme'

function getCookieMode(cookie: string, defaultMode: Mode): Mode {
  const match = cookie.match(new RegExp(`(^| )${STORAGE_KEY}=([^;]+)`))
  return match ? (match[2] as Mode) : defaultMode
}

function getRootElementMode(): Mode | undefined {
  if (document.documentElement.classList.contains('dark')) {
    return 'dark'
  }
  if (document.documentElement.classList.contains('light')) {
    return 'light'
  }
}

function toMode(value: boolean): Mode
function toMode(value: boolean | undefined): Mode | undefined
function toMode(value: boolean | undefined): Mode | undefined {
  return value ? 'dark' : value === false ? 'light' : undefined
}

export default function useDarkMode(
  /** Cookie from the request headers if on server-side. */
  cookie?: string,
  defaultValue: boolean | undefined = false
) {
  const hasCookie = typeof cookie === 'string'

  /**
   * Attempt to retrieve if we're server-side; otherwise, to prevent a
   * hydration mismatch warning, just fallback to the default mode.
   */
  const defaultMode = toMode(defaultValue)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const initMode = hasCookie ? getCookieMode(cookie!, defaultMode) : defaultMode
  const [mode, setMode] = useState<Mode | undefined>(initMode)

  useEffect(() => {
    /**
     * Since we cannot initially retrieve localStorage server-side above,
     * do so here after hydration.
     *
     * Priority:
     * - Root element class name set from <DarkModeScript />, if present
     * - Value previously persisted in localStorage
     */
    if (isBrowser && !hasCookie) {
      const _mode = getRootElementMode() ?? localStorage[STORAGE_KEY]
      if (_mode) {
        setMode(_mode)
      }
    }
  }, [hasCookie])

  useEffect(() => {
    if (isBrowser) {
      if (mode) {
        const oppositeMode = mode === 'dark' ? 'light' : 'dark'
        document.documentElement.classList.remove(oppositeMode)
        document.documentElement.classList.add(mode)
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.remove('light')
      }
    }
  }, [mode])

  const setDarkMode = useCallback(
    (val: boolean | undefined) => {
      const mode = toMode(val)
      if (hasCookie) {
        document.cookie = `${STORAGE_KEY}=${mode}; max-age=31536000; path=/`
      }
      if (isBrowser) {
        if (mode) {
          localStorage[STORAGE_KEY] = mode
        } else {
          localStorage.removeItem(STORAGE_KEY)
        }
      }
      setMode(mode)
    },
    [hasCookie]
  )

  const toggleDarkMode = useCallback(() => {
    setDarkMode(mode === 'light' ? true : false)
  }, [mode, setDarkMode])

  const isDarkMode =
    mode === 'dark' ? true : mode === 'light' ? false : defaultValue

  return { isDarkMode, setDarkMode, toggleDarkMode }
}
