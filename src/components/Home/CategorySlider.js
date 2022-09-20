import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import tShirt from "../../assets/t-shirt.png";
import short from "../../assets/short.png";
import shoes from "../../assets/shoes.png";
import heels from "../../assets/heels.png";
import suit from "../../assets/suit.png";
import dress from "../../assets/dress.png";
import pants from "../../assets/pants.png";
import jacket from "../../assets/jacket.png";

import "swiper/css/bundle";

function CategorySlider() {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      loop
      spaceBetween={10}
      slidesPerView={5}
      navigation
    >
      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2">
        <img src={tShirt} alt="img-category" />
      </SwiperSlide>

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2">
        <img src={short} alt="img-category" />
      </SwiperSlide>

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2">
        <img src={shoes} alt="img-category" />
      </SwiperSlide>

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2">
        <img src={heels} alt="img-category" />
      </SwiperSlide>

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2">
        <img src={suit} alt="img-category" />
      </SwiperSlide>

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2">
        <img src={dress} alt="img-category" />
      </SwiperSlide>

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2">
        <img src={pants} alt="img-category" />
      </SwiperSlide>

      <SwiperSlide className="rounded d-flex justify-content-center align-items-center p-xl-4 p-md-2">
        <img src={jacket} alt="img-category" />
      </SwiperSlide>
    </Swiper>
  );
}

export default CategorySlider;
