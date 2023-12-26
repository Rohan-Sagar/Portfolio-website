import React from "react";
import { ImagesContainer } from "./Experience.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
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
        autoPlay={{ delay: 2000 }}
        className="swiper-images"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="swiper-image">
            <img src={`assets/Mintcad/${image}`} alt="slicer" style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              borderRadius: '15px 0 0 15px',
              borderTop: '2px solid #777',
              borderLeft: '2px solid #777',
              borderBottom: '2px solid #777',
              borderRight: 'none',
              zIndex: 10, 
              objectFit: 'cover' 
            }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImagesContainer>
  );
}

export default ImagesSwiper;
