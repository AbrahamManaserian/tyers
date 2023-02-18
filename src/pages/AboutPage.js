import { Grid } from '@mui/material';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  startAt,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';

// Add a new document in collection "cities"
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

const data = {
  name: 'Nokian Tyres Hakka Van',
  width: '265',
  height: '35',
  diameter: '18',
  manufacturer: 'MICHELIN',
  creationDate: '',
  updatedDate: '',
  seller: '',
  price: 28000,
};
export default function AboutPage() {
  async function asd() {
    const docRef = collection(db, 'tyres');

    // for (let i = 0; i < 200; i++) {
    //   await addDoc(docRef, {
    //     name: 'Abraham',
    //     width: '275',
    //     height: '35',
    //     diameter: '28',
    //     manufacturer: 'manufacturers',
    //     creationDate: '',
    //     updatedDate: '',
    //     seller: '',
    //     price: 34000 + i,
    //     quantity: i + 4,
    //     season: i % 2 ? 'winter' : 'summer',
    //     smallImage:
    //       'https://firebasestorage.googleapis.com/v0/b/tyres-3e0f1.appspot.com/o/tyres%2F4KubWFLnyJr1c2DnauH7%2Fsmall?alt=media&token=222022b1-a95b-47b8-be82-7a5ee414c30e',
    //   });
    // }

    const data = await getDocs(
      query(
        collection(db, 'tyres'),
        where('diameter', '==', '28')
        // orderBy('price', 'desc'),
        // limit(20)
      )
    );
    let num = 0;
    data.forEach((item) => {
      ++num;
      updateDoc(doc(db, 'tyres', item.id), {
        diameter: num % 2 ? '19' : '18',
      });
      // console.log(item.data().season);
    });
  }

  // asd();
  return (
    <Grid item container xs={12}>
      About page
    </Grid>
  );
}

// const data = await getDocs(
//   query(
//     collection(db, 'tyres'),
//     ...restQueries,
//     // orderBy('price', 'desc'),
//     limit(20)
//   )
// );

    // const asd = await getDocs(
    //   query(collection(db, 'tyres', '17', '17'), where('width', '==', '265'), orderBy('price'), limit(25))
    // );

    // asd.forEach((docs) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   updateDoc(doc(db, 'tyres', '17', '17', docs.id), {
    //     diameter: '17',
    //   });
    //   // console.log(docs.id, ' => ', docs.data().price);
    // });