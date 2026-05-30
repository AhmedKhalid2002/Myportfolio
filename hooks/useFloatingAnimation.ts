import { Variants } from 'framer-motion';

export const useFloatingAnimation = () => {
  // animation طفو أفقي بسيط
  const floatingVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  // animation طفو مع دوران خفيف
  const floatingRotateVariants: Variants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -25, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  // animation طفو بحركة أفقية
  const floatingXVariants: Variants = {
    initial: { y: 0, x: 0 },
    animate: {
      y: [0, -15, 0],
      x: [0, 10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  // animation طفو بطيء وناعم جداً
  const slowFloatingVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  // animation طفو سريع
  const fastFloatingVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  return {
    floatingVariants,
    floatingRotateVariants,
    floatingXVariants,
    slowFloatingVariants,
    fastFloatingVariants,
  };
};
