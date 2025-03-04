import Image from "next/image";

const ProgramingSection = () => {
  return (
    <section className="mt-4 relative">
      <div className="py-1">
        <div className="relative z-20 max-w-lg mx-auto px-4 py-2 flex flex-col items-center text-center">
          <h1 className="text-3xl mb-4 font-bold font-asmaa text-[#f7c518]">إيابا للبرمجة</h1>
          <p className="mb-6 text-white font-asmaa">
            فريقنا المبدع جاهز لمساعدتك على التميز في عالم التواصل الاجتماعي
            ويوفر لك حلولًا متكاملة تشمل التصميم الجرافيكي، التصوير الاحترافي،
            الموشن والسوق الرقمي، لتشجيع محتواك والإستراتيجيات المبتكرة،
            وتساعد في إظهار صورتك الرقمية وجذب جمهورك المستهدف.
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
        </div>
      </div>
    </section>);
};

export default ProgramingSection;
