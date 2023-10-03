export const DURATION = 0.5;
export const EASE = 'easeOut';
export const DISTANCE = 100;

export const onLoadProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
};

export const framerConfig = {
  appear: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0, x: DISTANCE },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -DISTANCE },
    visible: { opacity: 1, x: 0 },
  },
  up: {
    hidden: { opacity: 0, y: DISTANCE },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -DISTANCE },
    visible: { opacity: 1, y: 0 },
  },
  delay0: {
    duration: DURATION,
    delay: 0,
    ease: EASE,
  },
  delay1: {
    duration: DURATION,
    delay: 0.1,
    ease: EASE,
  },
  delay2: {
    duration: DURATION,
    delay: 0.2,
    ease: EASE,
  },
  delay3: {
    duration: DURATION,
    delay: 0.3,
    ease: EASE,
  },
  delay4: {
    duration: DURATION,
    delay: 0.4,
    ease: EASE,
  },
  delayIndex: (index: number) => ({
    duration: DURATION,
    delay: 0.1 * index,
    ease: EASE,
  }),
};
