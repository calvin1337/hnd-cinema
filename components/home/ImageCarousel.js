
// Swiper components 
import { Navigation} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper css styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Image carousel using swiper js

const ImageCarousel = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-screen border-green-200-400 border">
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-full flex justify-center items-center">
            <h1>Slide 1</h1>
          </div>
          </SwiperSlide>
          {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-full flex justify-center items-center">
            <h1>Slide 2</h1>
          </div></SwiperSlide>
          {/* Slide 3 */}
        <SwiperSlide>
          <div className="h-full flex justify-center items-center">
              <h1>Slide 3</h1>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ImageCarousel
