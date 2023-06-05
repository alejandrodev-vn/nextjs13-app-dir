'use client'

import { createContext } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

export const ThemeContext = createContext({})

export default function ThemeProvider({
  children,
  themeProps,
}: {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}) {
  const { theme } = useTheme()

  return (
    <ThemeContext.Provider value={theme || 'light'} {...themeProps}>
      <NextUIProvider>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
    </ThemeContext.Provider>
  )
}
