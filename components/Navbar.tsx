"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#1e1e1d] pt-4" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-end space-x-4">
          <Link href="/services">
            <span
              className={`ml-4 relative block px-5 py-2
                 font-bold text-black bg-white 
                 rounded-tl-3xl rounded-tr-3xl transition-all duration-300 
                 text-right
              ${
                pathname === "/services"
                  ? "bg-[#13a0cb] text-white"
                  : "hover:bg-[#13a0cb] hover:text-white"
              }`}
            >
              خدماتنا
            </span>
          </Link>

          <Link href="/projects">
            <span
              className={`relative block px-5 py-2 font-bold text-black bg-white rounded-tl-3xl rounded-tr-3xl transition-all duration-300 text-right
              ${
                pathname === "/projects"
                  ? "bg-[#13a0cb] text-white"
                  : "hover:bg-[#13a0cb] hover:text-white"
              }`}
            >
              أعمالنا
            </span>
          </Link>

          <Link href="/blogs">
            <span
              className={`relative block px-5 py-2 font-bold text-black bg-white rounded-tl-3xl rounded-tr-3xl transition-all duration-300 text-right
              ${
                pathname === "/blogs"
                  ? "bg-[#13a0cb] text-white"
                  : "hover:bg-[#13a0cb] hover:text-white"
              }`}
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
