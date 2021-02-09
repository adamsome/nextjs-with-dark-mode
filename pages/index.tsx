import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import HomeLinks from '../components/home-links'
import NavBar from '../components/nav-bar'
import useDarkMode from '../util/use-dark-mode'

type Props = typeof defaultProps & {
  cookie: string
}

const defaultProps = {
  animate: true,
}

export default function Home({ cookie }: Props) {
  const { isDarkMode, toggleDarkMode } = useDarkMode(cookie)

  return (
    <div
      className={`
        flex flex-col items-center justify-center
        min-h-screen min-w-min
      bg-white dark:bg-black text-black dark:text-white transition-colors
      `}
    >
      <Head>
        <title>Create Next App w/ Dark Mode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

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

      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

Home.defaultProps = defaultProps

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookie: req.headers.cookie ?? '',
    },
  }
}
