import * as React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Vua Thợ',
    template: '%s | Login',
  },
  description:
    'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
}

export interface IProps {
  children: React.ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  )
}

export default Layout
