import { Box, Button, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import { SettingsIcon } from '../SVGIcons';
import FlagMenu from './FlagMenu';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext, useState } from 'react';
import { AppContext } from '../App';

export default function TopBarMenu() {
  const context = useContext(AppContext);
  const handleCLick = () => {
    if (context.darkMode === 'light') {
      context.setDarkMode('dark');
      localStorage.setItem('darkMode', 'dark');
    } else {
      context.setDarkMode('light');
      localStorage.setItem('darkMode', 'light');
    }
  };

  return (
    <Grid item xs lg={12} justifyContent="flex-end" alignItems="center" container paddingTop="5px">
      <FlagMenu />
      <Box
        onClick={handleCLick}
        sx={{
          display: 'flex',
          cursor: 'pointer',
          padding: '8px',
          '&:hover': {
            bgcolor: 'neutral.light',
            justifyContent: 'center',
            //   padding: '10px',
          },
          borderRadius: '50%',
          mx: '5px',
        }}
      >
        {context.darkMode === 'dark' ? (
          <LightModeOutlinedIcon sx={{ color: 'greenCustome.main' }} />
        ) : (
          <DarkModeOutlinedIcon sx={{ color: 'greenCustome.main' }} />
        )}
      </Box>
      <Button>Sign in</Button>
    </Grid>
  );
}
