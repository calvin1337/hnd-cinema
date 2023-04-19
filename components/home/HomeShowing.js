import HomeMovieCard from "./HomeMovieCard"

const HomeShowing = () => {
  return (
    <div className="pt-10 pb-10">
      <h1 className="text-white  text-left p-10">What&apos;s On</h1>
      <div className="container m-auto grid grid-cols-3 gap-4">
        <HomeMovieCard 
        title={"Batman"}
        url={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/robert-pattinson-as-batman-bruce-wayne-in-the-batman-1645186686.jpeg?crop=0.891xw:1.00xh;0.109xw,0&resize=1200:*"}/>
        <HomeMovieCard 
        title={"Creed III"}
        url={"https://regalcdn.azureedge.net/CW/CreedIII/HO00009436/TV_LargePosterImage/20221221-070205536.jpg"}/>
        <HomeMovieCard 
        title={"Ant-man 3"}
        url={"https://regalcdn.azureedge.net/CW/AntManAndTheWaspQuantumania/HO00009350/TV_LargePosterImage/20230112-130121570.jpg"}/>
      </div>
    </div>
  )
}

export default HomeShowing