import Image from "next/image";

const ProgramingSection = () => {
  return (
    <section className="mt-4 relative min-h-screen flex justify-center items-center  ">
      <div className=" inset-0 block sm:hidden z-20">
        <Image
          src="/images/programing--item.png"
          alt="background"
          className="absolute top-[-89px]"
          width={400}
          height={400}
        />
      </div>

      <div className=" inset-0 block sm:hidden z-20">
        <Image
          src="/images/new/Asset_5.png"
          alt="background"
          className="absolute top-[300px] left-12"
          width={350}
          height={300}
        />

        <Image
          src="/images/newpage/Asset_3.png"
          alt="background"
          className="absolute top-[-175px] left-0 "
          width={450}
          height={300}
        />
      </div>

      <div className="py-1">
        <div className="relative z-20 py-2 flex flex-col items-center text-center max-w-lg mx-auto px-4">
          <h1 className="text-3xl mb-4 font-bold font-asmaa text-[#f7c518]">
            إيابا للبرمجة
          </h1>
          <p className="mb-6 text-white font-asmaa">
            فريقنا المبدع جاهز لمساعدتك على التميز في عالم التواصل الاجتماعي
            ويوفر لك حلولًا متكاملة تشمل التصميم الجرافيكي، التصوير الاحترافي،
            الموشن والسوق الرقمي، لتشجيع محتواك والإستراتيجيات المبتكرة، وتساعد
            في إظهار صورتك الرقمية وجذب جمهورك المستهدف.
          </p>
          <button
            className="w-[180px] m-auto bg-[#13a0cb] text-white text-sm
           font-asmaa px-4 py-2 
           rounded-3xl shadow-lg 
           transform transition duration-300 ease-in-out
           hover:scale-105 hover:bg-[#0e85a1]"
          >
            خدمات إيابا ميديا
          </button>
          <div className="mt-3">
            <Image
              src="/images/home_page_4.svg"
              alt="left image"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
          {/* تعديل قسم الصاروخ */}
          <Image
            src="/images/new/rocket.png"
            alt="rocket background"
            className="absolute top-[300px] left-1/2 transform -translate-x-1/2"
            width={450}
            height={300}
          />
          <div className="relative pt-32">
            {" "}
            {/*  قللنا ارتفاع padding-top ليظهر النص بشكل أفضل */}
            <div className="flex flex-col items-center mt-4 z-10 relative">
              <span className="text-yellowGold-500 font-bold text-5xl mb-4 w-full text-center ">
                طور
              </span>
              <span className="text-white font-bold text-5xl mb-4 w-full text-center ">
                عملك
              </span>
              <span className="text-yellowGold-500 font-bold text-5xl mb-4 w-full text-center ">
                معنا
              </span>
            </div>
            <button
              className="mt-8 w-[180px] border-white border-spacing-3 border-4 m-auto bg-yellowGold-500 text-sm
    font-asmaa px-4 py-1 
    rounded-3xl shadow-lg 
    transform transition duration-300 ease-in-out
    hover:scale-105 hover:bg-[#0e85a1]"
            >
              أراء وتقيم عملائنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramingSection;
