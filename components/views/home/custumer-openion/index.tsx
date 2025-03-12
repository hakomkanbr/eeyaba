"use client";;
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import RocketSection from '../rocket';
import CustumerOpenionPost from './post';
import { Autoplay } from 'swiper/modules';


const CustumerOpenionSection = () => {
  return (
    <div className="mx-2 mt-32 relative">
      {/* <RocketSection /> */}
      <section className="absolute right-0 left-0 bottom-40 bg-[url('/images/newpage/Asset_5.png')] bg-no-repeat bg-cover">
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
      </section>
    </div>
  );
};

export default CustumerOpenionSection;
