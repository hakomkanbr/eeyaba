"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RocketAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-blue-300 to-white">
      {/* الصاروخ */}
      <motion.div
        // className="fixed bottom-0 left-1/2 transform -translate-x-1/2"
        style={{ y: -1000 * 0.7 }}
      >
        <Image src="/images/new/rocket.png" alt="Rocket" width={100} height={200} />
      </motion.div>

      {/* محتوى الصفحة */}
      <div className="h-[150vh]"></div>
    </div>
  );
}

