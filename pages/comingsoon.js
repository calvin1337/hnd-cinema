import SingleMovieCS from "@/components/comingsoon/SingleMovieCS";

// add sort by
// 

const comingsoon = () => {
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
      <SingleMovieCS />
      <SingleMovieCS />
      <SingleMovieCS />
      </div>
      
    </div>
  );
};

export default comingsoon;
