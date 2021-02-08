import React from 'react'

type Props = typeof defaultProps &
  React.PropsWithoutRef<JSX.IntrinsicElements['a']> & {
    title: string
    children: React.ReactNode
  }

const defaultProps = {}

const tw = `p-6 mt-6 text-left w-96
  border dark:border-gray-800 w-96 rounded-xl
  hover:text-blue-600 focus:text-blue-600
  transition-colors
`

export default function LinkCard({
  title,
  className,
  children,
  ...rest
}: Props) {
  return (
    <a className={tw + (className ?? '')} {...rest}>
      <h3 className="text-2xl font-bold">{title} &rarr;</h3>
      <p className="mt-4 text-xl">{children}</p>
    </a>
  )
}

LinkCard.defaultProps = defaultProps
