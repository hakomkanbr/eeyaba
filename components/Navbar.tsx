"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#1e1e1d] pt-4" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-nowrap  justify-between  sm:justify-start items-center overflow-x-auto mx-4">
          <Link href="/services">
            <span
              className={`relative block px-4 py-2
                 font-bold text-white bg-[#13a0cb]
                 rounded-tl-3xl rounded-tr-3xl transition-all duration-300 
                 text-right
              ${
                pathname === "/services"
                  ? "bg-[#13a0cb] text-white"
                  : "hover:bg-white hover:text-black"
              }`}
              style={{ marginRight: "2px", marginLeft: "2px" }}
            >
              بيت
            </span>
          </Link>
          <Link href="/services">
            <span
              className={`relative block px-4 py-2
                 font-bold text-black bg-white 
                 rounded-tl-3xl rounded-tr-3xl transition-all duration-300 
                 text-right
              ${
                pathname === "/services"
                  ? "bg-[#13a0cb] text-white"
                  : "hover:bg-[#13a0cb] hover:text-white"
              }`}
              style={{ marginRight: "2px", marginLeft: "2px" }}
            >
              خدماتنا
            </span>
          </Link>
          <Link href="/projects">
            <span
              className={`relative block px-4 py-2 font-bold text-black bg-white rounded-tl-3xl rounded-tr-3xl transition-all duration-300 text-right
              ${
                pathname === "/projects"
                  ? "bg-[#13a0cb] text-white"
                  : "hover:bg-[#13a0cb] hover:text-white"
              }`}
              style={{ marginRight: "2px", marginLeft: "2px" }}
            >
              أعمالنا
            </span>
          </Link>
          <Link href="/blogs">
            <span
              className={`relative block px-4 py-2 font-bold text-black bg-white rounded-tl-3xl rounded-tr-3xl transition-all duration-300 text-right
              ${
                pathname === "/blogs"
                  ? "bg-[#13a0cb] text-white"
                  : "hover:bg-[#13a0cb] hover:text-white"
              }`}
              style={{ marginRight: "2px", marginLeft: "2px" }}
            >
              مدونات
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
