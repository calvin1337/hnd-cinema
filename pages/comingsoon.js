import SingleMovieCS from "@/components/comingsoon/SingleMovieCS";
import {useState, useEffect} from "react";
import { db } from '@/firebase'
import { collection } from 'firebase/firestore'
import { getDocs } from 'firebase/firestore'



const Comingsoon = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const moviesCollectionRef = collection(db, "comingsoon");

  const getComingSoon = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => {
        const totalVotes = doc.data().total_votes;
        const upvotes = doc.data().upvotes;
        const rating = Math.round((totalVotes && upvotes) ? (upvotes / totalVotes) * 100 : 0);
  
        return {
          ...doc.data(),
          id: doc.id,
          rating: rating
        };
      });
      const sortedData = filteredData.sort((a, b) => b.rating - a.rating);
      setData(filteredData);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    getComingSoon();
  }, []);


  const handleUpdate = () => {
    getComingSoon();
  }
  
  return (
    <div className="text-white">
      <div className="mb-10 mt-10 text-center">
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus?</p>
      </div>
      <div className="title-container text-center">
        <h1>Coming Soon</h1>
      </div>
      <div className="flex flex-col items-center">
      {loading ? (
      <p>Loading...</p>
    ) : (
        <>
        {data.map((movie) => (
          <SingleMovieCS 
            key={movie.id}
            title={movie.title}
            url={movie.img}
            release={movie.release}
            desc={movie.desc}
            rating={movie.rating}
            id={movie.id}
            updateRating={handleUpdate}
          />
        ))}
      </>
    )}
      </div>
      
    </div>
  );
};

export default Comingsoon;
