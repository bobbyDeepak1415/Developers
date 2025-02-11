import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ImageCarousel = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <img src="/images/campus1.jpg" alt="Campus 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/campus2.jpg" alt="Campus 2" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
