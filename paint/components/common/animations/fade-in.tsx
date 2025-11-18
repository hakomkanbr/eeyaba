'use client';
import React from 'react';
import { motion } from 'framer-motion';

export function AnimationFadeIn({
  children,
  className,
  isActive,
}: {
  children: React.ReactNode;
  className?: string;
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.5,
      }}
      transition={{
        ease: 'linear',
        duration: 1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
