import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';

import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { SettingsIcon } from '../SVGIcons';

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export function PriceSlider({ setPrice, price, getText }) {
  // const [price, setValue2] = useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setPrice([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setPrice([clamped - minDistance, clamped]);
      }
    } else {
      setPrice(newValue);
    }
  };

  return (
    <Box sx={{ minWidth: '270px', width: '98%', paddingRight: '5px' }}>
      <Slider
        size="small"
        value={price}
        onChange={handleChange2}
        disableSwap
        color="success"
        min={1}
        max={200}
      />
    </Box>
  );
}

const manufacturers = [
  'MICHELIN',
  'Nokian Tyres',
  'Continental',
  'Yokohama',
  'Goodyear',
  'Pirelli',
  'Bridgestone',
  'Hankook',
  'Gislaved',
  'Marshal',
  'Matador',
  'Nexen',
  'GT Radial',
  'HiFly',
  'Kama',
  'Kormoran',
  'Triangle',
  'Viatti',
  'Altenzo',
  'BFGoodrich',
  'Cachland',
  'Compasal',
  'Cordiant',
  'Dunlop JP',
  'Goodride',
  'Maxxis',
  'Mickey Thompson',
  'Nitto',
  'Onyx',
  'Rapid',
  'Roadcruza',
  'Sailun',
  'Sunfull',
  'Sunny',
  'Tigar',
  'Toyo',
  'Vredestein',
  'Tracmax',
];

export default function SettingsTyres({ getText, setPrice, price, toggleDrawer }) {
  const [value2, setValue2] = useState([20, 37]);
  const [carType, setCarType] = useState({
    passenger: false,
    SUV: false,
    smallTruck: false,
  });
  const [manufacturersState, setManufacturersState] = useState({
    MICHELIN: false,
    'Nokian Tyres': false,
    Continental: false,
    Yokohama: false,
    Goodyear: false,
    Pirelli: false,
    Bridgestone: false,
    Hankook: false,
    Gislaved: false,
    Marshal: false,
    Matador: false,
    Nexen: false,
    'GT Radial': false,
    HiFly: false,
    Kama: false,
    Kormoran: false,
    Triangle: false,
    Viatti: false,
    Altenzo: false,
    BFGoodrich: false,
    Cachland: false,
    Compasal: false,
    Cordiant: false,
    'Dunlop JP': false,
    Goodride: false,
    Maxxis: false,
    'Mickey Thompson': false,
    Nitto: false,
    Onyx: false,
    Rapid: false,
    Roadcruza: false,
    Sailun: false,
    Sunfull: false,
    Sunny: false,
    Tigar: false,
    Toyo: false,
    Vredestein: false,
    Tracmax: false,
  });
  const handleChange = (event) => {
    if (event.target.value) setCarType({ ...carType, [event.target.value]: !carType[event.target.value] });
  };
  const handleChangeManufactures = (event) => {
    if (event.target.value)
      setManufacturersState({
        ...manufacturersState,
        [event.target.value]: !manufacturersState[event.target.value],
      });
  };
  return (
    <Grid
      item
      // xs
      p="0 10px 5px 5px"
      container
      direction="column"
      sx={{ overflow: 'scroll', maxWidth: { xs: 'auto', sm: 'auto', md: '300px' } }}
    >
      <Typography
        // p="5px"
        variant="body2"
        color="secondary"
        sx={{ textDecorationLine: 'underline', textUnderlineOffset: '5px' }}
      >
        {getText('settings')}
      </Typography>
      <Grid
        item
        xs
        container
        sx={{
          p: { xs: '0 5px 5px 10px', sm: '10px 5px 5px 10px' },
          m: '15px 0 5px 0',
          width: '100%',
          flexWrap: 'wrap',
          borderStyle: 'solid',
          borderWidth: '0.5px',
          borderRadius: '8px',
          // borderColor: 'palette.secondary',
        }}
      >
        <Grid item xs={12} paddingBottom={{ xs: '10px', sm: '15px' }}>
          <Typography variant="settingsSmall">{getText('uniquePrice')}</Typography>
        </Grid>
        <Grid item container xs={6} alignItems="center" justifyContent="center">
          <Typography fontSize="12px">{getText('from')} </Typography>
          <TextField
            sx={{
              marginX: '5px',
              width: '120px',
            }}
            size="small"
            // id="outlined-controlled"
            value={price[0] * 1000}
            type="number"
            onChange={(event) => {
              setPrice([+event.target.value / 1000, price[1]]);
            }}
          />
        </Grid>
        <Grid item container xs={6} alignItems="center" justifyContent="center">
          <Typography fontSize="12px">{getText('to')} </Typography>
          <TextField
            sx={{ marginX: '5px', width: '120px' }}
            size="small"
            // id="outlined-controlled"
            value={price[1] * 1000}
            type="number"
            onChange={(event) => {
              setPrice([price[0], +event.target.value / 1000]);
            }}
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          alignItems="flex-start"
          justifyContent="center"
          paddingTop={{ xs: '', sm: '10px' }}
        >
          <PriceSlider getText={getText} setPrice={setPrice} price={price} />
        </Grid>
        <Grid item xs={12} paddingBottom={{ xs: '10px', sm: '10px' }}>
          <Typography variant="settingsSmall">{getText('carType')}</Typography>
        </Grid>
        <Grid item xs={12} paddingBottom={{ xs: '10px', sm: '15px' }}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onClick={handleChange}
            >
              {['passenger', 'SUV', 'smallTruck'].map((item, index) => {
                return (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={
                      <Radio
                        checked={carType[item]}
                        sx={{
                          '& .MuiSvgIcon-root': {
                            fontSize: '14px',
                          },
                        }}
                      />
                    }
                    label={<Typography sx={{ fontSize: '13px' }}>{getText(item)} </Typography>}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} paddingBottom={{ xs: '10px', sm: '10px' }}>
          <Typography variant="settingsSmall">{getText('manufacturers')}</Typography>
        </Grid>
        <Grid item xs={6} paddingBottom={{ xs: '10px', sm: '15px' }}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-"
              name="controlled-radio-buttons-"
              onClick={handleChangeManufactures}
            >
              {manufacturers.map((item, index) => {
                if (index < 19)
                  return (
                    <Grid item xs={6} key={index}>
                      <FormControlLabel
                        value={item}
                        control={
                          <Radio
                            checked={manufacturersState[item]}
                            sx={{
                              '& .MuiSvgIcon-root': {
                                fontSize: '14px',
                              },
                            }}
                          />
                        }
                        label={<Typography sx={{ fontSize: '13px' }}>{item} </Typography>}
                      />
                    </Grid>
                  );
              })}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6} paddingBottom={{ xs: '10px', sm: '15px' }}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-"
              name="controlled-radio-buttons-"
              onClick={handleChangeManufactures}
            >
              {manufacturers.map((item, index) => {
                if (index > 18)
                  return (
                    <Grid item xs={6} key={index}>
                      <FormControlLabel
                        value={item}
                        control={
                          <Radio
                            checked={manufacturersState[item]}
                            sx={{
                              '& .MuiSvgIcon-root': {
                                fontSize: '14px',
                              },
                            }}
                          />
                        }
                        label={<Typography sx={{ fontSize: '13px' }}>{item} </Typography>}
                      />
                    </Grid>
                  );
              })}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6} paddingBottom={{ xs: '10px', sm: '15px' }}>
          <Button variant="outlined" sx={{ borderRadius: '12px', textTransform: 'none' }} color="success">
            {getText('apply')}
          </Button>
        </Grid>
        <Grid item xs={6} paddingBottom={{ xs: '10px', sm: '15px' }}>
          <Button variant="outlined" sx={{ borderRadius: '12px', textTransform: 'none' }} color="error">
            {getText('reset')}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export function OpenSettingsDrawer({ getText, setPrice, price }) {
  const [openDrawer, setOPenDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOPenDrawer(open);
  };
  return (
    <>
      <Box
        onClick={toggleDrawer(true)}
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'none' },
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          position: 'fixed',
          top: '90vh',
          right: '15px',
          backgroundColor: '#263238',
          height: '40px',
          width: '40px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#37474f',
          },
        }}
      >
        <SettingsIcon />
      </Box>
      <Drawer anchor="bottom" open={openDrawer} onClose={toggleDrawer(false)}>
        <Box paddingLeft="5px">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
              close
            </Button>
          </Box>
          <SettingsTyres toggleDrawer={toggleDrawer} getText={getText} setPrice={setPrice} price={price} />
        </Box>
      </Drawer>
    </>
  );
}
