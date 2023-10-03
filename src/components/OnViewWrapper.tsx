'use client';

import {
  BASE_DELAY,
  DURATION,
  EASE,
  framerConfig,
} from '@/config/framer-motion';
import { motion } from 'framer-motion';
import React from 'react';

interface OnViewWrapperProps {
  className?: string;
  children?: React.ReactNode;
  variants: 'up' | 'down' | 'left' | 'right' | 'appear';
  delay: '0.0' | '0.1' | '0.2' | '0.3' | '0.4' | '0.5';
}
const initialConfig = {
  up: framerConfig.up,
  down: framerConfig.down,
  left: framerConfig.left,
  right: framerConfig.right,
  appear: framerConfig.appear,
};

const OnViewWrapper = ({
  className,
  children,
  variants,
  delay,
}: OnViewWrapperProps) => {
  const selectedInitial = initialConfig[variants];

  return (
    <motion.div
      initial={selectedInitial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: Number(delay) + BASE_DELAY,
        duration: DURATION,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default OnViewWrapper;
