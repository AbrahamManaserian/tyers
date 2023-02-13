import { Box, Button, Grid, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { textHomePage } from '../text';
import SearchIcon from '@mui/icons-material/Search';
import ChooseTyres from '../components/ChooseTyres';
import ChooseWheels from '../components/ChooseWheels';
import Settings from '../components/SettingsTyres';

export default function HomePage() {
  const [price, setPrice] = useState([1, 200]);
  const context = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [chooseTyre, setChooseTyre] = useState('tyre');
  const [choosePassenger, setChoosePassenger] = useState(location.pathname === '/' ? '/' : 'truck-tyres');
  const [inputs, setInputs] = useState({
    width: '',
    profile: '',
    diameter: '',
    summer: false,
    winter: false,
    allSeason: false,
  });
  const [inputsWheels, setInputsWheels] = useState({
    width: '',
    profile: '',
    diameter: '',
    bolt: '',
  });

  const handleClickPassenger = (name) => {
    setChoosePassenger(name);
    navigate(name);
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
    <Grid item xs={12} container justifyContent="flex-start" alignItems="flex-start">
      <Grid item xs={12} sm={12} md container alignItems="flex-start">
        {chooseTyre === 'tyre' && <ChooseTyres inputs={inputs} setInputs={setInputs} />}
        {chooseTyre === 'wheel' && (
          <ChooseWheels inputsWheels={inputsWheels} setInputsWheels={setInputsWheels} />
        )}
        <Grid
          item
          xs={12}
          sm={12}
          md="auto"
          p="5px 5px 5px 3px"
          container
          direction={{ xs: 'row', sm: 'row', md: 'column' }}
          justifyContent="center"
          minWidth="220px"
        >
          <Grid>
            <Button
              onClick={() => setChooseTyre('tyre')}
              variant="customHome"
              sx={{
                color: 'success.main',
                bgcolor: chooseTyre === 'tyre' ? 'greenCustome.light' : '',
                '&:hover': {
                  bgcolor: 'greenCustome.light',
                },
              }}
            >
              {getText('chooseTyre')}
            </Button>
            <Button
              onClick={() => setChooseTyre('wheel')}
              variant="customHome"
              sx={{
                color: 'success.main',
                bgcolor: chooseTyre !== 'tyre' ? 'greenCustome.light' : '',
                '&:hover': {
                  bgcolor: 'greenCustome.light',
                },
              }}
            >
              {getText('chooseWheel')}
            </Button>
          </Grid>
          <Grid>
            <Button
              onClick={() => handleClickPassenger('/')}
              variant="customHome"
              sx={{
                color: 'success.main',
                bgcolor: choosePassenger === '/' ? 'greenCustome.light' : '',
                '&:hover': {
                  bgcolor: 'greenCustome.light',
                },
              }}
            >
              {getText('passenger')}
            </Button>
            <Button
              onClick={() => handleClickPassenger('truck-tyres')}
              variant="customHome"
              sx={{
                color: 'success.main',
                bgcolor: choosePassenger === 'truck-tyres' ? 'greenCustome.light' : '',
                '&:hover': {
                  bgcolor: 'greenCustome.light',
                },
              }}
            >
              {getText('trucks')}
            </Button>
          </Grid>
        </Grid>

        <Grid p="5px" container alignContent="flex-start" alignItems="flex-end" item xs={12}>
          <Button
            startIcon={<SearchIcon />}
            sx={{ minWidth: '140px', textTransform: 'none', width: { xs: '100%', sm: 'auto' } }}
            variant="outlined"
          >
            {getText('search')}
          </Button>
        </Grid>
        <Grid p="5px" container alignContent="flex-start" alignItems="flex-end" item xs={12}>
          {/* <Typography p={1}>Abraham</Typography> */}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md="auto" container justifyContent="center">
        <Settings getText={getText} setPrice={setPrice} price={price} />
      </Grid>
    </Grid>
  );
}
