import { useState } from "react"
import DatePicker from "@/components/booking/DatePicker"
import MovieCard from "@/components/booking/MovieCard"
import useFetchMovies from "@/hooks/fetchMovies"

const Whatson = () => {
  const { loading, error, movies } = useFetchMovies();
  console.log(movies, error)
  const [day, setDay] = useState(new Date().getDay())
  const [active, setActive] = useState(0);

  


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
      <div class="title-container text-center">
        <h1>Whats on</h1>
      </div>
      <DatePicker selectDay={(e) => daySelected(e)} active={active} day={day}/>
      <div className="flex flex-col items-center">
        {/* Display them depending on day selected, render on today */}
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>      
    </div>
  )
}


export default Whatson