'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { onLoadProps } from '@/config/framer-motion';

interface FramerMotionWrapperProps extends HTMLMotionProps<'div'> {
  className?: string;
  children: React.ReactNode;
  variants: {
    hidden: {
      opacity: number;
      x?: number;
    };
    visible: {
      opacity: number;
      x?: number;
    };
  };
  transition?: {
    duration: number;
    delay: number;
    ease: string;
  };
}

const FramerMotionWrapper = ({
  className,
  children,
  variants,
  transition,
}: FramerMotionWrapperProps) => {
  return (
    <motion.div
      {...onLoadProps}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FramerMotionWrapper;
