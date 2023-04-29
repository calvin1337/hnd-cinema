import { useState, useEffect } from "react"
import DatePicker from "@/components/booking/DatePicker"
import MovieCard from "@/components/booking/MovieCard"
import { collection, getDocs, collectionGroup } from "firebase/firestore"
import { db } from "@/firebase"


const Whatson = () => {
 


  const [day, setDay] = useState(new Date().getDay())
  const [active, setActive] = useState(0);
  const [showings, setShowings] = useState([]);
  const [loading, setLoading] = useState(true);

  // const getShowings = async () => {
  //   const querySnapshot = await getDocs(collectionGroup(db, "showings"));
  //   const showingsData = {};
  
  //   querySnapshot.forEach((doc) => {
  //     const movieId = doc.data().movie_id;
  //     if (!showingsData[movieId]) {
  //       showingsData[movieId] = [];
  //     }
  //     showingsData[movieId].push({ ...doc.data(), id: doc.id });
  //   });
  
  //   setShowings(showingsData);
  //   console.log(showingsData)
  // };

  const getShowings = async () => {
    const querySnapshot = await getDocs(collectionGroup(db, "showings"));
    const showingsData = {};
    // Create a map of movie IDs to movie data for all movies in the "movies" collection
    const moviesSnapshot = await getDocs(collection(db, "movies"));
    const moviesData = {};
    moviesSnapshot.forEach((doc) => {
      const movieId = doc.id;
      const movieData = doc.data();
      moviesData[movieId] = movieData;
    });
  
    // Merge movie data into showings data based on movie_id field
    querySnapshot.forEach((doc) => {
      const movieId = doc.data().movie_id;
      const movieData = moviesData[movieId];
      if (!showingsData[movieId]) {
        showingsData[movieId] = { movieData, showings: [] };
      }
      showingsData[movieId].showings.push({ ...doc.data(), id: doc.id, slug:doc.id });

      // Filter showings by selected day
      Object.keys(showingsData).forEach((movieId) => {
        const movieShowings = showingsData[movieId].showings;
        // Currently hardcoded to Monday
        const filteredShowings = movieShowings.filter((showing) => showing.day === "Monday");
        showingsData[movieId].showings = filteredShowings;
        setLoading(false);
      });
  
    });
  
    setShowings(Object.values(showingsData));
    console.log(showingsData);
  };
  
  useEffect(() => {
    getShowings();
  }, []);


  const daySelected = (e) => {
    console.log(e)
    setActive(e)
  }

  return(
    
    <div className="text-white">
      <div className="mb-10 mt-10 text-center">
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus?</p>
      </div>
      <div className="title-container text-center">
        <h1>Whats on</h1>
      </div>
      <div>

    
      </div>
      <DatePicker selectDay={(e) => daySelected(e)} active={active} day={day}/>
      <div className="flex flex-col items-center">
        {/* Display them depending on day selected, render on today */}

        {loading ? (
  <p>Loading...</p>
) : (
  <>
    {showings.map((movieShowings) => (
      <MovieCard 
        key={movieShowings.movieData.id} 
        movieTitle={movieShowings.movieData.title} 
        showings={movieShowings.showings.sort((a, b) => a.day.localeCompare(b.day))}
      />
    ))}
  </>
)}
      </div>      
    </div>
  )
}


export default Whatson