export const baseAimation = {
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
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

  hidden: { ...baseAimation.hidden, scale: 1.4 },
};

// export const aimationRotate = {
//   visible: {
//     ...baseAimation.visible,
//     // rotate: 0,
//     rotate: -50,
//   },

//   hidden: { ...baseAimation.hidden, rotate: -50 },
// };

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
    clipPath: "inset(-50px 0px 0px 0px)",
  },

  // push: { scale: 0.9 },
};

// const variantsInner = {
//   visible: {
//     opacity: 1,
//     // x: 0,
//     transition: {
//       ease: "easeOut",

//       // delay: 0.1,
//       when: "beforeChildren",
//       staggerChildren: 0.1,
//     },
//     // transition: {
//     //   type: "spring",
//     //   bounce: 0.4,
//     //   delay: 0.3,
//     // },
//   },

//   hidden: { opacity: 0 },
// };

// export const variantsContent = {
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       // delay: 0.1,

//       when: "beforeChildren",
//       staggerChildren: 0.1,
//     },
//   },

//   hidden: { opacity: 0, y: 50 },
// };

// const variantsButton = {
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//   },

//   hidden: { opacity: 0, y: 50, scale: 1.4 },
// };

// const variantsChild = {
//   visible: {
//     opacity: 1,
//     y: 0,
//   },

//   hidden: { opacity: 0, y: 50 },
// };

// const variantsImage = {
//   visible: {
//     opacity: 1,
//     rotate: 0,
//   },

//   hidden: { opacity: 0, rotate: -50 },
// };

// const variantsAccordion = {
//   visible: {
//     opacity: 1,
//     y: 0,
//     // x: 0,
//     // transition: {
//     //   ease: "easeOut",

//     //   // delay: 0.1,
//     //   when: "beforeChildren",
//     //   staggerChildren: 0.1,
//     // },
//     // transition: {
//     //   type: "spring",
//     //   bounce: 0.4,
//     //   delay: 0.3,
//     // },
//   },

//   hidden: { opacity: 0, y: -50 },
// };

// const variantsCardAnimate = {
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       delay: 0.3 + i * 0.1,
//     },
//   }),

//   hidden: { opacity: 0, y: 50 },
// };

// const variantsChild = {
//   visible: {
//     opacity: 1,
//     scale: 1,
//   },

//   hidden: { opacity: 0, scale: 0.8 },
// };

// const varinatsImageContainer = {
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       // delay: 0.1,

//       when: "beforeChildren",
//       staggerChildren: 0.1,
//     },
//   },

//   hidden: { opacity: 0, y: 250 },
// };

// const variantsTitle = {
//   visible: {
//     opacity: 1,
//     y: 0,
//   },

//   hidden: { opacity: 0, y: 250 },
// };

// const variantsImage = {
//   visible: {
//     opacity: 1,
//     x: 0,
//   },

//   hidden: { opacity: 0, x: 250 },
// };

// const variantsText = {
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       // ease: "easeOut",
//     },
//   },

//   hidden: { opacity: 0, x: -90 },
// };

// const variantsImage = {
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       // ease: "easeOut",
//     },
//   },

//   hidden: { opacity: 0, scale: 0.8 },
// };

// const variantsTitle = {
//   visible: {
//     opacity: 1,
//     x: 0,
//     // transition: {
//     //   type: "spring",
//     //   bounce: 0.4,
//     //   delay: 0.3,
//     // },
//   },

//   hidden: { opacity: 0, x: 50 },
// };
