import React, { useState } from "react";
import { ImagesContainer } from "./styles/Projects.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ImagesSwiper() {
  return (
    <ImagesContainer>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        slidesPerView={1}
        className="swiper-images"
      >
        <SwiperSlide className="swiper-image">
          <img src={"assets/Julienne/1.png"} alt="slicer" />
        </SwiperSlide>
        <SwiperSlide className="swiper-image">
          <img src={"assets/Julienne/2.png"} alt="slicer" />
        </SwiperSlide>
        <SwiperSlide className="swiper-image">
          <img src={"assets/Julienne/3.png"} alt="slicer" />
        </SwiperSlide>
        <SwiperSlide className="swiper-image">
          <img src={"assets/Julienne/4.png"} alt="slicer" />
        </SwiperSlide>
        <SwiperSlide className="swiper-image">
          <img src={"assets/Julienne/5.png"} alt="slicer" />
        </SwiperSlide>
        <SwiperSlide className="swiper-image">
          <img src={"assets/Julienne/6.png"} alt="slicer" />
        </SwiperSlide>
        <SwiperSlide className="swiper-image">
          <img src={"assets/Julienne/7.png"} alt="slicer" />
        </SwiperSlide>
        <SwiperSlide className="swiper-image">
          <img src={"assets/Julienne/8.png"} alt="slicer" />
        </SwiperSlide>
      </Swiper>
    </ImagesContainer>
  );
}

export default ImagesSwiper;
