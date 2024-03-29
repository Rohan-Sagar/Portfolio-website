import React from "react";
import { ImagesContainer } from "./styles/Projects.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
];

const SWIPER_MODULES = [Navigation, Pagination, Mousewheel, Keyboard];

function ImagesSwiper() {
  return (
    <ImagesContainer>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={SWIPER_MODULES}
        slidesPerView={1}
        className="swiper-images"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="swiper-image">
            <img src={`assets/Julienne/${image}`} alt="slicer" />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImagesContainer>
  );
}

export default ImagesSwiper;
