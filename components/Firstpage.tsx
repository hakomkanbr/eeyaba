import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Firstpage = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Ana arka plan */}
      <Image
        src="/images/home_page_1.svg"
        alt="background"
        layout="fill"
        className="object-cover z-0" // Arka plan resmi
        priority
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 sm:px-8 py-2">
        <div className="absolute top-[-55px] left-0 right-0 bottom-0 z-0 block sm:hidden">
          <Image
            src="/images/home_page_2.svg"
            alt="backgroundbotton"
            width={500}
            height={300}
            layout="intrinsic"
            priority
          />
        </div>
        <div className="p-2 relative flex flex-row items-center justify-between h-full">
          <div className="z-10">
            <Image
              src="/images/home_page_4.svg"
              alt="left image"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="flex items-center ml-4 sm:ml-0 z-10">
            <input
              type="text"
              placeholder="للبحث السريع عن خدماتنا..."
              dir="rtl"
              className="font-asmaa p-1 placeholder-gray-600 text-black 
            bg-white border border-gray-700 rounded-tl-xl rounded-bl-xl 
            focus:outline-none text-sm sm:p-2 sm:text-lg"
            />
            <button className="bg-[#13a0cb] text-white px-2 py-2 rounded-tr-xl rounded-br-xl sm:px-3 sm:py-3">
              <FaSearch className="text-white text-sm sm:text-lg" />
            </button>
          </div>
        </div>

        <div className="absolute top-[80px] left-0 right-0 bottom-0 z-20 block sm:hidden">
          <Image
            src="/images/home_page_3.svg"
            alt="backgroundbotton"
            width={500}
            height={300}
            layout="intrinsic"
            priority
          />
        </div>

        <div className="absolute top-[100px] left-0 right-0 z-10 block sm:hidden flex justify-end items-center">
          <Image
            src="/images/home_page_6.svg"
            alt="backgroundbotton"
            width={100}
            height={100}
            layout="intrinsic"
            priority
          />
        </div>

        <div className="p-2 max-w-2xl mx-auto px-8   relative flex flex-row items-center justify-center h-full">
          <div className="z-10 flex-1 ">
            <Image
              src="/images/home_page_left_8.svg"
              alt="Example"
              layout="intrinsic"
              width={500}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-right relative z-10 sm:mt-20 mt-24 flex flex-col ">
            <h1 className="text-2xl md:text-4xl font-bold font-asmaa sm:mb-8 mb-4 text-[#f7c518]">
             مع <span className="text-white">فريق إيابا ميديا</span>
            </h1>
            <ul className="font-asmaa">
              <li className="sm:mb-6 mb-3 flex flex-row items-center justify-end">
                <Image
                  src="/images/home_page_icon1_10.svg"
                  alt="left image"
                  layout="intrinsic"
                  width={30}
                  height={30}
                  className="object-contain mr-2"
                />
                <span className="text-xl md:text-2xl">إبداع</span>
              </li>
              <li className="sm:mb-6 mb-3 flex flex-row items-center justify-end">
                <Image
                  src="/images/home_page_icon2_11.svg"
                  alt="left image"
                  layout="intrinsic"
                  width={30}
                  height={30}
                  className="object-contain mr-2"
                />
                <span className="text-xl md:text-2xl">احترافية</span>
              </li>
              <li className="sm:mb-6 mb-3 flex flex-row items-center justify-end">
                <Image
                  src="/images/home_page_icon3_12.svg"
                  alt="left image"
                  layout="intrinsic"
                  width={30}
                  height={30}
                  className="object-contain mr-2"
                />
                <span className="text-xl md:text-2xl">حلول مبتكرة</span>
              </li>
            </ul>
            <span className="text-xl sm::text-xl font-asmaa z-10 mb-4 text-right">
              نصنع لك الفرق من الفكرة الى التنفسذ
            </span>
            <button
              className="sm:w-[60%] w-full text-right bg-[#13a0cb] text-white text-lg sm:text-xl
             font-asmaa sm:px-5 px-4 sm:py-3 py-2 
             rounded-3xl shadow-lg 
             transform transition duration-300 ease-in-out
              hover:scale-105 hover:bg-[#0e85a1]"
            >
              أراء وتقيمات عملائنا
            </button>
          </div>
        </div>

        <div className="absolute top-[450px] left-0 right-0 bottom-0 z-20 block sm:hidden">
          <Image
            src="/images/home_page_5.svg"
            alt="backgroundbotton"
            width={500}
            height={300}
            layout="intrinsic"
            priority
          />
        </div>

        <div className="py-12">
          <div className="absolute inset-0  z-20 max-w-7xl mx-auto  py-2">
            <Image
              src="/images/circles.svg"
              alt="background"
              layout="fill"
              objectFit="cover"
            />
            <Image
              src="/images/star_1.svg"
              alt="background"
              className="absolute bottom-8  left-10"
              width={30}
              height={30}
            />

            <Image
              src="/images/star_3.svg"
              alt="background"
              className="absolute bottom-5  right-10"
              width={30}
              height={30}
            />
          </div>

          <div className="relative z-20 max-w-lg mx-auto px-4 py-2 flex flex-col items-center text-center">
            <h1 className="text-3xl mb-4 font-bold font-asmaa text-[#f7c518]">إيبا ميديا</h1>
            <p className="mb-6 font-asmaa">
              فريقنا المبدع جاهز لمساعدتك على التميز في عالم التواصل الاجتماعي
              ويوفر لك حلولًا متكاملة تشمل التصميم الجرافيكي، التصوير الاحترافي،
              الموشن والسوق الرقمي، لتشجيع محتواك والإستراتيجيات المبتكرة،
              وتساعد في إظهار صورتك الرقمية وجذب جمهورك المستهدف.
            </p>
            <button className="font-asmaa bg-[#13a0cb] text-white text-lg px-6 py-3 rounded-3xl shadow-lg">
              خدمات إيبا ميديا
            </button>
            <div className="mt-6">
              <Image
                src="/images/home_page_4.svg"
                alt="left image"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
