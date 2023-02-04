import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBarMenu from './components/SideBarMenu';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import TopBarMenu from './components/TopBarMenu';
import DrawerSideBarMenu from './components/DrawerSideBar';

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
          greyCustom: {
            main: '#37474f',
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
          greyCustom: {
            main: '#cfd8dc',
          },
          // text: {
          //   primary: '#fff',
          //   secondary: grey[500],
          // },
        }),
  },
  components: {
    mode,
    ...(mode === 'light'
      ? {
          MuiButton: {
            variants: [
              {
                props: { variant: 'custom' },
                style: {
                  textTransform: 'none',
                  color: '#546e7a',
                  padding: '2px 2px 2px 0',
                  fontSize: '15px',
                  borderRadius: '9px',
                  '&:hover': {
                    background: '#eeeeee',
                  },
                },
              },
              // {
              //   props: { variant: 'dashed', color: 'secondary' },
              //   style: {
              //     border: `4px dashed #37474f`,
              //   },
              // },
            ],
          },
        }
      : {
          MuiButton: {
            variants: [
              {
                props: { variant: 'custom' },
                style: {
                  textTransform: 'none',
                  color: '#cfd8dc',
                  padding: '2px 2px 2px 0',
                  fontSize: '15px',
                  borderRadius: '9px',
                  '&:hover': {
                    background: '#616161',
                  },
                },
              },
              // {
              //   props: { variant: 'dashed', color: 'secondary' },
              //   style: {
              //     border: `4px dashed '#37474f'`,
              //   },
              // },
            ],
          },
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
