import {
  alpha,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { textHomePage } from '../text';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const widthPassenger = [
  135, 145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325, 335,
  345, 355, 28, 30, 31, 32, 33, 35, 37,
];
const profilePassenger = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 85, 90, 100];
const diameterPassenger = [12, 13, 14, 15, 16, '16,5', 17, 18, 19, 20, 21, 22, '22,5', 23, 24];

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
    profile: '',
    diameter: '',
    summer: false,
    winter: false,
    allSeason: false,
  });

  const handleChangeInputs = (event, name) => {
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
            margin: { xs: '5px', sm: '5px 5px 5px 35px' },
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
            margin: '5px',
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
      <Grid item xs={12} border={{ xs: 1, sm: 0 }} borderRadius="10px" m="30px">
        <Grid
          padding="5px 10px 0 0"
          item
          xs={12}
          container
          sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}
        >
          <Box minWidth={{ xs: '100%', sm: 120 }} p="5px">
            <FormControl sx={{ minWidth: { xs: '100%', sm: 140 } }} size="small">
              <InputLabel id="demo-simple-select-standard-label">{getText('width')}</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={inputs.width}
                onChange={(e) => handleChangeInputs(e, 'width')}
                label={getText('width')}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: '60vh',
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {widthPassenger.map((item, index) => {
                  return (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box minWidth={{ xs: '100%', sm: 120 }} p="5px">
            <FormControl sx={{ minWidth: { xs: '100%', sm: 140 } }} size="small">
              <InputLabel id="demo-simple-select-standard-label">{getText('profile')}</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={inputs.profile}
                onChange={(e) => handleChangeInputs(e, 'profile')}
                label={getText('profile')}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: '60vh',
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {profilePassenger.map((item, index) => {
                  return (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Box minWidth={{ xs: '100%', sm: 120 }} p="5px">
            <FormControl sx={{ minWidth: { xs: '100%', sm: 140 } }} size="small">
              <InputLabel id="demo-simple-select-standard-label">{getText('diameter')}</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={inputs.diameter}
                onChange={(e) => handleChangeInputs(e, 'diameter')}
                label={getText('diameter')}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: '60vh',
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {diameterPassenger.map((item, index) => {
                  return (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid
          padding="0 0 0 5px"
          item
          xs={12}
          container
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}
        >
          {['summer', 'winter', 'allSeason'].map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox
                  color="success"
                  checked={inputs[item]}
                  onChange={() => setInputs({ ...inputs, [item]: !inputs[item] })}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label={getText([item])}
            />
          ))}
        </Grid>
      </Grid>
      {/* <Outlet /> */}
    </Grid>
  );
}
