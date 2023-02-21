import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { createContext, useContext, useState } from 'react';
import { AppContext } from '../App';
import { textHomePage } from '../text';

const widthPassenger = [
  135, 145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325, 335,
  345, 355, 28, 30, 31, 32, 33, 35, 37,
];
const profilePassenger = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 85, 90, 100];
const diameterPassenger = [12, 13, 14, 15, 16, '16,5', 17, 18, 19, 20, 21, 22, '22,5', 23, 24];

export default function ChooseTyres({ inputs, setInputs }) {
  const context = useContext(AppContext);
  const handleChangeInputs = (event, name) => {
    setInputs({ ...inputs, [name]: event.target.value });
  };
  const getText = (text) => {
    if (context.language === '1') {
      return textHomePage[text].am;
    } else if (context.language === '2') {
      return textHomePage[text].en;
    } else {
      return textHomePage[text].ru;
    }
  };
  return (
    <Box sx={{ width: { xs: '100%', sm: '100%', md: 'auto' } }}>
      <Grid item xs container direction="column">
        <Grid item xs container>
          <Box minWidth={{ xs: '100%', sm: '100%', md: 140 }} p="5px">
            <FormControl sx={{ minWidth: { xs: '100%', sm: '100%', md: 140 } }} size="medium">
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
                      maxHeight: '85vh',
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>{getText('all')} </em>
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
          <Box minWidth={{ xs: '100%', sm: '100%', md: 120 }} p="5px">
            <FormControl sx={{ minWidth: { xs: '100%', sm: '100%', md: 140 } }} size="medium">
              <InputLabel id="demo-simple-select-standard-label">{getText('profile')}</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={inputs.height}
                onChange={(e) => handleChangeInputs(e, 'height')}
                label={getText('profile')}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: '85vh',
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>{getText('all')}</em>
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
          <Box minWidth={{ xs: '100%', sm: '100%', md: 120 }} p="5px">
            <FormControl sx={{ minWidth: { xs: '100%', sm: '100%', md: 140 } }} size="medium">
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
                      maxHeight: '85vh',
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>{getText('all')}</em>
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
        <Grid padding="0 0 0 5px" item xs container>
          {['summer', 'winter', 'allSeason'].map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox
                  color="success"
                  checked={inputs[item]}
                  onChange={() => {
                    setInputs({ ...inputs, [item]: !inputs[item] });
                  }}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label={getText([item])}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
