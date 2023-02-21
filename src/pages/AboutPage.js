import { Grid } from '@mui/material';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
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
  async function asd(diameter, name, width, height, price) {
    const docRefDiameter = collection(db, 'tyres', diameter, diameter);

    const docRefAll = collection(db, 'tyres');
    addDoc(docRefAll, {
      name: 'Abraham',
      width: width,
      height: height,
      diameter: diameter,
      manufacturer: 'manufacturers',
      creationDate: '',
      updatedDate: '',
      seller: '',
      price: 34000,
      quantity: 4,
      season: 'summer',
      id: name,
      smallImage:
        'https://firebasestorage.googleapis.com/v0/b/tyres-3e0f1.appspot.com/o/tyres%2F4KubWFLnyJr1c2DnauH7%2Fsmall?alt=media&token=222022b1-a95b-47b8-be82-7a5ee414c30e',
    });

    async function addItemByParameter(parameter, document) {
      const docRef = doc(db, 'tyres', parameter);
      setDoc(docRef, document, { merge: true });
    }
    addItemByParameter(height, {
      [name]: {
        name: 'Abraham',
        width: width,
        height: height,
        diameter: diameter,
        manufacturer: 'manufacturers',
        creationDate: '',
        updatedDate: '',
        seller: '',
        price: price,
        quantity: 4,
        id: name,
        season: 'summer',
        smallImage:
          'https://firebasestorage.googleapis.com/v0/b/tyres-3e0f1.appspot.com/o/tyres%2F4KubWFLnyJr1c2DnauH7%2Fsmall?alt=media&token=222022b1-a95b-47b8-be82-7a5ee414c30e',
      },
    });
    addItemByParameter(width, {
      [name]: {
        name: 'Abraham',
        width: width,
        height: height,
        diameter: diameter,
        manufacturer: 'manufacturers',
        creationDate: '',
        updatedDate: '',
        seller: '',
        price: price,
        quantity: 4,
        id: name,
        season: 'summer',
        smallImage:
          'https://firebasestorage.googleapis.com/v0/b/tyres-3e0f1.appspot.com/o/tyres%2F4KubWFLnyJr1c2DnauH7%2Fsmall?alt=media&token=222022b1-a95b-47b8-be82-7a5ee414c30e',
      },
    });
    addItemByParameter(diameter, {
      [name]: {
        name: 'Abraham',
        width: width,
        height: height,
        diameter: diameter,
        manufacturer: 'manufacturers',
        creationDate: '',
        updatedDate: '',
        seller: '',
        price: price,
        quantity: 4,
        id: name,
        season: 'summer',
        smallImage:
          'https://firebasestorage.googleapis.com/v0/b/tyres-3e0f1.appspot.com/o/tyres%2F4KubWFLnyJr1c2DnauH7%2Fsmall?alt=media&token=222022b1-a95b-47b8-be82-7a5ee414c30e',
      },
    });
    addItemByParameter(`${diameter}&${width}`, {
      [name]: {
        name: 'Abraham',
        width: width,
        height: height,
        diameter: diameter,
        manufacturer: 'manufacturers',
        creationDate: '',
        updatedDate: '',
        seller: '',
        price: price,
        quantity: 4,
        id: name,
        season: 'summer',
        smallImage:
          'https://firebasestorage.googleapis.com/v0/b/tyres-3e0f1.appspot.com/o/tyres%2F4KubWFLnyJr1c2DnauH7%2Fsmall?alt=media&token=222022b1-a95b-47b8-be82-7a5ee414c30e',
      },
    });
    addItemByParameter(`${diameter}&${width}&${height}`, {
      [name]: {
        name: 'Abraham',
        width: width,
        height: height,
        diameter: diameter,
        manufacturer: 'manufacturers',
        creationDate: '',
        updatedDate: '',
        seller: '',
        price: price,
        quantity: 4,
        id: name,
        season: 'summer',
        smallImage:
          'https://firebasestorage.googleapis.com/v0/b/tyres-3e0f1.appspot.com/o/tyres%2F4KubWFLnyJr1c2DnauH7%2Fsmall?alt=media&token=222022b1-a95b-47b8-be82-7a5ee414c30e',
      },
    });
    addItemByParameter(`${diameter}&${height}`, {
      [name]: {
        name: 'Abraham',
        width: width,
        height: height,
        diameter: diameter,
        manufacturer: 'manufacturers',
        creationDate: '',
        updatedDate: '',
        seller: '',
        price: price,
        quantity: 4,
        id: name,
        season: 'summer',
        smallImage:
          'https://firebasestorage.googleapis.com/v0/b/tyres-3e0f1.appspot.com/o/tyres%2F4KubWFLnyJr1c2DnauH7%2Fsmall?alt=media&token=222022b1-a95b-47b8-be82-7a5ee414c30e',
      },
    });
    addItemByParameter(`${width}&${height}`, {
      [name]: {
        name: 'Abraham',
        width: width,
        height: height,
        diameter: diameter,
        manufacturer: 'manufacturers',
        creationDate: '',
        updatedDate: '',
        seller: '',
        price: price,
        quantity: 4,
        id: name,
        season: 'summer',
        smallImage:
          'https://firebasestorage.googleapis.com/v0/b/tyres-3e0f1.appspot.com/o/tyres%2F4KubWFLnyJr1c2DnauH7%2Fsmall?alt=media&token=222022b1-a95b-47b8-be82-7a5ee414c30e',
      },
    });
  }
  for (let i = 0; i < 200; i++) {
    // asd(`${12 + i}`, `I-000089${i}`, `245`, `45`, 21000 + i * 100);
  }
  // asd('17', 'I-0000051', '245', '35');
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