"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function RocketAnimation() {
    const { ref, inView } = useInView({
        triggerOnce: true,  // للتشغيل مرة واحدة عند دخول الطبقة
        threshold: 0.5,     // تحديد نسبة الطبقة التي يجب أن تكون في العرض لكي يتم تشغيل الأنيميشن
      });

    return (<>
        <motion.div
            // initial={{ opacity: 0, y: 400 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 1 }}
            style={{
                width: "100%",
                height: 648
            }}

            ref={ref}
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 200 }}
            transition={{ duration: 2 }}
        >
            {/* <div className="relative w-full h-[648px]"> */}
            <Image src="/images/new/rocket.png" alt="Rocket" fill />
            {/* </div> */}
        </motion.div>

    </>);
}

