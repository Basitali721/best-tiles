/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable perfectionist/sort-imports */
import { CssBaseline } from '@mui/material';
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { useState } from 'react';
import AppContext from './context-api';

// ----------------------------------------------------------------------

export default function App() {
  const [mode, setMode] = useState(localStorage.getItem('mode') ?? 'dark');
  const [pageTitle, setPageTitle] = useState('');
  useScrollToTop();

  return (
    <AppContext.Provider value={{ mode, setMode, pageTitle, setPageTitle }}>
      <ThemeProvider>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
