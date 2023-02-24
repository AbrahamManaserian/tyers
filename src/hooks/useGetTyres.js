import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

export default function useGetTyres(parameter) {
  const [tyres, setTyres] = useState([]);
  useEffect(() => {
    const docRef = doc(db, 'tyres', parameter);
    getDoc(docRef).then((res) => {
      // console.log(res.data());
      if (res.exists()) {
        const arr = [];
        Object.keys(res.data()).forEach((key, index) => {
          arr.push(res.data()[key]);
        });
        setTyres(arr);
        //    setLoading(false);
      } else {
        setTyres([]);
        //    setLoading(false);
      }
    });
  }, []);
  return tyres;
}
