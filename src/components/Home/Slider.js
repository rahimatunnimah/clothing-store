import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import swiperOne from "../../assets/casual.png";
import swiperTwo from "../../assets/fashion.png";
import swiperThree from "../../assets/black.png";
import swiperFour from "../../assets/formal.png";

import "swiper/css/bundle";

function Slider() {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop
      autoplay={{ delay: 2000 }}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      className="px-5"
    >
      <SwiperSlide>
        <h2 className="text-slider text-center">Casual Edition</h2>
        <img className="img-slider" src={swiperOne} alt="img-slider" />
      </SwiperSlide>
      <SwiperSlide>
        <h2 className="text-slider text-center">Trends in 2022</h2>
        <img className="img-slider" src={swiperTwo} alt="img-slider" />
      </SwiperSlide>
      <SwiperSlide>
        <h2 className="text-slider text-center">Black Edition</h2>
        <img className="img-slider" src={swiperThree} alt="img-slider" />
      </SwiperSlide>
      <SwiperSlide>
        <h2 className="text-slider text-center">Formal Fashion</h2>
        <img className="img-slider" src={swiperFour} alt="img-slider" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
