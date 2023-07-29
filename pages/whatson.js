// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: What's On page displaying movie showings for the selected day

import { useState, useEffect } from "react";
import DatePicker from "@/components/booking/DatePicker";
import MovieCard from "@/components/booking/MovieCard";
import { collection, getDocs, collectionGroup } from "firebase/firestore";
import { db } from "@/firebase";
import { Spinner } from "@/components/layout/Spinner";

const Whatson = () => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [day, setDay] = useState(weekdays[new Date().getDay()]);
  const [active, setActive] = useState(weekdays[new Date().getDay()]);
  const [showings, setShowings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Retrieve showings data from Firestore
  const getShowings = async () => {
    const querySnapshot = await getDocs(collectionGroup(db, "showings"));
    const showingsData = {};
    const moviesSnapshot = await getDocs(collection(db, "movies"));
    const moviesData = {};

    // Create a map of movie IDs to movie data for all movies in the "movies" collection
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
      showingsData[movieId].showings.push({ ...doc.data(), id: doc.id, slug: doc.id });
    });

    // Filter showings by selected day
    Object.keys(showingsData).forEach((movieId) => {
      const movieShowings = showingsData[movieId].showings;
      const filteredShowings = movieShowings.filter((showing) => showing.day === day);
      showingsData[movieId].showings = filteredShowings;
      setLoading(false);
    });

    setShowings(Object.values(showingsData));
  };

  useEffect(() => {
    getShowings();
  }, [day]);

  // Update the selected day
  const daySelected = (day) => {
    setActive(day);
    setDay(day);
  };
  return (
    <div className="text-white">
      <div className="mb-10 mt-10 text-center">
      <h1 className="text-5xl">Whats on</h1>        
      <p className="pt-5">Select a movie and book your tickets!</p>
      </div>
      
      <DatePicker selectDay={(e) => daySelected(e)} active={active} day={day} />
      <div className="flex flex-col items-center">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {showings.map((movieShowings) => {
              const filteredShowings = movieShowings.showings.filter((showing) => showing.day === day);
              if (filteredShowings.length > 0) {
                return (
                  <MovieCard
                    key={movieShowings.movieData.id}
                    movieTitle={movieShowings.movieData.title}
                    showings={filteredShowings.sort((a, b) => a.day.localeCompare(b.day))}
                    img={movieShowings.movieData.img}
                    release={movieShowings.movieData.release}
                    age={movieShowings.movieData.age}
                    runtime={movieShowings.movieData.time}
                  />
                );
              } else {
                return null; // If there are no showings on Sunday, don't render the card
              }
            })}
          </>
        )}
      </div>
    </div>
  );
}


export default Whatson