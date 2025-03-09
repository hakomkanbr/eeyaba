import Image from "next/image";

const PrintSection = () => {
  return (
    <div className="mt-0 relative ">
      <div className="absolute inset-0 block sm:hidden  z-10   ">
        <Image
          src="/images/home_page_left_c.svg"
          alt="background"
          className="absolute top-[50px]  left-0"
          width={55}
          height={10}
        />
        <Image
          src="/images/home_page_right-c.svg"
          alt="background"
          className="absolute top-[9px] -right-8"
          width={210}
          height={300}
        />
      </div>
      <section className=" mt-4 relative bg-[url(/images/print-bg.png)] bg-no-repeat bg-cover h-[100vh] flex flex-col justify-center">
        <div className="relative z-20 max-w-lg mx-auto px-4 py-2 flex flex-col items-center text-center">
          <h1 className="text-3xl mb-4 font-bold font-asmaa text-yellowGold-500 relative">
            إيابا للطباعة
            <div
              className="absolute left-0 right-0 bottom-[-6px]
              shadow-xl mx-auto h-[3px] w-1/2 rounded"
              style={{
                background: "linear-gradient(90deg, #4796b4, #FFFFFF, #4796b4)",
              }}
            />
          </h1>
          <p className="mb-6 text-white font-asmaa">
            فريقنا المبدع جاهز لمساعدتك على التميز في عالم التواصل الاجتماعي
            ويوفر لك حلولًا متكاملة تشمل التصميم الجرافيكي، التصوير الاحترافي،
            الموشن والسوق الرقمي، لتشجيع محتواك والإستراتيجيات المبتكرة، وتساعد
            في إظهار صورتك الرقمية وجذب جمهورك المستهدف.
          </p>
          <button
            className="w-[180px] border-white border-spacing-3 border-4 m-auto bg-yellowGold-500 text-sm
            font-asmaa px-4 py-1 
            rounded-3xl shadow-lg 
            transform transition duration-300 ease-in-out
            hover:scale-105 hover:bg-[#0e85a1]"
          >
            خدمات إيابا للطباعة
          </button>
          <div className="mt-3">
            <Image
              src="/images/home_page_4.svg"
              alt="left image"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintSection;
