"use client";;
import React from "react";
import NavbarLink from "./link";
import { LuHouse } from "react-icons/lu";

const Navbar: React.FC = () => {
  return (
    <nav className="pt-2 absolute z-10">
      <div className="mx-auto sm:px-6 lg:px-8 relative">
        <div className="flex relative -top-1 items-center">
          <NavbarLink href="/" text={<LuHouse size={16} />} />
          <NavbarLink href="/services" text="خدماتنا" />
          <NavbarLink href="/projects" text="أعمالنا" />
          <NavbarLink href="/blogs" text="مدونات" />
          <NavbarLink href="/about-us" text="من نحن" />
          <NavbarLink
            href="/contact"
            className="hidden mobile-lg:block"
            text="تواصل معنا"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
