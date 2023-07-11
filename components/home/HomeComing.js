// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Component for displaying the list of movies currently showing on the home page


import HomeMovieCard from "./HomeMovieCard"
import Link from 'next/link'

const HomeComing = () => {
  return (
    <div>
       <div className="pt-10 pb-10">
       <h1 class="mb-4 text-left text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white p-10">Coming Soon</h1>
       <div className="container m-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <HomeMovieCard 
        title={"Guardians of the Galaxy Vol. 3"}
        url={"https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"}
        text={"May 5, 2023"}
        />
        <HomeMovieCard 
        title={"The Super Mario Bros. Movie"}
        url={"https://m.media-amazon.com/images/M/MV5BNGZhYWIyZWUtOTdjZS00ZTc1LWFlZDMtNzU5MTE0OTcyMjg1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"}
        text={"April 16, 2023"}
        />
        <HomeMovieCard 
        title={"Fast X"}
        url={"https://static1.pocketlintimages.com/wordpress/wp-content/uploads/160889-tv-news-feature-fast-x-everything-we-know-so-far-about-fast-and-furious-10-image1-tw2sei7jma.jpg"}
        text={"May 19, 2023"}
        />
      </div>
    </div>
    <div>
    <Link className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" href="/comingsoon">See more</Link>
      </div>
    </div>
  )
}

export default HomeComing