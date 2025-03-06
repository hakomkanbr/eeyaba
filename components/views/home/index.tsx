"use client";

import React from 'react';
import { motion, MotionStyle, useScroll, useTransform } from 'framer-motion';
import LogoSearchSection from './logo-search-section';
import SecoudSection from './second-section';
import PrintSection from './print-setion';
import MediaSection from './media-section';
import ProgramingSection from './programing-setion';

const ParallaxScroll = () => {
  // استخدام useScroll لتحصل على بيانات التمرير
  const { scrollYProgress } = useScroll();

  // استخدام useTransform لتحويل بيانات التمرير إلى تأثير حركة
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);  // الطبقة الأولى تتحرك
  const y2 = useTransform(scrollYProgress, [0, 1], [100, 0]);  // الطبقة الثانية تتحرك فوق الأولى
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);  // الطبقة الثالثة تتحرك
  const y4 = useTransform(scrollYProgress, [0, 1], [100, 0]);  // الطبقة الرابعة تتحرك

  return (
    <div style={{ position: 'relative' ,height : "400vh" }}> {/* زيادة الطول لتمكين التمرير */}
      {/* الطبقة 1 */}
      <motion.div
        style={{ ...styles.layer, y: y1, zIndex: 1 }}  // دمج الأنماط هنا
      >
        <div style={styles.innerLayer1}>
          <LogoSearchSection />
          <SecoudSection />
        </div>
      </motion.div>

      {/* الطبقة 2 */}
      <motion.div
        style={{ ...styles.layer, y: y2, zIndex: 2 }}  // دمج الأنماط هنا
      >
        <div style={styles.innerLayer2}>
          <MediaSection />
        </div>
      </motion.div>

      {/* الطبقة 3 */}
      <motion.div
        style={{ ...styles.layer, y: y3, zIndex: 3 }}  // دمج الأنماط هنا
      >
        <div style={styles.innerLayer2}>
          <PrintSection />
        </div>
      </motion.div>

      {/* الطبقة 4 */}
      <motion.div
        style={{ ...styles.layer, y: y4, zIndex: 4 }}  // دمج الأنماط هنا
      >
        <div style={styles.innerLayer2}>
          <ProgramingSection />
        </div>
      </motion.div>
    </div>
  );
};

const styles = {
  layer: {
    position: 'absolute',  // نستخدم absolute لجعل الطبقات تظهر فوق بعضها
    width: '100%',
    height: '100vh',  // كل طبقة تأخذ نفس الارتفاع
  } as MotionStyle,
  innerLayer1: {
  },
  innerLayer2: {
  },
};

export default ParallaxScroll;
