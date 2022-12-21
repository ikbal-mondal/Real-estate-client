import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
const BannerSlider = () => {
    return (
        <div>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full h-96' src="https://ap.rdcpix.com/f9069154b66f990edad57a3480471167l-m1230024412od-w480_h360_x2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-96' src="https://nh.rdcpix.com/330615e436757ed52a9aa74387fdf4del-f623634504od-w480_h360_x2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-96' src="https://ap.rdcpix.com/69be20ef1ebbfe3aca2e89f5af4ef4d9l-m3363214368od-w480_h360_x2.webp" alt="" /></SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default BannerSlider;