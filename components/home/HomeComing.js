import HomeMovieCard from "./HomeMovieCard"


const HomeComing = () => {
  return (
    <div>
       <div className="pt-10 pb-10">
      <h1 className="text-white  text-left p-10">Now Showing</h1>
      <div className="container m-auto grid grid-cols-3 gap-4">
        <HomeMovieCard 
        title={"Guardians of the Galaxy Vol. 3"}
        url={"https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"}/>
        <HomeMovieCard 
        title={"The Super Mario Bros. Movie"}
        url={"https://m.media-amazon.com/images/M/MV5BNGZhYWIyZWUtOTdjZS00ZTc1LWFlZDMtNzU5MTE0OTcyMjg1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"}/>
        <HomeMovieCard 
        title={"Fast X"}
        url={"https://static1.pocketlintimages.com/wordpress/wp-content/uploads/160889-tv-news-feature-fast-x-everything-we-know-so-far-about-fast-and-furious-10-image1-tw2sei7jma.jpg"}/>
      </div>
    </div>
    </div>
  )
}

export default HomeComing