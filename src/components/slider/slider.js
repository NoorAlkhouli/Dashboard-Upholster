import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



export default function App() {
  return (
    <>
    <div className='gg'>
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
          <img src="photos/cov.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/img=.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/uus.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/marjoha.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/ggg.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/image5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/ooop.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/image2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/image20.jpg" />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src="photos/image6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/image7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/image8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/image9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/image10.jpg" />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src="photos/image12.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/image13.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/image14.jpg" />
        </SwiperSlide>
      
        <SwiperSlide>
          <img src="photos/image000.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photos/iamg.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <video src="photos/ssa.MP4" autoPlay loop muted/>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
