import { Box, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Logo from '../images/logoTyres.png';
import {
  AboutIcon,
  NewsIcon,
  PartnerIcon,
  SaleIcon,
  TyreBalanceIcon,
  TyreIcon,
  UserIcon,
  WheelIcon,
} from '../SVGIcons';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { AppContext } from '../App';
import { textSideBar } from '../text';

export default function SideBarMenu(props) {
  const [menuLength, setMenuLength] = useState(true);
  const location = useLocation();
  const context = useContext(AppContext);

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
    <Box
      sx={{
        position: '-webkit-sticky',
        position: 'sticky',
        top: 0,
        zIndex: 700,
        overflow: 'scroll',
        padding: '0 8px 0 8px',
        display: { xs: 'none', lg: 'flex' },
        height: '100vh',
        flexDirection: 'column',
        width: menuLength ? '220px' : '100px',
        borderRightStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#e0e0e0',
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
          top: '15px',
          left: menuLength ? '207px' : '87px',
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
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', paddingY: '10px' }}>
        <img src={Logo} style={{ height: 'auto', maxWidth: '150px' }} />
      </Box>
      <Link
        style={{
          flexDirection: menuLength ? 'row' : 'column',
          backgroundColor: location.pathname === '/' || location.pathname === '/truck-tyres' ? '#e8f5e9' : '',
        }}
        className="linko"
        to="/"
      >
        <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
          <HomeOutlinedIcon
            sx={{
              fontSize: '30px',
              color:
                location.pathname === '/' || location.pathname === '/truck-tyres'
                  ? 'greenCustome.main'
                  : 'neutral.main',
            }}
          />
        </Box>
        <Typography
          color={
            location.pathname === '/' || location.pathname === '/truck-tyres'
              ? 'greenCustome.main'
              : 'neutral.main'
          }
          sx={{
            fontSize: menuLength ? '16px' : '10px',
            fontWeight: location.pathname === '/' || location.pathname === '/truck-tyres' ? 500 : 400,
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
        <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
          <TyreIcon color={getColorOfIcon('/tyres')} />
        </Box>
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
        <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
          <WheelIcon color={getColorOfIcon('/wheels')} />
        </Box>
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
        <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
          <SaleIcon color={getColorOfIcon('/sales')} />
        </Box>
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
        <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
          <UserIcon color={getColorOfIcon('/customers')} />
        </Box>
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
        }}
        className="linko"
        to="/partners"
      >
        <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
          <PartnerIcon color={getColorOfIcon('/partners')} />
        </Box>
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
        <Box sx={{ padding: '0 15px 0 15px', display: 'flex' }}>
          <AboutIcon color={getColorOfIcon('/about')} />
        </Box>
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
      <Link
        style={{
          flexDirection: menuLength ? 'row' : 'column',
          backgroundColor: location.pathname === '/balance' ? '#e8f5e9' : '',
        }}
        className="linko"
        to="/balance"
      >
        <Box sx={{ padding: '5px 10px 0 15px', display: 'flex' }}>
          <TyreBalanceIcon color={getColorOfIcon('/balance')} />
        </Box>
        <Typography
          color={location.pathname === '/balance' ? 'greenCustome.main' : 'neutral.main'}
          sx={{
            fontSize: menuLength ? '16px' : '10px',
            textAlign: !menuLength ? 'center' : 'left',
            fontWeight: location.pathname === '/balance' ? 500 : 400,
          }}
        >
          {getText('balance')}
        </Typography>
      </Link>
    </Box>
  );
}
