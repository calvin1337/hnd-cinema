import SingleMovieCS from "@/components/comingsoon/SingleMovieCS";

// add sort by
// 

const comingsoon = () => {
  return (
    <div className="text-white">
      <div className="mb-10 mt-10 text-center">
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus?</p>
      </div>
      <div class="title-container text-center">
        <h1>Coming Soon</h1>
      </div>
      <div className="flex flex-col items-center">
      <SingleMovieCS 
      title={"Guardians of the Galaxy Vol. 3"} 
      url={"https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"}
      release={"May 5, 2023"} 
      desc={"Guardians of the Galaxy Vol. 3 is an upcoming American superhero film based on the Marvel Comics superhero team Guardians of the Galaxy, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is intended to be the sequel to Guardians of the Galaxy Vol. 2 (2017) and the 22nd film in the Marvel Cinematic Universe (MCU)."} 
      rating={90}/>
      <SingleMovieCS 
      title={"The Super Mario Bros. Movie"} 
      url={"https://m.media-amazon.com/images/M/MV5BNGZhYWIyZWUtOTdjZS00ZTc1LWFlZDMtNzU5MTE0OTcyMjg1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"}
      release={"December 21, 2022"}
      desc={"The Super Mario Bros. Movie is an upcoming American live-action/animated comedy film based on the video game franchise of the same name by Nintendo. The film is being directed by Illumination Entertainment's Chris Meledandri and is being produced by his company, Illumination, along with Nintendo and Universal Pictures."}
      rating={40}
      />
      <SingleMovieCS 
      title={"Fast X"}
      url={"https://static1.pocketlintimages.com/wordpress/wp-content/uploads/160889-tv-news-feature-fast-x-everything-we-know-so-far-about-fast-and-furious-10-image1-tw2sei7jma.jpg"}
      release={"April 2, 2021"}
      desc={"The Fast and the Furious 10 is an upcoming American action film directed by Justin Lin and written by Daniel Casey. It is the tenth installment in The Fast and the Furious franchise. The film stars Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Chris 'Ludacris' Bridges, Nathalie Emmanuel, Jordana Brewster, Sung Kang, Helen Mirren, and Charlize Theron. It is scheduled to be released in the United States on April 2, 2021, by Universal Pictures."}
      rating={30}
      />
      </div>
      
    </div>
  );
};

export default comingsoon;
