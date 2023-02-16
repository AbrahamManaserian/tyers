import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBarMenu from './components/SideBarMenu';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, createTheme, CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material';
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
            light: '#454944',
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
              {
                props: { variant: 'customHome' },
                style: {
                  margin: '2px',
                  borderStyle: 'solid',
                  borderWidth: 0.2,
                  textTransform: 'none',
                  color: '#546e7a',
                  padding: '4px 2px 2px 4px',

                  '@media (min-width:600px)': {
                    fontSize: '14px',
                    minWidth: '100px',
                  },
                  minWidth: '80px',
                  borderRadius: '9px',
                  fontSize: '12px',
                  // '&:hover': {
                  //   background: '#eeeeee',
                  // },
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
          MuiTypography: {
            variants: [
              {
                props: { variant: 'settingsSmall' },
                style: {
                  fontSize: '10px',
                  fontWeight: 600,
                  textDecorationLine: 'underline',
                  textUnderlineOffset: '5px',
                  // color: '#9c27b0',
                },
              },
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
              {
                props: { variant: 'customHome' },
                style: {
                  margin: '2px',
                  borderStyle: 'solid',
                  borderWidth: 0.2,
                  textTransform: 'none',
                  color: '#cfd8dc',
                  padding: '2px 2px 2px 0',
                  borderRadius: '9px',
                  '@media (min-width:600px)': {
                    fontSize: '14px',
                    minWidth: '100px',
                  },
                  minWidth: '80px',
                  fontSize: '10px',
                  // '&:hover': {
                  //   background: '#616161',
                  // },
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
          MuiTypography: {
            variants: [
              {
                props: { variant: 'settingsSmall' },
                style: {
                  fontSize: '10px',
                  fontWeight: 600,
                  textDecorationLine: 'underline',
                  textUnderlineOffset: '5px',
                  // color: '#ba68c8',
                },
              },
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
    <div style={{ position: 'relative' }}>
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
          <Grid item container xs={12} alignItems="flex-start">
            <SideBarMenu />
            <Grid item xs container alignItems="center">
              <Grid
                item
                xs
                container
                alignItems="center"
                sx={{
                  // boxShadow: '0 1px 8px -10px rgba(0, 0, 0, 0.1), 0 7px 10px 0 rgba(0, 0, 0, 0.1)',
                  boxShadow: '0 1px 8px -10px rgb(117, 117, 117, 0.1), 0 7px 10px 0 rgb(117, 117, 117, 0.1)',
                  position: '-webkit-sticky',
                  position: 'sticky',
                  top: 0,
                  zIndex: 2,
                }}
              >
                <DrawerSideBarMenu />
                <TopBarMenu />
              </Grid>
              <Outlet />
            </Grid>
          </Grid>
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;


