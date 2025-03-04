"use client";
import React from "react";
import NavbarLink from "./link";
import { LuHouse } from "react-icons/lu";
import { GoSidebarCollapse } from "react-icons/go";

const Navbar: React.FC = () => {
  return (
    <nav className="pt-2">
      <div className="mx-auto sm:px-6 lg:px-8 ">
        <div className="flex">
          <NavbarLink href="/" text={<LuHouse size={16} />} />
          <NavbarLink href="/services" text="خدماتنا" />
          <NavbarLink href="/projects" text="أعمالنا" />
          <NavbarLink href="/blogs" text="مدونات" />
          <NavbarLink href="/about-us" text="من نحن"/>
          <NavbarLink href="/about-us" className="hidden mobile-lg:block" text="تواصل معنا"/>
          <button
            className="w-[30px] mr-[1px] mobile-lg:hidden rounded-tl-2xl rounded-tr-2xl flex justify-center items-center bg-[#fff] text-lg
          font-asmaa shadow-lg 
          transform transition duration-300 ease-in-out
          hover:scale-105 hover:bg-[#0e85a1]"
          >
            <GoSidebarCollapse size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
