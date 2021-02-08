import DarkModeSwitch from './dark-mode-switch'

type Props = typeof defaultProps & {
  cookie: string
}

const defaultProps = {}

export default function NavBar({ cookie }: Props) {
  return (
    <nav className="flex items-center justify-center w-full h-12 px-4 border-b dark:border-gray-900 transition-colors">
      <div className="flex-1"></div>
      <DarkModeSwitch cookie={cookie} />
    </nav>
  )
}

NavBar.defaultProps = defaultProps
