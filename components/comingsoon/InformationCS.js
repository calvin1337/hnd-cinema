
const InformationCS = (props) => {
  return (
    <div className="grid grid-cols-2 grid-rows-1">
      <div className="flex items-center justify-center">
        <img className="w-4/5 h-4/5"
          src={props.url}
          alt="movie poster"
          
        />
      </div>
      <div className="content-container flex justify-center flex-col pb-5">
        <div className="notification-container text-right m-5">
          <button className="btn">Notify me</button>
        </div>
        <h3>Title: {props.title}</h3>
        <h3>
          Movie Info: {props.desc}
        </h3>
        <h3>Release Date: 3rd March 2023</h3>
        <div className="w-4/5 border-red-500 h-12 border mt-5">
            <h3 className="absolute p-2"><strong>Excitement Meter {props.rating} %</strong></h3>
          <div className="bg-green-500 h-full" style={{width:`${props.rating}%`}}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCS;
