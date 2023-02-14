import { Box, Button, Grid, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { textHomePage } from '../text';
import SearchIcon from '@mui/icons-material/Search';
import ChooseTyres from '../components/ChooseTyres';
import ChooseWheels from '../components/ChooseWheels';
import Settings, { OpenSettingsDrawer } from '../components/SettingsTyres';
import { SettingsIcon } from '../SVGIcons';
import Image0 from '../images/tyres/0.jpeg';
import Image1 from '../images/tyres/1.webp';
import Image2 from '../images/tyres/2.jpeg';
import Image3 from '../images/tyres/3.jpeg';
import Image4 from '../images/tyres/4.webp';
import Image5 from '../images/tyres/5.jpeg';
import Image6 from '../images/tyres/6.webp';
import Image7 from '../images/tyres/7.webp';
import Image8 from '../images/tyres/8.webp';
import Image9 from '../images/tyres/9.webp';

const arr = [Image0, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];

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

  function getText(text) {
    if (context.language === '1') {
      return textHomePage[text].am;
    } else if (context.language === '2') {
      return textHomePage[text].en;
    } else {
      return textHomePage[text].ru;
    }
  }

  return (
    <Grid padding="8px" item xs={12} container justifyContent="flex-start" alignItems="flex-start">
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
        <Grid
          p={{ xs: '8px 5px 0 5px', sm: '12px 5px 0 5px' }}
          container
          justifyContent="space-between"
          alignItems="flex-end"
          item
          xs={12}
        >
          {arr.map((item, index) => {
            return (
              <Box key={index} sx={{ maxWidth: { xs: '50%', sm: '150px' }, paddingRight: '2px' }}>
                <img src={item} style={{ width: '100%', height: 'auto' }} />
              </Box>
            );
          })}
        </Grid>
        <OpenSettingsDrawer getText={getText} setPrice={setPrice} price={price} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md="auto"
        sx={{ display: { xs: 'none', sm: 'none', md: 'grid' } }}
        container
        justifyContent="center"
      >
        <Settings getText={getText} setPrice={setPrice} price={price} />
      </Grid>
    </Grid>
  );
}
