import Link from "next/link";

const MovieCard = (props) => {
  const { movieTitle, showing } = props;
  console.log(props);
  return (
    <div
      className="grid grid-cols-2 grid-rows-auto mt-5 mb-5 w-4/5"
      style={{ borderTop: "solid 2px #ddd" }}
    >
      <div className="flex justify-center flex-col pb-5">
        <div className="w-4/5 h-4/5">
          <img
            src="https://via.placeholder.com/600x400"
            alt=""
            width={600}
            height={400}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <h1>Title: {movieTitle}</h1>
        <h1>Release Date: 3rd March 2023</h1>
        <p>Age rating</p>
        <p>Run time</p>
        <p>
          Movie Info: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Praesentium molestiae, ea illo aliquam mollitia veniam reprehenderit?
          Aut fugiat sit debitis?
        </p>
        <div className="showing mt-5">
          <ul className="flex flex-row gap-5">
            {props.showings.map((showing) => (
              <li key={showing.id}>
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
