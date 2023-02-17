import { Box, Button, Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
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

import TyreCard from '../components/TyreCard';
import {
  collection,
  deleteField,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const arr = [Image0, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9];
const tyreNames = [
  'Nokian Tyres Hakka Van',
  'Continental ContiPremiumContact 5 Continental ContiPremiumContact 5 Continental ContiPremiumContact 5',
  'Continental Conti4x4Contact',
  'Goodyear EfficientGrip Performance 2',
  'Pirelli Cinturato P1 Verde',
  'Pirelli Formula Energy',
  'Kama Breeze (НК-132)',
  'Tigar High Performance',
  'Maxxis Bravo AT-771',
  'Maxxis Presa SUV SS-01',
];

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const [tyres, setTyres] = useState([]);
  const [price, setPrice] = useState([1, 100]);
  const [chooseTyre, setChooseTyre] = useState('tyre');
  const [choosePassenger, setChoosePassenger] = useState(location.pathname === '/' ? '/' : 'truck-tyres');
  const [inputs, setInputs] = useState({
    width: '',
    height: '',
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

  useEffect(() => {
    let url = new URL(`http://localhost:3000/${location.search}`);
    if (url.search) {
      setInputs({
        width: url.searchParams.get('width'),
        height: url.searchParams.get('height'),
        diameter: url.searchParams.get('diameter'),
        summer: url.searchParams.get('season').includes('summer'),
        winter: url.searchParams.get('season').includes('winter'),
        allSeason: url.searchParams.get('season')?.includes('allseason'),
      });
      const parameters = ['width', 'height', 'diameter', 'minprice', 'maxprice'];
      const queries = [];
      const queriesSeason = [];
      parameters.forEach((item) => {
        if (url.searchParams.get(item)) queries.push(item);
      });
      ['summer', 'winter', 'allseason'].forEach((item) => {
        if (url.searchParams.get('season').includes(item)) queriesSeason.push(item);
      });
      const restQueries = queries.map((item) => {
        if (item === 'minprice') {
          return where('price', '>', +url.searchParams.get(item) * 1000);
        } else if (item === 'maxprice') {
          return where('price', '<', +url.searchParams.get(item) * 1000);
        } else {
          return where(item, '==', url.searchParams.get(item));
        }
      });
      if (queriesSeason.length) restQueries.push(where('season', 'in', queriesSeason));
      async function getData() {
        const data = await getDocs(
          query(
            collection(db, 'tyres'),
            ...restQueries
            // orderBy('price', 'desc'),
            // limit(6)
          )
        );
        setTyres([]);
        data.forEach((item) => {
          setTyres((prev) => [...prev, item.data()]);
        });
      }
      getData();
    } else {
      setInputs({
        width: '',
        height: '',
        diameter: '',
        summer: false,
        winter: false,
        allSeason: false,
      });
      setTyres([]);
    }
  }, [location]);
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

  const handleClickSearch = () => {
    navigate(
      `/?item=${chooseTyre}&width=${inputs.width}&height=${inputs.height}&diameter=${
        inputs.diameter
      }&season=${
        (inputs.summer ? 'summer' : '') +
        (inputs.winter ? 'winter' : '') +
        (inputs.allSeason ? 'allseason' : '')
      }&minprice=${price[0] === 1 ? '' : price[0]}&maxprice=${price[1] === 100 ? '' : price[1]}`
    );
  };

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
            onClick={() => handleClickSearch(chooseTyre)}
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
          {tyres.map((item, index) => {
            // console.log(item);
            return (
              <TyreCard
                getText={getText}
                mode={context.darkMode}
                season={item.season}
                key={index}
                imgUrl={item.smallImage}
                name={item.name}
                width={item.width}
                height={item.height}
                diameter={item.diameter}
                price={item.price}
              />
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

// +(inputs.winter && 'winter') + (inputs.allSeason && 'allseason');