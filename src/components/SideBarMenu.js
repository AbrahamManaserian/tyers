import { Box, Button, Grid, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Logo from '../images/logoTyres.png';
import { AboutIcon, NewsIcon, PartnerIcon, SaleIcon, TyreIcon, UserIcon, WheelIcon } from '../SVGIcons';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListIcon from '@mui/icons-material/List';
import Drawer from '@mui/material/Drawer';
import { AppContext } from '../App';
import { textSideBar } from '../text';

export default function BarMenu(props) {
  const [menuLength, setMenuLength] = useState(true);

  const location = useLocation();
  const context = useContext(AppContext);
  console.log(context.language);
  // console.log(location.pathname);

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

  const getText = (text) => {
    if (context.language === '1') {
      return textSideBar[text].am;
    } else if (context.language === '2') {
      return textSideBar[text].en;
    } else {
      return textSideBar[text].ru;
    }
  };
  // console.log(getText('choose'));

  return (
    <div>
      <Box
        sx={{
          marginRight: '30px',
          overflow: 'scroll',
          padding: '0 5px 0 0',
          display: { xs: 'none', lg: 'flex' },
          height: '98vh',
          flexDirection: 'column',
          alignItems: 'center',
          width: menuLength ? '280px' : '80px',
          borderRightStyle: 'dashed',
          borderWidth: 1,
          borderColor: '#e0e0e0',
          alignItems: 'flex-start',
        }}
      >
        <Box
          onClick={() => setMenuLength(!menuLength)}
          sx={{
            display: 'flex',
            borderColor: '#e0e0e0',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '20px',
            left: menuLength ? '275px' : '75px',
            borderStyle: 'dashed',
            borderRadius: '50%',
            height: '25px',
            width: '25px',
            bgcolor: 'white',
            cursor: 'pointer',
          }}
        >
          {menuLength ? (
            <ArrowBackIosIcon sx={{ fontSize: '12px', paddingLeft: '4px', color: '#757575' }} />
          ) : (
            <ArrowForwardIosIcon sx={{ fontSize: '12px', paddingLeft: '4px', color: '#757575' }} />
          )}
        </Box>
        <div style={{ maxWidth: '200px', paddingBottom: '10px' }}>
          <img src={Logo} style={{ height: 'auto', width: '100%' }} />
        </div>

        <Link
          style={{
            flexDirection: menuLength ? 'row' : 'column',
            backgroundColor: location.pathname === '/' ? '#e8f5e9' : '',
          }}
          className="linko"
          to="/"
        >
          <div style={{ padding: '0 15px 0 15px', border: '1px' }}>
            <HomeOutlinedIcon
              sx={{
                fontSize: '30px',
                color: location.pathname === '/' ? 'greenCustome.main' : 'neutral.main',
              }}
            />
          </div>
          <Typography
            color={location.pathname === '/' ? 'greenCustome.main' : 'neutral.main'}
            sx={{
              fontSize: menuLength ? '16px' : '10px',
              fontWeight: location.pathname === '/' ? 500 : 400,
            }}
          >
            {getText('choose')}
          </Typography>
        </Link>
        <Link
          style={{
            flexDirection: menuLength ? 'row' : 'column',
            backgroundColor: location.pathname === '/tyres' ? '#e8f5e9' : '',
          }}
          className="linko"
          to="/tyres"
        >
          <div style={{ padding: '0 15px 0 17px' }}>
            <TyreIcon color={getColorOfIcon('/tyres')} />
          </div>
          <Typography
            color={location.pathname === '/tyres' ? 'greenCustome.main' : 'neutral.main'}
            sx={{
              fontSize: menuLength ? '16px' : '10px',
              fontWeight: location.pathname === '/tyres' ? 500 : 400,
            }}
          >
            {getText('tyres')}
          </Typography>
        </Link>
        <Link
          style={{
            flexDirection: menuLength ? 'row' : 'column',
            backgroundColor: location.pathname === '/wheels' ? '#e8f5e9' : '',
          }}
          className="linko"
          to="/wheels"
        >
          <div style={{ padding: '0 15px 0 15px' }}>
            <WheelIcon color={getColorOfIcon('/wheels')} />
          </div>
          <Typography
            color={location.pathname === '/wheels' ? 'greenCustome.main' : 'neutral.main'}
            sx={{
              fontSize: menuLength ? '16px' : '10px',
              fontWeight: location.pathname === '/wheels' ? 500 : 400,
            }}
          >
            {getText('wheels')}
          </Typography>
        </Link>
        <Link
          style={{
            flexDirection: menuLength ? 'row' : 'column',
            backgroundColor: location.pathname === '/sales' ? '#e8f5e9' : '',
          }}
          className="linko"
          to="/sales"
        >
          <div style={{ padding: '0 15px 0 18px' }}>
            <SaleIcon color={getColorOfIcon('/sales')} />
          </div>
          <Typography
            color={location.pathname === '/sales' ? 'greenCustome.main' : 'neutral.main'}
            sx={{
              fontSize: menuLength ? '16px' : '10px',
              fontWeight: location.pathname === '/sales' ? 500 : 400,
            }}
          >
            {getText('discount')}
          </Typography>
        </Link>
        <Link
          style={{
            flexDirection: menuLength ? 'row' : 'column',
            backgroundColor: location.pathname === '/customers' ? '#e8f5e9' : '',
          }}
          className="linko"
          to="/customers"
        >
          <div style={{ padding: '0 15px 0 15px' }}>
            <UserIcon color={getColorOfIcon('/customers')} />
          </div>
          <Typography
            color={location.pathname === '/customers' ? 'greenCustome.main' : 'neutral.main'}
            sx={{
              fontSize: menuLength ? '16px' : '10px',
              fontWeight: location.pathname === '/customers' ? 500 : 400,
            }}
          >
            {getText('customers')}
          </Typography>
        </Link>

        <Link
          style={{
            flexDirection: menuLength ? 'row' : 'column',
            backgroundColor: location.pathname === '/news' ? '#e8f5e9' : '',
          }}
          className="linko"
          to="/news"
        >
          <div style={{ padding: '0 15px 0 15px' }}>
            <NewsIcon color={getColorOfIcon('/news')} />
          </div>
          <Typography
            color={location.pathname === '/news' ? 'greenCustome.main' : 'neutral.main'}
            sx={{
              fontSize: menuLength ? '16px' : '10px',
              fontWeight: location.pathname === '/news' ? 500 : 400,
            }}
          >
            {getText('news')}
          </Typography>
        </Link>
        <Link
          style={{
            flexDirection: menuLength ? 'row' : 'column',
            backgroundColor: location.pathname === '/partners' ? '#e8f5e9' : '',
            '&:hover': {
              backgroundColor: 'red',
            },
          }}
          className="linko"
          to="/partners"
        >
          <div style={{ padding: '0 15px 0 15px' }}>
            <PartnerIcon color={getColorOfIcon('/partners')} />
          </div>
          <Typography
            color={location.pathname === '/partners' ? 'greenCustome.main' : 'neutral.main'}
            sx={{
              fontSize: menuLength ? '16px' : '10px',
              fontWeight: location.pathname === '/partners' ? 500 : 400,
            }}
          >
            {getText('partners')}
          </Typography>
        </Link>
        <Link
          style={{
            flexDirection: menuLength ? 'row' : 'column',
            backgroundColor: location.pathname === '/about' ? '#e8f5e9' : '',
          }}
          className="linko"
          to="/about"
        >
          <div style={{ padding: '0 15px 0 15px' }}>
            <AboutIcon color={getColorOfIcon('/about')} />
          </div>
          <Typography
            color={location.pathname === '/about' ? 'greenCustome.main' : 'neutral.main'}
            sx={{
              fontSize: menuLength ? '16px' : '10px',
              fontWeight: location.pathname === '/about' ? 500 : 400,
            }}
          >
            {getText('about')}
          </Typography>
        </Link>
      </Box>
    </div>
  );
}

export function DrawerSideBarMenu() {
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
        cursor: 'pointer',
        // padding: '8px',
        borderRadius: '50%',
      }}
    >
      <ListIcon onClick={toggleDrawer(true)} />
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        {/* {list(anchor)} */}
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
            <div style={{ padding: '0 15px 0 15px', border: '1px' }}>
              <HomeOutlinedIcon
                sx={{
                  fontSize: '30px',
                  color: location.pathname === '/' ? 'greenCustome.main' : 'neutral.main',
                }}
              />
            </div>
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
            <div style={{ padding: '0 15px 0 17px' }}>
              <TyreIcon color={getColorOfIcon('/tyres')} />
            </div>
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
            <div style={{ padding: '0 15px 0 15px' }}>
              <WheelIcon color={getColorOfIcon('/wheels')} />
            </div>
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
            <div style={{ padding: '0 15px 0 18px' }}>
              <SaleIcon color={getColorOfIcon('/sales')} />
            </div>
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
            <div style={{ padding: '0 15px 0 15px' }}>
              <UserIcon color={getColorOfIcon('/customers')} />
            </div>
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
            <div style={{ padding: '0 15px 0 15px' }}>
              <NewsIcon color={getColorOfIcon('/news')} />
            </div>
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
            <div style={{ padding: '0 15px 0 15px' }}>
              <PartnerIcon color={getColorOfIcon('/partners')} />
            </div>
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
            <div style={{ padding: '0 15px 0 15px' }}>
              <AboutIcon color={getColorOfIcon('/about')} />
            </div>
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
