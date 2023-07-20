// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: RatingCS component for upvoting and downvoting movie ratings

import InformationCS from "./InformationCS";
import RatingCS from "./RatingCS";


const SingleMovieCS = (props) => {
  return (
    <div className="grid grid-cols-1 grid-rows-auto gap-4 m-5" style={{borderTop:"solid 2px #ddd"}}>
     
     <div className="p-5 text-start">
        <RatingCS updateRating={props.updateRating} id={props.id} />
        </div>
      <div className="row-span-1 col-span-4 flex align-middle justify-center">
        <h1 className=" text-2xl lg:text-4xl">{props.title}</h1>
      </div>
      
  
      <div className="col-span-2 row-span-2 ">
        <InformationCS {...props} />
      </div>
    </div>
  );
};

export default SingleMovieCS;
