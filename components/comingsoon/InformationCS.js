// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: InformationCS component for displaying movie information and poster

const InformationCS = (props) => {
  return (
    <div className="grid lg:grid-cols-2 grid-rows-1 p-5 text-lg lg:text-2xl">
      <div className="flex items-center justify-center">
        <img className="w-full lg:w-4/5 h-4/5 rounded-lg"
          src={props.url}
          alt="movie poster"
          
        />
      </div>
      <div className="content-container flex justify-center flex-col pb-5">
        
        <h3>
          Movie Info: {props.desc}
        </h3>
        <h3>Release Date: {props.release}</h3>
        <div className="w-4/5 h-12  mt-5 text-lg bg-slate-500">
            <h3 className="absolute p-2"><strong>Hot Meter {props.rating} %</strong></h3>
          <div className="bg-green-500 h-full" style={{width:`${props.rating}%`}}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCS;
