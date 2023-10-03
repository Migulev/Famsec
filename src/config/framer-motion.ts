export const DURATION = 0.5;
export const EASE = 'easeOut';
export const DISTANCE = 100;
export const BASE_DELAY = 0.2;

export const framerConfig = {
  appear: { opacity: 0 },
  left: { opacity: 0, x: DISTANCE },
  right: { opacity: 0, x: -DISTANCE },
  up: { opacity: 0, y: DISTANCE },
  down: { opacity: 0, y: -DISTANCE },
  delayIndex: (index: number) => ({
    duration: DURATION,
    delay: BASE_DELAY + 0.1 * index,
    ease: EASE,
  }),
};
