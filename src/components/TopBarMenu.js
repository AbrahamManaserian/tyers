import { Box, Button, Grid, Typography } from '@mui/material';
import FlagMenu from './FlagMenu';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext } from 'react';
import { AppContext } from '../App';
import { textSideBar } from '../text';
import { Link } from 'react-router-dom';

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
  const getText = (text) => {
    if (context.language === '1') {
      return textSideBar[text].am;
    } else if (context.language === '2') {
      return textSideBar[text].en;
    } else {
      return textSideBar[text].ru;
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
          <DarkModeOutlinedIcon sx={{ color: 'warning.main' }} />
        )}
      </Box>
      {/* <Typography variant="body1">Sign in</Typography> */}
      <Link to="/signin" style={{ textDecoration: 'none' }}>
        <Button variant="custom">{getText('signIn')}</Button>
      </Link>
    </Grid>
  );
}
