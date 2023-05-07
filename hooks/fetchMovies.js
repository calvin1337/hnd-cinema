// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Used for fetching movies from database 



import { useState, useEffect} from 'react'
import { collection } from 'firebase/firestore'
import { getDocs } from 'firebase/firestore'

import { db } from '@/firebase'



export const useFetchMovies = () => {

const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
const [movies, setMovies] = useState(null)



const moviesCollectionRef = collection(db, "cinema");

const getMovieList = async () => {
  try {
    const data = await getDocs(moviesCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    setMovies(filteredData);
    setLoading(false);
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  getMovieList();
}, []);

return { loading, error, movies }
}


export const useFetchComingSoon = () => {
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
const [movies, setMovies] = useState(null)

const moviesCollectionRef = collection(db, "comingsoon");

const getComingSoon = async () => {
  try {
    const data = await getDocs(moviesCollectionRef);
    const filteredData = data.docs.map((doc) => {
      const totalVotes = doc.data().total_votes;
      const upvotes = doc.data().upvotes;
      const rating = (totalVotes && upvotes) ? (upvotes / totalVotes) * 100 : 0;

      return {
        ...doc.data(),
        id: doc.id,
        rating: rating
      };
    });
    setMovies(filteredData);
    setLoading(false);
    console.log(filteredData);
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  getComingSoon();
}, []);



return { loading, error, movies };
};




