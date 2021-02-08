import React from 'react'
import useDarkMode from '../util/use-dark-mode'

type Props = typeof defaultProps & {
  cookie: string
}

const defaultProps = {
  animate: true,
}

export default function DarkModeSwitch({ cookie }: Props) {
  const { isDarkMode, toggleDarkMode } = useDarkMode(cookie)

  return (
    <button onClick={() => toggleDarkMode()}>
      {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

DarkModeSwitch.defaultProps = defaultProps
