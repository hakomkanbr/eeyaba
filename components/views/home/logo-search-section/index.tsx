import Image from "next/image";

const LogoSearchSection = () => {
  return (
    <section className="relative">
      <div className="w-full h-[50px] -z-10">
        <Image
          src="/images/hero-bg.png"
          alt="backgroundbotton"
          fill
        />
      </div>
      <div className="flex flex-col justify-center items-end gap-5 h-full z-10 relative pl-8 pb-6">
        <Image
          src="/images/home_page_4.svg"
          alt="left image"
          width={150}
          height={50}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default LogoSearchSection;
