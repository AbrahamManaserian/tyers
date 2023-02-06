import { Badge, Box, Button, Grid, styled, Typography } from '@mui/material';
import FlagMenu from './FlagMenu';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext } from 'react';
import { AppContext } from '../App';
import { textSideBar } from '../text';
import { Link, useLocation } from 'react-router-dom';
import { BusketIcon } from '../SVGIcons';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 15.5,
    top: 9,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function TopBarMenu() {
  const context = useContext(AppContext);
  const location = useLocation();

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
  function getColorOfIcon(urlPath) {
    if (urlPath === location.pathname) {
      return '#00c853';
    } else {
      if (context.darkMode === 'light') {
        return '#757575';
      } else {
        return '#b0bec5';
      }
    }
  }
  return (
    <Grid
      sx={{
        bgcolor: 'background.default',
      }}
      item
      xs
      lg={12}
      justifyContent="flex-end"
      alignItems="center"
      container
      paddingTop="5px"
    >
      <Link to="/basket">
        <Box
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
          <StyledBadge badgeContent={0} max={9} color="secondary" showZero>
            <BusketIcon
              colorBody={context.darkMode === 'light' ? '#757575' : '#b0bec5'}
              colorWheel="#00c853"
            />
          </StyledBadge>
        </Box>
      </Link>
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
          <DarkModeOutlinedIcon color="success" />
        )}
      </Box>
      {/* <Typography variant="body1">Sign in</Typography> */}
      <Link to="/signin" style={{ textDecoration: 'none' }}>
        <Button variant="custom">{getText('signIn')}</Button>
      </Link>
    </Grid>
  );
}
