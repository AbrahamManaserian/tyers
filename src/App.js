import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBarMenu, { DrawerSideBarMenu } from './components/SideBarMenu';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, createTheme, CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material';
import TopBarMenu from './components/TopBarMenu';
import { amber, deepOrange, grey } from '@mui/material/colors';

export const AppContext = createContext();
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          neutral: {
            main: '#757575',
            light: '#eeeeee',
          },
          greenCustome: {
            main: '#00c853',
            light: '#e8f5e9',
          },

          // palette values for light mode
          // primary: amber,
          // divider: amber[200],
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
        }
      : {
          // palette values for dark mode
          // primary: deepOrange,
          // divider: deepOrange[700],
          neutral: {
            main: '#b0bec5',
            light: '#616161',
          },
          greenCustome: {
            main: '#00c853',
            light: '#e8f5e9',
          },
          background: {
            default: '#212121',
            // paper: deepOrange[900],
          },
          // text: {
          //   primary: '#fff',
          //   secondary: grey[500],
          // },
        }),
  },
});

function App() {
  const localLanguage = localStorage.getItem('language');
  const localDarkMode = localStorage.getItem('darkMode');

  const [darkMode, setDarkMode] = useState(localDarkMode || 'light');
  const [language, setLanguage] = useState(localLanguage || '1');
  const theme = createTheme(getDesignTokens(darkMode || 'light'));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider
        value={{
          language: language,
          setLanguage: setLanguage,
          darkMode: darkMode,
          setDarkMode: setDarkMode,
        }}
      >
        <Grid item container xs={12} padding="0 8px 0 8px" alignItems="flex-start">
          <SideBarMenu />
          <Grid item xs container alignItems="center">
            <DrawerSideBarMenu />
            <TopBarMenu />
            <Outlet />
          </Grid>
        </Grid>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
