import Head from 'next/head'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'
import HomeLinks from '../components/home-links'
import NavBar from '../components/nav-bar'
import { isBrowser } from '../util/dom'
import { useTheme } from '../util/use-theme'

type Props = typeof defaultProps

const defaultProps = {
  animate: true,
}

export default function Home(_: Props) {
  const { theme: rawTheme } = useTheme()
  const [theme, setTheme] = useState('dark')

  // Prevent style mismatch when SSR by waiting for client-side
  useEffect(() => {
    if (isBrowser) setTheme(rawTheme ?? 'dark')
  }, [isBrowser, rawTheme])

  return (
    <div
      className={`
        flex flex-col items-center justify-center
        min-h-screen min-w-min
      bg-white dark:bg-black text-black dark:text-white transition-colors
      `}
    >
      <Head>
        <meta charSet="utf-8" />
        <title>Create Next App w/ Dark Mode</title>

        <link
          rel="icon"
          href={theme === 'dark' ? '/favicon-invert.ico' : '/favicon.ico'}
        />
        <link
          rel="icon"
          href={theme === 'dark' ? '/icon-invert.svg' : '/icon.svg'}
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>

      <NavBar />

      <main
        className={`
          flex flex-col items-center justify-center flex-1 text-center
          px-4 py-6
        `}
      >
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 dark:bg-gray-800 rounded-md transition-colors">
            pages/index.js
          </code>
        </p>

        <HomeLinks />
      </main>

      <Footer />
    </div>
  )
}

Home.defaultProps = defaultProps
