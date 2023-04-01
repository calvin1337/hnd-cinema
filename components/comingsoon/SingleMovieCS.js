import InformationCS from "./InformationCS";
import RatingCS from "./RatingCS";


const SingleMovieCS = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-auto mt-5 mb-5 ">
      <div className="row-span-1 col-span-4 border-red-400 border flex align-middle justify-center">
        <h2 className="mt-5 mb-5">Movie Title</h2>
      </div>
      <div className="row-span-2 col-span-1 border-blue-50-400 border">
        <RatingCS />
      </div>
      <div className="row-span-1 col-span-3 border-cyan-400 border flex align-middle justify-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AHmCH7iB_IM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="row-span-1 col-span-3 border-gray-50-400 border ">
        <InformationCS />
      </div>
    </div>
  );
};

export default SingleMovieCS;
