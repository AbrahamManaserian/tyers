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
  }

  asd();
  return (
    <Grid item container xs={12}>
      About page
    </Grid>
  );
}


// for (let i = 0; i < 5; i++) {
    //   await addDoc(docRef, {
    //     name: tyreNames[i],
    //     width: '275',
    //     height: '35',
    //     diameter: '21',
    //     manufacturer: manufacturers[i + 15],
    //     creationDate: '',
    //     updatedDate: '',
    //     seller: '',
    //     price: 34000 + i,
    //     quantity: i + 4,
    //   });
    // }

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