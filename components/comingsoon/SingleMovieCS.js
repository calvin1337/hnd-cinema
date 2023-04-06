import InformationCS from "./InformationCS";
import RatingCS from "./RatingCS";


const SingleMovieCS = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-auto mt-5 mb-5 w-4/5" style={{borderTop:"solid 2px #ddd"}}>
      <div className="row-span-1 col-span-4 flex align-middle justify-center">
        <h1 className="mt-5 mb-5">Creed III</h1>
      </div>
      <div className="row-span-2 col-span-1 ">
        <RatingCS />
      </div>
  
      <div className="row-span-1 col-span-3  ">
        <InformationCS />
      </div>

    </div>
  );
};

export default SingleMovieCS;
