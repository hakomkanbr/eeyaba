import Image from "next/image";
import home_page_1 from "@/public/images/home_page_1.svg";
import home_page_3 from "@/public/images/home_page_3.svg";
import home_page_4 from "@/public/images/home_page_4.svg";
import home_page_5 from "@/public/images/home_page_5.svg";
import home_page_6 from "@/public/images/home_page_6.svg";
import home_page_7 from "@/public/images/home_page_7.svg";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      {/* Arka Plan - home_page_1 */}
      <Image
        src={home_page_1}
        alt="background"
        layout="fill"
        className="object-cover z-0"
      />

      <div className="z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Arka Plan - home_page_3 */}
        <div className="absolute top-20 right-0 z-10">
          <Image
            src={home_page_3}
            alt="backgroundbotton"
            layout="intrinsic"
            width={10000}
            height={100}
            className="object-cover block sm:hidden"
          />
        </div>

        {/* Arka Plan - home_page_6 */}
        <div className="absolute top-[100px] right-0 z-0">
          <Image
            src={home_page_6}
            alt="backgroundbotton"
            layout="intrinsic"
            width={100}
            height={100}
            className="object-cover block sm:hidden"
          />
        </div>

        <div className="relative flex items-center justify-between">
          <div className="flex-1">
            <Image
              src={home_page_4}
              alt="left image"
              layout="intrinsic"
              width={300}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-right">
            <div className="relative w-full flex items-center justify-end">
              <input
                type="text"
                placeholder="للبحث السريع عن خدماتنا..."
                dir="rtl"
                className="
                  font-asmaa p-2 lg:p-3 placeholder-gray-600 text-black 
                  bg-white border border-gray-700 rounded-tl-xl rounded-bl-xl 
                  focus:outline-none sm:text-lg"
              />
              <button className="bg-[#13a0cb] text-white px-2 py-3 lg:px-4 lg:py-4 rounded-tr-xl rounded-br-xl">
                <FaSearch className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Üst Katman - İçerik */}
        <div className="flex flex-col lg:flex-row items-center lg:mt-12 mt-36 relative text-white">
          <div className="flex-1 text-center lg:text-right lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold font-asmaa mb-2 text-[#f7c518]">
              إيابا ميديا - حيث يتحول الإبداع إلى واقع؟
            </h1>

            <ul className="mb-4 font-asmaa">
              <li className="mb-2">
                <span className="mr-2 text-xl">✏️</span> تصميم جرافيك احترافي
              </li>
              <li className="mb-2">
                <span className="mr-2 text-xl">📸</span> تصوير فوتوغرافي وفيديو
                بجودة عالية
              </li>
              <li className="mb-2">
                <span className="mr-2 text-xl">🎥</span> مونتاج وتحرير فيديو
                احترافي
              </li>
              <li className="mb-2">
                <span className="mr-2 text-xl">📲</span> إدارة وتسويق عبر
                السوشيال ميديا
              </li>
            </ul>

            <button className="mt-5 font-asmaa bg-[#13a0cb] text-white px-6 py-3 rounded-3xl shadow-lg transform transition duration-300 ease-in-out">
              أراء وتقيمات عملائنا
            </button>
          </div>

          {/* Görseli yan yana hizalamak için flex-1 eklendi */}
          <div className="flex-1 text-center lg:text-left">
            <Image
              src={home_page_7}
              alt="Example"
              layout="intrinsic"
              width={400}
              height={300}
              className="object-contain mt-4"
            />
          </div>
        </div>

        {/* Arka Plan - home_page_5 */}
        <div className="absolute bottom-0 left-0 mb-4 ml-4">
          <Image
            src={home_page_5}
            alt="backgroundbotton"
            layout="intrinsic"
            width={10000}
            height={100}
            className="object-cover block sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
