import SingleMovieCS from "@/components/comingsoon/SingleMovieCS";
import { useFetchComingSoon } from "@/hooks/fetchMovies";




const Comingsoon = () => {

  const { loading, error, movies } = useFetchComingSoon();

  
  return (
    <div className="text-white">
      <div className="mb-10 mt-10 text-center">
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus?</p>
      </div>
      <div class="title-container text-center">
        <h1>Coming Soon</h1>
      </div>
      <div className="flex flex-col items-center">
      {loading ? (
      <p>Loading...</p>
    ) : (
        <>
        {movies.map((movie) => (
          <SingleMovieCS 
            key={movie.id}
            title={movie.title}
            url={movie.img}
            release={movie.release}
            desc={movie.desc}
            rating={movie.rating}
            id={movie.id}
          />
        ))}
      </>
    )}
      </div>
      
    </div>
  );
};

export default Comingsoon;
