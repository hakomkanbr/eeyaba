import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const LogoSearchSection = () => {
  return (
    <section >
      <div className="w-full absolute -z-10 -top-1 h-[120px]">
        <Image
          src="/images/hero-bg.png"
          alt="backgroundbotton"
          fill
        />
      </div>
      <div className="flex justify-end items-end pl-4 h-full gap-10">
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
