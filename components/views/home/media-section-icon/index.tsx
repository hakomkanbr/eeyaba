import Image from "next/image";

import icon1 from "@/public/images/newpage/Asset_3.svg";
import icon4 from "@/public/images/newpage/Asset_4.svg";
import icon6 from "@/public/images/newpage/Asset_6.png";

const MediaSectionIcon = () => {
  return (
    <div className="mt-60 relative min-h-screen">
      <section className="relative bg-[url('/images/newpage/Asset_5.png')] bg-no-repeat bg-cover h-[100vh]">
        <button
          className="mt-0 w-[180px] flex justify-center items-center m-auto bg-yellowGold-500 
          font-asmaa px-4 py-1 text-xl
          rounded-3xl shadow-lg 
          transform transition duration-300 ease-in-out
          hover:scale-105 hover:bg-[#0e85a1] relative"
        >
          المزيد من أراء العملاء
        </button>

        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-center mt-6 mb-6">
            <button
              className="w-[180px] border-white border-spacing-3 border-4 m-auto bg-[#13a0cb] text-sm
              font-asmaa px-4 py-1 text-white
              rounded-3xl shadow-lg 
              transform transition duration-300 ease-in-out
              hover:scale-105 hover:bg-yellowGold-500"
            >
              اعمالنا المميزة
            </button>
          </div>

          <div className="grid grid-cols-5 md:grid-cols-8 gap-4">
            {[
              { Icon: icon1, label: "أعمال قسم المونتاج", bgColor: "bg-blue-500" },
              { Icon: icon1, label: "أعمال قسم التصوير", bgColor: "bg-yellow-500" },
              { Icon: icon4, label: "أعمال قسم التصميم", bgColor: "bg-red-500" },
              { Icon: icon1, label: "أعمال قسم الإعلانات", bgColor: "bg-green-500" },
              { Icon: icon1, label: "أعمال السوشيال ميديا", bgColor: "bg-purple-500" },
              { Icon: icon1, label: "أعمال كتابة المحتوى", bgColor: "bg-orange-500" },
              { Icon: icon6, label: "أعمال التعليق الصوتي", bgColor: "bg-pink-500" },
              { Icon: icon1, label: "أعمال قسم البرمجة", bgColor: "bg-teal-500" },
              { Icon: icon6, label: "أعمال التعليق الصوتي", bgColor: "bg-pink-500" },
              { Icon: icon1, label: "أعمال قسم البرمجة", bgColor: "bg-teal-500" },
            ].map(({ Icon, label, bgColor }, index) => (
              <div key={index} className="flex flex-col items-center text-white">
                <div className={`${bgColor} p-4 rounded-full`}>
                  <Image src={Icon} width={30} height={30} alt={label} className="text-white" />
                </div>
                <p className="mt-2 text-center">
                  {label.split(" ").slice(0, -1).map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                  <span className={`block ${bgColor} text-white p-1 rounded`}>
                    {label.split(" ").slice(-1)} 
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaSectionIcon;
