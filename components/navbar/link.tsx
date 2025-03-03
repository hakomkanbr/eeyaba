import React from "react";
import Link from "next/link";

const NavbarLink: React.FC<{ href: string, text: React.ReactNode }> = ({ href, text }) => {
    return (
        <Link href={`/${href}`}>
            <span
                className={`relative block px-4 py-2
         font-bold text-white bg-[#13a0cb]
         rounded-tl-3xl rounded-tr-3xl transition-all duration-300 
         text-right hover:bg-white hover:text-black`}
                style={{ marginRight: "2px", marginLeft: "2px" }}
            >
                {text}
            </span>
        </Link>
    );
};

export default NavbarLink;
