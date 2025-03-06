import React from "react";
import Image from "next/image";

const SecoudSection = () => {
  return (
    <div className="mx-2">
      <div className="flex flex-row items-center justify-start px-4">
        <div className="flex-1 flex flex-col items-start justify-center pt-5">
          <h1 className="text-xl md:text-4xl font-bold font-asmaa mb-2 text-[#f7c518]">
            مع <span className="text-white">فريق إيابا ميديا</span>
          </h1>
          <ul className="font-asmaa">
            <li className="mb-1 flex flex-row items-center">
              <span className="text-lg text-[#f7c518]">إبداع</span>
              <Image
                src="/images/home_page_icon1_10.svg"
                alt="left image"
                layout="intrinsic"
                width={20}
                height={20}
                className="object-contain mr-2"
              />
            </li>
            <li className="mb-1 flex flex-row items-center">
              <span className="text-lg text-[#f7c518]">احترافية</span>
              <Image
                src="/images/home_page_icon2_11.svg"
                alt="left image"
                layout="intrinsic"
                width={20}
                height={20}
                className="object-contain mr-2"
              />
            </li>
            <li className="mb-1 flex flex-row items-center">
              <span className="text-lg text-[#f7c518]">حلول مبتكرة</span>
              <Image
                src="/images/home_page_icon3_12.svg"
                alt="left image"
                layout="intrinsic"
                width={16}
                height={16}
                className="object-contain mr-2"
              />
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="/images/home_page_left_8.svg"
            alt="Example"
            layout="intrinsic"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <span className="text-lg font-asmaa mb-2 text-white text-center block">
          نصنع لك الفرق من الفكرة الى التنفسذ
        </span>
        <button
            className="w-[180px] m-auto bg-[#13a0cb] text-white text-sm
            font-asmaa px-4 py-2 
            rounded-3xl shadow-lg 
            transform transition duration-300 ease-in-out
            hover:scale-105 hover:bg-[#0e85a1]"
            >
            أراء وتقيمات عملائنا
          </button>
      </div>
    </div>
  );
};

export default SecoudSection;
