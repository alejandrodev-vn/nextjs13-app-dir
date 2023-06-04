import * as React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Vua Thợ',
    template: '%s | Media',
  },
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
}

export interface IProps {
  children: React.ReactNode
  modal: React.ReactNode
}

const Layout: React.FC<IProps> = ({ children, modal }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
