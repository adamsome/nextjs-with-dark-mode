import Switch from './switch'

type Props = typeof defaultProps & {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const defaultProps = {}

export default function NavBar({ isDarkMode, toggleDarkMode }: Props) {
  const selected = isDarkMode ? 'right' : 'left'

  /*! Feather Icons v4.28.0 | MIT License | https://feathericons.com */
  const sunIcon = (size = '80%') => (
    <svg
      className={`stroke-current stroke-2 ${!isDarkMode ? 'fill-current' : ''}`}
      fill="transparent"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={size}
      width={size}
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  )

  /*! Feather Icons v4.28.0 | MIT License | https://feathericons.com */
  const moonIcon = (size = '80%') => (
    <svg
      className={`stroke-current stroke-2 ${isDarkMode ? 'fill-current' : ''}`}
      fill="transparent"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={size}
      width={size}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  )

  return (
    <nav className="flex items-center justify-center w-full h-24 px-6 border-b dark:border-gray-900 transition-colors">
      <div className="flex-1"></div>
      <Switch
        className="ml-6"
        selected={selected}
        lhsIcon={sunIcon('70%')}
        rhsIcon={moonIcon('70%')}
        lhsDimBG="gray-700"
        lhsDimFG="gray-500"
        lhsLitBG="gray-800"
        lhsLitFG="yellow-500"
        rhsDimBG="gray-300"
        rhsDimFG="gray-400"
        rhsLitBG="gray-300"
        rhsLitFG="blue-600"
        invertBorder={true}
        size={5}
        borderWidth={0}
        onToggle={() => toggleDarkMode()}
      />
      <Switch
        className="ml-6"
        selected={selected}
        lhsIcon={sunIcon()}
        lhsDimBG="gray-900"
        lhsDimFG="gray-700"
        lhsLitBG="white"
        lhsLitFG="yellow-500"
        rhsIcon={moonIcon()}
        rhsDimBG="gray-300"
        rhsDimFG="gray-400"
        rhsLitBG="black"
        rhsLitFG="blue-600"
        size={7}
        onToggle={() => toggleDarkMode()}
      />
      <Switch
        className="ml-6"
        selected={selected}
        lhsIcon={sunIcon()}
        lhsDimBG="white"
        lhsDimFG="black"
        lhsLitBG="white"
        lhsLitFG="black"
        rhsIcon={moonIcon()}
        rhsDimBG="black"
        rhsDimFG="white"
        rhsLitBG="black"
        rhsLitFG="white"
        round={false}
        size={9}
        borderWidth={4}
        onToggle={() => toggleDarkMode()}
      />
      <Switch
        className="ml-6"
        selected={selected}
        lhsIcon={sunIcon('65%')}
        lhsDimBG="white"
        lhsDimFG="gray-400"
        lhsLitBG="yellow-100"
        lhsLitFG="yellow-600"
        rhsIcon={moonIcon('65%')}
        rhsDimBG="black"
        rhsDimFG="gray-600"
        rhsLitBG="blue-700"
        rhsLitFG="blue-200"
        size={11}
        onToggle={() => toggleDarkMode()}
      />
    </nav>
  )
}

NavBar.defaultProps = defaultProps
