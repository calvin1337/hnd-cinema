

const HomeMovieCard = ({url, title}) => {
  return (
    <div>
      {/* Card Container */}
      <div className="shadow-md cursor-pointer relative h-96 bg-cover bg-no-repeat bg-center rounded-lg" style={{ 
      backgroundImage: `url(${url})` 
    }}>
        {/* Card Content */}
        <div className="h-full w-full rounded-lg" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent` }}>
          {/* Items */}
          <div className="bottom-0 flex flex-col m-5 absolute right-0 text-right ">
            <span className="text-3xl text-indigo-50">{title}</span>
            {/* <span className="text-blue-500">Book Now</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMovieCard;
