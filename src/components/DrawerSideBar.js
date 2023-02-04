import { Box, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/logoTyres.png';
import { AboutIcon, NewsIcon, PartnerIcon, SaleIcon, TyreIcon, UserIcon, WheelIcon } from '../SVGIcons';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Drawer from '@mui/material/Drawer';
import { AppContext } from '../App';
import { textSideBar } from '../text';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function DrawerSideBarMenu() {
  const [openDrawer, setOPenDrawer] = useState(false);
  const location = useLocation();
  const context = useContext(AppContext);

  // console.log(location.pathname);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOPenDrawer(open);
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
    <Box
      sx={{
        display: { xs: 'flex', lg: 'none' },
        '&:hover': { bgcolor: '#eeeeee' },
        marginTop: '4px',
        // cursor: 'pointer',
        padding: '8px',
        borderRadius: '50%',
      }}
    >
      <FormatListBulletedIcon cursor="pointer" onClick={toggleDrawer(true)} />
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <Box
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{
            overflow: 'scroll',
            padding: '10px 5px 0 10px',
            display: 'flex',
            height: '98vh',
            flexDirection: 'column',
            alignItems: 'center',
            width: '280px',
            // borderRightStyle: 'dashed',
            borderWidth: 1,
            borderColor: '#e0e0e0',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ maxWidth: '200px', paddingBottom: '10px' }}>
            <img src={Logo} style={{ height: 'auto', width: '100%' }} />
          </div>

          <Link
            style={{
              backgroundColor: location.pathname === '/' ? '#e8f5e9' : '',
            }}
            className="linko"
            to="/"
          >
            <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
              <HomeOutlinedIcon
                sx={{
                  fontSize: '30px',
                  color: location.pathname === '/' ? 'greenCustome.main' : 'neutral.main',
                }}
              />
            </Box>
            <Typography
              color={location.pathname === '/' ? 'greenCustome.main' : 'neutral.main'}
              sx={{
                fontSize: '16px',
                fontWeight: location.pathname === '/' ? 500 : 400,
              }}
            >
              {getText('choose')}
            </Typography>
          </Link>
          <Link
            className="linko"
            to="/tyres"
            style={{ backgroundColor: location.pathname === '/tyres' ? '#e8f5e9' : '' }}
          >
            <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
              <TyreIcon color={getColorOfIcon('/tyres')} />
            </Box>

            <Typography
              color={location.pathname === '/tyres' ? 'greenCustome.main' : 'neutral.main'}
              sx={{
                fontSize: '16px',
                fontWeight: location.pathname === '/tyres' ? 500 : 400,
              }}
            >
              {getText('tyres')}
            </Typography>
          </Link>
          <Link
            className="linko"
            to="/wheels"
            style={{ backgroundColor: location.pathname === '/wheels' ? '#e8f5e9' : '' }}
          >
            <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
              <WheelIcon color={getColorOfIcon('/wheels')} />
            </Box>

            <Typography
              color={location.pathname === '/wheels' ? 'greenCustome.main' : 'neutral.main'}
              sx={{
                fontSize: '16px',
                fontWeight: location.pathname === '/wheels' ? 500 : 400,
              }}
            >
              {getText('wheels')}
            </Typography>
          </Link>
          <Link
            className="linko"
            to="/sales"
            style={{ backgroundColor: location.pathname === '/sales' ? '#e8f5e9' : '' }}
          >
            <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
              <SaleIcon color={getColorOfIcon('/sales')} />
            </Box>

            <Typography
              color={location.pathname === '/sales' ? 'greenCustome.main' : 'neutral.main'}
              sx={{
                fontSize: '16px',
                fontWeight: location.pathname === '/sales' ? 500 : 400,
              }}
            >
              {getText('discount')}
            </Typography>
          </Link>
          <Link
            className="linko"
            to="/customers"
            style={{ backgroundColor: location.pathname === '/customers' ? '#e8f5e9' : '' }}
          >
            <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
              <UserIcon color={getColorOfIcon('/customers')} />
            </Box>

            <Typography
              color={location.pathname === '/customers' ? 'greenCustome.main' : 'neutral.main'}
              sx={{
                fontSize: '16px',
                fontWeight: location.pathname === '/customers' ? 500 : 400,
              }}
            >
              {getText('customers')}
            </Typography>
          </Link>

          <Link
            className="linko"
            to="/news"
            style={{ backgroundColor: location.pathname === '/news' ? '#e8f5e9' : '' }}
          >
            <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
              <NewsIcon color={getColorOfIcon('/news')} />
            </Box>
            <Typography
              color={location.pathname === '/news' ? 'greenCustome.main' : 'neutral.main'}
              sx={{
                fontSize: '16px',
                fontWeight: location.pathname === '/news' ? 500 : 400,
              }}
            >
              {getText('news')}
            </Typography>
          </Link>
          <Link
            className="linko"
            to="/partners"
            style={{ backgroundColor: location.pathname === '/partners' ? '#e8f5e9' : '' }}
          >
            <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
              <PartnerIcon color={getColorOfIcon('/partners')} />
            </Box>

            <Typography
              color={location.pathname === '/partners' ? 'greenCustome.main' : 'neutral.main'}
              sx={{
                fontSize: '16px',
                fontWeight: location.pathname === '/partners' ? 500 : 400,
              }}
            >
              {getText('partners')}
            </Typography>
          </Link>
          <Link
            className="linko"
            to="/about"
            style={{ backgroundColor: location.pathname === '/about' ? '#e8f5e9' : '' }}
          >
            <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
              <AboutIcon color={getColorOfIcon('/about')} />
            </Box>
            <Typography
              color={location.pathname === '/about' ? 'greenCustome.main' : 'neutral.main'}
              sx={{
                fontSize: '16px',
                fontWeight: location.pathname === '/about' ? 500 : 400,
              }}
            >
              {getText('about')}
            </Typography>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
}
