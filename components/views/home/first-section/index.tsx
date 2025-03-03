import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const FirstSection = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 sm:px-8 py-2">
        <div className="w-full h-[90px]">
          <Image
            src="/images/home_page_2.svg"
            alt="backgroundbotton"
            fill
          />
        </div>
        {/* <div className="p-2 relative flex flex-row items-center justify-between h-full">
          <div className="z-10">
            <Image
              src="/images/home_page_4.svg"
              alt="left image"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FirstSection;
