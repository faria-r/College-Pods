import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
//import images
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.png';
import img9 from '../../assets/9.jpg';
import img10 from '../../assets/10.jpg';
const ImageGallery = () => {
    return (
        <>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='h-full w-auto' src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full w-auto' src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full w-auto' src={img6} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full w-auto' src={img7} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full w-auto' src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full w-auto' src={img4} />
          </SwiperSlide>
         
          <SwiperSlide>
            <img className='h-full w-auto' src={img8} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full w-auto' src={img9} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full w-auto' src={img10} />
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default ImageGallery;


