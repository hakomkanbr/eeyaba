import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const NavbarLink: React.FC<{ href: string, text: React.ReactNode , className?: string }> = ({ href, text,className ="" }) => {
    return (
        <Link href={`/${href}`}>
            <span
                className={twMerge(`relative block text-xs px-3 py-[0.4rem]
         font-bold text-[#333] bg-[#fff]
         rounded-tl-2xl rounded-tr-2xl transition-all duration-300 hover:bg-white hover:text-black` , className)}
                style={{ marginRight: "1px", marginLeft: "1px" }}
            >
                {text}
            </span>
        </Link>
    );
};

export default NavbarLink;
