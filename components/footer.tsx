import React from 'react'

type Props = typeof defaultProps & {
  isDarkMode: boolean
}

const defaultProps = {}

export default function Footer({ isDarkMode }: Props) {
  const githubIcon = isDarkMode
    ? '/GitHub-Mark-Light-64px.png'
    : '/GitHub-Mark-64px.png'

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
        <img src={githubIcon} alt="Github Logo" className="h-8 mr-2" />
        adamsome
      </a>
    </footer>
  )
}

Footer.defaultProps = defaultProps
