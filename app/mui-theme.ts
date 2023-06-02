// src/app/theme.ts
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  status: {
    danger: 'red',
  },
});
