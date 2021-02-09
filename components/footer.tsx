import React from 'react'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t dark:border-gray-900 transition-colors">
      <a
        className="flex items-center justify-center hover:text-blue-600 focus:text-blue-600 transition-colors"
        href="https://github.com/adamsome/nextjs-with-dark-mode"
        target="_blank"
        rel="noopener noreferrer"
      >
        adamsome
      </a>
    </footer>
  )
}
