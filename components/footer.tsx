import React, { useEffect, useState } from 'react'
import { isBrowser } from '../util/dom'
import { useTheme } from '../util/use-theme'

type Props = typeof defaultProps

const defaultProps = {}

const ICON_LIGHT = 'GitHub-Mark-Light-64px.png'
const ICON_DARK = '/GitHub-Mark-64px.png'

export default function Footer(_: Props) {
  const { theme } = useTheme()
  const [icon, setIcon] = useState(ICON_LIGHT)

  // Prevent style mismatch when SSR by waiting for client-side
  useEffect(() => {
    if (isBrowser) setIcon(theme === 'dark' ? ICON_LIGHT : ICON_DARK)
  }, [isBrowser, theme])

  return (
    <footer className="flex items-center justify-center w-full h-24 border-t dark:border-gray-900 transition-colors">
      <a
        className={`
          flex items-center justify-center text-xl
          hover:text-blue-600 focus:text-blue-600 transition-colors
        `}
        href="https://github.com/adamsome/nextjs-with-dark-mode"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={icon} alt="Github Logo" className="h-8 mr-2" />
        adamsome
      </a>
    </footer>
  )
}

Footer.defaultProps = defaultProps
