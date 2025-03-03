"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NavbarLink from "./link";
import { LuHouse } from "react-icons/lu";

const Navbar: React.FC = () => {
  return (
    <nav className="pt-2">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
        <div className="flex">
          <NavbarLink href="/" text={<LuHouse size={24}/>}/>
          <NavbarLink href="/services" text="خدماتنا"/>
          <NavbarLink href="/projects" text="أعمالنا"/>
          <NavbarLink href="/blogs" text="مدونات"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
