'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface OnViewWrapperProps extends HTMLMotionProps<'div'> {
  className?: string;
  children?: React.ReactNode;
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

const onViewProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
};

const OnViewWrapper = ({
  className,
  children,
  variants,
  transition,
}: OnViewWrapperProps) => {
  return (
    <motion.div
      {...onViewProps}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default OnViewWrapper;
