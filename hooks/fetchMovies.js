import { useState, useEffect} from 'react'
import { collection } from 'firebase/firestore'
import { getDocs } from 'firebase/firestore'

import { db } from '@/firebase'

const useFetchMovies = () => {

const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
const [movies, setMovies] = useState(null)



const moviesCollectionRef = collection(db, "cinema");

const getMovieList = async () => {
  try {
    const data = await getDocs(moviesCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.title,
    }));
    setMovies(filteredData);
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  getMovieList();
}, []);

return { loading, error, movies }
}

export default useFetchMovies


