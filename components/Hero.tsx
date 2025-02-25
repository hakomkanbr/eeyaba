import Image from "next/image";
import home_page_1 from "@/public/images/home_page_1.svg";
import home_page_2 from "@/public/images/home_page_2.svg";
import home_page_4 from "@/public/images/home_page_4.svg";
import home_page_3 from "@/public/images/home_page_3.svg";
import home_page_6 from "@/public/images/home_page_6.svg";
import home_page_7 from "@/public/images/home_page_7.svg";
import home_page_9 from "@/public/images/home_page_9.svg";

import home_page_icon1_10 from "@/public/images/home_page_icon1_10.svg";
import home_page_left_8 from "@/public/images/home_page_left_8.svg";
import home_page_icon1_11 from "@/public/images/home_page_icon2_11.svg";
import home_page_icon3_12 from "@/public/images/home_page_icon3_12.svg";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      {/* Ana arka plan */}
      <Image
        src={home_page_1}
        alt="background"
        layout="fill"
        className="object-cover z-0"
      />

      <div className=" max-w-7xl mx-auto px-4">
        <div className="relative flex flex-wrap items-center justify-between">
          {/* İkincil arka plan */}
          <div className="absolute z-0 left-2 right-0">
            <Image
              src={home_page_2}
              alt="backgroundbottom"
              layout="intrinsic"
              width={700}
              height={300}
              className="object-cover"
            />
          </div>

          <div className="relative left-14 md:left-16 z-10 ">
            <Image
              src={home_page_4}
              alt="left image"
              layout="intrinsic"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <button
            className="bg-[#13a0cb] text-white px-4 py-2 
              font-bold rounded-tl-xl rounded-tr-xl 
              "
          >
            الأقسام
          </button>
        </div>

        {/* Arama Kutusu */}
        <div className="relative flex items-center justify-end  ">
          <input
            type="text"
            placeholder="للبحث السريع عن خدماتنا..."
            dir="rtl"
            className="font-asmaa p-2 placeholder-gray-600 text-black 
            bg-white border border-gray-700 rounded-tl-xl rounded-bl-xl 
            focus:outline-none sm:text-lg text-lg"
          />
          <button className="bg-[#13a0cb] text-white px-3 py-3 rounded-tr-xl rounded-br-xl">
            <FaSearch className="text-white text-xl" />
          </button>
        </div>

        {/* Üst Katman - İçerik */}
        <div className="lg:mt-0 mt-16 text-white">
          {/* Görsel Kısmı */}
          <div className="  max-w-2xl mx-auto w-full">
            <div className="items-center flex flex-row ">
              <div className="flex-1 text-center mb-4 md:mb-0 relative z-10">
                <Image
                  src={home_page_left_8}
                  alt="Example"
                  layout="intrinsic"
                  width={400}
                  height={300}
                  className="object-contain mt-4"
                />
              </div>

              <div className="flex-1 text-right relative z-10 lg:mt-20 mt-14 ">
                <h1 className="text-2xl md:text-4xl font-bold font-asmaa lg:mb-8 mb-2 text-[#f7c518]">
                  مع فريق إيابا ميديا
                </h1>
                <ul className=" font-asmaa">
                  <li className="lg:mb-8 mb-2 flex flex-row items-center justify-end">
                    <Image
                      src={home_page_icon1_10}
                      alt="left image"
                      layout="intrinsic"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                    <span className="text-xl md:text-2xl">إبداع</span>
                  </li>
                  <li className="lg:mb-8 mb-2 flex flex-row items-center justify-end">
                    <Image
                      src={home_page_icon1_11}
                      alt="left image"
                      layout="intrinsic"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                    <span className="mr-2 text-xl md:text-2xl">احترافية</span>
                  </li>
                  <li className="lg:mb-8 mb-2 flex flex-row items-center justify-end">
                    <Image
                      src={home_page_icon3_12}
                      alt="left image"
                      layout="intrinsic"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                    <span className="mr-2 text-xl md:text-2xl">
                      حلول مبتكرة
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-end items-end ">
              <span className="text-2xl md:text-2xl font-asmaa z-10 mb-2">
                نصنع لك الفرق من الفكرة الى التنفسذ
              </span>
              <button className="text-2xl md:text-2xl font-asmaa bg-[#13a0cb] text-white lg:px-6 px-4 lg:py-3 py-2 rounded-3xl shadow-lg transform transition duration-300 ease-in-out">
                أراء وتقيمات عملائنا
              </button>
            </div>
          </div>
        </div>

        {/* Arka Plan - home_page_3 */}
        <div className="absolute top-32 right-0 z-10">
          <Image
            src={home_page_3}
            alt="backgroundbotton"
            layout="intrinsic"
            width={600}
            height={400}
            className="object-cover block sm:hidden"
          />
        </div>

        {/* Arka Plan - home_page_6 */}
        <div className="absolute top-[148px] right-0 z-0">
          <Image
            src={home_page_6}
            alt="backgroundbotton"
            layout="intrinsic"
            width={100}
            height={100}
            className="object-cover block sm:hidden"
          />
        </div>

        {/* Arka Plan - home_page_7 */}
        <div className="absolute bottom-[50px] right-0 z-0">
          <Image
            src={home_page_7}
            alt="backgroundbotton"
            layout="intrinsic"
            width={600}
            height={400}
            className="object-cover block sm:hidden"
          />
        </div>

        {/* Arka Plan - home_page_7 */}
        <div className="absolute bottom-[110px] left-8 z-0">
          <Image
            src={home_page_9}
            alt="backgroundbotton"
            layout="intrinsic"
            width={50}
            height={100}
            className="object-cover block sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
