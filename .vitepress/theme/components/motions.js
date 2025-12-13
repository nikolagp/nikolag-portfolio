export const motionFadeUp = {
  initial: {
    opacity: 0,
    y: 200,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1000,
    },
  },
};

export const motionFadeIn = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 3000,
    },
  },
};
