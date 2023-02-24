import { Box, Button, Grid, LinearProgress, Pagination, Skeleton, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { textHomePage } from '../text';
import SearchIcon from '@mui/icons-material/Search';
import ChooseTyres from '../components/ChooseTyres';
import ChooseWheels from '../components/ChooseWheels';
import Settings, { OpenSettingsDrawer } from '../components/SettingsTyres';

import TyreCard from '../components/TyreCard';
import {
  collection,
  deleteField,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  startAt,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Image1 from '../images/tyres/0.jpeg';
import Topoffers from '../components/TopOffers';
import useGetTyres from '../hooks/useGetTyres';
import CardSceleton from '../components/CardSkeleton';

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
  //   console.log(location);

  const context = useContext(AppContext);
  let url = new URL(`http://localhost:3000/${location.search}`);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(+url.searchParams.get('page') || 1);
  const topTyres = useGetTyres('21');

  const [tyres, setTyres] = useState([]);
  const [filteredTyres, setFilteredTyres] = useState([]);
  const [price, setPrice] = useState([1, 100]);
  const [chooseTyre, setChooseTyre] = useState('tyre');
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
  const [choosePassenger, setChoosePassenger] = useState(location.pathname === '/' ? '/' : 'truck-tyres');
  const [inputs, setInputs] = useState({
    width: '',
    height: '',
    diameter: '',
    summer: false,
    winter: false,
    allSeason: false,
    passenger: false,
    SUV: false,
    smallTruck: false,
  });
  const [inputsWheels, setInputsWheels] = useState({
    width: '',
    profile: '',
    diameter: '',
    bolt: '',
  });
  useEffect(() => {
    // console.log('asd');
    setPage(+url.searchParams.get('page') || 1);
  }, [url.searchParams.get('page')]);
  useEffect(() => {
    if (url.search) {
      setInputs({
        width: url.searchParams.get('width'),
        height: url.searchParams.get('height'),
        diameter: url.searchParams.get('diameter'),
        passenger: url.searchParams.get('passenger') === 'true' ? true : false,
        SUV: url.searchParams.get('suv') === 'true' ? true : false,
        smallTruck: url.searchParams.get('smalltruck') === 'true' ? true : false,
        summer: url.searchParams.get('season').includes('summer'),
        winter: url.searchParams.get('season').includes('winter'),
        allSeason: url.searchParams.get('season')?.includes('allseason'),
      });
      const filteredArr = tyres.filter((item, index) => {
        if (
          (url.searchParams.get('season') || 'summerwinterallseason').includes(item.season) &&
          item.price > +url.searchParams.get('minprice') * 1000 &&
          item.price < (+url.searchParams.get('maxprice') || 100) * 1000
        ) {
          return item;
        }
      });
      setFilteredTyres(filteredArr.sort((a, b) => a.price - b.price));

      // if (!tyres.length) setFilteredTyres([]);
    } else {
      setFilteredTyres([]);
    }
  }, [
    url.searchParams.get('season'),
    url.searchParams.get('minprice'),
    url.searchParams.get('maxprice'),
    url.searchParams.get('passenger'),
    url.searchParams.get('suv'),
    url.searchParams.get('smalltruck'),
    tyres,
  ]);
  useEffect(() => {
    if (url.search) {
      setLoading(true);
      setInputs({
        width: url.searchParams.get('width'),
        height: url.searchParams.get('height'),
        diameter: url.searchParams.get('diameter'),
        passenger: url.searchParams.get('passenger') === 'true' ? true : false,
        SUV: url.searchParams.get('suv') === 'true' ? true : false,
        smallTruck: url.searchParams.get('smalltruck') === 'true' ? true : false,
        summer: url.searchParams.get('season').includes('summer'),
        winter: url.searchParams.get('season').includes('winter'),
        allSeason: url.searchParams.get('season')?.includes('allseason'),
      });
      setPrice([+url.searchParams.get('minprice') || 1, +url.searchParams.get('maxprice') || 100]);
      let refStr = '';
      ['diameter', 'width', 'height'].forEach((item, index) => {
        if (url.searchParams.get(item)) {
          if (!refStr) {
            refStr += url.searchParams.get(item);
          } else {
            refStr += `&${url.searchParams.get(item)}`;
          }
        }
      });
      const docRef = doc(db, 'tyres', refStr || '17');
      getDoc(docRef).then((res) => {
        // console.log(res.data());
        if (res.exists()) {
          const arr = [];
          Object.keys(res.data()).forEach((key, index) => {
            arr.push(res.data()[key]);
          });
          setTyres(arr);
          setLoading(false);
        } else {
          setTyres([]);
          setLoading(false);
        }
      });
    } else {
      setInputs({
        width: '',
        height: '',
        diameter: '',
        summer: false,
        winter: false,
        allSeason: false,
        passenger: false,
        SUV: false,
        smallTruck: false,
      });
      setTyres([]);
      setPrice([1, 100]);
    }
  }, [url.searchParams.get('width'), url.searchParams.get('height'), url.searchParams.get('diameter')]);

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
      }&minprice=${price[0] === 1 ? '' : price[0]}&maxprice=${price[1] === 100 ? '' : price[1]}&passenger=${
        inputs.passenger
      }&suv=${inputs.SUV}&smalltruck=${inputs.smallTruck}`
    );
  };
  const handleChangePage = (event, value) => {
    setPage(value);
    url.searchParams.set('page', value);
    //   console.log();
    navigate(`/${url.search}`);
  };
  // console.log(inputs);
  return (
    <Grid
      padding="8px"
      wrap="nowrap"
      item
      xs={12}
      container
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item sx={{ width: '70%' }} xs={12} sm={12} md container alignItems="flex-start">
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

        <Grid p="10px 5px 5px 5px" container alignContent="flex-start" alignItems="flex-end" item xs={12}>
          <Button
            onClick={() => handleClickSearch(chooseTyre)}
            startIcon={<SearchIcon />}
            sx={{ minWidth: '140px', textTransform: 'none', width: { xs: '100%', sm: 'auto' } }}
            variant="outlined"
          >
            {getText('search')}
          </Button>

          <Box sx={{ display: loading ? 'block' : 'hidden', width: '100%', paddingTop: '5px' }}>
            <LinearProgress />
          </Box>
        </Grid>
        <Grid
          m={{ xs: '8px 0 0 0', sm: '12px 5px 0 5px' }}
          container
          justifyContent={{ xs: 'space-between', sm: 'center' }}
          alignItems="flex-end"
          item
          xs={12}
        >
          {
            <Typography
              width="100%"
              // variant="body3"
              sx={{
                textDecoration: 'underline',
                textUnderlineOffset: '7px',
                textDecorationThickness: '0.5px',
                paddingBottom: '5px',
              }}
            >
              {tyres.length ? getText('searchResult') : null}
            </Typography>
          }
          {filteredTyres.map((item, index) => {
            if (index >= (page - 1) * 40 && index < page * 40) {
              return (
                <TyreCard
                  key={index}
                  getText={getText}
                  id={item.id}
                  mode={context.darkMode}
                  season={item.season}
                  imgUrl={item.smallImage}
                  name={item.name}
                  width={item.width}
                  height={item.height}
                  diameter={item.diameter}
                  price={item.price}
                />
              );
            }
          })}
          <Grid
            item
            xs={12}
            py="15px"
            marginBottom="50px"
            borderBottom={0.1}
            container
            justifyContent="center"
          >
            {filteredTyres.length ? (
              <Pagination
                count={Math.ceil(filteredTyres.length / 40)}
                page={page}
                onChange={handleChangePage}
              />
            ) : (
              <Typography>Choose parameters</Typography>
            )}
          </Grid>
        </Grid>
        {!topTyres.length ? (
          <CardSceleton type="topTyres" getText={getText} darkMode={context.darkMode} />
        ) : (
          <Grid item xs={12} container justifyContent="center">
            <Topoffers type="topTyres" getText={getText} tyres={topTyres} mode={context.darkMode} />
          </Grid>
        )}
        {!topTyres.length ? (
          <CardSceleton type="discountedItems" getText={getText} darkMode={context.darkMode} />
        ) : (
          <Grid item xs={12} container justifyContent="center" paddingY="45px">
            <Topoffers type="discountedItems" getText={getText} tyres={topTyres} mode={context.darkMode} />
          </Grid>
        )}

        <OpenSettingsDrawer
          manufacturersState={manufacturersState}
          setManufacturersState={setManufacturersState}
          setCarType={setInputs}
          carType={inputs}
          getText={getText}
          setPrice={setPrice}
          price={price}
        />
      </Grid>

      <Grid
        item
        xs={8}
        sm={8}
        md="auto"
        sx={{ display: { xs: 'none', sm: 'none', md: 'grid' } }}
        container
        justifyContent="center"
      >
        <Settings
          getText={getText}
          setPrice={setPrice}
          price={price}
          manufacturersState={manufacturersState}
          setManufacturersState={setManufacturersState}
          setCarType={setInputs}
          carType={inputs}
        />
      </Grid>
    </Grid>
  );
}

// +(inputs.winter && 'winter') + (inputs.allSeason && 'allseason');
