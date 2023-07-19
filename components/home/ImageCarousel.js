// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Image carousel using swiper js

// Swiper components 
import { Navigation} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper css styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Image carousel using swiper js


// ADD STYLES NEED OVERLAY AND EDIT IMAGES.

const ImageCarousel = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-screen"
      style={{ height: 'calc(100vh - 80px)'}}
    >
      {/* Slide 1 */}
      <SwiperSlide
        className="w-screen h-full"
        style={{ width: '100%', height: '100%' }}
      >
        <div className="h-full flex justify-center items-center">
          <img
            src="https://via.placeholder.com/1920x1735"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide
        className="w-screen h-full"
        style={{ width: '100%', height: '100%' }}
      >
        <div className="h-full flex justify-center items-center">
          <img
            src="https://via.placeholder.com/1920x1735"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide
        className="w-screen h-full"
        style={{ width: '100%', height: '100%' }}
      >
        <div className="h-full flex justify-center items-center">
          <img
            src="https://via.placeholder.com/1920x1735"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default ImageCarousel
