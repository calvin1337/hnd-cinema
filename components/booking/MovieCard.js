// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Movie card component displaying movie details and available showings

import Link from "next/link";

// MovieCard component to display movie details and showings
const MovieCard = (props) => {
  const { movieTitle, showing } = props;

  return (
    <div
      className="container m-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:justify-center"
      style={{ borderTop: "solid 2px #ddd" }}
    >
      <div className="flex justify-center flex-col pb-5">
        <div className="lg:w-4/5 h-4/5 text-center w-full p-5 lg:p-0">
          <img 
            src={props.img}
            alt=""
            width={"100%"}
            height={400}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 p-4">
        <h1>{movieTitle}</h1>
        <h1>Release Date: 3rd March 2023</h1>
        <p>Age rating:</p>
        <p>Run time:</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Praesentium molestiae, ea illo aliquam mollitia veniam reprehenderit?
          Aut fugiat sit debitis?
        </p>
        <div className="showing mt-5">
        <h3>Showing Times</h3>
          <ul className="flex flex-row gap-5">
           
            {/* Display available showings */}
            {props.showings.map((showing) => (
              <li key={showing.id} className="text-blue-400">
                <Link href={`/booking/${showing.id}`}>{showing.time}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;