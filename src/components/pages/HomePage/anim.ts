export const baseAimation = {
  visible: {
    opacity: 1,
    transition: {
      ease: [0.42, 0, 0.58, 1],
      duration: 0.7,
    },
  },
  hidden: { opacity: 0 },
};

export const baseAimationWithChildren = {
  visible: {
    opacity: 1,
    transition: {
      ...baseAimation.visible.transition,
      duration: 0,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: { opacity: 1 },
};

export const aimationSlideLeft = {
  visible: {
    ...baseAimation.visible,
    x: 0,
  },

  hidden: { ...baseAimation.hidden, x: 50 },
};

export const aimationSlideUp = {
  visible: {
    ...baseAimation.visible,
    y: 0,
  },

  hidden: { ...baseAimation.hidden, y: 50 },
};

export const aimationSlideUpWithChildren = {
  visible: {
    ...baseAimationWithChildren.visible,
    y: 0,
  },

  hidden: { ...baseAimationWithChildren.hidden, y: 50 },
};

export const aimationSlideDown = {
  visible: {
    ...baseAimation.visible,
    y: 0,
  },

  hidden: { ...baseAimation.hidden, y: -50 },
};

export const aimationScaleDown = {
  visible: {
    ...baseAimation.visible,
    scale: 1,
  },

  hidden: { ...baseAimation.hidden, scale: 0.8 },
};

export const aimationScaleUp = {
  visible: {
    ...baseAimation.visible,
    scale: 1,
  },

  hidden: { ...baseAimation.hidden, scale: 1.2 },
};

export const aimationRotate = {
  visible: {
    ...baseAimation.visible,
    rotate: 0,
  },

  hidden: { ...baseAimation.hidden, rotate: -50 },
};

export const aimationButton = {
  visible: {
    ...aimationScaleUp.visible,
    ...aimationSlideUp.visible,
  },

  hidden: {
    ...aimationScaleUp.hidden,
    ...aimationSlideUp.hidden,
    clipPath: 'inset(-50px 0px 0px 0px)',
  },
};
