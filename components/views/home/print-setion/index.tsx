import Image from "next/image";

const PrintSection = () => {
  return (
    <section className="mt-4 relative bg-[url(/images/print-bg.png)] bg-no-repeat bg-cover h-[80vh] flex flex-col justify-center print-before-item">
      <div className="relative z-20 max-w-lg mx-auto px-4 py-2 flex flex-col items-center text-center">
        <h1 className="text-3xl mb-4 font-bold font-asmaa text-[#f7c518]">إيابا للطباعة</h1>
        <p className="mb-6 text-white font-asmaa">
          فريقنا المبدع جاهز لمساعدتك على التميز في عالم التواصل الاجتماعي
          ويوفر لك حلولًا متكاملة تشمل التصميم الجرافيكي، التصوير الاحترافي،
          الموشن والسوق الرقمي، لتشجيع محتواك والإستراتيجيات المبتكرة،
          وتساعد في إظهار صورتك الرقمية وجذب جمهورك المستهدف.
        </p>
        <button
          className="w-[180px] border-white border-spacing-3 border-4 m-auto bg-[#f7c518] text-sm
          font-asmaa px-4 py-1 
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
            width={150}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </section>);
};

export default PrintSection;
