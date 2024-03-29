import SingleMovieCS from "@/components/comingsoon/SingleMovieCS";
import {useState, useEffect} from "react";
import { db } from '@/firebase'
import { collection } from 'firebase/firestore'
import { getDocs } from 'firebase/firestore'
import { Spinner } from "@/components/layout/Spinner";



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
      <h1 className="text-5xl">Coming Soon</h1>        
      <p className="pt-5 text-gray-200">This is the list of movies coming soon to the cinema, upvote movies you&apos;re most excited for!</p>
      </div>
     
      <div className="flex flex-col items-center">
      {loading ? (
      <Spinner />
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
