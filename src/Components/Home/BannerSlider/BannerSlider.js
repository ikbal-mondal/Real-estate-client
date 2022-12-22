import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import banner1 from '../../../assest/banner1.jpg'
import banner2 from '../../../assest/banner2.jpg'
import banner3 from '../../../assest/banner3 .jpg'


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
        <SwiperSlide><img className='w-full ' src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full ' src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full ' src={banner3} alt="" /></SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default BannerSlider;