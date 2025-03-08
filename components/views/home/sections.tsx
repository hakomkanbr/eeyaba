"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import LogoSearchSection from "./logo-search-section";
import SecoudSection from "./second-section";
import PrintSection from "./print-setion";
import MediaSection from "./media-section";
import ProgramingSection from "./programing-setion";

const Sections = () => {
  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <Swiper
        modules={[Mousewheel, Scrollbar]}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{
          invert: false,
          forceToAxis: true,
        }}
        scrollbar={{
          draggable: true,
        }}
        speed={700}
        style={{ height: "100%" }}
      >
        <SwiperSlide style={{ height: "100%" }} className="cursor-pointer">
          <LogoSearchSection />
          <SecoudSection />
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          className="cursor-pointer"
        >
          <MediaSection />
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          className="cursor-pointer"
        >
          <PrintSection />
        </SwiperSlide>
        <SwiperSlide
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          className="cursor-pointer"
        >
          <ProgramingSection />
        </SwiperSlide>

        <SwiperSlide
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          className="cursor-pointer"
        ></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sections;
