import { alpha, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { textHomePage } from '../text';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { TyreBalanceIcon, TyreIcon, WheelIcon } from '../SVGIcons';
import styled from '@emotion/styled';

const ButtonBox = styled(Box)(({ theme }) => ({
  overflow: 'scroll',
  padding: '4px 8px 4px 8px',
  display: 'flex',
  alignItems: 'center',

  flexDirection: {
    [theme.breakpoints.values.xs]: 'column',
  },
  // width: '100px',
  cursor: 'pointer',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: theme.palette.neutral.light,
  },
  //
  // '& .MuiSlider-thumb': {
  //   '&:hover, &.Mui-focusVisible': {
  //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
  //   },
  //   '&.Mui-active': {
  //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
  //   },
  // },
}));

export default function HomePage() {
  const context = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [chooseType, setChooseType] = useState('tyre');
  const [tab, setTab] = useState(location.pathname === '/' ? '/' : 'truck-tyres');
  const [inputs, setInputs] = useState({
    width: '',
  });

  const handleChangeInputs = (event, name) => {
    console.log(event.target);
    setInputs({ ...inputs, [name]: event.target.value });
  };
  const handleChange = (event, newValue) => {
    setTab(newValue);
    navigate(newValue);
  };
  console.log(inputs);

  const getText = (text) => {
    if (context.language === '1') {
      return textHomePage[text].am;
    } else if (context.language === '2') {
      return textHomePage[text].en;
    } else {
      return textHomePage[text].ru;
    }
  };
  const handleChoose = (type) => {
    setChooseType(type);
  };
  return (
    <Grid item container spacing={1} xs={12} overflow="scroll" flexWrap="wrap">
      <Grid item xs={12} container justifyContent="center">
        <Tabs
          variant="scrollable"
          value={tab}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          // aria-label="secondary tabs example"
        >
          <Tab sx={{ maxWidth: { xs: '160px', sm: '100%' } }} value="/" label={getText('passenger')} />
          <Tab sx={{ maxWidth: { xs: '160px', sm: '100%' } }} value="truck-tyres" label={getText('trucks')} />
        </Tabs>
      </Grid>
      <Grid item xs={12} container sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}>
        <Button
          onClick={() => setChooseType('tyre')}
          variant="outlined"
          color="success"
          sx={{
            textTransform: 'none',
            bgcolor: chooseType === 'tyre' ? 'greenCustome.light' : '',
            marginRight: '10px',
            '&:hover': {
              bgcolor: 'greenCustome.light',
            },
          }}
        >
          {getText('chooseTyre')}
        </Button>
        <Button
          onClick={() => setChooseType('wheel')}
          variant="outlined"
          color="success"
          sx={{
            textTransform: 'none',
            bgcolor: chooseType !== 'tyre' ? 'greenCustome.light' : '',
            '&:hover': {
              bgcolor: 'greenCustome.light',
            },
          }}
        >
          {getText('chooseWheel')}
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        container
        sx={{
          justifyContent: { xs: 'center', sm: 'flex-start' },
          margin: '25px',
          // border: 1,
          // padding: '40px',
        }}
      >
        <FormControl variant="standard" sx={{ m: 1, minWidth: { xs: '100%', sm: 120 } }}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={inputs.width}
            onChange={(e) => handleChangeInputs(e, 'width')}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: { xs: '100%', sm: 120 } }}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={inputs.width}
            onChange={(e) => handleChangeInputs(e, 'width')}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* <Outlet /> */}
    </Grid>
  );
}
