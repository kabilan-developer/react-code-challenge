import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";


const ImageSwiper = (props) => {
  const {imagesData,height} = props
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      style={{ height: height }}
    >
      {imagesData?.map((item) => (
        <SwiperSlide>
          <img
            src={item}
            alt="img"
            width="100%"
            height="100%"
            className="img-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
