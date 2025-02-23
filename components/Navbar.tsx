"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#1e1e1d] py-4" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Flex yönlendirmesi değiştirildi, böylece mobil görünümde alt alta sıralanır */}
        <div className="flex flex-wrap justify-center md:space-x-2 space-x-0 ">
          <Link href="/" className="block sm:hidden mb-2">
            <span
              className={`relative block px-5 py-2 font-bold text-white transition-all duration-300 text-right
                ${
                  pathname === "/"
                    ? "bg-[#13a0cb] clip-path-custom"
                    : "bg-white text-black rounded-tl-2xl rounded-tr-2xl hover:bg-blue-500 hover:text-white"
                }`}
            >
              الرئيسية
            </span>
          </Link>

          {/* Diğer bağlantılar */}
          <Link href="/">
            <span
              className={`relative hidden sm:block px-5 py-2 font-bold text-white transition-all duration-300 text-right
                ${
                  pathname === "/"
                    ? "bg-[#13a0cb] clip-path-custom"
                    : "bg-white text-black rounded-tl-2xl rounded-tr-2xl hover:bg-blue-500 hover:text-white"
                }`}
            >
              الرئيسية
            </span>
          </Link>

          <Link href="/services">
            <span
              className={`relative block px-5 py-2 font-bold text-black bg-white rounded-tl-2xl rounded-tr-2xl transition-all duration-300 text-right
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
              className={`relative block px-5 py-2 font-bold text-black bg-white rounded-tl-2xl rounded-tr-2xl transition-all duration-300 text-right
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
              className={`relative block px-5 py-2 font-bold text-black bg-white rounded-tl-2xl rounded-tr-2xl transition-all duration-300 text-right
              ${
                pathname === "/blogs"
                  ? "bg-[#13a0cb] text-white"
                  : "hover:bg-[#13a0cb] hover:text-white"
              }`}
            >
              مدونات
            </span>
          </Link>

          <Link href="/about">
            <span
              className={`relative block px-5 py-2 font-bold text-black bg-white rounded-tl-2xl rounded-tr-2xl transition-all duration-300 text-right
              ${
                pathname === "/about"
                  ? "bg-[#13a0cb] text-white"
                  : "hover:bg-[#13a0cb] hover:text-white"
              }`}
            >
              من نحن
            </span>
          </Link>

          <Link href="/policy">
            <span
              className={`relative block px-5 py-2 font-bold text-black bg-white rounded-tl-2xl rounded-tr-2xl transition-all duration-300 text-right
              ${
                pathname === "/policy"
                  ? "bg-[#13a0cb] text-white"
                  : "hover:bg-[#13a0cb] hover:text-white"
              }`}
            >
              سياستنا
            </span>
          </Link>

          <Link href="/contact">
            <span
              className={`relative block px-5 py-2 font-bold text-black bg-white rounded-tl-2xl rounded-tr-2xl transition-all duration-300 text-right
              ${
                pathname === "/contact"
                  ? "bg-[#13a0cb] text-white"
                  : "hover:bg-[#13a0cb] hover:text-white"
              }`}
            >
              للتواصل
            </span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .clip-path-custom {
          clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);
          background-color: #13a0cb;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

{
  /* <div className="flex flex-wrap justify-center space-y-2 space-x-2 rtl:space-x-reverse md:space-y-0 md:space-x-2"> */
}
