import Image from "next/image";

const MediaSection = () => {
  return (
    <section className="mt-4 relative">
      <div className="block sm:hidden">
        <Image
          src="/images/home_page_5.svg"
          alt="backgroundbotton"
          width={500}
          height={300}
        />
      </div>
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
      <div className="py-1">
        <div className="relative z-20 max-w-lg mx-auto px-4 py-2 flex flex-col items-center text-center">
          <h1 className="text-3xl mb-4 font-bold font-asmaa text-[#f7c518]">إيابا ميديا</h1>
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
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>);
};

export default MediaSection;
