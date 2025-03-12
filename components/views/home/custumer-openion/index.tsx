"use client";;
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import CustumerOpenionPost from './post';
import RocketAnimation from '../rocket';



const CustumerOpenionSection = () => {
  return (
    <div className="relative">
      <RocketAnimation />
      <div className="bg-[url('/images/newpage/Asset_5.png')] bg-no-repeat bg-cover">
        <button
          className="mt-0 mb-5 w-[180px] flex justify-center items-center m-auto bg-yellowGold-500 
          font-asmaa px-4 py-1 text-lg
          rounded-3xl shadow-lg 
          transform transition duration-300 ease-in-out
          hover:scale-105 hover:bg-[#0e85a1] relative"
        >
          المزيد من أراء العملاء
        </button>
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          autoplay={{
            delay:2500
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide><CustumerOpenionPost /></SwiperSlide>
          <SwiperSlide><CustumerOpenionPost /></SwiperSlide>
          <SwiperSlide><CustumerOpenionPost /></SwiperSlide>
          <SwiperSlide><CustumerOpenionPost /></SwiperSlide>
          <SwiperSlide><CustumerOpenionPost /></SwiperSlide>
          <SwiperSlide><CustumerOpenionPost /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CustumerOpenionSection;
