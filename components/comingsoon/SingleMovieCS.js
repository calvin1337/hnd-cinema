import InformationCS from "./InformationCS";
import RatingCS from "./RatingCS";


const SingleMovieCS = (props) => {
  return (
    <div className="grid grid-cols-4 grid-rows-auto mt-5 mb-5 w-4/5" style={{borderTop:"solid 2px #ddd"}}>
      <div className="row-span-1 col-span-4 flex align-middle justify-center">
        <h1 className="mt-5 mb-5">{props.title}</h1>
      </div>
      <div className="row-span-2 col-span-1 ">
        <RatingCS updateRating={props.updateRating} id={props.id} />
      </div>
  
      <div className="row-span-1 col-span-3  ">
        <InformationCS {...props} />
      </div>

    </div>
  );
};

export default SingleMovieCS;
