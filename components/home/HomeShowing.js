// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Component for displaying the list of movies currently showing on the home page

import HomeMovieCard from "./HomeMovieCard"
import Link from 'next/link'

const HomeShowing = () => {
  return (
    <div>
      <div className="pt-10 pb-10">
      <h1 class="mb-4 text-left text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white p-10">Whats on </h1>
      <div className="container m-auto grid grid-cols-3 gap-4">
        <HomeMovieCard 
        title={"Batman"}
        url={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/robert-pattinson-as-batman-bruce-wayne-in-the-batman-1645186686.jpeg?crop=0.891xw:1.00xh;0.109xw,0&resize=1200:*"}
        text={"Out now"}
        />
        <HomeMovieCard 
        title={"Creed III"}
        url={"https://regalcdn.azureedge.net/CW/CreedIII/HO00009436/TV_LargePosterImage/20221221-070205536.jpg"}
        text={"Out now"}
        />
        <HomeMovieCard 
        title={"Ant-man 3"}
        url={"https://regalcdn.azureedge.net/CW/AntManAndTheWaspQuantumania/HO00009350/TV_LargePosterImage/20230112-130121570.jpg"}
        text={"Out now"}/>
      </div>
     
    </div>
    <div>
        <Link className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" href="/whatson">See more</Link>
      </div>
    </div>
    
  )
}

export default HomeShowing