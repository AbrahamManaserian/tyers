import { Box, Grid, TextField, Typography } from '@mui/material';

import Slider from '@mui/material/Slider';
import { useState } from 'react';

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
    <Box sx={{ minWidth: '310px', width: '98%', paddingRight: '5px' }}>
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

export default function SettingsTyres({ getText, setPrice, price }) {
  const [value2, setValue2] = useState([20, 37]);
  return (
    <Grid
      item
      // xs
      p="0 10px 5px 5px"
      container
      direction="column"
      sx={{ overflow: 'hidden', maxWidth: { xs: 'auto', sm: 'auto', md: '350px' } }}
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
          p: '10px 5px 5px 10px',
          m: '15px 0 5px 0',
          width: '100%',
          flexWrap: 'wrap',
          borderStyle: 'solid',
          borderWidth: '0.5px',
          borderRadius: '8px',
          // borderColor: 'palette.secondary',
        }}
      >
        <Grid item xs={12} paddingBottom="15px">
          <Typography variant="settingsSmall">{getText('uniquePrice')}</Typography>
        </Grid>
        <Grid item container xs={6} alignItems="center" justifyContent="center">
          <Typography variant="bod2">ot</Typography>
          <TextField
            sx={{
              marginX: '10px',
              width: '120px',
            }}
            size="small"
            // id="outlined-controlled"
            value={price[0] * 1000}
          />
        </Grid>
        <Grid item container xs={6} alignItems="center" justifyContent="center">
          <Typography variant="bod2">ot</Typography>
          <TextField
            sx={{ marginX: '10px', width: '120px' }}
            size="small"
            // id="outlined-controlled"
            value={price[1] * 1000}
          />
        </Grid>
        <Grid item container xs={12} justifyContent="center" paddingTop="10px">
          <PriceSlider getText={getText} setPrice={setPrice} price={price} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Abraham Abraham</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
