import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const LogoSearchSection = () => {
  return (
    <section className="relative">
      <div className="w-full relative -top-1 h-[90px]">
        <Image
          src="/images/tttt.png"
          alt="backgroundbotton"
          fill
        />
      </div>
      <div className="p-1 absolute top-0 flex flex-row justify-between gap-10">
        <div className="w-2/5 flex items-center">
          {/* <button className="bg-[#13a0cb] text-white px-[0.6rem] py-[0.6rem] rounded-tr-lg rounded-br-lg sm:px-3 sm:py-3">
            <FaSearch className="text-white text-sm" />
          </button>
          <input
            type="text"
            placeholder="البحث السريع.."
            className="font-asmaa w-[120px] p-2  text-black 
          bg-white border border-gray-700 rounded-tl-lg rounded-bl-lg
          focus:outline-none text-xs"
          /> */}
        </div>
        <div className="w-3/5">
          <Image
            src="/images/home_page_4.svg"
            alt="left image"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default LogoSearchSection;
