import Image from "next/image";

import icon1 from "@/public/images/our-work/Asset_1.svg";
import icon2 from "@/public/images/our-work/Asset_2.svg";
import icon3 from "@/public/images/our-work/Asset_3.svg";
import icon4 from "@/public/images/our-work/Asset_4.svg";
import icon5 from "@/public/images/our-work/Asset_5.svg";
import icon6 from "@/public/images/our-work/Asset_6.svg";
import icon7 from "@/public/images/our-work/Asset_7.svg";
import icon8 from "@/public/images/our-work/Asset_8.svg";
import icon9 from "@/public/images/our-work/Asset_9.svg";
import icon10 from "@/public/images/our-work/Asset_10.svg";
import icon11 from "@/public/images/our-work/Asset_11.svg";
import icon12 from "@/public/images/our-work/Asset_12.svg";
import { twMerge } from "tailwind-merge";

const colors = ["#fff","#13a0cb","#f7c518"];

const OurWorkSection = () => {
  return (
    <div className="relative">
      <section className="relative bg-[url('/images/newpage/Asset_5.png')] bg-no-repeat bg-cover">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mt-6 mb-6">
            <button
              className="w-[180px] border-white mb-3 border-spacing-3 border-4 m-auto bg-[#13a0cb] text-sm
              font-asmaa px-4 py-1 text-white
              rounded-3xl shadow-lg 
              transform transition duration-300 ease-in-out
              hover:scale-105 hover:bg-yellowGold-500"
            >
              اعمالنا المميزة
            </button>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-1 px-2">
            {[
              // First Line
              { Icon: icon6, label: "قسم أعمال الإعلانات"},
              { Icon: icon5, label: "قسم أعمال التسويق"},
              { Icon: icon4, label: "قسم أعمال التصميم"},
              { Icon: icon3, label: "قسم أعمال المونتاج"},
              { Icon: icon2, label: "قسم أعمال التصوير"},
              { Icon: icon1, label: "قسم أعمال الموشن"},
              // Second Line
              { Icon: icon11, label: "أعمال التعليق الصوتي"},
              { Icon: icon12, label: "أعمال قسم البرمجة"},
              { Icon: icon9, label: "أعمال كتابة المحتوى"},
              { Icon: icon10, label: "أعمال قسم الطباعة"},
              { Icon: icon7, label: "أعمال ادارة اليوتيوب"},
              { Icon: icon8, label: "أعمال سوشيال ميديا"},
            ].map(({ Icon, label }, index) => {
              const t = index % 2 == 0;
              const color0 = t ? colors[1] : colors[0];
              const color1 = t ? colors[0] : colors[1];
              const yallow = t ? colors[0] : colors[2];
              const top = t ? "relative -top-2" : "";
              console.info("color0 => " , color0);
              return (
                <div key={index} className={`flex flex-col justify-center items-center text-white ${top} mb-4`}>
                  <div style={{
                    backgroundColor : color0
                  }} className={twMerge(`flex items-center justify-center w-[55px] h-[55px] rounded-full`)}>
                    <Image src={Icon} width={25} height={25} alt={label} className="text-white" />
                  </div>
                  <p className="text-center">
                    <span className={`text-xs font-bold text-[${yallow}]`}>{label.substring(0,label.lastIndexOf(" "))}</span>
                    <span style={{color:color1,backgroundColor:color0}} className={`block mt-1 text-xs  p-1 rounded`}>
                      {label.split(" ").slice(-1)} 
                    </span>
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkSection;
