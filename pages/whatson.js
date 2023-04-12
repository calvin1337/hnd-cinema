
import DatePicker from "@/components/booking/DatePicker"
import MovieCard from "@/components/booking/MovieCard"

const Whatson = () => {

  return(
  
    <div className="text-white">
      <div className="mb-10 mt-10 text-center">
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus?</p>
      </div>
      <div class="title-container text-center">
        <h1>Whats on</h1>
      </div>
      <DatePicker />
      <div className="flex flex-col items-center">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>      
    </div>
  )
}


export default Whatson