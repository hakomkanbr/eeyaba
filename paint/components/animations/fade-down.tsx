'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function AnimationFadeDown({
  children,
  className,
  isActive = false,
  enableScroll = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  enableScroll?: boolean;
  id?: string;
}) {
  const [isScroll, setIsScroll] = useState<boolean>(isActive);
  useEffect(() => {
    if (enableScroll && id) {
      var element = document.getElementById(id);
      if (element) {
        element.addEventListener('mouseenter', function (e) {
          setIsScroll(true);
        });
      }
    }
  }, []);
  useEffect(() => {
    setIsScroll(isActive);
  }, [isActive]);
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: isScroll ? 1 : 0, y: isScroll ? 0 : -200 }}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
