

const SingleMovieCS = () => {
  return (
    <div class="grid grid-cols-4 grid-rows-3 mt-5 mb-5">
      <div class="row-span-1 col-span-4 border-red-400 border ">
        <h2>Movie Title</h2>
      </div>
      <div class="row-span-2 col-span-1 border-blue-50-400 border ">
        <h3>Rating</h3>
      </div>
      <div class="row-span-1 col-span-3 border-cyan-400 border ">
        <h3>Trailer</h3>
      </div>
      <div class="row-span-1 col-span-3 border-gray-50-400 border ">
        <h3>Information</h3>
      </div>
    </div>
  );
};

export default SingleMovieCS;
