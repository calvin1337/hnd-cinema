
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
            <img src=" https://via.placeholder.com/1920x1735" alt="" />
          </div>
          </SwiperSlide>
          {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-full flex justify-center items-center">
          <img src=" https://via.placeholder.com/1920x1735" alt="" />
          </div></SwiperSlide>
          {/* Slide 3 */}
        <SwiperSlide>
          <div className="h-full flex justify-center items-center">
          <img src=" https://via.placeholder.com/1920x1735" alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ImageCarousel
