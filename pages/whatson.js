
import MovieCard from "@/components/booking/MovieCard"
import { useState, useEffect } from 'react';

const Whatson = () => {

  const [days, setDays] = useState([]);

  useEffect(() => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    const reorderedDays = weekdays.slice(today).concat(weekdays.slice(0, today));
    setDays(reorderedDays);
  }, []);
  

  return(
  
    <div className="text-white">
      <div className="mb-10 mt-10 text-center border border-red-500">
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus?</p>
      </div>
      <div class="title-container text-center">
        <h1>Whats on</h1>
      </div>
      <div className="text-center">
        {/* Day picker */}
          <h1>Date picker</h1>
          <div className="gap-5 flex flex-row justify-center mt-5">
          {days.map((day, index) => (
        <button key={index} className="btn">{index === 0 ? 'Today' : day}</button>
      ))}
          </div>
      </div>
      {/* Movie container */}
      <div className="flex flex-col items-center">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>      
    </div>
  )
}


export default Whatson