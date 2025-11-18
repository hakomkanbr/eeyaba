'use client';
import React from 'react';
import { motion } from 'framer-motion';
import generateRandom from '@/helper/random-number';

const props: any = (isActive: boolean) => {
  return {
    initial: {
      x: generateRandom(-250, 500),
      y: generateRandom(-250, 500),
      opacity: 0,
    },
    animate: {
      x: isActive ? 0 : generateRandom(-250, 500),
      y: isActive ? 0 : generateRandom(-250, 500),
      opacity: isActive ? 1 : 0,
      type: 'spring',
    },
    exit: {
      x: isActive ? 0 : generateRandom(-250, 500),
      y: isActive ? 0 : generateRandom(-250, 500),
      opacity: isActive ? 1 : 0,
    },
    transition: {
      ease: 'linear',
      duration: 0.3,
    },
    layout: true,
  };
};
export function AnimationRandom({
  children,
  className,
  isActive,
}: {
  children: React.ReactNode;
  className?: string;
  isActive: boolean;
}) {
  return (
    <motion.div {...props(isActive)} className={className}>
      {children}
    </motion.div>
  );
}
