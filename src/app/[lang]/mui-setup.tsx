// src/app/MuiSetup.tsx
'use client'

import {
  CssBaseline,
  ThemeProvider,
  PaletteMode,
  ThemeOptions,
} from '@mui/material'
import { ReactNode, useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'

// import { muiTheme } from './mui-theme'

type Props = {
  children: ReactNode
}

export const MuiThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<PaletteMode>('light')

  const getDesignTokens: ThemeOptions | any = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            // primary: {
            //   light: '#757ce8',
            //   main: '#3f50b5',
            //   dark: '#002884',
            //   contrastText: '#fff',
            // },
          }
        : {
            // palette values for dark mode
            // primary: {
            //   light: '#ff7961',
            //   main: '#f44336',
            //   dark: '#ba000d',
            //   contrastText: '#000',
            // },
          }),
    },
  })
  const muiTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  // Update the theme only if the mode changes
  return (
    <>
      <CssBaseline />
      {/* MUI (but actually underlying Emotion) isn't ready to work with Next's experimental `app/` directory feature.
          I'm using the lowest-code approach suggested by this guy here: https://github.com/emotion-js/emotion/issues/2928#issuecomment-1386197925 */}
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </>
  )
}
