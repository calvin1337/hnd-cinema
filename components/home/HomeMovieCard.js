

const HomeMovieCard = ({url, title}) => {
  return (
    <div className="border border-y-cyan-100 ">
      {/* Card Container */}
      <div className="shadow-md cursor-pointer   relative h-96 bg-cover bg-no-repeat bg-center" style={{ 
      backgroundImage: `url(${url})` 
    }}>
        {/* Card Content */}
        <div class="h-full w-full rounded-md" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent` }}>
          {/* Items */}
          <div class="bottom-0 flex flex-col m-5 absolute right-0 text-right ">
            <span class="text-3xl text-indigo-50">{title}</span>
            <span class="text-blue-500">Book Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMovieCard;
