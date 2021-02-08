import React from 'react'
import LinkCard from './link-card'

export default function HomeLinks() {
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      <LinkCard title="Documentation" href="https://nextjs.org/docs">
        Find in-depth information about Next.js features and API.
      </LinkCard>

      <LinkCard title="Learn" href="https://nextjs.org/learn">
        Learn about Next.js in an interactive course with quizzes!
      </LinkCard>

      <LinkCard
        title="Examples"
        href="https://github.com/vercel/next.js/tree/master/examples"
      >
        Discover and deploy boilerplate example Next.js projects.
      </LinkCard>

      <LinkCard
        title="Deploy"
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      >
        Instantly deploy your Next.js site to a public URL with Vercel.
      </LinkCard>
    </div>
  )
}
